/**
 * Week 12: Advanced Backend Development - Node.js/Express
 * 
 * This file covers:
 * 1. Express.js fundamentals and middleware
 * 2. JWT authentication
 * 3. Password hashing with bcrypt
 * 4. Sequelize ORM setup and models
 * 5. Database relationships (one-to-many, many-to-many)
 * 6. CRUD operations with ORM
 * 7. Query optimization and eager loading
 * 8. Error handling patterns
 * 9. Authentication middleware
 * 10. Role-based authorization
 * 11. Input validation and sanitization
 * 12. API response standardization
 * 13. Rate limiting and security
 * 14. Logging and monitoring
 * 15. Environment configuration
 */

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes, Op } = require('sequelize');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config();

// ============================================================================
// 1. EXPRESS APP SETUP AND MIDDLEWARE
// ============================================================================

/**
 * Initialize Express app with essential middleware
 * Middleware order matters - helmet first for security, then logging, etc.
 */

const app = express();

// Security middleware
app.use(helmet()); // Set various HTTP headers
app.use(cors()); // Enable CORS

// Body parsing middleware
app.use(express.json({ limit: '10kb' })); // Limit payload size
app.use(express.urlencoded({ limit: '10kb', extended: true }));

// Logging middleware
app.use(morgan('combined')); // Log HTTP requests

// Request ID middleware for tracking
app.use((req, res, next) => {
  req.id = Math.random().toString(36).substr(2, 9);
  res.setHeader('X-Request-ID', req.id);
  next();
});

// ============================================================================
// 2. DATABASE SETUP WITH SEQUELIZE
// ============================================================================

/**
 * Initialize Sequelize ORM for PostgreSQL
 * Install: npm install sequelize pg pg-hstore
 */

const sequelize = new Sequelize(
  process.env.DB_NAME || 'bootcamp',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established');
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }
}

testConnection();

// ============================================================================
// 3. MODELS - DATABASE SCHEMA DEFINITION
// ============================================================================

/**
 * Define data models using Sequelize
 * Models represent tables in the database
 */

// User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  tableName: 'users'
});

// Post model
const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 200]
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  viewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  tableName: 'posts'
});

// Comment model
const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true,
  tableName: 'comments'
});

// Tag model
const Tag = sequelize.define('Tag', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'tags'
});

// ============================================================================
// 4. DEFINE RELATIONSHIPS
// ============================================================================

/**
 * Define associations between models
 * One-to-many, many-to-many relationships
 */

// User -> Post (one-to-many)
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'userId', as: 'author' });

// User -> Comment (one-to-many)
User.hasMany(Comment, { foreignKey: 'userId', as: 'comments' });
Comment.belongsTo(User, { foreignKey: 'userId', as: 'author' });

// Post -> Comment (one-to-many)
Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });
Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' });

// Post <-> Tag (many-to-many)
Post.belongsToMany(Tag, { through: 'PostTags', as: 'tags' });
Tag.belongsToMany(Post, { through: 'PostTags', as: 'posts' });

// Sync models with database
async function syncDatabase() {
  if (process.env.NODE_ENV === 'development') {
    await sequelize.sync({ alter: true });
    console.log('Models synchronized with database');
  }
}

// ============================================================================
// 5. PASSWORD HASHING - SECURITY
// ============================================================================

/**
 * Hash passwords for security - Never store plain text passwords!
 * Install: npm install bcrypt
 */

// Hash password before saving
User.beforeCreate(async (user) => {
  const saltRounds = 10;
  user.password = await bcrypt.hash(user.password, saltRounds);
});

// Also hash on update if password changes
User.beforeUpdate(async (user) => {
  if (user.changed('password')) {
    const saltRounds = 10;
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
});

// Method to compare passwords
User.prototype.comparePassword = async function(passwordAttempt) {
  return bcrypt.compare(passwordAttempt, this.password);
};

// Method to return user without password
User.prototype.toJSON = function() {
  const user = Object.assign({}, this.get());
  delete user.password;
  return user;
};

// ============================================================================
// 6. JWT AUTHENTICATION
// ============================================================================

/**
 * JWT (JSON Web Token) for stateless authentication
 * Install: npm install jsonwebtoken
 */

// Generate JWT token
function generateToken(userId, role) {
  const payload = {
    userId,
    role,
    iat: Math.floor(Date.now() / 1000)
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );

  return token;
}

// Verify JWT token
function verifyToken(token) {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    );
    return decoded;
  } catch (error) {
    return null;
  }
}

// ============================================================================
// 7. AUTHENTICATION MIDDLEWARE
// ============================================================================

/**
 * Middleware to verify JWT tokens
 * Protects routes that require authentication
 */

// Extract token from header
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const token = authHeader.substring(7); // Remove "Bearer "
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }

    // Get user from database
    const user = await User.findByPk(decoded.userId);

    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'User not found or inactive'
      });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Authentication failed',
      error: error.message
    });
  }
};

// Authorization middleware for roles
const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated'
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }

    next();
  };
};

// ============================================================================
// 8. API ROUTES - AUTHENTICATION
// ============================================================================

/**
 * User registration and login endpoints
 */

// Register route
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already registered'
      });
    }

    // Create user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName
    });

    // Generate token
    const token = generateToken(user.id, user.role);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: user.toJSON(),
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
});

// Login route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password required'
      });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user.id, user.role);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: user.toJSON(),
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
});

// Get current user profile
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    res.json({
      success: true,
      data: req.user.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============================================================================
// 9. API ROUTES - POSTS (CRUD)
// ============================================================================

/**
 * Create, Read, Update, Delete posts
 */

// Create post
app.post('/api/posts', authMiddleware, async (req, res) => {
  try {
    const { title, content, published } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content required'
      });
    }

    const post = await Post.create({
      title,
      content,
      published: published || false,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get all posts (with pagination and eager loading)
app.get('/api/posts', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Post.findAndCountAll({
      where: { published: true },
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'author',
              attributes: ['firstName', 'lastName']
            }
          ]
        },
        {
          model: Tag,
          as: 'tags',
          attributes: ['id', 'name'],
          through: { attributes: [] }
        }
      ],
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: rows,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single post with all details
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'author',
              attributes: ['firstName', 'lastName']
            }
          ]
        },
        {
          model: Tag,
          as: 'tags',
          attributes: ['id', 'name'],
          through: { attributes: [] }
        }
      ]
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Increment view count
    post.viewCount += 1;
    await post.save();

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Update post (only by author or admin)
app.put('/api/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Check authorization
    if (post.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this post'
      });
    }

    // Update post
    const { title, content, published } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    if (published !== undefined) post.published = published;

    await post.save();

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete post
app.delete('/api/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    if (post.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized'
      });
    }

    await post.destroy();

    res.json({
      success: true,
      message: 'Post deleted'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============================================================================
// 10. API ROUTES - COMMENTS
// ============================================================================

// Create comment
app.post('/api/posts/:postId/comments', authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: 'Comment content required'
      });
    }

    // Verify post exists
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const comment = await Comment.create({
      content,
      postId: req.params.postId,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      data: comment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============================================================================
// 11. QUERY OPTIMIZATION EXAMPLES
// ============================================================================

/**
 * Demonstration of performance optimization techniques
 */

// Problem: N+1 queries
// Bad: This makes 1 query for posts + N queries for authors
async function badQueryExample() {
  const posts = await Post.findAll();
  for (let post of posts) {
    const author = await User.findByPk(post.userId); // N queries!
  }
}

// Solution: Eager loading with include
async function goodQueryExample() {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        as: 'author',
        attributes: ['id', 'firstName', 'lastName']
      }
    ]
  });
  // Only 1 query!
}

// Advanced: Custom queries with sequelize.query()
async function complexQuery() {
  const results = await sequelize.query(
    `SELECT users.id, users.email, COUNT(posts.id) as post_count
     FROM users
     LEFT JOIN posts ON users.id = posts.user_id
     GROUP BY users.id, users.email
     HAVING COUNT(posts.id) > ?`,
    {
      replacements: [5],
      type: sequelize.QueryTypes.SELECT
    }
  );
  return results;
}

// Search with filters and operators
async function searchPosts(filters) {
  const { title, authorId, published, minViews, page = 1, limit = 10 } = filters;
  const offset = (page - 1) * limit;

  const where = {};

  if (title) {
    where.title = {
      [Op.iLike]: `%${title}%` // Case-insensitive search
    };
  }

  if (authorId) {
    where.userId = authorId;
  }

  if (published !== undefined) {
    where.published = published;
  }

  if (minViews) {
    where.viewCount = {
      [Op.gte]: minViews // Greater than or equal
    };
  }

  const posts = await Post.findAndCountAll({
    where,
    limit,
    offset,
    order: [['viewCount', 'DESC']]
  });

  return posts;
}

// ============================================================================
// 12. ERROR HANDLING MIDDLEWARE
// ============================================================================

/**
 * Global error handling middleware
 */

// Custom error class
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Error handling middleware (must be last!)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  console.error(`[${req.id}] Error:`, err);

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// ============================================================================
// 13. RATE LIMITING
// ============================================================================

/**
 * Prevent abuse with rate limiting
 * Install: npm install express-rate-limit
 */

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // limit login attempts
  skipSuccessfulRequests: true
});

app.use('/api/auth/login', authLimiter);
app.use('/api/', limiter);

// ============================================================================
// 14. DATABASE TRANSACTIONS
// ============================================================================

/**
 * Transactions ensure data consistency
 */

async function transferPosts(fromUserId, toUserId) {
  const transaction = await sequelize.transaction();

  try {
    // Update all posts from one user to another
    await Post.update(
      { userId: toUserId },
      { where: { userId: fromUserId } },
      { transaction }
    );

    // Delete from user
    const fromUser = await User.findByPk(fromUserId, { transaction });
    if (fromUser) {
      await fromUser.destroy({ transaction });
    }

    // Commit transaction
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

// ============================================================================
// 15. SERVER STARTUP
// ============================================================================

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await syncDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  startServer();
}

// ============================================================================
// BEST PRACTICES SUMMARY
// ============================================================================

/**
 * Backend Development Best Practices:
 * 
 * 1. Never commit secrets - use environment variables (.env file)
 * 2. Hash passwords with bcrypt (never store plain passwords)
 * 3. Use JWT for stateless authentication
 * 4. Validate and sanitize all inputs
 * 5. Use middleware for cross-cutting concerns
 * 6. Eager load relationships to avoid N+1 queries
 * 7. Use pagination for large datasets
 * 8. Implement proper error handling
 * 9. Use transactions for data consistency
 * 10. Implement rate limiting to prevent abuse
 * 11. Log important events for monitoring
 * 12. Separate concerns: routes, controllers, services, models
 * 13. Write tests for critical business logic
 * 14. Use indexes on frequently queried columns
 * 15. Document your API endpoints and responses
 * 16. Implement CORS properly
 * 17. Use HTTPS in production
 * 18. Monitor database performance
 * 19. Implement API versioning
 * 20. Use connection pooling for databases
 */

module.exports = {
  app,
  sequelize,
  User,
  Post,
  Comment,
  Tag,
  generateToken,
  verifyToken,
  authMiddleware,
  roleMiddleware,
  ApiError
};