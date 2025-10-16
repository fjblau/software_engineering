# Week 13 Teacher's Guide: Full-Stack Professional Capstone
## Month 3 Integration & Sprint Project

**Duration:** 30 hours  
**Dates:** May 19-23, 2025  
**Focus:** Full-Stack Development, Authentication, Testing, CI/CD, Production Deployment, Professional Practices

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

Week 13 is the **Month 3 capstone week** where students integrate everything they've learned into a complete, professional full-stack application. This is not a lesson-based week but a **project-based sprint** where students work individually or in small teams to build a production-ready application from concept to deployment.

### Key Teaching Points

- **Capstone Integration:** Students apply Weeks 1-12 knowledge in a real project
- **Professional Standards:** Code quality, security, testing, documentation, and deployment matter
- **Time Management:** With only 30 hours, prioritization is critical
- **Problem-Solving:** Students encounter real challenges and must solve them
- **Presentation Skills:** Communicating technical work is essential
- **Sprint Methodology:** Follow Agile practices with daily standups and retrospectives

### Week 13 Success Metrics

✅ Students complete a full-stack application with authentication  
✅ Students implement comprehensive testing (frontend & backend)  
✅ Students deploy to production with CI/CD pipeline  
✅ Students write professional documentation  
✅ Students present technical work effectively  
✅ Students follow Git best practices and code quality standards  
✅ Students conduct meaningful retrospectives  

---

## Learning Objectives

By the end of Week 13, students will be able to:

### Project Planning & Architecture
- Gather and document requirements effectively
- Design normalized database schemas with relationships
- Plan RESTful API architecture (15+ endpoints)
- Create component hierarchies for React applications
- Estimate tasks and manage time within constraints
- Use sprint planning and backlog management

### Full-Stack Implementation
- Build complete React applications (12+ components)
- Implement authentication and authorization flows
- Develop RESTful APIs with proper validation and error handling
- Design and migrate PostgreSQL databases
- Integrate frontend and backend with proper CORS and error handling
- Implement protected routes and user-specific data access

### Testing & Quality Assurance
- Write unit tests for React components and backend functions
- Write integration tests for API endpoints
- Test authentication and authorization logic
- Achieve 70%+ code coverage
- Use testing frameworks appropriately (Jest, pytest, etc.)
- Validate error handling and edge cases

### Deployment & DevOps
- Deploy frontend applications (Vercel/Netlify)
- Deploy backend APIs (Render/Railway/Heroku)
- Manage PostgreSQL hosted databases
- Configure CI/CD pipelines with GitHub Actions
- Manage environment variables securely
- Monitor deployed applications for errors

### Professional Development
- Follow Git workflows with meaningful commits and PRs
- Write comprehensive documentation (README, API docs, architecture)
- Communicate technical concepts clearly in presentations
- Identify blockers and ask for help appropriately
- Conduct retrospectives and reflect on learning
- Implement security best practices (hashing, JWT, environment variables)

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday May 19)

**Critical Actions:**
1. ✅ Test deployment services (Vercel, Netlify, Render, Railway)
2. ✅ Set up sample full-stack project end-to-end
3. ✅ Create PostgreSQL test database on hosted service (e.g., Neon, Railway)
4. ✅ Prepare GitHub starter templates for 3-4 project options
5. ✅ Set up CI/CD example with GitHub Actions
6. ✅ Create project templates with basic scaffolding to save setup time
7. ✅ Prepare debugging environment (live coding setup)
8. ✅ Review common full-stack pitfalls and solutions
9. ✅ Plan daily standup format (15-20 min per team)
10. ✅ Prepare presentation evaluation rubric
11. ✅ Create sprint planning template and backlog examples

**Classroom Setup:**
- Ensure stable internet (deployment requires downloads)
- Have project templates ready in GitHub repos
- Test that all deployment services are accessible in your region
- Have backup solutions if primary services are unavailable
- Prepare example `.env` files (with fake credentials)
- Set up monitoring dashboards (Sentry, LogRocket demo accounts)

**Resources to Prepare:**
- Project scaffolds with basic folder structure
- `.gitignore` templates (Node.js, Python)
- `.env.example` files with required variables
- Sample database migration scripts
- CI/CD workflow YAML examples
- API documentation template (Swagger/OpenAPI example)

### Student Prerequisites (Send Email Friday May 16)

**MUST HAVE BEFORE MONDAY:**
- [ ] Strong React knowledge (Weeks 11-12)
- [ ] Backend API experience (Flask/FastAPI or Express - Weeks 9-10)
- [ ] PostgreSQL database design knowledge (Week 7)
- [ ] Authentication concepts (JWT, password hashing)
- [ ] Git proficiency with GitHub
- [ ] Testing framework experience (Jest, pytest)

**MUST INSTALL BY MONDAY:**

```bash
# Create React App OR Vite project
npx create-react-app my-app
# OR
npm create vite@latest my-app -- --template react

# Node.js backend setup
mkdir my-app-backend
cd my-app-backend
npm init -y
npm install express cors dotenv pg bcryptjs jsonwebtoken

# OR Python backend setup
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install flask flask-cors python-dotenv psycopg2-binary pyjwt

# Testing tools
npm install --save-dev jest @testing-library/react
# OR
pip install pytest pytest-cov pytest-mock
```

**Run Verification:**

```bash
# Node.js versions
node --version  # Should be v16+
npm --version   # Should be v7+

# Python version
python --version  # Should be 3.8+

# Create test project
npx create-react-app test-week13
cd test-week13
npm start
# Should open to localhost:3000
```

### Software & Tool Requirements

| Tool | Version | Purpose | Link |
|------|---------|---------|------|
| Node.js | 16+ LTS | JavaScript runtime | https://nodejs.org |
| npm | 7+ | Package manager | Bundled with Node |
| React | 18+ | Frontend framework | npm install |
| React Router | 6+ | Routing | npm install react-router-dom |
| PostgreSQL | 13+ | Database | https://www.postgresql.org |
| Python | 3.8+ | Backend language | https://python.org |
| Flask/Express | Latest | Backend framework | npm/pip install |
| Git | 2.30+ | Version control | https://git-scm.com |
| VS Code | Latest | IDE | https://code.visualstudio.com |
| Vercel CLI | Latest | Deploy frontend | npm install -g vercel |
| Docker | Latest | Containerization (optional) | https://docker.com |
| Postman/Thunder Client | Latest | API testing | Extension in VS Code |

### Deployment Services Account Setup

Students MUST have accounts or sign-ups ready:

1. **Frontend Hosting:**
   - ✅ Vercel (https://vercel.com) - Recommended for React
   - ✅ Netlify (https://netlify.com) - Alternative

2. **Backend Hosting:**
   - ✅ Render (https://render.com) - Free tier available
   - ✅ Railway (https://railway.app) - Free tier available
   - ✅ Heroku (requires paid plan now)

3. **Database Hosting:**
   - ✅ Neon (https://neon.tech) - Managed PostgreSQL, free tier
   - ✅ Railway - Includes PostgreSQL
   - ✅ Render - PostgreSQL hosting available

4. **Monitoring & Error Tracking:**
   - ✅ Sentry (https://sentry.io) - Free tier
   - ✅ LogRocket (optional) - Frontend monitoring

### VS Code Extensions (Required by Monday)

**Frontend & React:**
- ES7+ React/Redux/React-Native snippets (dsznajder.es7-react-js-snippets)
- Prettier - Code formatter (esbenp.prettier-vscode)
- ES Lint (dbaeumer.vscode-eslint)
- Thunder Client (rangav.rest-client)

**Backend Development:**
- Python (ms-python.python)
- Pylance (ms-python.vscode-pylance)
- PostgreSQL (ms-vscode.cpptools)

**Database & DevOps:**
- Database Client (cweijan.vscode-database-client2)
- Docker (ms-azuretools.vscode-docker)
- GitLens (eamodio.gitlens)

---

## Daily Schedule & Topics

### MONDAY: Sprint Planning & Architecture Design – 6.5 hours

**Learning Goals:**
- Understand project requirements and scope
- Design complete system architecture
- Create database schemas with relationships
- Plan API endpoints and frontend components
- Set up Git repository and sprint backlog

**9:00 - 9:30 | Welcome & Week Overview (30 min)**
- Month 3 capstone importance
- Real-world application focus
- Week structure (sprint methodology)
- Grading criteria overview
- Q&A

**9:30 - 10:15 | Project Selection & Requirements Gathering (45 min)**

Present 4-5 project options and let students choose:

1. **Task Management System** - Teams, projects, tasks, comments
2. **Recipe Sharing Platform** - Recipes, ingredients, ratings, favorites
3. **Expense Tracker** - Accounts, transactions, budgets, reports
4. **Event Management System** - Events, attendees, tickets, notifications
5. **Learning Platform** - Courses, lessons, quizzes, progress

For each project provide:
- Feature list (required vs. optional)
- Database schema diagram
- API endpoint list
- Component hierarchy
- 1-2 user stories

**Demo:** Show a complete project example deployed end-to-end.

**10:15 - 10:30 | BREAK (15 min)**

**10:30 - 11:45 | Database Design & Schema Planning (75 min)**

Students should:
1. Identify all entities (users, tasks, projects, etc.)
2. Define relationships (one-to-many, many-to-many)
3. Plan fields for each table
4. Identify primary and foreign keys
5. Create an ER diagram

**Activity:** Use Draw.io or similar tool to create schema diagrams

Example schema for Task Management:
```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Teams table
CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  owner_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team Members (junction table)
CREATE TABLE team_members (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id),
  user_id INTEGER REFERENCES users(id),
  role VARCHAR(50) DEFAULT 'member',
  UNIQUE(team_id, user_id)
);

-- Projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks table
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  assigned_to INTEGER REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'todo',
  priority VARCHAR(50) DEFAULT 'medium',
  due_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Comments table
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  task_id INTEGER REFERENCES tasks(id),
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**11:45 - 1:00 | API Planning & Frontend Architecture (75 min)**

**API Endpoint Planning:**
Students list all endpoints needed (15+ minimum):
```
Authentication:
- POST /auth/register
- POST /auth/login
- POST /auth/logout
- GET /auth/me

Users:
- GET /users/:id
- PUT /users/:id
- GET /users/:id/teams

Teams:
- POST /teams
- GET /teams
- GET /teams/:id
- PUT /teams/:id
- POST /teams/:id/members

Tasks:
- POST /tasks
- GET /tasks
- GET /tasks/:id
- PUT /tasks/:id
- DELETE /tasks/:id
```

**Frontend Component Planning:**
Create component hierarchy:
```
App
├── Navbar
├── Router
│   ├── LoginPage
│   ├── RegisterPage
│   ├── Dashboard
│   ├── TeamPage
│   ├── ProjectPage
│   ├── TaskPage
│   └── ProfilePage
└── Footer
```

**1:00 - 2:00 | Git Setup & Sprint Backlog Creation (60 min)**

Students should:
1. Create GitHub repository (public)
2. Add `.gitignore` for Node/Python
3. Create `README.md` with project description
4. Create initial folder structure
5. Make first commit
6. Create sprint backlog on GitHub Projects or similar

**Backlog example:**
- [ ] Database schema setup (2 hours)
- [ ] Authentication endpoints (3 hours)
- [ ] User management endpoints (2 hours)
- [ ] Task CRUD endpoints (2 hours)
- [ ] React project setup (1 hour)
- [ ] Authentication UI (3 hours)
- [ ] Task list component (2 hours)
- [ ] Form components (2 hours)
- [ ] Testing setup (1 hour)
- [ ] CI/CD setup (1.5 hours)
- [ ] Deployment (2 hours)

**End of Monday:** Students have project selected, architecture designed, database schema planned, API endpoints listed, GitHub repo set up.

---

### TUESDAY: Backend Implementation & Database Setup – 6.5 hours

**Learning Goals:**
- Create and migrate database schema
- Implement authentication endpoints
- Build CRUD API endpoints
- Set up proper error handling and validation
- Test API with Postman/Thunder Client

**9:00 - 9:30 | Review & Standup (30 min)**
- 15-20 min: Each student/team reports progress from Monday
- What went well? What blockers?
- Instructor provides guidance

**9:30 - 10:45 | Database Setup & Migrations (75 min)**

Students should:
1. Create PostgreSQL database (local or hosted)
2. Write migration scripts
3. Seed initial data (users, sample records)
4. Verify schema with GUI tool or `\dt` in psql

Example Node.js migration pattern:
```javascript
// migrations/001_create_users.js
const pool = require('../db');

async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

migrate().catch(err => console.error(err));
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:30 | Authentication Implementation (90 min)**

Implement JWT-based authentication:

```javascript
// Node.js/Express example
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('./db');
require('dotenv').config();

const router = express.Router();

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Hash password
    const password_hash = await bcrypt.hash(password, 10);
    
    // Create user
    const result = await pool.query(
      'INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING id, email, name',
      [email, password_hash, name]
    );
    
    const user = result.rows[0];
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const user = result.rows[0];
    
    // Verify password
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ user: { id: user.id, email: user.email, name: user.name }, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
```

**12:30 - 1:00 | Lunch (30 min)**

**1:00 - 2:00 | CRUD Endpoints Implementation (60 min)**

Implement 8-10 main CRUD endpoints:

```javascript
// Example: Tasks endpoints
router.post('/tasks', authMiddleware, async (req, res) => {
  // Create task
});

router.get('/tasks', authMiddleware, async (req, res) => {
  // List tasks for current user
});

router.get('/tasks/:id', authMiddleware, async (req, res) => {
  // Get single task
});

router.put('/tasks/:id', authMiddleware, async (req, res) => {
  // Update task
});

router.delete('/tasks/:id', authMiddleware, async (req, res) => {
  // Delete task
});
```

**2:00 - 2:30 | Input Validation & Error Handling (30 min)**

Add validation and proper error responses:

```javascript
// Validation example
function validateTask(data) {
  const errors = [];
  if (!data.title || data.title.length < 3) {
    errors.push('Title must be at least 3 characters');
  }
  if (data.priority && !['low', 'medium', 'high'].includes(data.priority)) {
    errors.push('Invalid priority');
  }
  return errors;
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});
```

**2:30 - 2:45 | Standup & Blockers (15 min)**

Quick check-in on progress and blockers.

**End of Tuesday:** Students have working database with authentication and 8-10 CRUD endpoints tested with Postman.

---

### WEDNESDAY: Frontend Development & Integration – 6.5 hours

**Learning Goals:**
- Build React components for all features
- Implement authentication UI with login/register
- Integrate with backend API
- Handle loading and error states
- Implement protected routes

**9:00 - 9:30 | Review & Standup (30 min)**

**9:30 - 10:45 | React Project Setup & Component Structure (75 min)**

Create project structure:
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── LoginForm.jsx
│   ├── RegisterForm.jsx
│   ├── TaskList.jsx
│   ├── TaskForm.jsx
│   └── ...
├── pages/
│   ├── LoginPage.jsx
│   ├── Dashboard.jsx
│   ├── TaskPage.jsx
│   └── ...
├── services/
│   ├── api.js
│   └── auth.js
├── context/
│   └── AuthContext.jsx
├── hooks/
│   └── useAuth.js
├── App.jsx
└── index.css
```

Example component structure:

```jsx
// components/TaskList.jsx
import { useState, useEffect } from 'react';
import { getTasks } from '../services/api';

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <span className={`priority ${task.priority}`}>{task.priority}</span>
        </div>
      ))}
    </div>
  );
}
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Authentication UI & Protected Routes (60 min)**

```jsx
// pages/LoginPage.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

// Protected route component
export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
```

**12:00 - 1:00 | Lunch (60 min)**

**1:00 - 2:00 | Form Components & API Integration (60 min)**

Create forms for creating/editing data:

```jsx
// components/TaskForm.jsx
export function TaskForm({ onSubmit, initialTask = null }) {
  const [formData, setFormData] = useState(initialTask || {
    title: '',
    description: '',
    priority: 'medium',
    status: 'todo'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>low</option>
        <option>medium</option>
        <option>high</option>
      </select>
      {errors.submit && <p className="error">{errors.submit}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
```

**2:00 - 2:15 | BREAK (15 min)**

**2:15 - 2:45 | Error Handling & Loading States (30 min)**

Implement proper error boundaries and loading patterns throughout the application.

**2:45 - 3:00 | Standup & Blockers (15 min)**

**End of Wednesday:** Students have functional React frontend with authentication flow, forms, and API integration. Application can create, read, update, delete data end-to-end.

---

### THURSDAY: Testing, Deployment & Documentation – 6.5 hours

**Learning Goals:**
- Write unit and integration tests
- Set up CI/CD pipeline
- Deploy frontend and backend
- Create professional documentation
- Achieve 70%+ code coverage

**9:00 - 9:30 | Review & Standup (30 min)**

**9:30 - 10:30 | Backend Testing (60 min)**

```javascript
// tests/auth.test.js
const request = require('supertest');
const app = require('../app');
const pool = require('../db');

describe('Authentication', () => {
  beforeAll(async () => {
    // Setup test database
  });

  afterAll(async () => {
    await pool.end();
  });

  test('POST /auth/register creates new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user.email).toBe('test@example.com');
  });

  test('POST /auth/login returns token', async () => {
    // Register first
    await request(app)
      .post('/auth/register')
      .send({
        email: 'test2@example.com',
        password: 'password123',
        name: 'Test'
      });

    // Login
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'test2@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  test('POST /auth/login fails with wrong password', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword'
      });

    expect(res.statusCode).toBe(401);
  });
});
```

**Frontend testing example:**

```javascript
// components/__tests__/TaskList.test.jsx
import { render, screen } from '@testing-library/react';
import { TaskList } from '../TaskList';
import * as api from '../../services/api';

jest.mock('../../services/api');

test('TaskList renders tasks', async () => {
  api.getTasks.mockResolvedValue([
    { id: 1, title: 'Task 1', description: 'Desc 1' },
    { id: 2, title: 'Task 2', description: 'Desc 2' }
  ]);

  render(<TaskList />);

  expect(await screen.findByText('Task 1')).toBeInTheDocument();
  expect(await screen.findByText('Task 2')).toBeInTheDocument();
});

test('TaskList shows error on API failure', async () => {
  api.getTasks.mockRejectedValue(new Error('API Error'));

  render(<TaskList />);

  expect(await screen.findByText(/Error: API Error/)).toBeInTheDocument();
});
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | CI/CD Setup (60 min)**

Create GitHub Actions workflow:

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_DB: test
          POSTGRES_PASSWORD: password
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

**11:45 - 12:30 | Deployment Setup (45 min)**

**Frontend deployment (Vercel example):**
```bash
npm install -g vercel
vercel login
vercel --prod
# Set environment variables in Vercel dashboard
# REACT_APP_API_URL=https://your-backend-url
```

**Backend deployment (Render example):**
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy from main branch
5. Configure auto-deploy on push

**Database setup:**
1. Create PostgreSQL database on Neon or Railway
2. Get connection string
3. Add to `.env` file
4. Run migrations in production

**12:30 - 1:30 | Lunch (60 min)**

**1:30 - 2:00 | Documentation Writing (30 min)**

Create comprehensive README:

```markdown
# Task Management System

## Overview
A full-stack task management application built with React, Express, and PostgreSQL.

## Features
- User authentication with JWT
- Create, read, update, delete tasks
- Organize tasks into projects
- Collaborate with team members
- Real-time updates

## Setup Instructions

### Prerequisites
- Node.js v16+
- PostgreSQL 13+
- npm v7+

### Installation

1. Clone repository
```bash
git clone https://github.com/user/project.git
cd project
```

2. Setup backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your database URL
npm run migrate
npm run seed
npm start
```

3. Setup frontend
```bash
cd ../frontend
npm install
npm start
```

### Environment Variables

Backend (.env):
```
DATABASE_URL=postgresql://user:pass@localhost/db
JWT_SECRET=your-secret-key
PORT=5000
NODE_ENV=development
```

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:5000
```

## API Documentation

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user

### Tasks
- `GET /tasks` - List all tasks
- `POST /tasks` - Create task
- `GET /tasks/:id` - Get task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

## Testing

Backend:
```bash
cd backend
npm test
npm run test:coverage
```

Frontend:
```bash
cd frontend
npm test
npm run test:coverage
```

## Deployment

See DEPLOYMENT.md for detailed instructions.

## License

MIT
```

**2:00 - 2:30 | Performance & Monitoring (30 min)**

Add error tracking:

```javascript
// Frontend error tracking (Sentry example)
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV
});

// Backend error tracking
const Sentry = require("@sentry/node");

Sentry.init({ dsn: process.env.SENTRY_DSN });

app.use(Sentry.Handlers.errorHandler());
```

**2:30 - 3:00 | Standup, Blockers & Final Review (30 min)**

**End of Thursday:** Students have tested applications, deployed to production, set up CI/CD, and written documentation.

---

### FRIDAY: Sprint Review, Demonstrations & Retrospective – 4 hours

**Learning Goals:**
- Present technical work professionally
- Demonstrate key features
- Receive feedback
- Reflect on learning and growth
- Plan next steps

**9:00 - 10:15 | Sprint Review Presentations (75 min)**

Each student/team presents for 10 minutes following this structure:

**Presentation Format (10 min):**
1. **Introduction** (1 min)
   - Project name and overview
   - Problem it solves
   - Tech stack used

2. **Live Demo** (4 min)
   - Show user registration/login
   - Demonstrate main features
   - Show data persistence
   - Display responsive design

3. **Technical Highlights** (3 min)
   - Database schema shown
   - API architecture
   - Notable implementation details
   - How authentication/authorization works

4. **Challenges & Solutions** (1 min)
   - Main technical challenge faced
   - How they solved it
   - What they learned

5. **Q&A** (1 min)

**Presentation Tips for Students:**
- Keep slides minimal (let code/demo speak)
- Show working application, not slides
- Speak clearly about technical decisions
- Be prepared for questions about code
- Have deployment URL ready

**10:15 - 10:30 | BREAK (15 min)**

**10:30 - 11:45 | Feedback & Code Walkthrough (75 min)**

After each presentation, instructor and peers provide feedback:
- What went well
- What was impressive technically
- Suggestions for improvement
- Questions about implementation

Code quality focus:
- Architecture decisions
- Code organization
- Error handling
- Testing approach
- Deployment setup

**11:45 - 12:30 | Lunch (45 min)**

**12:30 - 1:30 | Sprint Retrospective (60 min)**

Structured retrospective using "Start, Stop, Continue" format:

**What should we START doing?**
- What new practices/tools would help?
- What skills need attention?
- How can we improve our process?

**What should we STOP doing?**
- What wasted time?
- What practices weren't helpful?
- What should be abandoned?

**What should we CONTINUE doing?**
- What worked well?
- Which practices helped?
- What skills are we strong in?

**Individual Reflection Prompts:**
1. What was your biggest challenge this week?
2. What are you most proud of in your project?
3. Rate your understanding of: (1-5 scale)
   - React component architecture
   - Backend API development
   - Database design
   - Testing
   - Deployment
4. What do you want to focus on in Month 4?
5. How has your confidence as a developer changed?

**1:30 - 2:00 | Month 3 Wrap-Up & Celebration (30 min)**

Celebrate progress:
- Students have gone from CLI basics (Week 1) to full-stack applications (Week 13)
- Recognize growth in technical skills
- Preview Month 4 advanced topics
- Distribute certificates/badges
- Thank students for hard work

---

## Assignments & Deliverables

### Weekly Project: Full-Stack Professional Application (100 points)

**Project Requirements:**

Students choose ONE project and build it completely:

1. **Task Management System** OR
2. **Recipe Sharing Platform** OR
3. **Expense Tracker** OR
4. **Event Management System** OR
5. **Learning Platform**

### Grading Rubric (100 points total)

#### 1. React Frontend - 25 points
- [ ] 12+ components (8 pts)
- [ ] Multiple routes with React Router (4 pts)
- [ ] Complex forms with validation (5 pts)
- [ ] Professional styling and responsive design (4 pts)
- [ ] Loading and error states (4 pts)

#### 2. Backend API - 25 points
- [ ] 15+ RESTful endpoints (8 pts)
- [ ] JWT authentication (6 pts)
- [ ] Role-based authorization (5 pts)
- [ ] Input validation and error handling (4 pts)
- [ ] API documentation (2 pts)

#### 3. PostgreSQL Database - 15 points
- [ ] 5+ related tables (5 pts)
- [ ] Proper relationships (one-to-many, many-to-many) (5 pts)
- [ ] Database migrations and seed data (3 pts)
- [ ] Schema normalization (2 pts)

#### 4. Testing - 15 points
- [ ] Backend unit tests (5 pts)
- [ ] Frontend component tests (5 pts)
- [ ] Integration tests (3 pts)
- [ ] 70%+ code coverage (2 pts)

#### 5. Deployment & CI/CD - 10 points
- [ ] Frontend deployed (Vercel/Netlify) (3 pts)
- [ ] Backend deployed (Render/Railway) (3 pts)
- [ ] CI/CD pipeline with GitHub Actions (2 pts)
- [ ] Environment variables properly managed (2 pts)

#### 6. Documentation - 10 points
- [ ] README with setup instructions (3 pts)
- [ ] API documentation (2 pts)
- [ ] Architecture diagram (2 pts)
- [ ] Code comments and clean code (3 pts)

### Deliverables Checklist

**By end of Wednesday:**
- [ ] GitHub repository with all code
- [ ] Database schema implemented and migrated
- [ ] 15+ API endpoints working
- [ ] React frontend with 10+ components
- [ ] Authentication flow complete

**By end of Thursday:**
- [ ] Test suite with 70%+ coverage
- [ ] Frontend and backend deployed
- [ ] CI/CD pipeline configured
- [ ] Professional README and API docs
- [ ] Application live and accessible

**By Friday morning:**
- [ ] All tests passing
- [ ] All code committed to GitHub
- [ ] Presentation prepared (10 min)

---

## Resource Materials

### Official Documentation
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Flask Documentation](https://flask.palletsprojects.com)
- [PostgreSQL Docs](https://www.postgresql.org/docs)
- [Jest Testing](https://jestjs.io)
- [GitHub Actions](https://docs.github.com/en/actions)

### Deployment Guides
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://docs.netlify.com)
- [Render Setup](https://render.com/docs)
- [Railway Hosting](https://docs.railway.app)

### Project Management & Planning
- [User Story Format](https://www.atlassian.com/agile/project-management/user-stories)
- [Sprint Planning](https://www.scrum.org/resources/what-is-sprint-planning)
- [Agile Retrospectives](https://www.agilealliance.org/glossary/retrospective)

### Performance & Monitoring
- [Sentry Error Tracking](https://sentry.io)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools)

### Security Best Practices
- [OWASP Top 10](https://owasp.org/www-project-top-ten)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [SQL Injection Prevention](https://owasp.org/www-community/attacks/SQL_Injection)

---

## Assessment Rubric

### Code Quality (Technical Excellence)

**Excellent (90-100)**
- Clean, readable code with consistent style
- DRY principle throughout
- Proper error handling on all paths
- Security best practices implemented
- Performance optimized (no N+1 queries, etc.)

**Good (80-89)**
- Code mostly clean and readable
- Some DRY violations
- Error handling mostly present
- Security mostly addressed
- Acceptable performance

**Satisfactory (70-79)**
- Code readable but inconsistent
- Some code duplication
- Error handling incomplete
- Basic security considerations
- Performance issues minor

**Needs Improvement (<70)**
- Code hard to follow
- Significant duplication
- Missing error handling
- Security vulnerabilities present
- Performance problems

### Feature Completeness

**Excellent**
- All required features implemented
- Additional features beyond requirements
- Edge cases handled
- User experience polished

**Good**
- All required features implemented
- Most edge cases handled
- User experience good

**Satisfactory**
- Most required features implemented
- Some edge cases missing
- User experience acceptable

**Needs Improvement**
- Missing key features
- Many edge cases unhandled
- User experience problematic

### Professional Practices

**Excellent**
- Comprehensive testing (70%+ coverage)
- Well-documented (README, API docs, comments)
- Git workflow with meaningful commits
- Deployed with CI/CD
- Professional presentation

**Good**
- Good testing coverage (50%+)
- Documentation adequate
- Git workflow followed
- Deployed successfully
- Good presentation

**Satisfactory**
- Basic testing (30%+)
- Documentation present
- Git used
- Deployed
- Presentation adequate

**Needs Improvement**
- Minimal testing
- Poor documentation
- Git not used properly
- Deployment incomplete
- Weak presentation

---

## Troubleshooting Guide

### Common Issues & Solutions

#### **Database Connection Issues**

**Problem:** `ECONNREFUSED` or `password authentication failed`

**Solutions:**
1. Verify PostgreSQL is running: `sudo service postgresql status`
2. Check connection string in `.env`
3. Verify credentials are correct
4. If using hosted DB, whitelist IP address
5. Test connection with `psql`:
   ```bash
   psql postgresql://user:password@host/db
   ```

#### **JWT Token Issues**

**Problem:** "Invalid token" or "Token expired"

**Solutions:**
1. Verify `JWT_SECRET` matches in all files
2. Check token expiration time is reasonable
3. Verify token is being sent in Authorization header:
   ```javascript
   // Correct format
   Authorization: Bearer <token>
   ```
4. Check token payload isn't tampered with
5. Clear browser localStorage and login again

#### **CORS Issues**

**Problem:** Cross-Origin Resource Sharing blocked request

**Solutions:**
1. Add CORS middleware to backend:
   ```javascript
   const cors = require('cors');
   app.use(cors({
     origin: 'http://localhost:3000',
     credentials: true
   }));
   ```
2. For production, specify exact domain
3. Verify frontend URL matches allowed origin
4. Check request headers (should NOT have Sec-Fetch headers for simple requests)

#### **React State Management Issues**

**Problem:** Component not re-rendering when state changes

**Solutions:**
1. Verify using `useState` not direct variable assignment
2. Check dependency array in `useEffect`
3. Ensure state update is immutable:
   ```javascript
   // WRONG
   tasks.push(newTask);
   setTasks(tasks);
   
   // CORRECT
   setTasks([...tasks, newTask]);
   ```
4. Use React DevTools to inspect component state

#### **Test Failures**

**Problem:** Tests pass locally but fail in CI/CD

**Solutions:**
1. Ensure tests aren't dependent on timing
2. Mock external services (API calls, databases)
3. Use test database, not production
4. Set `NODE_ENV=test` in GitHub Actions
5. Check environment variables are set in CI

#### **Deployment Issues**

**Problem:** Application won't start after deployment

**Solutions:**
1. Check build logs for errors
2. Verify environment variables are set
3. Check database migrations ran
4. Review production logs
5. Test locally with `npm run build && npm start`

#### **API Integration Issues**

**Problem:** Frontend can't fetch data from backend

**Solutions:**
1. Verify API URL is correct
2. Check network tab in DevTools
3. Ensure backend is running
4. Verify endpoint exists: `curl http://localhost:5000/api/tasks`
5. Check request body format (JSON)
6. Verify authentication token is sent if required

#### **Performance Issues**

**Problem:** Application is slow to load or respond

**Solutions:**
1. Check for N+1 queries (use `.explain()` in PostgreSQL)
2. Add database indexes on frequently queried columns
3. Use Lighthouse to profile frontend
4. Implement pagination for large lists
5. Use code splitting in React:
   ```javascript
   const TasksPage = lazy(() => import('./pages/TasksPage'));
   ```
6. Enable gzip compression on backend

### Helpful Debugging Commands

```bash
# Check Node/npm versions
node --version
npm --version

# List processes on port
lsof -i :5000  # Backend
lsof -i :3000  # Frontend

# Test API endpoint
curl -X GET http://localhost:5000/api/tasks
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass"}'

# Check PostgreSQL connection
psql postgresql://user:password@localhost/database

# View React component tree
npm install -g react-devtools

# Check Git status
git status
git log --oneline

# View test coverage
npm test -- --coverage
```

---

## Instructor Notes

### Weekly Structure Overview

**Monday:** Planning & Design (architecture, database, API spec)  
**Tuesday:** Backend Implementation (database, authentication, CRUD)  
**Wednesday:** Frontend Implementation (components, forms, integration)  
**Thursday:** Testing & Deployment (tests, CI/CD, deployment, docs)  
**Friday:** Review, Presentations & Retrospective

### Key Management Tips

1. **Daily Standups:** 15-20 min maximum, focus on blockers
2. **Unblock Quickly:** If a student is stuck, help immediately - time is limited
3. **Prioritization:** Emphasize core features first, extras later
4. **Code Reviews:** Provide feedback on code quality and architecture
5. **Deployment:** Test deployment process yourself before Monday
6. **Celebrations:** Recognize student progress explicitly
7. **Realistic Scope:** Projects don't need to be perfect, just functional

### Red Flags to Watch For

🚩 Student hasn't started by Tuesday 10am  
🚩 Student hasn't deployed by Thursday 2pm  
🚩 Tests haven't been written by Thursday 11am  
🚩 Presentation hasn't been prepared by Thursday 3pm  
🚩 Student seems overwhelmed without asking for help

### Success Indicators

✅ Student presents a working application  
✅ Code is well-organized and readable  
✅ Student can explain architecture decisions  
✅ Tests pass and coverage is reasonable  
✅ Application is deployed and accessible  
✅ Student presents with confidence  
✅ Student reflects thoughtfully on learning

---

## Template Files to Prepare

### `.env.example`
```
# Database
DATABASE_URL=postgresql://user:password@localhost/database

# Authentication
JWT_SECRET=your-secret-key-here
JWT_EXPIRY=24h

# API
PORT=5000
NODE_ENV=development

# CORS
FRONTEND_URL=http://localhost:3000
```

### `.gitignore` (Node.js)
```
node_modules/
.env
.env.local
dist/
build/
coverage/
.DS_Store
*.log
```

### `package.json` (Backend starter)
```json
{
  "name": "task-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "pg": "^8.9.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.5.0",
    "supertest": "^6.3.3"
  }
}
```

---

**End of Week 13 Teacher's Guide**

This guide provides comprehensive support for delivering Week 13's capstone project. The focus is on integrating all skills into a professional full-stack application while maintaining time constraints and managing student workload effectively.