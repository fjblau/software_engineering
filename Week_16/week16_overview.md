# Week 16 Overview: "Professional Capstone Project" - Part 1
## Real-World Professional Application - Sprint 1

**Duration: 30 hours**
**Dates: June 9-13, 2025**

---

## Week Overview

Week 16 marks the beginning of the final capstone project - a comprehensive, real-world application that demonstrates all skills learned throughout the bootcamp. This is not just a project; it's your professional portfolio centerpiece that showcases both JavaScript AND Python expertise, database architecture knowledge, testing practices, and DevOps capabilities.

This week focuses on **Sprint 1**: project planning, architecture design, backend development, and database implementation. Week 17 will complete the frontend, integration, and deployment.

### Week 16 Success Criteria:
- ✅ Well-defined project with clear requirements
- ✅ Professional architecture documentation
- ✅ Technology stack justified with both JS and Python
- ✅ Database schema designed and implemented
- ✅ Backend API with multiple endpoints
- ✅ Testing suite established
- ✅ CI/CD pipeline configured
- ✅ Docker containerization started
- ✅ Sprint Review presentation ready

---

## Daily Schedule

### Monday: Project Kick-off, Requirements Gathering, Sprint Planning
**6.5 hours**
- Capstone project guidelines and requirements
- Brainstorming session
- Defining user stories and acceptance criteria
- Sprint planning - prioritizing Sprint 1 work
- Creating project board (GitHub Projects/Jira)
- Team formation (if working in pairs)
- Setting up repository structure

### Tuesday: Architecture Design, Technology Selection, Database Design
**6.5 hours**
- System architecture design
- Technology stack selection (must include BOTH JavaScript AND Python)
- Database architecture (which databases and why?)
- API design and documentation
- Security considerations
- Scalability planning
- Architecture Decision Records (ADRs)

### Wednesday: Backend Development, API Implementation
**6.5 hours**
- Setting up backend projects (Node.js/Express OR Python/Flask/FastAPI)
- Implementing authentication (JWT)
- Building RESTful API endpoints
- Input validation and error handling
- Middleware setup
- API testing (Postman/Insomnia)

### Thursday: Database Setup, Data Modeling, Migrations
**6.5 hours**
- Setting up databases (PostgreSQL, MongoDB, Redis, etc.)
- Creating database schemas
- Writing migration scripts
- Implementing database models/ORMs
- Seeding test data
- Database testing
- Connection pooling and optimization

### Friday: Sprint Review, Retrospective, Planning Sprint 2
**4 hours**
- Sprint 1 demonstrations
- Code review session
- Retrospective - what went well, what to improve
- Sprint 2 planning for Week 17
- Adjusting priorities based on progress
- Instructor feedback
- Documentation review

---

## Learning Objectives

By the end of Week 16, students will have:

1. **Project Planning**
   - Clear project requirements
   - User stories and acceptance criteria
   - Sprint plan with priorities
   - Project timeline

2. **Architecture**
   - System architecture diagram
   - Technology decisions documented
   - Database architecture designed
   - API specification
   - ADRs (Architecture Decision Records)

3. **Backend Implementation**
   - Working API with multiple endpoints
   - Authentication implemented
   - Error handling
   - Input validation
   - Professional code structure

4. **Database**
   - Schema designed
   - Migrations created
   - Models implemented
   - Test data seeded
   - Queries optimized

5. **Professional Practices**
   - Testing suite started
   - CI/CD pipeline configured
   - Docker setup begun
   - Git workflow followed
   - Documentation maintained

---

## Capstone Project Requirements

### MANDATORY: Dual-Language Demonstration

Your capstone MUST demonstrate skills in **BOTH JavaScript AND Python**. Choose one of these approaches:

**Option A: Microservices Architecture**
- Frontend: React (JavaScript/TypeScript)
- Backend Service 1: Node.js/Express (JavaScript)
- Backend Service 2: Python/Flask or FastAPI
- Each backend handles different responsibilities

**Option B: Full-Stack with Secondary Service**
- Primary stack: React + Node.js (JavaScript) OR Python/Flask
- Secondary service: Python data processing OR Node.js API integration
- Both languages substantially used

**Option C: Polyglot Application**
- Frontend: React (JavaScript/TypeScript)
- Main Backend: Python/Flask or FastAPI
- Real-time features: Node.js/Socket.io
- Or vice versa

### Technical Requirements

1. **Frontend** (Week 17 focus)
   - React with TypeScript
   - Complex state management
   - Multiple components and routes
   - Responsive design
   - Accessibility features

2. **Backend** (Week 16 focus)
   - RESTful API design
   - JWT authentication
   - Role-based authorization (if applicable)
   - Input validation
   - Professional error handling
   - API documentation (Swagger/OpenAPI)

3. **Databases** (Week 16 focus)
   - At least 2 different database types used appropriately:
     - PostgreSQL (relational data)
     - MongoDB (documents)
     - Redis (caching, sessions)
     - Neo4j (graphs, if applicable)
   - Proper relationships and indexing
   - Migration scripts

4. **Testing**
   - Backend unit tests (Jest or pytest)
   - Integration tests
   - API endpoint tests
   - Minimum 70% code coverage

5. **DevOps**
   - Dockerized (all services)
   - Docker Compose for orchestration
   - CI/CD pipeline (GitHub Actions)
   - Environment configuration
   - Health checks

6. **Documentation**
   - README with setup instructions
   - API documentation
   - Architecture diagrams
   - Database schema documentation
   - Deployment guide

---

## Project Ideas

### 1. Task Management & Collaboration Platform
**JavaScript**: React frontend + Node.js/Express backend
**Python**: Data analytics service (task metrics, productivity insights)
**Databases**: PostgreSQL (tasks, users), Redis (real-time updates), MongoDB (activity logs)
**Features**: 
- User authentication and teams
- Task creation, assignment, tracking
- Real-time updates (WebSockets)
- Analytics dashboard (Python service)
- File attachments

### 2. E-Learning Platform
**JavaScript**: React frontend + Node.js API gateway
**Python**: Flask backend with course recommendations (ML)
**Databases**: PostgreSQL (users, courses), MongoDB (course content), Redis (caching)
**Features**:
- User authentication (students, instructors)
- Course creation and management
- Video/content delivery
- Progress tracking
- AI-powered course recommendations (Python ML)

### 3. Social Media Analytics Dashboard
**JavaScript**: React frontend with data visualizations
**Python**: FastAPI backend with data processing
**Databases**: PostgreSQL (user data), MongoDB (social posts), Redis (caching)
**Features**:
- OAuth integration (Twitter, LinkedIn APIs)
- Data collection and storage
- Sentiment analysis (Python NLP)
- Interactive dashboards
- Scheduled reports

### 4. Inventory Management System
**JavaScript**: React frontend + Node.js/Express
**Python**: Flask API for inventory predictions/analytics
**Databases**: PostgreSQL (inventory, orders), MongoDB (audit logs), Redis (sessions)
**Features**:
- Product catalog management
- Stock tracking
- Order processing
- Low stock alerts
- Predictive restocking (Python)

### 5. Event Management Platform
**JavaScript**: React frontend + Node.js backend
**Python**: Flask service for ticket generation (QR codes), email notifications
**Databases**: PostgreSQL (events, users, bookings), Redis (real-time availability)
**Features**:
- Event creation and discovery
- Ticket booking system
- Payment integration (Stripe test mode)
- QR code tickets (Python)
- Email confirmations (Python)

### 6. Health & Fitness Tracker
**JavaScript**: React frontend with charts
**Python**: FastAPI backend with data analysis
**Databases**: PostgreSQL (user data), MongoDB (workout logs), Redis (caching)
**Features**:
- User authentication
- Workout logging
- Nutrition tracking
- Progress visualization
- Insights and recommendations (Python analytics)

### 7. Recipe Sharing Platform
**JavaScript**: React frontend + Node.js backend
**Python**: Flask service for recipe recommendations
**Databases**: PostgreSQL (users, recipes), MongoDB (comments), Neo4j (ingredient relationships)
**Features**:
- Recipe creation and sharing
- Search and filtering
- User ratings and reviews
- Ingredient-based recommendations (Python + Neo4j)
- Shopping list generation

### 8. Job Board Platform
**JavaScript**: React frontend + Node.js API
**Python**: Flask service for resume parsing, job matching
**Databases**: PostgreSQL (jobs, users), MongoDB (applications), Redis (search cache)
**Features**:
- Job posting (employers)
- Job search and filtering
- Application management
- Resume parsing (Python NLP)
- Job matching algorithm (Python)

---

## Sprint 1 Deliverables

### By Friday Sprint Review, you must have:

1. **Project Plan** (10 points)
   - User stories with acceptance criteria
   - Sprint backlog
   - Project board setup
   - Timeline/milestones

2. **Architecture Documentation** (15 points)
   - System architecture diagram
   - Technology stack justification
   - Database architecture design
   - ADRs for key decisions
   - API specification

3. **Backend Implementation** (30 points)
   - Working API with 5+ endpoints
   - JWT authentication
   - Input validation
   - Error handling
   - At least one CRUD resource
   - Postman/Insomnia collection

4. **Database** (25 points)
   - 2+ databases set up
   - Schema designed and documented
   - Migration scripts
   - Models/ORMs implemented
   - Test data seeded
   - Relationships properly defined

5. **Testing** (10 points)
   - Test framework set up
   - 10+ backend tests
   - CI pipeline running tests

6. **DevOps** (5 points)
   - Docker setup started
   - GitHub Actions CI configured
   - Environment variables managed

7. **Professional Practices** (5 points)
   - Clean Git history
   - Code reviews (if pairs)
   - Professional commit messages
   - Documentation maintained

---

## Architecture Examples

### Microservices Architecture
```
┌─────────────────────────────────────────────────────────┐
│                      Frontend (React)                    │
│                   TypeScript/JavaScript                  │
└────────┬────────────────────────────────────┬───────────┘
         │                                    │
         │ HTTP/REST                          │ HTTP/REST
         │                                    │
┌────────▼─────────────┐           ┌─────────▼─────────────┐
│   User Service       │           │  Analytics Service    │
│   Node.js/Express    │◄──────────┤  Python/FastAPI       │
│   (JavaScript)       │   gRPC    │  (Python)             │
└────────┬─────────────┘           └─────────┬─────────────┘
         │                                    │
         │                                    │
┌────────▼─────────────┐           ┌─────────▼─────────────┐
│   PostgreSQL         │           │   MongoDB             │
│   (User data)        │           │   (Analytics data)    │
└──────────────────────┘           └───────────────────────┘
         │                                    │
         └───────────┬────────────────────────┘
                     │
            ┌────────▼─────────┐
            │     Redis        │
            │   (Cache/Session)│
            └──────────────────┘
```

### Monolith with Background Workers
```
┌─────────────────────────────────────────────────────────┐
│                  Frontend (React)                        │
│                TypeScript/JavaScript                     │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST
                     │
┌────────────────────▼────────────────────────────────────┐
│              API Gateway (Node.js)                       │
│                  JavaScript                              │
└─────┬───────────────────────────────────────────────────┘
      │
      ├──────────────┬──────────────┬──────────────┐
      │              │              │              │
┌─────▼────┐  ┌─────▼─────┐  ┌────▼─────┐  ┌────▼─────────┐
│PostgreSQL│  │  MongoDB  │  │  Redis   │  │Python Workers│
│          │  │           │  │          │  │(Background   │
│          │  │           │  │          │  │ Tasks)       │
└──────────┘  └───────────┘  └──────────┘  └──────────────┘
```

---

## Code Examples

### Project Structure (Monorepo)
```
capstone-project/
├── frontend/                  # React + TypeScript
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── backend-node/              # Node.js/Express (JavaScript service)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── utils/
│   ├── tests/
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── backend-python/            # Python/FastAPI (Python service)
│   ├── app/
│   │   ├── routers/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── services/
│   ├── tests/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── pyproject.toml
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

### Docker Compose for Full Stack
```yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend-node
      - backend-python
    environment:
      - REACT_APP_NODE_API=http://localhost:5000
      - REACT_APP_PYTHON_API=http://localhost:8000

  backend-node:
    build: ./backend-node
    ports:
      - "5000:5000"
    depends_on:
      - postgres
      - redis
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/capstone
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
      - NODE_ENV=production
    volumes:
      - ./backend-node/logs:/app/logs

  backend-python:
    build: ./backend-python
    ports:
      - "8000:8000"
    depends_on:
      - postgres
      - mongodb
      - redis
    environment:
      - DATABASE_URL=postgresql://user:pass@postgres:5432/capstone
      - MONGO_URL=mongodb://mongo:27017/capstone
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
    volumes:
      - ./backend-python/logs:/app/logs

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=capstone
    volumes:
      - postgres-data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  mongodb:
    image: mongo:6
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=pass
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data

volumes:
  postgres-data:
  mongo-data:
  redis-data:
```

### Node.js Backend Structure (Express + TypeScript)
```typescript
// src/app.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler';
import { authenticate } from './middleware/auth';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import logger from './utils/logger';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined', { stream: { write: (msg) => logger.info(msg.trim()) } }));

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticate, userRoutes);

// Error handling
app.use(errorHandler);

export default app;

// src/index.ts
import app from './app';
import { connectDatabase } from './config/database';
import logger from './utils/logger';

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await connectDatabase();
        logger.info('Database connected');
        
        const server = app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
        
        // Graceful shutdown
        process.on('SIGTERM', () => {
            logger.info('SIGTERM received, shutting down...');
            server.close(() => {
                logger.info('Server closed');
                process.exit(0);
            });
        });
    } catch (error) {
        logger.error('Failed to start server', error);
        process.exit(1);
    }
}

start();
```

### Python Backend Structure (FastAPI)
```python
# app/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging

from app.routers import auth, analytics
from app.database import init_db, close_db
from app.middleware import log_requests

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting up...")
    await init_db()
    yield
    # Shutdown
    logger.info("Shutting down...")
    await close_db()

app = FastAPI(
    title="Capstone Python API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware
app.middleware("http")(log_requests)

# Health check
@app.get("/health")
async def health():
    return {"status": "ok", "timestamp": datetime.utcnow()}

# Routes
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["analytics"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### Database Models (PostgreSQL with Prisma - Node.js)
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  password  String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  posts     Post[]
  
  @@index([email])
}

enum Role {
  USER
  ADMIN
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  published Boolean  @default(false)
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([authorId])
  @@index([published])
}
```

### Database Models (SQLAlchemy - Python)
```python
# app/models/user.py
from sqlalchemy import Column, Integer, String, DateTime, Enum
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from app.database import Base

class UserRole(str, enum.Enum):
    USER = "USER"
    ADMIN = "ADMIN"

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role = Column(Enum(UserRole), default=UserRole.USER)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    posts = relationship("Post", back_populates="author")

# app/models/post.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base

class Post(Base):
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(String, nullable=False)
    published = Column(Boolean, default=False, index=True)
    author_id = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    author = relationship("User", back_populates="posts")
```

### GitHub Actions CI/CD Pipeline
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test-node:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        working-directory: ./backend-node
        run: npm ci
        
      - name: Run linter
        working-directory: ./backend-node
        run: npm run lint
        
      - name: Run tests
        working-directory: ./backend-node
        run: npm test
        
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./backend-node/coverage/lcov.info
          flags: backend-node

  test-python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
          
      - name: Install dependencies
        working-directory: ./backend-python
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov
          
      - name: Run linter
        working-directory: ./backend-python
        run: |
          pip install flake8
          flake8 app/
          
      - name: Run tests
        working-directory: ./backend-python
        run: pytest --cov=app --cov-report=xml
        
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./backend-python/coverage.xml
          flags: backend-python

  build:
    needs: [test-node, test-python]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker images
        run: docker-compose build
        
      - name: Run integration tests
        run: |
          docker-compose up -d
          sleep 10
          # Run integration tests here
          docker-compose down
```

---

## Sprint 1 Focus Areas

### Monday: Planning
- Define MVP (Minimum Viable Product)
- Create user stories
- Set up project board
- Define Sprint 1 goals

### Tuesday: Architecture
- Draw system diagrams
- Choose databases (and justify!)
- Design API endpoints
- Write ADRs

### Wednesday: Backend
- Implement authentication
- Create core API endpoints
- Set up middleware
- Test with Postman

### Thursday: Database
- Set up all databases
- Create migrations
- Implement models
- Seed data

### Friday: Review
- Demo what you built
- Get feedback
- Plan Week 17

---

## Common Pitfalls to Avoid

1. **Scope Creep**: Start with MVP, add features later
2. **Poor Planning**: Spend adequate time on architecture
3. **Skipping Tests**: Write tests as you code
4. **No Documentation**: Document as you build
5. **Ignoring Git**: Commit frequently with good messages
6. **Forgetting Dual-Language**: Ensure both JS and Python are substantially used
7. **Complex First**: Start simple, add complexity gradually
8. **No User Validation**: Validate all inputs!

---

## Resources

### Architecture
- [C4 Model](https://c4model.com/) - System diagrams
- [ADR GitHub](https://adr.github.io/) - Architecture Decision Records
- [API Design Guide](https://apiguide.readthedocs.io/)

### Backend
- [Express Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [REST API Tutorial](https://restfulapi.net/)

### Database
- [Database Design Guide](https://www.databasestar.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)

### Testing
- [Jest Documentation](https://jestjs.io/)
- [Pytest Documentation](https://docs.pytest.org/)

---

## Notes for Instructor

- Help students scope projects appropriately
- Review architecture designs before coding starts
- Emphasize the importance of dual-language requirement
- Conduct daily standups
- Be available for technical questions
- Review Git workflows
- Prepare students for Sprint 2 (Week 17)
- Encourage professional documentation practices

---

## Connection to Week 17

Week 16 builds the foundation:
- Backend APIs ✅
- Database ✅
- Authentication ✅
- Testing setup ✅
- Docker started ✅

Week 17 completes the project:
- Frontend (React)
- Integration
- Complete testing
- Deployment
- Documentation
- Final presentation

**This is your portfolio centerpiece - make it count!** 🚀