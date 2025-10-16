# Week 3 Teacher's Guide: Understanding Data Architecture
## Database & Data Fundamentals - SQL, NoSQL & Data Modeling

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** March 3-7, 2025  
**Focus:** Data Architecture Fundamentals, Relational & NoSQL Databases, Data Modeling, JSON/CSV Formats

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

Week 3 transforms students from thinking about individual data types to understanding **data architecture**—how information is organized, stored, and accessed in real applications. Students bridge programming and persistent data storage, learning that every application needs to answer: "Where does the data live, and how do we work with it?"

### Why Data Architecture Matters

> "Your code is temporary. Your data is forever. Great developers think about data architecture first, then write code around it."

This week emphasizes:
- **Data is central to every application** - before writing code, understand your data structure
- **Different tools for different jobs** - SQL vs NoSQL isn't about "better," it's about fit
- **Design before implementation** - sketching schemas saves thousands of lines of code later
- **Real-world thinking** - JSON, CSV, APIs are how data actually moves through systems
- **Normalization and efficiency** - bad schema design compounds problems exponentially

### Week 3 Success Metrics

✅ Students can explain SQL vs NoSQL trade-offs  
✅ Students design database schemas from requirements  
✅ Students write basic SQL queries with WHERE, ORDER BY, aggregation  
✅ Students work with JSON and understand nested data  
✅ Students read and interpret entity-relationship diagrams  
✅ Students understand primary and foreign keys  
✅ Students apply normalization principles  
✅ Students complete comprehensive data architecture project

### Key Teaching Points

- **Start with real examples** - Use applications students know (Instagram, Amazon, Airbnb)
- **Schema-first mindset** - This week is about design thinking, not SQL syntax memorization
- **Use no-setup tools** - SQLFiddle and DB Fiddle require no installation; students get immediate feedback
- **Emphasize relationships** - The power of databases is connecting data across tables
- **Show bad examples** - Discuss why flat spreadsheets become unmaintainable
- **Connect to real APIs** - Show students how JSON from Twitter/GitHub/weather APIs maps to database concepts
- **Normalize but pragmatically** - Teach principles, not rules; context matters

---

## Learning Objectives

By the end of Week 3, students will be able to:

### Data Architecture Fundamentals
- Explain what data architecture means and why it matters
- Distinguish between structured, semi-structured, and unstructured data
- Identify appropriate data storage solutions for different scenarios
- Understand scalability and performance implications of design choices
- Apply data integrity principles

### SQL Databases (Relational Models)
- Describe relational database structure (tables, rows, columns)
- Explain primary keys, foreign keys, and relationships
- Write SELECT queries with WHERE, ORDER BY, LIMIT
- Use aggregate functions (COUNT, SUM, AVG, MIN, MAX)
- Understand JOIN operations for multi-table queries
- Design schemas avoiding redundancy

### NoSQL Concepts
- Explain document-oriented databases (MongoDB concepts)
- Understand key-value stores (Redis concepts)
- Compare ACID vs BASE consistency models
- Identify scenarios where NoSQL is preferred
- Understand horizontal scalability

### Data Modeling
- Create entity-relationship (ER) diagrams
- Design normalized schemas
- Identify one-to-one, one-to-many, many-to-many relationships
- Apply normalization rules (1NF, 2NF, 3NF concepts)
- Make denormalization trade-off decisions
- Document design decisions

### Data Formats & Interchange
- Work with JSON (nested objects and arrays)
- Understand CSV structure and limitations
- Parse JSON in both JavaScript and Python
- Convert between data formats
- Validate data structure
- Work with API response data

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Verify online SQL tools work (SQLFiddle, DB Fiddle, SQLBolt)
2. ✅ Prepare live demo repository with schema examples
3. ✅ Test JSON and CSV parsing in both JavaScript and Python
4. ✅ Create sample ER diagrams for reference
5. ✅ Prepare real API response examples (GitHub, weather, etc.)
6. ✅ Create comparison table: SQL vs NoSQL scenarios
7. ✅ Prepare whiteboard/digital drawing setup for schema design

**Classroom Setup:**
- Ensure students can access external websites (SQLFiddle, DB Fiddle, Draw.io)
- Have backup offline schema tools ready (or printed examples)
- Test projector for showing ER diagrams
- Prepare database design templates

### Student Pre-Requisites (Send Friday Before Week 3)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 2 requirements (JavaScript, Python, Node.js, pip)
- [ ] Free accounts created at:
  - [ ] SQLFiddle (http://sqlfiddle.com/)
  - [ ] DB Fiddle (https://www.db-fiddle.com/)
  - [ ] Draw.io (https://app.diagrams.net/)
- [ ] Optional: Jupyter Notebook for Python examples
- [ ] Basic understanding that databases store relational data

**Verification Command (Send to Students):**
```bash
# Test JSON parsing in JavaScript
node -e "console.log(JSON.stringify({test: 'data'}))"

# Test JSON parsing in Python
python3 -c "import json; print(json.dumps({'test': 'data'}))"

# Send screenshots to instructor
```

### Software & Tool Requirements

| Tool | Purpose | Access | Notes |
|------|---------|--------|-------|
| SQLFiddle | SQL practice | http://sqlfiddle.com | No installation needed |
| DB Fiddle | SQL sandbox | https://www.db-fiddle.com | Modern interface |
| Draw.io | ER diagrams | https://app.diagrams.net | Free, online |
| SQLBolt | SQL tutorial | https://sqlbolt.com | Interactive lessons |
| Node.js | JSON parsing | Local | From Week 2 |
| Python 3 | JSON parsing | Local | From Week 2 |
| VS Code | Editing | Local | From Week 1 |
| Git | Version control | Local | From Week 1 |

---

## Daily Schedule & Topics

### MONDAY: Data Architecture Fundamentals (6.5 hours)

**Learning Goals:**
- Understand data architecture as discipline
- Explore structured vs unstructured data
- Learn where data "lives" in real applications
- Understand scaling and performance considerations
- See real-world data scenarios

**9:00 - 9:30 | Daily Standup & Week Overview (30 min)**
- Recap Week 2 programming fundamentals
- Set context: code processes data; data is foundation
- Explain "data architecture" as discipline
- Preview schema design, SQL, and database concepts

**9:30 - 10:30 | What is Data Architecture? (60 min)**

*Teaching Strategy:* Story-driven presentation with real examples

**Topics to Cover:**

```
Data Architecture Defined:
- How information is organized, stored, accessed in systems
- Decisions made BEFORE writing code
- Impacts performance, scalability, maintainability
- Every app is really a "data application"

Real-World Scenarios:
- Instagram: Billions of photos, users, likes, comments
- Amazon: Products, inventory, orders, customers
- Twitter: Users, tweets, followers, hashtags, trending
- Spotify: Songs, artists, playlists, user preferences

Data Types:
- Structured data: tables, databases (clearly defined schema)
- Semi-structured: JSON, XML (flexible but organized)
- Unstructured: files, images, videos (no predefined format)

Where Data Lives:
- Relational databases (SQL): structured, relationships, transactions
- NoSQL databases: documents, key-value stores, flexible
- File systems: JSON, CSV, plain text
- Data lakes: massive unstructured repositories
- APIs: data accessed through web services
- Caches: fast temporary storage (Redis)

Key Concept: Normalization
- Organize data to minimize redundancy
- Update once, propagate everywhere
- Prevent data anomalies

Scalability:
- Vertical: bigger server (limited)
- Horizontal: more servers (needed for massive scale)
- Database choice affects scalability strategy
```

**Live Demo - Real API Responses:**
Show on screen:

```json
// GitHub API response for a user
{
  "login": "maria-dev",
  "id": 12345,
  "name": "Maria Schmidt",
  "avatar_url": "https://...",
  "followers": 42,
  "public_repos": 18,
  "created_at": "2018-03-15T10:30:00Z"
}

// This is semi-structured data; maps to relational structure:
// USERS table: login, id, name, avatar_url, followers, public_repos, created_at
```

**Discussion Points:**
- What's redundant here? What should be separate tables?
- How would you design the schema for GitHub?
- What relationships exist between users, repos, followers?

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Databases: Relational (SQL) (60 min)**

*Teaching Strategy:* Concept-first, then live SQL demos

**Topics:**

```
What is a Relational Database?
- Tables represent entities (Users, Products, Orders)
- Rows = individual records
- Columns = attributes with types
- Relationships connect tables through keys

Core Concepts:
- Primary Key (PK): Unique identifier for each row
- Foreign Key (FK): Reference to another table's primary key
- Constraints: Rules that maintain data integrity
- Data Types: INTEGER, VARCHAR, DATE, BOOLEAN, etc.

Example: E-Commerce Structure

USERS table:
| id (PK) | name | email | created_at |
| 1 | Maria | maria@... | 2025-03-01 |
| 2 | Juan | juan@... | 2025-03-02 |

PRODUCTS table:
| id (PK) | name | price | stock |
| 1 | Laptop | 999.99 | 15 |
| 2 | Mouse | 29.99 | 0 |

ORDERS table:
| id (PK) | user_id (FK) | total | created_at |
| 101 | 1 | 1029.98 | 2025-03-05 |
| 102 | 1 | 29.99 | 2025-03-06 |

Relationships:
- One user (id=1) has many orders
- user_id in ORDERS references id in USERS
- Data consistency: if user_id=999 doesn't exist in USERS, reject it
```

**Live Demo - SQL Basics with DB Fiddle:**

Show students:
```sql
-- Create a simple users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER,
    created_at DATE
);

-- Insert sample data
INSERT INTO users (name, email, age, created_at) VALUES
('Maria Schmidt', 'maria@example.com', 28, '2025-03-01'),
('Juan Garcia', 'juan@example.com', 32, '2025-03-02'),
('Yuki Tanaka', 'yuki@example.com', 26, '2025-03-03');

-- Query examples
SELECT * FROM users;  -- Show all
SELECT name, email FROM users;  -- Show specific columns
SELECT * FROM users WHERE age > 27;  -- Filter with WHERE
SELECT * FROM users ORDER BY name ASC;  -- Sort
SELECT COUNT(*) FROM users;  -- Count records
```

**Live coding process:**
1. Go to DB Fiddle (https://www.db-fiddle.com/)
2. Paste CREATE TABLE statement
3. Execute
4. Paste INSERT statements
5. Show results
6. Try various SELECT queries
7. Show students they can modify and re-run

**11:45 - 12:00 | BREAK/SETUP (15 min)**

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Introduction to NoSQL (75 min)**

*Teaching Strategy:* Comparison and contrast

**Topics:**

```
What is NoSQL?
- "Not Only SQL" — multiple database paradigms
- Relaxes schema requirements for flexibility
- Better for certain types of data

NoSQL Database Types:
1. Document Databases (MongoDB)
   - Store semi-structured data (JSON-like)
   - Flexible schema - each document can vary
   - Fast to prototype with
   - Example: storing user profiles with different fields

2. Key-Value Stores (Redis)
   - Simple: key -> value
   - Ultra-fast (in-memory)
   - Perfect for caching, sessions, counters
   - Example: session_user_123 -> { name: "Maria", ... }

3. Graph Databases (Neo4j)
   - Nodes and relationships
   - Excellent for social networks, recommendations
   - Query relationships efficiently

4. Search Engines (Elasticsearch)
   - Full-text search optimized
   - Inverted indices
   - Great for logging, analytics

SQL vs NoSQL: When to Use Each

SQL (Relational):
✓ Structured data with clear schema
✓ Complex queries across multiple tables
✓ Strong consistency required (financial, medical)
✓ Complex relationships (many-to-many)
✓ Mature tools and standards
✗ Can be slower for massive scale
✗ Less flexible schema changes

NoSQL (Document):
✓ Rapid prototyping, schema flexibility
✓ Horizontal scalability needed
✓ Semi-structured or unstructured data
✓ Fast writes and reads
✗ Complex queries harder
✗ Eventually consistent (delay before all copies updated)
✗ Less mature tooling

Consistency Models:
ACID (SQL):
- Atomic: All or nothing
- Consistent: Data rules always met
- Isolated: Transactions don't interfere
- Durable: Written data persists

BASE (NoSQL):
- Basically Available: Available even if some nodes fail
- Soft state: Data can be in flux
- Eventually Consistent: All nodes eventually agree
```

**Live Demo - Document Structure:**

```javascript
// SQL approach - split into tables
// USERS: { id, name, email }
// PROFILES: { user_id, bio, avatar_url }
// PREFERENCES: { user_id, theme, notifications }

// NoSQL Document - flexible, single document
{
  _id: ObjectId("..."),
  name: "Maria Schmidt",
  email: "maria@example.com",
  profile: {
    bio: "Software engineer",
    avatar_url: "https://...",
    location: "Vienna"
  },
  preferences: {
    theme: "dark",
    notifications: true,
    language: "de"
  },
  created_at: ISODate("2025-03-01T10:30:00Z")
}
```

**Discussion:**
- Pros of storing all together?
- Cons? (consistency, updates, queries)
- When is this better than SQL?

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Data Formats: JSON & CSV (75 min)**

*Teaching Strategy:* Hands-on parsing practice

**Topics:**

```
JSON (JavaScript Object Notation):
- Universal data exchange format
- Human-readable, machine-parseable
- Structure: objects {}, arrays [], key-value pairs
- Data types: strings, numbers, booleans, null, objects, arrays
- Syntax: keys in quotes, no trailing commas

CSV (Comma-Separated Values):
- Simple tabular data format
- No nested structures
- First row often headers
- Challenges: commas in values, quotes, encoding

Where They're Used:
- APIs return JSON responses
- Databases export to CSV
- Configuration files often JSON
- Spreadsheets export to CSV
- Web apps parse JSON constantly
```

**Live Demo - JSON in JavaScript:**

```javascript
// JSON parsing in Node.js

// 1. Parse JSON string to object
const jsonString = '{"name": "Maria", "age": 28, "city": "Vienna"}';
const user = JSON.parse(jsonString);
console.log(user.name); // "Maria"

// 2. Convert object to JSON string
const userObj = { name: "Maria", age: 28, city: "Vienna" };
const jsonOutput = JSON.stringify(userObj, null, 2);
console.log(jsonOutput); // Pretty-printed JSON

// 3. Nested data
const apiResponse = {
  user: {
    id: 1,
    name: "Maria",
    address: {
      street: "Main St",
      city: "Vienna",
      country: "Austria"
    },
    orders: [
      { id: 101, total: 99.99 },
      { id: 102, total: 49.99 }
    ]
  }
};

console.log(apiResponse.user.address.city); // Vienna
console.log(apiResponse.user.orders[0].total); // 99.99
```

**Live Demo - JSON in Python:**

```python
import json

# 1. Parse JSON string to dict
json_string = '{"name": "Maria", "age": 28, "city": "Vienna"}'
user = json.loads(json_string)
print(user["name"])  # Maria

# 2. Convert dict to JSON string
user_dict = {"name": "Maria", "age": 28, "city": "Vienna"}
json_output = json.dumps(user_dict, indent=2)
print(json_output)  # Pretty-printed JSON

# 3. Nested data (same structure)
api_response = {
    "user": {
        "id": 1,
        "name": "Maria",
        "address": {
            "street": "Main St",
            "city": "Vienna",
            "country": "Austria"
        },
        "orders": [
            {"id": 101, "total": 99.99},
            {"id": 102, "total": 49.99}
        ]
    }
}

print(api_response["user"]["address"]["city"])  # Vienna
print(api_response["user"]["orders"][0]["total"])  # 99.99
```

**Student Activity - JSON Parsing (30 min):**

Provide JSON API response; students:
1. Copy JSON into Node.js REPL
2. Parse and access nested properties
3. Repeat in Python
4. Compare syntax differences
5. Extract specific data

**3:45 - 4:00 | Wrap-up & Questions (15 min)**

---

### TUESDAY: SQL Deep Dive & Queries (6.5 hours)

**Learning Goals:**
- Master SELECT queries with various clauses
- Understand JOIN operations
- Write aggregate queries
- Practice systematic query building
- Understand query execution

**9:00 - 9:30 | Review & Objectives (30 min)**
- Recap Monday concepts
- Explain today's SQL focus
- Show real query examples from production apps

**9:30 - 10:45 | SELECT Query Mastery (75 min)**

*Teaching Strategy:* Progressive query building with live demos

**Topics to Cover:**

```
Query Structure:
SELECT [columns] 
FROM [table] 
WHERE [condition] 
ORDER BY [column] 
LIMIT [number];

WHERE Clauses:
- Comparison: =, !=, <, >, <=, >=
- Ranges: BETWEEN 10 AND 20
- Patterns: LIKE '%pattern%'
- Lists: IN (1, 2, 3)
- NULL: IS NULL, IS NOT NULL
- Logic: AND, OR, NOT

ORDER BY:
- ASC (ascending, default)
- DESC (descending)
- Multiple columns: ORDER BY name ASC, age DESC

LIMIT & OFFSET:
- LIMIT 10: first 10 results
- LIMIT 10 OFFSET 20: skip 20, take 10 (pagination)

Aggregate Functions:
- COUNT(*): number of rows
- SUM(column): total of numeric column
- AVG(column): average
- MIN(column): minimum value
- MAX(column): maximum value
- GROUP BY: aggregate per group
- HAVING: filter aggregated results
```

**Live Demo - Progressive Queries:**

```sql
-- Start simple
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Add WHERE condition
SELECT name, email FROM users WHERE age > 25;

-- Multiple conditions
SELECT name, email FROM users 
WHERE age > 25 AND country = 'Austria';

-- Patterns
SELECT * FROM users WHERE email LIKE '%@example.com';

-- Order results
SELECT name, age FROM users 
ORDER BY age DESC;

-- Limit results (pagination)
SELECT name, email FROM users 
ORDER BY created_at DESC 
LIMIT 10;

-- Aggregates
SELECT COUNT(*) as total_users FROM users;
SELECT AVG(age) as average_age FROM users;
SELECT country, COUNT(*) as user_count 
FROM users 
GROUP BY country 
ORDER BY user_count DESC;

-- Multiple aggregates
SELECT 
  country,
  COUNT(*) as total_users,
  AVG(age) as avg_age,
  MIN(age) as youngest,
  MAX(age) as oldest
FROM users
GROUP BY country;
```

**Student Activity - Query Building (30 min):**
1. Provide sample dataset in DB Fiddle
2. Students write 10 progressively complex queries
3. Verify results
4. Explain what each query does
5. Share interesting findings

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | JOINs: Connecting Multiple Tables (60 min)**

*Teaching Strategy:* Visual diagram + live demos

**Topics:**

```
Why JOINs Matter:
- Relational databases SPLIT data across tables
- JOINs bring it back together for queries
- The power of relational design

INNER JOIN:
- Returns rows where condition matches in BOTH tables
- Most common
- Example: users and their orders

LEFT JOIN:
- Returns ALL rows from left table
- Matches from right table if exists
- Example: users WITH orders (some may have zero)

RIGHT JOIN:
- Returns ALL rows from right table
- Matches from left table if exists
- Less common; usually rework as LEFT JOIN

FULL OUTER JOIN:
- All rows from both tables
- Fill with NULL where no match
- Not supported in all databases

Cross products:
- Avoid accidental cross joins (missing ON clause!)
```

**Visual Example:**

```
USERS table:              ORDERS table:
id | name               id | user_id | total
1  | Maria              101| 1       | 99.99
2  | Juan               102| 1       | 49.99
3  | Yuki               103| 2       | 199.99

INNER JOIN:
SELECT u.name, o.id, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

Result:
name  | order_id | total
Maria | 101      | 99.99
Maria | 102      | 49.99
Juan  | 103      | 199.99
(Yuki has no orders, so doesn't appear)

LEFT JOIN (same query but LEFT JOIN):
Result:
name  | order_id | total
Maria | 101      | 99.99
Maria | 102      | 49.99
Juan  | 103      | 199.99
Yuki  | NULL     | NULL
(Yuki appears because she's in left table)
```

**Live Demo - JOIN Queries:**

```sql
-- INNER JOIN: users and their orders
SELECT u.name, COUNT(o.id) as order_count
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- LEFT JOIN: all users with order summary
SELECT u.name, COUNT(o.id) as order_count, COALESCE(SUM(o.total), 0) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Multiple JOINs: users, orders, and order items
SELECT u.name, o.id as order_id, oi.product_id, oi.quantity
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN order_items oi ON o.id = oi.order_id
ORDER BY u.name, o.id;
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Complex Queries & Subqueries (75 min)**

*Teaching Strategy:* Real-world scenarios with solutions

**Scenarios:**
1. Find users who spent more than average
2. Top 5 products by order count
3. Users with no orders
4. Monthly revenue trends
5. Customer segments by spending

**Example Queries:**

```sql
-- Find high-value customers (above average spender)
SELECT u.name, SUM(o.total) as total_spent
FROM users u
INNER JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING SUM(o.total) > (
  SELECT AVG(total_spent)
  FROM (
    SELECT SUM(total) as total_spent
    FROM orders
    GROUP BY user_id
  ) user_totals
);

-- Top 5 products by popularity
SELECT p.name, COUNT(oi.id) as times_ordered
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
GROUP BY p.id, p.name
ORDER BY times_ordered DESC
LIMIT 5;

-- Find customers who never ordered
SELECT * FROM users u
WHERE u.id NOT IN (SELECT DISTINCT user_id FROM orders);
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Hands-On SQL Practice (75 min)**

*Teaching Strategy:* Guided practice, then open exploration

**Student Activity:**

Provide sample e-commerce database:
```
USERS: id, name, email, country, created_at
PRODUCTS: id, name, category, price, stock
ORDERS: id, user_id, total, created_at
ORDER_ITEMS: id, order_id, product_id, quantity, price
```

Students write 20 SQL queries covering:
- Basic SELECT, WHERE, ORDER BY
- Aggregation with GROUP BY, HAVING
- INNER and LEFT JOINs
- Subqueries
- Complex filters
- Analytics queries

**3:45 - 4:00 | Review & Wrap-up (15 min)**

---

### WEDNESDAY: Data Modeling & ER Diagrams (6.5 hours)

**Learning Goals:**
- Understand entity-relationship modeling
- Create ER diagrams from requirements
- Design normalized schemas
- Identify relationships
- Make design trade-offs

**9:00 - 9:30 | Design Thinking (30 min)**
- Why schema design matters (prevents disasters)
- Cost of bad design (exponential technical debt)
- Process: requirements → entities → relationships → schema

**9:30 - 10:45 | Entity-Relationship Diagramming (75 min)**

*Teaching Strategy:* Narrative design approach

**Topics:**

```
ER Modeling Concepts:

Entities (Things):
- User, Product, Order, Comment, Post
- Represented as rectangles
- Each entity = table in database

Attributes (Properties):
- User has: id, name, email, created_at
- Written inside entity box
- Primary key underlined

Relationships (Connections):
- One user HAS many orders
- One order CONTAINS many items
- Written as lines between entities
- Labeled with relationship name

Relationship Types (Cardinality):

One-to-One (1:1):
- Person has one passport
- Rare in practice
- Example: users and user_profiles
- Notation: ─────

One-to-Many (1:N):
- One user has many orders
- Most common
- Example: users and posts
- Notation: ─────<

Many-to-Many (N:N):
- Many students take many courses
- Needs junction/join table
- Example: products and categories
- Notation: >─────<

Reading ER Diagram:
- Rectangle = Entity (table)
- Line = Relationship
- Symbol at end = cardinality
  | = One
  < = Many (crow's foot notation)
```

**Visual Example - Blog Platform:**

```
┌──────────────┐         ┌──────────────┐
│    USERS     │         │    POSTS     │
├──────────────┤    1 ┌──┤──────────────┤
│ id (PK)      │──────┤  │ id (PK)      │
│ name         │      │  │ user_id (FK) │
│ email        │      │  │ title        │
│ created_at   │      │  │ content      │
└──────────────┘      └──┤ created_at   │
                         └──────────────┘
                              │ 1
                              │ N
                         ┌────┴─────────┐
                         │   COMMENTS   │
                         ├──────────────┤
                         │ id (PK)      │
                         │ post_id (FK) │
                         │ user_id (FK) │
                         │ content      │
                         │ created_at   │
                         └──────────────┘

Relationships:
- USERS (1) ── has ── POSTS (N)
- POSTS (1) ── has ── COMMENTS (N)
- USERS (1) ── writes ── COMMENTS (N)
```

**Live Demo - Creating ER Diagram:**

Walk through creating blog platform diagram in Draw.io:
1. Create entities (rectangles)
2. Add primary keys
3. Add attributes
4. Draw relationships
5. Label cardinality
6. Identify potential issues
7. Refine design

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Normalization Principles (60 min)**

*Teaching Strategy:* Problem-solution approach

**Topics:**

```
Why Normalize?
- Eliminate data redundancy
- Improve data integrity
- Make updates easier
- Reduce storage space

First Normal Form (1NF):
- Each cell contains atomic (indivisible) value
- No repeating groups
- Every column has unique name

Bad Design (violates 1NF):
ORDERS table with phone_numbers column: "555-1234, 555-5678"
→ Should be separate PHONE_NUMBERS table

Good Design (1NF):
PHONE_NUMBERS table with: id, user_id, phone_number

Second Normal Form (2NF):
- Must be in 1NF
- All non-key columns depend on ENTIRE primary key
- No partial dependencies

Third Normal Form (3NF):
- Must be in 2NF
- Non-key columns depend only on primary key
- No transitive dependencies

Example - Student Courses:

BAD (not normalized):
ENROLLMENTS table:
student_id | course_id | course_name | instructor | instructor_office
Problem: course_name and instructor repeated for each student
Update: if instructor changes, must update everywhere

GOOD (normalized):
ENROLLMENTS: student_id, course_id (both FK)
COURSES: course_id (PK), name, instructor_id
INSTRUCTORS: instructor_id (PK), name, office
Updates: change once in COURSES or INSTRUCTORS
```

**Trade-offs: When to Denormalize**

```
Normalized = Good for:
- Frequent updates
- Data integrity is critical
- Storage space matters
- Smaller datasets

Denormalized = Sometimes needed for:
- Read-heavy analytics
- Massive scale (billions of rows)
- Performance-critical queries
- Acceptable redundancy

Example: E-Commerce Platform
Normalized: User address in USERS table
Query: SELECT * FROM users WHERE state = 'CA'
Result: Fast, single table

Some companies denormalize for analytics:
USERS_ANALYTICS: includes denormalized address fields
Purpose: Fast analytics queries, acceptable redundancy
Updated daily from USERS
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Schema Design Practice (75 min)**

*Teaching Strategy:* Group design sessions

**Scenario 1: Simple Blog Platform**

Requirements:
- Users write posts
- Other users comment on posts
- Users can like posts and comments
- Track post categories
- Show most popular posts

Student Task:
1. Identify entities
2. List attributes for each
3. Identify relationships
4. Create ER diagram
5. Design SQL schema
6. Identify normalization level
7. Discuss potential issues

**Scenario 2: Airbnb-style Rental Platform**

Requirements:
- Hosts list properties
- Guests book properties
- Multiple rooms per property
- Pricing varies by season
- Reviews and ratings
- Availability calendar

Student Task:
1. Design complete schema
2. Create ER diagram
3. Write CREATE TABLE statements
4. Discuss many-to-many relationships
5. Handle time-based data

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Real-World Schema Review (75 min)**

*Teaching Strategy:* Analyze and critique existing designs

**Case Studies:**

Show students real schema examples:
1. Twitter-like social network
2. Spotify music platform
3. GitHub repositories
4. Stack Overflow Q&A

For each:
- Discuss entities identified
- Analyze relationships
- Identify denormalization
- Discuss why trade-offs were made
- Identify potential problems at scale

**Student Activity:**
Groups choose one platform, redesign for 10x user growth. Present rationale.

**3:45 - 4:00 | Wrap-up (15 min)**

---

### THURSDAY: Data in Real Applications (6.5 hours)

**Learning Goals:**
- Work with real API responses
- Parse JSON/CSV in applications
- Validate and clean data
- Understand API-database mapping
- Design complete data flows

**9:00 - 9:30 | APIs and Real Data (30 min)**
- Show public API responses
- Explain how data flows through apps
- Discuss data validation needs

**9:30 - 10:45 | Parsing Real API Data (75 min)**

*Teaching Strategy:* Hands-on with real APIs

**Show Real Examples:**

GitHub API (https://api.github.com):
```javascript
// Fetch user data
const response = await fetch('https://api.github.com/users/maria-dev');
const user = await response.json();
console.log(user.name, user.followers, user.public_repos);
```

Weather API:
```javascript
// Fetch weather data
const response = await fetch('https://api.weatherapi.com/v1/...');
const weather = await response.json();
console.log(weather.current.temp_c, weather.current.condition.text);
```

**Student Activity - Explore Public APIs:**

1. Weather API response
   - Parse current conditions
   - Store in database schema
   - Design WEATHER_STATIONS table

2. GitHub API response
   - Parse user repositories
   - Design USERS and REPOSITORIES schema
   - Identify relationships

3. Twitter-like social data
   - Parse tweets, retweets, likes
   - Design TWEETS, RETWEETS, LIKES schema

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Data Validation & Cleaning (60 min)**

*Teaching Strategy:* Real-world data quality problems

**Topics:**

```
Why Data Validation Matters:
- Garbage in = garbage out
- Bad data corrupts analysis
- Trust is everything

Validation Types:
- Type checking: is this a number/string/date?
- Range checking: is age between 0-150?
- Format checking: is email valid format?
- Uniqueness: is this email already in DB?
- Referential integrity: does foreign key exist?
- Business rules: does this violate our logic?

Data Cleaning:
- Whitespace trimming
- Case normalization
- Duplicate detection
- Outlier identification
- Missing value handling
- Type conversion

Examples:

Email validation (reject invalid):
- "  user@example.com  " → trim → "user@example.com"
- "user@example..com" → reject (invalid format)
- "user@example.com" already exists → reject (unique violation)

Age validation:
- "abc" → reject (not a number)
- "-5" → reject (negative age)
- "142" → warn (suspicious but allow)
- "28" → accept

Phone number normalization:
- "(555) 123-4567" → normalize to "5551234567"
- "555-123-4567" → normalize to "5551234567"
- Store normalized, display formatted
```

**Live Demo - Validation in JavaScript:**

```javascript
// Email validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Age validation
function validateAge(age) {
  const num = parseInt(age);
  if (isNaN(num)) return false;
  return num >= 0 && num <= 150;
}

// Data cleaning
function cleanUserData(user) {
  return {
    name: user.name?.trim() || 'Unknown',
    email: user.email?.toLowerCase().trim(),
    age: parseInt(user.age),
    created_at: new Date(user.created_at)
  };
}

// Usage
const userData = {
  name: "  Maria Schmidt  ",
  email: "MARIA@EXAMPLE.COM  ",
  age: "28",
  created_at: "2025-03-01"
};

const cleaned = cleanUserData(userData);
if (validateEmail(cleaned.email) && validateAge(cleaned.age)) {
  // Store in database
  console.log("Valid data, storing:", cleaned);
} else {
  console.log("Invalid data, rejecting");
}
```

**Live Demo - Validation in Python:**

```python
import re
from datetime import datetime

# Email validation
def validate_email(email):
    pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
    return re.match(pattern, email) is not None

# Age validation
def validate_age(age):
    try:
        num = int(age)
        return 0 <= num <= 150
    except ValueError:
        return False

# Data cleaning
def clean_user_data(user):
    return {
        'name': (user.get('name') or 'Unknown').strip(),
        'email': user.get('email', '').lower().strip(),
        'age': int(user.get('age', 0)),
        'created_at': datetime.fromisoformat(user.get('created_at'))
    }

# Usage
user_data = {
    'name': '  Maria Schmidt  ',
    'email': 'MARIA@EXAMPLE.COM  ',
    'age': '28',
    'created_at': '2025-03-01'
}

cleaned = clean_user_data(user_data)
if validate_email(cleaned['email']) and validate_age(cleaned['age']):
    print("Valid data, storing:", cleaned)
else:
    print("Invalid data, rejecting")
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Data Flow Architecture (75 min)**

*Teaching Strategy:* System design thinking

**Topics:**

```
Complete Data Flow in Web Application:

1. DATA SOURCE
   - API endpoint
   - Database
   - File upload
   - Real-time stream

2. FETCH/RECEIVE
   - HTTP GET request
   - Database query
   - File read
   - Event listener

3. PARSE
   - JSON.parse() / json.loads()
   - Extract relevant fields
   - Handle errors

4. VALIDATE
   - Type checking
   - Business rule validation
   - Sanitize inputs

5. CLEAN
   - Normalize data
   - Handle nulls
   - Format consistently

6. STORE
   - Insert into database
   - Update cache
   - Write to file
   - Broadcast to listeners

7. PROCESS
   - Calculations
   - Aggregations
   - Transformations

8. OUTPUT
   - Return to user
   - Send in response
   - Display in UI
   - Export to file
```

**Example - User Registration Flow:**

```
User submits form:
{ name: "Maria", email: "maria@example.com", password: "..." }

→ VALIDATE: Check format/length
→ CLEAN: Trim whitespace, lowercase email
→ CHECK_UNIQUE: Query DB - does email exist?
→ HASH_PASSWORD: Secure password storage
→ INSERT_DB: Add new user record
→ CREATE_SESSION: Generate session token
→ RETURN: Send session token to user

Error handling at each step
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Project Work Time (75 min)**

*Teaching Strategy:* Guided work on schema design project

Students begin working on their comprehensive data architecture project:
- Choose application scenario
- Design complete schema
- Create ER diagram
- Write SQL schema
- Document design decisions
- Plan presentation

**3:45 - 4:00 | Daily Wrap-up (15 min)**

---

### FRIDAY: Sprint Review & Data Architecture Capstone (4 hours)

**Learning Goals:**
- Synthesize week's learning
- Present and defend schema designs
- Peer review projects
- Identify areas for improvement
- Look ahead to Week 4

**9:00 - 9:30 | Morning Standup (30 min)**
- Quick recap of week
- Review project requirements
- Prepare presentations

**9:30 - 12:00 | Project Presentations (150 min)**

*Teaching Strategy:* Structured peer review

Each student/group presents (8-10 min):
1. Application scenario chosen
2. Entities identified
3. ER diagram walkthrough
4. Relationships explained
5. Key design decisions
6. Challenges encountered
7. Trade-offs made

Classmates ask questions:
- Why this structure?
- How would you scale it?
- Any normalization concerns?
- Alternative designs considered?

**12:00 - 12:30 | Retrospective & Wrap-up (30 min)**
- Review week's learning objectives
- Common patterns across projects
- Areas for improvement next week
- Preview Week 4 (working with actual databases)

---

## Assignments & Deliverables

### Weekly Assignment: Data Architecture Foundation Project (100 points total)

Choose ONE application scenario and complete:

#### 1. **Database Schema Design** (30 points)
- Design complete relational schema for chosen application
- Minimum 5 entities with appropriate relationships
- Create entity-relationship diagram
- Identify all primary and foreign keys
- List all attributes for each entity
- Document design rationale (2-3 paragraphs per entity)
- Discuss normalization level and trade-offs
- **Deliverable:** Draw.io ER diagram + markdown documentation

**Choice of Scenarios:**

*Beginner:* Library Management System
- Track books, members, loans
- Book categories, authors
- Loan history

*Intermediate:* E-Commerce Platform
- Users, products, categories, orders
- Order items with quantities
- Customer reviews and ratings
- Inventory tracking

*Advanced:* Social Media Platform
- Users, posts, comments, likes, followers
- Hashtags and tagging
- Direct messages
- User recommendations

#### 2. **SQL Query Examples** (25 points)
- Write 15 SQL queries demonstrating:
  - 3 basic SELECT queries
  - 3 WHERE with conditions
  - 3 aggregate queries with GROUP BY
  - 3 JOIN queries (multi-table)
  - 3 complex analytical queries
- Include comments explaining what each query does
- Test queries in DB Fiddle or SQLFiddle
- Provide expected results
- **Deliverable:** SQL file with 15 documented queries

#### 3. **JSON Data Structures** (25 points)
- Create sample JSON data matching your schema
- Minimum 3 JSON objects showing:
  - Nested objects (1-2 levels)
  - Arrays of objects
  - Mixed data types
- Write JavaScript code parsing and accessing data
- Write Python code parsing and accessing data
- Demonstrate 5 data extraction operations
- **Deliverable:** JSON file + JavaScript file + Python script

#### 4. **SQL vs NoSQL Comparison** (10 points)
- Compare SQL vs NoSQL for your application
- Discuss why you chose relational
- Document scenarios where NoSQL might be better
- Explain trade-offs
- Justify design decisions
- **Deliverable:** 1-2 page markdown document

#### 5. **Live Presentation** (10 points)
- Present schema design to class (8-10 minutes)
- Explain entities and relationships
- Walk through ER diagram
- Discuss design decisions
- Answer peer questions
- Show schema documentation

### Bonus Opportunities (+5 points each, max +10):
- Video walkthrough of schema design
- Comparative analysis: your design vs industry standard
- Performance optimization discussion
- Data migration strategy from old to new schema

### Grading Breakdown:
- Schema Design: 30 points
- SQL Queries: 25 points  
- JSON Examples: 25 points
- SQL/NoSQL Comparison: 10 points
- Presentation: 10 points
- **Total: 100 points + 10 bonus**

### Due Dates:
- Schema design + ER diagram: Wednesday EOD
- SQL queries: Thursday EOD
- JSON structures: Thursday EOD
- Comparison document: Friday morning
- Live presentation: Friday 9:30-12:00

---

## Resource Materials

### Quick Reference Guides

#### SQL Cheat Sheet
```sql
-- Create table
CREATE TABLE table_name (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  created_at DATE
);

-- Basic queries
SELECT * FROM table;
SELECT column1, column2 FROM table WHERE condition;
SELECT * FROM table ORDER BY name ASC LIMIT 10;

-- Aggregates
SELECT COUNT(*), AVG(age), MAX(salary) FROM employees;

-- JOINs
SELECT a.id, a.name, b.order_id 
FROM users a 
LEFT JOIN orders b ON a.id = b.user_id;

-- Groups
SELECT department, COUNT(*) FROM employees GROUP BY department;
```

#### JSON Quick Reference
**JavaScript:**
```javascript
const obj = { name: "Maria", age: 28 };
const json = JSON.stringify(obj);  // → string
const parsed = JSON.parse(json);   // → object
```

**Python:**
```python
import json
obj = { "name": "Maria", "age": 28 }
json_str = json.dumps(obj)  # → string
parsed = json.loads(json_str)  # → dict
```

#### ER Diagram Symbols
```
Entity: ┌─────────┐
        │ ENTITY  │
        └─────────┘

One-to-Many: ────────<
Many-to-Many: ───────<
One-to-One: ──────────

Primary Key: id (PK)
Foreign Key: user_id (FK)
```

---

## Assessment Rubric

### Novice (0-60%): Developing Understanding
- Schema has significant flaws (missing entities or relationships)
- ER diagram incomplete or incorrect
- SQL queries don't execute correctly
- Minimal documentation
- Presentation unclear or incomplete
- Doesn't articulate design rationale

### Developing (61-80%): Approaching Competency
- Schema covers requirements with minor issues
- ER diagram present but not fully detailed
- Most SQL queries correct; some errors
- Basic documentation
- Presentation covers main points
- Some design rationale explained

### Proficient (81-95%): Meets Standards
- Well-designed schema following normalization rules
- Clear, complete ER diagram
- All SQL queries correct and well-commented
- Good documentation with design rationale
- Clear presentation with good questions answered
- Design decisions justified

### Advanced (96-100%): Exceeds Standards
- Excellent schema design with thoughtful trade-offs
- Professional ER diagram with detailed documentation
- Complex SQL queries showing mastery
- Comprehensive documentation
- Engaging presentation with insightful discussion
- Anticipates scalability and edge cases

### Performance Descriptors

**Schema Design:**
- Novice: Missing entities/relationships; poor normalization
- Developing: Basic structure; some normalization issues
- Proficient: Well-organized; good normalization
- Advanced: Optimal design; justified trade-offs

**SQL Competency:**
- Novice: Queries don't work; confusion about joins
- Developing: Basic queries work; complex queries have errors
- Proficient: All queries correct; good optimization
- Advanced: Complex queries; performance considerations

**Documentation:**
- Novice: Minimal or unclear
- Developing: Basic coverage
- Proficient: Complete and clear
- Advanced: Professional and comprehensive

**Communication:**
- Novice: Hard to follow; unclear thinking
- Developing: Understandable; some unclear points
- Proficient: Clear explanation; good answers
- Advanced: Excellent presentation; insightful discussion

---

## Troubleshooting Guide

### Common Issues & Solutions

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Cannot access SQL tools** | Blank page on SQLFiddle | Try DB Fiddle (https://www.db-fiddle.com) instead; works better in most browsers |
| **JSON parsing errors** | SyntaxError when parsing | Check for unquoted keys: {"name": "value"}, not {name: "value"} |
| **SQL syntax errors** | "Unexpected token" | Check: uppercase keywords, semicolons, quotes around strings |
| **Can't find foreign key** | "Foreign key doesn't exist" | Verify referenced table and column exist; check spelling |
| **ER Diagram too complex** | 10+ entities, confusion | Reduce scope; start with core entities; add relationships later |
| **Query returns wrong results** | WHERE clause doesn't filter as expected | Debug: test each condition separately; check data types |
| **Duplicate data after JOIN** | Results multiplied unexpectedly | Check: multiple matching rows in joined table; may need DISTINCT |
| **GROUP BY errors** | "Column not in GROUP BY" | All non-aggregated columns must be in GROUP BY clause |
| **NULL confusion** | Unexpected NULL values | Remember: NULL = unknown; use IS NULL, not = NULL |
| **Schema violates normalization** | Same data repeated | Split into separate table; use foreign key |
| **Can't create ER diagram** | Draw.io crashes or confused | Export current work; try modern browser; restart tool |
| **Password storage question** | Students ask about passwords | Don't store plain text; discuss hashing (Week 10 topic); use bcrypt |

### Teaching Tips for Common Struggles

**Students don't understand JOINs:**
- Use visual table representations
- Show Venn diagrams for inner/left/right joins
- Draw arrows between matching rows
- Start with simple 1:1 relationships before complex

**Schema design feels abstract:**
- Start with real apps they use (Instagram, Twitter)
- Have them list what they'd need to build it
- Let them sketch on paper first
- Use templates for common patterns

**SQL feels like magic:**
- Break down clauses one at a time
- Show query building progressively
- Use simplified data with obvious results
- Have students predict results before running

**JSON structure confusion:**
- Show side-by-side with database table
- Practice accessing nested data together
- Have them draw structure diagrams
- Use JSON validators to show correct format

---

## Teaching Strategies & Best Practices

### For Maximum Engagement

**Live Coding:**
- Use two monitors: one for code, one for results
- Make mistakes intentionally and fix them ("here's where people get stuck")
- Narrate your thinking: "I need users who...so I'll use WHERE..."
- Copy-paste is OK; focus on logic not typing

**Use Real Examples:**
- Show applications they know: Instagram, Spotify, Amazon
- Discuss actual schemas used by companies
- Share API responses from real services
- Connect to their lives

**Hands-On Time (Critical):**
- 50% of class time on doing, not watching
- Students learn by trying and failing
- Mistakes are learning opportunities
- Celebrate debugging ("great catch!")

**Group Activities:**
- Pair students for schema design
- Have groups critique each other's work
- Peer presentations build confidence
- Diverse perspectives improve designs

### For Different Learning Styles

**Visual Learners:**
- ER diagrams and flowcharts
- Color-coded query components
- Table visualizations
- Whiteboard sketching

**Kinesthetic Learners:**
- Hands-on SQL practice
- Draw diagrams on paper first
- Build schemas step-by-step
- Manipulate data in tools

**Auditory Learners:**
- Explain concepts aloud
- Listen to peer presentations
- Discussion of design choices
- Group problem-solving

### Pacing Recommendations

**Week 3 Pacing:**
- **Monday:** Conceptual focus (60% theory, 40% practice)
- **Tuesday:** Skills focus (30% theory, 70% practice)
- **Wednesday:** Design focus (50% theory, 50% practice)
- **Thursday:** Application focus (20% theory, 80% practice)
- **Friday:** Synthesis (10% theory, 90% presentation)

Allow buffer time for:
- SQL tool troubleshooting
- Schema design discussions
- Individual student questions
- Catch-up time

---

## Differentiation Strategies

### For Students Moving Faster

**Enrichment Activities:**
- Design schema for more complex scenario (social network)
- Optimize queries for performance
- Compare different schema approaches
- Explore advanced SQL (window functions, CTEs)
- Research NoSQL implementation options
- Design for multi-tenancy

**Stretch Challenges:**
- "How would this schema scale to 1 billion users?"
- "Design database for cryptocurrency exchange"
- "Create schema for real-time analytics"
- "Plan data migration from spreadsheet to database"

### For Students Moving Slower

**Support Strategies:**
- Provide schema templates to modify
- Pre-write basic SQL queries; have students modify
- Use simplified datasets (5 rows instead of 5000)
- Pair with stronger student
- Provide step-by-step query building guides
- Use query builders before writing raw SQL

**Scaffolding:**
- "First, list the tables you need..."
- "Now, what columns does each table need?"
- "Draw the relationships between tables..."
- Template: "SELECT ___ FROM ___ WHERE ___;"

---

## Common Teaching Mistakes to Avoid

❌ **Going too deep on SQL syntax** - Students care about concepts, not memorizing clauses  
✅ Instead, focus on: What question are we answering? How do tables connect?

❌ **Skipping normalization** - Students make terrible schemas if they don't understand it  
✅ Instead, teach with examples: "Why is this redundant?" "What problems does it cause?"

❌ **Treating NoSQL as "alternative SQL"** - Different paradigm, not SQL with flexibility  
✅ Instead, explain: "Different tool for different problems" (not better/worse)

❌ **Using fake/simplified data** - Doesn't feel real to students  
✅ Instead, download real datasets or use public APIs

❌ **Lecturing about schemas** - Too abstract without hands-on design  
✅ Instead, have students design immediately with guidance

❌ **Ignoring JSON until later** - It's how modern data flows  
✅ Instead, integrate from Monday's API responses

---

## Instructor Preparation Checklist

**Before Week 3 Starts (Friday of Week 2):**
- [ ] Verify all online SQL tools work in your browser
- [ ] Download sample datasets for SQL practice
- [ ] Create 5 ER diagrams as reference examples
- [ ] Prepare Draw.io account and templates
- [ ] Test JSON parsing code in Node.js and Python
- [ ] Find 3-4 real API examples for demos
- [ ] Create project scenario templates

**Before Each Day:**
- [ ] Test all SQL queries on DB Fiddle
- [ ] Verify code examples run without errors
- [ ] Download any API responses you'll demo
- [ ] Charge all devices
- [ ] Check projector/display setup
- [ ] Have backup plans if tools go down

**During Week:**
- [ ] Record common errors for later examples
- [ ] Note which concepts students struggled with
- [ ] Collect example bad schemas to show as anti-patterns
- [ ] Document questions for FAQ compilation

**End of Week:**
- [ ] Review project submissions
- [ ] Note areas for Week 4 emphasis
- [ ] Update materials based on student feedback
- [ ] Create FAQ document for Week 4 reference

---

## Week 3 Success Indicators

**By end of Week 3, students should:**

✅ Explain the difference between SQL and NoSQL (not "which is better")  
✅ Recognize relationships in any schema they encounter  
✅ Sketch a basic ER diagram in 10 minutes  
✅ Write SELECT queries that actually run and return expected data  
✅ Understand why schemas reduce redundancy  
✅ Read and interpret API responses as data structures  
✅ Parse JSON in both JavaScript and Python  
✅ Design reasonable databases for new applications  

**If students can do these, they're ready for Week 4.**
