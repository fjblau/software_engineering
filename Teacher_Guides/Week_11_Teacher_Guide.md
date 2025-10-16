# Week 11 Teacher's Guide: Modern Frontend with React
## React Fundamentals - Component-Based Architecture

**Duration:** 30 hours  
**Dates:** May 5-9, 2025  
**Note:** May 9 (Christi Himmelfahrt) is a holiday - 4 working days only  
**Focus:** React, JSX, Component Architecture, Hooks, TypeScript, Full-Stack Integration

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

Week 11 introduces React, the modern frontend framework that revolutionizes how developers build user interfaces. Students transition from vanilla JavaScript to component-based architecture, learning to think in React's declarative, component-driven paradigm. This week also introduces TypeScript for type-safe React development, preparing students for professional React teams.

### Key Teaching Points

- **React is Declarative:** Describe the UI state; React handles the DOM updates
- **Components are the Building Blocks:** Break UI into reusable, testable pieces
- **One-Way Data Flow:** Props down, events up creates predictable applications
- **Hooks Enable Functional Components:** No need for class components anymore
- **TypeScript Adds Safety:** Catch errors before they reach production
- **React Connects Frontend to Backend:** We've been preparing for this all semester

### Week 11 Success Metrics

✅ Students build multi-component React applications  
✅ Students manage state effectively with useState and lifting state up  
✅ Students handle side effects with useEffect  
✅ Students write custom hooks for reusable logic  
✅ Students connect React frontend to Flask/FastAPI backend  
✅ Students add TypeScript types to React components  
✅ Students deploy React apps to production (Vercel/Netlify)  

---

## Learning Objectives

By the end of Week 11, students will be able to:

### React Fundamentals
- Create React applications using Create React App or Vite
- Write JSX syntax effectively (HTML-like syntax in JavaScript)
- Build functional components with proper structure
- Pass and use props to communicate between components
- Understand component composition and reusability
- Think in React: breaking UIs into component hierarchies

### State Management
- Use the useState hook for component-level state
- Update state immutably (avoid mutations)
- Lift state up to parent components for shared state
- Share state between sibling components
- Handle forms with controlled components
- Manage loading, error, and success states

### React Hooks & Side Effects
- Use useEffect for side effects and data fetching
- Understand dependency arrays and when effects run
- Clean up side effects to prevent memory leaks
- Create custom hooks to encapsulate reusable logic
- Use useContext for global state management
- Follow the Rules of Hooks

### Component Patterns
- Container/Presentational component pattern
- Composition over inheritance
- Render props and higher-order components (understanding)
- Error boundaries for error handling
- Code splitting and lazy loading basics

### TypeScript with React
- Add type annotations to component props
- Define interfaces for complex data structures
- Type state with useState
- Type event handlers correctly
- Understand generic components
- Benefit from IDE autocomplete and error catching

### Full-Stack Integration
- Fetch data from Flask/FastAPI backends
- Handle API responses and errors
- Manage loading states during API calls
- Send data to backend APIs (POST, PUT, DELETE)
- Implement proper CORS configuration
- Deploy React apps to cloud platforms

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday May 5)

**Required Actions:**
1. ✅ Test all React examples on your machine
2. ✅ Set up a React project with Create React App or Vite
3. ✅ Set up a Flask/FastAPI backend for data fetching examples
4. ✅ Create GitHub repository with all starter code
5. ✅ Test GitHub deployment (Vercel/Netlify) with sample React app
6. ✅ Prepare live coding environment (editor + terminal + browser)
7. ✅ Create starter templates for student projects
8. ✅ Review React documentation for latest best practices
9. ✅ Plan component architecture exercises
10. ✅ Prepare debugging tips for common React mistakes
11. ✅ Test TypeScript setup with React

**Holiday Adjustment:**
- Friday May 9 is Christi Himmelfahrt (Religious Holiday)
- Redistribute 30 hours across 4 working days: ~7.5 hours per day
- Consider moving Friday content to Thursday
- Thursday becomes comprehensive day covering TypeScript + patterns
- Prepare sprint review materials for Thursday afternoon

**Classroom Setup:**
- Ensure all students have Node.js v16+ installed
- Verify npm can download packages from registry
- Have backup internet connection ready
- Test that ports 3000 (React) and 5000/8000 (backend) are available
- Have example projects ready for troubleshooting

### Student Prerequisites (Send Email Friday April 25)

**MUST HAVE BEFORE MONDAY:**
- [ ] Node.js v16+ LTS installed
- [ ] npm v7+ installed
- [ ] Git configured and GitHub account ready
- [ ] Strong JavaScript knowledge (functions, closures, array methods)
- [ ] Understanding of async/await from Week 9
- [ ] Flask or FastAPI knowledge from previous weeks

**MUST INSTALL BY MONDAY:**

```bash
# Create React App (simplest for beginners)
npx create-react-app my-app
cd my-app
npm start

# OR Vite (faster, more modern)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

# TypeScript support
npx create-react-app my-app-ts --template typescript

# OR with Vite + TypeScript
npm create vite@latest my-app-ts -- --template react-ts
```

**Run Verification:**

```bash
# Check Node and npm versions
node --version  # Should be v16+
npm --version   # Should be v7+

# Create and test a React app
npx create-react-app test-app
cd test-app
npm start
# Should open browser to localhost:3000
```

### Software & Tool Requirements

| Tool | Version | Purpose | Installation |
|------|---------|---------|--------------|
| Node.js | 16+ LTS | JavaScript runtime | https://nodejs.org |
| npm | 7+ | Package manager | Bundled with Node |
| React | 18+ | UI framework | `npx create-react-app` |
| TypeScript | 4.5+ | Type safety | `npm install -D typescript` |
| Vite | 4+ | Build tool (optional) | `npm create vite` |
| VSCode | Latest | IDE | https://code.visualstudio.com |
| Git | 2.30+ | Version control | https://git-scm.com |
| Vercel CLI | Latest | Deployment | `npm install -g vercel` |
| Python | 3.8+ | Backend API | https://python.org |
| Flask/FastAPI | Latest | Backend framework | `pip install flask` |

### VS Code Extensions (Required by Monday)

**React & Frontend:**
- ES7+ React/Redux/React-Native snippets (dsznajder.es7-react-js-snippets)
- Prettier - Code formatter (esbenp.prettier-vscode)
- ES Lint (dbaeumer.vscode-eslint)
- Thunder Client or REST Client (rangav.rest-client)

**TypeScript & Development:**
- TypeScript Vue Plugin (Vue - Official)
- Error Lens (usernamehw.errorlens)
- Pylance (for backend code: ms-python.vscode-pylance)

**Git & Collaboration:**
- GitLens (eamodio.gitlens)
- GitHub Copilot (optional: github.copilot)

### Configuration Files to Prepare

**Create React App (package.json):**
```json
{
  "name": "my-react-app",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:5000",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^4.9.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  }
}
```

**Vite Configuration (vite.config.js):**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
```

**Flask Backend (app.py):**
```python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/users', methods=['GET'])
def get_users():
    users = [
        {'id': 1, 'name': 'Maria', 'email': 'maria@example.com'},
        {'id': 2, 'name': 'Hans', 'email': 'hans@example.com'}
    ]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

---

## Daily Schedule & Topics

### MONDAY: React Fundamentals, JSX & Component Architecture – 7.5 hours

**Learning Goals:**
- Understand React's declarative paradigm
- Learn JSX syntax and best practices
- Build functional components
- Pass data through props
- Create component hierarchies

**9:00 - 9:30 | Welcome & Week Overview (30 min)**
- Why React? (Industry adoption, developer experience)
- Week 11 structure and deliverables
- Real-world React applications
- Preview of full-stack project

**9:30 - 10:30 | What is React? & JSX Fundamentals (60 min)**

**React Philosophy (15 min):**
```
Declarative: You describe what the UI should be
React handles: Updating the DOM when state changes

// You write this:
<App name="Maria" />

// React does this:
const element = React.createElement(App, { name: 'Maria' })
```

**JSX Syntax (30 min - Live Demo):**
```jsx
// JSX looks like HTML but it's JavaScript!
const greeting = <h1>Hello, World!</h1>;

// Expressions in JSX
const name = "Maria";
const element = <h1>Hello, {name}!</h1>;

// Attributes
const img = <img src="profile.jpg" alt="Profile" />;

// Children
const list = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
);

// Conditional rendering
const status = isOnline ? <div>Online</div> : <div>Offline</div>;
```

**Rules of JSX (15 min):**
1. Must return a single root element
2. Class becomes className
3. Close all tags
4. Use camelCase for attributes
5. JavaScript expressions use curly braces

**Student Activity:** Write JSX snippets in CodePen or browser console

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Functional Components & Props (60 min)**

**Components as Functions (20 min):**
```jsx
// Component is just a function that returns JSX
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Component with JSX
function UserCard() {
  return (
    <div className="card">
      <h2>Maria</h2>
      <p>Age: 28</p>
    </div>
  );
}

// Render component
function App() {
  return <Welcome />;
}
```

**Props - Passing Data Down (30 min - Live Coding):**
```jsx
// Props are like function parameters
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

// Using props
function App() {
  return (
    <div>
      <UserCard name="Maria" age={28} city="Vienna" />
      <UserCard name="Hans" age={32} city="Berlin" />
    </div>
  );
}

// Destructuring props (cleaner)
function UserCard({ name, age, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

**Component Composition:**
```jsx
// Reusable Card component
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
}

// Using Card
function App() {
  return (
    <Card title="Welcome">
      <p>This is the card content</p>
      <button>Click me</button>
    </Card>
  );
}
```

**Student Activity (10 min):** Build a simple component hierarchy

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:30 | Component Architecture & Thinking in React (90 min)**

**Breaking Down a UI (30 min - Interactive):**
Show a mockup, identify components:
```
App
├── Header
│   ├── Logo
│   └── Navigation
├── MainContent
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer
```

**Live Coding - Real Example (40 min):**
Build a Todo List component structure:
```jsx
// App.jsx - Main component
function App() {
  return (
    <div className="App">
      <Header title="My Todos" />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

// Header.jsx - Reusable header
function Header({ title }) {
  return <h1>{title}</h1>;
}

// TodoForm.jsx - Form component
function TodoForm() {
  return (
    <form>
      <input placeholder="Add a todo..." />
      <button type="submit">Add</button>
    </form>
  );
}

// TodoList.jsx - List component
function TodoList() {
  return (
    <ul>
      <li>Buy groceries</li>
      <li>Write report</li>
    </ul>
  );
}

// Footer.jsx - Footer component
function Footer() {
  return <footer>© 2025 Todo App</footer>;
}
```

**Component Design Principles (20 min):**
- Single Responsibility Principle - one job per component
- Reusability - can this be used elsewhere?
- Composition - combine smaller components
- Naming - descriptive component names

**Student Activity (20 min):** Sketch component hierarchy for assigned project idea

**2:30 - 3:00 | Setup & First React App (30 min)**

**Live Demo - Create React App:**
```bash
npx create-react-app my-app
cd my-app
npm start
# App opens at localhost:3000
```

**Project Structure Walkthrough:**
```
my-app/
├── src/
│   ├── App.jsx       # Main component
│   ├── App.css       # App styles
│   ├── index.js      # Entry point
│   └── index.css     # Global styles
├── public/           # Static files
├── package.json      # Dependencies
└── README.md         # Documentation
```

**End of Day:** Students should have React app running locally

---

### TUESDAY: State Management & Event Handling – 7.5 hours

**Learning Goals:**
- Understand state vs props
- Use useState hook
- Handle events in React
- Build controlled forms
- Lift state up for shared state

**9:00 - 9:30 | State vs Props Review (30 min)**

**Key Differences:**
```
Props:
- Read-only from child's perspective
- Passed down from parent to child
- Cannot change the prop in the child
- Used for static data

State:
- Mutable (can change)
- Lives in the component
- Can be changed with setState/setFoo
- Used for dynamic data
```

**9:30 - 10:30 | useState Hook in Depth (60 min)**

**Simple Counter Example (20 min):**
```jsx
import { useState } from 'react';

function Counter() {
  // state variable, setState function
  const [count, setCount] = useState(0);
  
  function handleIncrement() {
    setCount(count + 1);
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

**Multiple State Variables (20 min):**
```jsx
function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  // Display current values
  return (
    <div>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

**Rules of Hooks (20 min):**
1. Only call hooks at the top level
2. Only call hooks in React functions
3. Never call hooks conditionally

```jsx
// ❌ WRONG - calling hook inside if
function BadComponent() {
  if (condition) {
    const [state, setState] = useState(0); // ERROR!
  }
}

// ✅ CORRECT - call at top level
function GoodComponent() {
  const [state, setState] = useState(0);
  if (condition) {
    // use state here
  }
}
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Event Handling & Controlled Components (60 min)**

**Event Handling (20 min):**
```jsx
// Click handler
<button onClick={handleClick}>Click me</button>

// Input handler (arrow function)
<input onChange={(e) => setName(e.target.value)} />

// Form submit
<form onSubmit={handleSubmit}>

// Event object
function handleClick(event) {
  event.preventDefault(); // prevent default action
  console.log(event.target);
}
```

**Controlled Components (30 min - Live Demo):**
```jsx
// Input value is controlled by React state
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

**Complex Form Example:**
```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send to backend
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="rememberMe"
        checked={formData.rememberMe}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Student Activity (10 min):** Build a controlled form component

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Lifting State Up (60 min)**

**The Problem (15 min - Live Demo):**
```jsx
// Two components need to share state
// ❌ WRONG: State in both components (out of sync)
function Temperature1() {
  const [temp, setTemp] = useState(0);
  return <div>Component 1: {temp}</div>;
}

function Temperature2() {
  const [temp, setTemp] = useState(0);
  return <div>Component 2: {temp}</div>;
}
```

**The Solution (30 min - Live Coding):**
```jsx
// ✅ CORRECT: Move state to parent
function TemperatureDisplay() {
  const [temp, setTemp] = useState(0);
  
  return (
    <div>
      <Temperature1 temp={temp} onChange={setTemp} />
      <Temperature2 temp={temp} onChange={setTemp} />
    </div>
  );
}

function Temperature1({ temp, onChange }) {
  return (
    <div>
      <p>Component 1: {temp}°C</p>
      <button onClick={() => onChange(temp + 1)}>+</button>
    </div>
  );
}

function Temperature2({ temp, onChange }) {
  return (
    <div>
      <p>Component 2: {temp}°C</p>
      <button onClick={() => onChange(temp - 1)}>-</button>
    </div>
  );
}
```

**Real-World Example - Todo App (15 min):**
```jsx
// Parent manages all todos
function TodoApp() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(title) {
    setTodos([...todos, { id: Date.now(), title, completed: false }]);
  }
  
  function toggleTodo(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }
  
  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

// Child receives data and callbacks
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button>Add Todo</button>
    </form>
  );
}
```

**Student Activity (15 min):** Refactor components to lift state up

**2:00 - 3:00 | Immutable State Updates (60 min)**

**Why Immutability Matters (15 min):**
```jsx
// ❌ WRONG: Mutating state directly
function BadUpdate() {
  const [todos, setTodos] = useState([{ id: 1, title: 'Buy milk' }]);
  
  function addTodo(title) {
    todos.push({ id: 2, title }); // WRONG! Direct mutation
    setTodos(todos);
  }
  
  return <div>Count: {todos.length}</div>; // May not re-render!
}

// ✅ CORRECT: Create new array
function GoodUpdate() {
  const [todos, setTodos] = useState([{ id: 1, title: 'Buy milk' }]);
  
  function addTodo(title) {
    setTodos([...todos, { id: 2, title }]); // Create new array
  }
}
```

**Common Immutable Patterns (30 min):**
```jsx
// Adding to array
setArray([...array, newItem]);

// Removing from array
setArray(array.filter(item => item.id !== idToRemove));

// Updating in array
setArray(array.map(item =>
  item.id === idToUpdate ? { ...item, ...changes } : item
));

// Updating object
setObject({ ...object, newKey: newValue });

// Nested updates
setData({
  ...data,
  user: { ...data.user, name: 'New Name' }
});
```

**Live Coding - Complex State (15 min):**
```jsx
function BlogApp() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', likes: 0 }
  ]);
  
  // Add post
  function addPost(title) {
    setPosts([...posts, { id: Date.now(), title, likes: 0 }]);
  }
  
  // Like post
  function likePost(id) {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  }
  
  // Delete post
  function deletePost(id) {
    setPosts(posts.filter(post => post.id !== id));
  }
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>Likes: {post.likes}</p>
          <button onClick={() => likePost(post.id)}>Like</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </article>
      ))}
    </div>
  );
}
```

**End of Day:** Students should understand state, lifting state, and immutability

---

### WEDNESDAY: Hooks – useEffect, Custom Hooks, useContext – 7.5 hours

**Learning Goals:**
- Use useEffect for side effects
- Understand dependency arrays
- Clean up subscriptions and intervals
- Create custom hooks
- Manage global state with useContext

**9:00 - 9:30 | useEffect Fundamentals (30 min)**

**What is useEffect? (15 min):**
```jsx
// Side effects: data fetching, subscriptions, DOM manipulation
import { useState, useEffect } from 'react';

function Example() {
  useEffect(() => {
    // This runs after render
    console.log('Component rendered');
    
    // Optional cleanup
    return () => {
      console.log('Cleanup');
    };
  }, []); // Dependency array
  
  return <div>Example</div>;
}
```

**When Does useEffect Run? (15 min):**
```jsx
// 1. Runs after every render (NO DEPENDENCY ARRAY)
useEffect(() => {
  console.log('Runs after every render');
});

// 2. Runs once on mount (EMPTY ARRAY)
useEffect(() => {
  console.log('Runs once on mount');
}, []);

// 3. Runs when dependencies change
const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]); // Runs when count changes
```

**9:30 - 10:30 | Data Fetching with useEffect (60 min)**

**Basic Fetch Example (30 min - Live Coding):**
```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUsers();
  }, []); // Run once on mount
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Fetching Based on Dependencies (20 min):**
```jsx
function UserDetail({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (!userId) return;
    
    async function fetchUser() {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    }
    
    fetchUser();
  }, [userId]); // Re-fetch when userId changes
  
  return user ? <div>{user.name}</div> : <div>Select a user</div>;
}
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Cleanup & Subscriptions (60 min)**

**Cleanup Functions (30 min - Live Demo):**
```jsx
// Without cleanup - resource leak!
function BadTimer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    // Memory leak! Interval keeps running
  }, []);
  
  return <div>Check console</div>;
}

// With cleanup - proper pattern
function GoodTimer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return <div>Check console</div>;
}
```

**Event Listeners (15 min):**
```jsx
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup: Remove listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div>Window width: {width}px</div>;
}
```

**Subscriptions (15 min):**
```jsx
// WebSocket subscription
function RealtimeData() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const ws = new WebSocket('ws://example.com/data');
    
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    
    // Cleanup: Close connection
    return () => {
      ws.close();
    };
  }, []);
  
  return <div>{data?.message}</div>;
}
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Custom Hooks (60 min)**

**Introduction to Custom Hooks (15 min):**
```jsx
// Custom hooks are functions that use React hooks
// Name starts with 'use'

function useCustomHook() {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Side effect logic
  }, []);
  
  return state;
}

// Use it in a component
function MyComponent() {
  const data = useCustomHook();
  return <div>{data}</div>;
}
```

**useFetch Hook (30 min - Live Coding):**
```jsx
// Reusable hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fetch failed');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useFetch('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

function PostList() {
  const { data: posts, loading, error } = useFetch('/api/posts');
  // Same pattern!
}
```

**useForm Hook (15 min):**
```jsx
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }
  
  return { values, handleChange, handleSubmit };
}

// Usage
function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    (data) => console.log('Submitted:', data)
  );
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" value={values.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
```

**2:00 - 3:00 | useContext for Global State (60 min)**

**Introduction to Context API (20 min):**
```jsx
// Create context
const ThemeContext = createContext();

// Provider component
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <MainContent />
    </ThemeContext.Provider>
  );
}

// Consume context
function Header() {
  const { theme } = useContext(ThemeContext);
  return <header className={theme}>Header</header>;
}
```

**Real-World Example (30 min - Live Demo):**
```jsx
// AuthContext.js
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  async function login(email, password) {
    setIsLoading(true);
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    setUser(data);
    setIsLoading(false);
  }
  
  function logout() {
    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// App.js - Wrap with provider
function App() {
  return (
    <AuthProvider>
      <Header />
      <MainContent />
    </AuthProvider>
  );
}

// Header.js - Use context
function Header() {
  const { user, logout } = useContext(AuthContext);
  
  if (!user) return <div>Not logged in</div>;
  
  return (
    <header>
      <span>Welcome, {user.name}</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
```

**Best Practices (10 min):**
- Use context for global state (theme, auth, language)
- Don't overuse context (causes re-renders)
- Create custom hooks to access context
- Combine with useReducer for complex state

**End of Day:** Students understand hooks, side effects, and global state

---

### THURSDAY: React with TypeScript & Professional Patterns – 7.5 hours

**Learning Goals:**
- Add TypeScript to React components
- Type props and state
- Create generic components
- Understand component patterns
- Handle errors with error boundaries
- Optimize performance basics

**9:00 - 9:30 | TypeScript with React Setup (30 min)**

**Create React App with TypeScript (15 min):**
```bash
npx create-react-app my-app --template typescript
# OR
npm create vite my-app -- --template react-ts
```

**Project Structure with TypeScript:**
```
src/
├── types/
│   ├── index.ts      # Shared types
│   └── models.ts     # Data models
├── components/
│   ├── Button.tsx    # React component
│   └── Card.tsx
├── hooks/
│   ├── useFetch.ts   # Custom hooks
│   └── useForm.ts
├── App.tsx           # Main app
└── index.tsx         # Entry point
```

**9:30 - 10:30 | Typing Components & Props (60 min)**

**Basic Component Types (30 min - Live Demo):**
```tsx
import { FC, ReactNode } from 'react';

// Simple component
interface GreetingProps {
  name: string;
  age?: number; // Optional
}

const Greeting: FC<GreetingProps> = ({ name, age }) => {
  return <h1>Hello, {name}{age && ` (${age})`}!</h1>;
};

// Component with children
interface CardProps {
  title: string;
  children: ReactNode;
  onClick?: (id: string) => void;
}

const Card: FC<CardProps> = ({ title, children, onClick }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
```

**Event Handler Types (20 min):**
```tsx
interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

// Input handler
interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input value={value} onChange={onChange} placeholder={placeholder} />
  );
};
```

**Complex Props - Extending HTML Attributes (10 min):**
```tsx
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextInput: FC<TextInputProps> = ({ label, error, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Typing Hooks & State (60 min)**

**useState with Types (30 min - Live Demo):**
```tsx
// Inferred types (TypeScript figures it out)
const [count, setCount] = useState(0); // number
const [name, setName] = useState(''); // string

// Explicit types
const [user, setUser] = useState<User | null>(null);
const [todos, setTodos] = useState<Todo[]>([]);

// Union types for complex state
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: User[] };
type ErrorState = { status: 'error'; error: string };
type FetchState = LoadingState | SuccessState | ErrorState;

const [state, setState] = useState<FetchState>({ status: 'loading' });

if (state.status === 'success') {
  console.log(state.data); // TypeScript knows data exists!
}
```

**useEffect with Types (20 min):**
```tsx
// useEffect types work automatically
useEffect(() => {
  console.log('Mount');
  return () => console.log('Cleanup');
}, []);

// useCallback with types
const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget);
}, []);

// useMemo with types
const memoizedValue = useMemo<string>(() => {
  return expensiveComputation();
}, []);
```

**Custom Hook Types (10 min):**
```tsx
// Typed custom hook
function useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}

// Usage
const { data: users, loading } = useFetch<User[]>('/api/users');
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Component Patterns & Performance (60 min)**

**Reusable Components (20 min - Live Coding):**
```tsx
// List component - Generic and reusable
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// Usage with different data types
function UserList({ users }: { users: User[] }) {
  return (
    <List
      items={users}
      renderItem={(user) => <span>{user.name}</span>}
      keyExtractor={(user) => user.id}
    />
  );
}
```

**Error Boundaries (20 min):**
```tsx
// Error boundary catches errors in child components
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }
    
    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <UserList />
    </ErrorBoundary>
  );
}
```

**Performance Optimization Basics (20 min):**
```tsx
// useMemo - Memoize expensive computations
function ExpensiveComponent({ items }: { items: Item[] }) {
  const sorted = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );
  
  return <div>{sorted.map(item => <span key={item.id}>{item.name}</span>)}</div>;
}

// useCallback - Memoize callback functions
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Stable function reference
  
  return <ChildComponent onClick={handleClick} />;
}

// React.memo - Prevent re-render if props unchanged
interface ChildProps {
  name: string;
  onClick: () => void;
}

const ChildComponent = React.memo(({ name, onClick }: ChildProps) => {
  return <button onClick={onClick}>{name}</button>;
});
```

**2:00 - 3:00 | Sprint Review & Project Showcase (60 min)**

**Student Presentations (40 min):**
- Each student/group presents their Week 11 project
- Demonstrate React features learned
- Show TypeScript types in action
- Discuss challenges and solutions

**Feedback & Next Steps (20 min):**
- Highlight best practices observed
- Discuss deployment options (Vercel/Netlify)
- Preview Week 12 (Database Integration)
- Final Q&A

**End of Week:** Students have built full React applications with TypeScript

---

## Assignments & Deliverables

### Weekly Assignment: Full-Stack React Application (100 points)

**Project Scope:** Build a complete React application with a Python backend

**Project Ideas:**
1. **Todo Application** with categories, filtering, and user authentication
2. **Recipe Book** with search, categories, and user collections
3. **Expense Tracker** with charts and monthly reports
4. **Blog Platform** with posts, comments, and user profiles
5. **Movie/Book Database** with ratings and reviews
6. **Project Management Tool** with tasks and user assignments

**Requirements:**

**React Frontend (40 points)**
- [ ] At least 8 reusable components
- [ ] Multiple pages/views with React Router (bonus)
- [ ] useState for local state management
- [ ] useEffect for data fetching and side effects
- [ ] Custom hooks for reusable logic
- [ ] Proper component hierarchy and composition
- [ ] Loading, error, and success states
- [ ] Controlled forms
- [ ] Clean, readable code with comments

**State Management (20 points)**
- [ ] Lift state up appropriately
- [ ] Share state between components correctly
- [ ] Immutable state updates
- [ ] Handle form inputs
- [ ] Use useContext for global state (optional)
- [ ] Proper dependency arrays in useEffect

**Backend Integration (20 points)**
- [ ] Connect to Flask or FastAPI API
- [ ] Implement CRUD operations
- [ ] Handle API errors gracefully
- [ ] Manage loading states
- [ ] Send and receive JSON data
- [ ] Proper error handling

**TypeScript Implementation (10 points)**
- [ ] Type all props
- [ ] Define interfaces for data models
- [ ] Type state variables
- [ ] Type event handlers
- [ ] Type custom hooks

**Professional Quality (10 points)**
- [ ] Clean folder structure
- [ ] Meaningful component names
- [ ] README with setup instructions
- [ ] Environment configuration (.env)
- [ ] Deployed to Vercel/Netlify
- [ ] Git repository with meaningful commits

**Submission:**
1. GitHub repository with React frontend and backend code
2. Deployed application URL
3. README.md with:
   - Project description
   - Feature list
   - Setup instructions
   - How to run locally
   - Component architecture diagram (optional)
4. Demo video (2-3 minutes) showing features

**Due:** Friday May 16, 2025

---

## Resource Materials

### Official Documentation
- [React Documentation](https://react.dev/)
- [React Tutorial](https://react.dev/learn)
- [React Hooks Reference](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/handbook/)

### Learning Resources
- [FreeCodeCamp React Course](https://www.freecodecamp.org/learn/front-end-development-libraries/react/)
- [Scrimba React Course](https://scrimba.com/learn/react)
- [ReactJS Official Tutorial Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)

### Tools & Frameworks
- [Create React App Documentation](https://create-react-app.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [State Management Options](https://redux.js.org/)

### Deployment
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com/)
- [GitHub Pages with React](https://create-react-app.dev/deployment/github-pages/)

### Example Code Files
- `/Week_11/week11_javascript_examples.jsx` - Comprehensive React patterns
- `/Week_11/week11_typescript_examples.tsx` - TypeScript examples
- `/Week_11/week11_overview.md` - Full content overview

---

## Assessment Rubric

### Component Architecture (25 points)

| Criteria | Excellent (25) | Good (20) | Acceptable (15) | Needs Work (10) | Missing (0) |
|----------|---|---|---|---|---|
| **Component Design** | 8+ well-designed, reusable components | 6-7 components with good design | 5-6 components, some reusability issues | Few components, poor reusability | No components |
| **Component Hierarchy** | Clear hierarchy, proper composition | Good hierarchy with minor issues | Acceptable hierarchy, some redundancy | Unclear hierarchy | No structure |
| **Props & Communication** | Efficient prop passing, no prop drilling | Good prop management | Some unnecessary prop drilling | Excessive prop drilling | Props not used |
| **Code Organization** | Excellent folder structure | Good organization | Acceptable structure | Poor organization | Disorganized |

### State Management (25 points)

| Criteria | Excellent (25) | Good (20) | Acceptable (15) | Needs Work (10) | Missing (0) |
|----------|---|---|---|---|---|
| **useState Usage** | Proper state placement and updates | Generally correct state management | Some state issues | Frequent state errors | State not used |
| **Lifting State** | Correct lifting for shared state | Mostly correct lifting | Some lifting issues | Incorrect lifting | State not lifted |
| **Immutability** | All updates are immutable | Mostly immutable | Some mutations | Frequent mutations | Direct mutations |
| **useEffect** | Proper cleanup, dependency arrays | Generally correct | Some dependency issues | Many issues | Not used |

### Features & Functionality (25 points)

| Criteria | Excellent (25) | Good (20) | Acceptable (15) | Needs Work (10) | Missing (0) |
|----------|---|---|---|---|---|
| **API Integration** | Smooth CRUD operations | Working API calls | Some API issues | Many API errors | No API calls |
| **Error Handling** | Comprehensive error handling | Good error handling | Basic error handling | Minimal handling | No handling |
| **User Experience** | Smooth, responsive interface | Good UX | Acceptable UX | Usability issues | Poor UX |
| **Feature Completeness** | All features working well | Most features working | Some features working | Few features | Core features missing |

### Code Quality (15 points)

| Criteria | Excellent (15) | Good (12) | Acceptable (9) | Needs Work (6) | Missing (0) |
|----------|---|---|---|---|---|
| **TypeScript** | Properly typed components and state | Good typing | Some types | Minimal typing | No types |
| **Comments & Naming** | Clear naming, helpful comments | Good naming | Acceptable naming | Poor naming | Unclear code |
| **Testing Readiness** | Code is testable | Generally testable | Some testing challenges | Hard to test | Untestable |

### Deployment & Documentation (10 points)

| Criteria | Excellent (10) | Good (8) | Acceptable (6) | Needs Work (4) | Missing (0) |
|----------|---|---|---|---|---|
| **Deployment** | Live on Vercel/Netlify | Deployed | Deployment attempted | Not deployed | |
| **Documentation** | Complete README with setup | Good README | Basic documentation | Minimal docs | No docs |
| **Git History** | Meaningful commits | Good commit messages | Some messages | Poor commit history | No history |

---

## Troubleshooting Guide

### Common Issues & Solutions

**"Cannot find module 'react'"**
```bash
# Solution: Install React dependencies
npm install
```

**"Port 3000 already in use"**
```bash
# Solution: Kill the process or use different port
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Or specify different port
PORT=3001 npm start
```

**"State is updating but component not re-rendering"**
```jsx
// Problem: Mutating state directly
const [items, setItems] = useState([]);
items.push(newItem); // ❌ WRONG

// Solution: Create new array
setItems([...items, newItem]); // ✅ CORRECT
```

**"useEffect running infinitely"**
```jsx
// Problem: Missing dependency array
useEffect(() => {
  setCount(count + 1);
}); // ❌ Runs every render -> infinite loop

// Solution: Add dependency array
useEffect(() => {
  setCount(count + 1);
}, [count]); // ✅ Runs when count changes
```

**"Props passed from parent but component shows undefined"**
```jsx
// Problem: Typo in prop name
<Component userName="Maria" />
function Component(props) {
  return <div>{props.username}</div>; // ❌ Wrong case!
}

// Solution: Use correct name
function Component(props) {
  return <div>{props.userName}</div>; // ✅ Matches
}
```

**"Cannot fetch from backend - CORS error"**
```python
# Flask: Add CORS headers
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# OR specify allowed origins
CORS(app, resources={r"/api/*": {"origins": "localhost:3000"}})
```

```javascript
// React: If backend doesn't have CORS
// Use proxy in package.json
"proxy": "http://localhost:5000"

// Then fetch from relative path
fetch('/api/users')
```

**"TypeScript error: Property 'X' does not exist on type"**
```tsx
// Problem: Interface missing property
interface User {
  name: string;
}

const user: User = { name: 'Maria', age: 28 }; // ❌ age not in interface

// Solution: Add to interface
interface User {
  name: string;
  age: number;
}
```

**"useEffect cleanup warning"**
```jsx
// Problem: Async function directly in useEffect
useEffect(async () => {
  // ❌ useEffect callback can't be async
  const data = await fetch('/api/data');
}, []);

// Solution: Create async function inside
useEffect(() => {
  async function fetchData() {
    const data = await fetch('/api/data');
  }
  fetchData();
}, []);
```

### Performance Tips

1. **Use React DevTools Profiler** - Identify slow components
2. **Lazy load components** - Use React.lazy for code splitting
3. **Memoize expensive computations** - Use useMemo
4. **Memoize callbacks** - Use useCallback for handlers passed to children
5. **Split large components** - Extract into smaller components

### Debugging Techniques

1. **Add console.logs** - Check when code runs
2. **Use React DevTools** - Inspect component tree and props
3. **Check Network tab** - Verify API calls succeed
4. **Use debugger statement** - Pause execution
5. **Check browser console** - Watch for errors

---

## Summary & Key Takeaways

### Week 11 Core Concepts

**React Fundamentals:**
- JSX is HTML-like syntax that becomes JavaScript function calls
- Components are functions that return JSX
- Props are how components communicate (parent to child)
- State is mutable data that triggers re-renders

**Hooks (React's Superpower):**
- useState - Add state to functional components
- useEffect - Handle side effects and lifecycle
- useContext - Share data globally without prop drilling
- Custom hooks - Encapsulate and reuse logic

**Component Patterns:**
- Lift state up for shared state between components
- Composition > Inheritance
- Controlled components for forms
- Error boundaries for error handling

**TypeScript Benefits:**
- Catch errors before runtime
- IDE autocomplete and navigation
- Self-documenting code through types
- Refactoring confidence

### Next Week (Week 12)

Week 12 will cover:
- Database integration (SQL and NoSQL)
- Advanced backend patterns
- Connecting React frontend to databases
- Real-world full-stack application architecture

### Preparation for Students

1. Deploy your React app to Vercel/Netlify
2. Review TypeScript basics
3. Understand your backend API (Flask/FastAPI)
4. Think about database structure for your app

---

**Document Version:** 1.0  
**Last Updated:** April 2025  
**Duration:** ~37 pages