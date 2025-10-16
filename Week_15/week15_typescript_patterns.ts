/**
 * Week 15: Advanced TypeScript Patterns for Production
 * =====================================================
 * 
 * Advanced TypeScript patterns:
 * - Generic constraints and advanced types
 * - Discriminated unions for type safety
 * - Type guards and predicates
 * - Decorator patterns
 * - Advanced OOP patterns
 * - Type utilities and helpers
 * - Production-ready error handling
 * 
 * Compile: tsc week15_typescript_patterns.ts
 * Run: node week15_typescript_patterns.js
 */

// ============================================================================
// 1. DISCRIMINATED UNIONS - TYPE SAFETY FOR DIFFERENT STATES
// ============================================================================

/**
 * Discriminated union for API responses
 * Ensures exhaustive handling of all cases
 */

type SuccessResponse<T> = {
    status: 'success';
    data: T;
    timestamp: Date;
};

type ErrorResponse = {
    status: 'error';
    error: {
        code: string;
        message: string;
        details?: Record<string, any>;
    };
    timestamp: Date;
};

type LoadingResponse = {
    status: 'loading';
    progress: number;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse | LoadingResponse;

/**
 * Type guard function
 */
function isSuccessResponse<T>(response: ApiResponse<T>): response is SuccessResponse<T> {
    return response.status === 'success';
}

function isErrorResponse(response: ApiResponse<any>): response is ErrorResponse {
    return response.status === 'error';
}

function handleApiResponse<T>(response: ApiResponse<T>): T | null {
    if (isSuccessResponse(response)) {
        return response.data;
    }

    if (isErrorResponse(response)) {
        console.error(`Error: ${response.error.code} - ${response.error.message}`);
        return null;
    }

    // TypeScript knows this is LoadingResponse at this point
    console.log(`Loading: ${response.progress}%`);
    return null;
}

// ============================================================================
// 2. GENERIC CONSTRAINTS - POWERFUL AND SAFE
// ============================================================================

/**
 * Generic repository pattern with constraints
 */

interface Entity {
    id: string;
    createdAt: Date;
}

interface Repository<T extends Entity> {
    create(entity: Omit<T, 'id' | 'createdAt'>): Promise<T>;
    findById(id: string): Promise<T | null>;
    update(id: string, partial: Partial<T>): Promise<T>;
    delete(id: string): Promise<void>;
}

class BaseRepository<T extends Entity> implements Repository<T> {
    private data: Map<string, T> = new Map();

    async create(entity: Omit<T, 'id' | 'createdAt'>): Promise<T> {
        const id = Math.random().toString(36).substr(2, 9);
        const newEntity = {
            ...entity,
            id,
            createdAt: new Date()
        } as T;

        this.data.set(id, newEntity);
        return newEntity;
    }

    async findById(id: string): Promise<T | null> {
        return this.data.get(id) ?? null;
    }

    async update(id: string, partial: Partial<T>): Promise<T> {
        const entity = this.data.get(id);
        if (!entity) throw new Error(`Entity with id ${id} not found`);

        const updated = { ...entity, ...partial } as T;
        this.data.set(id, updated);
        return updated;
    }

    async delete(id: string): Promise<void> {
        this.data.delete(id);
    }
}

// Usage
interface User extends Entity {
    name: string;
    email: string;
    role: 'admin' | 'user';
}

class UserRepository extends BaseRepository<User> {
    async findByEmail(email: string): Promise<User | null> {
        // Implementation
        return null;
    }
}

// ============================================================================
// 3. ADVANCED TYPE UTILITIES
// ============================================================================

/**
 * Type utilities for building complex types
 */

// Make all properties optional
type Partial<T> = {
    [P in keyof T]?: T[P];
};

// Make all properties readonly
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Pick specific properties
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// Omit specific properties
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Get required properties only
type Required<T> = {
    [P in keyof T]-?: T[P];
};

// Extract union member
type Extract<T, U> = T extends U ? T : never;

// Get keys of specific type
type KeysOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

/**
 * Custom type utilities
 */

// Make specific properties nullable
type Nullable<T, K extends keyof T> = Omit<T, K> & {
    [P in K]: T[P] | null;
};

// Make properties recursive partial
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Make specific properties required in union type
type RequireProperties<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Example: API request type builder
 */
type RequestConfig<T extends Record<string, any> = {}> = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    headers?: Record<string, string>;
    body?: T extends {} ? T : never;
    timeout?: number;
};

const postRequest: RequestConfig<{ name: string }> = {
    method: 'POST',
    url: '/api/users',
    body: { name: 'Maria' }
};

// ============================================================================
// 4. CONDITIONAL TYPES - TYPES THAT DEPEND ON OTHER TYPES
// ============================================================================

/**
 * Conditional types for type-level programming
 */

type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>; // string
type Num = Flatten<42>;       // 42

/**
 * Advanced: Async function return type extraction
 */

type AsyncReturnType<T extends (...args: any) => Promise<any>> = 
    T extends (...args: any) => Promise<infer R> ? R : never;

async function fetchUser(id: string): Promise<User> {
    return { id, name: 'Maria', email: 'maria@example.com', role: 'user', createdAt: new Date() };
}

type UserFromFetch = AsyncReturnType<typeof fetchUser>; // User

/**
 * Distributed conditional types
 */

type ToArray<T> = T extends any ? T[] : never;

type ArrStr = ToArray<string | number>; // string[] | number[]

// ============================================================================
// 5. DECORATOR PATTERN - CROSS-CUTTING CONCERNS
// ============================================================================

/**
 * Decorators for logging, timing, error handling
 * Note: Requires experimentalDecorators: true in tsconfig.json
 */

// Method decorator for logging
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`[${propertyKey}] Called with:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`[${propertyKey}] Returned:`, result);
        return result;
    };

    return descriptor;
}

// Method decorator for timing
function Timed(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const duration = performance.now() - start;
        console.log(`[${propertyKey}] took ${duration.toFixed(2)}ms`);
        return result;
    };

    return descriptor;
}

// Class decorator
function Controller(prefix: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            prefix = prefix;
        };
    };
}

// Property decorator
function Validate(rule: (value: any) => boolean) {
    return function (target: any, propertyKey: string) {
        let value: any;

        Object.defineProperty(target, propertyKey, {
            get() { return value; },
            set(newValue: any) {
                if (!rule(newValue)) {
                    throw new Error(`Validation failed for ${propertyKey}`);
                }
                value = newValue;
            }
        });
    };
}

/**
 * Usage example
 */

@Controller('/api/users')
class UserService {
    @Log
    @Timed
    async getUser(id: string): Promise<User | null> {
        // Simulate API call
        await new Promise(r => setTimeout(r, 100));
        return { id, name: 'Maria', email: 'maria@example.com', role: 'user', createdAt: new Date() };
    }
}

// ============================================================================
// 6. BUILDER PATTERN WITH GENERICS
// ============================================================================

/**
 * Type-safe builder pattern
 */

interface QueryBuilder<T extends Record<string, any>> {
    where(condition: Partial<T>): QueryBuilder<T>;
    select<K extends keyof T>(...keys: K[]): QueryBuilder<Pick<T, K>>;
    orderBy<K extends keyof T>(key: K, direction: 'asc' | 'desc'): QueryBuilder<T>;
    limit(n: number): QueryBuilder<T>;
    build(): any;
}

class SQLQueryBuilder<T extends Record<string, any>> implements QueryBuilder<T> {
    private conditions: Partial<T>[] = [];
    private selectedFields: (keyof T)[] = [];
    private orderByClause: { key: keyof T; direction: 'asc' | 'desc' } | null = null;
    private limitValue: number | null = null;

    where(condition: Partial<T>): QueryBuilder<T> {
        this.conditions.push(condition);
        return this;
    }

    select<K extends keyof T>(...keys: K[]): QueryBuilder<Pick<T, K>> {
        this.selectedFields = keys;
        return this as any;
    }

    orderBy<K extends keyof T>(key: K, direction: 'asc' | 'desc' = 'asc'): QueryBuilder<T> {
        this.orderByClause = { key, direction };
        return this;
    }

    limit(n: number): QueryBuilder<T> {
        this.limitValue = n;
        return this;
    }

    build(): string {
        let query = `SELECT * FROM users`;

        if (this.conditions.length) {
            const where = this.conditions
                .map(cond => JSON.stringify(cond))
                .join(' AND ');
            query += ` WHERE ${where}`;
        }

        if (this.orderByClause) {
            query += ` ORDER BY ${String(this.orderByClause.key)} ${this.orderByClause.direction.toUpperCase()}`;
        }

        if (this.limitValue) {
            query += ` LIMIT ${this.limitValue}`;
        }

        return query;
    }
}

// Usage with type safety
const userQuery = new SQLQueryBuilder<User>()
    .where({ role: 'admin' })
    .orderBy('createdAt', 'desc')
    .limit(10)
    .build();

// ============================================================================
// 7. DEPENDENCY INJECTION CONTAINER
// ============================================================================

/**
 * Simple DI container for managing dependencies
 */

type Constructor<T = any> = new (...args: any[]) => T;
type Factory<T = any> = (...args: any[]) => T;

class DIContainer {
    private services: Map<string, any> = new Map();
    private factories: Map<string, Factory> = new Map();
    private singletons: Map<string, any> = new Map();

    register<T>(key: string, constructor: Constructor<T>, singleton: boolean = true) {
        if (singleton) {
            // Create instance and cache
            const instance = new constructor();
            this.singletons.set(key, instance);
        } else {
            this.services.set(key, constructor);
        }
    }

    registerFactory<T>(key: string, factory: Factory<T>) {
        this.factories.set(key, factory);
    }

    get<T>(key: string): T {
        // Check singletons first
        if (this.singletons.has(key)) {
            return this.singletons.get(key);
        }

        // Check factories
        if (this.factories.has(key)) {
            return this.factories.get(key)() as T;
        }

        // Create from constructor
        if (this.services.has(key)) {
            const constructor = this.services.get(key);
            return new constructor() as T;
        }

        throw new Error(`Service ${key} not found`);
    }
}

// Usage
const container = new DIContainer();
container.register('userRepository', UserRepository);
const userRepo = container.get<UserRepository>('userRepository');

// ============================================================================
// 8. STATE MACHINE WITH TYPES
// ============================================================================

/**
 * Type-safe state machine
 */

type OrderState = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

type StateTransition = {
    from: OrderState;
    to: OrderState;
};

const validTransitions: StateTransition[] = [
    { from: 'pending', to: 'processing' },
    { from: 'pending', to: 'cancelled' },
    { from: 'processing', to: 'shipped' },
    { from: 'processing', to: 'cancelled' },
    { from: 'shipped', to: 'delivered' }
];

class Order {
    private state: OrderState = 'pending';

    transitionTo(newState: OrderState): boolean {
        const isValid = validTransitions.some(
            t => t.from === this.state && t.to === newState
        );

        if (isValid) {
            this.state = newState;
            console.log(`Transitioned: ${this.state} -> ${newState}`);
            return true;
        }

        console.log(`Invalid transition: ${this.state} -> ${newState}`);
        return false;
    }

    getState(): OrderState {
        return this.state;
    }
}

// ============================================================================
// 9. ERROR HANDLING - CUSTOM ERROR TYPES
// ============================================================================

/**
 * Typed error handling
 */

abstract class CustomError extends Error {
    abstract readonly statusCode: number;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

class NotFoundError extends CustomError {
    readonly statusCode = 404;

    constructor(resource: string) {
        super(`${resource} not found`);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

class ValidationError extends CustomError {
    readonly statusCode = 400;
    readonly fields: Record<string, string>;

    constructor(message: string, fields: Record<string, string>) {
        super(message);
        this.fields = fields;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

class UnauthorizedError extends CustomError {
    readonly statusCode = 401;

    constructor(message: string = 'Unauthorized') {
        super(message);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

/**
 * Result type for handling success/failure
 */

type Result<T, E = Error> = 
    | { success: true; value: T }
    | { success: false; error: E };

function Ok<T>(value: T): Result<T> {
    return { success: true, value };
}

function Err<E>(error: E): Result<never, E> {
    return { success: false, error };
}

function isOk<T, E>(result: Result<T, E>): result is { success: true; value: T } {
    return result.success;
}

// Usage
async function getUserSafely(id: string): Promise<Result<User, CustomError>> {
    if (!id) {
        return Err(new ValidationError('User ID is required', { id: 'Required' }));
    }

    // Simulate lookup
    if (id === '123') {
        return Err(new NotFoundError('User'));
    }

    return Ok({ 
        id, 
        name: 'Maria', 
        email: 'maria@example.com', 
        role: 'user', 
        createdAt: new Date() 
    });
}

// ============================================================================
// 10. BEST PRACTICES
// ============================================================================

/*
 * TYPESCRIPT BEST PRACTICES FOR PRODUCTION:
 * 
 * 1. Strict Mode:
 *    - Enable all strict checks in tsconfig.json
 *    - Use --strict flag
 *    - No "any" types without explicit reason
 * 
 * 2. Interfaces vs Types:
 *    - Use interfaces for object contracts
 *    - Use types for unions, tuples, primitives
 *    - Interfaces are more standard for OOP
 * 
 * 3. Generics:
 *    - Use to write reusable, type-safe code
 *    - Add constraints for better specificity
 *    - Avoid deeply nested generics
 * 
 * 4. Error Handling:
 *    - Create custom error types
 *    - Use discriminated unions for results
 *    - Never throw generic errors
 * 
 * 5. Testing:
 *    - Type-driven development
 *    - Test edge cases
 *    - Use TypeScript to prevent bugs
 * 
 * 6. Performance:
 *    - Compilation time matters
 *    - Avoid circular dependencies
 *    - Use const assertions for optimization
 * 
 * 7. Documentation:
 *    - Use JSDoc comments
 *    - Types ARE documentation
 *    - Keep examples in comments
 * 
 * 8. Configuration:
 *    - Use strict tsconfig.json
 *    - Enable noUnusedLocals, noUnusedParameters
 *    - Configure target and module appropriately
 */

export {};