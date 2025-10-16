# Week 16 Teacher's Guide: Professional Capstone Project - Sprint 1
## Real-World Application Development & Planning

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** June 9-13, 2025  
**Focus:** Project Planning, Architecture Design, Backend Development, Database Implementation, Sprint 1 Delivery

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

Week 16 launches the **capstone project - Sprint 1**, marking the beginning of the final, most significant work of the bootcamp. This is the students' opportunity to demonstrate mastery of all skills learned across Weeks 1-15: JavaScript, Python, databases, testing, DevOps, and professional practices.

### Week 16 as Capstone Foundation

> "Week 16 proves students can plan, architect, and build professional applications. This is portfolio-quality work that demonstrates readiness for engineering roles."

This week emphasizes:
- **Project Planning** - translating ideas into actionable plans
- **Architecture Design** - making sound technical decisions
- **Backend Development** - building robust APIs
- **Database Strategy** - designing scalable data structures
- **Dual-Language Requirement** - demonstrating JavaScript AND Python expertise
- **Professional Practices** - testing, CI/CD, documentation from day one
- **Team Collaboration** - working as professional software engineers

### Week 16 Success Metrics

✅ Students have well-scoped, approved projects  
✅ Students have documented architecture with ADRs  
✅ Students have working backend APIs  
✅ Students have designed, implemented, and tested database schemas  
✅ Students have CI/CD pipelines configured  
✅ Students follow professional Git workflows  
✅ Students demonstrate both JavaScript and Python in their projects  
✅ Students present Sprint 1 progress on Friday

### Key Teaching Points

- **Scope Control**: Emphasize MVP and user stories to prevent scope creep
- **Architecture First**: Good design decisions now prevent rework later
- **Dual-Language**: Both JavaScript and Python must be substantially used
- **Professional Quality**: These projects are portfolio pieces
- **Testing Mindset**: Tests should be written alongside code, not after
- **Documentation**: Architecture and decisions should be documented as code progresses
- **Sprint Ceremonies**: Daily standups, PR reviews, sprint retrospective are essential

---

## Learning Objectives

By the end of Week 16, students will be able to:

### Project Planning & Requirements
- Define project scope and MVP (Minimum Viable Product)
- Write user stories with acceptance criteria
- Create sprint backlogs with prioritized tasks
- Set up project boards (GitHub Projects, Jira, or similar)
- Estimate task complexity and sprint velocity
- Identify dependencies and critical path

### Architecture & System Design
- Create system architecture diagrams (C4 Model)
- Justify technology stack choices (especially dual-language)
- Design database architecture with multiple database types
- Document API specifications with OpenAPI/Swagger
- Write Architecture Decision Records (ADRs) for key choices
- Plan for scalability, security, and maintainability

### Backend Development
- Build RESTful APIs with multiple endpoints
- Implement JWT authentication and authorization
- Create proper error handling and input validation
- Structure code professionally (controllers, services, repositories)
- Implement middleware for cross-cutting concerns
- Write API documentation accessible to frontend developers

### Database Implementation
- Design normalized relational schemas (PostgreSQL)
- Implement document stores (MongoDB) for appropriate data
- Create and run migration scripts
- Implement ORM/ODM patterns (Prisma, SQLAlchemy)
- Seed databases with test data
- Optimize queries and add appropriate indexes

### Testing & Quality
- Set up testing frameworks (Jest for Node.js, pytest for Python)
- Write unit tests for business logic
- Write integration tests for APIs
- Achieve minimum 60-70% code coverage
- Set up CI/CD pipeline (GitHub Actions)
- Practice code review workflows

### Professional Practices
- Use Git with meaningful commit messages
- Create and review pull requests professionally
- Maintain documentation alongside code
- Follow team conventions and code style
- Practice daily standup communication
- Manage secrets and environment variables securely

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Review all capstone project requirements
2. ✅ Prepare project templates/scaffolds for rapid start
3. ✅ Set up example projects showcasing dual-language architecture
4. ✅ Create project board template (GitHub Projects or Jira)
5. ✅ Prepare architecture evaluation checklist
6. ✅ Test all backend technologies (Node.js, Python, databases)
7. ✅ Create sample Postman/Insomnia collections
8. ✅ Prepare daily standup format and expectations
9. ✅ Create sprint review rubric
10. ✅ Set up code review expectations and templates

**Classroom Setup:**
- Ensure all machines have Node.js 18+, Python 3.8+, Docker
- All students have GitHub accounts with SSH keys configured
- Database tools installed (PostgreSQL client, MongoDB Compass, etc.)
- API testing tools ready (Postman, Insomnia, or Thunder Client)
- IDE setup with appropriate extensions
- Backup power/internet for long development sessions

### Student Pre-Requisites (Send Friday Before Week 16)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 15 requirements completed (Docker, TypeScript, DevOps)
- [ ] Node.js 18+ LTS installed
- [ ] Python 3.8+ installed
- [ ] Docker Desktop installed and tested
- [ ] GitHub account with SSH keys configured
- [ ] PostgreSQL and MongoDB installed locally OR Docker ready
- [ ] Code editor (VS Code) with extensions:
  - REST Client
  - Docker
  - Prettier
  - ESLint
  - Python
  - Pylance
- [ ] Project idea brainstormed (even if rough)
- [ ] Ability to work 6.5 hours per day

**Verification Commands (Send to Students):**
```bash
# Node.js verification
node --version  # Should be v18.0.0 or higher
npm --version

# Python verification
python3 --version  # Should be 3.8 or higher
pip3 --version

# Git verification
git --version
git config user.name
git config user.email

# Docker verification
docker --version
docker run hello-world

# Database verification
psql --version  # Or use Docker: docker run postgres:15
# MongoDB: mongosh --version  # Or Docker: docker run mongo

# Check GitHub SSH
ssh -T git@github.com
```

### Software & Tool Requirements

| Tool | Purpose | Version | Notes | Installation |
|------|---------|---------|-------|--------------|
| Node.js | JavaScript runtime | 18+ LTS | Backend, tooling | nodejs.org |
| Python | Python runtime | 3.8+ | Backend service, data processing | python.org |
| PostgreSQL | Relational database | 15+ | Primary data store | Via Docker or postgresql.org |
| MongoDB | Document database | 6+ | Document storage (optional) | Via Docker or mongodb.com |
| Redis | In-memory cache | 7+ | Caching, sessions (optional) | Via Docker or redis.io |
| Docker Desktop | Container runtime | 24.0+ | Local development | docker.com/products/docker-desktop |
| Git | Version control | 2.40+ | Code management | github.com |
| VS Code | Code editor | Latest | Development environment | code.visualstudio.com |
| GitHub | Repository hosting | - | Project repository | github.com |
| Postman/Insomnia | API testing | Latest | API development | postman.com or insomnia.rest |
| TypeScript | Type-safe JavaScript | 5.0+ | Optional for Node.js | npm install -g typescript |

**NPM Global Packages (Optional):**
```bash
npm install -g typescript ts-node @types/node create-react-app next
```

**Python Packages:**
```bash
pip install fastapi uvicorn sqlalchemy psycopg2-binary pymongo flask python-dotenv
pip install pytest pytest-cov black flake8
```

---

## Daily Schedule & Topics

### MONDAY: Project Kick-off, Requirements, Sprint Planning (6.5 hours)

**Learning Goals:**
- Define project scope and MVP clearly
- Create actionable user stories and acceptance criteria
- Plan Sprint 1 priorities and tasks
- Set up professional project infrastructure

**9:00 - 9:30 | Capstone Overview & Expectations (30 min)**

*Teaching Strategy:* Inspire with possibilities while setting clear requirements

**Topics:**
```
Capstone Project Vision:
- Portfolio-quality work that demonstrates full-stack expertise
- Must include BOTH JavaScript AND Python substantially
- Opportunity to build something you're proud to show employers
- Week 16 (Sprint 1): Backend, DB, architecture
- Week 17 (Sprint 2): Frontend, integration, deployment

Requirement Enforcement:
- Dual-language non-negotiable
- Minimum MVP scope required
- Professional documentation expected
- Code quality and testing required
- Professional Git workflow mandatory

Success Stories:
- Show previous student projects that got internships/jobs
- Highlight well-architected projects
- Discuss importance of portfolio quality
- Emphasize professional communication
```

**Live Demo - Project Examples:**
- Show 2-3 well-executed previous projects
- Highlight architecture, testing, documentation
- Show GitHub repositories with commit history
- Discuss technology choices made
- Review code quality (indentation, naming, structure)

**9:30 - 11:00 | Project Ideas, Brainstorming, Team Formation (90 min)**

*Teaching Strategy:* Guided ideation with feasibility checks

**Topics:**
```
Brainstorming Process:
- Start with problems you want to solve
- Consider market demand (is anyone using this?)
- Think about complexity vs. time constraints
- Consider learning opportunities
- Evaluate data requirements

Feasibility Checks:
- Can you build MVP in 2 weeks?
- Do you have required skills or can learn quickly?
- Are external APIs available (weather, maps, payment)?
- Can your database architecture support it?
- Is dual-language naturally integrated?

Team Considerations:
- Solo vs. pair programming
- If pairs: clearly divide responsibilities
- Ensure both members equally contribute
- Both must use both languages (if possible)
```

**Live Demo - Project Scoping:**
- Task Management Platform
  - Frontend: React, TypeScript
  - Backend 1: Node.js/Express (task API)
  - Backend 2: Python/FastAPI (analytics)
  - Databases: PostgreSQL (tasks), MongoDB (logs)
  - Why this works: Clear separation, both languages used naturally

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | User Stories, Acceptance Criteria, Sprint Planning (75 min)**

*Teaching Strategy:* Move from ideas to actionable work

**Topics:**
```
User Story Format:
"As a [user type], I want to [action], so that [benefit]"
- Always from user perspective
- Include acceptance criteria (specific, testable)
- Include estimated effort (story points)
- Include dependencies if any

Example User Story:
"As a project manager, I want to create tasks with due dates,
so that my team knows when work needs to be completed.

Acceptance Criteria:
- Task creation form with title, description, due date
- API endpoint POST /tasks accepts task data
- Frontend shows success/error message
- Tasks persist to database
- Due date defaults to next Monday if not specified"

Sprint Planning:
- Define Sprint 1 goals (realistic for 5 days)
- Select user stories for sprint backlog
- Estimate story points (1, 2, 3, 5, 8)
- Identify blockers or dependencies
- Estimate velocities (how many points can team do?)
- Identify daily tasks (Mon-Fri breakdown)

GitHub Projects Setup:
- Create board with columns: Backlog, Todo, In Progress, Review, Done
- Add user stories as issues
- Link issues to milestone "Sprint 1"
- Add labels for priority, backend, frontend, database
```

**Live Demo - Project Setup:**
```bash
# Create GitHub project
git init capstone-project
cd capstone-project

# Create initial structure
mkdir frontend backend-node backend-python tests

# Create README with project overview
# Create .github/workflows for CI/CD (template)
# Create docker-compose.yml template

# Initial commit
git add .
git commit -m "Initial project structure"
git push origin main

# Create GitHub Project Board and add user stories
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | Project Board Setup, Task Breakdown (90 min)**

*Teaching Strategy:* Get infrastructure in place for successful sprint

**Topics:**
```
GitHub Projects Configuration:
- Create columns for workflow
- Set up automation (PR linked to issue moves to In Progress)
- Configure team access
- Create issue templates for consistency

Task Estimation Guidelines:
- 1 point: 30 min - 1 hour
- 2 points: 1-2 hours
- 3 points: 2-4 hours
- 5 points: Full day
- 8 points: 1.5 days

Sprint 1 Target Distribution (20-30 points realistic):
- Project Planning: 5 points (Mon)
- Architecture: 8 points (Tue)
- Backend (1-2 endpoints): 10 points (Wed)
- Database (schema, models): 8 points (Thu)
- Buffer/Polish: 5 points (Fri morning)

Daily Stand-up Format:
- What I did yesterday
- What I'm doing today
- What's blocking me
- Keep to 1-2 minutes per person
```

**Live Demo - Project Board:**
- Show full project board with sprints
- Show issue templates
- Show linking PRs to issues
- Show automation workflows

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Project Approval & Documentation (30 min)**

*Teaching Strategy:* Ensure instructor sign-off before coding begins

**Student Activities:**
1. Final project pitch to instructor (2 min per student/pair)
2. Discuss technology choices and justification
3. Confirm dual-language usage plan
4. Review sprint backlog
5. Get approval to begin coding
6. One final commit with all planning documentation

---

### TUESDAY: Architecture Design, Technology Selection, Database Design (6.5 hours)

**Learning Goals:**
- Create clear system architecture documents
- Justify technology and database choices
- Design database schemas for all systems
- Document API specifications
- Make Architecture Decision Records

**9:00 - 9:30 | Architecture Overview & Design Principles (30 min)**

*Teaching Strategy:* Emphasize design thinking before implementation

**Topics:**
```
Architecture Thinking:
- Design the system, not just code it
- Separate concerns (frontend, backend services, databases)
- Plan for scalability from the start
- Consider failure modes and resilience
- Think about team collaboration patterns

Common Architectures:
1. Monolith with separate services
   - Single backend server with database
   - Separate worker processes (Python scripts)
   
2. Microservices
   - Frontend communicates with multiple APIs
   - Services handle different domains
   - Independent deployment
   
3. Full-Stack per Service
   - Each major feature is separate full-stack
   - Own database, own backend, shared frontend

Choosing Architecture:
- Consider team size
- Consider deployment complexity
- Consider data sharing needs
- Consider development velocity needs
```

**Live Demo - Architecture Diagrams (C4 Model):**
- Show Level 1: System Context (boxes and arrows at high level)
- Show Level 2: Container (Frontend, Backend, Database)
- Show Level 3: Component (Controllers, Services, Repositories)
- Use tools: Miro, Lucidchart, or draw.io

**9:30 - 11:00 | Technology Stack Decisions (90 min)**

*Teaching Strategy:* Educate decision-making, not dogmatism

**Topics:**
```
JavaScript Options:
- Node.js + Express: Traditional, proven, good for REST APIs
- Node.js + NestJS: Enterprise patterns, good structure
- Node.js + Fastify: High performance, modern
- React: Frontend framework (required for frontend)

Python Options:
- FastAPI: Modern, async, auto documentation, fast
- Flask: Lightweight, flexible, easier to learn
- Django: Full-featured, batteries-included
- Celery: Background jobs, task queues

Database Options:
- PostgreSQL: Relational, ACID, complex queries, good scaling
- MongoDB: Document, flexible schema, good for logs
- Redis: In-memory, caching, sessions, real-time data
- Neo4j: Graph database, relationships

Selection Criteria:
- What type of data? (Relational? Documents? Graphs?)
- What patterns? (CRUD? Complex queries? Real-time?)
- What scale? (Million records? Billions?)
- What performance? (Milliseconds? Seconds?)
- Team knowledge? (What do they already know?)
```

**Live Demo - Tech Stack Comparison Table:**

For Task Management Platform example:

| Component | Choice | Why |
|-----------|--------|-----|
| Frontend | React + TypeScript | Rich UI, type safety, large ecosystem |
| Node.js API | Express + TypeScript | REST APIs, middleware, proven |
| Python Service | FastAPI | Async, auto-docs, modern Python |
| Primary DB | PostgreSQL | Relational tasks, users, teams |
| Document Store | MongoDB | Activity logs, audit trail |
| Cache | Redis | User sessions, real-time updates |
| Auth | JWT | Stateless, industry standard |
| Deployment | Docker + Docker Compose | Development consistency, production ready |

**Architecture Decision Record Template:**
```markdown
# ADR: Why we chose PostgreSQL over MongoDB for primary data

## Context
We need to store task data with relationships (tasks have owners,
assignees, projects, tags). We need complex queries (find my tasks
due this week across all projects).

## Decision
Use PostgreSQL for primary data, MongoDB for activity logs.

## Consequences
- Good: ACID compliance, efficient joins, great query power
- Bad: Schema changes require migrations
- Good: PostgreSQL scales well to millions of records
- Team: Everyone knows SQL, easier onboarding

## Alternatives Considered
- MongoDB everywhere: Flexible but joins complex, transactions slow
- Mixed from start: Complexity we don't need yet

## Review Date
End of Week 16
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Database Architecture & Schema Design (75 min)**

*Teaching Strategy:* Design data model based on requirements

**Topics:**
```
Database Schema Design:
- Identify entities (Users, Tasks, Projects, Comments)
- Identify relationships (one-to-many, many-to-many)
- Normalize to prevent data duplication
- Add timestamps (created_at, updated_at)
- Plan indexes for common queries

Indexes Strategy:
- Primary key: Always indexed
- Foreign keys: Always indexed
- Frequently searched fields: Index
- Frequently sorted fields: Index
- Don't over-index (slows writes)

PostgreSQL Example (Task Management):
- users: id, email, password, name, created_at
- tasks: id, title, description, user_id, due_date, status
- projects: id, name, owner_id, created_at
- project_members: project_id, user_id (many-to-many)
- task_comments: id, task_id, user_id, content, created_at

MongoDB Example (Activity Logs):
- {
    "_id": ObjectId,
    "userId": "123",
    "action": "task_created",
    "resourceId": "task_456",
    "metadata": { "title": "...", "dueDate": "..." },
    "createdAt": ISODate("2025-06-10T...")
  }
```

**Live Demo - Schema Design Tool:**
```
Using Prisma (for PostgreSQL):

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String
  password String
  createdAt DateTime @default(now())
  
  tasks Task[]
  comments Comment[]
}

model Task {
  id    Int     @id @default(autoincrement())
  title String
  description String
  userId Int
  user User @relation(fields: [userId], references: [id])
  dueDate DateTime?
  status String @default("todo")
  createdAt DateTime @default(now())
  
  comments Comment[]
  
  @@index([userId])
  @@index([status])
}

model Comment {
  id    Int     @id @default(autoincrement())
  content String
  taskId Int
  task Task @relation(fields: [taskId], references: [id])
  userId Int
  user User @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
  
  @@index([taskId])
  @@index([userId])
}
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | API Design & Specification (90 min)**

*Teaching Strategy:* Design API contract before implementation

**Topics:**
```
RESTful API Principles:
- Resources as nouns: /api/tasks, /api/users
- HTTP verbs for actions: GET, POST, PUT, DELETE
- Proper status codes: 200, 201, 400, 401, 404, 500
- Consistent response format: { "data": ..., "error": ... }
- Versioning if needed: /api/v1/

API Endpoint Design:

GET /api/tasks
- List all tasks (with pagination, filtering)
- Query: ?status=todo&limit=20&offset=0
- Response: { "data": [...], "total": 100, "hasMore": true }

GET /api/tasks/:id
- Get single task
- Response: { "data": { "id": 1, "title": "...", ... } }

POST /api/tasks
- Create new task
- Body: { "title": "...", "description": "...", "dueDate": "..." }
- Response: { "data": { "id": 1, ... } } (status 201)

PUT /api/tasks/:id
- Update task
- Body: { "status": "in_progress" }
- Response: { "data": { "id": 1, ... } }

DELETE /api/tasks/:id
- Delete task
- Response: {} (status 204)

Error Responses:
- 400: Invalid input, validation errors
- 401: Not authenticated
- 403: Not authorized
- 404: Resource not found
- 500: Server error
```

**Live Demo - OpenAPI/Swagger Specification:**

```yaml
openapi: 3.0.0
info:
  title: Task Management API
  version: 1.0.0

paths:
  /api/tasks:
    get:
      summary: List all tasks
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [todo, in_progress, done]
      responses:
        '200':
          description: List of tasks
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Task'
    post:
      summary: Create a task
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateTaskInput'
      responses:
        '201':
          description: Task created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'

components:
  schemas:
    Task:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        description:
          type: string
        status:
          type: string
          enum: [todo, in_progress, done]
        dueDate:
          type: string
          format: date-time
        createdAt:
          type: string
          format: date-time

    CreateTaskInput:
      type: object
      required:
        - title
      properties:
        title:
          type: string
        description:
          type: string
        dueDate:
          type: string
          format: date-time
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Architecture Document Finalization (30 min)**

*Teaching Strategy:* Create single source of truth for architecture

**Student Activities:**
1. Finalize architecture diagram (C4 Model)
2. Document all ADRs (at least 3-5 key decisions)
3. Write API specification (OpenAPI/Swagger format)
4. Document database schema with rationale
5. Create deployment architecture diagram
6. Document security considerations (authentication, authorization, data validation)
7. Commit all documentation to git

---

### WEDNESDAY: Backend Development, API Implementation (6.5 hours)

**Learning Goals:**
- Build professional backend APIs
- Implement authentication and authorization
- Create proper project structure
- Build multiple endpoints with validation
- Test APIs with Postman/Insomnia

**9:00 - 9:30 | Backend Architecture Patterns (30 min)**

*Teaching Strategy:* Professional structure from the start

**Topics:**
```
Layered Architecture:
- Routes/Controllers: Handle HTTP, request/response
- Services: Business logic
- Repositories/DAOs: Data access
- Models/Entities: Data structures
- Middleware: Cross-cutting concerns

Directory Structure (Node.js + Express):
src/
├── routes/          # Express route definitions
├── controllers/     # Request handlers
├── services/        # Business logic
├── repositories/    # Database queries
├── models/          # Data structures, Prisma schemas
├── middleware/      # Auth, logging, error handling
├── utils/           # Helpers, constants
├── types/           # TypeScript types, interfaces
└── config/          # Configuration, database connection

Directory Structure (Python + FastAPI):
app/
├── routers/         # Route definitions
├── models/          # SQLAlchemy models
├── schemas/         # Pydantic schemas (request/response)
├── services/        # Business logic
├── database.py      # Database connection
├── main.py          # FastAPI app setup
├── middleware/      # Custom middleware
└── utils/           # Helpers
```

**Live Demo - Project Setup:**

```bash
# Node.js + Express + TypeScript
mkdir backend-node && cd backend-node
npm init -y
npm install express typescript @types/express @types/node ts-node
npm install dotenv cors helmet morgan
npm install prisma @prisma/client
npm install -D typescript ts-node @types/express

# Create directories
mkdir -p src/{routes,controllers,services,repositories,middleware,types,config,utils}

# Create tsconfig.json
# Create .env file with DATABASE_URL
# Create src/index.ts with Express app setup

# Python + FastAPI
mkdir backend-python && cd backend-python
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv

# Create directories
mkdir -p app/{routers,models,schemas,services}

# Create app/main.py with FastAPI setup
```

**9:30 - 11:00 | Authentication & Middleware (90 min)**

*Teaching Strategy:* Security first, before business logic

**Topics:**
```
JWT Authentication Flow:
1. User posts username/password to /auth/login
2. Server verifies credentials, generates JWT
3. Server returns token to client
4. Client includes token in Authorization header
5. Server validates token on protected routes
6. Token contains user info, expires after time period

JWT Structure:
- Header: { "alg": "HS256", "typ": "JWT" }
- Payload: { "userId": "123", "email": "...", "iat": ..., "exp": ... }
- Signature: HMACSHA256(base64(header) + "." + base64(payload), secret)

Middleware Patterns:
- Authentication: Verify JWT token, attach user to request
- Authorization: Check user has required roles/permissions
- Validation: Check request data format
- Error Handling: Catch errors, return proper HTTP status
- Logging: Log requests, responses, errors
- CORS: Enable cross-origin requests from frontend
```

**Live Demo - Node.js Auth Middleware:**

```typescript
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: { id: string; email: string };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    res.status(401).json({ error: 'Missing authorization header' });
    return;
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      email: string;
    };
    req.user = { id: decoded.userId, email: decoded.email };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

**Live Demo - Python Auth Middleware:**

```python
from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthCredentials
import jwt
from typing import Optional

security = HTTPBearer()

async def verify_token(credentials: HTTPAuthCredentials = Depends(security)):
    try:
        payload = jwt.decode(
            credentials.credentials,
            os.getenv("JWT_SECRET"),
            algorithms=["HS256"]
        )
        user_id = payload.get("user_id")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return {"user_id": user_id, "email": payload.get("email")}
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Building CRUD Endpoints (75 min)**

*Teaching Strategy:* Build one complete resource, then repeat pattern

**Topics:**
```
CRUD Pattern:
- Create: POST /resource, receive data, save, return with ID
- Read: GET /resource/:id, fetch from database, return
- Update: PUT /resource/:id, receive partial data, update, return
- Delete: DELETE /resource/:id, remove, return 204 or success

Validation:
- Type validation: Is it a string? A number?
- Length validation: String min/max length?
- Format validation: Is it a valid email? Date?
- Business validation: Can user perform this action?
- Return 400 with clear error messages

Error Handling:
- Try-catch blocks around database calls
- Distinguish 400 errors (client fault) from 500 (server fault)
- Provide helpful error messages
- Log errors for debugging
- Don't expose internal details to client
```

**Live Demo - Node.js Task CRUD:**

```typescript
// controllers/taskController.ts
import { Request, Response } from 'express';
import { createTask, getTaskById, updateTask, deleteTask } from '../services/taskService';

export const createTaskHandler = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    
    const task = await createTask({
      title,
      description: description || null,
      dueDate: dueDate ? new Date(dueDate) : null,
      userId: (req as any).user.id,
    });
    
    return res.status(201).json({ data: task });
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ error: 'Failed to create task' });
  }
};

export const getTaskHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(id, (req as any).user.id);
    
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    return res.json({ data: task });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch task' });
  }
};
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | API Testing & Documentation (90 min)**

*Teaching Strategy:* API testing as quality assurance

**Topics:**
```
API Testing Tools:
- Postman: GUI, collections, environments
- Insomnia: Similar to Postman
- Thunder Client: VS Code extension
- curl: Command line, scriptable

Testing Approach:
1. Test happy path (valid input, successful response)
2. Test error cases (invalid input, 400 errors)
3. Test authorization (unauthorized 401, forbidden 403)
4. Test edge cases (null, empty, max/min values)
5. Test with different content types (JSON, form data)

Postman Collection Structure:
- Create folder per endpoint
- POST /tasks: Create task
- GET /tasks/:id: Get task
- PUT /tasks/:id: Update task
- DELETE /tasks/:id: Delete task

For each:
- Store response in variable for chaining
- Use pre-request scripts for setup
- Use tests for assertions
- Document expected behavior
```

**Live Demo - Postman Collection:**

```json
{
  "info": {
    "name": "Task API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Auth",
      "item": [
        {
          "name": "Login",
          "request": {
            "method": "POST",
            "url": "{{baseUrl}}/api/auth/login",
            "body": {
              "mode": "raw",
              "raw": "{\"email\": \"user@example.com\", \"password\": \"password\"}"
            }
          },
          "tests": "var jsonData = pm.response.json(); pm.environment.set('token', jsonData.token);"
        }
      ]
    },
    {
      "name": "Tasks",
      "item": [
        {
          "name": "Create Task",
          "request": {
            "method": "POST",
            "header": {
              "Authorization": "Bearer {{token}}"
            },
            "url": "{{baseUrl}}/api/tasks",
            "body": {
              "mode": "raw",
              "raw": "{\"title\": \"New Task\", \"dueDate\": \"2025-06-15\"}"
            }
          }
        }
      ]
    }
  ]
}
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Code Quality & Review Process (30 min)**

*Teaching Strategy:* Professional code review practices from day 1

**Student Activities:**
1. Set up ESLint/Prettier for Node.js
2. Set up Black/Flake8 for Python
3. Create PR template with checklist
4. Push code with basic API endpoints to GitHub
5. Create pull request for review
6. Conduct peer code review
7. Merge approved code

---

### THURSDAY: Database Setup, Modeling, Migrations (6.5 hours)

**Learning Goals:**
- Set up production-grade databases
- Implement database migrations
- Create data models with relationships
- Write and test database queries
- Seed test data

**9:00 - 9:30 | Database Connection & Setup (30 min)**

*Teaching Strategy:* Data layer as foundation

**Topics:**
```
Database Connection Patterns:
- Connection string: postgresql://user:pass@host:port/database
- Connection pooling: Reuse connections, better performance
- Environment variables: Never hardcode credentials
- Health checks: Verify connection on startup
- Graceful shutdown: Close connections properly

Connection Pooling:
- Maintain N open connections
- Requests get connection from pool
- Return connection after request done
- Prevents "too many connections" errors
- Improves performance (no connection overhead)

Example Connection Strings:
PostgreSQL: postgresql://user:password@localhost:5432/capstone
MongoDB: mongodb://user:password@localhost:27017/capstone
Redis: redis://localhost:6379
```

**Live Demo - Database Connections:**

```typescript
// Node.js + Prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Prisma handles connection pooling automatically
// Default: 2 min connections, 10 max connections

// Connect on startup, disconnect on shutdown
async function main() {
  try {
    await prisma.$connect();
    console.log('Database connected');
    
    // Use prisma
  } finally {
    await prisma.$disconnect();
  }
}
```

```python
# Python + SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.pool import NullPool

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(
    DATABASE_URL,
    poolclass=NullPool,  # Don't pool for development
    # or use QueuePool for production
)

# Create session
from sqlalchemy.orm import sessionmaker
SessionLocal = sessionmaker(bind=engine)
```

**9:30 - 11:00 | Database Migrations (90 min)**

*Teaching Strategy:* Migrations as version control for schema

**Topics:**
```
Why Migrations Matter:
- Schema changes without losing data
- Version control for database
- Team collaboration on schema changes
- Rollback capability
- Audit trail of schema evolution

Migration Process:
1. Define models/schema in code
2. Generate migration file (auto or manual)
3. Review migration (is it correct?)
4. Run migration on database
5. Version control the migration file
6. Other developers run same migration

Prisma Migrations Example:
# After changing schema.prisma
npx prisma migrate dev --name add_task_priority
# Creates: prisma/migrations/20250610_add_task_priority/migration.sql

# Deploy to production
npx prisma migrate deploy
# Runs all pending migrations
```

**Live Demo - Creating Migrations:**

```bash
# Scenario: Add priority field to Task model

# 1. Update schema.prisma
model Task {
  ...existing fields...
  priority Int @default(0)  # New field
}

# 2. Create migration
npx prisma migrate dev --name add_priority_to_tasks

# 3. Review generated migration file:
# prisma/migrations/20250610_add_priority/migration.sql
# ALTER TABLE "Task" ADD COLUMN "priority" INTEGER NOT NULL DEFAULT 0;

# 4. Commit migration files
git add prisma/migrations/
git commit -m "Add priority field to tasks"

# 5. Other developers run
npx prisma migrate deploy
```

**Live Demo - SQLAlchemy Migrations (Alembic):**

```bash
# Initialize migrations
alembic init migrations

# After model changes:
alembic revision --autogenerate -m "Add priority to Task"

# Review generated migration in migrations/versions/

# Apply migration
alembic upgrade head

# Downgrade
alembic downgrade -1
```

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:30 | Data Models & Relationships (75 min)**

*Teaching Strategy:* Correctly modeled data prevents bugs

**Topics:**
```
Data Model Patterns:

One-to-Many (User has many Tasks):
- User.id → Task.userId (foreign key)
- Queries: Find all tasks for user, get task with user

Many-to-Many (Task has many Tags, Tag has many Tasks):
- Join table: TaskTag (taskId, tagId)
- Queries: Find all tags for task, find all tasks with tag

Indexes for Performance:
- Primary key: Always indexed (unique constraint)
- Foreign keys: Always index (for joins)
- Frequently searched: Index (email, username)
- Frequently sorted: Index (created_at, status)
- Don't over-index: Slows inserts/updates

Timestamps:
- created_at: When record created, never changes
- updated_at: When record created or updated
- deleted_at: Soft delete timestamp (if using soft deletes)
```

**Live Demo - Complete Data Model (Prisma):**

```typescript
// prisma/schema.prisma

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String   // Should be hashed
  name      String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  tasks       Task[]
  comments    Comment[]
  projectAccess ProjectMember[]
  
  @@index([email])
}

enum Role {
  USER
  ADMIN
}

model Project {
  id        Int      @id @default(autoincrement())
  name      String
  description String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  tasks   Task[]
  members ProjectMember[]
  
  @@index([name])
}

model ProjectMember {
  projectId Int
  userId    Int
  role      ProjectRole @default(MEMBER)
  
  project Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  user    User    @relation("projectAccess", fields: [userId], references: [id], onDelete: Cascade)
  
  @@id([projectId, userId])
  @@index([userId])
}

enum ProjectRole {
  OWNER
  ADMIN
  MEMBER
  VIEWER
}

model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  status      TaskStatus @default(TODO)
  priority    Int      @default(0)
  dueDate     DateTime?
  userId      Int      // Owner
  projectId   Int
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  user      User    @relation(fields: [userId], references: [id])
  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  tags      Tag[]
  comments  Comment[]
  
  @@index([userId])
  @@index([projectId])
  @@index([status])
  @@index([dueDate])
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
  CANCELED
}

model Tag {
  id    Int     @id @default(autoincrement())
  name  String  @unique
  tasks Task[]
}

model Comment {
  id        Int     @id @default(autoincrement())
  content   String
  taskId    Int
  userId    Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  task User @relation(fields: [taskId], references: [id], onDelete: Cascade)
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([taskId])
  @@index([userId])
}
```

**12:30 - 1:30 | LUNCH (1 hour)**

**1:30 - 3:00 | Testing Database, Seeding Data (90 min)**

*Teaching Strategy:* Good test data enables good testing

**Topics:**
```
Seeding Strategy:
- Create initial data for development
- Create realistic data (not just "test1", "test2")
- Include edge cases in seed data
- Make seed scripts idempotent (safe to run multiple times)
- Consider performance (thousands of records?)

Test Data Requirements:
- Multiple users with different roles
- Multiple projects with different states
- Tasks with various statuses and priorities
- Edge cases: null values, min/max values
- Enough data to test pagination

Database Testing:
- Test queries work correctly
- Test relationships are correct
- Test indexes exist
- Test constraints work
- Test migrations are reversible
```

**Live Demo - Seed Script (Prisma):**

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (development only!)
  await prisma.comment.deleteMany({});
  await prisma.task.deleteMany({});
  await prisma.projectMember.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.user.deleteMany({});
  
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      password: await bcrypt.hash('password123', 10),
      name: 'Alice Smith',
      role: 'ADMIN',
    },
  });
  
  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      password: await bcrypt.hash('password123', 10),
      name: 'Bob Jones',
      role: 'USER',
    },
  });
  
  // Create project
  const project = await prisma.project.create({
    data: {
      name: 'Website Redesign',
      description: 'Redesign company website',
      members: {
        create: [
          { userId: user1.id, role: 'OWNER' },
          { userId: user2.id, role: 'MEMBER' },
        ],
      },
    },
  });
  
  // Create tasks
  const tasks = [];
  for (let i = 1; i <= 10; i++) {
    const task = await prisma.task.create({
      data: {
        title: `Task ${i}`,
        description: `Description for task ${i}`,
        status: i % 3 === 0 ? 'DONE' : i % 2 === 0 ? 'IN_PROGRESS' : 'TODO',
        priority: i % 5,
        dueDate: new Date(Date.now() + i * 86400000), // i days from now
        userId: i % 2 === 0 ? user1.id : user2.id,
        projectId: project.id,
      },
    });
    tasks.push(task);
  }
  
  // Create tags
  const tags = await prisma.tag.createMany({
    data: [
      { name: 'frontend' },
      { name: 'backend' },
      { name: 'database' },
      { name: 'bug' },
      { name: 'feature' },
    ],
  });
  
  console.log(`Created ${tasks.length} tasks`);
  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// In package.json:
// "prisma": {
//   "seed": "ts-node prisma/seed.ts"
// }
// Then run: npx prisma db seed
```

**3:00 - 3:15 | BREAK (15 min)**

**3:15 - 3:45 | Query Optimization & Testing (30 min)**

*Teaching Strategy:* Performance from the start

**Student Activities:**
1. Set up databases (PostgreSQL + MongoDB or Redis)
2. Run migrations to create schema
3. Run seed scripts to populate data
4. Query databases manually to verify
5. Add database tests to test suite
6. Push all code and migrations to GitHub
7. Document database setup in README

---

### FRIDAY: Sprint Review, Retrospective, Sprint 2 Planning (4 hours)

**Learning Goals:**
- Present completed Sprint 1 work
- Conduct effective code reviews
- Reflect on process and outcomes
- Plan Sprint 2 improvements
- Gather instructor feedback

**9:00 - 10:15 | Sprint Review Presentations (1 hour 15 min)**

*Teaching Strategy:* Professional presentations to build communication skills

**Format:**
- 5 minutes per student/pair
- Demo running application
- Show git commit history
- Discuss architecture decisions
- Show test coverage
- Answer questions

**Presentation Checklist:**
- [ ] Project goal clearly stated
- [ ] Architecture diagram explained
- [ ] Backend API demonstrated (working endpoints)
- [ ] Database schema explained
- [ ] Testing approach discussed
- [ ] Git workflow shown (clean history)
- [ ] Next week's plan mentioned
- [ ] Time management: Stick to 5 minutes

**10:15 - 11:00 | Instructor Feedback & Code Review (45 min)**

*Teaching Strategy:* Constructive feedback for improvement

**Feedback Areas:**
- Architecture quality and justification
- Code organization and cleanliness
- Testing coverage and quality
- Documentation completeness
- Git workflow and commit messages
- Dual-language usage (both JS and Python substantially used)
- Professional practices (error handling, validation, logging)

**Code Review Process:**
1. Assign reviewers (peer review, cross-pairs)
2. Reviewers comment on GitHub PRs
3. Address feedback with follow-up commits
4. Merge when approved
5. Document lessons learned

**11:00 - 11:15 | BREAK (15 min)**

**11:15 - 12:00 | Sprint Retrospective (45 min)**

*Teaching Strategy:* Continuous improvement mindset

**Retrospective Format:**
1. What went well this sprint? (10 min)
   - Celebrate successes
   - Identify practices to continue
   
2. What was challenging? (10 min)
   - Identify blockers
   - Discuss lessons learned
   
3. What will we improve? (15 min)
   - Specific action items
   - How to implement changes
   - Who's responsible
   
4. Action items for Sprint 2 (10 min)
   - Velocity planning
   - Scope adjustments
   - Risk mitigation

**Sample Discussion Points:**
- Did we underestimate story sizes?
- Were communication and standups effective?
- Any tools that slowed us down?
- What technical debt did we accumulate?
- Should we adjust technologies?
- Do we need different pair dynamics?

**12:00 - 1:00 | Sprint 2 Planning (1 hour)**

*Teaching Strategy:* Plan while momentum is high

**Sprint 2 Planning Topics:**
1. Frontend development (React components)
2. Integration (connect frontend to backend)
3. Testing (comprehensive testing suite)
4. Docker containerization
5. Deployment preparation
6. Final documentation and polish

**User Stories for Sprint 2:**
- Build React components matching API
- Implement state management
- Add error handling and user feedback
- Implement responsive design
- Write integration tests
- Dockerize all services
- Complete CI/CD pipeline
- Deploy to staging

**Closing Remarks:**
- Celebrate progress made in Week 16
- Emphasize quality of work so far
- Discuss how Week 17 completes the project
- Encourage continued professional practices
- Remind about portfolio quality expectations

---

## Assignments & Deliverables

### Sprint 1 Deliverables (100 points)

By Friday end of day, each student/pair must have:

**1. Project Plan & Documentation (15 points)**
- User stories with acceptance criteria (minimum 20 stories)
- Sprint backlog with prioritized tasks
- GitHub Project board set up with automation
- README with project overview and setup instructions
- Architecture documentation with justification

**2. Architecture Design (20 points)**
- System architecture diagram (C4 Model)
- Technology stack justification document
- Database architecture diagram and schema documentation
- At least 5 Architecture Decision Records (ADRs)
- API specification (OpenAPI/Swagger)
- Security considerations documented

**3. Backend API Implementation (30 points)**
- 5+ RESTful endpoints implemented
- JWT authentication with middleware
- Input validation on all endpoints
- Proper error handling with meaningful messages
- Professional code structure (controllers, services, repositories)
- API documentation (Swagger/auto-generated)
- Postman/Insomnia collection for testing

**4. Database Implementation (20 points)**
- 2+ database systems configured (PostgreSQL, MongoDB, Redis, etc.)
- Database schema with proper relationships and indexes
- Migration scripts for schema management
- Data models/ORMs implemented (Prisma, SQLAlchemy)
- Test data seeding scripts
- Query optimization and indexes planned

**5. Testing Setup (10 points)**
- Test framework configured (Jest, pytest)
- At least 10 unit tests for backend
- At least 10 integration tests
- CI pipeline configured (GitHub Actions)
- Code coverage report (minimum 50%)

**6. Professional Practices (5 points)**
- Clean Git history with meaningful commits
- Pull request template with checklist
- Code review process demonstrated
- Environment variables managed (.env)
- Professional README with setup instructions
- Documentation alongside code

### Grading Rubric

| Criteria | Excellent (A) | Good (B) | Fair (C) | Poor (F) |
|----------|---------------|----------|----------|----------|
| **Planning** | Clear user stories, detailed sprints, realistic estimates | Good user stories, some estimates | Basic stories, vague estimates | Missing or inadequate |
| **Architecture** | Well-designed, justified choices, all ADRs | Good design, most decisions documented | Adequate design, minimal docs | Unclear or problematic |
| **Backend API** | 5+ endpoints, auth, validation, clean code | 4+ endpoints, auth working, decent structure | 2-3 endpoints, minimal validation | Incomplete or broken |
| **Database** | 2+ DBs, good schema, migrations, optimized | PostgreSQL set up, basic schema, migrations | Single DB, basic schema | Missing or incomplete |
| **Testing** | 20+ tests, 60%+ coverage, CI working | 15+ tests, 50%+ coverage, CI configured | 5+ tests, some coverage | Minimal or no tests |
| **Professionalism** | Excellent Git history, documentation, code review | Good practices, mostly clean | Adequate but messy | Poor or missing practices |

---

## Resource Materials

### Project Planning & Agile
- [Atlassian Agile Guides](https://www.atlassian.com/agile)
- [User Story Guide](https://www.atlassian.com/agile/project-management/user-stories)
- [Story Points & Estimation](https://www.atlassian.com/agile/project-management/estimation)

### Architecture & Design
- [C4 Model](https://c4model.com/) - System architecture diagrams
- [ADR GitHub](https://adr.github.io/) - Architecture Decision Records
- [API Design Guide](https://apiguide.readthedocs.io/)
- [System Design Interview](https://system-design-interview.com/)

### Backend Development
- [Express Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [REST API Design Rulebook](https://restfulapi.net/)
- [JWT Introduction](https://jwt.io/introduction)

### Database
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Database Design Fundamentals](https://www.databasestar.com/)

### Testing
- [Jest Documentation](https://jestjs.io/)
- [Pytest Documentation](https://docs.pytest.org/)
- [Testing Best Practices](https://testingjavascript.com/)

### DevOps & CI/CD
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery)

---

## Assessment Rubric

### Overall Sprint 1 Competency Rubric

| Competency | Level 1 (Novice) | Level 2 (Intermediate) | Level 3 (Advanced) | Level 4 (Mastery) |
|------------|------------------|----------------------|-------------------|------------------|
| **Project Planning** | Vague goals, no user stories | User stories drafted, loose plan | Clear user stories, prioritized backlog | Professional sprint planning, velocity tracking |
| **Architecture** | No clear design | Basic design, few decisions documented | Good design, ADRs for key choices | Excellent design, comprehensive ADRs |
| **Backend Development** | 1-2 endpoints working | 3-4 endpoints, auth works | 5+ endpoints, validation, error handling | Production-grade API, comprehensive testing |
| **Database Design** | Single table, no relations | PostgreSQL schema, basic relationships | Multiple DBs, optimized schema, migrations | Advanced patterns, optimization, testing |
| **Testing** | No tests or <20% coverage | 20-40% coverage, some tests | 50-70% coverage, good tests | 70%+ coverage, comprehensive tests |
| **Professional Practices** | Messy Git history, no docs | Clean history, basic docs | Good history, comprehensive docs | Excellent practices, code review culture |

---

## Troubleshooting Guide

### Project Planning Issues

**Issue: "Students can't agree on project idea"**
- Solution: Provide 8 example projects, let pairs choose from list or suggest alternatives with approval
- Prevention: Have backup project templates ready

**Issue: "Scope creep - project too ambitious"**
- Solution: Force MVP definition first, move features to "future work"
- Prevention: Instructor review and approval before coding starts

**Issue: "Team members unequally contributing"**
- Solution: Daily standups catch imbalance early, assign clear responsibilities
- Prevention: Pair programming with agreed schedule

### Architecture Issues

**Issue: "Technology choices aren't justified"**
- Solution: Require written justification for each component
- Prevention: Architecture review checkpoint before coding

**Issue: "Dual-language requirement not met"**
- Solution: Require both JS and Python in frontend AND backend services
- Prevention: Clear examples in Week 16 overview, enforce in architecture review

**Issue: "Database schema not normalized"**
- Solution: Code review process catches this, use star schema tool to visualize
- Prevention: Instructor checks schema design on Wednesday

### Backend Development Issues

**Issue: "Authentication not working"**
- Solution: Debug: Check token generation, token validation, middleware order
- Common: Middleware not calling next(), wrong header parsing

**Issue: "CORS errors between frontend and backend"**
- Solution: Configure CORS in Express: `app.use(cors())`
- Prevention: Set up CORS early, test with curl first

**Issue: "API endpoints return wrong data"**
- Solution: Check database queries, verify relationships loaded correctly
- Debug: Add logging to see what database returns

**Issue: "Validation not catching errors"**
- Solution: Implement before controller, return 400 with specific error message
- Prevention: Create validation middleware template

### Database Issues

**Issue: "Migration fails with 'column already exists'"**
- Solution: Check migration already ran, or modify migration to be idempotent
- Prevention: Always include `IF NOT EXISTS` clauses

**Issue: "Seed script fails, data not populated"**
- Solution: Check database connection, verify schema matches seed data
- Debug: Run migrations first, check seed script for errors

**Issue: "Database connection times out"**
- Solution: Check database is running, credentials correct, firewall allows connection
- Local: `psql -U user -d database` to test connection manually

**Issue: "Queries are slow"**
- Solution: Check indexes exist on foreign keys, use EXPLAIN to analyze
- Prevention: Add indexes during schema design

### Testing Issues

**Issue: "Tests pass locally but fail in CI"**
- Solution: Check environment variables set in CI, database available
- Prevention: CI environment should match local as closely as possible

**Issue: "Test database doesn't match production schema"**
- Solution: Run migrations in test setup, use same migration files
- Prevention: Test database should be created from migrations, not snapshot

**Issue: "Code coverage reports not generating"**
- Solution: Check coverage tool configured, add coverage command to package.json
- Debug: Run `jest --coverage` manually to see errors

### Git & Collaboration Issues

**Issue: "Git merge conflicts"**
- Solution: Pull latest before pushing, resolve conflicts manually
- Prevention: Frequent commits and pushes prevent large conflicts

**Issue: "Commit history is messy (40 'fix' commits)"**
- Solution: Interactive rebase to squash commits: `git rebase -i HEAD~40`
- Prevention: Encourage meaningful commits during development

**Issue: "Team can't review each other's code"**
- Solution: Create PR with clear description, use GitHub's review features
- Prevention: PR template with checklist ensures quality

---

## Summary & Closing Notes

Week 16 establishes the foundation for students' capstone projects and professional portfolio. By Friday, students should have:

- **Clear Vision**: They know exactly what they're building and why
- **Solid Architecture**: Documented decisions that will guide development
- **Working Backend**: Functioning APIs that can connect to frontend
- **Professional Approach**: Testing, documentation, and collaboration from day one
- **Dual Competency**: Demonstrated both JavaScript and Python expertise

The week emphasizes not just building software, but building it professionally. Students learn that architecture decisions made on day 1 impact the entire project. Good planning, documentation, and testing now prevent crises later.

**Key Takeaways for Students:**
1. Planning and architecture are as important as coding
2. Good design enables faster development and fewer bugs
3. Documentation is code communication
4. Testing provides confidence in your work
5. Professional practices enable team collaboration

**Preparation for Week 17:**
Week 16 completes the backend and architecture. Week 17 focuses on:
- Frontend development (React components)
- Integration (connecting all pieces)
- Comprehensive testing (unit, integration, end-to-end)
- Deployment (Docker, CI/CD, staging environment)
- Final documentation and polish
- Professional presentation

Students should leave Friday excited about their projects and confident in the foundation they've built. Week 17 is about bringing it all together into a complete, deployable application.