/**
 * Week 14: MongoDB - NoSQL Document Database Examples
 * =====================================================
 * 
 * This file demonstrates MongoDB fundamentals:
 * - Connection and setup
 * - Document CRUD operations
 * - Schema design patterns
 * - Embedding vs references
 * - Indexing strategies
 * - Aggregation pipeline
 * - Real-world examples
 * 
 * Prerequisites: MongoDB running locally or connection string available
 * Install: npm install mongodb mongoose
 */

const { MongoClient, ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// ============================================================================
// 1. BASIC CONNECTION AND SETUP
// ============================================================================

/**
 * Direct MongoDB connection with native driver
 */
async function connectNativeDriver() {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
    const client = new MongoClient(uri, { 
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
    });

    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Get database
        const db = client.db('myapp');
        
        // Get collection
        const collection = db.collection('users');

        // List all collections
        const collections = await db.listCollections().toArray();
        console.log('Collections:', collections.map(c => c.name));

        return { client, db };
    } catch (error) {
        console.error('Connection error:', error);
        throw error;
    }
}

/**
 * Using Mongoose for ODM (Object Document Mapper)
 */
async function connectMongoose() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp');
        console.log('Connected via Mongoose');
        return mongoose;
    } catch (error) {
        console.error('Mongoose connection error:', error);
        throw error;
    }
}

// ============================================================================
// 2. SCHEMA DESIGN - EMBEDDING VS REFERENCES
// ============================================================================

/**
 * Pattern 1: EMBEDDING - Nested documents (good for small, related data)
 * Use when: One-to-few relationship, data accessed together
 */
const userWithAddressEmbedded = {
    _id: ObjectId(),
    name: 'Maria Schmidt',
    email: 'maria@example.com',
    // Address embedded in user document
    address: {
        street: '123 Main St',
        city: 'Berlin',
        country: 'Germany',
        zipCode: '10115'
    },
    // Comments embedded
    comments: [
        { text: 'Great product!', author: 'Hans', rating: 5, date: new Date() },
        { text: 'Good value', author: 'Lisa', rating: 4, date: new Date() }
    ],
    createdAt: new Date()
};

/**
 * Pattern 2: REFERENCES - Store ObjectId of related document (good for large, shared data)
 * Use when: One-to-many relationship, data accessed separately, potential duplication
 */
const userWithAddressReference = {
    _id: ObjectId(),
    name: 'Maria Schmidt',
    email: 'maria@example.com',
    addressId: ObjectId('507f1f77bcf86cd799439011'), // Reference to Address document
    commentIds: [
        ObjectId('507f1f77bcf86cd799439012'),
        ObjectId('507f1f77bcf86cd799439013')
    ],
    createdAt: new Date()
};

/**
 * Pattern 3: HYBRID - Embedded for frequently accessed, refs for optional data
 * Best practice for most applications
 */
const userHybrid = {
    _id: ObjectId(),
    name: 'Maria Schmidt',
    email: 'maria@example.com',
    // Embed address for quick access
    address: {
        street: '123 Main St',
        city: 'Berlin'
    },
    // Reference to posts (accessed separately, can be many)
    postIds: [ObjectId(), ObjectId()],
    // Embed recent activity
    lastActivity: {
        type: 'login',
        timestamp: new Date(),
        ipAddress: '192.168.1.1'
    }
};

// ============================================================================
// 3. CRUD OPERATIONS - CREATE, READ, UPDATE, DELETE
// ============================================================================

/**
 * CREATE: Insert documents
 */
async function createDocuments(db) {
    const users = db.collection('users');

    // Insert single document
    const result = await users.insertOne({
        name: 'Maria Schmidt',
        email: 'maria@example.com',
        age: 28,
        city: 'Berlin',
        createdAt: new Date()
    });
    console.log('Inserted:', result.insertedId);

    // Insert multiple documents
    const bulkResult = await users.insertMany([
        { name: 'Hans Müller', email: 'hans@example.com', age: 32, city: 'Munich' },
        { name: 'Lisa Weber', email: 'lisa@example.com', age: 25, city: 'Hamburg' },
        { name: 'Klaus Fischer', email: 'klaus@example.com', age: 45, city: 'Berlin' }
    ]);
    console.log('Inserted:', bulkResult.insertedCount, 'documents');

    return result;
}

/**
 * READ: Query documents
 */
async function readDocuments(db) {
    const users = db.collection('users');

    // Find one document
    const user = await users.findOne({ email: 'maria@example.com' });
    console.log('Found user:', user);

    // Find multiple documents
    const berlinUsers = await users.find({ city: 'Berlin' }).toArray();
    console.log('Berlin users:', berlinUsers.length);

    // Find with filter and projection (include/exclude fields)
    const emails = await users
        .find({}, { projection: { email: 1, name: 1, _id: 0 } })
        .toArray();
    console.log('Emails:', emails);

    // Find with sort, limit, skip
    const recent = await users
        .find({})
        .sort({ createdAt: -1 })      // -1 for descending
        .limit(10)
        .skip(0)
        .toArray();

    return user;
}

/**
 * UPDATE: Modify documents
 */
async function updateDocuments(db) {
    const users = db.collection('users');

    // Update one document
    const updated = await users.updateOne(
        { email: 'maria@example.com' },
        { 
            $set: { 
                age: 29,
                updatedAt: new Date()
            }
        }
    );
    console.log('Modified:', updated.modifiedCount);

    // Update multiple documents
    await users.updateMany(
        { city: 'Berlin' },
        { 
            $set: { country: 'Germany' },
            $inc: { score: 10 }  // Increment a field
        }
    );

    // Push to array (add element)
    await users.updateOne(
        { email: 'maria@example.com' },
        { 
            $push: {
                hobbies: 'reading',
                tags: { $each: ['vip', 'regular'] }  // Add multiple
            }
        }
    );

    // Pull from array (remove element)
    await users.updateOne(
        { email: 'maria@example.com' },
        { $pull: { hobbies: 'reading' } }
    );

    // Replace entire document
    await users.replaceOne(
        { email: 'maria@example.com' },
        {
            name: 'Maria Müller',
            email: 'maria.mueller@example.com',
            age: 30,
            city: 'Berlin'
        }
    );

    return updated;
}

/**
 * DELETE: Remove documents
 */
async function deleteDocuments(db) {
    const users = db.collection('users');

    // Delete one document
    const deleted = await users.deleteOne({ email: 'klaus@example.com' });
    console.log('Deleted:', deleted.deletedCount);

    // Delete multiple documents
    await users.deleteMany({ age: { $lt: 18 } });

    // Delete all documents (careful!)
    // await users.deleteMany({});

    return deleted;
}

// ============================================================================
// 4. QUERYING PATTERNS
// ============================================================================

/**
 * Query operators and patterns
 */
async function advancedQueries(db) {
    const users = db.collection('users');

    // Comparison operators
    const youngUsers = await users
        .find({ age: { $lt: 30 } })
        .toArray();

    const adults = await users
        .find({ age: { $gte: 18, $lte: 65 } })
        .toArray();

    // Logical operators
    const specialists = await users
        .find({
            $or: [
                { city: 'Berlin' },
                { age: { $gt: 40 } }
            ]
        })
        .toArray();

    const premium = await users
        .find({
            $and: [
                { age: { $gte: 25 } },
                { status: 'premium' },
                { country: 'Germany' }
            ]
        })
        .toArray();

    // Array operators
    const withHobbies = await users
        .find({ hobbies: { $exists: true, $ne: null } })
        .toArray();

    const multiHobby = await users
        .find({ hobbies: { $in: ['reading', 'gaming'] } })
        .toArray();

    // String operators
    const startsWith = await users
        .find({ email: { $regex: '^maria', $options: 'i' } })
        .toArray();

    const contains = await users
        .find({ bio: { $regex: 'developer', $options: 'i' } })
        .toArray();

    // Null/Type checks
    const noPhone = await users
        .find({ phone: { $type: 'null' } })
        .toArray();

    return { youngUsers, specialists, premium };
}

// ============================================================================
// 5. INDEXING FOR PERFORMANCE
// ============================================================================

/**
 * Index strategies to improve query performance
 */
async function indexingStrategies(db) {
    const users = db.collection('users');

    // Create single field index
    await users.createIndex({ email: 1 });  // 1 for ascending
    await users.createIndex({ city: -1 });  // -1 for descending

    // Create unique index (prevents duplicates)
    await users.createIndex({ email: 1 }, { unique: true });

    // Create compound index (multi-field)
    await users.createIndex({ city: 1, age: -1 });

    // Create text index for full-text search
    await users.createIndex({ name: 'text', bio: 'text' });

    // Create geospatial index
    await users.createIndex({ location: '2dsphere' });

    // TTL index - auto-delete documents after 24 hours
    await db.collection('sessions').createIndex(
        { createdAt: 1 },
        { expireAfterSeconds: 86400 }
    );

    // Create index with options
    await users.createIndex(
        { email: 1 },
        { 
            name: 'email_index',
            background: true,  // Build in background
            sparse: true        // Index only documents with field
        }
    );

    // List indexes
    const indexes = await users.getIndexes();
    console.log('Indexes:', indexes);

    // Query with index usage
    const result = await users.aggregate([
        { $match: { city: 'Berlin' } },
        { $explain: 'executionStats' }
    ]).toArray();

    return indexes;
}

// ============================================================================
// 6. AGGREGATION PIPELINE - COMPLEX DATA TRANSFORMATIONS
// ============================================================================

/**
 * Aggregation pipeline for data analysis and transformation
 */
async function aggregationPipeline(db) {
    const users = db.collection('users');
    const posts = db.collection('posts');

    // Basic aggregation with stages
    const result1 = await users.aggregate([
        // Stage 1: Filter documents
        { 
            $match: { 
                age: { $gte: 25 },
                city: { $in: ['Berlin', 'Munich'] }
            }
        },
        // Stage 2: Project (reshape documents)
        {
            $project: {
                name: 1,
                email: 1,
                city: 1,
                ageGroup: {
                    $cond: [{ $gte: ['$age', 40] }, 'senior', 'junior']
                }
            }
        },
        // Stage 3: Sort
        { $sort: { name: 1 } }
    ]).toArray();

    // Grouping and aggregation
    const stats = await users.aggregate([
        {
            $group: {
                _id: '$city',                    // Group by city
                count: { $sum: 1 },              // Count users
                avgAge: { $avg: '$age' },
                maxAge: { $max: '$age' },
                minAge: { $min: '$age' },
                emails: { $push: '$email' }      // Collect all emails
            }
        },
        { $sort: { count: -1 } }
    ]).toArray();

    console.log('City stats:', stats);

    // Join collections with $lookup
    const userPosts = await users.aggregate([
        { $match: { name: 'Maria Schmidt' } },
        {
            $lookup: {
                from: 'posts',
                localField: '_id',
                foreignField: 'userId',
                as: 'userPosts'
            }
        },
        {
            $project: {
                name: 1,
                email: 1,
                postCount: { $size: '$userPosts' },
                posts: '$userPosts'
            }
        }
    ]).toArray();

    // Unwind arrays and reconstruct
    const postComments = await posts.aggregate([
        { $match: { active: true } },
        { $unwind: '$comments' },           // Flatten comments array
        {
            $group: {
                _id: '$_id',
                title: { $first: '$title' },
                commentCount: { $sum: 1 },
                topRating: { $max: '$comments.rating' }
            }
        },
        { $sort: { commentCount: -1 } }
    ]).toArray();

    // Faceting - multiple aggregations in one query
    const facets = await posts.aggregate([
        {
            $facet: {
                byCategory: [
                    { $group: { _id: '$category', count: { $sum: 1 } } }
                ],
                byRating: [
                    { 
                        $group: { 
                            _id: { $round: ['$rating', 0] },
                            count: { $sum: 1 }
                        }
                    }
                ],
                recent: [
                    { $sort: { createdAt: -1 } },
                    { $limit: 5 },
                    { $project: { title: 1, createdAt: 1 } }
                ]
            }
        }
    ]).toArray();

    return { result1, stats, userPosts, postComments, facets };
}

// ============================================================================
// 7. BULK OPERATIONS AND TRANSACTIONS
// ============================================================================

/**
 * Bulk operations for efficient batch processing
 */
async function bulkOperations(db) {
    const users = db.collection('users');

    // Create bulk operation
    const bulk = users.initializeUnorderedBulkOp();

    // Add multiple operations
    bulk
        .find({ email: 'maria@example.com' }).updateOne({ $set: { verified: true } })
        .find({ city: 'Berlin' }).update({ $inc: { score: 5 } })
        .insert({ name: 'New User', email: 'new@example.com' })
        .find({ _id: ObjectId() }).removeOne();

    // Execute bulk operations
    const result = await bulk.execute();
    console.log('Bulk result:', result);

    return result;
}

/**
 * Transactions for ACID compliance (MongoDB 4.0+)
 */
async function transactionExample(client) {
    const session = client.startSession();

    try {
        await session.withTransaction(async () => {
            const db = client.db('myapp');
            const users = db.collection('users');
            const accounts = db.collection('accounts');

            // Multiple operations within transaction
            await users.updateOne(
                { _id: ObjectId() },
                { $inc: { balance: -100 } },
                { session }
            );

            await accounts.updateOne(
                { _id: ObjectId() },
                { $inc: { balance: 100 } },
                { session }
            );

            // All or nothing - if any fails, all rollback
        });
    } finally {
        await session.endSession();
    }
}

// ============================================================================
// 8. MONGOOSE ODM - SCHEMA-BASED APPROACH
// ============================================================================

/**
 * Mongoose schema definition with validation
 */
function defineMongooseSchemas() {
    // User schema with embedded address
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        age: {
            type: Number,
            min: 0,
            max: 150
        },
        address: {
            street: String,
            city: String,
            country: String,
            zipCode: String
        },
        tags: {
            type: [String],
            default: []
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'banned'],
            default: 'active'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }, { timestamps: true });

    // Add indexes
    userSchema.index({ email: 1 });
    userSchema.index({ city: 1, status: 1 });

    // Add methods
    userSchema.methods.getDisplayName = function() {
        return this.name.toUpperCase();
    };

    // Add static methods
    userSchema.statics.findByCity = function(city) {
        return this.find({ address: { city } });
    };

    // Pre-save middleware
    userSchema.pre('save', function(next) {
        this.updatedAt = Date.now();
        next();
    });

    // Create model
    const User = mongoose.model('User', userSchema);

    // Post schema with reference to User
    const postSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        content: String,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: [{
            text: String,
            author: String,
            createdAt: { type: Date, default: Date.now }
        }],
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    const Post = mongoose.model('Post', postSchema);

    return { User, Post, userSchema, postSchema };
}

/**
 * Mongoose CRUD operations
 */
async function mongooseCRUD() {
    const { User, Post } = defineMongooseSchemas();

    // Create
    const user = new User({
        name: 'Maria Schmidt',
        email: 'maria@example.com',
        age: 28,
        address: {
            city: 'Berlin',
            country: 'Germany'
        }
    });

    await user.save();
    console.log('Created user:', user._id);

    // Read
    const found = await User.findById(user._id);
    const byEmail = await User.findOne({ email: 'maria@example.com' });
    const berlinUsers = await User.find({ 'address.city': 'Berlin' });

    // Update
    user.age = 29;
    await user.save();

    // Or use findByIdAndUpdate
    await User.findByIdAndUpdate(
        user._id,
        { age: 30 },
        { new: true }  // Return updated document
    );

    // Populate (join with referenced collection)
    const postWithUser = await Post.findById(user._id)
        .populate('userId', 'name email');  // Select specific fields

    // Delete
    await User.findByIdAndDelete(user._id);

    return { user, found, berlinUsers };
}

// ============================================================================
// 9. BEST PRACTICES
// ============================================================================

/*
 * MONGODB BEST PRACTICES:
 * 
 * 1. Schema Design:
 *    - Use embedded documents for one-to-few relationships
 *    - Use references for one-to-many or many-to-many
 *    - Consider query patterns when designing schema
 * 
 * 2. Indexing:
 *    - Always index frequently queried fields
 *    - Use compound indexes for multi-field queries
 *    - Monitor index usage with explain()
 * 
 * 3. Performance:
 *    - Use projection to reduce data transfer
 *    - Use aggregation pipeline for complex queries
 *    - Use bulk operations for batch inserts/updates
 * 
 * 4. Data Integrity:
 *    - Use validation at schema level
 *    - Use transactions for multi-document consistency
 *    - Implement application-level validation
 * 
 * 5. Scalability:
 *    - Plan for horizontal scaling with sharding
 *    - Use connection pooling
 *    - Monitor and optimize slow queries
 * 
 * 6. Security:
 *    - Always use authentication
 *    - Use role-based access control (RBAC)
 *    - Never store sensitive data in plain text
 *    - Validate and sanitize user input
 * 
 * 7. Backup & Recovery:
 *    - Regular backups with mongodb dump
 *    - Test restore procedures
 *    - Use replication for high availability
 * 
 * 8. Data Consistency:
 *    - Use transactions for operations requiring atomicity
 *    - Implement idempotent operations
 *    - Handle duplicate key errors gracefully
 */

module.exports = {
    connectNativeDriver,
    connectMongoose,
    createDocuments,
    readDocuments,
    updateDocuments,
    deleteDocuments,
    advancedQueries,
    indexingStrategies,
    aggregationPipeline,
    bulkOperations,
    transactionExample,
    defineMongooseSchemas,
    mongooseCRUD
};