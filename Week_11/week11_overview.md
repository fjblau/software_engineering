# Week 11 Overview: "Modern Frontend"
## React Fundamentals - Component-Based Architecture

**Duration: 30 hours**
**Dates: May 5-9, 2025**
**Note: May 9 (Christi Himmelfahrt) is a holiday**

---

## Week Overview

Week 11 introduces React, the modern frontend framework used by companies worldwide. Students learn component-based architecture, state management, hooks, and professional React patterns. This week also introduces TypeScript basics for type-safe React development.

### Key Focus Areas:
- React fundamentals and JSX
- Component architecture
- State and props
- React Hooks (useState, useEffect, custom hooks)
- Component communication (lifting state up)
- React with TypeScript introduction
- Professional React patterns

### Week 11 Success Metrics:
- ✅ Students build React applications
- ✅ Students use state and props effectively
- ✅ Students implement hooks (useState, useEffect)
- ✅ Students manage component communication
- ✅ Students connect React to Flask/FastAPI backend
- ✅ Students understand TypeScript basics

---

## Daily Schedule

### Monday: React Fundamentals, JSX & Component Architecture
**6.5 hours**
- What is React and why use it?
- Setting up React (Create React App, Vite)
- JSX syntax
- Components (functional components)
- Props and prop passing
- Component composition
- Thinking in React

### Tuesday: State and Props, Lifting State Up
**6.5 hours**
- State vs Props
- useState Hook
- State updates and immutability
- Event handling in React
- Controlled components (forms)
- Lifting state up
- Component communication patterns

### Wednesday: Hooks - useState, useEffect, Custom Hooks
**6.5 hours**
- Rules of Hooks
- useState in depth
- useEffect for side effects
- Cleanup in useEffect
- Dependency arrays
- Custom hooks
- useContext for global state

### Thursday: React with TypeScript Introduction
**6.5 hours**
- Why TypeScript?
- TypeScript basics (types, interfaces)
- Props with TypeScript
- State with TypeScript
- Event handlers with types
- Type safety benefits

### Friday: Professional React Patterns & Project Work
**4 hours**
- Folder structure conventions
- Component patterns
- Error boundaries
- Code splitting
- Performance optimization basics
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 11, students will be able to:

1. **React Basics**
   - Create React applications
   - Write JSX effectively
   - Build functional components
   - Pass and use props

2. **State Management**
   - Use useState for local state
   - Update state immutably
   - Lift state up to parent components
   - Share state between components

3. **React Hooks**
   - Use useState and useEffect
   - Understand dependency arrays
   - Create custom hooks
   - Follow rules of hooks

4. **TypeScript**
   - Add types to React components
   - Type props and state
   - Understand basic TypeScript syntax
   - Benefit from type safety

5. **Full-Stack Integration**
   - Connect React to Flask/FastAPI backend
   - Fetch data from APIs
   - Handle loading and error states
   - Deploy React applications

---

## Key Concepts

### React Core
- Virtual DOM
- JSX (JavaScript XML)
- Components
- Props (read-only)
- State (mutable)
- One-way data flow

### Hooks
- useState - state management
- useEffect - side effects
- useContext - context API
- Custom hooks - reusable logic
- Rules of Hooks

### Component Patterns
- Container/Presentational components
- Composition over inheritance
- Children props
- Render props
- Higher-order components (HOC)

### TypeScript Basics
- Type annotations
- Interfaces
- Type inference
- Union types
- Optional properties

---

## Deliverables

### Weekly Assignment: React + Python Backend Application (100 points)

Build a full-stack application with React frontend and Flask/FastAPI backend:

**Project Ideas:**
- **Todo Application** with user authentication
- **Recipe Book** with search and categories
- **Expense Tracker** with data visualization
- **Blog Platform** with posts and comments

Requirements:

1. **React Frontend** (35 points)
   - Multiple components with clear responsibilities
   - State management with useState
   - useEffect for API calls
   - Forms with controlled components
   - Conditional rendering
   - Loading and error states

2. **Complex State Management** (20 points)
   - Lift state up appropriately
   - Pass data through props
   - Handle form inputs
   - Update state immutably
   - Share state between components

3. **Multiple Components** (15 points)
   - At least 8 components
   - Proper component composition
   - Reusable components
   - Clear component hierarchy

4. **API Integration with Python Backend** (20 points)
   - Connect to Flask or FastAPI backend
   - CRUD operations
   - Error handling
   - Loading states
   - Data persistence

5. **Professional Project Structure** (10 points)
   - Clean folder organization
   - Proper naming conventions
   - Component documentation
   - README with setup instructions
   - Deployed to cloud platform (Vercel, Netlify)
   - Complete user documentation

---

## Resources

### React
- [React Documentation](https://react.dev/)
- [React Tutorial](https://react.dev/learn)
- [React Hooks Reference](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tools
- [Vite](https://vitejs.dev/) - Fast build tool
- [Create React App](https://create-react-app.dev/)

### Deployment
- [Vercel](https://vercel.com/) - Frontend deployment
- [Netlify](https://www.netlify.com/) - Frontend deployment

---

## Code Examples

### Basic React Component
```jsx
// Greeting.jsx
function Greeting(props) {
    return (
        <div className="greeting">
            <h1>Hello, {props.name}!</h1>
            <p>Welcome to React</p>
        </div>
    );
}

export default Greeting;

// App.jsx
import Greeting from './components/Greeting';

function App() {
    return (
        <div className="App">
            <Greeting name="Maria" />
            <Greeting name="Hans" />
        </div>
    );
}

export default App;
```

### State with useState
```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(count + 1);
    }
    
    function decrement() {
        setCount(count - 1);
    }
    
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
```

### Forms with Controlled Components
```jsx
function TodoForm({ onAddTodo }) {
    const [title, setTitle] = useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        
        if (title.trim()) {
            onAddTodo(title);
            setTitle(''); // Clear form
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter todo..."
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}
```

### useEffect for API Calls
```jsx
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('http://localhost:5000/api/users');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchUsers();
    }, []); // Empty array = run once on mount
    
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

### Lifting State Up
```jsx
// Parent component manages state
function TodoApp() {
    const [todos, setTodos] = useState([]);
    
    function addTodo(title) {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }
    
    function toggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    }
    
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm onAddTodo={addTodo} />
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    );
}

// Child component receives props
function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => onToggle(todo.id)}>{todo.title}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}
```

### Custom Hook
```jsx
// useApi.js - Custom hook for API calls
import { useState, useEffect } from 'react';

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('API Error');
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

export default useApi;

// Using the custom hook
function UserProfile({ userId }) {
    const { data: user, loading, error } = useApi(`/api/users/${userId}`);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user found</div>;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
```

### React with TypeScript
```tsx
// Props interface
interface GreetingProps {
    name: string;
    age?: number; // Optional prop
    onClick: () => void;
}

function Greeting({ name, age, onClick }: GreetingProps) {
    return (
        <div onClick={onClick}>
            <h1>Hello, {name}!</h1>
            {age && <p>Age: {age}</p>}
        </div>
    );
}

// State with TypeScript
interface User {
    id: number;
    name: string;
    email: string;
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    // ... rest of component
}
```

### Full-Stack Integration
```jsx
// React Frontend
import { useState, useEffect } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const API_URL = 'http://localhost:5000/api';
    
    // Fetch tasks
    useEffect(() => {
        fetchTasks();
    }, []);
    
    async function fetchTasks() {
        try {
            const response = await fetch(`${API_URL}/tasks`);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    // Add task
    async function addTask(title) {
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            });
            
            const newTask = await response.json();
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    // Delete task
    async function deleteTask(id) {
        try {
            await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}
```

---

## Project Structure
```
my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TodoForm.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   ├── hooks/
│   │   └── useApi.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

---

## Notes for Instructor

- **Holiday**: May 9 is Christi Himmelfahrt - adjust schedule
- Start with simplest component before adding complexity
- Emphasize "thinking in React" - component-based mindset
- Compare to vanilla JavaScript DOM manipulation (Week 6)
- Live-code components while explaining
- Show React DevTools extensively
- TypeScript introduction should be gentle - not overwhelming
- Connect to Python Flask backend from Week 7
- Discuss when to use React vs vanilla JS
- Prepare for advanced backend topics (Week 12)

---

## Common React Mistakes

1. **Mutating state directly**
   ```jsx
   // ❌ Wrong
   todos.push(newTodo);
   setTodos(todos);
   
   // ✅ Correct
   setTodos([...todos, newTodo]);
   ```

2. **Missing key prop in lists**
   ```jsx
   // ❌ Wrong
   {todos.map(todo => <li>{todo.title}</li>)}
   
   // ✅ Correct
   {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
   ```

3. **Infinite useEffect loops**
   ```jsx
   // ❌ Wrong - infinite loop
   useEffect(() => {
       setCount(count + 1);
   });
   
   // ✅ Correct
   useEffect(() => {
       setCount(count + 1);
   }, []); // Empty dependency array
   ```

---

## Connection to Other Weeks

- **Week 6**: React is alternative to vanilla JS DOM manipulation
- **Week 7**: Connect React frontend to Flask backend
- **Week 10**: Test React components (next testing phase)
- **Week 13**: Build full-stack capstone with React
- **Week 15**: Add TypeScript throughout

React is the industry-standard frontend framework - mastering it opens many job opportunities!