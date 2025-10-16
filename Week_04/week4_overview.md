# Week 4 Overview: "Data Structures & Storage"
## Connecting Code to Data - Arrays, Objects, and Databases

**Duration: 30 hours**
**Dates: March 10-14, 2025**
**Month 1 Sprint Review & Retrospective**

---

## Week Overview

Week 4 connects programming concepts to real data by working with arrays/lists, objects/dictionaries, CSV files, and JSON. Students build practical skills processing data and understand how spreadsheets relate to databases. This week culminates in the Month 1 Integration Project.

### Key Focus Areas:
- Arrays (JS) vs Lists (Python) - methods, iteration, comprehensions
- Objects (JS) vs Dictionaries (Python) - key-value data
- Excel as database metaphor
- CSV file processing
- JSON structured data
- Algorithm basics (searching, sorting, filtering)

### Week 4 Success Metrics:
- ✅ Students manipulate arrays/lists effectively in both languages
- ✅ Students work with objects/dictionaries in both languages
- ✅ Students read and write CSV and JSON files
- ✅ Students implement basic algorithms (search, sort, filter)
- ✅ Students complete Month 1 Integration Project

---

## Daily Schedule

### Monday: Arrays (JS) vs Lists (Python)
**6.5 hours**
- Array/List creation and access
- Common methods: push, pop, slice, splice, append, extend
- Iteration: for, forEach, map, filter
- List comprehensions in Python
- Relation to spreadsheet columns

### Tuesday: Objects (JS) vs Dictionaries (Python)
**6.5 hours**
- Key-value pairs
- Creating and accessing properties
- Nested structures
- Excel as database metaphor (rows as objects)
- CSV processing basics

### Wednesday: JSON Structured Data
**6.5 hours**
- What is JSON?
- Reading and writing JSON files
- Converting CSV to JSON
- Working with nested JSON
- API data structures

### Thursday: Relational Database Concepts & Basic SQL
**6.5 hours**
- Excel sheets as database tables
- Primary and foreign keys
- Basic SQL queries (continuation from Week 3)
- Simulating database operations in code
- Data relationships

### Friday: Algorithm Basics & Month 1 Sprint Review
**4 hours**
- Searching data (linear search)
- Sorting data (built-in and custom)
- Filtering and aggregating
- **Sprint Review**: Project presentations
- **Retrospective**: Month 1 reflection

---

## Learning Objectives

By the end of Week 4, students will be able to:

1. **Arrays/Lists Mastery**
   - Create and manipulate arrays/lists in both languages
   - Use array methods effectively
   - Iterate with different approaches
   - Write list comprehensions (Python)

2. **Objects/Dictionaries**
   - Work with key-value data structures
   - Access and modify nested structures
   - Represent real-world entities as objects
   - Compare approaches in both languages

3. **Data Processing**
   - Read and write CSV files
   - Read and write JSON files
   - Convert between CSV and JSON
   - Process real-world data files

4. **Database Concepts**
   - Simulate JOIN operations in code
   - Understand relationships between data entities
   - Apply SQL concepts programmatically
   - Connect spreadsheet thinking to databases

5. **Algorithms**
   - Search through data collections
   - Sort data by different criteria
   - Filter data based on conditions
   - Aggregate data (sum, average, count)

---

## Key Concepts

### Arrays/Lists
- Zero-based indexing
- Mutability
- Methods: map, filter, reduce, forEach
- List comprehensions (Python)
- Spread operator (JS) / Unpacking (Python)

### Objects/Dictionaries
- Key-value pairs
- Property access (dot vs bracket notation)
- Nested objects
- Object methods
- JSON compatibility

### CSV (Comma-Separated Values)
- File format structure
- Reading CSV files
- Writing CSV files
- Headers and data rows
- Libraries: `csv` (Python), parsing in JS

### JSON (JavaScript Object Notation)
- Data interchange format
- JSON.parse() and JSON.stringify() (JS)
- json.loads() and json.dumps() (Python)
- Pretty printing
- Data validation

### Basic Algorithms
- Linear search
- Sorting (ascending/descending)
- Filtering with conditions
- Aggregation functions
- Data transformation

---

## Deliverables

### Weekly Assignment: Data Management System - Excel to Code (100 points)

This is the **Month 1 Integration Project** combining all skills learned:

1. **Excel Workbook Creation** (15 points)
   - Create Excel file with 3 related sheets (e.g., Customers, Orders, Products)
   - At least 10 rows per sheet
   - Include relationships (customer_id, product_id, etc.)
   - Export each sheet as CSV

2. **Data Processing Application in JavaScript** (25 points)
   - Read all 3 CSV files
   - Implement filtering (find specific records)
   - Implement sorting (by different fields)
   - Implement aggregation (totals, averages)
   - Simulate JOIN operation (combine related data)
   - Convert data to JSON format

3. **Data Processing Application in Python** (25 points)
   - Same functionality as JavaScript version
   - Compare approaches between languages
   - Document differences in implementation

4. **Advanced Features** (20 points)
   - Search functionality
   - Data validation (check for errors)
   - Summary reports (statistics)
   - Export results to JSON and CSV

5. **Professional Presentation** (15 points)
   - Technical blog post documenting project
   - Professional Git workflow (branches, commits, PRs)
   - README with clear instructions
   - Code comments and documentation
   - Sprint Review presentation

---

## Resources

### JavaScript
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Node.js fs module](https://nodejs.org/api/fs.html) - File system operations

### Python
- [Lists](https://docs.python.org/3/tutorial/datastructures.html)
- [Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
- [CSV module](https://docs.python.org/3/library/csv.html)
- [JSON module](https://docs.python.org/3/library/json.html)

### Tools
- [CSV to JSON Converter](https://csvjson.com/) - Online tool
- [JSON Formatter](https://jsonformatter.org/)

---

## Code Examples

### Reading CSV in JavaScript (Node.js)
```javascript
const fs = require('fs');

// Simple CSV parsing
function readCSV(filename) {
    const data = fs.readFileSync(filename, 'utf-8');
    const lines = data.trim().split('\n');
    const headers = lines[0].split(',');
    
    const records = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const record = {};
        headers.forEach((header, index) => {
            record[header] = values[index];
        });
        records.push(record);
    }
    
    return records;
}

// Usage
const customers = readCSV('customers.csv');
console.log(customers);
```

### Reading CSV in Python
```python
import csv

def read_csv(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        return list(reader)

# Usage
customers = read_csv('customers.csv')
print(customers)
```

### Converting CSV to JSON in JavaScript
```javascript
const fs = require('fs');

function csvToJson(csvFile, jsonFile) {
    const customers = readCSV(csvFile);
    const jsonData = JSON.stringify(customers, null, 2);
    fs.writeFileSync(jsonFile, jsonData);
    console.log(`Converted ${csvFile} to ${jsonFile}`);
}

csvToJson('customers.csv', 'customers.json');
```

### Converting CSV to JSON in Python
```python
import csv
import json

def csv_to_json(csv_file, json_file):
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        data = list(reader)
    
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    
    print(f"Converted {csv_file} to {json_file}")

csv_to_json('customers.csv', 'customers.json')
```

### Simulating SQL JOIN in JavaScript
```javascript
// Customers data
const customers = [
    { id: 1, name: 'Maria Schmidt', city: 'Feldkirch' },
    { id: 2, name: 'Hans Müller', city: 'Dornbirn' }
];

// Orders data
const orders = [
    { id: 101, customer_id: 1, total: 99.99, date: '2025-03-10' },
    { id: 102, customer_id: 1, total: 149.50, date: '2025-03-11' },
    { id: 103, customer_id: 2, total: 75.00, date: '2025-03-12' }
];

// JOIN operation - combine customer with their orders
function joinCustomerOrders(customers, orders) {
    return customers.map(customer => {
        const customerOrders = orders.filter(
            order => order.customer_id === customer.id
        );
        return {
            ...customer,
            orders: customerOrders,
            total_orders: customerOrders.length,
            total_spent: customerOrders.reduce((sum, order) => sum + order.total, 0)
        };
    });
}

const result = joinCustomerOrders(customers, orders);
console.log(JSON.stringify(result, null, 2));
```

### Simulating SQL JOIN in Python
```python
# Customers data
customers = [
    {'id': 1, 'name': 'Maria Schmidt', 'city': 'Feldkirch'},
    {'id': 2, 'name': 'Hans Müller', 'city': 'Dornbirn'}
]

# Orders data
orders = [
    {'id': 101, 'customer_id': 1, 'total': 99.99, 'date': '2025-03-10'},
    {'id': 102, 'customer_id': 1, 'total': 149.50, 'date': '2025-03-11'},
    {'id': 103, 'customer_id': 2, 'total': 75.00, 'date': '2025-03-12'}
]

# JOIN operation
def join_customer_orders(customers, orders):
    result = []
    for customer in customers:
        customer_orders = [o for o in orders if o['customer_id'] == customer['id']]
        result.append({
            **customer,
            'orders': customer_orders,
            'total_orders': len(customer_orders),
            'total_spent': sum(o['total'] for o in customer_orders)
        })
    return result

result = join_customer_orders(customers, orders)
import json
print(json.dumps(result, indent=2))
```

### Filtering and Sorting
```javascript
// JavaScript
const products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'Desk', price: 299, category: 'Furniture' },
    { name: 'Mouse', price: 29, category: 'Electronics' },
    { name: 'Chair', price: 199, category: 'Furniture' }
];

// Filter by category
const electronics = products.filter(p => p.category === 'Electronics');

// Sort by price
const sortedByPrice = products.sort((a, b) => a.price - b.price);

// Find expensive items
const expensive = products.filter(p => p.price > 200);
```

```python
# Python
products = [
    {'name': 'Laptop', 'price': 999, 'category': 'Electronics'},
    {'name': 'Desk', 'price': 299, 'category': 'Furniture'},
    {'name': 'Mouse', 'price': 29, 'category': 'Electronics'},
    {'name': 'Chair', 'price': 199, 'category': 'Furniture'}
]

# Filter by category
electronics = [p for p in products if p['category'] == 'Electronics']

# Sort by price
sorted_by_price = sorted(products, key=lambda p: p['price'])

# Find expensive items
expensive = [p for p in products if p['price'] > 200]
```

---

## Month 1 Integration Checklist

Your project should demonstrate:
- ✅ Professional Git workflow (branches, commits, meaningful messages)
- ✅ Both JavaScript AND Python implementations
- ✅ CSV file reading and writing
- ✅ JSON file reading and writing
- ✅ Data filtering and searching
- ✅ Data sorting
- ✅ Data aggregation (sum, average, count)
- ✅ Simulated JOIN operations
- ✅ Error handling
- ✅ Clear code comments
- ✅ Professional README with setup instructions
- ✅ Technical blog post documenting process
- ✅ Presentation-ready demo

---

## Sprint Review Format (Friday)

Each student presents (5-7 minutes):
1. Demo of working application
2. Show code in both languages
3. Explain one technical challenge and solution
4. Show Git commit history
5. Answer questions

**What instructors look for:**
- Does it work?
- Can student explain their code?
- Did they use both languages effectively?
- Is the code readable and well-organized?
- Did they follow Git best practices?

---

## Notes for Instructor

- **This is Month 1 Integration** - Students should demonstrate everything learned
- Emphasize Excel-to-database thinking (prepare for real databases)
- Show how CSV is just tables in text format
- Demonstrate live CSV/JSON conversion
- Compare JavaScript and Python approaches side-by-side
- Highlight when one language is easier than the other
- Ensure students understand JOIN concept before real SQL
- Friday Sprint Review is important - practice presentations
- Conduct proper Retrospective (What went well? What to improve?)
- Celebrate progress - students went from zero to data processing in 4 weeks!
- Use real datasets (download from Kaggle, data.gov, etc.)
- Show debugging techniques for data processing
- Discuss data cleaning and validation
- Connect to Week 3's database concepts
- Prepare students for web development starting Week 5

---

## Common Challenges & Solutions

**Challenge**: CSV parsing with commas in values
**Solution**: Use proper CSV libraries or handle quoted values

**Challenge**: Large files causing memory issues
**Solution**: Process line by line instead of loading all at once

**Challenge**: Different date formats
**Solution**: Standardize date formats early

**Challenge**: Missing or invalid data
**Solution**: Implement validation and default values

---

## Connection to Future Weeks

- **Week 5-6**: Will build web UIs to display this data
- **Week 7**: Will create APIs serving this data
- **Week 9**: Will handle async data loading
- **Week 12**: Will replace CSV/JSON with real PostgreSQL databases
- **Week 14**: Will explore different database types for different data

The "Two Instruments" philosophy shines this week - students build the same data processing system in both languages, understanding that data concepts transcend language syntax.