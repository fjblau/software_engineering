# Week 2 Teacher's Guide: "Learning Your Instruments"
## Programming Fundamentals - JavaScript & Python

**Feb 24-28, 2025 | 30 hours**

---

## Week Overview & Teaching Philosophy

### The "Two Instruments" Approach

Week 2 is where students finally start coding - and they've earned it after mastering professional tools in Week 1. The unique approach of this bootcamp is teaching JavaScript and Python side-by-side from day one.

**Use the musician analogy:**
- "A professional session musician can play multiple instruments. They understand music theory, not just one specific guitar."
- "Similarly, professional developers understand programming concepts - not just one language's syntax."

### Key Teaching Principles for Week 2:
- **Concepts first, syntax second** - Focus on "what" and "why" before "how"
- **Compare and contrast constantly** - "Here's how JS does it... now here's Python"
- **Normalize confusion** - "Yes, it's a lot. That's normal. You're learning TWO languages."
- **Emphasize transferable skills** - "Once you understand loops, the syntax is just details"
- **Make it practical** - Real problems from day one, not toy examples

### Week 2 Success Metrics:
- ✅ Students can write basic programs in both languages
- ✅ Students understand when to use each language
- ✅ Students can debug their own code systematically
- ✅ Students embrace the learning process (not perfection)
- ✅ Students help each other learn
- ✅ Professional habits from Week 1 continue

### Teaching Challenge:
Students will feel overwhelmed. This is two languages in one week. Your job is to:
- Validate their feelings ("Yes, this is hard")
- Show the patterns ("See? Same concept, different syntax")
- Celebrate small wins ("You just wrote Python!")
- Build confidence ("You can do hard things")

---

## Monday: "Setting Up Your Instruments"
**6.5 hours**

### Schedule:
- 08:30-09:00: Daily Standup & Week 2 Kickoff
- 09:00-10:30: Programming Paradigms & REPL Exploration
- 10:30-10:45: Break
- 10:45-12:00: Node.js & Python Environment Setup
- 12:00-12:30: Lunch Break
- 12:30-14:00: First Programs in Both Languages
- 14:00-14:15: Break
- 14:15-15:15: REPL Experimentation & Interactive Coding
- 15:15-15:30: Daily Standup & Reflection

### Session 1: Daily Standup & Week 2 Kickoff (30 min)

**Standup Questions:**
- What did you work on over the weekend?
- What's one Git thing you feel confident about?
- Any blockers?

**Week 2 Introduction:**
> "Last week was your professional foundation. This week, you become programmers.
> 
> But here's what makes this program different: most bootcamps teach you ONE language. You're learning TWO. Why?
> 
> Because companies don't hire 'JavaScript developers' or 'Python developers' - they hire DEVELOPERS who can solve problems. The language is just a tool.
> 
> By the end of this week, you'll:
> - Write programs in JavaScript AND Python
> - Understand what makes each language special
> - Know which tool to reach for
> - Think like a programmer, not just a coder
> 
> Yes, it's ambitious. Yes, you can do it. Let's go."

### Session 2: Programming Paradigms & REPL Exploration (1.5 hours)

**Learning Objectives:**
- Understand what programming paradigms are
- Learn what JavaScript and Python excel at
- Explore REPL as learning tool
- Write first "Hello World" in both languages

#### What is Programming? (20 min)
Start with the big picture:

> "Programming is giving instructions to a computer. But computers are very literal - they do EXACTLY what you tell them, not what you MEANT.
> 
> Think of it like GPS directions:
> - 'Turn right' - Computer does it
> - 'Turn kinda right' - Computer crashes
> - 'Turn right at the nice house' - Computer doesn't know what 'nice' means
> 
> Programming languages are how we give these precise instructions."

#### The Two Languages (20 min)

**JavaScript:**
- **Born:** 1995
- **Created by:** Brendan Eich (in 10 days!)
- **Originally for:** Making websites interactive
- **Now used for:** Everything - frontend, backend, mobile apps
- **Known for:** Flexibility, async operations, web dominance
- **Runs on:** Browsers (Chrome, Firefox) and Node.js (server)
- **Philosophy:** "There's many ways to do it"

**Python:**
- **Born:** 1991
- **Created by:** Guido van Rossum
- **Originally for:** Scripting and automation
- **Now used for:** Data science, AI, backend, automation, everything
- **Known for:** Readable code, great for beginners, powerful libraries
- **Runs on:** Python interpreter on any computer
- **Philosophy:** "There should be one obvious way to do it"

#### Key Differences:

| JavaScript | Python |
|------------|--------|
| Uses `{}` | Uses indentation |
| Semicolons optional | No semicolons |
| `let`/`const`/`var` | Just assignment |
| `camelCase` common | `snake_case` common |
| Web-native | General-purpose |
| Async by design | Sync by default |

#### Show Real Code Examples (20 min):

**JavaScript:**
```javascript
// JavaScript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World"));
```

**Python:**
```python
# Python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

**Point out:**
- Functions declared differently
- String formatting different
- Indentation matters in Python, optional in JS
- But the LOGIC is the same!

#### REPL Introduction (30 min)

"REPL = Read-Eval-Print-Loop. It's your programming playground."

**JavaScript REPL (Node.js):**
```bash
# Start Node.js REPL
node

# Now you're in Node
> 2 + 2
4
> "Hello" + " " + "World"
'Hello World'
> let x = 10
undefined
> x * 2
20
> .exit  // or Ctrl+C twice
```

**Python REPL:**
```bash
# Start Python REPL
python3

# Now you're in Python
>>> 2 + 2
4
>>> "Hello" + " " + "World"
'Hello World'
>>> x = 10
>>> x * 2
20
>>> exit()  # or Ctrl+D
```

**Live Demo:**
- Open both REPLs side by side
- Try same operations in both
- Show similarities and differences
- Let students follow along

**Resources:**
- JavaScript MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Python Official Tutorial: https://docs.python.org/3/tutorial/
- Node.js Docs: https://nodejs.org/en/docs/
- Python vs JavaScript: https://realpython.com/python-vs-javascript/

### Break (15 min)

### Session 3: Node.js & Python Environment Setup (1.25 hours)

**Learning Objectives:**
- Install and verify Node.js
- Install and verify Python
- Understand npm and pip
- Run first script files

#### Node.js Installation (30 min)

**Check if already installed:**
```bash
node --version
npm --version
```

**Installation:**
- **Mac:** `brew install node` or download from nodejs.org
- **Windows:** Download from nodejs.org
- **Linux:** `sudo apt install nodejs npm`

**Verify installation:**
```bash
node --version  # Should see v18+ or v20+
npm --version   # Should see 9+ or 10+
```

**What is Node.js?**
> "JavaScript was born in browsers. Node.js lets JavaScript run on your computer/server. It's how we build servers, tools, APIs with JavaScript."

**What is npm?**
> "npm = Node Package Manager. It's like an app store for JavaScript code. Need to work with dates? There's a package. Need to build a server? There's a package."

#### Python Installation (30 min)

**Check if already installed:**
```bash
python3 --version
pip3 --version
```

**Installation:**
- **Mac:** Usually pre-installed, or `brew install python3`
- **Windows:** Download from python.org
- **Linux:** `sudo apt install python3 python3-pip`

**Verify installation:**
```bash
python3 --version  # Should see 3.9+ or 3.10+
pip3 --version     # Should see pip for Python 3
```

**What is pip?**
> "pip = Python Package Installer. Like npm for Python. Need to work with data? `pip install pandas`. Need to build websites? `pip install flask`."

#### Create First Script Files (25 min)

**JavaScript:**
```bash
cd ~/bootcamp/week2
mkdir day1
cd day1
touch hello.js
```

**Edit hello.js:**
```javascript
// hello.js
console.log("Hello from JavaScript!");

let name = "Developer";
console.log("Welcome, " + name);

// Basic math
let x = 10;
let y = 5;
console.log("10 + 5 =", x + y);
```

**Run it:**
```bash
node hello.js
```

**Python:**
```bash
touch hello.py
```

**Edit hello.py:**
```python
# hello.py
print("Hello from Python!")

name = "Developer"
print("Welcome, " + name)

# Basic math
x = 10
y = 5
print("10 + 5 =", x + y)
```

**Run it:**
```bash
python3 hello.py
```

### Lunch Break (30 min)

### Session 4: First Programs in Both Languages (1.5 hours)

**Learning Objectives:**
- Write complete programs in both languages
- Understand basic I/O (input/output)
- Practice syntax differences
- Build confidence

#### Activity: "About Me" Program (45 min)

Students create a program that:
1. Asks for their name
2. Asks for their age
3. Calculates birth year
4. Prints a personalized message

**Pair Programming:**
- One person writes JavaScript version
- Other person writes Python version
- Then they compare and discuss

#### Activity: Math Quiz (45 min)

Create a simple math quiz program:
1. Generate two random numbers
2. Ask user to add them
3. Check if answer is correct
4. Give feedback

### Break (15 min)

### Session 5: REPL Experimentation & Interactive Coding (1 hour)

**Guided Exploration:**
- Experiment with different data types
- Try math operations
- Test string methods
- Explore error messages
- Document findings

**Challenge: REPL Scavenger Hunt**
Give students list of things to figure out using REPL:
- How to get length of a string
- How to convert string to uppercase
- How to round a number
- How to get remainder of division

### Daily Standup & Reflection (15 min)

**Questions:**
- What's one thing you learned today?
- What's still confusing?
- What do you want to learn tomorrow?

**Deliverable:** First programs in both languages committed to Git

---

## Tuesday: Data Types, Variables, and Operators
**6.5 hours**

### Schedule:
- 08:30-09:00: Daily Standup
- 09:00-10:30: Variables & Data Types
- 10:30-10:45: Break
- 10:45-12:00: Operators (Arithmetic, Comparison, Logical)
- 12:00-12:30: Lunch Break
- 12:30-14:00: Type Conversion & Coercion
- 14:00-14:15: Break
- 14:15-15:15: Hands-on Practice & Challenges
- 15:15-15:30: Daily Standup & Reflection

### Session 1: Variables & Data Types (1.5 hours)

**JavaScript Variables:**
```javascript
// Three ways to declare variables
let age = 25;           // Can be reassigned
const name = "Alice";   // Cannot be reassigned
var oldWay = "avoid";   // Old style, avoid

// Data types
let number = 42;        // Number
let decimal = 3.14;     // Also Number
let text = "Hello";     // String
let truth = true;       // Boolean
let nothing = null;     // Null
let notDefined;         // Undefined
```

**Python Variables:**
```python
# Simple assignment
age = 25
name = "Alice"

# Data types
number = 42            # int
decimal = 3.14         # float
text = "Hello"         # str
truth = True           # bool (note capital T)
nothing = None         # None
```

**Key Differences:**
- JS needs `let`/`const`/`var`, Python doesn't
- JS has `null` and `undefined`, Python has `None`
- Python booleans are capitalized (`True`/`False`)

### Session 2: Operators (1.25 hours)

**Arithmetic Operators:**
| Operation | JavaScript | Python |
|-----------|------------|--------|
| Addition | `a + b` | `a + b` |
| Subtraction | `a - b` | `a - b` |
| Multiplication | `a * b` | `a * b` |
| Division | `a / b` | `a / b` |
| Floor Division | `Math.floor(a / b)` | `a // b` |
| Modulus | `a % b` | `a % b` |
| Exponent | `a ** b` | `a ** b` |
| Increment | `a++` | `a += 1` |

**Comparison Operators:**
| Operation | JavaScript | Python |
|-----------|------------|--------|
| Equal | `==` (loose) or `===` (strict) | `==` |
| Not Equal | `!=` or `!==` | `!=` |
| Greater | `>` | `>` |
| Less | `<` | `<` |
| Greater or Equal | `>=` | `>=` |
| Less or Equal | `<=` | `<=` |

**Logical Operators:**
| Operation | JavaScript | Python |
|-----------|------------|--------|
| AND | `&&` | `and` |
| OR | `||` | `or` |
| NOT | `!` | `not` |

### Session 3: Type Conversion & Coercion (1.5 hours)

**JavaScript (more permissive):**
```javascript
"5" + 5        // "55" (coerces to string)
"5" - 5        // 0 (coerces to number)
true + 1       // 2
"hello" * 2    // NaN
```

**Python (more strict):**
```python
"5" + 5        # Error! Can't mix types
"5" + str(5)   # "55"
int("5") + 5   # 10
True + 1       # 2
"hello" * 2    # "hellohello" (string repetition)
```

### Session 4: Hands-on Practice & Challenges (1 hour)

**Challenges:**
1. Temperature converter
2. BMI calculator
3. Tip calculator
4. Age calculator
5. Unit converter

**Deliverable:** 5 small programs in both languages

---

## Wednesday: Control Flow - Making Decisions
**6.5 hours**

### Schedule:
- 08:30-09:00: Daily Standup
- 09:00-10:30: Conditional Statements (if/else)
- 10:30-10:45: Break
- 10:45-12:00: Logical Operators & Complex Conditions
- 12:00-12:30: Lunch Break
- 12:30-14:00: Loops Part 1 (for loops)
- 14:00-14:15: Break
- 14:15-15:15: Loops Part 2 (while loops)
- 15:15-15:30: Daily Standup & Reflection

### Session 1: Conditional Statements (1.5 hours)

**JavaScript:**
```javascript
if (condition) {
    // code
} else if (otherCondition) {
    // code
} else {
    // code
}
```

**Python:**
```python
if condition:
    # code
elif other_condition:
    # code
else:
    # code
```

**Key Differences:**
- JS uses `else if`, Python uses `elif`
- JS uses `{}`, Python uses indentation
- Python requires `:` after condition

### Session 2: Logical Operators & Complex Conditions (1.25 hours)

**Truth Tables**
**Complex Conditions**
**Short-circuit Evaluation**
**Truthy/Falsy Values**

### Session 3: For Loops (1.5 hours)

**JavaScript:**
```javascript
// Classic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of loop (arrays)
for (let item of array) {
    console.log(item);
}
```

**Python:**
```python
# Range-based for loop
for i in range(5):
    print(i)

# For loop over list
for item in my_list:
    print(item)
```

### Session 4: While Loops (1 hour)

**Break and Continue**
**When to use for vs while**
**Avoiding infinite loops**

**Day 3 Homework:**
- FizzBuzz challenge
- Number guessing game
- Pattern printer
- Menu system

---

## Thursday: Functions & Scope
**6.5 hours**

### Schedule:
- 08:30-09:00: Daily Standup
- 09:00-10:30: Function Fundamentals
- 10:30-10:45: Break
- 10:45-12:00: Parameters, Arguments & Return Values
- 12:00-12:30: Lunch Break
- 12:30-14:00: Scope (Global vs Local)
- 14:00-14:15: Break
- 14:15-15:15: Arrow Functions (JS) & Lambda (Python)
- 15:15-15:30: Daily Standup & Reflection

### Session 1: Function Fundamentals (1.5 hours)

**Why Functions?**
- DRY principle (Don't Repeat Yourself)
- Organize code
- Reusability
- Abstraction

**JavaScript:**
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

**Python:**
```python
# Function definition
def greet(name):
    return f"Hello, {name}!"
```

### Session 2: Parameters, Arguments & Return Values (1.25 hours)

**Default Parameters**
**Keyword Arguments (Python)**
**Multiple Return Values**
**Variable Scope in Functions**

### Session 3: Scope (1.5 hours)

**Global Scope**
**Local Scope**
**Variable Shadowing**
**Scope Chain**
**Best Practices**

### Session 4: Advanced Function Patterns (1 hour)

**JavaScript Arrow Functions:**
```javascript
const add = (a, b) => a + b;
const square = x => x * x;
```

**Python Lambda Functions:**
```python
add = lambda a, b: a + b
square = lambda x: x * x
```

**Day 4 Homework:**
- Build utility function library
- Temperature converter
- Password validator
- Calculator with functions

---

## Friday: Testing & Week Review
**4 hours**

### Schedule:
- 08:30-09:00: Daily Standup & Week Reflection
- 09:00-10:00: Introduction to Testing
- 10:00-10:15: Break
- 10:15-11:30: Week 2 Integration Challenge
- 11:30-12:00: Sprint Review & Presentations
- 12:00-12:30: Sprint Retrospective

### Session 1: Introduction to Testing (1 hour)

**Why Test Code?**
- Catch bugs early
- Confidence in changes
- Documentation
- Professional practice

**Manual vs Automated Testing**
**Writing Simple Tests**
**Test-Driven Thinking**

### Session 2: Week Integration Challenge (1.25 hours)

**Complete dual-language challenge:**
- Solve 10 problems in both JS and Python
- Document differences
- Peer code review

### Session 3: Sprint Review & Retrospective (1 hour)

**Present Solutions**
**Demonstrate Learning**
**What Went Well**
**What to Improve**
**Prepare for Week 3**

---

## Week 2 Resources Library

### JavaScript Learning
- JavaScript.info: https://javascript.info/
- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- Eloquent JavaScript: https://eloquentjavascript.net/

### Python Learning
- Python Official Tutorial: https://docs.python.org/3/tutorial/
- Real Python: https://realpython.com/
- Python for Beginners: https://www.python.org/about/gettingstarted/

### Practice Problems
- Codewars: https://www.codewars.com/
- LeetCode (Easy): https://leetcode.com/
- HackerRank: https://www.hackerrank.com/
- Exercism: https://exercism.org/

### Testing
- Jest Documentation: https://jestjs.io/
- Pytest Documentation: https://docs.pytest.org/

---

## Week 2 Assignment: Dual-Language Programming Fundamentals

**Due: Friday 5 PM | 100 points**

### 1. Variable & Data Type Exercises (15 points)
- Create programs demonstrating all data types
- Type conversion examples
- Comparison of JS vs Python behavior

### 2. Control Flow Programs (20 points)
- Age classifier
- Grade calculator
- Day of week advisor
- All in both languages

### 3. Loop Challenges (20 points)
- FizzBuzz (1-100)
- Pattern printer (pyramids, diamonds)
- Multiplication table generator
- Prime number finder

### 4. Function Library (25 points)
Create utility libraries with:
- Math functions (factorial, fibonacci, isPrime)
- String functions (reverse, palindrome, titleCase)
- Validation functions (email, password, phone)
- Conversion functions (temperature, currency, units)

### 5. Integration Project (15 points)
Build one of:
- Simple calculator
- Number guessing game
- Todo list (console version)
- Text-based adventure game

### 6. Code Documentation (5 points)
- README explaining each program
- Comments in code
- Side-by-side comparison document

**Blog Post (Optional Bonus: +10 points)**
- "Learning Two Languages at Once: My Experience"
- Share challenges and insights

---

## Week 2 Assessment Rubric

### Programming Fundamentals (40%)
- Can write basic programs in both languages
- Understands variables, types, operators
- Uses control flow appropriately
- Writes functions effectively

### Code Quality (20%)
- Clean, readable code
- Appropriate comments
- Good naming conventions
- Consistent style

### Dual-Language Competency (25%)
- Completes assignments in both languages
- Understands differences
- Makes intelligent comparisons
- Can justify language choices

### Professional Practices (15%)
- Git commits for all work
- Helps classmates
- Participates in code review
- Attends standup/retrospective
- Completes homework on time

---

## Common Week 2 Issues & Solutions

### Issue: "Which language should I focus on?"
**Solution:**
- Answer: Both equally
- The concepts are what matter
- Syntax is just details
- Knowing both makes you more valuable

### Issue: Syntax confusion between languages
**Solution:**
- Create side-by-side reference sheet
- Practice translating between languages
- Use REPL to test syntax
- Compare code snippets constantly

### Issue: "I don't understand functions"
**Solution:**
- Use real-world analogies (recipes, machines)
- Start with simple examples
- Build complexity gradually
- Practice writing many small functions

### Issue: Feeling overwhelmed
**Solution:**
- Normal for Week 2!
- Validate feelings
- Show progress: "Look what you built!"
- Break into smaller pieces
- Encourage peer support

### Issue: Off-by-one errors in loops
**Solution:**
- Very common!
- Teach debugging technique
- Use print/console.log to trace
- Understand range differences (0-based vs 1-based)

---

## Week 2 Success Indicators

By end of Week 2, students should:
- ✅ Write basic programs in both languages without reference
- ✅ Understand when to use each control structure
- ✅ Create and use functions
- ✅ Debug their own code systematically
- ✅ Read and understand code written by others
- ✅ Explain code decisions
- ✅ Use Git for all work
- ✅ Help classmates
- ✅ Feel competent (not expert, but competent)
- ✅ Be excited to learn more

**Most Important:** Students should think "I'm a programmer now" not "I'm learning to code."

---

## Files Referenced

- `week2_python_examples.ipynb` - All Python code examples with comments
- `week2_javascript_examples.js` - All JavaScript code examples with comments
- Practice exercises for each day
- Code challenge templates

---

## Teaching Philosophy Recap

### The Dual-Language Advantage

> "You're not learning JavaScript and Python. You're learning PROGRAMMING using JavaScript and Python."

This distinction is crucial. By Week 2 end, students should:
- See patterns across languages
- Understand concepts transcend syntax
- Make informed language choices
- Feel confident in their ability to learn new languages

### Week 2 as Transformation

**Week 1:** Tool users  
**Week 2:** Programmers  
**Week 3+:** Professional developers

Week 2 is where the transformation happens. It's hard, it's overwhelming, and it's supposed to be. Your job is to make them feel capable even when they're confused.

### Practice Over Perfection

By end of Week 2, students will have written:
- 20+ complete programs
- 100+ lines of code in each language
- Dozens of functions
- Multiple program types

That's the goal. Not perfect code, but practiced code. Not bug-free, but debugged. Not polished, but progressing.

---

## Remember

Week 2 is where students transform from "tool users" to "programmers." It's the hardest week of the program. They'll feel overwhelmed. That's expected. Your job is to normalize the struggle while celebrating the progress.

> "Yes, this is hard. Look how much you've learned in just two weeks. You started with nothing. Now you can make a computer do what you want in TWO languages. That's incredible."

---

**Digital Campus Vorarlberg | Feldkirch, Austria**  
**Next Cohort: February 17, 2025**