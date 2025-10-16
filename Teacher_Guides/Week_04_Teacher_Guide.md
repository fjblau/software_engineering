# Week 4 Teacher's Guide: Data Structures & Storage
## Arrays, Objects, CSV/JSON Processing, Algorithms & Month 1 Integration

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** March 10-14, 2025  
**Focus:** Arrays/Lists, Objects/Dictionaries, File I/O, Basic Algorithms, Month 1 Capstone Project

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

Week 4 is **critical bridge week** connecting abstract data concepts from Week 3 to real programming work. Students stop thinking about databases in isolation and start **processing data in applications**. This week culminates in the **Month 1 Integration Project**—a comprehensive capstone demonstrating mastery of all concepts from Weeks 1-4.

### Week 4 as Integration Point

> "Week 4 proves students can work with real data: reading it, processing it, storing it, analyzing it. This is what programming actually is."

This week emphasizes:
- **Arrays/Lists as fundamental data containers** - every program manages collections
- **Objects/Dictionaries as real-world entity representation** - how code models actual things
- **Files as data persistence** - CSV and JSON bridge spreadsheets and databases
- **Algorithms as data manipulation** - searching, sorting, filtering are universal patterns
- **Integration across languages** - proving the "two instruments" philosophy works
- **Professional project delivery** - Git workflow, documentation, presentations

### Week 4 Success Metrics

✅ Students manipulate arrays/lists fluently in both languages  
✅ Students work with nested objects/dictionaries effectively  
✅ Students read/write CSV and JSON files  
✅ Students implement search, sort, filter algorithms  
✅ Students simulate database operations in code  
✅ Students complete Month 1 Integration Project professionally  
✅ Students present technical work confidently  

### Key Teaching Points

- **Arrays are for collections, Objects for records** - clarify the distinction
- **CSV = spreadsheet thinking, JSON = code thinking** - show the relationship
- **Algorithms exist independent of language** - focus on logic, not syntax
- **Files matter** - data must persist; introduce concepts carefully
- **Projects are portfolio pieces** - emphasize quality and professionalism
- **Month 1 review** - celebrate progress, identify continued gaps

---

## Learning Objectives

By the end of Week 4, students will be able to:

### Arrays/Lists Mastery
- Create and access arrays/lists using indexing
- Use mutating methods (push/pop/append, splice/insert)
- Use non-mutating methods (slice, includes, indexOf)
- Iterate with forEach and for loops
- Transform arrays with map, filter, reduce
- Implement list comprehensions (Python)
- Understand zero-based indexing and bounds checking

### Objects/Dictionaries
- Create and access key-value structures
- Modify and add properties
- Understand nested structures
- Access nested data with dot and bracket notation
- Iterate through keys and values
- Compare object/dictionary approaches between languages
- Represent real-world entities as objects

### File I/O & Data Formats
- Read CSV files programmatically
- Parse CSV into arrays of objects
- Write CSV files from data
- Read JSON files
- Parse JSON and access nested structure
- Generate JSON from data
- Convert between CSV and JSON

### Basic Algorithms
- Implement linear search
- Understand and implement sorting (built-in and custom)
- Filter data based on conditions
- Aggregate data (sum, count, average)
- Combine multiple operations

### Database Concepts in Code
- Simulate JOIN operations programmatically
- Understand and implement filtering
- Work with related data across multiple arrays
- Apply normalization concepts to data models

### Professional Practices
- Use Git for version control with meaningful commits
- Write clear, commented code
- Document code and projects
- Present technical work
- Reflect on learning and growth

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Test all file I/O examples in Node.js and Python
2. ✅ Prepare sample CSV files for demos
3. ✅ Test JSON parsing with real API responses
4. ✅ Create Month 1 project template repository
5. ✅ Prepare Git workflow refresh materials
6. ✅ Create algorithm visualization slides
7. ✅ Prepare presentation rubric for project reviews
8. ✅ Download month 1 retrospective questions

**Classroom Setup:**
- Test file system access (creating/reading/writing files)
- Verify all students can commit to Git
- Prepare presentation area for sprints
- Have sample datasets ready for practice
- Create project template repositories on GitHub

### Student Pre-Requisites (Send Friday Before Week 4)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 3 requirements (databases, ER diagrams)
- [ ] Git workflow refreshed (clone, branch, commit, push)
- [ ] Node.js and Python working with file I/O
- [ ] GitHub account and SSH keys configured
- [ ] One sample CSV file created
- [ ] Understanding of spreadsheet-to-database mapping

**Verification Commands (Send to Students):**
```bash
# JavaScript file I/O test
node -e "const fs = require('fs'); console.log(fs.readdirSync('.'))"

# Python file I/O test
python3 -c "import os; print(os.listdir('.'))"

# Git verification
git --version && git config user.name
```

### Software & Tool Requirements

| Tool | Purpose | Version | Notes |
|------|---------|---------|-------|
| Node.js | JavaScript | 18+ LTS | From Week 2 |
| Python | Data processing | 3.8+ | From Week 2 |
| Git | Version control | 2.30+ | From Week 1 |
| VS Code | Editor | Latest | From Week 1 |
| GitHub | Repository hosting | - | Student accounts |
| fs module | File system (JS) | Built-in | Node.js standard |
| csv module | CSV parsing (Python) | Standard | Built-in to Python |

---

## Daily Schedule & Topics

### MONDAY: Arrays/Lists Mastery (6.5 hours)

**Learning Goals:**
- Master array/list creation and manipulation
- Understand indexing and bounds
- Use common array methods
- Iterate effectively
- Transform data with map/filter/reduce

**9:00 - 9:30 | Week 4 Overview & Month 1 Reflection (30 min)**
- Recap Weeks 1-3
- Introduce Month 1 Integration Project
- Show project examples
- Explain Week 4 as bridge to professional coding

**9:30 - 10:45 | Arrays: Creation, Indexing & Access (75 min)**

*Teaching Strategy:* Hands-on progressive exploration

**Topics:**

```
Arrays/Lists Fundamentals:
- Array = ordered collection of elements
- Zero-based indexing: first element at index 0
- Common mistake: confusing index with position
- Arrays can hold mixed types (not recommended for production)

JavaScript Arrays:
const fruits = ['Apple', 'Banana', 'Cherry'];
fruits[0]              // 'Apple'
fruits.length          // 3
fruits[fruits.length-1] // 'Cherry' (last element)

Python Lists:
fruits = ['Apple', 'Banana', 'Cherry']
fruits[0]              # 'Apple'
len(fruits)            # 3
fruits[-1]             # 'Cherry' (last element)
fruits[-2]             # 'Banana' (second from end)

Key Difference:
- Python has negative indexing (-1 = last)
- JavaScript must calculate from length
```

**Live Demo - Array Access:**

```javascript
// JavaScript
const numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);        // 10
console.log(numbers[2]);        // 30
console.log(numbers[numbers.length-1]); // 50
console.log(numbers[10]);       // undefined (out of bounds!)
```

```python
# Python
numbers = [10, 20, 30, 40, 50]
print(numbers[0])              # 10
print(numbers[2])              # 30
print(numbers[-1])             # 50
print(numbers[10])             # IndexError (crashes!)
```

**Student Activity - Array Basics (30 min):**
1. Create arrays of different types
2. Practice accessing elements
3. Find out-of-bounds behavior
4. Calculate accessing last element
5. Compare language differences

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Array Methods: Mutating Operations (60 min)**

*Teaching Strategy:* Systematic method exploration

**Topics:**

```
Mutating Methods (change original array):

Push: Add to end
- JavaScript: array.push(item)
- Python: array.append(item)
- Returns: new length (JS) or None (Python)

Pop: Remove from end
- Both: array.pop()
- Returns: removed element

Unshift/Insert: Add to beginning
- JavaScript: array.unshift(item)
- Python: array.insert(0, item)

Splice/Remove: Remove/insert anywhere
- JavaScript: array.splice(start, deleteCount, items...)
- Python: array[start:end] = [...] or .remove()

Non-Mutating Alternatives:
- Don't modify original
- Create new array instead
- Better for functional programming
```

**Live Demo - Mutating Methods:**

```javascript
// JavaScript
let stack = [];
stack.push('A');        // ['A']
stack.push('B', 'C');   // ['A', 'B', 'C']
stack.pop();            // removed: 'C', array: ['A', 'B']
stack.unshift('Z');     // ['Z', 'A', 'B']

// Splice: remove 2 starting at index 1, insert 'X'
let colors = ['R', 'G', 'B', 'Y'];
colors.splice(1, 2, 'X');  // ['R', 'X', 'Y']
```

```python
# Python
stack = []
stack.append('A')           # ['A']
stack.extend(['B', 'C'])    # ['A', 'B', 'C']
stack.pop()                 # removed: 'C', list: ['A', 'B']
stack.insert(0, 'Z')        # ['Z', 'A', 'B']

# Slicing for manipulation
colors = ['R', 'G', 'B', 'Y']
colors[1:3] = ['X']         # ['R', 'X', 'Y']
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Array Iteration & Transformation (75 min)**

*Teaching Strategy:* Progressive pattern building

**Topics:**

```
Iteration Patterns:

For Loop:
- Basic iteration over indices
- Full control
- Can modify array during iteration (careful!)

forEach:
- Functional style
- Execute function for each element
- No return value

map:
- Transform each element
- Returns new array
- Common: multiply numbers, extract properties, format strings

filter:
- Keep elements matching condition
- Returns new array with subset
- Common: find even numbers, filter by property value

reduce:
- Combine all elements into single value
- Accumulator pattern
- Common: sum, product, find max, build object
```

**Live Demo - Iteration Methods:**

```javascript
// JavaScript
const scores = [85, 92, 78, 95, 88];

// forEach - do something for each
scores.forEach(score => console.log(`Score: ${score}`));

// map - transform each element
const doubled = scores.map(s => s * 2);  // [170, 184, 156, 190, 176]
const passes = scores.map(s => s >= 80); // [true, true, false, true, true]

// filter - keep elements matching condition
const high = scores.filter(s => s >= 90);  // [92, 95]

// reduce - combine to single value
const total = scores.reduce((sum, s) => sum + s, 0);  // 438
const avg = total / scores.length;  // 87.6
```

```python
# Python
scores = [85, 92, 78, 95, 88]

# for loop - traditional iteration
for score in scores:
    print(f"Score: {score}")

# List comprehensions - transform
doubled = [s * 2 for s in scores]      # [170, 184, ...]
passes = [s >= 80 for s in scores]     # [True, True, False, ...]

# List comprehensions with filter
high = [s for s in scores if s >= 90]  # [92, 95]

# sum/max/min built-ins (or loop)
total = sum(scores)                    # 438
avg = total / len(scores)              # 87.6
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Hands-On Array Practice (75 min)**

*Teaching Strategy:* Progressive challenges

**Student Activities:**

1. **Array Manipulation Challenges:**
   - Create array of 10 numbers
   - Find elements > 50
   - Double all elements
   - Find sum and average
   - Find max/min without built-in
   - Reverse array

2. **Real-World Data:**
   - Array of student grades → find average
   - Array of prices → apply 20% discount
   - Array of ages → count adults
   - Array of names → filter by length

3. **Combination Challenges:**
   - Map and then filter
   - Filter and then reduce
   - Transform nested arrays

**3:45 - 4:00 | Wrap-up (15 min)**

---

### TUESDAY: Objects/Dictionaries & Spreadsheet Thinking (6.5 hours)

**Learning Goals:**
- Understand objects/dictionaries as entity representation
- Work with nested structures
- Connect to database row concept
- Process spreadsheet data
- Understand CSV structure

**9:00 - 9:30 | Objects as Data Models (30 min)**
- Objects represent things: users, products, orders
- Properties represent characteristics
- Key-value pairs match database columns

**9:30 - 10:45 | Objects/Dictionaries Fundamentals (75 min)**

*Teaching Strategy:* Entity modeling approach

**Topics:**

```
Objects/Dictionaries Concepts:

Object = Collection of related properties
- Properties = key-value pairs
- Key = property name
- Value = data

JavaScript:
const user = {
  id: 1,
  name: 'Maria Schmidt',
  email: 'maria@example.com',
  age: 28,
  city: 'Vienna'
};

Accessing:
user.id              // dot notation
user['email']        // bracket notation
user.age             // 28

Modifying:
user.age = 29
user.country = 'Austria'  // add new property

Python:
user = {
  'id': 1,
  'name': 'Maria Schmidt',
  'email': 'maria@example.com',
  'age': 28,
  'city': 'Vienna'
}

Accessing:
user['id']           # bracket notation only
user.get('age')      # safer get method

Modifying:
user['age'] = 29
user['country'] = 'Austria'

Connection to Database:
Each object = one row in database table
Each property = one column
Objects in array = multiple rows
```

**Live Demo - Objects vs Spreadsheets:**

Show side-by-side:

```
Spreadsheet (Excel):
| id | name | email | age | city |
| 1 | Maria Schmidt | maria@... | 28 | Vienna |
| 2 | Juan Garcia | juan@... | 32 | Barcelona |

Code (Objects in Array):
[
  { id: 1, name: 'Maria Schmidt', email: 'maria@...', age: 28, city: 'Vienna' },
  { id: 2, name: 'Juan Garcia', email: 'juan@...', age: 32, city: 'Barcelona' }
]

They're the same data, different format!
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Nested Objects & CSV Introduction (60 min)**

*Teaching Strategy:* Structure progression

**Topics:**

```
Nested Objects (Objects within Objects):

Address as nested object:
const user = {
  id: 1,
  name: 'Maria',
  address: {
    street: 'Main St',
    city: 'Vienna',
    country: 'Austria'
  }
};

Access: user.address.city  // 'Vienna'

Arrays of Objects (Spreadsheet rows):
const users = [
  { id: 1, name: 'Maria', age: 28 },
  { id: 2, name: 'Juan', age: 32 },
  { id: 3, name: 'Yuki', age: 26 }
];

This represents:
| id | name | age |
| 1 | Maria | 28 |
| 2 | Juan | 32 |
| 3 | Yuki | 26 |

CSV (Comma-Separated Values):
- Simplest data format
- Headers in first row
- Data in subsequent rows
- Comma-delimited
- No nested structures
- Universal exchange format

Example CSV:
id,name,age
1,Maria,28
2,Juan,32
3,Yuki,26

Problem: What if value contains comma?
"Schmidt, Maria",28
Needs quoting and escaping
```

**Live Demo - Simple CSV Parsing:**

```javascript
// JavaScript - simple CSV parse
function parseCSV(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',');
  
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const record = {};
    headers.forEach((header, index) => {
      record[header] = values[index];
    });
    data.push(record);
  }
  return data;
}

const csv = `id,name,age
1,Maria,28
2,Juan,32`;

const data = parseCSV(csv);
console.log(data);
// [
//   { id: '1', name: 'Maria', age: '28' },
//   { id: '2', name: 'Juan', age: '32' }
// ]
```

```python
# Python - simple CSV parse
import csv
from io import StringIO

csv_string = """id,name,age
1,Maria,28
2,Juan,32"""

data = list(csv.DictReader(StringIO(csv_string)))
print(data)
# [
#   {'id': '1', 'name': 'Maria', 'age': '28'},
#   {'id': '2', 'name': 'Juan', 'age': '32'}
# ]
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Reading/Writing CSV Files (75 min)**

*Teaching Strategy:* File I/O introduction

**Live Demo - File Operations:**

```javascript
// JavaScript - read and write CSV
const fs = require('fs');

// Read CSV file
function readCSV(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',');
  
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const record = {};
    headers.forEach((header, index) => {
      record[header] = values[index];
    });
    data.push(record);
  }
  return data;
}

// Write CSV file
function writeCSV(filename, data) {
  if (data.length === 0) return;
  
  const headers = Object.keys(data[0]);
  let csv = headers.join(',') + '\n';
  
  data.forEach(record => {
    const values = headers.map(header => record[header]);
    csv += values.join(',') + '\n';
  });
  
  fs.writeFileSync(filename, csv);
}

// Usage
const students = readCSV('students.csv');
students.forEach(s => console.log(s.name));

// Modify and save
students[0].grade = 'A';
writeCSV('students_updated.csv', students);
```

```python
# Python - read and write CSV
import csv

def read_csv(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        return list(reader)

def write_csv(filename, data):
    if not data:
        return
    
    fieldnames = data[0].keys()
    
    with open(filename, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)

# Usage
students = read_csv('students.csv')
for s in students:
    print(s['name'])

# Modify and save
students[0]['grade'] = 'A'
write_csv('students_updated.csv', students)
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | CSV Practice Activity (75 min)**

*Teaching Strategy:* Guided hands-on

**Student Activities:**

1. **Create Sample Data:**
   - Design a simple entity (customers, products, books)
   - List properties needed
   - Create 5-10 sample records

2. **File Operations:**
   - Write data to CSV file
   - Read CSV file back
   - Verify data matches
   - Modify some records
   - Save modified version

3. **Data Processing:**
   - Read CSV file
   - Find records matching criteria
   - Calculate statistics
   - Write filtered results

**3:45 - 4:00 | Wrap-up (15 min)**

---

### WEDNESDAY: JSON Processing (6.5 hours)

**Learning Goals:**
- Master JSON structure and parsing
- Read/write JSON files
- Convert between CSV and JSON
- Work with API responses
- Handle nested JSON structures

**9:00 - 9:30 | JSON Deep Dive (30 min)**
- JSON structure review
- Difference between CSV and JSON
- When to use each format
- Real API examples

**9:30 - 10:45 | JSON File Operations (75 min)**

*Teaching Strategy:* Format comparison

**Topics:**

```
JSON vs CSV Comparison:

CSV (Simple, flat):
id,name,email,created
1,Maria,maria@...,2025-03-01

JSON (Structured, nested):
{
  "id": 1,
  "name": "Maria",
  "email": "maria@...",
  "created": "2025-03-01",
  "address": {
    "street": "Main St",
    "city": "Vienna"
  },
  "orders": [
    {"id": 101, "total": 99.99}
  ]
}

CSV Advantages:
- Simple, universal
- Easy to edit in Excel
- Smaller file size
- Good for flat data

JSON Advantages:
- Supports nesting
- Supports arrays
- Self-documenting
- Type information (strings, numbers, booleans)
- Perfect for APIs

Reading JSON:
1. Load file as text
2. Parse to objects
3. Access like regular objects

Writing JSON:
1. Create objects in code
2. Convert to JSON string
3. Save to file
```

**Live Demo - JSON File I/O:**

```javascript
// JavaScript
const fs = require('fs');

// Read JSON file
function readJSON(filename) {
  const data = fs.readFileSync(filename, 'utf-8');
  return JSON.parse(data);
}

// Write JSON file
function writeJSON(filename, data) {
  const jsonString = JSON.stringify(data, null, 2);
  fs.writeFileSync(filename, jsonString);
}

// Usage
const users = [
  {
    id: 1,
    name: 'Maria',
    email: 'maria@example.com',
    orders: [
      { id: 101, total: 99.99 },
      { id: 102, total: 49.99 }
    ]
  },
  {
    id: 2,
    name: 'Juan',
    email: 'juan@example.com',
    orders: []
  }
];

writeJSON('users.json', users);
const loaded = readJSON('users.json');
console.log(loaded[0].name);  // Maria
console.log(loaded[0].orders[0].total);  // 99.99
```

```python
# Python
import json

def read_json(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def write_json(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

# Usage
users = [
    {
        'id': 1,
        'name': 'Maria',
        'email': 'maria@example.com',
        'orders': [
            {'id': 101, 'total': 99.99},
            {'id': 102, 'total': 49.99}
        ]
    },
    {
        'id': 2,
        'name': 'Juan',
        'email': 'juan@example.com',
        'orders': []
    }
]

write_json('users.json', users)
loaded = read_json('users.json')
print(loaded[0]['name'])  # Maria
print(loaded[0]['orders'][0]['total'])  # 99.99
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | CSV to JSON Conversion (60 min)**

*Teaching Strategy:* Practical data transformation

**Live Demo - Converting Formats:**

```javascript
// CSV to JSON
function csvToJson(csvFile, jsonFile) {
  // Read CSV
  const csv = fs.readFileSync(csvFile, 'utf-8');
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  
  // Convert to objects
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const record = {};
    headers.forEach((header, index) => {
      record[header] = values[index];
    });
    data.push(record);
  }
  
  // Write JSON
  writeJSON(jsonFile, data);
  console.log(`Converted ${csvFile} to ${jsonFile}`);
}

// Usage
csvToJson('students.csv', 'students.json');
```

```python
# CSV to JSON
def csv_to_json(csv_file, json_file):
    data = read_csv(csv_file)
    write_json(json_file, data)
    print(f"Converted {csv_file} to {json_file}")

# Usage
csv_to_json('students.csv', 'students.json')
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Data Transformation & Querying (75 min)**

*Teaching Strategy:* Real-world scenarios

**Examples:**

```
Scenario 1: Filter high-value customers

Input CSV:
id,name,total_spent
1,Maria,5000
2,Juan,1200
3,Yuki,8000

Process:
- Read CSV
- Filter where total_spent > 2000
- Write to new JSON

Output:
[
  { id: 1, name: Maria, total_spent: 5000 },
  { id: 3, name: Yuki, total_spent: 8000 }
]
```

**Live Demo - Complex Transformation:**

```javascript
// Read CSV, process, write JSON
function processOrderData(csvFile, jsonFile) {
  const orders = readCSV(csvFile);
  
  // Convert string amounts to numbers
  const processed = orders.map(order => ({
    ...order,
    amount: parseFloat(order.amount),
    date: new Date(order.date)
  }));
  
  // Filter high orders
  const highValue = processed.filter(o => o.amount > 500);
  
  // Add summary
  const result = {
    total_orders: processed.length,
    high_value_orders: highValue.length,
    total_revenue: processed.reduce((sum, o) => sum + o.amount, 0),
    orders: highValue
  };
  
  writeJSON(jsonFile, result);
}
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | File Operations Practice (75 min)**

*Teaching Strategy:* Hands-on projects

**Student Activities:**

1. **CSV Processing:**
   - Create sample CSV (10+ rows)
   - Read and display
   - Calculate statistics
   - Export filtered results

2. **JSON Creation:**
   - Create nested JSON structure
   - Write to file
   - Read back and verify
   - Transform and re-save

3. **Format Conversion:**
   - Convert sample CSV to JSON
   - Convert JSON back to CSV
   - Verify data integrity

**3:45 - 4:00 | Wrap-up (15 min)**

---

### THURSDAY: Algorithms & Database Operations (6.5 hours)

**Learning Goals:**
- Implement fundamental algorithms
- Understand algorithm complexity (intuitive)
- Simulate database operations
- Work with relational data
- Optimize queries

**9:00 - 9:30 | Algorithm Thinking (30 min)**
- What's an algorithm?
- Algorithms independent of language
- Searching, sorting, filtering patterns
- Performance considerations

**9:30 - 10:45 | Searching & Sorting (75 min)**

*Teaching Strategy:* Progressive complexity

**Topics:**

```
Linear Search (Simple):
- Start at beginning
- Check each element
- Return when found or not found
- Time: O(n) - slow for large data
- Use: small datasets, unsorted data

Binary Search (Fast):
- Requires sorted data
- Check middle element
- Divide search space in half each time
- Time: O(log n) - much faster
- Use: large sorted datasets

Sorting:
- Many algorithms: bubble, merge, quick, etc.
- Most languages have built-in sort
- Built-in is optimized; use it
- Sort key: what property to sort by

Stable Sort:
- Maintains relative order of equal elements
- Important for multi-level sorting
- Most modern sorts are stable
```

**Live Demo - Searching:**

```javascript
// Linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

const nums = [10, 20, 30, 40, 50];
console.log(linearSearch(nums, 30));  // 2
console.log(linearSearch(nums, 99));  // -1

// Searching in objects
function findUser(users, email) {
  return users.find(u => u.email === email);
}

const users = [
  { id: 1, name: 'Maria', email: 'maria@example.com' },
  { id: 2, name: 'Juan', email: 'juan@example.com' }
];

const found = findUser(users, 'maria@example.com');
console.log(found.name);  // Maria
```

```python
# Linear search
def linear_search(array, target):
    for i, value in enumerate(array):
        if value == target:
            return i
    return -1

# Searching in objects (dicts)
def find_user(users, email):
    for user in users:
        if user['email'] == email:
            return user
    return None

# Or use list comprehension
users_found = [u for u in users if u['email'] == email]
user = users_found[0] if users_found else None
```

**Live Demo - Sorting:**

```javascript
// Sort numbers ascending
const numbers = [40, 10, 30, 20, 50];
numbers.sort((a, b) => a - b);  // [10, 20, 30, 40, 50]

// Sort objects by property
const users = [
  { name: 'Maria', age: 28 },
  { name: 'Juan', age: 32 },
  { name: 'Yuki', age: 26 }
];

users.sort((a, b) => a.age - b.age);
// [Yuki(26), Maria(28), Juan(32)]

// Sort strings
const names = ['Maria', 'Juan', 'Yuki'];
names.sort();  // ['Juan', 'Maria', 'Yuki']
```

```python
# Sort numbers
numbers = [40, 10, 30, 20, 50]
sorted_nums = sorted(numbers)  # [10, 20, 30, 40, 50]

# Sort objects (dicts) by property
users = [
    {'name': 'Maria', 'age': 28},
    {'name': 'Juan', 'age': 32},
    {'name': 'Yuki', 'age': 26}
]

sorted_by_age = sorted(users, key=lambda u: u['age'])
# [Yuki(26), Maria(28), Juan(32)]

# Sort strings
names = ['Maria', 'Juan', 'Yuki']
names.sort()  # ['Juan', 'Maria', 'Yuki']
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | JOIN Operations & Relational Data (60 min)**

*Teaching Strategy:* Database concepts in code

**Topics:**

```
JOIN in Code (simulating SQL):

Data structures:
customers = [
  {id: 1, name: 'Maria'},
  {id: 2, name: 'Juan'}
]

orders = [
  {id: 101, customer_id: 1, total: 99.99},
  {id: 102, customer_id: 1, total: 149.99},
  {id: 103, customer_id: 2, total: 75.00}
]

Goal: For each customer, show their orders

SQL:
SELECT c.name, o.id, o.total
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id

Code (map pattern):
customers.map(customer => ({
  name: customer.name,
  orders: orders.filter(o => o.customer_id === customer.id)
}))

Result:
[
  { name: 'Maria', orders: [order101, order102] },
  { name: 'Juan', orders: [order103] }
]
```

**Live Demo - JOIN Simulation:**

```javascript
// INNER JOIN - only customers with orders
function innerJoin(customers, orders) {
  return customers
    .filter(c => orders.some(o => o.customer_id === c.id))
    .map(c => ({
      ...c,
      orders: orders.filter(o => o.customer_id === c.id)
    }));
}

// LEFT JOIN - all customers, with or without orders
function leftJoin(customers, orders) {
  return customers.map(c => ({
    ...c,
    orders: orders.filter(o => o.customer_id === c.id)
  }));
}

const customers = [
  { id: 1, name: 'Maria' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Yuki' }
];

const orders = [
  { id: 101, customer_id: 1, total: 99.99 },
  { id: 102, customer_id: 1, total: 149.99 },
  { id: 103, customer_id: 2, total: 75.00 }
];

console.log(innerJoin(customers, orders));  // 2 customers (Maria, Juan)
console.log(leftJoin(customers, orders));   // 3 customers (all)
```

```python
# INNER JOIN - only customers with orders
def inner_join(customers, orders):
    result = []
    for c in customers:
        customer_orders = [o for o in orders if o['customer_id'] == c['id']]
        if customer_orders:  # Only if has orders
            result.append({
                **c,
                'orders': customer_orders
            })
    return result

# LEFT JOIN - all customers
def left_join(customers, orders):
    result = []
    for c in customers:
        customer_orders = [o for o in orders if o['customer_id'] == c['id']]
        result.append({
            **c,
            'orders': customer_orders
        })
    return result
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Algorithm Challenges (75 min)**

*Teaching Strategy:* Progressive practice

**Challenges:**

1. **Search & Filter:**
   - Find user by email
   - Filter products by price range
   - Count records matching criteria

2. **Sort & Order:**
   - Sort users by name
   - Sort products by price
   - Multi-level sort

3. **Join & Aggregate:**
   - Combine customer and order data
   - Calculate customer total spent
   - Find most popular product

4. **Real-World Scenarios:**
   - Find duplicate emails
   - Calculate statistics
   - Group by category

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Month 1 Project Work Time (75 min)**

*Teaching Strategy:* Guided project time

Students begin integrating all concepts into Month 1 project:
- Set up repository with proper Git workflow
- Create sample CSV files
- Implement read/parse functionality
- Start building algorithms
- Create output JSON

**3:45 - 4:00 | Daily Wrap-up (15 min)**

---

### FRIDAY: Month 1 Integration Capstone (4 hours)

**Learning Goals:**
- Complete comprehensive Month 1 project
- Present technical work professionally
- Reflect on learning and growth
- Plan for Month 2

**9:00 - 9:15 | Project Review & Presentation Prep (15 min)**
- Last-minute code fixes
- Prepare presentation slides/demo
- Practice elevator pitch

**9:15 - 12:00 | Sprint Reviews & Presentations (165 min)**

*Teaching Strategy:* Professional presentation format

Each student/group presents (10-12 min):
1. Project overview (what problem does it solve?)
2. Technical approach (technologies used)
3. Live demo or walkthrough
4. Code highlights
5. Challenges faced and solutions
6. What you learned

Feedback from peers and instructor:
- What worked well?
- What was challenging?
- What would you improve?
- What's next?

**12:00 - 12:30 | Month 1 Retrospective (30 min)**

*Teaching Strategy:* Structured reflection

**Reflection Questions:**
1. In one word, how would you describe Month 1?
2. What concept surprised you most?
3. What skill improved the most?
4. What still feels shaky?
5. How confident are you as a programmer now vs Week 1?
6. What do you want to focus on in Month 2?

---

## Assignments & Deliverables

### Week 4 Assignment: Month 1 Integration Project (100 points)

This is the **capstone project** for Month 1, integrating all skills from Weeks 1-4.

#### Project Requirements

**Choose ONE of three scenarios:**

**Scenario A: E-Commerce Inventory System**
- Products with categories and prices
- Customer orders and order history
- Basic analytics (top products, total revenue)

**Scenario B: Student Grade Management**
- Students with personal info
- Courses and grades
- Calculate GPA, class statistics
- Generate reports

**Scenario C: Library Book System**
- Books with metadata (author, ISBN, genre)
- Members and checkout history
- Search and filtering
- Overdue notifications

#### Deliverables

**1. Data Files (15 points)**
- Create 3+ related CSV files (minimum 10 rows each)
- Create Excel workbook with same data
- Export sheets to CSV format
- Document data structure

**2. JavaScript Implementation (30 points)**
- Read all CSV files
- Create data objects/arrays
- Implement 5+ operations:
  - Search/filter functionality
  - Sorting capabilities
  - Aggregation (totals, averages, counts)
  - Simulate JOIN operations
  - Generate summary statistics
- Convert data to JSON
- Write output to files
- Handle errors gracefully
- All code commented

**3. Python Implementation (30 points)**
- Same functionality as JavaScript
- Different implementation approach
- Document language-specific decisions
- Compare performance if applicable

**4. Professional Presentation (15 points)**
- Technical blog post (500+ words)
- Clear README with setup instructions
- Professional Git history (meaningful commits)
- Code review by peer
- Live presentation to class
- Ability to answer technical questions

**5. Reflection Document (10 points)**
- What was hardest?
- What was easiest?
- What did you learn most?
- What would you do differently?
- How does this connect to real-world programming?

#### Grading Breakdown:
- Data files quality: 15 points
- JavaScript functionality: 30 points
- Python functionality: 30 points
- Presentation & documentation: 15 points
- Reflection: 10 points
- **Total: 100 points**

#### Bonus Opportunities (+10 points each, max +20):
- Advanced analytics or reporting
- User-friendly interface/menu system
- Performance optimization with large datasets
- Professional error handling

---

## Resource Materials

### Week 4 Quick References

**Array/List Methods Cheat Sheet**

JavaScript:
```javascript
push()     // add end
pop()      // remove end
map()      // transform
filter()   // keep matching
reduce()   // combine
forEach()  // iterate
sort()     // reorder
```

Python:
```python
append()   # add end
pop()      # remove end
extend()   # add multiple
map()      # (use list comp)
filter()   # (use list comp)
sum()      # total
sorted()   # reorder
```

**Object/Dictionary Methods**

JavaScript:
```javascript
Object.keys(obj)      // get all property names
Object.values(obj)    // get all values
Object.entries(obj)   // get [key, value] pairs
```

Python:
```python
obj.keys()      # get all keys
obj.values()    # get all values
obj.items()     # get (key, value) tuples
```

**File I/O Pattern**

JavaScript:
```javascript
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf-8');
fs.writeFileSync('file.txt', data);
```

Python:
```python
with open('file.txt', 'r') as f:
    data = f.read()
with open('file.txt', 'w') as f:
    f.write(data)
```

---

## Assessment Rubric

### Novice (0-60%): Developing Skills
- CSV reading has errors
- Algorithms incomplete or incorrect
- Limited file operations
- Presentation unclear
- Code poorly documented
- Basic understanding but execution lacking

### Developing (61-80%): Approaching Competency
- CSV operations work with minor issues
- Algorithms work but not optimized
- File I/O functional
- Presentation covers main points
- Some code comments
- Good effort, some technical gaps

### Proficient (81-95%): Meets Standards
- All CSV operations work smoothly
- Correct algorithm implementations
- Robust file handling
- Clear presentation
- Well-commented code
- Professional quality

### Advanced (96-100%): Exceeds Standards
- Elegant, optimized implementations
- Handles edge cases
- Excellent error handling
- Engaging presentation
- Professional code and documentation
- Goes beyond requirements

---

## Troubleshooting Guide

| Issue | Solution |
|-------|----------|
| CSV parsing fails on commas in values | Use proper CSV library (csv module in Python, third-party in JS) or quote values |
| File not found error | Verify file path is correct, file exists, and working directory is right |
| Array index out of bounds | Check array length before accessing, use safe access methods |
| JSON parse error | Validate JSON format, check for unquoted keys, ensure no trailing commas |
| JOIN operation produces duplicates | Debug filtering logic, verify foreign key relationships |
| Sorting doesn't work as expected | Ensure comparison function is correct, check data types |
| Performance is slow | Use console.time() / time module to measure, optimize algorithms |
| Git conflicts | Communicate with team, resolve conflicts carefully, test after merge |

---

## Teaching Tips

**For Maximum Engagement:**
- Show real-world applications using these concepts
- Have students process actual datasets
- Make projects portfolio-worthy
- Celebrate Month 1 progress

**Common Mistakes to Avoid:**
- ❌ Letting students use placeholder data instead of real data
- ✅ Use realistic datasets (10+ rows minimum)

- ❌ Skipping error handling in project
- ✅ Teach try/catch and graceful errors

- ❌ Accepting code without comments
- ✅ Require clear, professional documentation

---

## Next Steps (Month 2 Preview)

Week 5: Client-Side Development (HTML/CSS/DOM)
- Students will create web interfaces for Month 1 projects
- Display data beautifully
- Add interactive features

This week is perfect foundation for web development!
