# Week 3 Overview: "Understanding Data Architecture"
## Database & Data Fundamentals

**Duration: 30 hours**
**Dates: March 3-7, 2025**

---

## Week Overview

Week 3 introduces students to data architecture fundamentals, bridging the gap between programming and real-world data storage. Students learn about different data types, SQL and NoSQL databases, and how applications consume and work with data.

### Key Focus Areas:
- Data architecture fundamentals
- SQL databases (tables, relationships, queries)
- NoSQL concepts (documents, key-value stores)
- Data modeling and schema design
- Real-world data formats (JSON, CSV, API responses)

### Week 3 Success Metrics:
- ✅ Students understand different data storage approaches
- ✅ Students can write basic SQL queries
- ✅ Students understand NoSQL concepts
- ✅ Students can design simple database schemas
- ✅ Students understand how applications consume data

---

## Daily Schedule

### Monday: Data Architecture Fundamentals
**6.5 hours**
- What is data architecture?
- Data types and why they matter
- Structured vs unstructured data
- Where data lives (files, databases, APIs)
- Real-world data scenarios

### Tuesday: Introduction to SQL Databases
**6.5 hours**
- What is a relational database?
- Tables, rows, and columns
- Primary keys and foreign keys
- Basic SQL queries (SELECT, WHERE, ORDER BY)
- Using online SQL sandboxes (SQLFiddle, DB Fiddle)

### Wednesday: Introduction to NoSQL Concepts
**6.5 hours**
- What is NoSQL?
- Document databases (MongoDB concepts)
- Key-value stores (Redis concepts)
- When to use SQL vs NoSQL
- Trade-offs in database selection

### Thursday: Data Modeling Fundamentals
**6.5 hours**
- Entity-relationship diagrams
- Designing schemas for real applications
- Normalization basics (avoiding data duplication)
- Relationships: one-to-one, one-to-many, many-to-many
- Planning before building

### Friday: Data in Real Applications
**4 hours**
- API responses and JSON
- CSV files and spreadsheets
- How web applications consume data
- Data validation and cleaning
- Sprint Review: Present schema designs

---

## Learning Objectives

By the end of Week 3, students will be able to:

1. **Data Architecture**
   - Explain what data architecture means
   - Identify different data storage types
   - Understand when to use different approaches
   - Make informed decisions about data storage

2. **SQL Databases**
   - Describe relational database structure
   - Write basic SELECT queries
   - Understand table relationships
   - Use online SQL tools

3. **NoSQL Concepts**
   - Explain NoSQL use cases
   - Understand document databases
   - Understand key-value stores
   - Compare SQL and NoSQL

4. **Data Modeling**
   - Design database schemas
   - Create entity-relationship diagrams
   - Apply normalization principles
   - Plan data structure for applications

5. **Data Formats**
   - Work with JSON data
   - Understand CSV structure
   - Parse API responses
   - Convert between data formats

---

## Key Concepts

### Data Architecture
- Structured data
- Unstructured data
- Data types and constraints
- Data integrity
- Scalability considerations

### SQL (Relational Databases)
- Tables (entities)
- Rows (records)
- Columns (attributes)
- Primary keys
- Foreign keys
- Relationships
- Queries (SELECT, WHERE, ORDER BY, LIMIT)

### NoSQL
- Document databases
- Key-value stores
- Schema flexibility
- Horizontal scaling
- Use cases

### Data Modeling
- Entity-relationship diagrams
- One-to-one relationships
- One-to-many relationships
- Many-to-many relationships
- Normalization
- Denormalization trade-offs

### Data Formats
- JSON (JavaScript Object Notation)
- CSV (Comma-Separated Values)
- XML
- API responses
- Data validation

---

## Deliverables

### Weekly Assignment: Data Architecture Foundation Project (100 points)

1. **Database Schema Design** (30 points)
   - Design schema for e-commerce site, blog, or task manager
   - Create entity-relationship diagram
   - Identify tables and relationships
   - Document design decisions
   - **Tools**: Draw.io, Lucidchart, or pen and paper

2. **SQL Queries** (25 points)
   - Using online SQL sandbox (SQLFiddle or DB Fiddle)
   - Write 15 queries demonstrating:
     - SELECT with WHERE clauses
     - ORDER BY and LIMIT
     - Multiple table queries
     - Aggregate functions (COUNT, SUM, AVG)
   - Document what each query does

3. **JSON Data Structures** (25 points)
   - Create JSON representing:
     - User profile with nested data
     - Product catalog
     - Blog posts with comments
   - Write JavaScript/Python to parse JSON
   - Convert between JSON and other formats

4. **Trade-Offs Documentation** (10 points)
   - Compare SQL vs NoSQL for 3 scenarios
   - Document when to use each approach
   - Justify recommendations

5. **Presentation** (10 points)
   - Present schema design with reasoning
   - Explain design decisions
   - Answer questions about trade-offs

---

## Resources

### SQL Learning
- [SQLBolt](https://sqlbolt.com/) - Interactive SQL tutorial
- [SQL Fiddle](http://sqlfiddle.com/) - Online SQL sandbox
- [DB Fiddle](https://www.db-fiddle.com/) - Modern SQL playground
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)

### NoSQL Resources
- [MongoDB University](https://university.mongodb.com/) - Free courses
- [Redis Documentation](https://redis.io/documentation)
- [NoSQL Explained](https://www.mongodb.com/nosql-explained)

### Data Modeling
- [Database Design Tutorial](https://www.lucidchart.com/pages/database-diagram/database-design)
- [Draw.io](https://app.diagrams.net/) - Free diagramming tool
- [Database Normalization Explained](https://www.guru99.com/database-normalization.html)

### Data Formats
- [JSON.org](https://www.json.org/) - JSON specification
- [JSON Formatter](https://jsonformatter.org/) - Validate and format JSON
- [CSV to JSON Converter](https://csvjson.com/)

---

## Code Examples

### Working with JSON in JavaScript
```javascript
// JSON data structure
const user = {
    id: 1,
    name: "Maria Schmidt",
    email: "maria@example.com",
    address: {
        street: "Hauptstraße 10",
        city: "Feldkirch",
        country: "Austria"
    },
    orders: [
        { id: 101, total: 49.99, date: "2025-03-01" },
        { id: 102, total: 89.50, date: "2025-03-05" }
    ]
};

// Converting to JSON string
const jsonString = JSON.stringify(user, null, 2);
console.log(jsonString);

// Parsing JSON string
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Maria Schmidt"

// Accessing nested data
console.log(user.address.city); // "Feldkirch"
console.log(user.orders[0].total); // 49.99
```

### Working with JSON in Python
```python
import json

# Python dictionary (similar to JSON)
user = {
    "id": 1,
    "name": "Maria Schmidt",
    "email": "maria@example.com",
    "address": {
        "street": "Hauptstraße 10",
        "city": "Feldkirch",
        "country": "Austria"
    },
    "orders": [
        {"id": 101, "total": 49.99, "date": "2025-03-01"},
        {"id": 102, "total": 89.50, "date": "2025-03-05"}
    ]
}

# Converting to JSON string
json_string = json.dumps(user, indent=2)
print(json_string)

# Parsing JSON string
parsed_user = json.loads(json_string)
print(parsed_user["name"])  # "Maria Schmidt"

# Accessing nested data
print(user["address"]["city"])  # "Feldkirch"
print(user["orders"][0]["total"])  # 49.99
```

### Basic SQL Queries
```sql
-- Create a users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    created_at DATE
);

-- Insert data
INSERT INTO users (id, name, email, created_at)
VALUES (1, 'Maria Schmidt', 'maria@example.com', '2025-03-01');

-- Select all users
SELECT * FROM users;

-- Select with condition
SELECT name, email 
FROM users 
WHERE created_at >= '2025-03-01';

-- Order results
SELECT * FROM users 
ORDER BY name ASC;

-- Limit results
SELECT * FROM users 
LIMIT 10;

-- Count records
SELECT COUNT(*) FROM users;
```

### Entity-Relationship Example
```
E-Commerce Schema:

USERS
- id (PK)
- name
- email
- created_at

PRODUCTS
- id (PK)
- name
- price
- stock
- category

ORDERS
- id (PK)
- user_id (FK -> USERS)
- total
- status
- created_at

ORDER_ITEMS
- id (PK)
- order_id (FK -> ORDERS)
- product_id (FK -> PRODUCTS)
- quantity
- price

Relationships:
- One user can have many orders (1:N)
- One order can have many order_items (1:N)
- One product can be in many order_items (1:N)
```

---

## Project Ideas

Choose one for your assignment:

### Beginner: Library System
- Tables: Books, Members, Loans
- Track book borrowing
- Basic relationships

### Intermediate: E-Commerce Store
- Tables: Users, Products, Orders, OrderItems
- Shopping cart functionality
- Order history

### Advanced: Social Media Platform
- Tables: Users, Posts, Comments, Likes, Followers
- Complex relationships
- User interactions

---

## Notes for Instructor

- **Emphasize**: Data architecture is fundamental to all applications
- Use real-world examples students can relate to (online shopping, social media)
- Show how Excel/Google Sheets relate to database tables
- Demonstrate SQL queries live with online tools (no installation needed)
- Keep NoSQL concepts high-level - detailed implementation comes later
- Focus on design thinking, not memorizing SQL syntax
- Encourage students to sketch schemas on paper first
- Show bad schema designs and discuss problems
- Discuss data privacy and security considerations
- Connect to previous week's data types and structures
- Prepare for next week's practical implementation with CSV/JSON
- **Important**: Students won't write database code yet - focus on understanding concepts
- Use DB Fiddle or SQLFiddle so students can practice without setup
- Show real API responses from public APIs (weather, GitHub, etc.)

---

## Weekly Success Indicators

Students are on track if they can:
- Explain when to use SQL vs NoSQL
- Draw a schema for a simple application
- Write basic SELECT queries with WHERE clauses
- Understand what JSON is and why it's used
- Read and create entity-relationship diagrams
- Ask good questions about data design trade-offs

---

## Connection to Other Weeks

- **Week 2**: Built on data types and variables
- **Week 4**: Will implement data processing with CSV/JSON
- **Week 7**: Will connect frontend to backend APIs
- **Week 10**: Will write tests for data operations
- **Week 12**: Will use PostgreSQL and ORMs
- **Week 14**: Will explore advanced database types

The "Two Instruments" philosophy continues - students see how both JavaScript and Python work with the same data formats (JSON, CSV), preparing them for full-stack development.