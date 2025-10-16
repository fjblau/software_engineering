# Week 10 Teacher's Guide: Testing & Quality
## Professional Testing Practices in JavaScript & Python

**Duration:** 30 hours (Adjusted schedule due to holiday)  
**Dates:** April 28 - May 2, 2025  
**Note:** May 1 (Staatsfeiertag) is a national holiday - 4 working days only  
**Focus:** Unit Testing, Integration Testing, Test-Driven Development (TDD), CI/CD

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

Week 10 marks a critical shift toward professional development practices. After learning to write code, students now learn to write tests that verify their code works correctly. This week transforms students into developers who write with confidence, knowing their code is thoroughly tested and documented.

### Key Teaching Points
- Testing is not boring overhead—it's a superpower that enables fast refactoring
- Unit tests are the foundation; integration tests verify everything works together
- Test-Driven Development (TDD) is a design tool, not just a verification tool
- Code coverage metrics indicate test thoroughness
- CI/CD automates testing, preventing bugs from reaching production
- Professional teams measure quality with test metrics and coverage reports

### Week 10 Success Metrics
✅ Students write meaningful unit tests in both languages  
✅ Students practice Test-Driven Development (Red-Green-Refactor cycle)  
✅ Students achieve 80%+ code coverage on their projects  
✅ Students set up automated CI/CD pipelines with GitHub Actions  
✅ Students understand the benefits of continuous testing  
✅ Students debug test failures confidently  
✅ Students compare testing approaches between JavaScript and Python  

---

## Learning Objectives

By the end of Week 10, students will be able to:

### Testing Fundamentals
- Explain different types of testing (unit, integration, e2e, acceptance)
- Understand the Arrange-Act-Assert (AAA) test structure
- Write effective test cases that cover critical code paths
- Calculate and interpret code coverage metrics
- Distinguish between what should and shouldn't be tested

### JavaScript Testing with Jest
- Set up Jest and configure package.json for testing
- Write unit tests for functions and classes
- Test async code with `done()`, Promises, and async/await
- Mock functions and external dependencies
- Use Jest snapshots for UI component testing
- Generate and analyze coverage reports
- Use Jest CLI options for debugging tests

### Python Testing with pytest
- Set up pytest and understand naming conventions
- Write unit tests using assertions and pytest markers
- Use fixtures for setup, teardown, and data injection
- Parametrize tests to avoid code duplication
- Mock functions with `unittest.mock`
- Test async code with pytest-asyncio
- Generate coverage reports with pytest-cov

### Test-Driven Development (TDD)
- Follow the Red-Green-Refactor cycle
- Write tests before implementation code
- Refactor with confidence when tests pass
- Apply TDD to design better code
- Understand when TDD is most valuable
- Use TDD to drive feature development

### CI/CD & Code Quality
- Set up GitHub Actions workflows
- Automate testing on push and pull requests
- Configure linting and formatting checks (ESLint, Prettier, Black, pylint)
- Generate and report code coverage
- Understand continuous integration principles
- Deploy with confidence when all tests pass

### Professional Practices
- Write maintainable test code
- Name tests clearly to document expected behavior
- Keep tests focused and independent
- Use test data factories and fixtures
- Avoid flaky tests
- Document testing strategy

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday April 28)

**Required Actions:**
1. ✅ Test all code examples on your machine
2. ✅ Set up Jest configuration with 80% coverage threshold
3. ✅ Set up pytest with sample test files
4. ✅ Create GitHub repository with GitHub Actions workflows
5. ✅ Test GitHub Actions workflows on your repo
6. ✅ Prepare live coding environment (terminal + editor side-by-side)
7. ✅ Create starter templates for student projects
8. ✅ Review Jest and pytest documentation for latest versions
9. ✅ Plan TDD kata exercises for Thursday
10. ✅ Set up code coverage baseline metrics

**Holiday Adjustment:**
- Thursday May 1 is Staatsfeiertag (National Holiday)
- Redistribute 30 hours across 4 working days: ~7.5 hours per day
- Consider moving Thursday TDD workshop content to earlier in week
- Friday becomes sprint review with extended discussions

**Classroom Setup:**
- Ensure all students have GitHub accounts
- Verify network allows GitHub Actions workflow runs
- Test that coverage reports generate properly
- Have backup testing examples if network issues occur
- Prepare example CI/CD failure scenarios

### Student Prerequisites (Send Email Friday April 18)

**MUST HAVE BEFORE MONDAY:**
- [ ] Node.js v18+ installed
- [ ] Python 3.8+ installed with pip
- [ ] VS Code with extensions
- [ ] Git configured and GitHub account ready
- [ ] Basic understanding of functions from Week 8
- [ ] Familiarity with async patterns from Week 9

**MUST INSTALL BY MONDAY:**

```bash
# JavaScript testing dependencies
npm install --save-dev jest @babel/preset-env babel-jest

# Python testing dependencies
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
# OR
venv\Scripts\activate  # Windows

pip install pytest pytest-cov pytest-mock pytest-asyncio

# Code quality tools
pip install black pylint flake8
npm install --save-dev eslint prettier
```

**Run Verification:**

```bash
# Jest version check
npx jest --version

# pytest version check
pytest --version

# Linting tools
eslint --version
black --version
pylint --version
```

### Software & Tool Requirements

| Tool | Version | Purpose | Installation |
|------|---------|---------|--------------|
| Node.js | 18+ LTS | JavaScript runtime | https://nodejs.org |
| npm | 9+ | JavaScript package manager | Bundled with Node |
| Jest | 29+ | JavaScript test framework | `npm install -D jest` |
| Python | 3.8+ | Python runtime | https://python.org |
| pip | Latest | Python package manager | Bundled with Python |
| pytest | 7.0+ | Python test framework | `pip install pytest` |
| pytest-cov | 4.0+ | Coverage for pytest | `pip install pytest-cov` |
| VS Code | Latest | IDE | https://code.visualstudio.com |
| ESLint | 8+ | JavaScript linter | `npm install -D eslint` |
| Prettier | 3+ | JavaScript formatter | `npm install -D prettier` |
| Black | 23+ | Python formatter | `pip install black` |
| pylint | 2.16+ | Python linter | `pip install pylint` |
| GitHub CLI | Latest | GitHub operations | https://cli.github.com |
| Git | 2.30+ | Version control | https://git-scm.com |

### VS Code Extensions (Required by Monday)

**Testing & Quality:**
- Test Explorer UI (hbenl.test-explorer)
- Jest (orta.vscode-jest)
- Python pytest (ms-python.python)
- Error Lens (usernamehw.errorlens)

**Linting & Formatting:**
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- Pylance (ms-python.vscode-pylance)
- Black Formatter (ms-python.black-formatter)

**Git & CI/CD:**
- GitLens (eamodio.gitlens)
- GitHub Pull Requests (github.vscode-pull-request-github)

### Configuration Files to Prepare

**JavaScript (package.json):**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  },
  "devDependencies": {
    "jest": "^29.5.0",
    "@babel/preset-env": "^7.22.0",
    "babel-jest": "^29.5.0",
    "eslint": "^8.40.0",
    "prettier": "^3.0.0"
  },
  "jest": {
    "testEnvironment": "node",
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
```

**Python (pytest.ini):**
```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = -v --tb=short --strict-markers
markers =
    unit: Unit tests
    integration: Integration tests
    slow: Slow running tests
```

**GitHub Actions (.github/workflows/test.yml):**
See github_actions_ci_cd_example.yml in Week_10 folder for complete workflows

---

## Daily Schedule & Topics

### MONDAY: Testing Fundamentals & Arrange-Act-Assert – 7.5 hours

**Learning Goals:**
- Understand types of testing
- Learn Arrange-Act-Assert pattern
- Write first unit tests
- Understand code coverage concepts

**9:00 - 9:30 | Welcome Back & Week Overview (30 min)**
- Why testing matters in professional development
- Real-world testing failures and successes
- Week 10 structure and deliverables
- Q&A about transition from writing code to writing tests

**9:30 - 10:30 | Testing Fundamentals (60 min)**

**Types of Testing (Interactive Discussion):**
1. **Unit Tests** (60-70% of tests)
   - Test individual functions in isolation
   - Fast to run (milliseconds)
   - Example: Test `add(2, 3)` returns `5`

2. **Integration Tests** (20-30% of tests)
   - Test components working together
   - Moderate speed (milliseconds to seconds)
   - Example: Test database connection with query function

3. **End-to-End Tests** (5-10% of tests)
   - Test complete user workflows
   - Slower (seconds to minutes)
   - Example: Test user signup through email verification

4. **Other Tests**
   - Smoke tests: Quick sanity checks
   - Acceptance tests: Business requirements
   - Performance tests: Speed benchmarks
   - Security tests: Vulnerability scanning

**Live Demo - Why Testing Matters:**
```javascript
// Without tests - fixing this is scary
function calculateTax(amount, rate) {
    return amount * rate;  // Is this right?
}

// With tests - we know it works
describe('calculateTax', () => {
    test('calculates tax correctly', () => {
        expect(calculateTax(100, 0.1)).toBe(10);
    });
});
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Test Structure: Arrange-Act-Assert (60 min)**

**The AAA Pattern:**

```javascript
describe('Calculator', () => {
    test('adds two numbers', () => {
        // ARRANGE: Set up the test data
        const a = 2;
        const b = 3;
        
        // ACT: Call the function
        const result = add(a, b);
        
        // ASSERT: Verify the result
        expect(result).toBe(5);
    });
});
```

**Benefits of AAA:**
- Clear test structure
- Easy to understand what's being tested
- Easier to maintain tests
- Consistent across team

**Live Coding - Simple Unit Tests:**
```javascript
// calculator.js
function add(a, b) {
    return a + b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

// calculator.test.js
describe('add', () => {
    test('adds positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
    
    test('adds negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });
});

describe('divide', () => {
    test('divides two numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });
    
    test('throws error on divide by zero', () => {
        expect(() => divide(5, 0))
            .toThrow('Cannot divide by zero');
    });
});
```

**Student Activity (20 min):**
- Write 3-4 simple unit tests
- Practice the AAA pattern
- Run tests and see them pass
- Intentionally break a test to see failure

**11:45 - 12:00 | Code Coverage (15 min)**
- What is code coverage? (How much code do tests exercise)
- Coverage types: Line, Branch, Function, Statement
- Why 80% is the target (not 100%)
- How to read coverage reports

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | What to Test vs What Not to Test (60 min)**

**SHOULD TEST:**
- ✅ Business logic functions
- ✅ Error handling
- ✅ Edge cases (zero, negative, large numbers)
- ✅ Boundary conditions
- ✅ Different input types

**SHOULD NOT TEST:**
- ❌ Third-party library functions
- ❌ Framework code (React, Express, Django)
- ❌ Trivial getters/setters
- ❌ External APIs (mock them instead)

**Live Coding - Smart Testing:**
```javascript
// ❌ DON'T TEST: Third-party functions
test('Array.map works', () => {
    expect([1, 2, 3].map(x => x * 2))
        .toEqual([2, 4, 6]);
});

// ✅ DO TEST: Your business logic
function doubleArray(arr) {
    return arr.map(x => x * 2);
}

test('doubleArray doubles each element', () => {
    expect(doubleArray([1, 2, 3]))
        .toEqual([2, 4, 6]);
});
```

**Student Activity (25 min):**
- Write tests for provided functions
- Identify what to test and why
- Discuss with partner why certain tests matter
- Get feedback on test coverage

**2:00 - 2:30 | Setting Up Jest and pytest (30 min)**

**Jest Setup Demo:**
```bash
npm install --save-dev jest
npx jest --init
npm test
```

**pytest Setup Demo:**
```bash
pip install pytest pytest-cov
pytest --version
pytest  # Runs all tests
```

**2:30 - 3:30 | Daily Exercise & Homework Setup (60 min)**
- Provide calculator function to test
- Students write 10 test cases in Jest
- Students write 10 test cases in pytest
- Submit repository link

---

### TUESDAY: JavaScript Testing with Jest – 7.5 hours

**Learning Goals:**
- Master Jest syntax and assertions
- Test async code
- Mock functions and modules
- Generate and analyze coverage reports

**9:00 - 9:30 | Daily Standup (30 min)**
- Share Monday challenges
- Demo excellent test examples
- Questions about AAA pattern

**9:30 - 10:30 | Jest Deep Dive (60 min)**

**Common Jest Assertions:**

```javascript
// Equality
expect(value).toBe(5);              // === comparison
expect(value).toEqual({a: 1});      // Deep equality
expect(value).not.toBe(5);          // Negation

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();

// Numbers
expect(value).toBeGreaterThan(4);
expect(value).toBeCloseTo(0.3);

// Strings & Arrays
expect(text).toContain('substring');
expect(text).toMatch(/regex/);
expect(arr).toHaveLength(3);
expect(arr).toContain(item);

// Exceptions
expect(() => code()).toThrow();
expect(() => code()).toThrow('message');
```

**Live Coding - Comprehensive Tests:**
```javascript
class UserValidator {
    validateEmail(email) {
        if (!email.includes('@')) {
            throw new Error('Invalid email');
        }
        return true;
    }
    
    validatePassword(password) {
        if (password.length < 8) {
            throw new Error('Password too short');
        }
        return true;
    }
}

describe('UserValidator', () => {
    let validator;
    
    beforeEach(() => {
        validator = new UserValidator();
    });
    
    describe('validateEmail', () => {
        test('accepts valid email', () => {
            expect(validator.validateEmail('test@example.com'))
                .toBe(true);
        });
        
        test('rejects email without @', () => {
            expect(() => 
                validator.validateEmail('testexample.com')
            ).toThrow('Invalid email');
        });
    });
    
    describe('validatePassword', () => {
        test('accepts long password', () => {
            expect(validator.validatePassword('SecurePass123'))
                .toBe(true);
        });
        
        test('rejects short password', () => {
            expect(() => 
                validator.validatePassword('short')
            ).toThrow('Password too short');
        });
    });
});
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Testing Async Code (60 min)**

**Three Ways to Test Async Code:**

```javascript
// 1. Using done callback
test('fetches data', (done) => {
    setTimeout(() => {
        expect(true).toBe(true);
        done();  // Signal test is complete
    }, 100);
});

// 2. Returning Promise (PREFERRED)
test('fetches data', () => {
    return fetchData().then(data => {
        expect(data).toBeDefined();
    });
});

// 3. Using async/await (CLEANEST)
test('fetches data', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
});
```

**Live Coding - Testing Real Async:**
```javascript
async function fetchUser(id) {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error('Failed');
    return response.json();
}

describe('fetchUser', () => {
    test('returns user data', async () => {
        const user = await fetchUser(1);
        expect(user.id).toBe(1);
        expect(user.name).toBeDefined();
    });
    
    test('throws on error', async () => {
        await expect(fetchUser(999))
            .rejects.toThrow('Failed');
    });
});
```

**Student Activity (20 min):**
- Write async test with done callback
- Rewrite with Promise.then()
- Rewrite with async/await
- Compare readability

**11:45 - 12:00 | Mocking Overview (15 min)**
- Why mock external dependencies
- Isolation in unit tests
- Making tests fast and reliable

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Mocking Functions and Modules (60 min)**

**Mocking Basics:**

```javascript
// Mock a function
const mockFetch = jest.fn();

// Set return value
mockFetch.mockReturnValue({id: 1, name: 'John'});

// Use it
const result = mockFetch(123);

// Verify it was called
expect(mockFetch).toHaveBeenCalled();
expect(mockFetch).toHaveBeenCalledWith(123);
expect(mockFetch).toHaveBeenCalledTimes(1);
```

**Live Coding - Mocking Real Scenario:**
```javascript
function processUser(userId, fetchUserFn) {
    const user = fetchUserFn(userId);
    if (!user) throw new Error('User not found');
    return {
        name: user.name.toUpperCase(),
        email: user.email.toLowerCase()
    };
}

describe('processUser', () => {
    test('processes user data correctly', () => {
        const mockFetch = jest.fn();
        mockFetch.mockReturnValue({
            name: 'John Doe',
            email: 'JOHN@EXAMPLE.COM'
        });
        
        const result = processUser(1, mockFetch);
        
        expect(result.name).toBe('JOHN DOE');
        expect(result.email).toBe('john@example.com');
        expect(mockFetch).toHaveBeenCalledWith(1);
    });
    
    test('throws when user not found', () => {
        const mockFetch = jest.fn();
        mockFetch.mockReturnValue(null);
        
        expect(() => processUser(999, mockFetch))
            .toThrow('User not found');
    });
});
```

**Mocking External APIs:**
```javascript
// Mock global fetch
global.fetch = jest.fn();

describe('Weather API', () => {
    beforeEach(() => {
        fetch.mockClear();
    });
    
    test('fetches weather data', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({temp: 72, city: 'NYC'})
        });
        
        const weather = await getWeather('NYC');
        expect(weather.temp).toBe(72);
        expect(fetch).toHaveBeenCalled();
    });
});
```

**2:00 - 2:30 | Coverage Reports (30 min)**

**Generate Coverage:**
```bash
npm test -- --coverage
```

**Coverage Report Shows:**
- Line coverage: % of lines executed
- Branch coverage: % of if/else branches tested
- Function coverage: % of functions tested
- Statement coverage: % of statements executed

**Interpreting Reports:**
- Green (80%+): Good coverage
- Yellow (50-80%): Needs improvement
- Red (<50%): Major gaps

**2:30 - 3:30 | Daily Project & Homework (60 min)**
- Build a calculator with Jest tests
- Achieve 80%+ coverage
- Use multiple assertion types
- Test error cases
- Mock where appropriate

---

### WEDNESDAY: Python Testing with pytest – 7.5 hours

**Learning Goals:**
- Master pytest syntax and fixtures
- Write parametrized tests
- Mock with unittest.mock
- Generate coverage reports
- Compare with JavaScript testing

**9:00 - 9:30 | Daily Standup (30 min)**
- Share Jest successes and challenges
- Demo helpful tests
- Q&A about mocking

**9:30 - 10:30 | pytest Fundamentals (60 min)**

**Test File Naming & Conventions:**
```bash
# pytest looks for:
test_*.py           # Files starting with test_
*_test.py           # Files ending with _test
tests/              # Tests in a folder

# Test functions:
def test_add():     # Functions starting with test_

# Test classes:
class TestCalculator:  # Classes starting with Test
    def test_add(self):
```

**Running pytest:**
```bash
pytest                          # Run all tests
pytest -v                       # Verbose output
pytest test_calculator.py       # Run specific file
pytest -k "test_add"            # Run matching tests
pytest --tb=short               # Short error messages
pytest -s                       # Show print statements
```

**Live Coding - Basic pytest:**
```python
import pytest
from calculator import add, divide

def test_add_positive_numbers():
    # ARRANGE
    a, b = 2, 3
    
    # ACT
    result = add(a, b)
    
    # ASSERT
    assert result == 5

def test_add_negative_numbers():
    assert add(-2, -3) == -5

def test_divide_by_zero():
    with pytest.raises(ValueError, match='Cannot divide'):
        divide(5, 0)
```

**Common pytest Assertions:**
```python
# Equality
assert x == 5
assert x != 5

# Type checking
assert isinstance(x, int)
assert isinstance(x, (int, float))

# Containers
assert 'substring' in 'hello'
assert item in [1, 2, 3]
assert len(items) == 3

# Comparisons
assert x > 5
assert x >= 5
assert 3.14 == pytest.approx(3.14159, rel=1e-3)

# Exceptions
with pytest.raises(ValueError):
    divide(5, 0)

with pytest.raises(ValueError, match='specific message'):
    divide(5, 0)
```

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Fixtures and Setup/Teardown (60 min)**

**What are Fixtures?**
- Reusable test data
- Setup and cleanup code
- Dependency injection for tests

**Simple Fixtures:**
```python
import pytest

@pytest.fixture
def sample_user():
    return {
        'id': 1,
        'name': 'John Doe',
        'email': 'john@example.com'
    }

def test_user_name(sample_user):
    assert sample_user['name'] == 'John Doe'

def test_user_email(sample_user):
    assert sample_user['email'] == 'john@example.com'
```

**Fixtures with Setup/Teardown:**
```python
@pytest.fixture
def temporary_file():
    # SETUP: Create file
    import tempfile
    f = tempfile.NamedTemporaryFile(mode='w', delete=False)
    filename = f.name
    f.write('test data')
    f.close()
    
    # Yield the fixture value
    yield filename
    
    # TEARDOWN: Clean up
    import os
    os.remove(filename)

def test_read_file(temporary_file):
    with open(temporary_file) as f:
        assert f.read() == 'test data'
```

**Fixture Scopes:**
```python
# function (default) - New fixture per test
@pytest.fixture
def fresh_data():
    return []

# class - One per test class
@pytest.fixture(scope='class')
def database():
    return Database()

# module - One per file
@pytest.fixture(scope='module')
def api_client():
    return APIClient()

# session - One per entire test session
@pytest.fixture(scope='session')
def expensive_resource():
    return ExpensiveSetup()
```

**Student Activity (20 min):**
- Create sample_user fixture
- Create another test that uses it
- Create fixture with setup/teardown
- Use scope='class' fixture

**11:45 - 12:00 | Parametrized Tests (15 min)**
- Run same test with multiple inputs
- Reduce code duplication significantly

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Parametrized Tests Deep Dive (60 min)**

**Parametrize Single Parameter:**
```python
@pytest.mark.parametrize("input,expected", [
    (2, True),      # 2 is prime
    (3, True),      # 3 is prime
    (4, False),     # 4 is not prime
    (5, True),      # 5 is prime
    (10, False),    # 10 is not prime
])
def test_is_prime(input, expected):
    assert is_prime(input) == expected
```

**Parametrize Multiple Parameters:**
```python
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-2, -3, -5),
    (0, 5, 5),
    (1.5, 2.5, 4.0),
])
def test_add(a, b, expected):
    assert add(a, b) == expected
```

**Parametrize with IDs:**
```python
@pytest.mark.parametrize("grade,score", [
    pytest.param(90, 'A', id='excellent'),
    pytest.param(80, 'B', id='good'),
    pytest.param(70, 'C', id='passing'),
    pytest.param(60, 'F', id='failing'),
])
def test_calculate_grade(score, grade):
    assert calculate_grade(score) == grade
```

**Live Coding - Parametrized Tests:**
```python
@pytest.mark.parametrize("text,expected", [
    ('racecar', True),
    ('hello', False),
    ('level', True),
    ('A man a plan a canal Panama', True),  # Ignores spaces
    ('12321', True),
])
def test_is_palindrome(text, expected):
    assert is_palindrome(text) == expected
```

**2:00 - 2:30 | Mocking with unittest.mock (30 min)**

**Mock Basics:**
```python
from unittest.mock import Mock, patch

# Create a mock
mock_fetch = Mock()

# Set return value
mock_fetch.return_value = {'id': 1, 'name': 'John'}

# Use it
result = mock_fetch(123)

# Verify calls
assert mock_fetch.called
assert mock_fetch.call_count == 1
mock_fetch.assert_called_once_with(123)
```

**Patching External Functions:**
```python
from unittest.mock import patch

@patch('requests.get')
def test_fetch_weather(mock_get):
    mock_get.return_value.json.return_value = {
        'temp': 72,
        'city': 'NYC'
    }
    
    weather = get_weather('NYC')
    
    assert weather['temp'] == 72
    mock_get.assert_called_once_with('https://...')
```

**2:30 - 3:30 | Daily Project (60 min)**
- Build same calculator in Python
- Write 15+ test cases with pytest
- Use fixtures for test data
- Parametrize at least 5 test cases
- Achieve 80%+ coverage

---

### THURSDAY: Moved Content (Holiday May 1) – Extended Activities

**Note:** Staatsfeiertag (National Holiday) - Thursday May 1

**Schedule Adjustment Option 1: Distribute to M-W**
- Add TDD content to Tuesday PM
- Add CI/CD content to Wednesday PM

**Schedule Adjustment Option 2: Intensive Friday**
- Full day Friday dedicated to TDD and CI/CD
- 8 hours instead of 4 hours

**TDD Content to Cover (Flexible Scheduling):**

### TDD Deep Dive: Red-Green-Refactor

**The TDD Cycle:**
1. **RED:** Write a failing test
2. **GREEN:** Write minimum code to pass
3. **REFACTOR:** Improve code quality

**Live Demo - TDD in Action:**

```javascript
// STEP 1 (RED): Write failing test first
describe('isPalindrome', () => {
    test('returns true for palindromes', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });
    // This fails because isPalindrome doesn't exist yet
});

// STEP 2 (GREEN): Write minimum code to pass
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
// Test passes now, but code is minimal

// STEP 3 (REFACTOR): Improve code
test('ignores case and spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
});

// RED again - need to improve implementation
function isPalindrome(str) {
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}
// GREEN again - test passes
```

**GitHub Actions & CI/CD:**

**Setting Up GitHub Actions:**
```yaml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.x
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage
      
      - name: Run lint
        run: npm run lint
```

---

### FRIDAY: CI/CD, Sprint Review & Retrospective – 7.5 hours

**Learning Goals:**
- Complete GitHub Actions setup
- Deploy with confidence
- Review projects and testing strategies
- Plan testing improvements

**9:00 - 10:00 | CI/CD Deep Dive (60 min)**

**What is CI/CD?**
- **CI (Continuous Integration):** Tests run automatically on every push
- **CD (Continuous Deployment):** Code automatically deployed when tests pass

**GitHub Actions Workflows:**
```bash
# Automatic on every push:
1. Code pushed to GitHub
2. GitHub Actions runs tests
3. Code quality checks run
4. Coverage report generated
5. Status shown on PR/branch

# Red build (failed):
- Email notification
- PR shows ❌
- Cannot merge to main

# Green build (passed):
- PR shows ✅
- Safe to merge
- Can auto-deploy to production
```

**Live Coding - Set Up GitHub Actions:**
1. Create `.github/workflows/test.yml`
2. Configure for JavaScript tests
3. Configure for Python tests
4. Push to GitHub
5. Watch Actions run
6. Fix any failures

**10:00 - 10:15 | BREAK (15 min)**

**10:15 - 12:00 | Code Quality Tools (105 min)**

**JavaScript Tools:**

**ESLint (Linting):**
```bash
npm install --save-dev eslint
npx eslint --init
npm run lint
```

**Common ESLint Rules:**
- `no-console`: Remove console.log in production
- `no-unused-vars`: Remove unused variables
- `eqeqeq`: Use === not ==
- `semi`: Enforce semicolons

**Prettier (Formatting):**
```bash
npm install --save-dev prettier
npx prettier --write .
```

**Python Tools:**

**Black (Formatter):**
```bash
pip install black
black src/
```

**pylint (Linter):**
```bash
pip install pylint
pylint src/
```

**flake8 (Style Guide):**
```bash
pip install flake8
flake8 src/
```

**Live Demo - Running Quality Checks:**
```bash
# JavaScript
npm run lint      # Check code
npm run lint:fix  # Auto-fix issues
npm run format    # Format code

# Python
black src/        # Format code
pylint src/       # Check code
flake8 src/       # Style check
```

**Student Activity (30 min):**
- Run eslint on your code
- Use prettier to auto-format
- Fix any linting issues
- Same with Python tools

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:30 | Student Project Sprint Review (90 min)**

**Project Presentations:**
- Each student/pair: 5 minutes
- Show working tests
- Demonstrate code coverage
- Explain testing strategy

**Presentation Structure:**
1. Project overview (1 min)
2. Demo running tests (1 min)
3. Show coverage report (1 min)
4. Explain TDD process (1 min)
5. Questions (1 min)

**2:30 - 3:30 | Technical Discussion & Retrospective (60 min)**

**JavaScript vs Python Testing:**
- Compare Jest vs pytest syntax
- Discuss fixture approaches
- Compare assertion styles
- Preference analysis

**Retrospective Questions:**
1. What testing practice surprised you most?
2. What was hardest about TDD?
3. How did mocking help your tests?
4. Would you use TDD on future projects?
5. How confident are you in your test suite?

**Action Items:**
- What will you test better next time?
- How will testing improve your development?
- When do you reach for unit vs integration tests?

---

## Assignments & Deliverables

### Daily Exercises (50 points total - 10 points each day)

**Monday: Testing Fundamentals**
- Write calculator tests following AAA pattern
- Minimum 8 test cases
- Cover positive, negative, zero cases
- Test error conditions
- Measure coverage

**Tuesday: Jest Mastery**
- Build user validator with Jest
- Test email, password validation
- Mock external API calls
- Test async functions
- Achieve 80%+ coverage

**Wednesday: pytest Equivalence**
- Convert Tuesday's tests to Python
- Use fixtures for test data
- Parametrize validation tests
- Mock equivalent API calls
- Generate coverage report

**Thursday-Friday: Flexible (Holiday Adjusted)**
- Work on main project
- Improve existing tests
- Add CI/CD pipeline

### Main Assignment: Dual-Language TDD Project (100 points)

**Project Overview:**
Build the same application in both JavaScript and Python using Test-Driven Development. Tests must be written first, then implementation code.

**Project Options:**

1. **Scientific Calculator**
   - Basic arithmetic (+, -, *, /)
   - Trigonometry (sin, cos, tan)
   - Statistics (mean, median, std dev)
   - Error handling for edge cases

2. **Unit Converter**
   - Temperature (Celsius ↔ Fahrenheit)
   - Distance (miles ↔ kilometers)
   - Weight (pounds ↔ kilograms)
   - Currency (optional: with mock API)

3. **Data Validator**
   - Email validation
   - Phone number validation
   - Credit card validation
   - Password strength checker

4. **Text Analyzer**
   - Word count
   - Character count
   - Reading time estimation
   - Sentiment analysis (simple)

**Requirements:**

**1. Test-Driven Development Process (20 points)**
- [ ] Written tests before implementation
- [ ] Clear Red-Green-Refactor cycle
- [ ] Minimum 20 test cases per language
- [ ] All tests passing
- [ ] Git history shows TDD process

**2. JavaScript Version with Jest (25 points)**
- [ ] Jest properly configured
- [ ] Minimum 20 meaningful test cases
- [ ] Tests cover normal cases
- [ ] Tests cover error cases
- [ ] Tests cover edge cases
- [ ] 80%+ code coverage achieved
- [ ] Coverage report included

**3. Python Version with pytest (25 points)**
- [ ] pytest properly configured
- [ ] Minimum 20 meaningful test cases
- [ ] Uses fixtures for test data
- [ ] Parametrized tests where appropriate
- [ ] 80%+ code coverage achieved
- [ ] Coverage report included

**4. CI/CD Pipeline (15 points)**
- [ ] GitHub Actions workflow created
- [ ] Tests run on every push
- [ ] Tests run on pull requests
- [ ] Coverage reports generated
- [ ] Status badge in README
- [ ] All checks passing

**5. Documentation & Analysis (15 points)**
- [ ] README explains project
- [ ] Testing strategy documented
- [ ] Jest vs pytest comparison
- [ ] TDD experience reflection
- [ ] Lessons learned documented

**Submission Checklist:**
- [ ] GitHub repository with both versions
- [ ] All tests passing
- [ ] Coverage reports visible
- [ ] CI/CD pipeline active
- [ ] README with instructions
- [ ] Clear git history showing TDD process

### Grading Rubric

**Testing Fundamentals (Monday) - 10 points**
| Criteria | Points | Notes |
|----------|--------|-------|
| Test structure (AAA) | 3 | Clear arrange, act, assert |
| Coverage | 3 | Minimum 8 test cases |
| Error handling | 2 | Tests for exceptions |
| Execution | 2 | Tests run successfully |

**Jest Mastery (Tuesday) - 10 points**
| Criteria | Points | Notes |
|----------|--------|-------|
| Assertions | 3 | Variety of matchers used |
| Async testing | 2 | Async/await or Promise.then |
| Mocking | 3 | Proper mock usage |
| Coverage | 2 | 80%+ code coverage |

**pytest Equivalence (Wednesday) - 10 points**
| Criteria | Points | Notes |
|----------|--------|-------|
| Fixtures | 3 | Proper fixture usage |
| Parametrization | 2 | Tests parametrized appropriately |
| Mocking | 3 | unittest.mock used correctly |
| Coverage | 2 | 80%+ code coverage |

**Main Project - 100 points**
| Component | Points | Criteria |
|-----------|--------|----------|
| TDD Process | 20 | Tests first, clear Red-Green-Refactor |
| JavaScript Tests | 25 | 20+ tests, 80%+ coverage, Jest configured |
| Python Tests | 25 | 20+ tests, 80%+ coverage, pytest configured |
| CI/CD Pipeline | 15 | GitHub Actions working, status badge, all checks pass |
| Documentation | 15 | README, strategy doc, jest vs pytest comparison |

**Total Possible Points: 160 points**

---

## Resource Materials

### Official Documentation

**JavaScript Testing:**
- [Jest Documentation](https://jestjs.io/) - Official Jest docs
- [Jest CLI Options](https://jestjs.io/docs/cli) - Command-line reference
- [Jest Matchers](https://jestjs.io/docs/expect) - All assertion types
- [Jest Mocking](https://jestjs.io/docs/mock-functions) - Mocking guide
- [Jest API](https://jestjs.io/docs/api) - Complete API reference

**Python Testing:**
- [pytest Documentation](https://docs.pytest.org/) - Official pytest docs
- [pytest Fixtures](https://docs.pytest.org/en/stable/fixture.html) - Fixtures guide
- [unittest.mock](https://docs.python.org/3/library/unittest.mock.html) - Python mocking
- [pytest Parametrize](https://docs.pytest.org/en/stable/how-to-parametrize-fixtures-and-tests.html) - Parametrization

**TDD & Quality:**
- [Test-Driven Development by Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530) - Book by Kent Beck
- [Coding Dojo Katas](http://codingdojo.org/kata/) - TDD practice exercises
- [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) - By Robert C. Martin

**CI/CD:**
- [GitHub Actions Docs](https://docs.github.com/en/actions) - Official documentation
- [GitHub Actions Quickstart](https://docs.github.com/en/actions/quickstart) - Getting started

### Learning Resources

**Testing Best Practices:**
- [Testing JavaScript by Kent C. Dodds](https://testingjavascript.com/) - Video course
- [Real Python - pytest](https://realpython.com/pytest-python-testing/) - pytest guide
- [Testing Library](https://testing-library.com/) - Best practices for UI testing
- [Mutation Testing](https://stryker-mutator.io/) - Advanced testing metrics

**Code Quality:**
- [ESLint Rules](https://eslint.org/docs/rules/) - ESLint configuration
- [Prettier Playground](https://prettier.io/playground/) - Try Prettier online
- [Black Formatting](https://black.readthedocs.io/) - Python formatting
- [pylint Messages](https://pylint.pycqa.org/en/latest/messages/) - pylint error codes

### Code Examples in Repository

Reference existing examples:
- `Week_10/week10_javascript_examples.js` - Jest examples and patterns
- `Week_10/week10_python_examples.py` - pytest examples and patterns
- `Week_10/github_actions_ci_cd_example.yml` - GitHub Actions workflows

---

## Assessment Rubric

### Daily Exercise Grading (10 points each)

**Monday - Testing Fundamentals**
```
Excellent (9-10): Perfect AAA pattern, comprehensive coverage, all tests pass
Good (7-8):       Good structure, adequate cases, minor issues
Acceptable (5-6): Basic structure, some missing cases
Needs Work (0-4): Poor structure, incomplete, multiple failures
```

**Tuesday - Jest Mastery**
```
Excellent (9-10): Variety of assertions, async handled well, good mocking
Good (7-8):       Most assertions correct, some async issues, basic mocking
Acceptable (5-6): Some assertions work, mocking attempted
Needs Work (0-4): Poor assertion usage, no mocking
```

**Wednesday - pytest Equivalence**
```
Excellent (9-10): Proper fixtures, good parametrization, equivalent to JavaScript
Good (7-8):       Good fixtures, some parametrization, mostly equivalent
Acceptable (5-6): Basic fixtures, minimal parametrization
Needs Work (0-4): Poor structure, incorrect fixture usage
```

### Project Grading Rubric

**TDD Process (20 points)**
```
20: Clear Red-Green-Refactor cycle visible in git history
15: Most tests written first, mostly TDD approach
10: Some TDD discipline, but tests written after some code
5:  Minimal TDD, mostly traditional development
0:  No evidence of TDD process
```

**JavaScript Version (25 points)**
```
25: 25+ tests, 90%+ coverage, all passing, excellent setup
20: 20+ tests, 85%+ coverage, mostly passing
15: 15+ tests, 80%+ coverage, some failures
10: 10+ tests, 70%+ coverage, multiple failures
5:  <10 tests, <70% coverage
0:  No tests or non-functioning
```

**Python Version (25 points)**
```
25: 25+ tests, 90%+ coverage, all passing, excellent setup
20: 20+ tests, 85%+ coverage, mostly passing
15: 15+ tests, 80%+ coverage, some failures
10: 10+ tests, 70%+ coverage, multiple failures
5:  <10 tests, <70% coverage
0:  No tests or non-functioning
```

**CI/CD Pipeline (15 points)**
```
15: GitHub Actions working, status badge, coverage reports, all passing
12: GitHub Actions working, status badge, mostly passing
9:  GitHub Actions working, some configuration issues
6:  GitHub Actions attempted, partial setup
3:  GitHub Actions attempted, major issues
0:  No CI/CD setup
```

**Documentation (15 points)**
```
15: Comprehensive README, clear testing strategy, good jest vs pytest comparison
12: Good README, adequate strategy documentation
9:  Basic README, some documentation
6:  Minimal documentation
3:  Poor documentation
0:  No documentation
```

---

## Troubleshooting Guide

### Common Issues & Solutions

**1. Tests Not Running / Jest Not Found**
```bash
# Problem: Jest not installed
npm install --save-dev jest

# Problem: Jest can't find test files
# Check file naming: test_*.js or *.test.js

# Problem: Wrong test environment
# Add to package.json:
"jest": {
  "testEnvironment": "node"  // for Node.js apps
}
```

**2. Async Tests Hanging/Timing Out**
```bash
# Problem: Forgetting 'done()' callback
test('async test', (done) => {
    setTimeout(() => {
        expect(true).toBe(true);
        done();  // Must call done()
    }, 100);
});

# Better: Use async/await
test('async test', async () => {
    const result = await asyncFunction();
    expect(result).toBeDefined();
});
```

**3. Mock Not Working / Not Called**
```bash
# Problem: Forgetting to pass mock to function
const mockFn = jest.fn();
mockFn.mockReturnValue(5);

// Wrong: mockFn not passed
processData();

// Right: Pass mock to function
processData(mockFn);

# Problem: Forgot to assert
expect(mockFn).toHaveBeenCalled();  // Don't forget this!
```

**4. Coverage Not Meeting 80% Threshold**
```bash
# Generate coverage report
npm test -- --coverage

# Review coverage report
# Find untested lines (red in coverage/lcov-report/index.html)

# Add tests for important logic
# Don't test trivial code (getters, trivial setters)
```

**5. pytest: ModuleNotFoundError / Import Issues**
```bash
# Problem: Cannot import module
# Solution 1: Run pytest from project root
cd /path/to/project
pytest

# Solution 2: Add __init__.py to package
# Create empty file: src/__init__.py

# Solution 3: Add to sys.path in conftest.py
import sys
sys.path.insert(0, '/path/to/src')
```

**6. Fixtures Not Being Injected**
```bash
# Problem: Fixture not available in test
@pytest.fixture
def sample_data():
    return [1, 2, 3]

def test_something():  # Forgot parameter!
    pass

# Solution: Add fixture as parameter
def test_something(sample_data):  # Add fixture name as parameter
    assert len(sample_data) == 3
```

**7. Parametrized Tests Not Running**
```bash
# Problem: Parametrize decorator not working
# Check for typos:
@pytest.mark.parametrize("a,b", [  # Correct
    (1, 2),
])

# Not:
@pytest.mark.parametrize("x,y", [  # Wrong parameter names
    (1, 2),
])

def test_add(a, b):  # Must match decorator parameter names
    pass
```

**8. GitHub Actions Not Running**
```bash
# Problem: Workflow file not found
# Solution: Create .github/workflows/test.yml

# Problem: Workflow not triggered
# Check file contents for typos
# Common issues: wrong branch name, wrong on: trigger

# Check workflow status:
# Go to GitHub > Actions tab
# See error logs there
```

**9. Coverage Reports Not Generated**
```bash
# Problem: No coverage report
npm test -- --coverage

# Check jest config in package.json:
"jest": {
  "collectCoverageFrom": ["src/**/*.js"]  // Add this
}

# Python: Generate coverage report
pytest --cov=src --cov-report=html
# Open htmlcov/index.html
```

**10. Mocking External APIs**
```javascript
// Problem: Actual API calls during tests
// Solution: Mock the fetch function
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test('fetches user', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({id: 1, name: 'John'})
  });
  
  const user = await getUser(1);
  expect(user.name).toBe('John');
});
```

### Performance Tips

**Slow Tests?**
- Use `jest --watch` for faster feedback
- Use `.only` to run single test: `test.only('...')`
- Mock expensive operations
- Don't sleep in tests (use jest.useFakeTimers())

**Too Many Failing Tests?**
- Use `jest --bail` to stop on first failure
- Use `jest --detectOpenHandles` to find async issues
- Check for test interdependencies

### Debugging

**Enable Debug Output:**
```bash
# Jest debugging
node --inspect-brk node_modules/.bin/jest --runInBand

# pytest debugging
pytest -s -vv  # Show print statements and verbose output
pytest --tb=long  # Long traceback on failures
pytest -x  # Stop on first failure
```

**Add Debug Statements:**
```javascript
// Jest
test('debug test', () => {
    console.log('Debug:', {value});  // Shows with -s flag
    debugger;  // Breakpoint when running with --inspect
    expect(value).toBe(5);
});
```

```python
# pytest
def test_debug():
    print(f"Debug: {value}")  # Shows with -s flag
    assert value == 5
```

---

## Post-Week Resources

**Continue Learning:**
- Advanced Jest: Snapshot testing, custom matchers
- Advanced pytest: Plugins, conftest.py patterns
- TDD: Practice with code katas
- CI/CD: GitHub Actions for deployment
- Code quality: SonarQube, Code Climate

**Next Week Preview (Week 11: React & Frontend Testing)**
- Testing React components
- React Testing Library
- Component integration testing
- E2E testing with Cypress

---

## Notes for Instructors

### Teaching Tips
1. Start with simple tests and build complexity gradually
2. Show live test failures and how to read error messages
3. Emphasize that tests are documentation
4. Practice TDD with live coding
5. Compare JavaScript and Python approaches side-by-side
6. Make testing fun: celebrate reaching coverage targets

### Common Student Mistakes to Watch For
- Writing tests after implementation (instead of TDD)
- Testing implementation details instead of behavior
- Not testing error cases
- Forgetting to assert in tests
- Over-mocking (mocking too much)
- Not understanding fixture scopes

### Pacing Notes
- Holiday adjustment requires flexible scheduling
- If running behind, prioritize: Jest → pytest → CI/CD
- Consider async testing as most challenging
- TDD requires practice - more exercises help

### Real-World Context
- Professional teams require 80%+ coverage
- CI/CD is standard in all modern development
- TDD improves code design, not just verification
- Testing saves time by preventing bugs
- Code quality metrics are tracked in hiring
