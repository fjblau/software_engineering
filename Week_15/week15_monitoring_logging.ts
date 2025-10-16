/**
 * Week 15: Monitoring, Logging & Observability
 * ============================================
 * 
 * Production-ready monitoring and logging:
 * - Structured logging with Winston
 * - Error tracking with Sentry
 * - Application Performance Monitoring (APM)
 * - Health checks and readiness probes
 * - Metrics and dashboards
 * - Alerting strategies
 * 
 * Install: npm install winston sentry @sentry/node prom-client
 */

import express, { Request, Response, NextFunction } from 'express';
import * as Sentry from '@sentry/node';
import * as winston from 'winston';
import prometheus from 'prom-client';

// ============================================================================
// 1. STRUCTURED LOGGING WITH WINSTON
// ============================================================================

/**
 * Winston logger configuration
 */
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        // Add timestamp
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        // Add service name
        winston.format.defaultMeta({ service: 'user-service' }),
        // Handle errors with stack traces
        winston.format.errors({ stack: true }),
        // Format for readability
        winston.format.splat(),
        // JSON format for machine parsing
        winston.format.json()
    ),
    transports: [
        // Error logs
        new winston.transports.File({ 
            filename: 'logs/error.log', 
            level: 'error',
            maxsize: 5242880,  // 5MB
            maxFiles: 5
        }),
        // Combined logs
        new winston.transports.File({ 
            filename: 'logs/combined.log',
            maxsize: 5242880,
            maxFiles: 10
        })
    ]
});

/**
 * Add console transport in development
 */
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(({ timestamp, level, message, ...meta }) => {
                const metaString = Object.keys(meta).length 
                    ? JSON.stringify(meta, null, 2) 
                    : '';
                return `${timestamp} [${level}]: ${message} ${metaString}`;
            })
        )
    }));
}

/**
 * Structured logging helper
 */
class StructuredLogger {
    static info(message: string, metadata?: Record<string, any>) {
        logger.info(message, { ...metadata, level: 'INFO' });
    }

    static warn(message: string, metadata?: Record<string, any>) {
        logger.warn(message, { ...metadata, level: 'WARN' });
    }

    static error(message: string, error?: Error, metadata?: Record<string, any>) {
        logger.error(message, {
            ...metadata,
            level: 'ERROR',
            errorName: error?.name,
            errorMessage: error?.message,
            stack: error?.stack
        });
    }

    static debug(message: string, metadata?: Record<string, any>) {
        logger.debug(message, { ...metadata, level: 'DEBUG' });
    }

    /**
     * Log API request/response
     */
    static logRequest(req: Request, statusCode: number, duration: number) {
        this.info('HTTP Request', {
            method: req.method,
            path: req.path,
            statusCode,
            duration: `${duration}ms`,
            userId: (req as any).userId,
            ipAddress: req.ip,
            userAgent: req.get('user-agent')
        });
    }

    /**
     * Log database query
     */
    static logQuery(query: string, duration: number, rows?: number) {
        this.debug('Database Query', {
            query: query.substring(0, 200),  // Truncate long queries
            duration: `${duration}ms`,
            rowsAffected: rows
        });
    }

    /**
     * Log business event
     */
    static logEvent(eventType: string, eventData: Record<string, any>) {
        this.info(`Event: ${eventType}`, {
            eventType,
            ...eventData,
            timestamp: new Date().toISOString()
        });
    }
}

// ============================================================================
// 2. ERROR TRACKING WITH SENTRY
// ============================================================================

/**
 * Sentry initialization
 */
function initSentry(app: express.Application) {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        tracesSampleRate: 1.0,
        integrations: [
            // Enable automatic Express instrumentation
            new Sentry.Integrations.Express({
                app: true,
                request: true,
                serverName: true,
                transaction: 'path'
            }),
            // Enable database integration
            new Sentry.Integrations.OnUncaughtException(),
            new Sentry.Integrations.OnUnhandledRejection()
        ],
        beforeSend(event, hint) {
            // Filter out noise
            if (event.exception) {
                const exception = event.exception.values?.[0];
                
                // Skip 404 errors
                if (exception?.type === 'NotFoundError') {
                    return null;
                }
            }
            return event;
        }
    });

    // Request handler must be first
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());

    return Sentry;
}

/**
 * Error handler for Sentry
 */
function setupSentryErrorHandler(app: express.Application) {
    app.use(Sentry.Handlers.errorHandler({
        shouldHandleError(error) {
            // Only report errors in production
            if (process.env.NODE_ENV !== 'production') {
                return false;
            }

            // Don't report client errors (4xx)
            if (error.statusCode && error.statusCode < 500) {
                return false;
            }

            return true;
        }
    }));
}

/**
 * Capture custom exceptions
 */
async function riskierOperation() {
    try {
        // Perform some risky operation
        throw new Error('Something went wrong');
    } catch (error) {
        Sentry.captureException(error, {
            tags: {
                operation: 'risky_operation',
                severity: 'high'
            },
            extra: {
                userId: 'user123',
                timestamp: new Date()
            }
        });
        throw error;
    }
}

/**
 * Track messages (breadcrumbs)
 */
function trackUserAction(action: string, data: Record<string, any>) {
    Sentry.captureMessage(`User action: ${action}`, 'info');
    Sentry.addBreadcrumb({
        category: 'user-action',
        message: action,
        level: 'info',
        data
    });
}

// ============================================================================
// 3. APPLICATION PERFORMANCE MONITORING (APM)
// ============================================================================

/**
 * Request timing middleware
 */
function timingMiddleware(req: Request, res: Response, next: NextFunction) {
    const startTime = performance.now();

    // Wrap response send
    const originalSend = res.send;
    res.send = function(data) {
        const duration = performance.now() - startTime;
        
        // Log timing
        StructuredLogger.logRequest(req, res.statusCode, duration);

        // Capture slow requests
        if (duration > 1000) {
            StructuredLogger.warn(`Slow request detected: ${duration}ms`, {
                method: req.method,
                path: req.path
            });
        }

        return originalSend.call(this, data);
    };

    next();
}

/**
 * Database query performance tracking
 */
class QueryPerformanceTracker {
    private slowQueryThreshold = 100;  // ms

    trackQuery(query: string, duration: number, rows: number) {
        StructuredLogger.logQuery(query, duration, rows);

        if (duration > this.slowQueryThreshold) {
            StructuredLogger.warn(`Slow query detected: ${duration}ms`, {
                query: query.substring(0, 100),
                duration,
                rows
            });

            // Send to APM service
            this.reportSlowQuery(query, duration);
        }
    }

    private reportSlowQuery(query: string, duration: number) {
        // Send to APM service like New Relic, DataDog, etc.
        console.log(`[APM] Slow query: ${query.substring(0, 50)}... (${duration}ms)`);
    }
}

// ============================================================================
// 4. HEALTH CHECKS
// ============================================================================

/**
 * Comprehensive health check endpoint
 */
interface HealthCheckResult {
    status: 'healthy' | 'degraded' | 'unhealthy';
    timestamp: string;
    uptime: number;
    checks: {
        database: HealthStatus;
        redis: HealthStatus;
        externalApi: HealthStatus;
        diskSpace: HealthStatus;
        memory: HealthStatus;
    };
    version: string;
}

interface HealthStatus {
    status: 'ok' | 'warning' | 'error';
    message?: string;
    latency?: number;
}

class HealthChecker {
    async check(): Promise<HealthCheckResult> {
        const startTime = Date.now();

        const checks = {
            database: await this.checkDatabase(),
            redis: await this.checkRedis(),
            externalApi: await this.checkExternalApi(),
            diskSpace: await this.checkDiskSpace(),
            memory: await this.checkMemory()
        };

        // Determine overall status
        const hasErrors = Object.values(checks).some(c => c.status === 'error');
        const hasWarnings = Object.values(checks).some(c => c.status === 'warning');

        const status: 'healthy' | 'degraded' | 'unhealthy' = 
            hasErrors ? 'unhealthy' : hasWarnings ? 'degraded' : 'healthy';

        return {
            status,
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            checks,
            version: process.env.APP_VERSION || '1.0.0'
        };
    }

    private async checkDatabase(): Promise<HealthStatus> {
        try {
            const start = Date.now();
            // Simulate database check
            await new Promise(r => setTimeout(r, 10));
            const latency = Date.now() - start;

            return { status: 'ok', latency };
        } catch (error) {
            return { status: 'error', message: 'Database connection failed' };
        }
    }

    private async checkRedis(): Promise<HealthStatus> {
        try {
            const start = Date.now();
            // Simulate Redis check
            await new Promise(r => setTimeout(r, 5));
            const latency = Date.now() - start;

            return { status: 'ok', latency };
        } catch (error) {
            return { status: 'error', message: 'Redis connection failed' };
        }
    }

    private async checkExternalApi(): Promise<HealthStatus> {
        try {
            // Check external API availability
            return { status: 'ok' };
        } catch (error) {
            return { status: 'warning', message: 'External API unavailable' };
        }
    }

    private async checkDiskSpace(): Promise<HealthStatus> {
        // Check available disk space
        const available = 100; // GB (simulated)
        if (available < 10) {
            return { status: 'error', message: 'Low disk space' };
        }
        if (available < 50) {
            return { status: 'warning', message: 'Disk space running low' };
        }
        return { status: 'ok' };
    }

    private async checkMemory(): Promise<HealthStatus> {
        const usage = process.memoryUsage();
        const heapPercent = (usage.heapUsed / usage.heapTotal) * 100;

        if (heapPercent > 90) {
            return { status: 'error', message: 'Memory usage critical' };
        }
        if (heapPercent > 75) {
            return { status: 'warning', message: 'Memory usage high' };
        }
        return { status: 'ok' };
    }
}

// ============================================================================
// 5. PROMETHEUS METRICS
// ============================================================================

/**
 * Setup Prometheus metrics
 */
function setupMetrics() {
    // Default metrics
    prometheus.collectDefaultMetrics({ timeout: 5000 });

    // Custom metrics
    const httpRequestDuration = new prometheus.Histogram({
        name: 'http_request_duration_seconds',
        help: 'Duration of HTTP requests in seconds',
        labelNames: ['method', 'route', 'status_code'],
        buckets: [0.1, 0.5, 1, 2, 5]
    });

    const activeConnections = new prometheus.Gauge({
        name: 'active_connections',
        help: 'Number of active connections'
    });

    const databaseQueryCount = new prometheus.Counter({
        name: 'database_queries_total',
        help: 'Total number of database queries',
        labelNames: ['query_type', 'status']
    });

    const databaseQueryDuration = new prometheus.Histogram({
        name: 'database_query_duration_seconds',
        help: 'Duration of database queries',
        labelNames: ['query_type'],
        buckets: [0.001, 0.01, 0.1, 0.5, 1]
    });

    const cacheHitRate = new prometheus.Gauge({
        name: 'cache_hit_rate',
        help: 'Cache hit rate percentage',
        labelNames: ['cache_name']
    });

    return {
        httpRequestDuration,
        activeConnections,
        databaseQueryCount,
        databaseQueryDuration,
        cacheHitRate
    };
}

/**
 * Metrics middleware
 */
function metricsMiddleware(metrics: ReturnType<typeof setupMetrics>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const startTime = Date.now();
        metrics.activeConnections.inc();

        res.on('finish', () => {
            const duration = (Date.now() - startTime) / 1000;
            const route = req.route?.path || req.path;

            metrics.httpRequestDuration
                .labels(req.method, route, res.statusCode.toString())
                .observe(duration);

            metrics.activeConnections.dec();
        });

        next();
    };
}

// ============================================================================
// 6. GRACEFUL SHUTDOWN
// ============================================================================

/**
 * Graceful shutdown with proper cleanup
 */
function setupGracefulShutdown(app: express.Application, server: any) {
    let isShuttingDown = false;

    async function gracefulShutdown(signal: string) {
        if (isShuttingDown) return;
        isShuttingDown = true;

        StructuredLogger.info(`${signal} received, starting graceful shutdown...`);

        // Stop accepting new requests
        server.close(async () => {
            StructuredLogger.info('HTTP server closed');

            try {
                // Close database connections
                // await db.disconnect();
                StructuredLogger.info('Database connections closed');

                // Close Redis
                // await redis.quit();
                StructuredLogger.info('Redis connection closed');

                // Close any other resources
                // await messagingQueue.close();
                StructuredLogger.info('Message queue closed');

                StructuredLogger.info('Graceful shutdown complete');
                process.exit(0);
            } catch (error) {
                StructuredLogger.error('Error during shutdown', error as Error);
                process.exit(1);
            }
        });

        // Force shutdown after timeout
        const forceShutdown = setTimeout(() => {
            StructuredLogger.error('Forcing shutdown after 30s timeout');
            process.exit(1);
        }, 30000);

        forceShutdown.unref();
    }

    // Listen for shutdown signals
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
        StructuredLogger.error('Uncaught exception', error);
        Sentry.captureException(error);
        gracefulShutdown('uncaughtException');
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
        StructuredLogger.error('Unhandled rejection', new Error(String(reason)));
        Sentry.captureException(new Error(String(reason)));
    });
}

// ============================================================================
// 7. COMPLETE SETUP EXAMPLE
// ============================================================================

/**
 * Setup complete monitoring and logging
 */
function setupProductionApp() {
    const app = express();

    // Initialize Sentry first
    initSentry(app);

    // Logging middleware
    app.use(timingMiddleware);

    // Setup metrics
    const metrics = setupMetrics();
    app.use(metricsMiddleware(metrics));

    // Routes
    app.get('/health', async (req: Request, res: Response) => {
        const checker = new HealthChecker();
        const health = await checker.check();

        const statusCode = 
            health.status === 'healthy' ? 200 :
            health.status === 'degraded' ? 200 :
            503;

        res.status(statusCode).json(health);
    });

    // Metrics endpoint
    app.get('/metrics', async (req: Request, res: Response) => {
        res.set('Content-Type', prometheus.register.contentType);
        res.end(await prometheus.register.metrics());
    });

    // API routes
    app.get('/api/users/:id', async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            StructuredLogger.info('Fetching user', { userId });

            // Simulate fetching user
            const user = { id: userId, name: 'Maria' };

            StructuredLogger.info('User fetched successfully', { userId });
            res.json(user);
        } catch (error) {
            StructuredLogger.error('Error fetching user', error as Error);
            Sentry.captureException(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Sentry error handler must be last
    setupSentryErrorHandler(app);

    // Start server
    const server = app.listen(3000, () => {
        StructuredLogger.info('Server started on port 3000');
    });

    // Setup graceful shutdown
    setupGracefulShutdown(app, server);

    return { app, server };
}

// ============================================================================
// 8. BEST PRACTICES
// ============================================================================

/*
 * MONITORING & LOGGING BEST PRACTICES:
 * 
 * 1. Structured Logging:
 *    - Log in JSON format for easy parsing
 *    - Include timestamp, level, message, context
 *    - Add correlation IDs for request tracing
 *    - Include user ID for user-specific debugging
 * 
 * 2. Log Levels:
 *    - DEBUG: Detailed information, disabled in production
 *    - INFO: General informational messages
 *    - WARN: Warning messages for unusual situations
 *    - ERROR: Error messages for failures
 * 
 * 3. Sensitive Data:
 *    - Never log passwords, tokens, or API keys
 *    - Redact personal information
 *    - Filter logs before sending to external services
 * 
 * 4. Performance:
 *    - Async logging to not block requests
 *    - Use log aggregation for centralized logging
 *    - Set appropriate log rotation policies
 * 
 * 5. Alerting:
 *    - Alert on errors and exceptions
 *    - Monitor performance degradation
 *    - Set up on-call rotations
 *    - Document runbooks for common issues
 * 
 * 6. Health Checks:
 *    - Implement comprehensive health endpoints
 *    - Check all critical dependencies
 *    - Use liveness and readiness probes
 * 
 * 7. Metrics:
 *    - Track business metrics
 *    - Monitor system resources
 *    - Set up dashboards
 *    - Use appropriate cardinality
 * 
 * 8. Tracing:
 *    - Implement distributed tracing
 *    - Track requests across services
 *    - Measure end-to-end latency
 */

export {
    logger,
    StructuredLogger,
    initSentry,
    setupSentryErrorHandler,
    HealthChecker,
    setupMetrics,
    metricsMiddleware,
    setupGracefulShutdown,
    setupProductionApp
};