# Week 14 Overview: "Data Architecture Deep Dive"
## Advanced Database Concepts - NoSQL, Graph, Time-Series & Polyglot Persistence

**Duration: 30 hours**
**Dates: May 26-30, 2025**

---

## Week Overview

Week 14 explores advanced database architectures beyond PostgreSQL. Students learn about NoSQL databases (MongoDB), graph databases (Neo4j), time-series databases (InfluxDB), caching with Redis, and when to use each type. The week culminates in a multi-database architecture project demonstrating polyglot persistence.

### Key Focus Areas:
- NoSQL deep dive - MongoDB (document databases, schema design)
- Graph databases - Neo4j (when and why to use them)
- Time-series databases - InfluxDB (real-time data scenarios)
- Caching strategies - Redis, memcached, application-level caching
- Data architecture decision framework
- Polyglot persistence patterns

### Week 14 Success Metrics:
- ✅ Students understand different database types
- ✅ Students use MongoDB effectively
- ✅ Students understand graph database concepts
- ✅ Students implement caching with Redis
- ✅ Students choose appropriate databases for scenarios
- ✅ Students build multi-database applications

---

## Daily Schedule

### Monday: NoSQL Deep Dive - MongoDB Document Databases
**6.5 hours**
- NoSQL vs SQL comparison
- MongoDB installation and setup
- Document structure and schema design
- CRUD operations in MongoDB
- Querying and indexing
- Relationships in MongoDB (embedded vs referenced)
- When to use document databases

### Tuesday: Graph Databases - Neo4j
**6.5 hours**
- What are graph databases?
- Nodes, relationships, and properties
- Cypher query language
- Use cases (social networks, recommendations, fraud detection)
- Neo4j setup and basics
- When to use graph databases
- Comparing with relational approaches

### Wednesday: Time-Series Databases & Real-Time Data
**6.5 hours**
- What are time-series databases?
- InfluxDB introduction
- IoT and sensor data scenarios
- Time-series query patterns
- Aggregation and downsampling
- Retention policies
- When to use time-series databases

### Thursday: Caching Strategies - Redis & Memcached
**6.5 hours**
- What is caching and why use it?
- Redis setup and data structures
- Cache patterns (cache-aside, write-through, write-behind)
- Application-level caching
- Cache invalidation strategies
- Session storage with Redis
- Performance benefits

### Friday: Data Architecture Decision Framework & Polyglot Persistence
**4 hours**
- Choosing the right database
- Trade-offs analysis
- CAP theorem
- Polyglot persistence patterns
- When to use multiple databases
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 14, students will be able to:

1. **NoSQL (MongoDB)**
   - Design document schemas
   - Perform CRUD operations
   - Query documents
   - Understand when to use MongoDB

2. **Graph Databases**
   - Understand graph data models
   - Write basic Cypher queries
   - Identify graph database use cases
   - Compare with relational approaches

3. **Time-Series Data**
   - Understand time-series concepts
   - Work with time-series databases
   - Identify time-series use cases
   - Query time-series data

4. **Caching**
   - Implement Redis caching
   - Choose caching strategies
   - Invalidate caches appropriately
   - Measure performance improvements

5. **Architecture Decisions**
   - Evaluate database options
   - Choose appropriate databases
   - Design multi-database systems
   - Document decisions

---

## Key Concepts

### Database Types
- **Relational** (PostgreSQL, MySQL) - Structured data, ACID
- **Document** (MongoDB, CouchDB) - Flexible schema, JSON-like
- **Key-Value** (Redis, DynamoDB) - Simple, fast
- **Graph** (Neo4j, ArangoDB) - Relationships
- **Time-Series** (InfluxDB, TimescaleDB) - Time-stamped data
- **Search** (Elasticsearch) - Full-text search

### MongoDB Concepts
- Collections (like tables)
- Documents (like rows)
- Embedded documents
- References
- Indexes
- Aggregation pipeline

### Graph Database Concepts
- Nodes (entities)
- Relationships (connections)
- Properties (attributes)
- Cypher query language
- Path queries
- Shortest path algorithms

### Caching
- Cache-aside (lazy loading)
- Write-through
- Write-behind
- Cache invalidation
- TTL (Time To Live)
- Cache stampede

### CAP Theorem
- **Consistency** - All nodes see same data
- **Availability** - System responds to requests
- **Partition Tolerance** - Works despite network issues
- Pick 2 of 3

### Polyglot Persistence
- Using multiple database types
- Each database for its strengths
- Data synchronization
- Complexity trade-offs

---

## Deliverables

### Weekly Assignment: Multi-Database Architecture Project (100 points)

Build an application using 3 different database types:

**Project Ideas:**
- **Social Media Platform**: PostgreSQL (users, posts), MongoDB (comments, likes), Redis (sessions, feed cache), Neo4j (friend connections)
- **E-Commerce**: PostgreSQL (orders, products), MongoDB (product catalog), Redis (cart, cache), Neo4j (recommendations)
- **IoT Monitoring System**: PostgreSQL (users, devices), InfluxDB (sensor data), Redis (real-time cache), MongoDB (device configs)

Requirements:

1. **Use 3 Different Database Types** (40 points)
   - PostgreSQL (or relational) for transactional data
   - MongoDB (or NoSQL) for flexible/document data
   - Redis for caching OR
   - Neo4j for relationships OR
   - InfluxDB for time-series
   - Justify each choice

2. **Implement Data Migration Scripts** (20 points)
   - Database initialization scripts
   - Seed data for all databases
   - Migration between databases (if applicable)
   - Data transformation scripts

3. **Comprehensive Architectural Decision Records (ADRs)** (20 points)
   - Document each database choice
   - Explain trade-offs
   - Justify decisions
   - Describe alternatives considered
   - Include performance benchmarking

4. **Performance Benchmarking** (15 points)
   - Measure query performance
   - Compare approaches
   - Document improvements from caching
   - Show before/after metrics

5. **Complete Documentation** (5 points)
   - Architecture diagram
   - Setup instructions for all databases
   - API documentation
   - Database schema documentation

---

## Resources

### MongoDB
- [MongoDB University](https://university.mongodb.com/) - Free courses
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM for Node.js
- [PyMongo](https://pymongo.readthedocs.io/) - Python driver

### Neo4j
- [Neo4j Documentation](https://neo4j.com/docs/)
- [Neo4j Sandbox](https://sandbox.neo4j.com/) - Free cloud instance
- [Cypher Reference](https://neo4j.com/docs/cypher-manual/)

### Redis
- [Redis Documentation](https://redis.io/documentation)
- [Redis Tutorial](https://try.redis.io/)
- [redis-py](https://redis-py.readthedocs.io/) - Python client
- [node-redis](https://github.com/redis/node-redis) - Node.js client

### InfluxDB
- [InfluxDB Documentation](https://docs.influxdata.com/)
- [InfluxDB Tutorial](https://docs.influxdata.com/influxdb/v2.0/get-started/)

### Architecture
- [CAP Theorem Explained](https://www.ibm.com/cloud/learn/cap-theorem)
- [Database Selection Guide](https://github.com/donnemartin/system-design-primer#sql-or-nosql)

---

## Code Examples

### MongoDB with Python
```python
from pymongo import MongoClient
from datetime import datetime

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['myapp']
posts = db['posts']

# Insert document
post = {
    'title': 'Learning MongoDB',
    'content': 'MongoDB is a document database...',
    'author': 'Maria Schmidt',
    'tags': ['database', 'nosql', 'mongodb'],
    'comments': [
        {'author': 'Hans', 'text': 'Great post!', 'date': datetime.now()}
    ],
    'created_at': datetime.now()
}
result = posts.insert_one(post)
print(f'Inserted post with ID: {result.inserted_id}')

# Query documents
for post in posts.find({'author': 'Maria Schmidt'}):
    print(post['title'])

# Update document
posts.update_one(
    {'_id': result.inserted_id},
    {'$push': {'comments': {'author': 'Lisa', 'text': 'Thanks!', 'date': datetime.now()}}}
)

# Aggregation
pipeline = [
    {'$match': {'author': 'Maria Schmidt'}},
    {'$group': {'_id': '$author', 'count': {'$sum': 1}}}
]
results = posts.aggregate(pipeline)
```

### Neo4j Cypher Queries
```cypher
-- Create nodes
CREATE (maria:Person {name: 'Maria Schmidt', age: 28})
CREATE (hans:Person {name: 'Hans Müller', age: 32})
CREATE (lisa:Person {name: 'Lisa Weber', age: 25})

-- Create relationships
CREATE (maria)-[:FRIENDS_WITH {since: 2020}]->(hans)
CREATE (hans)-[:FRIENDS_WITH {since: 2021}]->(lisa)

-- Query: Find Maria's friends
MATCH (maria:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH]->(friend)
RETURN friend.name

-- Query: Find friends of friends
MATCH (maria:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH*2]-(fof)
RETURN DISTINCT fof.name

-- Query: Shortest path
MATCH path = shortestPath(
  (maria:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH*]-(lisa:Person {name: 'Lisa Weber'})
)
RETURN path

-- Recommendation: Find people you might know
MATCH (you:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH]->(friend)-[:FRIENDS_WITH]->(suggestion)
WHERE NOT (you)-[:FRIENDS_WITH]->(suggestion) AND you <> suggestion
RETURN suggestion.name, COUNT(*) AS mutualFriends
ORDER BY mutualFriends DESC
```

### Redis Caching with Python
```python
import redis
import json
import time

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Cache-aside pattern
def get_user(user_id):
    cache_key = f'user:{user_id}'
    
    # Try to get from cache
    cached = r.get(cache_key)
    if cached:
        print('Cache hit!')
        return json.loads(cached)
    
    # Cache miss - get from database
    print('Cache miss - querying database')
    user = query_database(user_id)  # Expensive operation
    
    # Store in cache (expire after 1 hour)
    r.setex(cache_key, 3600, json.dumps(user))
    
    return user

# Session storage
def create_session(user_id, session_data):
    session_id = generate_session_id()
    r.setex(f'session:{session_id}', 86400, json.dumps(session_data))  # 24 hours
    return session_id

def get_session(session_id):
    data = r.get(f'session:{session_id}')
    return json.loads(data) if data else None

# Rate limiting
def is_rate_limited(user_id, max_requests=100, window=60):
    key = f'rate_limit:{user_id}'
    current = r.incr(key)
    
    if current == 1:
        r.expire(key, window)
    
    return current > max_requests
```

### Redis with Node.js
```javascript
const redis = require('redis');
const client = redis.createClient();

// Cache function results
async function getCachedData(key, fetchFunction, ttl = 3600) {
    // Try cache first
    const cached = await client.get(key);
    if (cached) {
        console.log('Cache hit!');
        return JSON.parse(cached);
    }
    
    // Cache miss - fetch data
    console.log('Cache miss - fetching data');
    const data = await fetchFunction();
    
    // Store in cache
    await client.setEx(key, ttl, JSON.stringify(data));
    
    return data;
}

// Usage
const users = await getCachedData('users:all', async () => {
    return await db.query('SELECT * FROM users');
}, 3600);
```

### InfluxDB Time-Series Example
```python
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
from datetime import datetime

# Connect to InfluxDB
client = InfluxDBClient(url="http://localhost:8086", token="your-token", org="myorg")
write_api = client.write_api(write_options=SYNCHRONOUS)

# Write temperature data
point = Point("temperature") \
    .tag("location", "office") \
    .tag("sensor", "sensor_1") \
    .field("value", 23.5) \
    .time(datetime.utcnow())

write_api.write(bucket="sensors", record=point)

# Query data
query = '''
from(bucket: "sensors")
  |> range(start: -1h)
  |> filter(fn: (r) => r["_measurement"] == "temperature")
  |> filter(fn: (r) => r["location"] == "office")
  |> aggregateWindow(every: 5m, fn: mean)
'''

query_api = client.query_api()
tables = query_api.query(query)

for table in tables:
    for record in table.records:
        print(f'{record.get_time()}: {record.get_value()}')
```

---

## Database Selection Decision Tree

```
START: What kind of data?

├── Structured, relational, ACID required
│   └── Use: PostgreSQL / MySQL
│
├── Flexible schema, JSON-like documents
│   └── Use: MongoDB
│
├── Heavy relationships, graph-like queries
│   └── Use: Neo4j
│
├── Time-stamped data, IoT, metrics
│   └── Use: InfluxDB / TimescaleDB
│
├── Simple key-value, caching, sessions
│   └── Use: Redis
│
└── Full-text search
    └── Use: Elasticsearch
```

---

## Architectural Decision Record Template

```markdown
# ADR 001: Use MongoDB for Product Catalog

## Status
Accepted

## Context
We need to store product data with varying attributes across categories.
Products have different fields (e.g., books have ISBN, clothes have size).

## Decision
Use MongoDB document database for product catalog.

## Consequences

### Positive
- Flexible schema accommodates different product types
- No need for complex EAV tables
- Easy to add new product attributes
- Good query performance for catalog browsing

### Negative
- No ACID transactions across collections
- Potential for inconsistent data
- More responsibility on application for data validation

## Alternatives Considered
1. PostgreSQL with JSONB - Good but less optimized for document queries
2. EAV model in PostgreSQL - Too complex, poor performance

## Performance Metrics
- Product query: 15ms (vs 45ms with PostgreSQL EAV)
- Schema change: 0 downtime (vs hours for migration)
```

---

## Notes for Instructor

- Start with MongoDB - most practical NoSQL introduction
- Neo4j is mind-opening but may be challenging
- InfluxDB is niche but important for IoT context
- Redis is highly practical - emphasize caching benefits
- Emphasize trade-offs, not "best" databases
- Show real performance benchmarks
- Discuss when NOT to use each database
- Connect to real-world architecture decisions
- Prepare for containerization next week (Week 15)

---

## Connection to Other Weeks

- **Week 3**: Database concepts now expanded
- **Week 12**: PostgreSQL complemented with other types
- **Week 15**: Will containerize all these databases
- **Week 16**: Apply in final capstone with appropriate database choices

Understanding diverse database technologies is crucial for system architecture and senior developer roles!