/**
 * WEEK 10: TESTING & QUALITY IN JAVASCRIPT
 * Comprehensive guide to Jest testing, TDD, and code quality
 * 
 * Learning Objectives:
 * - Write unit tests with Jest
 * - Test async code
 * - Mock functions and modules
 * - Follow Test-Driven Development (TDD)
 * - Measure code coverage
 * - Use code quality tools
 */

// ============================================================================
// SECTION 1: JEST BASICS - SETTING UP
// ============================================================================

/**
 * Jest is a JavaScript testing framework made by Facebook
 * 
 * Installation:
 * npm install --save-dev jest
 * 
 * package.json configuration:
 * {
 *   "scripts": {
 *     "test": "jest",
 *     "test:watch": "jest --watch",
 *     "test:coverage": "jest --coverage"
 *   },
 *   "jest": {
 *     "testEnvironment": "node",
 *     "collectCoverageFrom": ["src/**/*.js"],
 *     "coverageThreshold": {
 *       "global": {
 *         "lines": 80,
 *         "functions": 80,
 *         "branches": 80,
 *         "statements": 80
 *       }
 *     }
 *   }
 * }
 */

/**
 * Test File Naming Conventions:
 * - *.test.js  (recommended)
 * - *.spec.js
 * - __tests__/ folder
 * 
 * Jest automatically finds and runs these files
 */


// ============================================================================
// SECTION 2: BASIC UNIT TESTS (FUNCTIONS WITHOUT DEPENDENCIES)
// ============================================================================

/**
 * Arrange-Act-Assert (AAA) Pattern
 * 1. ARRANGE: Set up test data
 * 2. ACT: Execute the code
 * 3. ASSERT: Verify the result
 */

// Function to test
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// ✅ EXAMPLE TEST FILE: calculator.test.js
/*
const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
    // GROUP 1: Addition tests
    describe('add', () => {
        test('adds two positive numbers', () => {
            // ARRANGE
            const a = 2, b = 3;
            
            // ACT
            const result = add(a, b);
            
            // ASSERT
            expect(result).toBe(5);
        });
        
        test('adds negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });
        
        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
        
        test('throws error for non-number input', () => {
            expect(() => add('5', 3)).toThrow('Both arguments must be numbers');
        });
    });
    
    // GROUP 2: Subtraction tests
    describe('subtract', () => {
        test('subtracts two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });
        
        test('handles negative results', () => {
            expect(subtract(3, 5)).toBe(-2);
        });
    });
    
    // GROUP 3: Division tests
    describe('divide', () => {
        test('divides two numbers', () => {
            expect(divide(6, 2)).toBe(3);
        });
        
        test('throws error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });
});
*/


// ============================================================================
// SECTION 3: COMMON JEST ASSERTIONS
// ============================================================================

/**
 * EQUALITY MATCHERS:
 * expect(value).toBe(expected)              // === comparison
 * expect(value).toEqual(expected)           // deep equality
 * expect(value).toStrictEqual(expected)     // strict equality
 * expect(value).not.toBe(expected)          // negation
 * 
 * TRUTHINESS:
 * expect(value).toBeTruthy()                // truthy value
 * expect(value).toBeFalsy()                 // falsy value
 * expect(value).toBeNull()                  // null
 * expect(value).toBeUndefined()             // undefined
 * expect(value).toBeDefined()               // not undefined
 * 
 * NUMBER MATCHERS:
 * expect(number).toBeGreaterThan(5)
 * expect(number).toBeLessThan(5)
 * expect(number).toBeGreaterThanOrEqual(5)
 * expect(number).toBeLessThanOrEqual(5)
 * expect(number).toBeCloseTo(0.3)           // for floating point
 * 
 * STRING MATCHERS:
 * expect(string).toMatch('pattern')         // regex
 * expect(string).toMatch(/pattern/)
 * expect(string).toContain('substring')
 * 
 * ARRAY/OBJECT MATCHERS:
 * expect(array).toContain(value)
 * expect(array).toHaveLength(3)
 * expect(object).toHaveProperty('key')
 * expect(object).toHaveProperty('key', value)
 * expect(object).toEqual({key: value})
 * 
 * EXCEPTION MATCHERS:
 * expect(() => code()).toThrow()
 * expect(() => code()).toThrow(Error)
 * expect(() => code()).toThrow('message')
 */

/*
// EXAMPLES:
test('equality examples', () => {
    expect(5).toBe(5);                          // ✅
    expect({a: 1}).toEqual({a: 1});             // ✅
    expect(5).not.toBe('5');                    // ✅
});

test('number examples', () => {
    expect(4).toBeGreaterThan(3);               // ✅
    expect(3.14).toBeCloseTo(3.1, 1);           // ✅ (1 decimal place)
});

test('string examples', () => {
    expect('hello world').toContain('world');   // ✅
    expect('test@example.com').toMatch(/@/);    // ✅
});

test('array examples', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2);                   // ✅
    expect(arr).toHaveLength(3);                // ✅
});

test('exception examples', () => {
    expect(() => {
        throw new Error('Something broke');
    }).toThrow('Something broke');              // ✅
});
*/


// ============================================================================
// SECTION 4: TESTING OBJECTS AND FUNCTIONS
// ============================================================================

// Classes to test
class UserValidator {
    validateEmail(email) {
        if (!email.includes('@')) {
            throw new Error('Invalid email format');
        }
        return true;
    }
    
    validatePassword(password) {
        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters');
        }
        return true;
    }
    
    validateUsername(username) {
        if (username.length < 3) {
            throw new Error('Username must be at least 3 characters');
        }
        return true;
    }
}

/*
// TEST FILE: userValidator.test.js
const UserValidator = require('./userValidator');

describe('UserValidator', () => {
    let validator;
    
    // Setup before each test
    beforeEach(() => {
        validator = new UserValidator();
    });
    
    describe('validateEmail', () => {
        test('accepts valid email', () => {
            expect(validator.validateEmail('user@example.com')).toBe(true);
        });
        
        test('rejects email without @', () => {
            expect(() => {
                validator.validateEmail('userexample.com');
            }).toThrow('Invalid email format');
        });
    });
    
    describe('validatePassword', () => {
        test('accepts valid password', () => {
            expect(validator.validatePassword('securePass123')).toBe(true);
        });
        
        test('rejects short password', () => {
            expect(() => {
                validator.validatePassword('short');
            }).toThrow('Password must be at least 8 characters');
        });
    });
    
    describe('validateUsername', () => {
        test('accepts valid username', () => {
            expect(validator.validateUsername('johndoe')).toBe(true);
        });
        
        test('rejects short username', () => {
            expect(() => {
                validator.validateUsername('ab');
            }).toThrow('Username must be at least 3 characters');
        });
    });
});
*/


// ============================================================================
// SECTION 5: MOCKING FUNCTIONS
// ============================================================================

/**
 * Mocking allows you to:
 * 1. Replace functions with test versions
 * 2. Track how functions are called
 * 3. Control return values
 * 4. Verify function calls
 */

// Function that uses a dependency
function processUserData(userId, fetchUserFn) {
    const user = fetchUserFn(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return {
        name: user.name.toUpperCase(),
        email: user.email.toLowerCase()
    };
}

/*
// TEST FILE with mocks: userProcessor.test.js
const { processUserData } = require('./userProcessor');

describe('processUserData', () => {
    test('processes user data correctly', () => {
        // Create a mock function
        const mockFetch = jest.fn();
        
        // Set return value
        mockFetch.mockReturnValue({
            name: 'John Doe',
            email: 'JOHN@EXAMPLE.COM'
        });
        
        // Call function
        const result = processUserData(1, mockFetch);
        
        // Assertions
        expect(result.name).toBe('JOHN DOE');
        expect(result.email).toBe('john@example.com');
        
        // Verify mock was called
        expect(mockFetch).toHaveBeenCalled();
        expect(mockFetch).toHaveBeenCalledWith(1);
        expect(mockFetch).toHaveBeenCalledTimes(1);
    });
    
    test('throws error if user not found', () => {
        const mockFetch = jest.fn();
        mockFetch.mockReturnValue(null);
        
        expect(() => {
            processUserData(999, mockFetch);
        }).toThrow('User not found');
    });
});

// MOCK ASSERTIONS:
// expect(mockFn).toHaveBeenCalled()         // called at least once
// expect(mockFn).toHaveBeenCalledTimes(2)   // called exactly N times
// expect(mockFn).toHaveBeenCalledWith(arg)  // called with specific args
// mockFn.mockReturnValue(value)             // set return value
// mockFn.mockReturnValueOnce(value)         // one-time return value
// mockFn.mockImplementation(fn)             // custom implementation
// mockFn.mock.calls                         // array of all calls
// mockFn.mock.results                       // array of all results
*/


// ============================================================================
// SECTION 6: MOCKING MODULES AND EXTERNAL APIS
// ============================================================================

/**
 * Mock entire modules or external API calls
 */

// Function that calls an external API
async function fetchWeatherData(city) {
    // In real code, this would call an external API
    const response = await fetch(`https://api.weather.com/city/${city}`);
    if (!response.ok) {
        throw new Error('Weather API failed');
    }
    return response.json();
}

/*
// TEST FILE: weather.test.js
import { fetchWeatherData } from './weather';

// Mock the fetch function globally
global.fetch = jest.fn();

describe('fetchWeatherData', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('returns weather data', async () => {
        // Mock successful response
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce({
                city: 'Vienna',
                temperature: 20,
                condition: 'Sunny'
            })
        });
        
        const data = await fetchWeatherData('Vienna');
        
        expect(data.city).toBe('Vienna');
        expect(data.temperature).toBe(20);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.weather.com/city/Vienna'
        );
    });
    
    test('throws error on API failure', async () => {
        // Mock failed response
        global.fetch.mockResolvedValueOnce({
            ok: false
        });
        
        await expect(fetchWeatherData('Vienna')).rejects.toThrow('Weather API failed');
    });
});

// MODULE MOCKING:
jest.mock('../api/userService');  // Mock entire module
import * as userService from '../api/userService';
userService.getUser = jest.fn().mockResolvedValue({id: 1, name: 'John'});
*/


// ============================================================================
// SECTION 7: TESTING ASYNC CODE
// ============================================================================

/**
 * Test promises and async functions
 */

function fetchUserFromAPI(userId) {
    return fetch(`https://api.example.com/users/${userId}`)
        .then(r => r.json());
}

async function fetchUserAsync(userId) {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return response.json();
}

/*
// TEST FILE: async.test.js
describe('Async Testing', () => {
    test('tests promise with .then()', () => {
        return fetchUserFromAPI(1).then(user => {
            expect(user.id).toBe(1);
            expect(user.name).toBeDefined();
        });
    });
    
    test('tests promise with async/await', async () => {
        const user = await fetchUserAsync(1);
        expect(user.id).toBe(1);
    });
    
    test('handles promise rejection', () => {
        return expect(fetchUserFromAPI(999)).rejects.toThrow();
    });
    
    test('handles async errors with catch', async () => {
        try {
            await fetchUserAsync(999);
            // If we get here, test fails
            expect(true).toBe(false);
        } catch (error) {
            expect(error).toBeDefined();
        }
    });
});
*/


// ============================================================================
// SECTION 8: PARAMETRIZED TESTS
// ============================================================================

/**
 * Run the same test with multiple data sets
 * Reduces code duplication
 */

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

/*
// TEST FILE: palindrome.test.js
describe('isPalindrome', () => {
    // Test multiple cases with test.each()
    test.each([
        ['racecar', true],
        ['level', true],
        ['hello', false],
        ['A man a plan a canal Panama', true],
        ['12321', true],
        ['12345', false],
        ['', true],  // empty string is technically a palindrome
    ])('isPalindrome(%s) returns %s', (input, expected) => {
        expect(isPalindrome(input)).toBe(expected);
    });
});

// OBJECT-BASED PARAMETRIZATION:
test.each([
    { value: 2, expected: true },
    { value: 3, expected: true },
    { value: 4, expected: false },
    { value: 5, expected: true },
])('isPrime($value) returns $expected', ({ value, expected }) => {
    expect(isPrime(value)).toBe(expected);
});
*/


// ============================================================================
// SECTION 9: SNAPSHOT TESTING
// ============================================================================

/**
 * Snapshot testing captures output and compares future runs
 * Useful for UI components, but use carefully
 */

function renderUserProfile(user) {
    return `
<div class="profile">
    <h1>${user.name}</h1>
    <p>Email: ${user.email}</p>
    <p>Bio: ${user.bio}</p>
</div>
    `.trim();
}

/*
// TEST FILE: snapshot.test.js
describe('renderUserProfile', () => {
    test('renders user profile correctly', () => {
        const user = {
            name: 'John Doe',
            email: 'john@example.com',
            bio: 'Software developer'
        };
        
        expect(renderUserProfile(user)).toMatchSnapshot();
    });
});

// When run:
// 1. First run: Creates snapshot file
// 2. Subsequent runs: Compares output to snapshot
// 3. If changed: Either update snapshot (jest -u) or fix code
*/


// ============================================================================
// SECTION 10: TEST-DRIVEN DEVELOPMENT (TDD) EXAMPLE
// ============================================================================

/**
 * TDD CYCLE:
 * 1. RED: Write failing test
 * 2. GREEN: Write minimal code to pass
 * 3. REFACTOR: Improve code
 */

// STEP 1: RED - Write failing test
/*
describe('calculateGrade', () => {
    test('returns A for 90-100', () => {
        expect(calculateGrade(95)).toBe('A');
    });
    
    test('returns B for 80-89', () => {
        expect(calculateGrade(85)).toBe('B');
    });
    
    test('returns C for 70-79', () => {
        expect(calculateGrade(75)).toBe('C');
    });
    
    test('returns F for below 70', () => {
        expect(calculateGrade(60)).toBe('F');
    });
});
*/

// STEP 2: GREEN - Write minimal code to pass tests
function calculateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'F';
}

// STEP 3: REFACTOR - Improve code (if needed)
// Could refactor to use a mapping table, but current is clear and works

// Add edge case tests and refactor accordingly:
/*
test('throws error for invalid scores', () => {
    expect(() => calculateGrade(101)).toThrow('Score must be 0-100');
    expect(() => calculateGrade(-1)).toThrow('Score must be 0-100');
});

// REFACTORED:
function calculateGrade(score) {
    if (score < 0 || score > 100) {
        throw new Error('Score must be 0-100');
    }
    const grades = [
        { min: 90, grade: 'A' },
        { min: 80, grade: 'B' },
        { min: 70, grade: 'C' },
        { min: 0, grade: 'F' }
    ];
    return grades.find(g => score >= g.min).grade;
}
*/


// ============================================================================
// SECTION 11: SETUP AND TEARDOWN
// ============================================================================

/**
 * Organize test setup and cleanup
 */

/*
describe('Database operations', () => {
    let database;
    
    // Runs before ALL tests in this describe block
    beforeAll(async () => {
        database = await setupTestDatabase();
    });
    
    // Runs after ALL tests
    afterAll(async () => {
        await database.close();
    });
    
    // Runs before EACH test
    beforeEach(() => {
        database.clear();
    });
    
    // Runs after EACH test
    afterEach(() => {
        // Cleanup if needed
    });
    
    test('test 1', () => {
        // database is ready
    });
    
    test('test 2', () => {
        // database is ready and cleared
    });
});
*/


// ============================================================================
// SECTION 12: COVERAGE REPORTING
// ============================================================================

/**
 * Code coverage measures how much of your code is tested
 * 
 * npm run test:coverage
 * 
 * Metrics:
 * - Line coverage: % of lines executed
 * - Function coverage: % of functions called
 * - Branch coverage: % of if/else paths tested
 * - Statement coverage: % of statements executed
 * 
 * Target: 80%+ coverage
 */

/*
// package.json configuration for coverage thresholds:
"jest": {
  "collectCoverageFrom": [
    "src/**/*.js",
    "!src/**/*.test.js",
    "!src/index.js"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    },
    "src/critical/": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  }
}
*/


// ============================================================================
// SECTION 13: CODE QUALITY TOOLS
// ============================================================================

/**
 * ESLint - Find and fix problems in code
 * Installation: npm install --save-dev eslint
 * 
 * .eslintrc.json:
 * {
 *   "env": {
 *     "node": true,
 *     "es2021": true,
 *     "jest": true
 *   },
 *   "extends": "eslint:recommended",
 *   "rules": {
 *     "no-unused-vars": "warn",
 *     "no-console": "warn",
 *     "indent": ["error", 2],
 *     "quotes": ["error", "single"],
 *     "semi": ["error", "always"]
 *   }
 * }
 * 
 * package.json scripts:
 * "lint": "eslint src/**/*.js"
 * "lint:fix": "eslint src/**/*.js --fix"
 * 
 * --------
 * 
 * Prettier - Automatic code formatting
 * Installation: npm install --save-dev prettier
 * 
 * .prettierrc:
 * {
 *   "semi": true,
 *   "singleQuote": true,
 *   "trailingComma": "es5",
 *   "tabWidth": 2,
 *   "printWidth": 80
 * }
 * 
 * package.json scripts:
 * "format": "prettier --write src/**/*.js"
 * "format:check": "prettier --check src/**/*.js"
 */


// ============================================================================
// SECTION 14: CI/CD WITH GITHUB ACTIONS
// ============================================================================

/**
 * Automated testing on every push/PR
 * 
 * Create .github/workflows/test.yml:
 * 
 * name: Tests
 * 
 * on: [push, pull_request]
 * 
 * jobs:
 *   test:
 *     runs-on: ubuntu-latest
 *     
 *     steps:
 *       - uses: actions/checkout@v3
 *       - uses: actions/setup-node@v3
 *         with:
 *           node-version: '18'
 *       
 *       - name: Install dependencies
 *         run: npm install
 *       
 *       - name: Run tests
 *         run: npm test
 *       
 *       - name: Generate coverage
 *         run: npm run test:coverage
 *       
 *       - name: Upload coverage to Codecov
 *         uses: codecov/codecov-action@v3
 *         with:
 *           file: ./coverage/coverage-final.json
 */


// ============================================================================
// SECTION 15: BEST PRACTICES FOR TESTING
// ============================================================================

/**
 * DO's:
 * ✅ Test behavior, not implementation
 * ✅ Write descriptive test names
 * ✅ One assertion per test (or related assertions)
 * ✅ Test edge cases and error conditions
 * ✅ Use setup and teardown
 * ✅ Keep tests isolated and independent
 * ✅ Test async code properly
 * ✅ Mock external dependencies
 * ✅ Aim for 80%+ coverage
 * ✅ Run tests before commits
 * 
 * DON'Ts:
 * ❌ Test internal implementation details
 * ❌ Have tests that depend on other tests
 * ❌ Sleep or wait in tests (use mocks)
 * ❌ Make real API calls in tests (mock them)
 * ❌ Skip error case testing
 * ❌ Have flaky/unreliable tests
 * ❌ Test third-party libraries
 * ❌ Over-test simple code
 * ❌ Ignore test failures
 * ❌ Leave console.log in tests
 * 
 * NAMING CONVENTIONS:
 * test('should return A when given B', () => {})
 * test('throws error when B is invalid', () => {})
 * test('handles C correctly', () => {})
 * 
 * ORGANIZATION:
 * describe('Feature Name', () => {
 *   describe('Subfeature', () => {
 *     test('specific behavior', () => {});
 *   });
 * });
 */


// ============================================================================
// COMPLETE EXAMPLE: CALCULATOR WITH FULL TEST COVERAGE
// ============================================================================

/*
// calculator.js
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculateGrade
};

// calculator.test.js
const { add, subtract, multiply, divide, calculateGrade } = require('./calculator');

describe('Calculator', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });
        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
        test('adds negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });
    });
    
    describe('divide', () => {
        test('divides correctly', () => {
            expect(divide(10, 2)).toBe(5);
        });
        test('throws on divide by zero', () => {
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });
    
    describe('calculateGrade', () => {
        test.each([
            [95, 'A'],
            [85, 'B'],
            [75, 'C'],
            [65, 'F']
        ])('grade(%i) = %s', (score, expected) => {
            expect(calculateGrade(score)).toBe(expected);
        });
    });
});

// Run tests: npm test
// View coverage: npm run test:coverage
*/


// ============================================================================
// EXPORTS FOR USE IN TEST FILES
// ============================================================================

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    calculateGrade,
    UserValidator,
    processUserData,
    fetchWeatherData,
    fetchUserFromAPI,
    fetchUserAsync,
    isPalindrome,
    renderUserProfile
};