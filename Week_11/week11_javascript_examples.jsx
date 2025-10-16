/**
 * Week 11: React Fundamentals - Comprehensive Examples
 * 
 * This file covers:
 * 1. React basics and JSX
 * 2. Functional components and props
 * 3. useState hook for state management
 * 4. useEffect hook for side effects
 * 5. Event handling and forms (controlled components)
 * 6. Lifting state up (component communication)
 * 7. Custom hooks
 * 8. Context API basics
 * 9. Component patterns
 * 10. Error boundaries
 * 11. Conditional rendering
 * 12. Lists and keys
 * 13. Performance optimization (useMemo, useCallback)
 * 14. Testing React components
 * 15. Best practices and common patterns
 */

import React, { useState, useEffect, useContext, createContext, useMemo, useCallback, memo } from 'react';

// ============================================================================
// 1. REACT BASICS AND JSX
// ============================================================================

/**
 * JSX - JavaScript XML syntax for creating React elements
 * JSX looks like HTML but is actually JavaScript
 */

// Simple functional component
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// JSX with expressions and attributes
function Greeting() {
  const name = 'Alice';
  const greeting = `Hello, ${name}!`;
  
  return (
    <div className="greeting">
      <h1>{greeting}</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  );
}

// JSX with conditional rendering
function StatusBadge({ isOnline }) {
  return (
    <div>
      <span className={isOnline ? 'online' : 'offline'}>
        {isOnline ? '✓ Online' : '✗ Offline'}
      </span>
    </div>
  );
}

// ============================================================================
// 2. PROPS - PASSING DATA TO COMPONENTS
// ============================================================================

/**
 * Props allow parent components to pass data to child components
 * Props are read-only from the child's perspective
 */

// Basic props
function UserCard({ name, age, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Using UserCard
function App() {
  return (
    <div>
      <UserCard name="Maria" age={28} city="Vienna" />
      <UserCard name="Hans" age={32} city="Berlin" />
    </div>
  );
}

// Props with children - composition pattern
function Card({ title, children, variant = 'default' }) {
  return (
    <div className={`card card-${variant}`}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Using Card with children
function CardExample() {
  return (
    <Card title="User Profile" variant="highlighted">
      <p>This is a user profile card</p>
      <button>Edit Profile</button>
    </Card>
  );
}

// Spread operator for props
function Button({ label, ...rest }) {
  return <button {...rest}>{label}</button>;
}

// Usage
function ButtonExample() {
  return (
    <Button 
      label="Click me" 
      onClick={() => alert('Clicked')}
      className="primary"
    />
  );
}

// ============================================================================
// 3. USESTATE HOOK - STATE MANAGEMENT
// ============================================================================

/**
 * useState - Adds state to functional components
 * State updates trigger component re-render
 * Always called at top level of component (Rules of Hooks)
 */

// Simple counter
function Counter() {
  const [count, setCount] = useState(0);
  
  function handleIncrement() {
    setCount(count + 1);
  }
  
  function handleDecrement() {
    setCount(count - 1);
  }
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Multiple state variables
function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ firstName, lastName, email });
    // Reset form
    setFirstName('');
    setLastName('');
    setEmail('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="First name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// State with objects (immutable updates)
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  function handleAddTodo() {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        title: input,
        completed: false
      };
      // Immutable update: create new array
      setTodos([...todos, newTodo]);
      setInput('');
    }
  }
  
  function handleToggleTodo(id) {
    // Immutable map/update pattern
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  }
  
  function handleDeleteTodo(id) {
    // Filter out the todo to delete
    setTodos(todos.filter(todo => todo.id !== id));
  }
  
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          placeholder="Add a todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// 4. USEEFFECT HOOK - SIDE EFFECTS AND LIFECYCLE
// ============================================================================

/**
 * useEffect - Perform side effects: data fetching, subscriptions, timers, etc.
 * Replaces componentDidMount, componentDidUpdate, componentWillUnmount
 */

// Fetch data on mount
function UserListFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // This function runs when component mounts
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
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
  }, []); // Empty dependency array = run once on mount
  
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

// Fetch data based on dependencies
function UserDetail({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    }
    
    if (userId) {
      fetchUser();
    }
  }, [userId]); // Run whenever userId changes
  
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}

// Cleanup function - unsubscribe/cancel operations
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // Set up interval
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // Cleanup function - runs before component unmounts or effect re-runs
    return () => {
      clearInterval(interval);
    };
  }, []); // No dependencies = always re-run cleanup
  
  return <div>Elapsed: {seconds} seconds</div>;
}

// Multiple effects for different concerns
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div>Window width: {width}px</div>;
}

// ============================================================================
// 5. CONTROLLED COMPONENTS - FORMS
// ============================================================================

/**
 * Controlled components - React state is the "single source of truth"
 * for form values instead of the DOM
 */

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // Send to backend
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="remember">
          <input
            id="remember"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}

// Form with validation
function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }
  
  function validateForm() {
    const newErrors = {};
    
    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid:', formData);
    } else {
      setErrors(newErrors);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}

// ============================================================================
// 6. LIFTING STATE UP - COMPONENT COMMUNICATION
// ============================================================================

/**
 * Lifting state up - Move state to parent component when multiple
 * children need to share the same state
 */

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  
  const fahrenheit = (celsius * 9/5) + 32;
  
  function handleCelsiusChange(e) {
    setCelsius(parseFloat(e.target.value));
  }
  
  function handleFahrenheitChange(e) {
    const f = parseFloat(e.target.value);
    setCelsius((f - 32) * 5/9);
  }
  
  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Enter temperature in {scale}:</label>
      <input
        value={temperature}
        onChange={onTemperatureChange}
        type="number"
      />
    </div>
  );
}

function BoilingVerdict({ celsius }) {
  return (
    <div>
      {celsius >= 100
        ? <p>The water would boil.</p>
        : <p>The water would not boil.</p>
      }
    </div>
  );
}

// ============================================================================
// 7. CUSTOM HOOKS
// ============================================================================

/**
 * Custom hooks - Extract component logic into reusable functions
 * Hooks that use hooks are custom hooks
 */

// useForm hook - reusable form state management
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }
  
  function handleBlur(e) {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }
  
  function setFieldValue(name, value) {
    setValues(prev => ({ ...prev, [name]: value }));
  }
  
  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setValues,
    setErrors
  };
}

// useFetch hook - reusable data fetching
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

// Usage of useFetch
function PostList() {
  const { data: posts, loading, error } = useFetch('/api/posts');
  
  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// useLocalStorage hook - persist state to local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  function setValue(value) {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }
  
  return [storedValue, setValue];
}

// Usage
function PersistentCounter() {
  const [count, setCount] = useLocalStorage('counter', 0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// ============================================================================
// 8. CONTEXT API - GLOBAL STATE
// ============================================================================

/**
 * Context API - Share state across components without prop drilling
 */

// Create context
const ThemeContext = createContext();
const AuthContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Component using context
function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`container theme-${theme}`}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// Auth context example
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is already logged in
    async function checkAuth() {
      try {
        const response = await fetch('/api/me');
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
      } finally {
        setLoading(false);
      }
    }
    
    checkAuth();
  }, []);
  
  function login(email, password) {
    // Login logic
  }
  
  function logout() {
    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================================================
// 9. CONDITIONAL RENDERING PATTERNS
// ============================================================================

// If/else rendering
function ConditionalAlert({ alertType }) {
  if (alertType === 'error') {
    return <div className="alert-error">An error occurred!</div>;
  } else if (alertType === 'success') {
    return <div className="alert-success">Success!</div>;
  } else if (alertType === 'warning') {
    return <div className="alert-warning">Warning!</div>;
  }
  return null;
}

// Ternary operator
function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
    </div>
  );
}

// Logical AND (&&) - render if true
function NotificationBadge({ count }) {
  return (
    <div>
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  );
}

// Switch pattern
function RenderContent({ pageType }) {
  switch (pageType) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}

// ============================================================================
// 10. LISTS AND KEYS
// ============================================================================

/**
 * Always use keys when rendering lists
 * Keys help React identify which items have changed
 */

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map(article => (
        <ArticleItem
          key={article.id}
          article={article}
        />
      ))}
    </ul>
  );
}

function ArticleItem({ article }) {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <a href={article.url}>Read more</a>
    </li>
  );
}

// ============================================================================
// 11. PERFORMANCE OPTIMIZATION
// ============================================================================

/**
 * useMemo - Memoize expensive computations
 * useCallback - Memoize function references
 * memo - Prevent unnecessary re-renders of components
 */

// useMemo example
function ExpensiveCalculation({ items }) {
  const total = useMemo(() => {
    console.log('Calculating total...');
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);
  
  return <div>Total: ${total.toFixed(2)}</div>;
}

// useCallback example
function SearchUsers({ onSearch }) {
  const handleSearch = useCallback((query) => {
    // This function reference stays the same between renders
    onSearch(query);
  }, [onSearch]);
  
  return (
    <input
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search users..."
    />
  );
}

// memo - Prevent re-render of memoized component
const UserItem = memo(function UserItem({ user, onSelect }) {
  return (
    <div onClick={() => onSelect(user.id)}>
      {user.name}
    </div>
  );
});

// ============================================================================
// 12. ERROR BOUNDARIES (Class Component - Reference)
// ============================================================================

/**
 * Error boundaries catch JavaScript errors in child components
 * Currently requires class components (React 16+)
 */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Send to error logging service
  }
  
  render() {
    if (this.state.hasError) {
      return <div className="error">Something went wrong: {this.state.error?.message}</div>;
    }
    
    return this.props.children;
  }
}

// ============================================================================
// 13. COMPONENT COMPOSITION PATTERNS
// ============================================================================

// Higher-Order Component (HOC) pattern
function withCounter(Component) {
  return function WrappedComponent(props) {
    const [count, setCount] = useState(0);
    
    return (
      <Component
        count={count}
        onIncrement={() => setCount(count + 1)}
        {...props}
      />
    );
  };
}

// Render props pattern
function CounterRenderProps({ children }) {
  const [count, setCount] = useState(0);
  
  return children({
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1)
  });
}

// Usage
function RenderPropsExample() {
  return (
    <CounterRenderProps>
      {({ count, increment, decrement }) => (
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      )}
    </CounterRenderProps>
  );
}

// ============================================================================
// 14. BEST PRACTICES AND PATTERNS
// ============================================================================

/**
 * React Best Practices:
 * 
 * 1. Keep components small and focused
 * 2. Lift state up only as far as needed
 * 3. Use composition over inheritance
 * 4. Always use keys when rendering lists
 * 5. Handle loading and error states
 * 6. Use custom hooks to share logic
 * 7. Memoize expensive computations
 * 8. Keep state close to where it's used
 * 9. Use dependency arrays correctly
 * 10. Avoid inline functions in props (performance)
 * 11. Use const for components
 * 12. Destructure props for readability
 */

// Good: Small, focused component
function GoodProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}

// Good: Using custom hooks
function GoodUserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Good: Proper state management
function GoodShoppingCart() {
  const [items, setItems] = useState([]);
  
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);
  
  function addItem(product) {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total: ${total.toFixed(2)}</p>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div>
      {item.name} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
    </div>
  );
}

// ============================================================================
// 15. COMPLETE TODO APP EXAMPLE
// ============================================================================

/**
 * Complete example combining multiple React concepts:
 * - State management with useState
 * - Effects with useEffect
 * - Event handling
 * - Lists and keys
 * - Controlled components
 * - Component composition
 */

function CompleteApp() {
  return (
    <div className="app">
      <h1>React Todo App</h1>
      <TodoApplication />
    </div>
  );
}

function TodoApplication() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  const completedCount = todos.filter(t => t.completed).length;
  const activeCount = todos.length - completedCount;
  
  function handleAddTodo(title) {
    if (title.trim()) {
      setTodos(prev => [
        ...prev,
        {
          id: Date.now(),
          title,
          completed: false,
          createdAt: new Date().toISOString()
        }
      ]);
    }
  }
  
  function handleToggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  
  function handleDeleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }
  
  function handleClearCompleted() {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }
  
  return (
    <div className="todo-app">
      <TodoInput
        input={input}
        onInputChange={setInput}
        onAddTodo={() => {
          handleAddTodo(input);
          setInput('');
        }}
      />
      
      <TodoStats
        total={todos.length}
        active={activeCount}
        completed={completedCount}
      />
      
      <TodoFilters
        filter={filter}
        onFilterChange={setFilter}
      />
      
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
      
      {completedCount > 0 && (
        <button onClick={handleClearCompleted}>
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
}

function TodoInput({ input, onInputChange, onAddTodo }) {
  return (
    <div className="todo-input">
      <input
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && onAddTodo()}
        placeholder="Add a new todo..."
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
}

function TodoStats({ total, active, completed }) {
  return (
    <div className="todo-stats">
      <p>Total: {total} | Active: {active} | Completed: {completed}</p>
    </div>
  );
}

function TodoFilters({ filter, onFilterChange }) {
  return (
    <div className="todo-filters">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
}

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li>No todos yet!</li>
      ) : (
        todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}

function TodoListItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export {
  Welcome,
  Greeting,
  StatusBadge,
  UserCard,
  Card,
  Counter,
  UserForm,
  TodoApp,
  UserListFetch,
  UserDetail,
  Timer,
  WindowSize,
  LoginForm,
  RegisterForm,
  TemperatureConverter,
  useForm,
  useFetch,
  useLocalStorage,
  ThemeProvider,
  useTheme,
  AuthProvider,
  ErrorBoundary,
  CompleteApp,
  TodoApplication
};