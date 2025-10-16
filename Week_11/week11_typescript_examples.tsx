/**
 * Week 11: React with TypeScript - Type-Safe React Development
 * 
 * This file covers:
 * 1. Basic TypeScript types and interfaces
 * 2. Component type definitions
 * 3. Props typing
 * 4. State typing
 * 5. Event handlers with TypeScript
 * 6. Hooks with TypeScript
 * 7. Custom hooks with types
 * 8. Context API with types
 * 9. Generic components
 * 10. Advanced types and patterns
 */

import React, {
  ReactNode,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
  useMemo,
  useRef,
  ReactElement
} from 'react';

// ============================================================================
// 1. BASIC TYPESCRIPT TYPES AND INTERFACES
// ============================================================================

/**
 * Basic types in TypeScript
 */

// Primitive types
const name: string = 'Alice';
const age: number = 28;
const isActive: boolean = true;
const nothing: null = null;
const empty: undefined = undefined;

// Arrays
const numbers: number[] = [1, 2, 3];
const strings: Array<string> = ['a', 'b', 'c'];
const mixed: (string | number)[] = [1, 'a', 2, 'b'];

// Tuple
const tuple: [string, number, boolean] = ['hello', 42, true];

// Enum
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

// Union types
type ResponseStatus = 'success' | 'error' | 'loading';

// ============================================================================
// 2. INTERFACES AND TYPES FOR REACT
// ============================================================================

/**
 * Define clear types for your React application
 */

// User model
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string; // Optional property
  createdAt: Date;
}

// API response
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Todo item
interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  assignee?: User;
  createdAt: Date;
  updatedAt: Date;
}

// Product
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inventory: number;
  category: string;
  rating: number;
}

// ============================================================================
// 3. BASIC COMPONENT TYPE DEFINITIONS
// ============================================================================

/**
 * FC (FunctionComponent) or just function syntax
 * PropsWithChildren for components with children
 */

// Functional component with props
interface GreetingProps {
  name: string;
  greeting?: string;
}

const Greeting: FC<GreetingProps> = ({ name, greeting = 'Hello' }) => {
  return <h1>{greeting}, {name}!</h1>;
};

// Component with children
interface CardProps extends PropsWithChildren {
  title: string;
  variant?: 'default' | 'highlighted' | 'error';
  onClose?: () => void;
}

const Card: FC<CardProps> = ({
  title,
  children,
  variant = 'default',
  onClose
}) => {
  return (
    <div className={`card card-${variant}`}>
      <div className="card-header">
        <h3>{title}</h3>
        {onClose && (
          <button onClick={onClose} aria-label="Close">
            ×
          </button>
        )}
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

// Using the components
function ComponentExample() {
  return (
    <>
      <Greeting name="Maria" greeting="Welcome" />
      <Card title="Profile" variant="highlighted">
        <p>User profile information</p>
      </Card>
    </>
  );
}

// ============================================================================
// 4. PROPS TYPING WITH INTERFACES
// ============================================================================

/**
 * Comprehensive props typing patterns
 */

// Props with event handlers
interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  type = 'button'
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

// Form input props
interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  error,
  helperText,
  ...inputProps
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={error ? 'input-error' : ''}
        {...inputProps}
      />
      {error && <span className="error">{error}</span>}
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
};

// List component
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  emptyMessage?: string;
  loading?: boolean;
}

function List<T>({
  items,
  renderItem,
  emptyMessage = 'No items',
  loading = false
}: ListProps<T>): ReactElement {
  if (loading) return <div>Loading...</div>;
  if (items.length === 0) return <div>{emptyMessage}</div>;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}

// ============================================================================
// 5. STATE TYPING
// ============================================================================

/**
 * TypeScript infers state types from initial values
 * But you can be explicit for clarity
 */

// Inferred state type
function InferredState() {
  const [count, setCount] = useState(0); // count: number
  const [name, setName] = useState(''); // name: string
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
    </div>
  );
}

// Explicit state type
function ExplicitState() {
  // Explicitly state the type
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<ResponseStatus>('loading');
  const [todos, setTodos] = useState<Todo[]>([]);

  return <div>Status: {status}</div>;
}

// State with union types
function UnionState() {
  type LoadingState = { status: 'loading' };
  type SuccessState = { status: 'success'; data: User[] };
  type ErrorState = { status: 'error'; error: string };
  type FetchState = LoadingState | SuccessState | ErrorState;

  const [state, setState] = useState<FetchState>({ status: 'loading' });

  if (state.status === 'loading') {
    return <div>Loading...</div>;
  } else if (state.status === 'success') {
    return (
      <ul>
        {state.data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  } else {
    return <div>Error: {state.error}</div>;
  }
}

// ============================================================================
// 6. EVENT HANDLERS WITH TYPESCRIPT
// ============================================================================

/**
 * Type-safe event handlers
 */

interface FormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  // Type-safe input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof FormData]: value
    }));
  };

  // Type-safe form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Login failed');
      const data: ApiResponse<User> = await response.json();
      console.log('Logged in:', data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Type-safe click handler
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormData({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <button type="reset" onClick={handleReset}>
        Clear
      </button>
    </form>
  );
};

// ============================================================================
// 7. HOOKS WITH TYPESCRIPT
// ============================================================================

/**
 * Type-safe React hooks
 */

// useState with TypeScript
function StateExample() {
  // Explicit type
  const [user, setUser] = useState<User | null>(null);

  // useCallback with types
  const updateUser = useCallback((newUser: User) => {
    setUser(newUser);
  }, []);

  return (
    <button onClick={() => updateUser({ id: 1, name: 'Alice', email: 'alice@example.com', createdAt: new Date() })}>
      Update
    </button>
  );
}

// useEffect with TypeScript
function EffectExample() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        if (!response.ok) throw new Error('Failed to fetch');

        const data: Todo[] = await response.json();
        if (isMounted) {
          setTodos(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTodos();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

// useRef with TypeScript
function RefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}

// useMemo with TypeScript
function MemoExample() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.completed).length;
  }, [todos]);

  return <div>Completed: {completedCount}</div>;
}

// ============================================================================
// 8. CUSTOM HOOKS WITH TYPESCRIPT
// ============================================================================

/**
 * Type-safe custom hooks
 */

// useFetch hook with generics
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fetch failed');
        const json: T = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// useForm hook with types
interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
  validate?: (values: T) => Partial<T>;
}

interface UseFormReturn<T> {
  values: T;
  errors: Partial<T>;
  touched: Partial<Record<keyof T, boolean>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setFieldValue: (field: keyof T, value: any) => void;
  setValues: (values: T) => void;
  resetForm: () => void;
}

function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name as keyof T]: true
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const setFieldValue = (field: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setValues,
    resetForm
  };
}

// Usage of custom hooks
interface LoginFormValues {
  email: string;
  password: string;
}

function LoginFormWithHook() {
  const { values, handleChange, handleSubmit } = useForm<LoginFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      console.log('Submitting:', values);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// useAsync hook
interface UseAsyncState<T> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: T | null;
  error: Error | null;
}

function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
): UseAsyncState<T> {
  const [state, setState] = useState<UseAsyncState<T>>({
    status: 'idle',
    data: null,
    error: null
  });

  useEffect(() => {
    if (!immediate) return;

    let isMounted = true;

    setState(prev => ({ ...prev, status: 'pending' }));

    asyncFunction()
      .then(data => {
        if (isMounted) {
          setState({ status: 'resolved', data, error: null });
        }
      })
      .catch(error => {
        if (isMounted) {
          setState({ status: 'rejected', data: null, error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [asyncFunction, immediate]);

  return state;
}

// ============================================================================
// 9. CONTEXT API WITH TYPESCRIPT
// ============================================================================

/**
 * Type-safe Context API
 */

// Theme context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value: ThemeContextType = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use theme context with type safety
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Usage
const ThemedComponent: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container theme-${theme}`}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// Auth context with user state
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    async function checkAuth() {
      try {
        const response = await fetch('/api/me');
        if (response.ok) {
          const userData: User = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data: ApiResponse<User> = await response.json();
    setUser(data.data);
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: user !== null
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// ============================================================================
// 10. GENERIC COMPONENTS
// ============================================================================

/**
 * Reusable generic components with TypeScript
 */

// Generic modal component
interface ModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: T;
  onConfirm?: (data: T) => void;
  children?: (data: T) => ReactNode;
}

function Modal<T>({
  isOpen,
  onClose,
  title,
  data,
  onConfirm,
  children
}: ModalProps<T>): ReactElement | null {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {children ? children(data) : <div>{JSON.stringify(data)}</div>}
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          {onConfirm && (
            <button onClick={() => onConfirm(data)}>Confirm</button>
          )}
        </div>
      </div>
    </div>
  );
}

// Generic table component
interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

function Table<T extends { id: string | number }>({
  columns,
  data,
  onRowClick
}: TableProps<T>): ReactElement {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={String(column.key)}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr
            key={row.id}
            onClick={() => onRowClick?.(row)}
            style={{ cursor: onRowClick ? 'pointer' : 'default' }}
          >
            {columns.map(column => (
              <td key={String(column.key)}>
                {column.render
                  ? column.render(row[column.key], row)
                  : String(row[column.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Usage
function UserTableExample() {
  const users: User[] = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      createdAt: new Date()
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      createdAt: new Date()
    }
  ];

  const columns: Column<User>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'createdAt',
      header: 'Created',
      render: (value) => new Date(value as Date).toLocaleDateString()
    }
  ];

  return (
    <Table
      columns={columns}
      data={users}
      onRowClick={(user) => console.log('Selected:', user)}
    />
  );
}

// ============================================================================
// 11. ADVANCED PATTERNS AND TYPES
// ============================================================================

/**
 * Advanced TypeScript patterns for React
 */

// Discriminated union types for component variants
type AlertVariant = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  variant: AlertVariant;
  message: string;
  onClose?: () => void;
}

const Alert: FC<AlertProps> = ({ variant, message, onClose }) => {
  const icons: Record<AlertVariant, string> = {
    success: '✓',
    error: '✗',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <div className={`alert alert-${variant}`}>
      <span>{icons[variant]}</span>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} aria-label="Close alert">
          ×
        </button>
      )}
    </div>
  );
};

// Type guard functions
function isUser(obj: any): obj is User {
  return (
    typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string'
  );
}

// Higher-order component with TypeScript
interface WithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends WithLoadingProps>(
  Component: FC<P>
): FC<P> {
  return (props: P) => {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// ============================================================================
// 12. BEST PRACTICES SUMMARY
// ============================================================================

/**
 * TypeScript + React Best Practices:
 * 
 * 1. Always type props with interfaces
 * 2. Use FC or explicit return type for components
 * 3. Avoid using 'any' - use proper types or generics
 * 4. Use union types for conditional states
 * 5. Type useState with explicit types for clarity
 * 6. Create interfaces for all API responses
 * 7. Use generics for reusable components
 * 8. Type event handlers properly
 * 9. Use type guards for runtime checks
 * 10. Keep types close to where they're used
 * 11. Use enums for string literals when appropriate
 * 12. Create custom type utilities for common patterns
 * 13. Use Pick, Omit, Record for type variations
 * 14. Leverage type inference where appropriate
 * 15. Document complex types with comments
 */

// Type utility examples
type UserWithoutPassword = Omit<User, 'id'>;
type UserPreview = Pick<User, 'id' | 'name' | 'avatar'>;
type UserStatus = Record<'active' | 'inactive' | 'pending', number>;

export {
  Greeting,
  Card,
  Button,
  TextInput,
  List,
  LoginForm,
  LoginFormWithHook,
  StateExample,
  EffectExample,
  RefExample,
  MemoExample,
  Modal,
  Table,
  UserTableExample,
  Alert,
  ThemedComponent,
  isUser,
  withLoading
};