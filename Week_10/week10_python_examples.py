"""
WEEK 10: TESTING & QUALITY IN PYTHON
Comprehensive guide to pytest, TDD, and code quality

Learning Objectives:
- Write unit tests with pytest
- Use fixtures for setup/teardown
- Mock functions and external APIs
- Follow Test-Driven Development (TDD)
- Measure code coverage
- Use code quality tools (Black, pylint)
"""

import pytest
from unittest.mock import Mock, patch, MagicMock, call
from typing import List, Dict, Optional
import math


# ============================================================================
# SECTION 1: PYTEST SETUP AND CONVENTIONS
# ============================================================================

"""
pytest is a powerful testing framework for Python

Installation:
pip install pytest pytest-cov pytest-asyncio pytest-mock

File Naming Conventions:
- test_*.py  (recommended)
- *_test.py
- tests/ folder

Running tests:
pytest                      # Run all tests
pytest test_calculator.py   # Run specific file
pytest -v                   # Verbose output
pytest -s                   # Show print statements
pytest --tb=short           # Short traceback
pytest -k "test_add"        # Run only tests matching pattern
pytest --lf                 # Run last failed tests
pytest --ff                 # Run failed tests first
pytest --co                 # Collect tests without running

Coverage:
pytest --cov=src --cov-report=html   # Generate HTML coverage report
pytest --cov=src --cov-report=term-missing
"""


# ============================================================================
# SECTION 2: SIMPLE FUNCTIONS TO TEST
# ============================================================================

def add(a: float, b: float) -> float:
    """Add two numbers."""
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError('Both arguments must be numbers')
    return a + b


def subtract(a: float, b: float) -> float:
    """Subtract two numbers."""
    return a - b


def multiply(a: float, b: float) -> float:
    """Multiply two numbers."""
    return a * b


def divide(a: float, b: float) -> float:
    """Divide two numbers."""
    if b == 0:
        raise ValueError('Cannot divide by zero')
    return a / b


def is_prime(n: int) -> bool:
    """Check if number is prime."""
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True


def is_palindrome(s: str) -> bool:
    """Check if string is palindrome (ignoring non-alphanumeric)."""
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]


def calculate_grade(score: int) -> str:
    """Calculate letter grade from score."""
    if not 0 <= score <= 100:
        raise ValueError('Score must be 0-100')
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    else:
        return 'F'


# ============================================================================
# SECTION 3: BASIC UNIT TESTS (ARRANGE-ACT-ASSERT)
# ============================================================================

"""
# TEST FILE: test_calculator.py

import pytest
from calculator import add, subtract, multiply, divide

class TestCalculator:
    '''Tests for calculator functions'''
    
    # ADDITION TESTS
    def test_add_positive_numbers(self):
        # ARRANGE
        a, b = 2, 3
        
        # ACT
        result = add(a, b)
        
        # ASSERT
        assert result == 5
    
    def test_add_negative_numbers(self):
        assert add(-2, -3) == -5
    
    def test_add_zero(self):
        assert add(5, 0) == 5
    
    def test_add_floats(self):
        assert abs(add(1.5, 2.5) - 4.0) < 0.001
    
    def test_add_raises_error_for_non_numeric(self):
        with pytest.raises(TypeError, match='Both arguments must be numbers'):
            add('5', 3)
    
    # SUBTRACTION TESTS
    def test_subtract(self):
        assert subtract(5, 3) == 2
    
    def test_subtract_negative_result(self):
        assert subtract(3, 5) == -2
    
    # DIVISION TESTS
    def test_divide(self):
        assert divide(6, 2) == 3
    
    def test_divide_by_zero_raises_error(self):
        with pytest.raises(ValueError, match='Cannot divide by zero'):
            divide(5, 0)
    
    # MULTIPLY TESTS
    def test_multiply(self):
        assert multiply(3, 4) == 12
    
    def test_multiply_by_zero(self):
        assert multiply(5, 0) == 0
"""

# ============================================================================
# SECTION 4: PYTEST ASSERTIONS
# ============================================================================

"""
COMMON ASSERTIONS:

Equality:
assert x == 5                           # ==
assert x != 5                           # !=
assert x is None                        # is
assert x is not None                    # is not

Truthiness:
assert condition                        # True
assert not condition                    # False

Type checking:
assert isinstance(x, int)
assert isinstance(x, (int, float))

Comparisons:
assert x > 5
assert x >= 5
assert x < 5
assert x <= 5

String/Container checks:
assert 'substring' in 'long string'
assert value in [1, 2, 3]
assert len(items) == 3

Exceptions:
with pytest.raises(ValueError):
    raise ValueError('message')

with pytest.raises(ValueError, match='specific message'):
    raise ValueError('specific message')

Approximate equality:
assert x == pytest.approx(3.14159, rel=1e-5)

Comparison shortcuts:
# These are more readable than assert
pytest.approx(expected)
"""

# ============================================================================
# SECTION 5: PARAMETRIZED TESTS
# ============================================================================

"""
Run the same test with multiple inputs
Reduces code duplication significantly

# TEST FILE: test_parametrized.py

@pytest.mark.parametrize("input,expected", [
    (2, True),
    (3, True),
    (4, False),
    (5, True),
    (17, True),
    (20, False),
    (1, False),
    (0, False),
])
def test_is_prime_parametrized(input, expected):
    assert is_prime(input) == expected

# Run with -v to see each test case separately
# pytest -v test_parametrized.py::test_is_prime_parametrized

# Using multiple parameters:
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (-2, -3, -5),
    (0, 5, 5),
    (1.5, 2.5, 4.0),
])
def test_add_parametrized(a, b, expected):
    result = add(a, b)
    assert abs(result - expected) < 0.001

# With dict-like syntax (more readable):
@pytest.mark.parametrize("inputs,expected", [
    pytest.param({'a': 2, 'b': 3}, 5, id='positive'),
    pytest.param({'a': -2, 'b': -3}, -5, id='negative'),
    pytest.param({'a': 0, 'b': 5}, 5, id='with_zero'),
])
def test_add_with_ids(inputs, expected):
    assert add(**inputs) == expected
"""

# ============================================================================
# SECTION 6: FIXTURES - SETUP AND TEARDOWN
# ============================================================================

"""
Fixtures provide:
- Setup data before tests
- Teardown after tests
- Reusable test components
- Dependency injection

# TEST FILE: test_with_fixtures.py

@pytest.fixture
def sample_user():
    '''Return sample user data'''
    return {
        'id': 1,
        'name': 'John Doe',
        'email': 'john@example.com'
    }

@pytest.fixture
def sample_users():
    '''Return multiple sample users'''
    return [
        {'id': 1, 'name': 'John', 'email': 'john@example.com'},
        {'id': 2, 'name': 'Jane', 'email': 'jane@example.com'},
        {'id': 3, 'name': 'Bob', 'email': 'bob@example.com'},
    ]

def test_user_name(sample_user):
    '''Fixture is passed as argument'''
    assert sample_user['name'] == 'John Doe'

def test_user_count(sample_users):
    assert len(sample_users) == 3

# FIXTURE WITH SETUP AND TEARDOWN:

@pytest.fixture
def database():
    '''Setup and teardown a test database'''
    print('Setting up database...')
    db = {'users': []}
    
    yield db  # This is the fixture value
    
    # Cleanup happens after test
    print('Cleaning up database...')
    db.clear()

def test_database_operations(database):
    # Database is set up
    database['users'].append({'id': 1, 'name': 'John'})
    assert len(database['users']) == 1
    # Database is cleaned up after

# FIXTURE SCOPES:
# function  (default) - Run for each test function
# class     - Run once per test class
# module    - Run once per module
# session   - Run once per test session

@pytest.fixture(scope='module')
def expensive_resource():
    '''Create once, use for all tests in module'''
    return ExpensiveClass()

# FIXTURE PARAMETERS (Multiple parametrized fixtures):

@pytest.fixture(params=[1, 2, 3])
def number(request):
    return request.param

def test_number_operations(number):
    '''Test runs 3 times: once with 1, 2, and 3'''
    assert number > 0
"""

# ============================================================================
# SECTION 7: MOCKING - REPLACING DEPENDENCIES
# ============================================================================

"""
Mocking allows you to:
1. Replace functions with test doubles
2. Track how functions are called
3. Control return values
4. Isolate code from dependencies

# TEST FILE: test_mocking.py

from unittest.mock import Mock, patch, MagicMock
from calculator import divide

def test_basic_mock():
    '''Create a simple mock'''
    # Create mock function
    mock_fetch = Mock()
    
    # Set return value
    mock_fetch.return_value = {'name': 'John'}
    
    # Use it
    result = mock_fetch()
    
    # Verify it was called
    assert mock_fetch.called
    assert mock_fetch.call_count == 1
    mock_fetch.assert_called_once()

def test_mock_with_side_effect():
    '''Mock that raises exceptions or returns different values'''
    mock_fn = Mock()
    
    # Return different values on successive calls
    mock_fn.side_effect = [1, 2, ValueError('Error')]
    
    assert mock_fn() == 1
    assert mock_fn() == 2
    
    with pytest.raises(ValueError):
        mock_fn()

def test_mock_call_verification():
    '''Verify how mock was called'''
    mock_fn = Mock()
    
    # Call it
    mock_fn('arg1', 'arg2', kwarg='value')
    
    # Verify calls
    mock_fn.assert_called_once_with('arg1', 'arg2', kwarg='value')
    assert mock_fn.call_args == (('arg1', 'arg2'), {'kwarg': 'value'})
    assert mock_fn.call_count == 1

# PATCHING - Replace function/method in a specific location

def fetch_user(user_id):
    '''Function that calls external API'''
    # In real code, this calls an API
    response = requests.get(f'https://api.example.com/users/{user_id}')
    return response.json()

@patch('module.requests.get')  # Patch requests.get
def test_fetch_user(mock_get):
    '''Mock external API call'''
    # Setup mock
    mock_get.return_value.json.return_value = {'id': 1, 'name': 'John'}
    
    # Call function
    result = fetch_user(1)
    
    # Verify
    assert result['name'] == 'John'
    mock_get.assert_called_once_with('https://api.example.com/users/1')

# PATCH WITH CONTEXT MANAGER:

def test_fetch_user_context_manager():
    with patch('module.requests.get') as mock_get:
        mock_get.return_value.json.return_value = {'id': 1, 'name': 'John'}
        result = fetch_user(1)
        assert result['name'] == 'John'

# MOCK ASSERTIONS:
# mock.assert_called()                      # Called at least once
# mock.assert_called_once()                 # Called exactly once
# mock.assert_not_called()                  # Never called
# mock.assert_called_with(args, kwargs)     # Called with specific args
# mock.assert_called_once_with(args)
# mock.assert_any_call(args)                # Called with args at some point
# mock.assert_has_calls([call(...), ...])   # Called with multiple calls
# mock.call_count                           # Number of calls
# mock.call_args                            # Last call arguments
# mock.call_args_list                       # All call arguments
"""

# ============================================================================
# SECTION 8: TESTING ASYNC CODE
# ============================================================================

"""
Testing async functions with pytest-asyncio

Installation: pip install pytest-asyncio

# TEST FILE: test_async.py

import asyncio
import pytest

@pytest.mark.asyncio
async def test_async_function():
    '''Test async function'''
    result = await some_async_function()
    assert result == expected

@pytest.mark.asyncio
async def test_async_with_mock():
    '''Mock async function'''
    with patch('module.async_fetch') as mock_fetch:
        mock_fetch = AsyncMock(return_value={'data': 'value'})
        result = await async_fetch()
        assert result['data'] == 'value'

# TESTING WITH AWAIT:

@pytest.mark.asyncio
async def test_concurrent_operations():
    '''Test multiple async operations'''
    results = await asyncio.gather(
        async_operation_1(),
        async_operation_2(),
        async_operation_3()
    )
    assert len(results) == 3

# FIXTURE FOR ASYNC:

@pytest.fixture
async def async_client():
    '''Create async client for tests'''
    client = AsyncClient()
    await client.connect()
    
    yield client
    
    await client.disconnect()

@pytest.mark.asyncio
async def test_with_async_fixture(async_client):
    result = await async_client.fetch('/api/data')
    assert result.status_code == 200
"""

# ============================================================================
# SECTION 9: TEST-DRIVEN DEVELOPMENT (TDD) EXAMPLE
# ============================================================================

"""
TDD CYCLE:
1. RED: Write failing test
2. GREEN: Write minimal code to pass
3. REFACTOR: Improve code

EXAMPLE: Implement string reversal function

STEP 1: RED - Write test first
"""

def test_reverse_string_red():
    """Write failing test first"""
    # This test will fail because function doesn't exist yet
    from string_utils import reverse_string
    assert reverse_string('hello') == 'olleh'
    assert reverse_string('') == ''
    assert reverse_string('a') == 'a'

# STEP 2: GREEN - Write minimal code
def reverse_string(s: str) -> str:
    """Reverse a string (minimal implementation)"""
    return s[::-1]

# STEP 3: REFACTOR - Now tests pass, improve if needed
# Current implementation is already good!

# Add more edge case tests:
def test_reverse_string_with_spaces():
    assert reverse_string('hello world') == 'dlrow olleh'

def test_reverse_string_with_special_chars():
    assert reverse_string('!@#$') == '$#@!'

# Refactor if needed (current is fine)

# ============================================================================
# SECTION 10: COMPLETE EXAMPLE - USER VALIDATOR
# ============================================================================

"""
# TEST FILE: test_user_validator.py

class UserValidator:
    '''Validator for user data'''
    
    @staticmethod
    def validate_email(email: str) -> bool:
        if '@' not in email or '.' not in email.split('@')[1]:
            raise ValueError('Invalid email format')
        return True
    
    @staticmethod
    def validate_password(password: str) -> bool:
        if len(password) < 8:
            raise ValueError('Password must be at least 8 characters')
        if not any(c.isupper() for c in password):
            raise ValueError('Password must contain uppercase letter')
        if not any(c.isdigit() for c in password):
            raise ValueError('Password must contain digit')
        return True
    
    @staticmethod
    def validate_username(username: str) -> bool:
        if len(username) < 3:
            raise ValueError('Username must be at least 3 characters')
        if not username.replace('_', '').isalnum():
            raise ValueError('Username can only contain alphanumeric and underscore')
        return True

@pytest.fixture
def validator():
    return UserValidator()

class TestUserValidator:
    
    def test_valid_email(self, validator):
        assert validator.validate_email('user@example.com') == True
    
    def test_invalid_email_no_at(self, validator):
        with pytest.raises(ValueError, match='Invalid email format'):
            validator.validate_email('userexample.com')
    
    def test_valid_password(self, validator):
        assert validator.validate_password('SecurePass123') == True
    
    def test_invalid_password_too_short(self, validator):
        with pytest.raises(ValueError, match='at least 8 characters'):
            validator.validate_password('Pass1')
    
    def test_invalid_password_no_uppercase(self, validator):
        with pytest.raises(ValueError, match='uppercase'):
            validator.validate_password('password123')
    
    def test_invalid_password_no_digit(self, validator):
        with pytest.raises(ValueError, match='digit'):
            validator.validate_password('Password')
    
    def test_valid_username(self, validator):
        assert validator.validate_username('user_123') == True
    
    def test_invalid_username_too_short(self, validator):
        with pytest.raises(ValueError, match='at least 3 characters'):
            validator.validate_username('ab')
    
    def test_invalid_username_special_chars(self, validator):
        with pytest.raises(ValueError, match='alphanumeric'):
            validator.validate_username('user@name')

Run: pytest test_user_validator.py -v
"""

# ============================================================================
# SECTION 11: CODE COVERAGE
# ============================================================================

"""
Measure how much code is tested

Generate coverage report:
pytest --cov=src --cov-report=html
pytest --cov=src --cov-report=term-missing

Shows:
- Line coverage: % of lines executed
- Branch coverage: % of if/else paths
- Missing lines: which lines not covered

Target: 80%+ coverage

To exclude code from coverage:
# pragma: no cover

def debug_function():  # pragma: no cover
    # This won't count toward coverage
    pass

Configure in pytest.ini or setup.cfg:
[coverage:run]
branch = True
omit =
    */site-packages/*
    */tests/*

[coverage:report]
exclude_lines =
    pragma: no cover
    def __repr__
    raise AssertionError
    raise NotImplementedError
    if __name__ == .__main__.:
"""

# ============================================================================
# SECTION 12: CODE QUALITY TOOLS
# ============================================================================

"""
BLACK - Automatic code formatting
Installation: pip install black

Usage:
black src/                      # Format all files
black src/module.py             # Format specific file

Configuration (pyproject.toml):
[tool.black]
line-length = 88
target-version = ['py38']
include = '\.pyi?$'
extend-exclude = '''
/(
  # directories
  \.eggs
  | \.git
  | venv
)/
'''

--------

PYLINT - Code analysis
Installation: pip install pylint

Usage:
pylint src/                     # Check all files
pylint src/module.py

Configuration (.pylintrc):
[MASTER]
load-plugins=pylint_django

[MESSAGES CONTROL]
disable=
    C0111,  # Missing docstring
    R0801,  # Duplicate code

--------

FLAKE8 - Style guide enforcement
Installation: pip install flake8

Usage:
flake8 src/

Configuration (.flake8):
[flake8]
max-line-length = 88
exclude = .git,__pycache__,venv
ignore = E203, W503
"""

# ============================================================================
# SECTION 13: PYTEST.INI CONFIGURATION
# ============================================================================

"""
Create pytest.ini in project root:

[pytest]
testpaths = tests
python_files = test_*.py *_test.py
python_classes = Test*
python_functions = test_*
addopts = 
    -v
    --strict-markers
    --tb=short
    --disable-warnings
markers =
    slow: marks tests as slow (deselect with '-m "not slow"')
    integration: marks tests as integration tests
    unit: marks tests as unit tests
"""

# ============================================================================
# SECTION 14: CI/CD WITH GITHUB ACTIONS
# ============================================================================

"""
Create .github/workflows/tests.yml:

name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        python-version: ['3.8', '3.9', '3.10', '3.11']
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: ${{ matrix.python-version }}
      
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install -r requirements-dev.txt
      
      - name: Lint with pylint
        run: pylint src/
      
      - name: Format check with black
        run: black --check src/
      
      - name: Run tests
        run: pytest
      
      - name: Generate coverage
        run: pytest --cov=src --cov-report=xml
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage.xml
"""

# ============================================================================
# SECTION 15: BEST PRACTICES
# ============================================================================

"""
DO's:
✅ Test behavior, not implementation
✅ Write descriptive test names
✅ One assertion per test (or related)
✅ Test edge cases
✅ Use fixtures for setup/teardown
✅ Keep tests isolated
✅ Mock external dependencies
✅ Aim for 80%+ coverage
✅ Run tests before commits
✅ Use parametrization for similar tests
✅ Test error cases
✅ Document complex test logic

DON'Ts:
❌ Test internal implementation
❌ Have tests depend on other tests
❌ Sleep or wait in tests
❌ Make real API/DB calls
❌ Ignore errors
❌ Test third-party libraries
❌ Over-test simple code
❌ Skip tests
❌ Leave test data in repository
❌ Use random data in tests

TEST NAMING:
test_should_return_A_when_given_B()
test_throws_error_when_B_is_invalid()
test_handles_C_correctly()

TEST ORGANIZATION:
class TestFeatureName:
    def test_behavior_1(self): ...
    def test_behavior_2(self): ...
    
    class TestSubfeature:
        def test_subbehavior(self): ...
"""

if __name__ == '__main__':
    # Run examples
    print("Week 10 Python Testing Examples")
    print("Run: pytest test_examples.py -v")
    print("Coverage: pytest --cov=. --cov-report=html")