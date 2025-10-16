# Week 15 Teacher's Guide: Modern Development Tools & DevOps
## Docker, TypeScript, Monitoring, Logging & Production Deployment

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** June 2-6, 2025  
**Focus:** Docker Containerization, TypeScript, Monitoring/Logging, Deployment Strategies, Production-Ready Infrastructure

---

## Table of Contents
1. [Overview](#overview)
2. [Learning Objectives](#learning-objectives)
3. [Pre-Class Setup Requirements](#pre-class-setup-requirements)
4. [Daily Schedule & Topics](#daily-schedule--topics)
5. [Assignments & Deliverables](#assignments--deliverables)
6. [Resource Materials](#resource-materials)
7. [Assessment Rubric](#assessment-rubric)
8. [Troubleshooting Guide](#troubleshooting-guide)

---

## Overview

Week 15 is the **capstone week on professional development practices**. Students transition from building applications to deploying production-ready systems. This week bridges the gap between development and operations, emphasizing containerization, type safety, observability, and deployment strategies that teams use in professional environments.

### Week 15 as Integration Point

> "Week 15 proves students understand modern DevOps: containers, type safety, monitoring, and professional deployment. This is what production code looks like."

This week emphasizes:
- **Docker as application packaging** - how code becomes deployable units
- **TypeScript as type-safe development** - catching errors before they reach production
- **Monitoring and logging as observability** - understanding what's happening in production
- **Deployment strategies** - deploying safely without downtime or data loss
- **Infrastructure as code** - treating infrastructure like version-controlled source code
- **Professional DevOps culture** - collaboration between developers and operations

### Week 15 Success Metrics

✅ Students containerize complete applications  
✅ Students write production-grade TypeScript  
✅ Students implement structured logging and monitoring  
✅ Students understand deployment strategies  
✅ Students set up complete infrastructure stack  
✅ Students deploy applications safely to production  
✅ Students practice incident response and rollbacks

### Key Teaching Points

- **Containers aren't just for deployment** - they're essential for development consistency
- **TypeScript prevents entire categories of bugs** - show the value of types
- **Observability is not optional** - production visibility requires monitoring
- **Deployments can be safe** - blue-green and canary strategies reduce risk
- **Infrastructure is code** - version control, review, and test infrastructure
- **DevOps is culture** - emphasize collaboration, not silos

---

## Learning Objectives

By the end of Week 15, students will be able to:

### Docker & Containerization
- Create Dockerfiles for different application types
- Build optimized Docker images with multi-stage builds
- Run containers locally and understand container networking
- Use docker-compose for multi-container applications
- Implement health checks and graceful shutdown
- Deploy containerized applications to production
- Understand volumes, networking, and container lifecycle

### TypeScript Mastery
- Add comprehensive type annotations to JavaScript code
- Create and use interfaces and type aliases
- Implement generics for reusable type-safe code
- Use advanced patterns (discriminated unions, type guards)
- Migrate existing JavaScript projects to TypeScript
- Integrate TypeScript with frameworks (React, Express, etc.)
- Understand benefits of type safety and prevent common bugs

### Monitoring & Logging
- Implement structured logging with log levels
- Set up centralized logging and aggregation
- Track errors and exceptions (Sentry integration)
- Monitor application performance metrics
- Create and expose health check endpoints
- Monitor infrastructure metrics (disk, memory, CPU)
- Understand when to alert and how to respond

### Deployment Strategies
- Implement CI/CD pipelines with GitHub Actions
- Use blue-green deployments for zero-downtime deployments
- Implement canary deployments for risk reduction
- Use feature flags for safer feature rollouts
- Manage database migrations in production safely
- Implement rollback strategies
- Handle graceful degradation and fallbacks

### DevOps Practices
- Automate infrastructure with code
- Use environment variables for configuration
- Document infrastructure and runbooks
- Plan and execute incident responses
- Implement health checks and automated recovery
- Follow security best practices
- Manage secrets and sensitive data properly

### Professional Development
- Collaborate across development and operations
- Write infrastructure documentation
- Create operational runbooks
- Respond to production incidents effectively
- Review and approve infrastructure changes
- Version control everything (code and infrastructure)

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Install Docker Desktop and test container builds
2. ✅ Set up TypeScript development environment
3. ✅ Create sample Dockerfiles for Node.js, React, Python
4. ✅ Test docker-compose with full-stack applications
5. ✅ Set up Sentry account for error tracking demo
6. ✅ Create deployment pipeline examples
7. ✅ Prepare infrastructure architecture diagrams
8. ✅ Create operational runbooks and incident response guides
9. ✅ Test all example code in week15 folder
10. ✅ Prepare blue-green deployment demonstrations

**Classroom Setup:**
- Ensure all machines can run Docker (check virtualization)
- Test Docker Hub account and image pushing
- Prepare demo repositories with sample projects
- Set up monitoring dashboards for visualization
- Create deployment environments (dev, staging, production)
- Have incident simulation scenarios prepared

### Student Pre-Requisites (Send Friday Before Week 15)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 14 requirements (database design, NoSQL, advanced queries)
- [ ] Node.js 18+ and Python 3.8+ installed
- [ ] Docker Desktop installed and working
- [ ] Docker Hub account created
- [ ] Git configured with SSH keys
- [ ] TypeScript basics understanding
- [ ] One existing project to containerize
- [ ] Code editor (VS Code) with Docker extension

**Verification Commands (Send to Students):**
```bash
# Docker verification
docker --version
docker run hello-world

# TypeScript verification
npm install -g typescript
tsc --version

# Git verification
git --version
git config user.name
ssh-keygen -t ed25519

# Docker Hub login
docker login
```

### Software & Tool Requirements

| Tool | Purpose | Version | Notes | Installation |
|------|---------|---------|-------|--------------|
| Docker Desktop | Containerization | 24.0+ | Linux/Mac/Windows | docker.com/products/docker-desktop |
| Docker CLI | Container management | 24.0+ | Included with Desktop | - |
| docker-compose | Multi-container orchestration | v2.20+ | Included with Desktop | - |
| Node.js | JavaScript runtime | 18+ LTS | From Week 2 | nodejs.org |
| TypeScript | Type-safe JavaScript | 5.0+ | npm package | npm install -g typescript |
| Python | Data processing | 3.8+ | From Week 2 | python.org |
| VS Code | Editor | Latest | From Week 1 | code.visualstudio.com |
| GitHub Actions | CI/CD | - | Built-in | github.com |
| Sentry Account | Error tracking | Free tier | Registration required | sentry.io |
| Redis | In-memory cache | 7+ | Docker image | redis.io |
| PostgreSQL | Relational DB | 15+ | Docker image | postgresql.org |
| nginx | Reverse proxy | 1.24+ | Docker image | nginx.org |

**VS Code Extensions Required:**
- Docker (ms-azuretools.vscode-docker)
- Kubernetes (ms-kubernetes-tools.vscode-kubernetes-tools)
- TypeScript Vue Plugin (Vue.vscode-typescript-vue-plugin)
- REST Client (humao.rest-client)

**NPM Global Packages:**
```bash
npm install -g typescript ts-node @types/node docker-cli
```

**Python Packages for Monitoring:**
```bash
pip install python-dotenv logging-loki prometheus-client
```

---

## Daily Schedule & Topics

### MONDAY: Docker Fundamentals - Containerization & Orchestration (6.5 hours)

**Learning Goals:**
- Master Docker concepts and terminology
- Create production-grade Dockerfiles
- Use docker-compose for multi-container apps
- Understand container networking and volumes
- Implement health checks and lifecycle management

**9:00 - 9:30 | Week 15 Overview & Production Context (30 min)**
- Recap Weeks 1-14 and place Week 15 in context
- Introduce Docker, TypeScript, DevOps culture
- Show real-world examples from major companies
- Explain why these skills matter in professional settings

**9:30 - 11:00 | Docker Fundamentals & Images (90 min)**

*Teaching Strategy:* Hands-on Docker exploration with immediate feedback

**Topics:**

```
Docker Core Concepts:
- Container: Isolated runtime environment (lightweight VM)
- Image: Template for creating containers (immutable blueprint)
- Registry: Repository for storing images (like GitHub for code)
- Dockerfile: Instructions for building images
- Docker Compose: Orchestrate multi-container applications

Why Docker Matters:
- "Works on my machine" problem solved
- Development = production environment
- Faster deployment than VMs
- Easy scaling and orchestration
- Industry standard for DevOps

Container vs Virtual Machine:
- Containers: Lightweight, shares OS kernel
- VMs: Heavy, complete OS per instance
- Containers: Start in milliseconds
- VMs: Start in seconds/minutes
```

**Live Demo - Basic Docker:**

```bash
# Pull and run an image
docker pull nginx:alpine
docker run -d -p 8080:80 nginx:alpine
docker ps
docker logs <container-id>
docker stop <container-id>

# Build an image
cd ~/project
docker build -t my-app:1.0 .
docker run -p 3000:3000 my-app:1.0

# Inspect containers
docker inspect <container-id>
docker stats
docker exec -it <container-id> /bin/sh
```

**Live Demo - Dockerfile Creation:**

```dockerfile
# Multi-stage Node.js Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./
COPY src ./src
COPY package.json ./

EXPOSE 3000
HEALTHCHECK --interval=30s CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

USER node
CMD ["node", "src/index.js"]
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Docker Compose & Multi-Container Apps (75 min)**

*Teaching Strategy:* Build a complete stack piece by piece

**Topics:**

```
docker-compose Features:
- Define all services in one file
- Automatic networking between containers
- Volume management and persistence
- Environment variable configuration
- Service dependencies and startup order
- Health checks and restart policies

Services to Master:
- Frontend (React/Nginx)
- Backend (Node.js/Express)
- Database (PostgreSQL)
- Cache (Redis)
- Message Queue (optional)
```

**Live Demo - docker-compose:**

```yaml
version: '3.9'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    environment:
      REACT_APP_API_URL: http://localhost:5000

  backend:
    build: ./backend
    ports:
      - "5000:3000"
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      DATABASE_URL: postgresql://user:pass@postgres:5432/app

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: app
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
```

```bash
# Run multi-container app
docker-compose up -d
docker-compose logs -f backend
docker-compose ps
docker-compose down
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | Health Checks & Container Lifecycle (90 min)**

*Teaching Strategy:* Production readiness through practical examples

**Topics:**

```
Health Checks:
- HEALTHCHECK instruction in Dockerfile
- Kubernetes readiness/liveness probes
- Custom health check endpoints
- Graceful shutdown handling

Container Lifecycle:
- startup: Container starting up
- healthy: Ready to receive traffic
- degraded: Working but with issues
- unhealthy: Not responding correctly
- stopped: Container stopped

Graceful Shutdown:
- Handle SIGTERM signals
- Stop accepting new requests
- Allow in-flight requests to complete
- Close database connections
- Timeout after N seconds
```

**Live Demo - Health Checks:**

```typescript
// Health check endpoint in Express
app.get('/health', (req, res) => {
  const health = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    checks: {
      database: checkDatabase(),
      redis: checkRedis()
    }
  };
  
  const status = health.checks.database && health.checks.redis ? 200 : 503;
  res.status(status).json(health);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(async () => {
    await db.close();
    process.exit(0);
  });
  
  // Force shutdown after 30s
  setTimeout(() => process.exit(1), 30000);
});
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Hands-On Docker Practice (30 min)**

*Teaching Strategy:* Progressive challenges

**Student Activities:**
1. Create Dockerfile for Node.js application with multi-stage build
2. Create Dockerfile for React application with nginx
3. Set up docker-compose with frontend, backend, and database
4. Implement health checks
5. Test container networking
6. Practice docker commands (logs, exec, inspect, stats)

---

### TUESDAY: TypeScript Introduction - Type Safety & Scale (6.5 hours)

**Learning Goals:**
- Understand why TypeScript matters
- Master type annotations and interfaces
- Use generics effectively
- Migrate JavaScript to TypeScript
- Integrate TypeScript with frameworks

**9:00 - 9:30 | TypeScript Overview & Benefits (30 min)**
- Why TypeScript? Problems it solves
- Real-world bugs that TypeScript prevents
- "Types as documentation" philosophy
- Show before/after code examples

**9:30 - 11:00 | Basic Types & Interfaces (90 min)**

*Teaching Strategy:* Progressive type complexity

**Topics:**

```
Basic Types:
- string, number, boolean, null, undefined
- any (avoid!), unknown (better)
- Type aliases: type Name = string
- Union types: string | number
- Literal types: "active" | "inactive"

Interfaces:
- Object shape definition
- Optional properties: name?
- Readonly properties
- Extending interfaces
- Type vs Interface (when to use each)

Common Patterns:
- API responses with discriminated unions
- DTO (Data Transfer Object) types
- Entity types with id and timestamps
- Generic repository pattern
```

**Live Demo - TypeScript Basics:**

```typescript
// Types
type Status = 'active' | 'inactive' | 'pending';
type User = {
  id: string;
  name: string;
  email: string;
  status: Status;
};

// Interfaces
interface IRepository<T> {
  create(item: Omit<T, 'id'>): Promise<T>;
  findById(id: string): Promise<T | null>;
  update(id: string, changes: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

// Function types
type CreateUserFn = (email: string, name: string) => Promise<User>;

const createUser: CreateUserFn = async (email, name) => {
  return { id: '1', name, email, status: 'pending' };
};

// Type guards
function isUser(obj: any): obj is User {
  return typeof obj === 'object' && 'email' in obj && 'name' in obj;
}
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Generics & Advanced Patterns (75 min)**

*Teaching Strategy:* Show power through practical examples

**Topics:**

```
Generics:
- Generic functions: function getProperty<T>(obj: T, key: keyof T)
- Generic classes: class Stack<T>
- Generic constraints: <T extends Entity>
- Multiple type parameters

Advanced Patterns:
- Discriminated unions for exhaustive matching
- Type predicates for runtime narrowing
- Utility types: Partial, Pick, Omit, Record
- Conditional types for complex relationships
- Mapped types for transformations

Key Pattern: Repository
- Generic entity constraint
- Type-safe CRUD operations
- Reusable across models
```

**Live Demo - Generics & Patterns:**

```typescript
// Generic repository
interface Entity {
  id: string;
  createdAt: Date;
}

abstract class BaseRepository<T extends Entity> {
  abstract async create(data: Omit<T, 'id' | 'createdAt'>): Promise<T>;
  abstract async findById(id: string): Promise<T | null>;
  abstract async update(id: string, partial: Partial<T>): Promise<T>;
  abstract async delete(id: string): Promise<void>;
}

class UserRepository extends BaseRepository<User> {
  async create(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    // Implementation
    return { id: '1', ...data, createdAt: new Date() };
  }
  // ... other methods
}

// Discriminated union for type safety
type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }
  | { status: 'loading' };

function handleResult<T>(result: Result<T>): void {
  if (result.status === 'success') {
    console.log(result.data);
  } else if (result.status === 'error') {
    console.log(result.error.message);
  } else {
    console.log('Loading...');
  }
}
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | TypeScript with Frameworks (90 min)**

*Teaching Strategy:* Real-world integration

**Topics:**

```
React with TypeScript:
- Component typing: React.FC<Props>
- Props and state types
- Event handler types
- Hook types (useState, useCallback, etc.)

Express with TypeScript:
- Request/Response typing
- Middleware typing
- Route handler types
- Error handling types

Migration Strategy:
- Rename .js to .ts gradually
- Add tsconfig.json
- Fix type errors incrementally
- Use any only as temporary escape
- Enable strict mode eventually
```

**Live Demo - React TypeScript:**

```typescript
// React component with TypeScript
interface UserCardProps {
  user: User;
  onDelete?: (id: string) => Promise<void>;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const [loading, setLoading] = React.useState(false);

  const handleDelete = async () => {
    if (!onDelete) return;
    setLoading(true);
    try {
      await onDelete(user.id);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button 
        onClick={handleDelete} 
        disabled={loading}
      >
        {loading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};
```

**Live Demo - Express TypeScript:**

```typescript
import express, { Request, Response, NextFunction } from 'express';

interface RequestWithUser extends Request {
  user?: User;
}

const authMiddleware = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  // Verify token and set req.user
  next();
};

app.get('/api/users/:id', authMiddleware, async (req: RequestWithUser, res: Response) => {
  const user = await userRepository.findById(req.params.id);
  res.json(user);
});
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | TypeScript Practice (30 min)**

*Teaching Strategy:* Build confidence with structured exercises

**Student Activities:**
1. Convert simple JavaScript to TypeScript
2. Create typed interfaces for API responses
3. Implement generic repository pattern
4. Create discriminated union for API responses
5. Add TypeScript to existing React component
6. Add TypeScript to Express routes

---

### WEDNESDAY: Monitoring, Logging & Observability (6.5 hours)

**Learning Goals:**
- Implement production-grade logging
- Track errors and exceptions
- Monitor performance metrics
- Create operational dashboards
- Understand alerting strategies

**9:00 - 9:30 | Observability & Monitoring Overview (30 min)**
- Why observability matters
- Logs, metrics, traces (the three pillars)
- Real incident stories (Netflix, Amazon, etc.)
- Cost of missing observability

**9:30 - 11:00 | Structured Logging (90 min)**

*Teaching Strategy:* Progressive logging sophistication

**Topics:**

```
Logging Levels:
- DEBUG: Detailed info for diagnosing problems
- INFO: Confirmation of expected behavior
- WARN: Something unexpected but not broken
- ERROR: Serious problem, function impaired
- FATAL: Complete system failure

Structured Logging:
- Logs as JSON objects (machine readable)
- Consistent fields: timestamp, level, service, message
- Correlation IDs for request tracing
- Contextual metadata for debugging
- Log aggregation and centralization

Anti-patterns to Avoid:
- Logging everything (noise)
- No correlation IDs (hard to trace)
- Missing context (who, when, what)
- Synchronous logging (blocks requests)
- No rotation/cleanup (disk fills up)
```

**Live Demo - Winston Logger:**

```typescript
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'api' },
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'logs/combined.log'
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Usage
logger.info('User login', {
  userId: user.id,
  email: user.email,
  ip: req.ip,
  correlationId: req.id
});

logger.error('Database error', {
  error: error.message,
  stack: error.stack,
  query: query
});
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Error Tracking & APM (75 min)**

*Teaching Strategy:* Real-world error management

**Topics:**

```
Error Tracking:
- Centralized error collection (Sentry)
- Stack traces with source maps
- Release tracking and regressions
- User feedback attached to errors
- Error grouping and deduplication

Application Performance Monitoring:
- Request duration tracking
- Database query performance
- External API latency
- Memory and CPU usage
- Custom metrics

Health Checks:
- Readiness probes (can accept requests?)
- Liveness probes (is process alive?)
- Startup probes (has startup completed?)
- Custom health check endpoints
```

**Live Demo - Sentry Integration:**

```typescript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV
});

app.use(Sentry.Handlers.requestHandler());

// Capture exceptions
try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      operation: 'risky_operation',
      userId: user.id
    },
    extra: {
      context: 'user_import'
    }
  });
  throw error;
}

// Capture messages
Sentry.captureMessage('Important event occurred', 'info');

app.use(Sentry.Handlers.errorHandler());
```

**Live Demo - Health Check Endpoint:**

```typescript
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    checks: {
      database: await checkDatabase(),
      redis: await checkRedis(),
      memory: checkMemory()
    }
  };

  const hasErrors = Object.values(health.checks)
    .some(check => check.status === 'error');

  res.status(hasErrors ? 503 : 200).json(health);
});

// For Kubernetes
app.get('/ready', async (req, res) => {
  const ready = await checkDatabase();
  res.status(ready ? 200 : 503).json({ ready });
});

app.get('/live', (req, res) => {
  res.json({ alive: true });
});
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | Metrics & Dashboards (90 min)**

*Teaching Strategy:* Visibility into system behavior

**Topics:**

```
Key Metrics:
- Request rate (requests per second)
- Error rate (errors per second or percentage)
- Latency (p50, p95, p99 response times)
- Throughput (data processed per unit time)
- Resource usage (CPU, memory, disk)
- Business metrics (conversions, active users)

Alerting:
- When to alert (thresholds and conditions)
- Alert fatigue (too many false alarms)
- Runbook attachment to alerts
- Escalation procedures
- On-call rotation
```

**Live Demo - Prometheus Metrics:**

```typescript
import { register, Counter, Histogram, Gauge } from 'prom-client';

// Request counter
const httpRequests = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Request duration histogram
const httpDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
});

// Active connections gauge
const activeConnections = new Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

// Middleware for recording metrics
app.use((req, res, next) => {
  const start = Date.now();
  activeConnections.inc();

  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequests.labels(req.method, req.route?.path, res.statusCode).inc();
    httpDuration.labels(req.method, req.route?.path, res.statusCode).observe(duration);
    activeConnections.dec();
  });

  next();
});

// Metrics endpoint for Prometheus scraping
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Observability Practice (30 min)**

*Teaching Strategy:* Implement complete observability

**Student Activities:**
1. Set up Winston logger with file transports
2. Add structured logging to Express app
3. Integrate Sentry for error tracking
4. Create comprehensive health check endpoint
5. Add Prometheus metrics collection
6. Configure log level based on environment

---

### THURSDAY: Deployment Strategies & CI/CD (6.5 hours)

**Learning Goals:**
- Master CI/CD pipeline concepts
- Implement safe deployment strategies
- Use feature flags for safe rollouts
- Handle database migrations safely
- Plan and execute rollbacks

**9:00 - 9:30 | CI/CD & Deployment Overview (30 min)**
- Why CI/CD matters
- Continuous Integration vs Continuous Deployment
- Deployment risk and strategies
- Examples from industry leaders

**9:30 - 11:00 | CI/CD Pipelines with GitHub Actions (90 min)**

*Teaching Strategy:* Automated safety and quality gates

**Topics:**

```
CI/CD Pipeline Stages:
- Trigger: Push to repository
- Build: Compile/bundle application
- Test: Run unit, integration tests
- Security: Scan for vulnerabilities
- Deploy: Push to staging
- Integration tests: Test in staging
- Production deploy: Roll to production

GitHub Actions:
- YAML workflow files
- Events: push, pull_request, schedule
- Jobs and steps
- Environment variables and secrets
- Artifacts and caching
- Matrix builds for multiple versions
```

**Live Demo - GitHub Actions Workflow:**

```yaml
name: Build, Test & Deploy

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Build Docker image
        if: github.event_name == 'push'
        run: |
          docker build -t my-app:${{ github.sha }} .
          docker tag my-app:${{ github.sha }} my-app:latest
      
      - name: Push to registry
        if: github.event_name == 'push'
        run: |
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push my-app:${{ github.sha }}
          docker push my-app:latest

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to staging
        run: |
          kubectl set image deployment/app-staging app=my-app:${{ github.sha }} -n staging

  deploy-production:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production (blue-green)
        run: bash ./scripts/deploy-blue-green.sh ${{ github.sha }}
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Deployment Strategies (75 min)**

*Teaching Strategy:* Risk reduction through proven patterns

**Topics:**

```
Blue-Green Deployment:
- Two identical environments (blue and green)
- Deploy to inactive environment
- Test in production environment
- Switch traffic instantly
- Rollback by switching back (instant)
- Zero downtime, instant rollback

Canary Deployment:
- Release to small percentage (5-10%)
- Monitor metrics and errors
- Gradually increase traffic (25%, 50%, 100%)
- Automatic rollback on error spike
- Safe for experimenting changes
- Detects problems before all users affected

Rolling Deployment:
- Take instances out of load balancer
- Update and restart
- Return to load balancer
- Repeat for all instances
- Takes time but uses less resources
- Slow rollback if problem found

Feature Flags:
- Control feature visibility via configuration
- Enable/disable without deploying
- A/B testing and gradual rollouts
- Instant rollback by disabling flag
```

**Live Demo - Blue-Green Deployment Script:**

```bash
#!/bin/bash
# Blue-green deployment script

VERSION=$1
BLUE_PORT=8080
GREEN_PORT=8081
PROD_PORT=80

# Get current active version
CURRENT=$(cat /var/app/current-version.txt)

if [ "$CURRENT" == "blue" ]; then
  ACTIVE="blue"
  INACTIVE="green"
  INACTIVE_PORT=$GREEN_PORT
else
  ACTIVE="green"
  INACTIVE="blue"
  INACTIVE_PORT=$BLUE_PORT
fi

# Deploy to inactive environment
echo "Deploying $VERSION to $INACTIVE environment..."
docker run -d -p $INACTIVE_PORT:3000 \
  --name app-$INACTIVE \
  --restart unless-stopped \
  my-app:$VERSION

# Wait and test
sleep 10
if ! curl -f http://localhost:$INACTIVE_PORT/health > /dev/null; then
  echo "Health check failed for $INACTIVE"
  docker stop app-$INACTIVE
  exit 1
fi

# Run integration tests
echo "Running integration tests..."
npm run test:integration -- http://localhost:$INACTIVE_PORT

if [ $? -ne 0 ]; then
  echo "Integration tests failed"
  docker stop app-$INACTIVE
  exit 1
fi

# Switch traffic
echo "Switching traffic to $INACTIVE..."
docker stop app-$ACTIVE
echo $INACTIVE > /var/app/current-version.txt
docker rename app-$ACTIVE app-$ACTIVE-old

# Keep old container for rollback
echo "Deployment complete!"
```

**Live Demo - Feature Flags:**

```typescript
interface FeatureFlags {
  newUserInterface: boolean;
  advancedReporting: boolean;
  betaApi: boolean;
}

class FeatureFlagService {
  private flags: FeatureFlags = {
    newUserInterface: process.env.FLAG_NEW_UI === 'true',
    advancedReporting: process.env.FLAG_REPORTING === 'true',
    betaApi: process.env.FLAG_BETA_API === 'true'
  };

  isEnabled(flag: keyof FeatureFlags, userId?: string): boolean {
    // Could also check per-user or percentage-based rollout
    if (userId) {
      const hash = userId.charCodeAt(0);
      return this.flags[flag] && (hash % 100) < 50; // 50% rollout
    }
    return this.flags[flag];
  }
}

// Usage in Express
app.get('/api/users', (req, res) => {
  const useNewFormat = featureFlags.isEnabled('betaApi', req.user?.id);
  
  if (useNewFormat) {
    // New API format
  } else {
    // Legacy API format
  }
});
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | Database Migrations & Rollbacks (90 min)**

*Teaching Strategy:* Safety first in data operations

**Topics:**

```
Database Migration Challenges:
- Schema changes in production
- Data compatibility during migration
- Rollback capability
- Zero-downtime constraints
- Data consistency

Migration Strategies:
- Backward-compatible schema changes
- Dual-write periods
- Shadow traffic testing
- Gradual rollout to replicas
- Always have rollback plan

Common Patterns:
- Add column (nullable)
- Create new table
- Dual write to old and new
- Copy data
- Update application
- Stop writing to old table
- Eventually delete old table
```

**Live Demo - Safe Migration Example:**

```sql
-- Phase 1: Add new column (nullable, doesn't break existing code)
ALTER TABLE users ADD COLUMN status VARCHAR(50) DEFAULT 'active';
CREATE INDEX idx_users_status ON users(status);

-- Phase 2: Populate new column gradually in application
-- Application code updates BOTH columns during transition

-- Phase 3: Make column non-nullable and set default
ALTER TABLE users ALTER COLUMN status SET NOT NULL;

-- Phase 4: Application stops writing to old column
-- Phase 5: Migration completes, old column removed when safe
ALTER TABLE users DROP COLUMN old_status;
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Deployment Practice (30 min)**

*Teaching Strategy:* Simulated deployments and incident response

**Student Activities:**
1. Create GitHub Actions workflow for CI/CD
2. Implement blue-green deployment script
3. Set up feature flag service
4. Plan safe database migration
5. Create rollback procedure
6. Simulate incident and execute rollback

---

### FRIDAY: Production Workflow Integration & Sprint Review (4 hours)

**Learning Goals:**
- Integrate all concepts into complete workflow
- Handle production incidents
- Present technical work professionally
- Reflect on learning and growth

**9:00 - 10:30 | Complete Infrastructure Setup (90 min)**

*Teaching Strategy:* Build full production stack

**Topics:**
- Infrastructure as code
- Environment management
- Secret management
- Security considerations
- Monitoring setup

**Live Demo - Complete docker-compose Production Stack:**

```yaml
version: '3.9'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    image: my-app-frontend:${VERSION}
    restart: unless-stopped
    environment:
      REACT_APP_API_URL: ${API_URL}
    labels:
      - "com.example.version=${VERSION}"

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    image: my-app-backend:${VERSION}
    restart: unless-stopped
    environment:
      NODE_ENV: production
      DATABASE_URL: ${DATABASE_URL}
      REDIS_URL: redis://redis:6379
      SENTRY_DSN: ${SENTRY_DSN}
      LOG_LEVEL: ${LOG_LEVEL:-info}
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
    volumes:
      - ./backend/logs:/app/logs

  postgres:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 3

  nginx:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro
    depends_on:
      - frontend
      - backend

volumes:
  postgres_data:
  redis_data:
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 12:15 | Incident Response & Runbooks (90 min)**

*Teaching Strategy:* Preparedness through simulated scenarios

**Topics:**
- On-call procedures
- Alerting and escalation
- Incident severity levels
- Blameless postmortems
- Status page updates

**Example Production Runbooks:**

```markdown
# Database Connection Failures

## Detection
- Alert: database_connection_errors > 10% in 5 minutes
- Symptoms: API returns 503 Service Unavailable

## Initial Response (5 min)
1. Check database health endpoint
2. Verify network connectivity to database
3. Check database logs for connection limit reached

## Remediation
- Increase connection pool size
- Restart affected service pods
- Check for connection leaks in application

## Escalation (>15 min)
- Page database team on-call
- Contact infrastructure team
- Prepare customer communication
```

**12:15 - 1:00 | LUNCH (45 min)**

**1:00 - 2:30 | Sprint Review Presentations (90 min)**

*Teaching Strategy:* Professional technical communication

**Each student presents:**
- Containerized application architecture
- TypeScript implementation highlights
- Monitoring and observability setup
- Deployment strategy and demo
- Lessons learned
- Production readiness assessment

**2:30 - 3:00 | Reflection & Bootcamp Completion (30 min)**

- Reflect on 16-week journey
- Discuss professional next steps
- Share feedback on bootcamp
- Celebrate achievements
- Plan continued learning

---

## Assignments & Deliverables

### Weekly Assignment: Containerized Full-Stack Application (100 points)

Take a project from earlier weeks and make it production-ready:

**Requirements:**

1. **Docker Containerization (25 points)**
   - Dockerfile for frontend with multi-stage build
   - Dockerfile for backend with multi-stage build
   - docker-compose.yml with all services
   - Environment variable configuration
   - Health checks for all services
   - Proper logging to stdout

2. **TypeScript Migration (25 points)**
   - Convert frontend to TypeScript
   - Convert backend to TypeScript
   - Proper type definitions (no `any` types)
   - Type-safe API contracts
   - Interfaces for entities and DTOs

3. **Monitoring & Logging (20 points)**
   - Structured logging with Winston/Python logging
   - Health check endpoints (readiness, liveness)
   - Metrics collection (Prometheus format)
   - Error tracking setup (Sentry)
   - Log aggregation to files

4. **Deployment Setup (20 points)**
   - GitHub Actions CI/CD workflow
   - Build and push Docker images
   - Run tests in pipeline
   - Deployment to staging environment
   - Feature flag implementation

5. **Documentation (10 points)**
   - Architecture diagram
   - Setup and deployment guide
   - Runbook for common incidents
   - Monitoring guide
   - Environment configuration guide

### Grading Rubric

| Criteria | Excellent (A) | Good (B) | Fair (C) | Poor (F) |
|----------|---------------|----------|----------|----------|
| **Docker** | Multi-stage, optimized, health checks, all services | Working containers, compose file | Basic Dockerfile | Non-functional |
| **TypeScript** | Comprehensive types, no any, type-safe | Mostly typed, minimal any | Some types added | No TypeScript |
| **Logging** | Structured, multiple levels, aggregation | Structured logging, basic levels | Basic logging | No logging |
| **Deployment** | Full CI/CD, feature flags, tested | CI/CD working, simple deploy | Manual deployment | No automation |
| **Documentation** | Clear, complete, professional | Adequate, mostly complete | Minimal docs | Missing docs |

---

## Resource Materials

### Docker Resources
- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)
- [docker-compose Reference](https://docs.docker.com/compose/compose-file/)

### TypeScript Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
- [TypeScript Cheatsheet](https://www.typescriptlang.org/cheatsheets)

### DevOps Resources
- [The Phoenix Project](https://itrevolution.com/the-phoenix-project/) - Book
- [SRE Fundamentals](https://sre.google/) - Google's Site Reliability Engineering
- [Incident Response Guide](https://www.atlassian.com/incident-management)
- [Feature Flags Guide](https://martinfowler.com/articles/feature-toggles.html)

### Monitoring & Logging
- [Sentry Documentation](https://docs.sentry.io/)
- [Winston Logger](https://github.com/winstonjs/winston)
- [Prometheus Documentation](https://prometheus.io/docs/)
- [ELK Stack Guide](https://www.elastic.co/what-is/elk-stack)

### CI/CD
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery)
- [Blue-Green Deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html)

---

## Assessment Rubric

### Overall Week 15 Competency Rubric

| Competency | Level 1 (Novice) | Level 2 (Intermediate) | Level 3 (Advanced) | Level 4 (Mastery) |
|------------|------------------|----------------------|-------------------|------------------|
| **Docker & Containers** | Can run basic containers | Can write Dockerfiles, multi-container apps | Optimized images, production patterns | Teaches others, designs container architecture |
| **TypeScript** | Basic types added | Comprehensive types, interfaces | Advanced patterns, generics | Expert-level type design, migration leadership |
| **Logging & Monitoring** | Basic logging works | Structured logs, health checks | Multiple monitoring tools integrated | Designs monitoring strategy for team |
| **CI/CD & Deployment** | Manual deployments | Basic CI/CD workflow | Advanced strategies (blue-green) | Designs deployment architecture |
| **Production Readiness** | Development-level code | Some production practices | Professional-grade setup | Expert production systems |

---

## Troubleshooting Guide

### Docker Issues

**Issue: "Docker daemon not running"**
- Solution: Start Docker Desktop or run `sudo systemctl start docker`

**Issue: "Image build fails with permission denied"**
- Solution: Add user to docker group: `sudo usermod -aG docker $USER`

**Issue: "Port already in use"**
- Solution: Find process: `lsof -i :3000` then kill it or use different port

**Issue: "Container keeps crashing"**
- Solution: Check logs: `docker logs <container-id>`, verify health check

### TypeScript Issues

**Issue: "Cannot find module '@types/...'"**
- Solution: `npm install --save-dev @types/module-name`

**Issue: "Property does not exist on type"**
- Solution: Check type definition or add proper interface/type

**Issue: "Type 'never' error on discriminated union"**
- Solution: Ensure all union cases are handled, might be conditional logic issue

### Deployment Issues

**Issue: "GitHub Actions workflow fails"**
- Solution: Check workflow logs, ensure secrets are set correctly

**Issue: "Blue-green deployment stuck"**
- Solution: Check health checks on new version, verify configuration

**Issue: "Database migration fails in production"**
- Solution: Test migration on replica first, ensure rollback plan, check disk space

---

## Summary & Closing Notes

Week 15 completes the 16-week software engineering bootcamp. Students have progressed from basic coding to production-ready, professional-grade applications. They understand not just how to build software, but how to deploy, monitor, and maintain it in production environments.

**Key Takeaways:**
- Modern development is more than writing code
- Production systems require observability, safety, and planning
- Containerization and type safety are industry standards
- DevOps is a mindset of collaboration and automation
- Incident response and monitoring are always-on responsibilities

**Encouragement to Students:**
You've completed an intensive bootcamp covering the full software development lifecycle. You've learned to think like developers AND operations engineers. Continue learning, stay curious, and remember: software engineering is a lifelong journey.