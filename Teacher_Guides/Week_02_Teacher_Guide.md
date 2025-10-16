# Week 2 Teacher's Guide: Learning Your Instruments
## Programming Fundamentals - JavaScript & Python

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** February 24-28, 2025  
**Focus:** The "Two Instruments" Philosophy, Programming Fundamentals, Dual-Language Thinking

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

Week 2 transforms students from tool-users into programmers. This week introduces the bootcamp's signature **"Two Instruments" approach**—teaching JavaScript and Python side-by-side from day one.

### The Two Instruments Philosophy

> "A professional session musician can play multiple instruments. They understand music theory, not just one specific guitar. Similarly, professional developers understand programming concepts—not just one language's syntax."

This philosophy:
- Positions students as **true developers**, not single-language coders
- Emphasizes that **concepts transcend language syntax**
- Builds pattern recognition across languages
- Prepares students for polyglot development careers
- Reduces anxiety about learning by showing similarities

### Week 2 Success Metrics

✅ Students write working programs in BOTH JavaScript and Python  
✅ Students understand the "Two Instruments" philosophy  
✅ Students see patterns across languages  
✅ Students debug their own code systematically  
✅ Students embrace learning over perfection  
✅ Professional Git habits continue  
✅ Students complete 10 dual-language programming challenges

### Key Teaching Points

- **Normalize struggle** - Learning two languages simultaneously is challenging AND valuable
- **Show connections** - Highlight patterns: `let`/`const` vs direct assignment, `{}` vs indentation
- **Celebrate diversity** - Discuss why each language exists and when to use it
- **Balance depth** - Teach concepts, not memorization of every method
- **Use REPLs** - Hands-on experimentation in interactive shells builds confidence

---

## Learning Objectives

By the end of Week 2, students will be able to:

### Programming Fundamentals (Both Languages)
- Explain what programming is: giving precise instructions to computers
- Understand program execution flow
- Use REPL (Read-Eval-Print-Loop) for experimentation
- Write and execute script files
- Read and interpret error messages

### JavaScript & Python Environments
- Install and verify Node.js and npm
- Install and verify Python 3.8+
- Start interactive REPL shells
- Run script files from command line
- Understand npm packages and pip packages

### Variables & Data Types
- Declare variables correctly in both languages
- Distinguish between numbers, strings, booleans, null/None
- Understand type differences between JavaScript and Python
- Perform type checking (typeof/type())
- Convert between types appropriately
- Understand JavaScript's loose vs Python's strict typing

### Operators
- Perform arithmetic operations (+, -, *, /, %, **)
- Use comparison operators correctly (==, ===, !=, !==, <, >, <=, >=)
- Combine conditions with logical operators (&&/||, and/or)
- Understand operator precedence
- Use string concatenation and template literals/f-strings

### Control Structures
- Write if/else conditional statements
- Understand truthy/falsy values in both languages
- Use for loops (traditional JS vs range-based Python)
- Use while loops
- Control loop execution (break, continue)
- Nest control structures appropriately
- Understand indentation significance in Python

### Functions & Scope
- Define functions with parameters
- Use return statements
- Understand local vs global scope
- Use arrow functions (JS) and lambdas (Python)
- Write reusable code
- Understand hoisting differences

### Testing Mindset
- Write basic assertions
- Manual test functions
- Understand automated vs manual testing
- Run simple tests with Jest (JS) and pytest (Python)

### Dual-Language Thinking
- Translate concepts between languages
- Recognize syntax patterns
- Choose appropriate language for tasks
- Document language differences
- Explain trade-offs between languages

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Test all example code on macOS and Windows
2. ✅ Prepare live coding demos in VS Code with multiple terminals
3. ✅ Create a demo repository showing Week 2 progression
4. ✅ Install Node.js 18+ LTS and Python 3.8+ on demo machine
5. ✅ Configure VS Code with JavaScript and Python extensions
6. ✅ Create side-by-side code comparison templates
7. ✅ Prepare REPL examples written out in advance

**Classroom Setup:**
- Ensure all students have internet for package installations
- Test terminal access in VS Code
- Verify package manager functionality (npm, pip)
- Prepare handouts comparing syntax side-by-side

### Student Pre-Requisites (Send Friday Before Week 2)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 1 requirements (Git, VS Code, terminal access)
- [ ] Node.js 18+ LTS installed and verified (`node --version`, `npm --version`)
- [ ] Python 3.8+ installed and verified (`python3 --version`)
- [ ] npm and pip working (`npm list -g | head`, `pip --version`)

**Optional but Helpful:**
- [ ] Jupyter Notebook installed (`pip install jupyter`)
- [ ] Basic understanding that syntax differs but concepts are similar

**Verification Command (Send to Students):**
```bash
# Run this and send screenshot showing all successful
node --version && npm --version && python3 --version && pip --version

# JavaScript verification
node -e "console.log('Node.js working!')"

# Python verification
python3 -c "print('Python working!')"
```

### Software & Tool Requirements

| Tool | Version | Platform | Installation |
|------|---------|----------|--------------|
| Node.js | 18+ LTS | Mac/Windows/Linux | https://nodejs.org |
| npm | 9+ | Included with Node.js | Bundled |
| Python | 3.8+ | Mac/Windows/Linux | https://python.org |
| pip | 21+ | Included with Python | Bundled |
| VS Code | Latest | Mac/Windows/Linux | Already have |
| VS Code Extensions | - | - | See below |
| Git | 2.30+ | Mac/Windows/Linux | From Week 1 |

### VS Code Extensions (Required by Wednesday)

**JavaScript Development:**
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- JavaScript (ES6) code snippets (xabikos.javascriptsnippets)
- Node.js Extension Pack (waderyan.nodejs-extension-pack)

**Python Development:**
- Python (ms-python.python)
- Pylance (ms-python.vscode-pylance)
- Python Test Explorer (hbenl.vscode-test-explorer)

**Additional:**
- Code Runner (formulahendry.code-runner)
- Better Comments (aaron-bond.better-comments)

---

## Daily Schedule & Topics

### MONDAY: Programming Paradigms, REPL Exploration, Hello World (6.5 hours)

**Learning Goals:**
- Understand programming as a concept
- Explore JavaScript and Python histories & use cases
- Use REPL for hands-on learning
- Execute first scripts in both languages
- Set up Node.js and Python environments

**9:00 - 9:30 | Daily Standup & Week Overview (30 min)**
- Check in on Week 1 Git habits
- Introduce "Two Instruments" philosophy
- Discuss why we're learning both languages
- Set expectations for dual-language learning

**9:30 - 10:30 | Programming Fundamentals & Language Overview (60 min)**

*Teaching Strategy:* Narrative presentation with comparisons

**Topics to Cover:**
```
What is Programming?
- Giving precise instructions to computers
- Programs = sequence of operations executed
- Code = human-readable, Bytecode = computer-readable

JavaScript:
- Created: 1995 by Brendan Eich (10 days!)
- Originally: browser interactivity
- Now: frontend, backend (Node.js), mobile, desktop
- Philosophy: "Many ways to do it"
- Runs on: Browsers and Node.js runtime

Python:
- Created: 1991 by Guido van Rossum
- Originally: scripting and automation
- Now: data science, AI/ML, backend, automation
- Philosophy: "One obvious way to do it"
- Runs on: Python interpreter

Key Difference Visualization:
JavaScript:  { } semicolons optional flexible
Python:      indentation strict readability focus
```

**Live Demo - Language Comparison Table:**
Show on screen:

| Concept | JavaScript | Python |
|---------|-----------|--------|
| Code blocks | {} braces | Indentation |
| Variables | let/const/var | direct assignment |
| Print | console.log() | print() |
| Comments | // and /* */ | # |
| Case style | camelCase | snake_case |
| Null value | null/undefined | None |
| None | N/A | N/A |

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Setting Up Node.js & Python (60 min)**

*Teaching Strategy:* Live coding, students follow along

**Node.js Setup:**
```bash
# Check installation
node --version          # v18.x.x or higher
npm --version          # 9.x.x or higher

# Verify npm is working
npm config get prefix  # Shows npm global location

# Install a test package
npm install -g cowsay  # Just for fun!
cowsay "Hello from npm"
```

**Python Setup:**
```bash
# Check installation
python3 --version      # 3.8 or higher
pip --version          # pip 21+

# Verify pip working
pip list              # Shows installed packages
pip install --upgrade pip  # Get latest pip
```

**Student Activity - Environment Verification (30 min):**
Students run verification commands and capture screenshots for their repos.

**11:45 - 12:00 | BREAK/SETUP (15 min)**

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | REPL Exploration & Interactive Programming (75 min)**

*Teaching Strategy:* Hands-on experimentation

**JavaScript REPL (Node.js):**
```bash
# Start Node REPL
node

# Then try:
> 2 + 2
4
> "Hello" + " " + "World"
'Hello World'
> let x = 10
undefined
> x * 2
20
> Math.sqrt(16)
4
> .exit  # or Ctrl+C twice
```

**Python REPL:**
```bash
# Start Python REPL
python3

# Then try:
>>> 2 + 2
4
>>> "Hello" + " " + "World"
'Hello World'
>>> x = 10
>>> x * 2
20
>>> import math
>>> math.sqrt(16)
4.0
>>> exit()  # or Ctrl+D
```

**Key Teaching Points:**
- REPL = immediate feedback tool
- Great for learning, testing ideas, debugging
- Both REPLs follow same fundamental operations
- Different output formatting, same results

**Student Activity - REPL Experimentation (40 min):**
Students explore both REPLs:
1. Basic math operations
2. String concatenation
3. Variable assignment
4. Type checking (typeof vs type())
5. Simple function calls

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | First Scripts: Hello World in Both Languages (75 min)**

*Teaching Strategy:* Live coding with comparison

**JavaScript Script (hello.js):**
```javascript
// Print a greeting
console.log("Hello, World!");

// Using a variable
let name = "Developer";
console.log(`Hello, ${name}!`);

// Simple math
let x = 10;
let y = 5;
console.log(`${x} + ${y} = ${x + y}`);

// Run with: node hello.js
```

**Python Script (hello.py):**
```python
# Print a greeting
print("Hello, World!")

# Using a variable
name = "Developer"
print(f"Hello, {name}!")

# Simple math
x = 10
y = 5
print(f"{x} + {y} = {x + y}")

# Run with: python3 hello.py
```

**Live Demo Process:**
1. Create hello.js in VS Code
2. Run: `node hello.js`
3. Show output
4. Create hello.py in VS Code
5. Run: `python3 hello.py`
6. Show output
7. Highlight syntax differences, same results

**Student Activity - Write First Scripts (40 min):**
- Students create hello.js and hello.py
- Run both scripts
- Modify with their own name
- Commit to Git with message: "Add Week 2: Hello World scripts"

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Quick Standup:**
- What surprised you about each language?
- Which syntax felt more natural?
- What questions do you have?

**Homework:**
- Ensure Node.js and Python verified
- Practice REPL in both languages (15 min each)
- Read: Programming paradigm definitions in Week 2 materials

---

### TUESDAY: Variables, Data Types, Operators (6.5 hours)

**Learning Goals:**
- Declare variables correctly in both languages
- Understand data types deeply
- Use operators with confidence
- See type differences as learning opportunities
- Practice side-by-side coding

**9:00 - 9:30 | Daily Standup & Review (30 min)**
- Check: Are Node/Python set up?
- Quick overview of today's topics
- Address setup issues if any

**9:30 - 10:45 | Variables & Declaration (75 min)**

*Teaching Strategy:* Comparison-based teaching with examples

**JavaScript Variables:**
```javascript
// Three ways to declare variables
let age = 25;           // Can be reassigned, block-scoped
const name = "Alice";   // Cannot be reassigned, block-scoped
var oldStyle = "avoid"; // Old style, function-scoped

// Modern practice: use const by default, let if needed to reassign
const MAX_USERS = 100;  // Constants in UPPER_CASE
let currentUsers = 50;  // Variables in camelCase
```

**Python Variables:**
```python
# Direct assignment, no keywords needed
age = 25                # Can be reassigned
name = "Alice"          # Can be reassigned

# Naming conventions for constants
MAX_USERS = 100         # Constants in UPPER_CASE
current_users = 50      # Variables in snake_case
```

**Key Difference Discussion:**
- JavaScript requires let/const/var keyword
- Python uses direct assignment
- Python naming convention differs: snake_case vs camelCase
- JavaScript has const; Python doesn't (use convention instead)

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:15 | Data Types & Type Checking (75 min)**

**JavaScript Data Types:**
```javascript
// Numbers (one type for all)
let integer = 42;
let decimal = 3.14;
let negative = -5;
let huge = 1e10;        // Scientific notation

// Strings
let str1 = "double quotes";
let str2 = 'single quotes';
let str3 = `template literal with ${variable}`;

// Booleans
let isTrue = true;
let isFalse = false;

// Null and Undefined
let emptyValue = null;          // Intentional absence
let notAssigned;                // undefined (automatic)

// Check types
console.log(typeof 42);         // "number"
console.log(typeof "hello");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof null);       // "object" (quirk!)
console.log(typeof undefined);  // "undefined"
```

**Python Data Types:**
```python
# Integers and Floats (two separate types)
integer = 42
decimal = 3.14
negative = -5
huge = 1e10              # Scientific notation

# Strings
str1 = "double quotes"
str2 = 'single quotes'
str3 = f"f-string with {variable}"

# Booleans (capitalized)
is_true = True
is_false = False

# None (Python's null)
empty_value = None

# Check types
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type("hello"))     # <class 'str'>
print(type(True))        # <class 'bool'>
print(type(None))        # <class 'NoneType'>
```

**Key Differences:**
- JavaScript: one number type; Python: int vs float
- JavaScript: typeof null = "object" (famous quirk!)
- Python: Boolean values capitalized (True, False)
- JavaScript: undefined exists separately from null

**12:15 - 1:00 | LUNCH (45 min)**

**1:00 - 2:15 | Operators: Arithmetic, Comparison, Logical (75 min)**

**Arithmetic Operators:**

JavaScript:
```javascript
let a = 10, b = 3;
console.log(a + b);     // 13 - Addition
console.log(a - b);     // 7  - Subtraction
console.log(a * b);     // 30 - Multiplication
console.log(a / b);     // 3.333... - Division
console.log(a % b);     // 1  - Modulus (remainder)
console.log(a ** b);    // 1000 - Exponentiation
```

Python:
```python
a, b = 10, 3
print(a + b)            # 13 - Addition
print(a - b)            # 7  - Subtraction
print(a * b)            # 30 - Multiplication
print(a / b)            # 3.333... - Division (always float)
print(a // b)           # 3  - Floor division
print(a % b)            # 1  - Modulus (remainder)
print(a ** b)           # 1000 - Exponentiation
```

**Important Difference:** Python's `/` always returns float; use `//` for integer division.

**Comparison Operators:**

JavaScript:
```javascript
let x = 5, y = 10;
console.log(x == y);    // false - Equal (loose)
console.log(x === y);   // false - Equal (strict, no type coercion)
console.log(x != y);    // true  - Not equal
console.log(x !== y);   // true  - Not equal (strict)
console.log(x < y);     // true
console.log(x > y);     // false

// Important: == vs ===
console.log(5 == "5");   // true (type coercion!)
console.log(5 === "5");  // false (strict, type matters)
```

Python:
```python
x, y = 5, 10
print(x == y)           # False - Equal
print(x != y)           # True  - Not equal
print(x < y)            # True
print(x > y)            # False

# Python's == doesn't do type coercion
print(5 == "5")         # False (different types)
print(5 == 5.0)         # True (int and float can equal)
```

**Teaching Point:** Use `===` in JavaScript by default; avoid `==` to prevent type coercion bugs.

**Logical Operators:**

JavaScript:
```javascript
let a = true, b = false;
console.log(a && b);    // false - AND (both must be true)
console.log(a || b);    // true  - OR (at least one true)
console.log(!a);        // false - NOT
```

Python:
```python
a, b = True, False
print(a and b)          # False - AND
print(a or b)           # True  - OR
print(not a)            # False - NOT
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Type Conversion & String Operations (75 min)**

**JavaScript Type Conversion:**
```javascript
// String to Number
let ageStr = "25";
let ageNum = Number(ageStr);      // 25
let ageInt = parseInt(ageStr);    // 25
let priceFloat = parseFloat("19.99"); // 19.99

// Number to String
let score = 100;
let scoreStr = String(score);     // "100"
let scoreStr2 = score.toString(); // "100"

// Boolean conversion
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false (falsy)
console.log(Boolean("hi"));       // true (truthy)
```

**Python Type Conversion:**
```python
# String to Number
age_str = "25"
age_num = int(age_str)            # 25
price_float = float("19.99")      # 19.99

# Number to String
score = 100
score_str = str(score)            # "100"

# Boolean conversion
print(bool(1))                    # True
print(bool(0))                    # False
print(bool(""))                   # False (falsy)
print(bool("hi"))                 # True (truthy)
```

**String Operations:**

JavaScript:
```javascript
let first = "Ada";
let last = "Lovelace";

// Concatenation
let full = first + " " + last;
let full2 = `${first} ${last}`;   // Template literal (preferred)

// String methods
console.log(full.length);         // 12
console.log(full.toUpperCase());  // "ADA LOVELACE"
console.log(full.toLowerCase());  // "ada lovelace"
console.log(full.charAt(0));      // "A"
console.log(full.substring(0, 3)); // "Ada"
```

Python:
```python
first = "Ada"
last = "Lovelace"

# Concatenation
full = first + " " + last
full2 = f"{first} {last}"         # f-string (preferred)

# String methods
print(len(full))                  # 12
print(full.upper())               # "ADA LOVELACE"
print(full.lower())               # "ada lovelace"
print(full[0])                    # "A"
print(full[0:3])                  # "Ada"
```

**Student Activity - Type Conversion Challenge (40 min):**
Students write small programs doing type conversions in both languages.

**3:45 - 4:00 | Daily Standup & Review (15 min)**

**Reflection:**
- Which language felt more intuitive for types?
- What tripped you up?
- Questions before tomorrow?

**Homework:**
- Complete type conversion exercises in both languages
- Practice operator usage (arithmetic, comparison, logical)

---

### WEDNESDAY: Control Structures - If/Else, Loops (6.5 hours)

**Learning Goals:**
- Write conditional statements with confidence
- Master for and while loops
- Understand indentation in Python vs braces in JavaScript
- Use control structures to solve problems
- Nested structures with clarity

**9:00 - 9:30 | Daily Standup & Overview (30 min)**
- Quick check on Tuesday's topics
- Explain today's focus: controlling program flow
- Preview the grade calculator challenge

**9:30 - 10:45 | Conditional Statements (If/Else/Else If) (75 min)**

*Teaching Strategy:* Live coding with real-world examples

**JavaScript Conditionals:**
```javascript
let score = 85;

// Simple if
if (score >= 90) {
    console.log("Grade: A");
}

// if/else
if (score >= 90) {
    console.log("Grade: A");
} else {
    console.log("Grade: Not A");
}

// if/else if/else
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary operator (shorthand)
let result = score >= 90 ? "Pass" : "Fail";
```

**Python Conditionals:**
```python
score = 85

# Simple if
if score >= 90:
    print("Grade: A")

# if/else
if score >= 90:
    print("Grade: A")
else:
    print("Grade: Not A")

# if/elif/else
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# Ternary-like (Python 2.5+)
result = "Pass" if score >= 90 else "Fail"
```

**Key Differences:**
- JavaScript uses `{ }` and optionally `;`
- Python uses `:` and **indentation** (critical!)
- Python: `elif` (not `else if`)
- Both support ternary operators

**Important Teaching Point:** Python indentation is not stylistic—it's **required syntax**. Misindentation causes errors.

**Truthy vs Falsy:**

JavaScript:
```javascript
// Falsy values: false, 0, "", null, undefined, NaN
if (0) { }          // won't execute
if ("") { }         // won't execute
if (null) { }       // won't execute

// Truthy values: everything else
if (1) { }          // executes
if ("hello") { }    // executes
if ([]) { }         // executes (arrays are truthy!)
```

Python:
```python
# Falsy values: False, 0, "", [], {}, None
if 0:
    pass            # won't execute

if "":
    pass            # won't execute

if []:
    pass            # won't execute

# Truthy values: everything else
if 1:
    pass            # executes

if "hello":
    pass            # executes

if [1, 2, 3]:
    pass            # executes
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Loops: For and While (60 min)**

**JavaScript Loops:**

For loop:
```javascript
// Traditional for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// For...of loop (ES6)
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
```

While loop:
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

**Python Loops:**

For loop:
```python
# Range-based for loop
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Looping over list
numbers = [1, 2, 3]
for num in numbers:
    print(num)

# Getting index and value
for i, num in enumerate(numbers):
    print(f"{i}: {num}")
```

While loop:
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

**Break and Continue:**

JavaScript:
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Skip 3
    if (i === 7) break;     // Exit loop
    console.log(i);
}
```

Python:
```python
for i in range(10):
    if i == 3: continue     # Skip 3
    if i == 7: break        # Exit loop
    print(i)
```

**Key Differences:**
- JavaScript: C-style `for (init; condition; update)`
- Python: range-based `for i in range()` (simpler!)
- Both: `break` and `continue` work identically
- Python: supports `enumerate()` for index + value

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Nested Structures & FizzBuzz Challenge (75 min)**

**Nested If/Else Example:**

JavaScript:
```javascript
let age = 25;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Get a license");
    }
} else {
    console.log("Too young");
}
```

Python:
```python
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("Can drive")
    else:
        print("Get a license")
else:
    print("Too young")
```

**FizzBuzz Challenge - JavaScript:**
```javascript
// Classic programming interview question
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

**FizzBuzz Challenge - Python:**
```python
# Same logic, different syntax
for i in range(1, 101):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```

**Student Activity - FizzBuzz Implementation (40 min):**
- Students implement FizzBuzz in both languages
- Test output matches expectations
- Commit to Git with message: "Add FizzBuzz implementations"

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Practice Problems (75 min)**

Students solve 3-4 mini problems:
1. **Grade Calculator** - if/elif/else with user input
2. **Number Guessing Loop** - while loop with break
3. **Multiplication Table** - nested for loops

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Homework:**
- Complete all 3 practice problems in both languages
- Extra: Try FizzBuzz variations (custom divisors)

---

### THURSDAY: Functions & Scope (6.5 hours)

**Learning Goals:**
- Define and call functions with parameters
- Understand return values
- Master local vs global scope
- Use arrow functions and lambdas
- Write reusable code

**9:00 - 9:30 | Daily Standup & Overview (30 min)**

**9:30 - 10:45 | Function Fundamentals (75 min)**

*Teaching Strategy:* Building from simple to complex

**JavaScript Functions:**

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function call
console.log(greet("Alice"));  // "Hello, Alice!"

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));       // 8

// Function with no return
function printMessage(msg) {
    console.log(msg);
}

// Arrow function (ES6)
const multiply = (a, b) => {
    return a * b;
};

// Arrow function (shorthand for single expression)
const square = x => x * x;

// Default parameters
function greetWithDefault(name = "World") {
    return `Hello, ${name}!`;
}
```

**Python Functions:**

```python
# Function definition
def greet(name):
    return f"Hello, {name}!"

# Function call
print(greet("Alice"))  # "Hello, Alice!"

# Function with multiple parameters
def add(a, b):
    return a + b

print(add(5, 3))       # 8

# Function with no return
def print_message(msg):
    print(msg)

# Lambda (anonymous function)
multiply = lambda a, b: a * b

# Default parameters
def greet_with_default(name="World"):
    return f"Hello, {name}!"
```

**Key Differences:**
- JavaScript: `function` keyword or `() => {}`
- Python: `def` keyword
- Both support default parameters
- Python lambdas are more limited (single expression)

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:15 | Scope: Local vs Global (75 min)**

**JavaScript Scope:**

```javascript
// Global scope
let globalVar = "I'm global";

function demonstrateScope() {
    // Local scope
    let localVar = "I'm local";
    console.log(globalVar);  // Can access global
    console.log(localVar);   // Can access local
}

demonstrateScope();
console.log(globalVar);  // "I'm global" - works
console.log(localVar);   // ReferenceError - localVar not defined

// Block scope (let/const only)
if (true) {
    let blockVar = "Block scope";
}
console.log(blockVar);   // ReferenceError
```

**Python Scope:**

```python
# Global scope
global_var = "I'm global"

def demonstrate_scope():
    # Local scope
    local_var = "I'm local"
    print(global_var)  # Can access global
    print(local_var)   # Can access local

demonstrate_scope()
print(global_var)      # "I'm global" - works
print(local_var)       # NameError - local_var not defined

# Accessing global in function
global_counter = 0

def increment():
    global global_counter  # Must declare 'global' to modify
    global_counter += 1

increment()
print(global_counter)      # 1
```

**Scope Rules (Both Languages):**
1. Inner scope can access outer scope
2. Outer scope cannot access inner scope
3. Variable lookup: local → outer → global
4. Use local scope by default (prevents bugs)

**JavaScript Hoisting:**
```javascript
// Hoisting: declarations move to top of scope
console.log(x);  // undefined (not an error!)
var x = 5;

// With let/const: Temporal Dead Zone
console.log(y);  // ReferenceError!
let y = 5;
```

**Teaching Point:** Use `let`/`const` to avoid hoisting confusion.

**12:15 - 1:00 | LUNCH (45 min)**

**1:00 - 2:15 | Real-World Functions (75 min)**

**Example: Temperature Converter**

JavaScript:
```javascript
function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        return "Error: Input must be a number";
    }
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number') {
        return "Error: Input must be a number";
    }
    return (fahrenheit - 32) * 5/9;
}

// Test
console.log(celsiusToFahrenheit(0));    // 32
console.log(fahrenheitToCelsius(32));   // 0
```

Python:
```python
def celsius_to_fahrenheit(celsius):
    if not isinstance(celsius, (int, float)):
        return "Error: Input must be a number"
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    if not isinstance(fahrenheit, (int, float)):
        return "Error: Input must be a number"
    return (fahrenheit - 32) * 5/9

# Test
print(celsius_to_fahrenheit(0))    # 32
print(fahrenheit_to_celsius(32))   # 0
```

**Example: Prime Number Checker**

JavaScript:
```javascript
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Test
console.log(isPrime(17));   // true
console.log(isPrime(4));    // false
```

Python:
```python
def is_prime(num):
    if num <= 1:
        return False
    if num == 2:
        return True
    if num % 2 == 0:
        return False
    
    for i in range(3, int(num**0.5) + 1, 2):
        if num % i == 0:
            return False
    return True

# Test
print(is_prime(17))    # True
print(is_prime(4))     # False
```

**Student Activity - Function Implementation (40 min):**
Students implement 3 functions:
1. Simple calculator (add, subtract, multiply, divide)
2. String reverser
3. Even/odd checker

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Function Patterns & Best Practices (75 min)**

**Pure Functions:**
```javascript
// Pure: Same input always gives same output
const add = (a, b) => a + b;

// Impure: Uses global state
let multiplier = 2;
const multiply = (a) => a * multiplier;  // Depends on multiplier
```

**Single Responsibility:**
```javascript
// Good: One job
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Bad: Too many jobs
function geometryCalculator(shape, dimensions) {
    // ... lots of code
}
```

**Clear Naming:**
```javascript
// Good
function getUserAge(userId) { }

// Ambiguous
function getAge(id) { }
```

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Homework:**
- Implement all 10 programming challenge functions in both languages
- Document which language felt better for each function

---

### FRIDAY: Introduction to Testing, Sprint Review (4 hours)

**Learning Goals:**
- Understand why testing matters
- Write simple assertions
- Run automated tests
- Complete Week 2 presentations
- Reflect on dual-language learning

**9:00 - 9:30 | Daily Standup (30 min)**

**9:30 - 10:30 | Testing Fundamentals (60 min)**

*Teaching Strategy:* Hands-on experimentation

**Why Testing Matters:**
- Catch bugs early (cheaper to fix)
- Prevent regressions
- Document expected behavior
- Give confidence in code

**Types of Testing:**
1. **Manual Testing** - Running code, checking output
2. **Unit Testing** - Testing individual functions
3. **Integration Testing** - Testing components together
4. **End-to-End Testing** - Full application flow

**JavaScript Testing - console.assert():**

```javascript
function add(a, b) {
    return a + b;
}

// Simple assertions
console.assert(add(2, 2) === 4, "2+2 should equal 4");
console.assert(add(0, 0) === 0, "0+0 should equal 0");
console.assert(add(-1, 1) === 0, "-1+1 should equal 0");

// If assertion passes: no output
// If assertion fails: error message displayed
```

**Python Testing - assert:**

```python
def add(a, b):
    return a + b

# Simple assertions
assert add(2, 2) == 4, "2+2 should equal 4"
assert add(0, 0) == 0, "0+0 should equal 0"
assert add(-1, 1) == 0, "-1+1 should equal 0"

# If all pass: no output
# If any fails: AssertionError displayed
```

**Introduction to Frameworks:**

JavaScript with Jest:
```bash
npm install --save-dev jest
```

```javascript
// math.test.js
const add = require('./math');

test('adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});
```

Python with pytest:
```bash
pip install pytest
```

```python
# test_math.py
from math_module import add

def test_add_two_positive_numbers():
    assert add(2, 2) == 4

def test_add_zeros():
    assert add(0, 0) == 0
```

**Student Activity - Write Tests (30 min):**
- Students test their implementations from Week 2
- Write at least 3-5 test cases per function
- Run tests and verify they pass

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Code Review & Presentations (60 min)**

*Setup:* Pair students for peer review

**Code Review Process:**
1. Student A shares code with Student B
2. Student B reviews for:
   - Correctness (does it work?)
   - Readability (is it clear?)
   - Efficiency (can it be better?)
   - Edge cases (what about weird inputs?)
3. Student B provides written feedback
4. Repeat with roles reversed

**Presentation Preparation (30 min):**
- Choose 2-3 interesting solutions
- Prepare 5-minute presentation
- Show side-by-side JavaScript/Python comparison
- Discuss lessons learned

**11:45 - 12:00 | Daily Standup & Week Reflection (15 min)**

**Reflection Questions:**
- What was the biggest challenge this week?
- Which language surprised you most?
- How did the "Two Instruments" philosophy change your thinking?
- What's one thing you'll remember about programming fundamentals?

---

## Assignments & Deliverables

### Main Assignment: Dual-Language Programming Challenge (100 points)

Students must implement **10 programming problems in BOTH JavaScript AND Python** (20 implementations total).

#### Problems (Each 5 points = 50 points total)

**1. Temperature Converter**
- Convert Celsius ↔ Fahrenheit
- Input validation (not a number → error message)
- Return converted value or error

**2. FizzBuzz**
- Print 1-100
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5
- "FizzBuzz" for multiples of both

**3. Palindrome Checker**
- Check if string reads same forwards/backwards
- Ignore spaces and case
- Return true/false

**4. Grade Calculator**
- Convert numeric score (0-100) to letter grade
- Include +/- grades (A, A-, B+, B, B-, etc.)
- Input validation

**5. Prime Number Checker**
- Determine if number is prime
- Handle edge cases (1, 2, negative numbers)
- Return true/false

**6. Sum of Array/List**
- Calculate sum of numbers
- Handle empty arrays
- Return sum or 0 for empty

**7. String Reverser**
- Reverse string without built-in reverse
- Preserve spaces
- Return reversed string

**8. Even/Odd Separator**
- Take array of numbers
- Return object/dict with evens and odds arrays
- Example: [1,2,3,4] → {even: [2,4], odd: [1,3]}

**9. Simple Calculator**
- Perform +, -, *, / operations
- Handle division by zero
- Return result or error message

**10. Word Counter**
- Count total words in sentence
- Count specific word occurrences
- Return counts

#### Documentation & Reflection (20 points)

**Language Comparison Document** (10 points)
- Markdown file: `LANGUAGE_COMPARISON.md`
- 500+ words addressing:
  - Which language felt more natural for each problem?
  - Syntax similarities and differences
  - Which language's approach was cleaner?
  - What surprised you?
  - When would you use each language?

**Testing Documentation** (5 points)
- At least 3 functions have test cases
- Tests verify correct behavior
- Edge cases included

**Reflection Essay** (5 points)
- 200+ words on the "Two Instruments" philosophy
- How did learning two languages simultaneously affect your learning?
- What patterns did you notice across languages?

#### Code Quality & Professional Practices (20 points)

**Git Workflow** (5 points)
- Feature branches for each problem
- Meaningful commit messages
- At least 20+ commits throughout week

**Code Style** (5 points)
- Proper naming conventions (camelCase/snake_case)
- Comments where appropriate
- Consistent indentation/formatting

**Readability** (5 points)
- Code is easy to understand
- Functions are focused (single responsibility)
- Variables have clear names

**Error Handling** (5 points)
- Input validation where needed
- Error messages are helpful
- Edge cases handled gracefully

#### Optional Bonus: Technical Blog Post (+10 points)

Write a blog post (300+ words):
- Title: "My Journey Learning JavaScript and Python"
- Topic: One insight from the dual-language approach
- Code examples from your solutions
- Reflection on what you learned
- Post on Medium, Dev.to, or class blog

**Bonus opportunities:**
- +3 pts: Polish presentation with visuals
- +3 pts: Create an interactive demo
- +4 pts: Write comprehensive test suite (10+ tests per language)

---

## Resource Materials

### JavaScript Quick Reference

**Variables & Types:**
```javascript
let mutable = 10;           // reassignable
const immutable = "hello";  // const
typeof variable             // check type
```

**Operators:**
```javascript
a + b, a - b, a * b, a / b, a % b, a ** b    // arithmetic
a == b, a === b, a != b, a !== b             // comparison
a && b, a || b, !a                            // logical
```

**Control Flow:**
```javascript
if (condition) { } else if { } else { }
for (let i = 0; i < 10; i++) { }
while (condition) { }
break, continue
```

**Functions:**
```javascript
function name(param) { return value; }
const arrow = (x) => x * 2;
```

### Python Quick Reference

**Variables & Types:**
```python
mutable = 10               # reassignable
immutable = "hello"        # all are reassignable
type(variable)             # check type
```

**Operators:**
```python
a + b, a - b, a * b, a / b, a // b, a % b, a ** b   # arithmetic
a == b, a != b, a < b, a > b, a <= b, a >= b        # comparison
a and b, a or b, not a                               # logical
```

**Control Flow:**
```python
if condition: pass
elif condition: pass
else: pass

for i in range(10): pass
while condition: pass
break, continue
```

**Functions:**
```python
def name(param):
    return value

lambda x: x * 2
```

### Common Patterns Side-by-Side

**String Formatting:**
```javascript
// JavaScript
`Hello, ${name}!`
"Hello, ".concat(name, "!")
```

```python
# Python
f"Hello, {name}!"
"Hello, {}!".format(name)
```

**Loop Over Collection:**
```javascript
// JavaScript
for (let item of array) { }
array.forEach(item => { })
```

```python
# Python
for item in list:
    pass

for i, item in enumerate(list):
    pass
```

**Type Checking:**
```javascript
typeof variable
variable instanceof ClassName
```

```python
type(variable)
isinstance(variable, ClassName)
```

---

## Assessment Rubric

### Proficiency Levels

#### Novice (0-60%)
- Code often produces incorrect results
- Multiple syntax errors present
- Limited use of functions or control structures
- No meaningful variable names
- Minimal testing attempted
- Commits are sparse or lack clear messages

#### Developing (61-80%)
- Code mostly works; may have edge case bugs
- Generally correct syntax
- Adequate use of functions
- Reasonable variable names
- Some testing attempted
- Regular commits with mostly clear messages
- Reflects on language differences somewhat

#### Proficient (81-95%)
- Code works correctly for all cases
- Clean, error-free syntax
- Good function design
- Clear, descriptive variable names
- Thorough testing with multiple cases
- Consistent, meaningful commits
- Clear reflection on language differences

#### Advanced (96-100%)
- Code is elegant and efficient
- Error handling is comprehensive
- Functions are well-designed with single responsibility
- Excellent variable and function naming
- Comprehensive test coverage
- Well-documented commits with detailed messages
- Insightful reflection on language design choices

### Grading Breakdown

| Category | Points | Description |
|----------|--------|-------------|
| Problem Implementations | 50 | 10 problems × 5 pts each |
| Language Comparison Doc | 10 | Depth and insight |
| Testing | 5 | Test cases, edge cases |
| Reflection Essay | 5 | Quality of reflection |
| Git Workflow | 5 | Branch usage, commits |
| Code Style | 5 | Naming, formatting |
| Readability | 5 | Clarity, organization |
| Error Handling | 5 | Validation, edge cases |
| Bonus (Blog Post) | +10 | Optional technical writing |
| **Total** | **90-100** | Base + possible bonus |

---

## Troubleshooting Guide

### Common Issues & Solutions

| Problem | Cause | Solution |
|---------|-------|----------|
| "command not found: node" | Node.js not installed | Install from nodejs.org, restart terminal |
| "command not found: python3" | Python not installed | Install from python.org, restart terminal |
| Indentation errors (Python) | Wrong spaces (tabs vs spaces) | Use spaces (4), never tabs; check VS Code settings |
| "undefined" in output (JS) | Function returns nothing | Add `return` statement |
| "NameError: name not defined" (Python) | Variable scope issue | Check variable defined before use |
| `===` vs `==` confusion (JS) | Using loose equality | Always use `===`; remember `==` does type coercion |
| Can't reassign const (JS) | Using const for mutable value | Use `let` instead of `const` |
| Test not running | Wrong test framework syntax | Check Jest/pytest syntax matches examples |
| Git merge conflicts | Multiple changes to same file | Resolve manually, test, commit |
| Module not found | Package not installed | Run `npm install` or `pip install` |

### Performance Issues

**Python running slowly:**
- Check for infinite loops
- Verify file not overly large
- Use timeit for benchmarking

**JavaScript console spam:**
- Remove `console.log` statements
- Check for infinite loops in callbacks

### Debugging Strategies

**JavaScript:**
```javascript
// Use console methods
console.log("Value:", variable);
console.table(array);           // Pretty print arrays
console.time("label");          // Time code blocks
```

**Python:**
```python
# Use print statements
print("Value:", variable)
print(variable)                 # REPL quick check

# Use debugger
import pdb
pdb.set_trace()                # Breakpoint
```

---

## Teaching Strategies

### Live Coding Best Practices

1. **Show code and output simultaneously**
   - Split screen with code on left, terminal on right
   - Run after each block
   - Show errors and how to fix them

2. **Type slowly, explain as you go**
   - Talk through syntax
   - Explain naming choices
   - Preview what will happen

3. **Make mistakes intentionally**
   - Show common errors
   - Demonstrate how to read error messages
   - Fix and explain

4. **Use multiple files**
   - Create side-by-side JS and Python files
   - Show them running in separate terminals
   - Highlight differences in output formatting

### Engagement Strategies

**For Students Struggling:**
- Pair with stronger student temporarily
- Focus on one language first, then transfer
- Break problems into smaller steps
- Celebrate small wins

**For Advanced Students:**
- Challenge: Optimize for efficiency
- Research: When is each language used professionally?
- Extend: Add error handling, validation, tests
- Teach: Have them explain to peers

**For Visual Learners:**
- Use color coding for syntax highlighting
- Create comparison charts (side-by-side tables)
- Draw flow diagrams for logic

**For Hands-On Learners:**
- Lots of REPL exploration time
- Live coding challenges
- Build toward real problems

### Group Activities

**Pair Programming:**
- Driver (types), Navigator (guides)
- Switch every 15 minutes
- Both learn by doing both roles

**Code Peer Review:**
- Swap code with classmate
- 10-minute review for clarity
- Provide written feedback
- Discuss improvements

**Group Problem Solving:**
- Present a problem
- Let group discuss approach first
- Then show solution
- Compare different approaches

### Pacing Guidance

**If Behind Schedule:**
- Skip optional bonus problems
- Reduce number of test cases required
- Focus on 5 problems instead of 10
- Still address concepts

**If Ahead of Schedule:**
- Introduce arrays/objects early
- Challenge: Write functions that take functions as parameters
- Explore more built-in methods
- Start Week 3 content

---

## Instructor Notes & Reminders

### Before Monday

- [ ] Test Node.js and Python on your machine
- [ ] Run all example code through
- [ ] Create demo repository with Week 2 progress
- [ ] Download and test all extensions
- [ ] Prepare multiple examples for each concept
- [ ] Have debugging scenarios ready

### Throughout the Week

- [ ] Check Git repos daily for progress
- [ ] Address common setup issues ASAP
- [ ] Celebrate first working programs
- [ ] Emphasize that "Two Instruments" is challenging AND worthwhile
- [ ] Ask questions: "Why do you think Python uses indentation?"

### End of Week

- [ ] Review all submissions
- [ ] Provide written feedback on each student's work
- [ ] Note students struggling with concepts for Week 3 support
- [ ] Celebrate completion with group demonstrations

### Key Reminders

> **"Programming is a skill, not a talent."** - Reiterate that everyone struggles initially

> **"Seeing patterns across languages is the goal."** - Connect concepts explicitly

> **"Questions mean you're learning."** - Create safe space for asking

---

## Differentiation Strategies

### For Students Ahead
- Challenge: Implement problems using different approaches
- Research: Find performance comparisons JS vs Python
- Extend: Add comprehensive error handling
- Teach: Present solutions to classmates
- Explore: JavaScript classes vs Python classes

### For Students Behind
- Reduce scope: Focus on 5 problems instead of 10
- Provide templates: Give function signatures
- Pair with mentor: Buddy system
- Extra office hours: 1-on-1 help
- Simplify: Use simpler problem variations

### For Visual Learners
- Use color-coded comparisons
- Draw flow charts for logic
- Create syntax side-by-side images
- Video demos of concepts

### For Kinesthetic Learners
- Lots of hands-on coding
- Live REPL experimentation
- Walk through problems step-by-step
- Physical whiteboarding

---

## Week 2 Summary

### Key Concepts Students Should Master
1. ✅ Programming paradigm differences
2. ✅ Variable declaration across languages
3. ✅ Data types and type checking
4. ✅ Operators and precedence
5. ✅ Conditional logic (if/else)
6. ✅ Looping (for, while, with break/continue)
7. ✅ Functions with parameters and returns
8. ✅ Scope (local vs global)
9. ✅ Basic testing and assertions
10. ✅ Code patterns that transfer across languages

### Mistakes to Avoid
- ❌ Treating languages as completely separate (they share concepts!)
- ❌ Going too fast (students need practice time)
- ❌ Ignoring edge cases (good introduction to defensive programming)
- ❌ Not running code frequently (seeing output builds confidence)
- ❌ Skipping the "Two Instruments" philosophy (it's the core)

### Connection to Week 3
- Week 3 introduces **Data Structures** (Arrays, Objects/Dictionaries)
- Using functions and loops to manipulate data structures
- Object-Oriented Programming foundations
- Students who master Week 2 concepts will find Week 3 much easier

---

*Last Updated: February 2025*  
*For questions or updates, contact the Digital Campus team.*