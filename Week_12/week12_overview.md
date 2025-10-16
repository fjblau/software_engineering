# Week 12 Overview: "Advanced Backend & Databases"
## Deep Dive into Backend Development and Database Management

**Duration: 30 hours**
**Dates: May 12-16, 2025**

---

## Week Overview

Week 12 advances backend development skills with Flask/FastAPI, introduces PostgreSQL as a production database, teaches ORM (Object-Relational Mapping) with both Python and JavaScript, and covers database optimization and professional backend architecture patterns.

### Key Focus Areas:
- Advanced Flask/FastAPI (middleware, authentication, security)
- PostgreSQL deep dive (complex queries, joins, transactions)
- SQLAlchemy (Python ORM) vs Sequelize (Node.js ORM)
- Database optimization (indexes, query performance, N+1 problems)
- Professional backend architecture patterns
- JWT authentication and role-based authorization

### Week 12 Success Metrics:
- ✅ Students build production-grade backend APIs
- ✅ Students use PostgreSQL effectively
- ✅ Students implement authentication and authorization
- ✅ Students use ORMs (SQLAlchemy, Sequelize)
- ✅ Students optimize database queries
- ✅ Students follow professional backend patterns

---

## Daily Schedule

### Monday: Advanced Flask/FastAPI - Middleware, Authentication, Security
**6.5 hours**
- Flask/FastAPI middleware
- JWT authentication implementation
- Password hashing with bcrypt
- Environment variables and configuration
- Security best practices (OWASP basics)
- Rate limiting and API protection

### Tuesday: PostgreSQL Deep Dive - Complex Queries, Joins, Transactions
**6.5 hours**
- PostgreSQL installation and setup
- Complex SELECT queries
- JOIN operations (INNER, LEFT, RIGHT, FULL)
- Subqueries and CTEs
- Transactions and ACID properties
- Aggregation and GROUP BY

### Wednesday: SQLAlchemy (Python ORM) vs Sequelize (Node.js ORM)
**6.5 hours**
- What are ORMs and why use them?
- SQLAlchemy setup and models
- Sequelize setup and models
- Relationships in ORMs
- Migrations
- Query building with ORMs
- Comparing Python and JavaScript approaches

### Thursday: Database Optimization - Indexes, Performance, N+1 Problems
**6.5 hours**
- Database indexes (when and how)
- Query performance analysis (EXPLAIN)
- N+1 query problem
- Database connection pooling
- Caching strategies
- Pagination for large datasets

### Friday: Professional Backend Architecture Patterns
**4 hours**
- MVC pattern
- Repository pattern
- Service layer
- Error handling patterns
- API versioning
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 12, students will be able to:

1. **Advanced Backend**
   - Implement JWT authentication
   - Create middleware
   - Secure APIs properly
   - Handle errors professionally

2. **PostgreSQL**
   - Write complex SQL queries
   - Use JOINs effectively
   - Understand transactions
   - Optimize queries

3. **ORMs**
   - Use SQLAlchemy (Python)
   - Use Sequelize (Node.js)
   - Define models and relationships
   - Perform migrations

4. **Optimization**
   - Create database indexes
   - Identify and fix N+1 problems
   - Analyze query performance
   - Implement caching

5. **Architecture**
   - Organize backend code
   - Separate concerns
   - Follow design patterns
   - Write maintainable code

---

## Key Concepts

### Authentication & Security
- JWT (JSON Web Tokens)
- Password hashing (bcrypt)
- Authentication vs Authorization
- Role-based access control (RBAC)
- API keys and secrets

### PostgreSQL
- RDBMS (Relational Database Management System)
- SQL queries
- JOINs (INNER, LEFT, RIGHT, FULL)
- Transactions
- Indexes
- Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE)

### ORMs
- Object-Relational Mapping
- Models and schemas
- Relationships (one-to-one, one-to-many, many-to-many)
- Migrations
- Query builders

### Optimization
- Database indexes
- Query performance
- N+1 query problem
- Connection pooling
- Caching
- Pagination

### Architecture
- MVC (Model-View-Controller)
- Repository pattern
- Service layer
- Separation of concerns
- API versioning

---

## Deliverables

### Weekly Assignment: Production-Grade Backend API (100 points)

Build a RESTful API with authentication and database:

**Project Ideas:**
- **E-Commerce API** (products, orders, users)
- **Blog API** (posts, comments, users, categories)
- **Task Management API** (tasks, projects, teams, users)
- **Recipe API** (recipes, ingredients, users, ratings)

Choose Node.js/Express OR Python/FastAPI:

1. **RESTful API** (25 points)
   - At least 10 endpoints
   - Proper HTTP methods
   - Status codes
   - Input validation
   - Error handling

2. **JWT Authentication & Authorization** (20 points)
   - User registration
   - User login
   - JWT token generation
   - Protected routes
   - Role-based authorization (user, admin)

3. **PostgreSQL Database with Proper Relationships** (25 points)
   - At least 4 related tables
   - Foreign keys
   - One-to-many relationships
   - Many-to-many relationships
   - Database migrations

4. **Comprehensive Test Suite** (15 points)
   - Unit tests for business logic
   - Integration tests for API endpoints
   - Test authentication flows
   - 70%+ code coverage

5. **API Documentation & Deployment** (15 points)
   - Swagger/OpenAPI documentation
   - README with setup instructions
   - Environment variable management
   - Deployed to cloud platform (Render, Railway, Heroku)
   - Proper error logging

---

## Resources

### Flask/FastAPI
- [Flask Documentation](https://flask.palletsprojects.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/)

### PostgreSQL
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### ORMs
- [SQLAlchemy Documentation](https://docs.sqlalchemy.org/)
- [Sequelize Documentation](https://sequelize.org/)

### Deployment
- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)

### Tools
- [pgAdmin](https://www.pgadmin.org/) - PostgreSQL GUI
- [DBeaver](https://dbeaver.io/) - Universal database tool
- [Postman](https://www.postman.com/) - API testing

---

## Code Examples

### JWT Authentication with Flask
```python
from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
jwt = JWTManager(app)

# User registration
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    
    # Hash password
    hashed_password = generate_password_hash(data['password'])
    
    # Create user in database
    # ...
    
    return jsonify({'message': 'User created'}), 201

# User login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    
    # Find user in database
    # user = User.query.filter_by(email=data['email']).first()
    
    # Check password
    # if not check_password_hash(user.password, data['password']):
    #     return jsonify({'error': 'Invalid credentials'}), 401
    
    # Create JWT token
    access_token = create_access_token(identity=user.id)
    
    return jsonify({
        'access_token': access_token,
        'user': {'id': user.id, 'email': user.email}
    }), 200

# Protected route
@app.route('/api/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user_id = get_jwt_identity()
    # Get user from database
    # user = User.query.get(current_user_id)
    
    return jsonify({'user': user.to_dict()}), 200
```

### PostgreSQL Complex Queries
```sql
-- JOIN example: Get users with their orders
SELECT 
    users.id,
    users.name,
    orders.id AS order_id,
    orders.total,
    orders.created_at
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.created_at >= '2025-01-01'
ORDER BY orders.created_at DESC;

-- Aggregate with GROUP BY
SELECT 
    users.name,
    COUNT(orders.id) AS order_count,
    SUM(orders.total) AS total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.name
HAVING COUNT(orders.id) > 0;

-- Subquery
SELECT * FROM products
WHERE price > (
    SELECT AVG(price) FROM products
);

-- CTE (Common Table Expression)
WITH recent_orders AS (
    SELECT user_id, COUNT(*) as order_count
    FROM orders
    WHERE created_at >= NOW() - INTERVAL '30 days'
    GROUP BY user_id
)
SELECT users.name, recent_orders.order_count
FROM users
JOIN recent_orders ON users.id = recent_orders.user_id;
```

### SQLAlchemy Models (Python)
```python
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    posts = db.relationship('Post', backref='author', lazy=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'created_at': self.created_at.isoformat()
        }

class Post(db.Model):
    __tablename__ = 'posts'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Many-to-many with tags
    tags = db.relationship('Tag', secondary='post_tags', backref='posts')

class Tag(db.Model):
    __tablename__ = 'tags'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

# Many-to-many association table
post_tags = db.Table('post_tags',
    db.Column('post_id', db.Integer, db.ForeignKey('posts.id')),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'))
)

# Usage
def get_user_posts(user_id):
    user = User.query.get(user_id)
    return [post.to_dict() for post in user.posts]

def create_post(user_id, title, content, tag_names):
    post = Post(user_id=user_id, title=title, content=content)
    
    for tag_name in tag_names:
        tag = Tag.query.filter_by(name=tag_name).first()
        if not tag:
            tag = Tag(name=tag_name)
        post.tags.append(tag)
    
    db.session.add(post)
    db.session.commit()
    return post
```

### Sequelize Models (Node.js)
```javascript
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

// User model
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Post model
const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// Tag model
const Tag = sequelize.define('Tag', {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

// Relationships
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'userId', as: 'author' });

Post.belongsToMany(Tag, { through: 'PostTags' });
Tag.belongsToMany(Post, { through: 'PostTags' });

// Usage
async function getUserPosts(userId) {
    const user = await User.findByPk(userId, {
        include: [{ model: Post, as: 'posts' }]
    });
    return user.posts;
}

async function createPost(userId, title, content, tagNames) {
    const post = await Post.create({
        userId,
        title,
        content
    });
    
    for (const tagName of tagNames) {
        const [tag] = await Tag.findOrCreate({
            where: { name: tagName }
        });
        await post.addTag(tag);
    }
    
    return post;
}
```

### N+1 Query Problem
```python
# ❌ BAD - N+1 Problem (1 query for users + N queries for each user's posts)
users = User.query.all()
for user in users:
    print(f"{user.name} has {len(user.posts)} posts")  # Separate query each time!

# ✅ GOOD - Eager loading (1 query with JOIN)
users = User.query.options(db.joinedload(User.posts)).all()
for user in users:
    print(f"{user.name} has {len(user.posts)} posts")  # No additional query!
```

### Database Indexes
```sql
-- Create index for faster queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at);

-- Composite index
CREATE INDEX idx_posts_user_created ON posts(user_id, created_at);

-- Analyze query performance
EXPLAIN ANALYZE
SELECT * FROM posts WHERE user_id = 1 ORDER BY created_at DESC;
```

### Pagination
```python
# Flask-SQLAlchemy pagination
@app.route('/api/posts')
def get_posts():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 20, type=int)
    
    pagination = Post.query.order_by(Post.created_at.desc()).paginate(
        page=page,
        per_page=per_page,
        error_out=False
    )
    
    return jsonify({
        'posts': [post.to_dict() for post in pagination.items],
        'page': page,
        'per_page': per_page,
        'total': pagination.total,
        'pages': pagination.pages
    })
```

---

## Architecture Pattern Example

```python
# models/user.py
class User(db.Model):
    # ... model definition

# repositories/user_repository.py
class UserRepository:
    @staticmethod
    def find_by_email(email):
        return User.query.filter_by(email=email).first()
    
    @staticmethod
    def create(data):
        user = User(**data)
        db.session.add(user)
        db.session.commit()
        return user

# services/auth_service.py
class AuthService:
    def __init__(self):
        self.user_repo = UserRepository()
    
    def register(self, email, password):
        if self.user_repo.find_by_email(email):
            raise ValueError('Email already registered')
        
        hashed_password = generate_password_hash(password)
        user = self.user_repo.create({
            'email': email,
            'password': hashed_password
        })
        return user

# routes/auth_routes.py
@bp.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        auth_service = AuthService()
        user = auth_service.register(data['email'], data['password'])
        return jsonify(user.to_dict()), 201
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
```

---

## Notes for Instructor

- Start with authentication - students already understand basics
- PostgreSQL setup may require troubleshooting - have backup plans
- Compare SQLAlchemy and Sequelize side-by-side
- Show N+1 problem in action with slow queries
- Use EXPLAIN ANALYZE to visualize query performance
- Emphasize security best practices
- Discuss production deployment considerations
- Connect to React frontend from Week 11
- Prepare for Month 3 integration project (Week 13)

---

## Connection to Other Weeks

- **Week 7**: Built on Flask basics
- **Week 11**: Connect to React frontend
- **Week 13**: Use these skills in full-stack capstone
- **Week 14**: Compare SQL with NoSQL databases
- **Week 16**: Apply in final capstone project

Professional backend development is critical for full-stack roles - these skills are highly valued!