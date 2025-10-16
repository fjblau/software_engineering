# Week 14 Teacher's Guide: Data Architecture Deep Dive
## Advanced Databases - NoSQL, Graph, Time-Series & Polyglot Persistence

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** May 26-30, 2025  
**Focus:** MongoDB, Neo4j, Redis, InfluxDB, Polyglot Persistence, Architecture Decisions

---

## Table of Contents
1. [Overview](#overview)
2. [Learning Objectives](#learning-objectives)
3. [Pre-Class Setup Requirements](#pre-class-setup-requirements)
4. [Software & Tool Requirements](#software--tool-requirements)
5. [Daily Schedule & Topics](#daily-schedule--topics)
6. [Assignments & Deliverables](#assignments--deliverables)
7. [Code Examples & Patterns](#code-examples--patterns)
8. [Resource Materials](#resource-materials)
9. [Assessment Rubric](#assessment-rubric)
10. [Troubleshooting Guide](#troubleshooting-guide)

---

## Overview

Week 14 represents the **advanced capstone of database education**, moving beyond traditional relational databases to explore specialized data architectures. Students transition from thinking "which database should I use?" to "which database types should I combine?" This week teaches polyglot persistence—the practice of using multiple database technologies in single applications.

### Week 14 as Integration Point

> "Week 14 proves students understand data architecture: knowing when relational databases fall short, recognizing specialized use cases, and building resilient multi-database systems."

This week emphasizes:
- **Database specialization** - Each database type solves specific problems optimally
- **NoSQL for flexibility** - MongoDB's document model for rapid iteration
- **Graph thinking** - Neo4j for relationship-heavy problems
- **Time-series for metrics** - InfluxDB for IoT and monitoring
- **Caching for performance** - Redis for speed and scale
- **Architecture tradeoffs** - CAP theorem, consistency models, complexity
- **Real-world design** - Making justified technology choices

### Week 14 Success Metrics

✅ Students explain use cases for 5+ database types  
✅ Students implement MongoDB CRUD and aggregations  
✅ Students write Cypher queries in Neo4j  
✅ Students implement Redis caching patterns  
✅ Students ingest and query time-series data  
✅ Students design multi-database architectures  
✅ Students justify database technology choices  
✅ Students build working polyglot applications  

---

## Learning Objectives

By the end of Week 14, students will be able to:

### NoSQL & Document Databases (MongoDB)
- Design flexible document schemas without rigid structures
- Perform CRUD operations with MongoDB drivers
- Query documents using MongoDB query language
- Implement embedding vs. reference patterns appropriately
- Create and optimize indexes for performance
- Use aggregation pipelines for complex data transformation
- Compare MongoDB strengths/weaknesses vs. PostgreSQL

### Graph Databases (Neo4j)
- Understand graph data models (nodes, relationships, properties)
- Write Cypher queries for pattern matching
- Identify optimal graph database use cases
- Implement relationship-based queries
- Perform graph analysis (shortest path, recommendations)
- Compare graph approaches with relational approaches

### Time-Series Databases (InfluxDB)
- Understand time-series data characteristics
- Write to and query time-series databases efficiently
- Implement data retention and downsampling strategies
- Handle IoT sensor data at scale
- Identify time-series use cases
- Compare with traditional database approaches

### Caching & Performance (Redis)
- Understand in-memory data structures
- Implement cache-aside, write-through patterns
- Use Redis for sessions, rate limiting, pub/sub
- Optimize performance with strategic caching
- Understand cache invalidation strategies
- Measure and demonstrate performance improvements

### Architecture & Design Decisions
- Apply CAP theorem to technology choices
- Evaluate database trade-offs (consistency, availability, partition tolerance)
- Design polyglot persistence architectures
- Document architecture decisions
- Implement data synchronization between databases
- Justify technology choices with evidence

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Install MongoDB, Neo4j, Redis, InfluxDB locally or use Docker containers
2. ✅ Test all code examples in the provided Week 14 files
3. ✅ Create sample datasets for each database type
4. ✅ Prepare comparison slides (SQL vs NoSQL vs Graph vs Time-Series)
5. ✅ Create architecture decision templates
6. ✅ Prepare polyglot persistence project template repository
7. ✅ Set up monitoring/visualization tools (MongoDB Compass, Neo4j Browser, Redis CLI)
8. ✅ Test connection strings and authentication

**Recommended Docker Setup (Fastest Option):**
```bash
# Start all databases with Docker Compose
docker run -d -p 27017:27017 --name mongodb mongo:latest
docker run -d -p 7687:7687 --name neo4j neo4j:latest
docker run -d -p 6379:6379 --name redis redis:latest
docker run -d -p 8086:8086 --name influxdb influxdb:latest
```

**Classroom Setup:**
- Verify all students can connect to each database type
- Test Node.js drivers: mongodb, mongoose, neo4j, redis
- Test Python drivers: pymongo, neo4j, redis-py, influxdb-client
- Have sample datasets ready for MongoDB and InfluxDB
- Create accounts/projects for Neo4j Sandbox (if not using local)
- Verify command-line tools: mongosh, cypher-shell, redis-cli, influx CLI

### Student Pre-Requisites (Send Friday Before Week 14)

**MUST HAVE BEFORE MONDAY:**
- [ ] Complete Week 13 (SQL queries, database design)
- [ ] PostgreSQL and Node.js/Python working
- [ ] Git and GitHub configured
- [ ] Understanding of database normalization
- [ ] CAP theorem concepts familiarity
- [ ] Basic understanding of caching concepts

**Verification Commands (Send to Students):**
```bash
# Node.js driver tests
npm list mongodb mongoose neo4j redis

# Python driver tests
pip list | grep -E "pymongo|redis|neo4j|influxdb"

# Git verification
git --version && git config user.name

# Optional: Docker verification (if using containers)
docker --version && docker-compose --version
```

**Pre-Work Assignment:**
- Students read: "CAP Theorem Explained" from IBM Cloud
- Students watch: Neo4j intro video (10 minutes)
- Students explore: MongoDB University free course intro
- Students set up: Local MongoDB or MongoDB Atlas account

---

## Software & Tool Requirements

| Tool | Purpose | Version | Installation | Notes |
|------|---------|---------|--------------|-------|
| **MongoDB** | Document database | 5.0+ | `brew install mongodb-community` or Docker | Official Community Edition |
| **mongosh** | MongoDB CLI | Latest | Included with MongoDB | Interactive shell |
| **MongoDB Compass** | GUI management | Latest | Download or `brew install mongodb-compass` | Free visualization tool |
| **Neo4j** | Graph database | 5.0+ | Download or Docker | Community Edition free |
| **Neo4j Browser** | Graph visualization | Latest | Included with Neo4j | Interactive query interface |
| **Neo4j Desktop** | Local development | Latest | Download | Free for development |
| **Redis** | In-memory cache | 6.0+ | `brew install redis` or Docker | Official Redis |
| **Redis CLI** | Redis command-line | Latest | Included with Redis | Interactive shell |
| **Redis Insight** | GUI management | Latest | Download | Free visualization tool |
| **InfluxDB** | Time-series database | 2.0+ | Download or Docker | Open source |
| **InfluxDB CLI** | Command-line tool | Latest | Included with InfluxDB | Query interface |
| **Grafana** | Metrics visualization | 9.0+ | Docker or Download | Optional, for visualization |
| **Node.js** | JavaScript runtime | 18+ LTS | From Week 2 | Required for JS examples |
| **npm packages** | Database drivers | Latest | See below | Install in project |
| **Python** | Python runtime | 3.8+ | From Week 2 | Required for Python examples |
| **pip packages** | Database drivers | Latest | See below | Install in project |

**Required npm Packages:**
```json
{
  "mongodb": "^5.0.0",
  "mongoose": "^7.0.0",
  "neo4j-driver": "^5.0.0",
  "redis": "^4.6.0",
  "dotenv": "^16.0.0"
}
```

**Required Python Packages:**
```
pymongo==4.3.0
redis==4.5.0
neo4j==5.0.0
influxdb-client==1.35.0
python-dotenv==1.0.0
```

---

## Daily Schedule & Topics

### MONDAY: NoSQL Deep Dive - MongoDB Document Databases (6.5 hours)

**Learning Goals:**
- Understand document-oriented database principles
- Master MongoDB CRUD operations
- Design effective document schemas
- Query and index MongoDB efficiently
- Apply MongoDB to real-world scenarios

**9:00 - 9:30 | Week 14 Overview & Database Landscape (30 min)**

*Teaching Strategy:* Contextual comparison and decision framework

**Topics:**

```
Why Multiple Database Types?

Traditional Approach: One database (usually relational)
- ✓ ACID guarantees
- ✓ Normalized schemas
- ✗ Rigid schema changes painful
- ✗ Not optimized for all access patterns
- ✗ Performance issues at scale for certain workloads

Modern Approach: Multiple specialized databases
- PostgreSQL: User accounts, orders (ACID required)
- MongoDB: Product catalog, user preferences (flexible schema)
- Neo4j: Friend connections, recommendations (relationships)
- Redis: Session cache, real-time counters (speed)
- InfluxDB: Server metrics, user activity (time-series)

Database Selection Matrix:
┌─────────────────┬────────────┬─────────────┬──────────────┐
│ Characteristic  │ PostgreSQL │ MongoDB     │ Neo4j/Redis  │
├─────────────────┼────────────┼─────────────┼──────────────┤
│ Schema          │ Rigid      │ Flexible    │ Graph/KV     │
│ Transactions    │ ACID       │ ACID (4.0+) │ Limited      │
│ Scalability     │ Vertical   │ Horizontal  │ Horizontal   │
│ Joins           │ Native     │ Manual      │ Native       │
│ Speed           │ Good       │ Good        │ Excellent    │
│ Use Case        │ General    │ Documents   │ Specific     │
└─────────────────┴────────────┴─────────────┴──────────────┘
```

**Live Demo - Database Comparison:**
Show same data model in PostgreSQL vs MongoDB

PostgreSQL:
```sql
-- Users (normalized)
CREATE TABLE users (id SERIAL, name TEXT, email TEXT);
CREATE TABLE addresses (id SERIAL, user_id INT, street TEXT, city TEXT);
CREATE TABLE tags (id SERIAL, user_id INT, tag TEXT);

-- Query requires joins
SELECT u.*, a.*, array_agg(t.tag) FROM users u
  LEFT JOIN addresses a ON u.id = a.user_id
  LEFT JOIN tags t ON u.id = t.user_id
  WHERE u.email = 'maria@example.com';
```

MongoDB:
```javascript
// User (denormalized document)
db.users.insertOne({
  name: 'Maria Schmidt',
  email: 'maria@example.com',
  address: { street: '123 Main', city: 'Berlin' },
  tags: ['vip', 'regular']
});

// Same query is simple
db.users.findOne({ email: 'maria@example.com' });
```

**9:30 - 10:45 | MongoDB Fundamentals & CRUD Operations (75 min)**

*Teaching Strategy:* Hands-on progressive exploration

**Topics:**

```
MongoDB Concepts:

Database: Container (like schema)
Collection: Table equivalent (group of documents)
Document: Single record (JSON-like object)
Field: Key-value pair (column equivalent)

Data Type Examples:
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Maria Schmidt",                    // String
  age: 28,                                   // Number
  active: true,                              // Boolean
  email: null,                               // Null
  tags: ["developer", "team-lead"],         // Array
  address: {                                 // Nested document
    street: "123 Main St",
    city: "Berlin"
  },
  createdAt: ISODate("2025-05-26T..."),    // Date
  score: 4.7                                // Double (float)
}

Document Key Principles:
- No rigid schema (fields are optional)
- Can nest documents and arrays
- Documents have max 16MB size
- _id is automatically generated if not provided
- Flexible schema enables rapid iteration
```

**Live Demo - MongoDB Connection & Basic CRUD:**

```javascript
const { MongoClient } = require('mongodb');

async function mongoCRUD() {
  const client = new MongoClient('mongodb://localhost:27017/');
  const db = client.db('myapp');
  const users = db.collection('users');

  // CREATE: Insert documents
  const result = await users.insertOne({
    name: 'Maria Schmidt',
    email: 'maria@example.com',
    city: 'Berlin',
    age: 28,
    createdAt: new Date()
  });
  console.log('Inserted:', result.insertedId);

  // READ: Find documents
  const user = await users.findOne({ email: 'maria@example.com' });
  console.log('Found:', user);

  // UPDATE: Modify document
  await users.updateOne(
    { email: 'maria@example.com' },
    { $set: { age: 29, updatedAt: new Date() } }
  );

  // DELETE: Remove document
  await users.deleteOne({ email: 'klaus@example.com' });

  await client.close();
}
```

**Student Activity - MongoDB CRUD Practice (30 min):**
1. Connect to MongoDB
2. Insert 5 documents with various fields
3. Query documents using different filters
4. Update multiple documents
5. Delete documents by criteria
6. Count total documents

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | Document Design Patterns (60 min)**

*Teaching Strategy:* Pattern comparison and decision-making

**Topics:**

```
Schema Design Patterns:

1. EMBEDDING (One-to-Few Relationships)
Use when: Small, related data, accessed together
Pros: Single query, no joins, atomic updates
Cons: Data duplication, size limits (16MB)

Example: User with address embedded
{
  name: 'Maria Schmidt',
  email: 'maria@example.com',
  address: {
    street: '123 Main St',
    city: 'Berlin',
    country: 'Germany'
  }
}

2. REFERENCING (One-to-Many Relationships)
Use when: Large collections, shared data, accessed separately
Pros: Prevents duplication, more flexible
Cons: Requires multiple queries (joins manual)

Example: User references posts
User:
{
  _id: ObjectId(),
  name: 'Maria Schmidt',
  postIds: [ObjectId(), ObjectId()]
}

Post:
{
  _id: ObjectId(),
  title: 'MongoDB Tips',
  authorId: ObjectId()
}

3. HYBRID (Best of both)
Use when: Most real-world scenarios
Pros: Optimizes for common queries
Cons: Requires thoughtful design

Example: User with embedded address, referenced posts
{
  name: 'Maria Schmidt',
  email: 'maria@example.com',
  address: {        // Embedded (accessed together)
    street: '123 Main',
    city: 'Berlin'
  },
  postIds: [...],   // Referenced (accessed separately)
  lastActivity: {
    type: 'login',
    timestamp: new Date()
  }
}
```

**Design Decision Framework:**

```
Question: Should I embed or reference?

1. How often is this data accessed together?
   → Always = EMBED
   → Sometimes = EVALUATE
   → Rarely = REFERENCE

2. How large is the nested data?
   → < 1MB = EMBED
   → 1-5MB = EVALUATE
   → > 5MB = REFERENCE

3. How often does nested data change independently?
   → Rarely = EMBED
   → Sometimes = EVALUATE
   → Often = REFERENCE

4. How many nested items?
   → < 100 = EMBED
   → 100-10,000 = EVALUATE
   → > 10,000 = REFERENCE
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Querying & Indexing Strategies (75 min)**

*Teaching Strategy:* Pattern exploration and performance testing

**Topics:**

```
MongoDB Query Operators:

Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
Logical: $and, $or, $not, $nor
Array: $all, $elemMatch, $size
Text: $text, $regex
Existence: $exists, $type
Evaluation: $where, $expr

Common Query Patterns:
db.users.find({ age: { $gte: 25, $lte: 65 } })      // Range
db.users.find({ city: { $in: ['Berlin', 'Munich'] } }) // Multi-value
db.users.find({ tags: 'vip' })                       // Array contains
db.users.find({ email: { $regex: '^maria' } })       // Pattern match
db.users.find({ phone: { $exists: false } })         // Null checks

Indexing Strategies:

Single-field index:
db.users.createIndex({ email: 1 })

Compound index:
db.users.createIndex({ city: 1, age: -1 })

Unique index (prevents duplicates):
db.users.createIndex({ email: 1 }, { unique: true })

TTL index (auto-delete):
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }  // Delete after 24 hours
)

Text index (full-text search):
db.products.createIndex({ name: 'text', description: 'text' })

Query Performance:
- Use explain() to check index usage
- Create indexes before queries
- Compound indexes for queries on multiple fields
- Avoid large arrays in indexed fields
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Aggregation Pipeline & Real Data (75 min)**

*Teaching Strategy:* Complex data transformation patterns

**Topics:**

```
Aggregation Pipeline: Process documents through stages

Common Pipeline Stages:
$match      - Filter documents (like WHERE)
$group      - Group by field and accumulate (like GROUP BY)
$sort       - Order results
$limit      - Limit results
$skip       - Skip results (pagination)
$project    - Select/transform fields
$lookup     - Join with another collection
$unwind     - Flatten arrays
$addFields  - Add computed fields

Pipeline Example:
Find top 5 users by activity
[
  { $match: { status: 'active' } },
  { $group: { _id: '$city', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 5 }
]
```

**Live Demo - Complex Aggregation:**

```javascript
// Find top products by review count with average rating
const pipeline = [
  // Stage 1: Match products with reviews
  { $match: { 'reviews.0': { $exists: true } } },
  
  // Stage 2: Group by product, calculate metrics
  { $group: {
    _id: '$_id',
    name: { $first: '$name' },
    reviewCount: { $size: '$reviews' },
    avgRating: { $avg: '$reviews.rating' }
  }},
  
  // Stage 3: Sort by review count
  { $sort: { reviewCount: -1 } },
  
  // Stage 4: Get top 10
  { $limit: 10 },
  
  // Stage 5: Format output
  { $project: {
    _id: 0,
    name: 1,
    reviews: '$reviewCount',
    rating: { $round: ['$avgRating', 1] }
  }}
];

const results = await db.collection('products').aggregate(pipeline).toArray();
```

**Student Activity - Real Data Processing (30 min):**
1. Load sample e-commerce data
2. Query products by category
3. Find top 10 selling products
4. Calculate average prices by category
5. Find customers with most purchases
6. Create aggregation pipeline for business metric

**3:45 - 4:30 | MongoDB Hands-On Project Sprint (45 min)**

**Project: User Management System**
Build CRUD API for user profiles with MongoDB

Requirements:
- Create users with validation
- Query users by multiple criteria
- Update user profiles with partial updates
- Delete users
- List users with pagination and sorting
- Create compound indexes for performance

---

### TUESDAY: Graph Databases - Neo4j (6.5 hours)

**Learning Goals:**
- Understand graph data model (nodes, relationships, properties)
- Write Cypher queries for pattern matching
- Identify graph database use cases
- Implement recommendation engines
- Compare graph vs relational approaches

**9:00 - 10:00 | Graph Database Fundamentals (60 min)**

*Teaching Strategy:* Visual introduction with real-world examples

**Topics:**

```
Graph Database Concepts:

Nodes: Entities/things (labeled)
  Example: :Person, :Company, :Product, :User

Relationships: Connections with direction and type
  Example: -[:FRIENDS_WITH]-> -[:WORKS_AT]-> -[:PURCHASED]->

Properties: Attributes on nodes or relationships
  Node: { name: 'Maria', age: 28 }
  Relationship: { since: 2020, title: 'Engineer' }

Labels: Categories for nodes
  All people: :Person
  All products: :Product
  All users: :User

When to Use Graph Databases:

✓ GOOD USE CASES:
  - Social networks (friends, followers, connections)
  - Recommendation engines (products people bought/liked)
  - Knowledge graphs (entities and relationships)
  - Fraud detection (suspicious patterns)
  - Identity/Access management (permissions, roles)
  - Route planning (shortest path)
  - Dependency management (supply chain)

✗ NOT GOOD FOR:
  - Time-series data (use InfluxDB)
  - Document storage (use MongoDB)
  - Key-value lookups (use Redis)
  - Simple CRUD operations (use PostgreSQL)

Graph vs Relational:

Social Network: "Find users' friends' friends"

PostgreSQL (multiple joins):
SELECT u3.* FROM users u1
  JOIN follows f1 ON u1.id = f1.follower_id
  JOIN users u2 ON f1.followee_id = u2.id
  JOIN follows f2 ON u2.id = f2.follower_id
  JOIN users u3 ON f2.followee_id = u3.id
  WHERE u1.id = 'maria';

Neo4j (single pattern):
MATCH (maria:User {name:'Maria'})-[:FOLLOWS]->()-[:FOLLOWS]->(suggestion)
RETURN suggestion;
```

**Live Demo - Neo4j Browser:**
1. Show Neo4j Browser interface
2. Create sample nodes and relationships
3. Query patterns visually
4. Show graph visualization

**10:00 - 10:15 | BREAK (15 min)**

**10:15 - 12:00 | Cypher Query Language & CRUD (105 min)**

*Teaching Strategy:* Progressive pattern building

**Topics:**

```
Cypher Fundamentals:

CREATE - Create nodes and relationships:
CREATE (maria:Person {name: 'Maria', age: 28})
CREATE (hans:Person {name: 'Hans', age: 32})
CREATE (maria)-[:FRIENDS_WITH {since: 2020}]->(hans)

MATCH - Find patterns:
MATCH (p:Person {name: 'Maria'})
RETURN p

WHERE - Filter results:
MATCH (p:Person)
WHERE p.age > 25
RETURN p

RETURN - Project results:
MATCH (p:Person)-[:FRIENDS_WITH]->(friend)
RETURN p.name, friend.name

Common Operations:

Pattern Matching Syntax:
(variable:Label {property: value})-[relationship:TYPE]->(target)

Direction matters:
-[:TYPE]->     Right direction only
-[:TYPE]-      No direction (both ways)
<-[:TYPE]-     Left direction only

Quantified relationships:
-[:FRIENDS_WITH*1]->(n)      Exactly 1 step
-[:FRIENDS_WITH*1..3]->(n)   1 to 3 steps
-[:FRIENDS_WITH*]-(n)        Any number of steps
```

**Live Demo - Cypher Queries:**

```cypher
-- Create nodes and relationships
CREATE (maria:Person {name: 'Maria', age: 28, city: 'Berlin'})
CREATE (hans:Person {name: 'Hans', age: 32, city: 'Munich'})
CREATE (lisa:Person {name: 'Lisa', age: 25, city: 'Hamburg'})
CREATE (maria)-[:FRIENDS_WITH {since: 2020}]->(hans)
CREATE (hans)-[:FRIENDS_WITH {since: 2021}]->(lisa)
CREATE (maria)-[:WORKS_AT {title: 'Engineer'}]->(:Company {name: 'TechCorp'})

-- Simple queries
MATCH (p:Person) RETURN p

-- Pattern matching
MATCH (maria:Person {name: 'Maria'})-[:FRIENDS_WITH]->(friend)
RETURN friend.name, friend.age

-- Multi-hop relationships (friends of friends)
MATCH (maria:Person {name: 'Maria'})-[:FRIENDS_WITH*2]-(fof)
WHERE maria <> fof
RETURN DISTINCT fof.name

-- Find shortest path
MATCH path = shortestPath(
  (maria:Person {name: 'Maria'})-[:FRIENDS_WITH*]-(lisa:Person {name: 'Lisa'})
)
RETURN path

-- Recommendations (people you might know)
MATCH (you:Person {name: 'Maria'})-[:FRIENDS_WITH]->(friend)-[:FRIENDS_WITH]->(suggestion)
WHERE NOT (you)-[:FRIENDS_WITH]->(suggestion) AND you <> suggestion
RETURN DISTINCT suggestion.name, COUNT(*) as mutualFriends
ORDER BY mutualFriends DESC
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Graph Analysis & Real-World Patterns (75 min)**

*Teaching Strategy:* Use-case driven learning

**Topics:**

```
Graph Analysis Patterns:

1. DEGREE ANALYSIS - How connected is a node?
MATCH (p:Person)-[r]-()
RETURN p.name, count(r) as connections
ORDER BY connections DESC

2. CLUSTERING - Find communities
MATCH (p1:Person)-[:FRIENDS_WITH]-(p2:Person)
WHERE p1.name < p2.name
RETURN p1.name, p2.name

3. CENTRALITY - Most important nodes
MATCH (p:Person)
WITH p, size((p)-[]->()) + size((p)<-[]-()) as degree
RETURN p.name, degree
ORDER BY degree DESC

4. SHORTEST PATH - Optimal routing
MATCH path = shortestPath((start)-[:CONNECTED*]-(end))
RETURN path

5. RECOMMENDATION ENGINE
MATCH (user:User)-[:PURCHASED]->(product1)<-[:PURCHASED]-(other:User)
            -[:PURCHASED]->(product2)
WHERE product1 <> product2
RETURN product2.name, COUNT(*) as score
ORDER BY score DESC
LIMIT 10

Real-World Use Cases:

Social Networks:
- MATCH (you:User)-[:FOLLOWS]->()-[:FOLLOWS]->(suggestion)
- Follow recommendations based on common followers

E-Commerce Recommendations:
- MATCH (you)-[:VIEWED|PURCHASED]->(product)<-[:VIEWED|PURCHASED]-(other)
            -[:VIEWED|PURCHASED]->(recommendation)
- Recommend products similar users liked

Fraud Detection:
- MATCH (a:Account)-[t1:TRANSFERS_TO]->(b:Account)-[t2:TRANSFERS_TO]->(a)
- Find circular suspicious transactions

Knowledge Graph:
- MATCH (topic:Topic)-[:RELATED_TO]-(subtopic:Topic)
- Navigate relationships in knowledge domains
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Neo4j Hands-On: Build Recommendation Engine (75 min)**

*Teaching Strategy:* Project-based application building

**Student Activity:**
Build recommendation engine for online store

Requirements:
1. Create nodes for Users, Products, Categories
2. Create relationships: PURCHASED, VIEWED, RELATED_TO
3. Implement query for product recommendations
4. Find most connected products
5. Suggest new users to follow based on purchases

**3:45 - 4:30 | Workshop & Troubleshooting (45 min)**

---

### WEDNESDAY: Time-Series Databases & Real-Time Data (6.5 hours)

**Learning Goals:**
- Understand time-series data characteristics
- Ingest IoT sensor data at scale
- Query and aggregate time-series data
- Implement retention and downsampling
- Identify time-series use cases

**9:00 - 10:00 | Time-Series Fundamentals & InfluxDB (60 min)**

**Topics:**

```
What is Time-Series Data?

Data points with timestamps: (time, value, tags)
Characteristics:
- Append-only (rarely update historical data)
- High-volume writes (IoT devices, metrics)
- Time-based queries (last hour, last day)
- Aggregations (average, max, percentile)

Example: Server Metrics
Time                    Server    CPU    Memory    Disk
2025-05-26T09:00:00Z    web-1     45%    2.1GB     45%
2025-05-26T09:05:00Z    web-1     48%    2.2GB     45%
2025-05-26T09:10:00Z    web-1     52%    2.3GB     46%
2025-05-26T09:00:00Z    web-2     38%    1.8GB     32%
2025-05-26T09:05:00Z    web-2     41%    1.9GB     33%

When to Use Time-Series Databases:

✓ GOOD FOR:
  - Metrics and monitoring (server CPU, memory)
  - IoT sensor data (temperature, humidity, pressure)
  - Stock prices and financial data
  - Application performance monitoring (APM)
  - User activity tracking
  - Network traffic analysis

✗ NOT FOR:
  - User profiles (use PostgreSQL)
  - Product catalogs (use MongoDB)
  - Relationships (use Neo4j)
  - Temporary data (use Redis)

InfluxDB Features:

Data Model:
- Measurement: Like table name (cpu_usage, temperature)
- Tags: Indexed metadata (server=web-1, region=us-east)
- Fields: Actual metric values (value=45.2)
- Timestamp: When measurement was taken

Storage: Time + Tags + Fields + Measurements

Query Language: Flux (powerful, functional)

Retention Policies:
- Keep high-resolution data for 7 days
- Keep hourly averages for 30 days
- Keep daily averages for 1 year
```

**10:00 - 10:15 | BREAK (15 min)**

**10:15 - 12:00 | InfluxDB Write & Query Operations (105 min)**

**Live Demo - InfluxDB Operations:**

```python
from influxdb_client import InfluxDBClient, Point, WritePrecision
from datetime import datetime

# Connect to InfluxDB
client = InfluxDBClient(
    url="http://localhost:8086",
    token="my-token",
    org="my-org"
)

# Write single data point
write_api = client.write_api(write_precision=WritePrecision.S)
point = Point("environment_metrics") \
    .tag("sensor_id", "sensor-1") \
    .tag("location", "warehouse_a") \
    .field("temperature", 22.5) \
    .field("humidity", 65) \
    .field("pressure", 1013.25) \
    .time(datetime.utcnow(), WritePrecision.S)

write_api.write(bucket="my-bucket", record=point)

# Batch write
points = [
    Point("environment_metrics")
        .tag("sensor_id", f"sensor-{i}")
        .field("temperature", 20 + i)
        .field("humidity", 60 + i)
        .time(datetime.utcnow(), WritePrecision.S)
    for i in range(10)
]
write_api.write(bucket="my-bucket", records=points)

# Query recent data with Flux
query_api = client.query_api()
flux_query = '''
from(bucket: "my-bucket")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_measurement"] == "environment_metrics")
  |> filter(fn: (r) => r["sensor_id"] == "sensor-1")
'''
result = query_api.query(org="my-org", query=flux_query)

# Aggregations
agg_query = '''
from(bucket: "my-bucket")
  |> range(start: -24h)
  |> filter(fn: (r) => r["_measurement"] == "environment_metrics")
  |> group(columns: ["sensor_id"])
  |> aggregateWindow(every: 1h, fn: mean)
'''
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Retention, Downsampling & Monitoring (75 min)**

**Topics:**

```
Data Retention Strategy:

Problem: Time-series data grows rapidly
- 1000 servers × 60 metrics/sec = 60M points/sec
- At 1 byte per point = 60MB/sec = 5.1TB/day!

Solution: Retention Policies

Tiered Storage:
High-resolution (1s):    Keep 7 days
Medium-resolution (1m):  Keep 30 days
Low-resolution (1h):     Keep 1 year

Downsampling:
from(bucket: "raw-metrics")
  |> range(start: -7d)
  |> aggregateWindow(every: 1h, fn: mean)

Then store aggregated data in separate bucket

Common Patterns:
- Store raw data for 24 hours
- Downsample to 5-minute intervals for 7 days
- Downsample to hourly for 1 month
- Downsample to daily for 1 year
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Hands-On: IoT Data Ingestion & Analysis (75 min)**

**Student Activity: IoT Monitoring System**

Build system to ingest and analyze sensor data

Requirements:
1. Simulate IoT sensors sending data
2. Write sensor readings to InfluxDB
3. Query temperature trends
4. Calculate statistics (avg, max, min)
5. Detect anomalies
6. Create retention policy

**3:45 - 4:30 | Review & Troubleshooting (45 min)**

---

### THURSDAY: Caching & Performance Optimization - Redis (6.5 hours)

**Learning Goals:**
- Understand caching patterns and strategies
- Implement Redis for sessions and rate limiting
- Measure performance improvements
- Design cache invalidation strategies
- Apply Redis to real-world problems

**9:00 - 10:15 | Caching Fundamentals & Redis Data Structures (75 min)**

**Topics:**

```
Why Cache?

Without cache:
User Request → Database Query (10-100ms) → Response

With cache:
User Request → Check Cache (0.1-1ms) → Cache Hit → Response
               or Miss → Database (10-100ms) → Update Cache → Response

Performance Improvement: 10-100x faster for cached data

Redis: In-Memory Data Structure Store

String: Simple key-value
set user:123 '{"name":"Maria"}'
get user:123

Hash: Multiple fields
hset user:123 name Maria email maria@example.com age 28
hgetall user:123

List: Ordered collection
lpush messages "hello"
lpush messages "world"
lrange messages 0 -1

Set: Unique values
sadd tags "python" "javascript" "database"
smembers tags

Sorted Set: Scored values (leaderboards, rankings)
zadd leaderboard 100 player:1
zadd leaderboard 150 player:2
zrange leaderboard 0 -1 WITHSCORES

Key Expiration (TTL):
setex session:abc 3600 '...'  // Expire in 1 hour
expire key 3600                // Set expiration on existing key
ttl key                         // Check remaining time
```

**10:15 - 10:30 | BREAK (15 min)**

**10:30 - 12:00 | Cache Patterns & Implementation (90 min)**

**Topics:**

```
Cache Patterns:

1. CACHE-ASIDE (Lazy Loading)
Most common pattern:
1. Check cache for data
2. If miss: query database
3. Store result in cache with TTL
4. Return data

Pros: Flexible, handles cache misses
Cons: Potential stale data

Code Pattern:
async function getUserCacheAside(userId) {
  const cached = await redis.get(`user:${userId}`);
  if (cached) return JSON.parse(cached);
  
  const user = await db.query(`SELECT * FROM users WHERE id = ?`, userId);
  await redis.setex(`user:${userId}`, 3600, JSON.stringify(user));
  return user;
}

2. WRITE-THROUGH
1. Write to cache
2. Write to database
3. Return success

Pros: Always consistent
Cons: Slower writes, complex failures

3. WRITE-BEHIND
1. Write to cache
2. Return immediately
3. Asynchronously write to database

Pros: Fast writes
Cons: Data loss risk if cache fails

Cache Invalidation Strategies:

TTL (Time-To-Live):
- Simple: setex key 300 value  // 5 minutes
- Downside: stale data briefly

Event-based:
- Update database
- Delete cache key
- Subsequent requests rebuild cache

Manual:
- Admin operation
- Clear cache when needed

Tag-based (complex):
- Tag related cache entries
- Invalidate all tags at once
```

**Live Demo - Redis Caching in Node.js:**

```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache-aside pattern
async function getUserProfile(userId) {
  const cacheKey = `user:profile:${userId}`;
  
  // Try cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    console.log('Cache hit!');
    return JSON.parse(cached);
  }
  
  // Cache miss - fetch from database
  console.log('Cache miss - querying database');
  const user = await db.query('SELECT * FROM users WHERE id = ?', userId);
  
  // Store in cache (expire in 1 hour)
  await client.setEx(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}

// Session storage
async function createUserSession(userId, sessionData) {
  const sessionId = generateId();
  const sessionKey = `session:${sessionId}`;
  
  // Store session with 24-hour expiration
  await client.setEx(
    sessionKey,
    86400,
    JSON.stringify(sessionData)
  );
  
  return sessionId;
}

// Rate limiting
async function checkRateLimit(userId, maxRequests = 100, windowSeconds = 60) {
  const key = `rate_limit:${userId}`;
  const current = await client.incr(key);
  
  if (current === 1) {
    await client.expire(key, windowSeconds);
  }
  
  return current > maxRequests;  // Is limited?
}

// Pub/Sub for real-time notifications
const subscriber = redis.createClient();
subscriber.subscribe('notifications', (message) => {
  console.log('Notification:', message);
});

const publisher = redis.createClient();
publisher.publish('notifications', 'User logged in');
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Redis Advanced Patterns & Performance (75 min)**

**Topics:**

```
Advanced Redis Patterns:

1. CACHE STAMPEDE Prevention
Problem: Multiple requests for same cache-miss
→ All hit database simultaneously

Solutions:
a) Lock pattern: First request locks, others wait
b) Probabilistic early expiration: Refresh before expiration
c) Circuit breaker: Stop cache updates if DB is down

2. DISTRIBUTED SESSIONS
Store user sessions in Redis instead of memory
→ Share sessions across servers
→ Sessions survive server restarts

3. LEADERBOARDS
Sorted Sets for rankings:
zadd leaderboard 1000 player:1
zadd leaderboard 1500 player:2
zrange leaderboard 0 -1 WITHSCORES  // Top 10

4. QUEUES & TASKS
Lists for job queues:
lpush task_queue '{"type": "email", "to": "user@example.com"}'
rpop task_queue  // Process tasks

5. REAL-TIME COUNTERS
Increment counters for metrics:
incr page_views:homepage
incr api_calls:user:123

Performance Tips:
- Use pipelining for batch operations
- Use Lua scripts for complex operations
- Implement appropriate TTLs
- Monitor memory usage
- Use connection pooling
- Batch writes to database
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:45 | Hands-On: Building Cache Layer (75 min)**

**Student Activity: Cache Implementation**

Build caching layer for e-commerce app

Requirements:
1. Cache product catalog
2. Implement user sessions
3. Add rate limiting per user
4. Create leaderboard for top products
5. Monitor cache hit rates
6. Measure performance improvements

**3:45 - 4:30 | Performance Benchmarking & Optimization (45 min)**

---

### FRIDAY: Architecture Decisions & Polyglot Persistence (4 hours)

**Learning Goals:**
- Apply CAP theorem to technology selection
- Evaluate database trade-offs
- Design multi-database architectures
- Document architecture decisions
- Present final projects

**9:00 - 10:00 | CAP Theorem & Database Trade-Offs (60 min)**

**Topics:**

```
CAP Theorem: Pick 2 of 3

Consistency (C): All nodes have same data
Availability (A): System responds to requests
Partition Tolerance (P): Works despite network splits

Database Positions:

PostgreSQL (CA):
- Strong consistency
- Available in single region
- Network partition = unavailable
- Good for: Financial transactions

MongoDB (AP):
- Available (always responds)
- Handles partitions
- Eventual consistency
- Good for: Content, user data

Cassandra (AP):
- Available
- Handles partitions
- Eventual consistency
- Good for: Time-series, high volume

Redis (CA):
- Consistent
- Available
- Single point of failure risk
- Good for: Cache, sessions

Neo4j (CA):
- Consistent
- Available
- Good for: Relationships

InfluxDB (AP):
- Available
- Partition tolerant
- Good for: Metrics

Selection Decision Matrix:

Application Needs    | Technology
─────────────────────┼──────────────
Strong consistency   | PostgreSQL, Neo4j
High availability    | MongoDB, Cassandra
Relationships        | Neo4j
Time-series          | InfluxDB
Metrics/monitoring   | InfluxDB, Prometheus
Caching/sessions     | Redis
Document storage     | MongoDB
Massive scale        | Cassandra, DynamoDB
```

**10:00 - 10:30 | BREAK (15 min)**

**10:30 - 12:00 | Polyglot Architecture Design (90 min)**

**Topics:**

```
Polyglot Persistence: Using Multiple Databases

Typical Architecture:

PostgreSQL: User accounts, orders (ACID)
↓ (core transactional data)
├─ MongoDB: Product catalog, content (flexible)
├─ Redis: Sessions, cache, real-time (speed)
├─ Neo4j: Recommendations (relationships)
└─ InfluxDB: User activity metrics (time-series)

Data Flow Example (E-Commerce):

User Login:
1. PostgreSQL: Verify credentials (consistency)
2. Redis: Create session (speed)
3. InfluxDB: Log login event (time-series)

Product Search:
1. Redis: Check cache (speed)
2. MongoDB: Query catalog (flexibility)
3. Neo4j: Get recommendations (relationships)
4. Redis: Store result (cache)
5. InfluxDB: Log search (metrics)

Order Placement:
1. PostgreSQL: Create order (transactions)
2. MongoDB: Log order details (storage)
3. Neo4j: Update user-product graph
4. InfluxDB: Record purchase metric
5. Redis: Invalidate cache

Synchronization Strategies:

1. Event-driven (recommended)
   - Action happens → Event generated
   - Multiple services listen and react
   - Example: Order created → Update Neo4j, InfluxDB

2. Periodic Sync
   - Background job syncs data hourly
   - Simple but potential stale data

3. API Calls
   - One service calls another directly
   - Tighter coupling, easier to debug

4. Event Sourcing
   - Store all events as immutable log
   - Rebuild state by replaying events
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | Architecture Decision Records (ADRs) (75 min)**

**Topics:**

```
Documenting Architecture Decisions:

ADR Template:

Title: Decision about technology/pattern

Context:
- What problem are we solving?
- What constraints do we have?
- What options were considered?

Decision:
- Which option did we choose?
- Why is this the best fit?

Consequences:
- What are the trade-offs?
- What become easier/harder?
- What future decisions does this affect?

Status:
- Accepted / Proposed / Deprecated
```

**Example ADR:**

```markdown
# ADR: Use PostgreSQL for User Accounts

## Context
We need to store user account data that must be:
- Consistent (no duplicate accounts)
- ACID compliant (transactions)
- Queryable by multiple fields
- Backed up reliably

## Decision
Use PostgreSQL for user account storage.

## Rationale
- ACID guarantees prevent duplicate accounts
- Transactions ensure data consistency
- SQL provides flexible querying
- Mature, battle-tested, well-documented
- Lower operational complexity than NoSQL

## Alternatives Considered
- MongoDB: Would need application-level consistency logic
- Cassandra: Eventual consistency not appropriate for accounts

## Consequences
- Must scale with read replicas, not horizontal sharding
- Schema changes require migrations
- Better consistency guarantees than NoSQL
- Operational team needs PostgreSQL expertise
```

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:30 | Sprint Review & Project Presentations (60 min)**

Students present their week-long polyglot project:

**Presentation Requirements (15 minutes each):**
1. Architecture diagram (5 minutes)
   - Show all databases used
   - Data flow between systems
   - Why each database was chosen

2. Technical demo (7 minutes)
   - Show working system
   - Demonstrate key features
   - Highlight polyglot aspects

3. Q&A (3 minutes)
   - Answer architecture questions
   - Defend technology choices

**3:30 - 4:00 | Week 14 Retrospective & Preview (30 min)**

---

## Assignments & Deliverables

### Daily Assignments (Due Each Day)

**Monday: MongoDB CRUD & Schema Design**
- Build user management API with 5 CRUD endpoints
- Include validation and error handling
- Create 2 different schema patterns
- Write documentation
- *Deliverable: GitHub repo with working Node.js API*

**Tuesday: Graph Queries & Recommendations**
- Build recommendation engine
- Create at least 10 nodes with relationships
- Implement 3 different query patterns
- Present sample results
- *Deliverable: Cypher queries with results*

**Wednesday: Time-Series Data & Analysis**
- Simulate IoT sensor with 100+ data points
- Query and aggregate data
- Create 3 analysis queries
- Visualize results
- *Deliverable: Python script with queries and output*

**Thursday: Caching Implementation**
- Build cache layer for database queries
- Implement session storage
- Add rate limiting
- Measure performance improvement
- *Deliverable: Benchmarking report with before/after metrics*

### Weekly Project: Polyglot Persistence Architecture (100 points)

**Project: Multi-Database E-Commerce Platform**

**Requirements:**

1. **Use 3-4 Different Databases (30 points)**
   - PostgreSQL: User accounts, orders (transactional)
   - MongoDB: Product catalog, reviews
   - Redis: Session cache, real-time data (choose one)
     - OR Neo4j: Recommendations, relationships
     - OR InfluxDB: Product view metrics
   - Justify each choice

2. **Implement Core Features (30 points)**
   - User authentication (PostgreSQL)
   - Product search (MongoDB)
   - Caching strategy (Redis)
   - Relationship queries (Neo4j) or metrics (InfluxDB)
   - Data synchronization between databases

3. **Architecture Documentation (20 points)**
   - System architecture diagram
   - Database schema diagrams
   - Data flow documentation
   - 3-5 ADRs explaining key decisions
   - Setup and run instructions

4. **Performance & Testing (15 points)**
   - Benchmarking report
   - Before/after caching metrics
   - Test coverage (unit + integration)
   - Load testing results

5. **Presentation (5 points)**
   - 15-minute presentation
   - Demo of working system
   - Q&A session

---

## Code Examples & Patterns

### MongoDB with Mongoose (Node.js)

```javascript
const mongoose = require('mongoose');

// Schema definition
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number,
  city: String,
  tags: [String],
  address: {
    street: String,
    city: String
  },
  createdAt: { type: Date, default: Date.now }
});

userSchema.index({ email: 1 });
userSchema.index({ city: 1, age: -1 });

const User = mongoose.model('User', userSchema);

// Usage
async function examples() {
  // Create
  const user = await User.create({
    name: 'Maria',
    email: 'maria@example.com',
    city: 'Berlin',
    tags: ['developer', 'vip']
  });

  // Read
  const found = await User.findOne({ email: 'maria@example.com' });

  // Update
  await User.updateOne(
    { _id: user._id },
    { $set: { age: 29 }, $push: { tags: 'team-lead' } }
  );

  // Delete
  await User.deleteOne({ _id: user._id });
}
```

### Neo4j Cypher Patterns

```cypher
-- Create nodes
CREATE (maria:User {id: 'maria', name: 'Maria Schmidt'})
CREATE (product:Product {id: 'p1', name: 'Laptop'})
CREATE (maria)-[:PURCHASED {date: date()}]->(product)

-- Recommendations
MATCH (you:User {id: $userId})
      -[:PURCHASED]->(product)<-[:PURCHASED]-(other:User)
      -[:PURCHASED]->(recommendation)
WHERE recommendation <> product
RETURN recommendation.name, COUNT(*) as score
ORDER BY score DESC
LIMIT 10
```

### Redis Cache Pattern

```javascript
async function getCachedUser(userId) {
  const cacheKey = `user:${userId}`;
  const cached = await redis.get(cacheKey);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  const user = await db.query('SELECT * FROM users WHERE id = ?', userId);
  await redis.setEx(cacheKey, 3600, JSON.stringify(user));
  return user;
}
```

### InfluxDB Write Pattern

```python
from influxdb_client import InfluxDBClient, Point

client = InfluxDBClient(url="http://localhost:8086", token=token, org=org)
write_api = client.write_api(write_precision=WritePrecision.S)

point = Point("sensor_data") \
    .tag("sensor_id", "sensor-1") \
    .field("temperature", 22.5) \
    .field("humidity", 65) \
    .time(datetime.utcnow(), WritePrecision.S)

write_api.write(bucket="my-bucket", record=point)
```

---

## Resource Materials

### Official Documentation
- [MongoDB Docs](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/) - Free courses
- [Neo4j Docs](https://neo4j.com/docs/)
- [Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/)
- [Redis Documentation](https://redis.io/documentation)
- [InfluxDB Docs](https://docs.influxdata.com/)

### Helpful Tools & GUIs
- **MongoDB Compass**: Visual database management
- **Neo4j Browser**: Query visualization
- **Redis Insight**: Redis GUI client
- **Grafana**: Metrics visualization

### Learning Resources
- "Seven Databases in Seven Weeks" book
- "NoSQL Distilled" by Martin Fowler
- YouTube: "Graph Databases Explained"
- YouTube: "InfluxDB Time-Series Tutorial"

---

## Assessment Rubric

### Daily Assignment Rubric (0-25 points each)

| Criteria | Excellent (25) | Good (20) | Fair (15) | Needs Work (0) |
|----------|---|---|---|---|
| **Functionality** | All features work | Most work | Some work | Doesn't run |
| **Code Quality** | Clean, DRY, documented | Generally good | Some issues | Poor |
| **Data Modeling** | Appropriate patterns | Good choices | Basic | Inappropriate |
| **Performance** | Optimized, indexed | Good | Acceptable | No optimization |
| **Documentation** | Complete, clear | Good | Minimal | Missing |

### Project Rubric (0-100 points)

| Category | Excellent (25) | Good (20) | Fair (15) | Needs Work (10) |
|----------|---|---|---|---|
| **Multiple Databases** | 3+ types justified | 2-3 types justified | Minimal types | Single database |
| **Features Complete** | All implemented | Most implemented | Some implemented | Partial/broken |
| **Documentation** | Comprehensive ADRs | Good docs | Basic docs | Minimal |
| **Performance** | Benchmarks, optimization | Tested, optimized | Tested | No metrics |

### Presentation Rubric (0-5 points)

- 1 point: Architecture clearly explained
- 1 point: Technical demo works well
- 1 point: Design decisions justified
- 1 point: Code is clean and understandable
- 1 point: Confident Q&A responses

---

## Troubleshooting Guide

### MongoDB Issues

**Connection Refused**
```bash
# Check MongoDB is running
ps aux | grep mongod

# Start MongoDB
brew services start mongodb-community

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

**Schema Validation Errors**
- Check data types match schema
- Verify required fields are present
- Use validation in driver (Mongoose) for consistency

**Slow Queries**
- Create indexes on frequently queried fields
- Use explain() to check query execution
- Profile slow queries with profiler

### Neo4j Issues

**Connection Issues**
```bash
# Check Neo4j is running
docker ps | grep neo4j

# Check logs
docker logs neo4j

# Default credentials: neo4j / neo4j (change on first login)
```

**Cypher Query Errors**
- Check syntax (case sensitive)
- Verify node labels and relationship types exist
- Use EXPLAIN to debug query plans

**Out of Memory**
- Reduce batch sizes
- Use LIMIT to paginate results
- Check for runaway queries

### Redis Issues

**Connection Refused**
```bash
# Start Redis
redis-server

# Or Docker
docker run -d -p 6379:6379 redis:latest

# Test connection
redis-cli ping  # Should return PONG
```

**Memory Issues**
- Monitor with: INFO memory
- Implement TTLs on keys
- Set maxmemory policy
- Clear unused cache entries

**Cache Invalidation**
- Track dependencies between cache keys
- Use tag-based invalidation libraries
- Monitor hit rates with INFO stats

### InfluxDB Issues

**Authentication Issues**
```bash
# Get token
influx auth list

# Test credentials
influx query --org my-org
```

**Query Performance**
- Add filters before aggregations
- Use appropriate time windows
- Check data volume with measurements
- Consider downsampling old data

**Data Not Appearing**
- Verify bucket name
- Check timestamp precision
- Confirm org and token
- Review retention policies

---

## Week 14 Reflection & Next Steps

**Student Reflection Questions:**
1. How would you choose between PostgreSQL, MongoDB, and Neo4j for a project?
2. Why is caching important, and what are the trade-offs?
3. How does polyglot persistence increase complexity?
4. What project would you build using each database type?
5. How do you measure successful architecture decisions?

**Next Week Preview (Week 15):**
- DevOps and containerization
- Monitoring and observability
- Production deployment patterns
- Scaling considerations
- Course capstone project

---

**Last Updated:** May 2025  
**Version:** 1.0