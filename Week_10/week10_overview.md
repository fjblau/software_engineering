# Week 10 Overview: "Testing & Quality"
## Professional Testing Practices in JavaScript & Python

**Duration: 30 hours**
**Dates: April 28 - May 2, 2025**
**Note: May 1 (Staatsfeiertag) is a holiday**

---

## Week Overview

Week 10 introduces professional testing practices, teaching students to write unit tests, integration tests, and follow Test-Driven Development (TDD). Students learn testing frameworks for both JavaScript (Jest) and Python (pytest), and set up CI/CD pipelines with GitHub Actions.

### Key Focus Areas:
- Testing fundamentals (unit, integration, e2e)
- JavaScript testing with Jest
- Python testing with pytest
- Test-Driven Development (TDD)
- Code quality tools (linting, formatting)
- CI/CD basics with GitHub Actions

### Week 10 Success Metrics:
- ✅ Students write unit tests in both languages
- ✅ Students write integration tests
- ✅ Students practice Test-Driven Development
- ✅ Students achieve 80%+ code coverage
- ✅ Students set up CI/CD pipelines
- ✅ Students use code quality tools

---

## Daily Schedule

### Monday: Testing Fundamentals
**6.5 hours**
- Why testing matters
- Types of testing (unit, integration, e2e, acceptance)
- Test structure (Arrange-Act-Assert)
- Writing testable code
- What to test and what not to test
- Code coverage metrics

### Tuesday: JavaScript Testing with Jest
**6.5 hours**
- Jest setup and configuration
- Writing unit tests
- Testing functions and modules
- Mocking and spies
- Async testing
- Snapshot testing
- Coverage reports

### Wednesday: Python Testing with pytest
**6.5 hours**
- pytest setup and conventions
- Writing unit tests
- Fixtures and setup/teardown
- Parametrized tests
- Mocking with unittest.mock
- Testing async code
- Coverage with pytest-cov

### Thursday: Test-Driven Development (TDD) Workshop
**6.5 hours**
- TDD principles (Red-Green-Refactor)
- Writing tests first
- TDD kata exercises
- Benefits and challenges of TDD
- When to use TDD
- Code quality tools (ESLint, Prettier, Black, pylint)

### Friday: CI/CD & Code Quality
**4 hours**
- GitHub Actions basics
- Automated testing on push/PR
- Continuous Integration setup
- Code quality checks
- Sprint Review: Testing projects
- Retrospective

---

## Learning Objectives

By the end of Week 10, students will be able to:

1. **Testing Fundamentals**
   - Explain different types of tests
   - Write effective test cases
   - Structure tests properly
   - Use assertions effectively

2. **JavaScript Testing**
   - Write Jest tests
   - Test async code
   - Mock dependencies
   - Generate coverage reports

3. **Python Testing**
   - Write pytest tests
   - Use fixtures
   - Parametrize tests
   - Test async Python code

4. **Test-Driven Development**
   - Follow Red-Green-Refactor cycle
   - Write tests before code
   - Refactor with confidence
   - Apply TDD to real problems

5. **CI/CD**
   - Set up GitHub Actions
   - Automate testing
   - Configure build pipelines
   - Use code quality tools

---

## Key Concepts

### Testing Types
- **Unit tests**: Test individual functions/methods
- **Integration tests**: Test components working together
- **End-to-end tests**: Test complete user flows
- **Acceptance tests**: Test business requirements

### Test Structure (AAA Pattern)
- **Arrange**: Set up test data
- **Act**: Execute the code being tested
- **Assert**: Verify the results

### Test Coverage
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

### TDD Cycle
1. **Red**: Write failing test
2. **Green**: Write minimal code to pass
3. **Refactor**: Improve code quality

### Mocking
- Mock functions
- Mock modules
- Spy on function calls
- Stub return values

### CI/CD
- Continuous Integration
- Continuous Deployment
- Automated testing
- Build automation

---

## Deliverables

### Weekly Assignment: Test-Driven Development Project (100 points)

Build a calculator or data converter using TDD in BOTH languages:

**Project Options:**
- **Scientific Calculator** (arithmetic, trigonometry, statistics)
- **Unit Converter** (temperature, distance, weight, currency)
- **Data Validator** (email, phone, credit card, passwords)
- **Text Analyzer** (word count, reading time, sentiment)

Requirements:

1. **JavaScript Version with Jest** (30 points)
   - Write tests FIRST using TDD
   - Implement features to pass tests
   - At least 15 test cases
   - Achieve 80%+ code coverage
   - Document TDD process

2. **Python Version with pytest** (30 points)
   - Same functionality as JavaScript
   - Write tests FIRST using TDD
   - At least 15 test cases
   - Achieve 80%+ code coverage
   - Compare testing approaches

3. **Code Coverage** (15 points)
   - 80%+ coverage in both versions
   - Coverage reports generated
   - Identify untested code paths
   - Document why some code isn't tested

4. **CI/CD Pipeline** (15 points)
   - GitHub Actions workflow
   - Run tests on every push
   - Run tests on pull requests
   - Status badges in README
   - Automated coverage reports

5. **Testing Strategy Document & Performance Benchmarks** (10 points)
   - Explain testing approach
   - Compare Jest vs pytest
   - Document TDD experience
   - Performance comparison between implementations
   - Lessons learned

---

## Resources

### JavaScript Testing
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)
- [Testing JavaScript](https://testingjavascript.com/)

### Python Testing
- [pytest Documentation](https://docs.pytest.org/)
- [Real Python - pytest Guide](https://realpython.com/pytest-python-testing/)
- [pytest Tutorial](https://www.guru99.com/pytest-tutorial.html)

### TDD
- [Test-Driven Development by Example (Book)](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)
- [TDD Katas](http://codingdojo.org/kata/)

### CI/CD
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Quickstart](https://docs.github.com/en/actions/quickstart)

### Code Quality
- [ESLint](https://eslint.org/) - JavaScript linter
- [Prettier](https://prettier.io/) - Code formatter
- [Black](https://black.readthedocs.io/) - Python formatter
- [pylint](https://pylint.org/) - Python linter

---

## Code Examples

### Jest Setup (package.json)
```json
{
  "name": "calculator-tdd",
  "version": "1.0.0",
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "devDependencies": {
    "jest": "^29.5.0"
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

### JavaScript Unit Tests with Jest
```javascript
// calculator.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

module.exports = { add, subtract, divide };

// calculator.test.js
const { add, subtract, divide } = require('./calculator');

describe('Calculator', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });
        
        test('adds negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });
        
        test('adds zero', () => {
            expect(add(5, 0)).toBe(5);
        });
    });
    
    describe('subtract', () => {
        test('subtracts two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });
    });
    
    describe('divide', () => {
        test('divides two numbers', () => {
            expect(divide(6, 2)).toBe(3);
        });
        
        test('throws error when dividing by zero', () => {
            expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
        });
    });
});
```

### Python Unit Tests with pytest
```python
# calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def divide(a, b):
    if b == 0:
        raise ValueError('Cannot divide by zero')
    return a / b

# test_calculator.py
import pytest
from calculator import add, subtract, divide

class TestCalculator:
    def test_add_positive_numbers(self):
        assert add(2, 3) == 5
    
    def test_add_negative_numbers(self):
        assert add(-2, -3) == -5
    
    def test_add_zero(self):
        assert add(5, 0) == 5
    
    def test_subtract(self):
        assert subtract(5, 3) == 2
    
    def test_divide(self):
        assert divide(6, 2) == 3
    
    def test_divide_by_zero(self):
        with pytest.raises(ValueError, match='Cannot divide by zero'):
            divide(6, 0)

# Parametrized tests
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-2, -3, -5),
    (0, 5, 5),
    (100, 200, 300),
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected
```

### TDD Example - Red, Green, Refactor
```javascript
// 1. RED - Write failing test first
describe('isPalindrome', () => {
    test('returns true for palindromes', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('level')).toBe(true);
    });
    
    test('returns false for non-palindromes', () => {
        expect(isPalindrome('hello')).toBe(false);
    });
    
    test('ignores case', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });
});

// 2. GREEN - Write minimal code to pass
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// 3. REFACTOR - Improve code (if needed)
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// 4. Add more tests
test('ignores spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});
```

### Testing Async Code
```javascript
// JavaScript - Testing async functions
async function fetchUser(id) {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
}

// Test
test('fetchUser returns user data', async () => {
    const user = await fetchUser(1);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
});
```

```python
# Python - Testing async functions
import pytest

@pytest.mark.asyncio
async def test_fetch_user():
    user = await fetch_user(1)
    assert 'id' in user
    assert 'name' in user
```

### Mocking
```javascript
// JavaScript - Mocking with Jest
const api = require('./api');

jest.mock('./api');

test('calls API and returns data', async () => {
    api.fetchData.mockResolvedValue({ data: 'test' });
    
    const result = await fetchData();
    
    expect(api.fetchData).toHaveBeenCalled();
    expect(result).toEqual({ data: 'test' });
});
```

```python
# Python - Mocking with unittest.mock
from unittest.mock import patch, MagicMock

def test_fetch_data(mocker):
    # Mock the API call
    mock_response = MagicMock()
    mock_response.json.return_value = {'data': 'test'}
    
    with patch('requests.get', return_value=mock_response):
        result = fetch_data()
        assert result == {'data': 'test'}
```

### GitHub Actions Workflow
```yaml
# .github/workflows/test.yml
name: Run Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test-javascript:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
      working-directory: ./javascript
    
    - name: Run tests
      run: npm test
      working-directory: ./javascript
    
    - name: Check coverage
      run: npm run test:coverage
      working-directory: ./javascript
  
  test-python:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    
    - name: Install dependencies
      run: |
        pip install -r requirements.txt
        pip install pytest pytest-cov
      working-directory: ./python
    
    - name: Run tests
      run: pytest --cov=. --cov-report=xml
      working-directory: ./python
```

---

## Testing Best Practices

### What to Test
- ✅ Public interfaces
- ✅ Edge cases
- ✅ Error conditions
- ✅ Business logic
- ✅ Data transformations

### What NOT to Test
- ❌ Third-party libraries
- ❌ Framework internals
- ❌ Simple getters/setters
- ❌ Constants

### Test Naming
```javascript
// ✅ Good - descriptive
test('returns 400 when email is missing')

// ❌ Bad - unclear
test('test 1')
```

### Keep Tests Independent
```javascript
// ✅ Good - each test independent
test('adds user', () => {
    const users = [];
    users.push({name: 'Maria'});
    expect(users).toHaveLength(1);
});

// ❌ Bad - depends on previous test
let users = [];
test('adds user', () => {
    users.push({name: 'Maria'});
});
test('has one user', () => {
    expect(users).toHaveLength(1); // Fragile!
});
```

---

## Notes for Instructor

- **Holiday**: May 1 is Staatsfeiertag - adjust schedule
- Start with simple examples before complex testing
- Emphasize that testing saves time, not wastes it
- Show examples of bugs caught by tests
- Live TDD demonstration
- Explain when to mock and when not to
- Show test coverage reports visually
- Discuss realistic coverage goals (not 100%)
- Compare testing philosophies: TDD vs test-after
- Connect to professional development practices
- Prepare for React testing (Week 11)

---

## Common Testing Mistakes

1. Testing implementation instead of behavior
2. Not testing edge cases
3. Tests that depend on each other
4. Tests that are too slow
5. Mocking everything
6. Aiming for 100% coverage (diminishing returns)
7. Not testing error conditions

---

## Connection to Other Weeks

- **Week 2-9**: Can now test all previous code
- **Week 11**: Will test React components
- **Week 12**: Will test database operations
- **Week 13**: Full-stack testing
- **Week 15**: Testing in CI/CD pipelines

Testing is fundamental to professional software development. Tests provide confidence to refactor, catch bugs early, and serve as living documentation!