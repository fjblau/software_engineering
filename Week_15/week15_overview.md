# Week 15 Overview: "Modern Development Tools"
## Docker, TypeScript & DevOps - Professional Development Workflow

**Duration: 30 hours**
**Dates: June 2-6, 2025**

---

## Week Overview

Week 15 introduces modern development tools and practices used in professional environments: Docker for containerization, TypeScript for type-safe development, monitoring and logging for observability, and advanced deployment strategies. Students learn to create production-ready applications with professional DevOps practices.

### Key Focus Areas:
- Docker fundamentals - containers, images, docker-compose
- TypeScript introduction - types, interfaces, type safety
- Monitoring and logging - application observability
- Deployment strategies - CI/CD, blue-green deployments, feature flags
- Professional development workflow integration
- Infrastructure as code

### Week 15 Success Metrics:
- ✅ Students containerize applications with Docker
- ✅ Students use TypeScript in projects
- ✅ Students implement monitoring and logging
- ✅ Students understand deployment strategies
- ✅ Students set up production-ready infrastructure
- ✅ Students follow DevOps best practices

---

## Daily Schedule

### Monday: Docker Fundamentals - Containers, Images, Docker Compose
**6.5 hours**
- What is Docker and why use it?
- Containers vs virtual machines
- Docker installation and setup
- Docker images and Dockerfile
- Building and running containers
- Docker Hub and registries
- Multi-container applications with docker-compose

### Tuesday: TypeScript Introduction - Types, Interfaces, Type Safety
**6.5 hours**
- Why TypeScript?
- TypeScript setup and configuration
- Basic types and type annotations
- Interfaces and type aliases
- Functions and classes with TypeScript
- Generics basics
- TypeScript in React and Node.js
- Migration strategies (JavaScript → TypeScript)

### Wednesday: Monitoring and Logging - Application Observability
**6.5 hours**
- Why monitoring and logging matter
- Logging strategies and best practices
- Winston/Morgan (Node.js) or Python logging
- Error tracking with Sentry
- Application Performance Monitoring (APM)
- Health checks and status endpoints
- Metrics and dashboards

### Thursday: Deployment Strategies - CI/CD, Blue-Green, Feature Flags
**6.5 hours**
- Advanced CI/CD patterns
- Blue-green deployments
- Canary deployments
- Feature flags/toggles
- Rollback strategies
- Database migrations in production
- Zero-downtime deployments

### Friday: Professional Development Workflow Integration
**4 hours**
- Putting it all together
- Complete infrastructure setup
- Production checklist
- DevOps culture and practices
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 15, students will be able to:

1. **Docker**
   - Create Dockerfiles
   - Build Docker images
   - Run containers
   - Use docker-compose
   - Deploy containerized applications

2. **TypeScript**
   - Add types to JavaScript code
   - Use interfaces and type aliases
   - Benefit from type safety
   - Migrate existing projects
   - Use TypeScript with frameworks

3. **Monitoring & Logging**
   - Implement logging
   - Track errors
   - Monitor performance
   - Set up health checks
   - Create dashboards

4. **Deployment**
   - Implement CI/CD pipelines
   - Use deployment strategies
   - Implement feature flags
   - Handle rollbacks
   - Manage migrations

5. **DevOps Practices**
   - Automate infrastructure
   - Follow best practices
   - Document infrastructure
   - Monitor production
   - Respond to incidents

---

## Key Concepts

### Docker
- Containers
- Images
- Dockerfile
- docker-compose
- Volumes
- Networks
- Multi-stage builds

### TypeScript
- Static typing
- Type inference
- Interfaces
- Type aliases
- Generics
- Union types
- Type guards

### Monitoring & Logging
- Log levels (DEBUG, INFO, WARN, ERROR)
- Structured logging
- Error tracking
- APM (Application Performance Monitoring)
- Health checks
- Metrics (latency, throughput, errors)

### Deployment
- Continuous Integration
- Continuous Deployment
- Blue-green deployment
- Canary deployment
- Feature flags
- Rollback strategies

### DevOps
- Infrastructure as Code
- Configuration management
- Automation
- Monitoring and alerting
- Incident response

---

## Deliverables

### Weekly Assignment: Containerized Full-Stack Application with TypeScript (100 points)

Take a previous project or build new one and make it production-ready:

Requirements:

1. **Convert to TypeScript** (25 points)
   - Frontend in TypeScript
   - Backend in TypeScript (if Node.js) or keep Python
   - Proper type definitions
   - No `any` types (or minimal)
   - Type-safe API contracts

2. **Docker Containers for All Services** (25 points)
   - Frontend Dockerfile
   - Backend Dockerfile
   - Database container
   - Docker Compose orchestration
   - Environment variable configuration
   - Multi-stage builds for optimization

3. **Professional Logging and Monitoring** (20 points)
   - Structured logging
   - Error tracking (Sentry or similar)
   - Health check endpoints
   - Application metrics
   - Log aggregation

4. **Production-Ready Deployment** (20 points)
   - Health checks and graceful shutdown
   - CI/CD pipeline
   - Zero-downtime deployment strategy
   - Rollback capability
   - Database migration strategy

5. **Complete Infrastructure Documentation** (10 points)
   - Architecture diagram
   - Setup instructions
   - Deployment guide
   - Monitoring guide
   - Incident response playbook

---

## Resources

### Docker
- [Docker Documentation](https://docs.docker.com/)
- [Docker Get Started](https://docs.docker.com/get-started/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Best Practices for Dockerfiles](https://docs.docker.com/develop/dev-best-practices/)

### TypeScript
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Monitoring
- [Sentry](https://sentry.io/) - Error tracking
- [Winston](https://github.com/winstonjs/winston) - Node.js logging
- [Python Logging](https://docs.python.org/3/library/logging.html)

### Deployment
- [Feature Flags Guide](https://martinfowler.com/articles/feature-toggles.html)
- [Blue-Green Deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html)

---

## Code Examples

### Dockerfile for Node.js Application
```dockerfile
# Multi-stage build
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Don't run as root
USER node

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD node healthcheck.js

CMD ["node", "dist/index.js"]
```

### Dockerfile for React Application
```dockerfile
# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose for Full-Stack App
```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:80"
    depends_on:
      - backend
    environment:
      - REACT_APP_API_URL=http://localhost:5000
    networks:
      - app-network

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    depends_on:
      - db
      - redis
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
      - REDIS_URL=redis://redis:6379
      - NODE_ENV=production
    volumes:
      - ./backend/logs:/app/logs
    networks:
      - app-network
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=myapp
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    networks:
      - app-network
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend
    networks:
      - app-network

volumes:
  postgres-data:

networks:
  app-network:
    driver: bridge
```

### TypeScript Express Example
```typescript
// types.ts
export interface User {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
}

export interface CreateUserDto {
    email: string;
    name: string;
    password: string;
}

export interface LoginDto {
    email: string;
    password: string;
}

// app.ts
import express, { Request, Response, NextFunction } from 'express';
import { User, CreateUserDto } from './types';

const app = express();
app.use(express.json());

// Type-safe route handler
app.post('/api/users', async (req: Request<{}, {}, CreateUserDto>, res: Response) => {
    const { email, name, password } = req.body;
    
    // TypeScript ensures we have these fields
    const user = await createUser(email, name, password);
    
    res.status(201).json(user);
});

// Type-safe middleware
const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization');
    
    if (!token) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }
    
    // Verify token and attach user
    next();
};

app.get('/api/profile', authenticate, (req: Request, res: Response) => {
    const user: User = (req as any).user;
    res.json(user);
});

export default app;
```

### Structured Logging with Winston
```typescript
import winston from 'winston';

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// In development, log to console too
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

// Usage
logger.info('User logged in', { userId: 123, email: 'user@example.com' });
logger.error('Database connection failed', { error: err.message });
logger.warn('Rate limit exceeded', { ip: req.ip, userId: user.id });

export default logger;
```

### Error Tracking with Sentry
```typescript
import * as Sentry from '@sentry/node';
import { Express } from 'express';

export function initSentry(app: Express) {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        tracesSampleRate: 1.0
    });
    
    // Request handler must be first
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());
    
    // ... your routes ...
    
    // Error handler must be last
    app.use(Sentry.Handlers.errorHandler());
}

// Capture custom errors
try {
    await riskyOperation();
} catch (error) {
    Sentry.captureException(error, {
        tags: { operation: 'risky' },
        user: { id: userId }
    });
    throw error;
}
```

### Health Check Endpoint
```typescript
app.get('/health', async (req, res) => {
    const checks = {
        uptime: process.uptime(),
        timestamp: Date.now(),
        database: 'unknown',
        redis: 'unknown'
    };
    
    // Check database
    try {
        await db.query('SELECT 1');
        checks.database = 'ok';
    } catch (error) {
        checks.database = 'error';
    }
    
    // Check Redis
    try {
        await redis.ping();
        checks.redis = 'ok';
    } catch (error) {
        checks.redis = 'error';
    }
    
    const isHealthy = checks.database === 'ok' && checks.redis === 'ok';
    const statusCode = isHealthy ? 200 : 503;
    
    res.status(statusCode).json(checks);
});
```

### Feature Flags
```typescript
interface FeatureFlags {
    newCheckout: boolean;
    betaFeatures: boolean;
    darkMode: boolean;
}

class FeatureFlagService {
    private flags: Map<string, boolean> = new Map();
    
    constructor() {
        // Load from environment or config service
        this.flags.set('newCheckout', process.env.FEATURE_NEW_CHECKOUT === 'true');
        this.flags.set('betaFeatures', process.env.FEATURE_BETA === 'true');
    }
    
    isEnabled(flag: keyof FeatureFlags): boolean {
        return this.flags.get(flag) ?? false;
    }
    
    enableForUser(flag: keyof FeatureFlags, userId: number): boolean {
        // Gradual rollout: enable for 10% of users
        if (flag === 'newCheckout') {
            return userId % 10 === 0;
        }
        return this.isEnabled(flag);
    }
}

// Usage
const flags = new FeatureFlagService();

app.get('/api/checkout', (req, res) => {
    if (flags.enableForUser('newCheckout', req.user.id)) {
        return res.json(newCheckoutFlow());
    }
    return res.json(oldCheckoutFlow());
});
```

### Graceful Shutdown
```typescript
const server = app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
});

function gracefulShutdown() {
    logger.info('Received shutdown signal, closing server...');
    
    server.close(async () => {
        logger.info('HTTP server closed');
        
        // Close database connections
        await db.destroy();
        logger.info('Database connections closed');
        
        // Close Redis
        await redis.quit();
        logger.info('Redis connection closed');
        
        logger.info('Graceful shutdown complete');
        process.exit(0);
    });
    
    // Force shutdown after 30 seconds
    setTimeout(() => {
        logger.error('Forcing shutdown after timeout');
        process.exit(1);
    }, 30000);
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
```

---

## Production Checklist

### Docker
- ✅ Multi-stage builds to reduce image size
- ✅ Non-root user in containers
- ✅ Health checks defined
- ✅ Secrets not in images
- ✅ .dockerignore file
- ✅ Images scanned for vulnerabilities

### TypeScript
- ✅ Strict mode enabled
- ✅ No any types (or documented why)
- ✅ Proper interfaces defined
- ✅ Type-safe API contracts

### Logging & Monitoring
- ✅ Structured logging
- ✅ Log levels appropriate
- ✅ Error tracking configured
- ✅ Health check endpoints
- ✅ Metrics collected
- ✅ Alerts configured

### Deployment
- ✅ CI/CD pipeline working
- ✅ Automated tests passing
- ✅ Blue-green or canary strategy
- ✅ Rollback plan
- ✅ Database migrations automated
- ✅ Zero-downtime deployment

### Security
- ✅ Secrets in environment variables
- ✅ HTTPS enabled
- ✅ Security headers set
- ✅ Dependencies updated
- ✅ Vulnerability scanning

---

## Notes for Instructor

- Docker can be complex - start simple
- TypeScript introduction should be practical, not theoretical
- Show real monitoring dashboards
- Discuss production incidents and responses
- Emphasize automation over manual processes
- Connect to professional DevOps practices
- Prepare students for final capstone (Week 16)
- Discuss cost implications of infrastructure

---

## Connection to Other Weeks

- **All previous weeks**: Can now containerize everything
- **Week 14**: Containerize multi-database applications
- **Week 16**: Apply all these practices in final capstone

These professional tools and practices are expected in modern development roles!