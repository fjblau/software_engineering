/**
 * Week 14: Neo4j Graph Database & Redis Caching Examples
 * ========================================================
 * 
 * Neo4j:
 * - Graph database fundamentals
 * - Cypher query language
 * - Nodes, relationships, and properties
 * - Use cases: social networks, recommendations, fraud detection
 * 
 * Redis:
 * - In-memory key-value store
 * - Caching patterns
 * - Session storage
 * - Rate limiting
 * - Pub/Sub messaging
 * 
 * Prerequisites: Neo4j running, Redis running
 * Install: npm install neo4j redis
 */

const neo4j = require('neo4j-driver');
const redis = require('redis');

// ============================================================================
// NEO4J - GRAPH DATABASE
// ============================================================================

/**
 * Connect to Neo4j database
 */
async function connectNeo4j() {
    const driver = neo4j.driver(
        'bolt://localhost:7687',
        neo4j.auth.basic('neo4j', 'password'),
        { maxConnectionPoolSize: 50 }
    );

    // Test connection
    await driver.verifyConnectivity();
    console.log('Connected to Neo4j');

    return driver;
}

/**
 * Close Neo4j driver connection
 */
async function closeNeo4j(driver) {
    await driver.close();
}

// ============================================================================
// NEO4J: CREATE OPERATIONS (Cypher)
// ============================================================================

/**
 * Create nodes and relationships
 */
async function createNodesAndRelationships(driver) {
    const session = driver.session();

    try {
        // Create single node
        const result1 = await session.run(
            `CREATE (maria:Person {
                name: 'Maria Schmidt',
                email: 'maria@example.com',
                age: 28,
                city: 'Berlin'
            })
            RETURN maria`
        );
        console.log('Created node:', result1.records[0].get('maria').properties);

        // Create multiple nodes with relationships
        const result2 = await session.run(
            `CREATE (maria:Person {name: 'Maria Schmidt', age: 28})
             CREATE (hans:Person {name: 'Hans Müller', age: 32})
             CREATE (lisa:Person {name: 'Lisa Weber', age: 25})
             CREATE (maria)-[:FRIENDS_WITH {since: 2020}]->(hans)
             CREATE (hans)-[:FRIENDS_WITH {since: 2021}]->(lisa)
             CREATE (maria)-[:WORKS_AT {title: 'Engineer'}]->(:Company {name: 'TechCorp'})
             RETURN maria, hans, lisa`
        );
        console.log('Created network of nodes and relationships');

        // Create with parameters (prevent injection)
        const params = {
            name: 'Klaus Fischer',
            email: 'klaus@example.com',
            age: 45
        };
        const result3 = await session.run(
            `CREATE (p:Person {
                name: $name,
                email: $email,
                age: $age
            })
            RETURN p`,
            params
        );

        // Merge (create if not exists, update if exists)
        await session.run(
            `MERGE (p:Person {email: 'maria@example.com'})
             SET p.lastLogin = timestamp()
             RETURN p`
        );

        return { result1, result2, result3 };
    } finally {
        await session.close();
    }
}

// ============================================================================
// NEO4J: QUERY OPERATIONS
// ============================================================================

/**
 * Query nodes and relationships
 */
async function queryNodes(driver) {
    const session = driver.session();

    try {
        // Find all nodes of type
        const all = await session.run(
            `MATCH (p:Person) RETURN p LIMIT 10`
        );
        console.log('All persons:', all.records.map(r => r.get('p').properties));

        // Find with filter
        const adults = await session.run(
            `MATCH (p:Person)
             WHERE p.age >= 25
             RETURN p.name, p.age
             ORDER BY p.age DESC`
        );

        // Find with relationship
        const friends = await session.run(
            `MATCH (maria:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH]->(friend)
             RETURN friend.name, friend.age`
        );
        console.log('Maria\'s friends:', friends.records.map(r => ({
            name: r.get('friend.name'),
            age: r.get('friend.age')
        })));

        // Multi-hop relationships (2 degrees)
        const friendOfFriends = await session.run(
            `MATCH (maria:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH*2]-(fof)
             WHERE maria <> fof
             RETURN DISTINCT fof.name`
        );

        // Find shortest path
        const shortestPath = await session.run(
            `MATCH (maria:Person {name: 'Maria Schmidt'}),
                   (lisa:Person {name: 'Lisa Weber'}),
                   path = shortestPath((maria)-[:FRIENDS_WITH*]-(lisa))
             RETURN path`
        );

        // Using optional match (LEFT JOIN equivalent)
        const withCompanies = await session.run(
            `MATCH (p:Person)
             OPTIONAL MATCH (p)-[:WORKS_AT]->(c:Company)
             RETURN p.name, c.name as company`
        );

        return { all, adults, friends, friendOfFriends };
    } finally {
        await session.close();
    }
}

// ============================================================================
// NEO4J: AGGREGATIONS AND ANALYSIS
// ============================================================================

/**
 * Graph analysis queries
 */
async function graphAnalysis(driver) {
    const session = driver.session();

    try {
        // Count nodes
        const count = await session.run(
            `MATCH (p:Person) RETURN count(p) as total`
        );
        console.log('Total persons:', count.records[0].get('total'));

        // Degree analysis (how many relationships)
        const degrees = await session.run(
            `MATCH (p:Person)-[r]->()
             RETURN p.name, count(r) as connections
             ORDER BY connections DESC`
        );

        // Network analysis - most connected
        const hub = await session.run(
            `MATCH (p:Person)
             WITH p, size((p)-[]->()) + size((p)<-[]-()) as degree
             RETURN p.name, degree
             ORDER BY degree DESC
             LIMIT 5`
        );

        // Clustering - groups of closely connected people
        const clusters = await session.run(
            `MATCH (p1:Person)-[:FRIENDS_WITH]-(p2:Person)
             WHERE p1.name < p2.name
             RETURN p1.name, p2.name`
        );

        // Recommendations based on common friends
        const recommendations = await session.run(
            `MATCH (you:Person {name: 'Maria Schmidt'})-[:FRIENDS_WITH]->(friend)-[:FRIENDS_WITH]->(suggestion)
             WHERE NOT (you)-[:FRIENDS_WITH]->(suggestion) 
               AND you <> suggestion
             RETURN suggestion.name, count(*) as mutualFriends
             ORDER BY mutualFriends DESC
             LIMIT 10`
        );

        return { count, degrees, hub, recommendations };
    } finally {
        await session.close();
    }
}

// ============================================================================
// NEO4J: UPDATE AND DELETE
// ============================================================================

/**
 * Update and delete operations
 */
async function updateDelete(driver) {
    const session = driver.session();

    try {
        // Update node property
        const updated = await session.run(
            `MATCH (p:Person {name: 'Maria Schmidt'})
             SET p.age = 29, p.verified = true
             RETURN p`
        );

        // Add relationship
        await session.run(
            `MATCH (maria:Person {name: 'Maria Schmidt'}),
                   (company:Company {name: 'TechCorp'})
             CREATE (maria)-[:WORKS_AT {title: 'Senior Engineer'}]->(company)`
        );

        // Remove relationship
        await session.run(
            `MATCH (p:Person)-[r:FRIENDS_WITH]->()
             WHERE p.age > 50
             DELETE r`
        );

        // Delete node
        await session.run(
            `MATCH (p:Person {name: 'Klaus Fischer'})
             DETACH DELETE p`
        );

        // Bulk operations with apoc
        await session.run(
            `MATCH (p:Person)
             SET p.processed = true`
        );

        return updated;
    } finally {
        await session.close();
    }
}

// ============================================================================
// NEO4J: REAL-WORLD USE CASES
// ============================================================================

/**
 * Social network recommendation engine
 */
async function socialNetworkRecommendations(driver) {
    const session = driver.session();

    try {
        // Find people to follow based on mutual connections
        const suggestions = await session.run(
            `MATCH (user:User {id: $userId})-[:FOLLOWS]->(friend:User)-[:FOLLOWS]->(suggestion:User)
             WHERE NOT (user)-[:FOLLOWS]->(suggestion) 
               AND user <> suggestion
             WITH suggestion, count(*) as score
             ORDER BY score DESC
             LIMIT 10
             RETURN suggestion.id, suggestion.name, score`,
            { userId: 'maria@example.com' }
        );

        return suggestions;
    } finally {
        await session.close();
    }
}

/**
 * Fraud detection using graph patterns
 */
async function fraudDetection(driver) {
    const session = driver.session();

    try {
        // Find suspicious transaction patterns
        const suspicious = await session.run(
            `MATCH (a:Account)-[t1:TRANSFERS_TO]->(b:Account)-[t2:TRANSFERS_TO]->(a)
             WHERE abs(t1.amount - t2.amount) < 100
               AND duration.inSeconds(t1.timestamp, t2.timestamp).seconds < 3600
             RETURN a, b, t1, t2`
        );

        // Ring detection - circular transactions
        const rings = await session.run(
            `MATCH (a:Account)-[:TRANSFERS_TO*3..5]->(a)
             RETURN a`
        );

        return { suspicious, rings };
    } finally {
        await session.close();
    }
}

// ============================================================================
// REDIS - IN-MEMORY CACHING
// ============================================================================

/**
 * Connect to Redis
 */
async function connectRedis() {
    const client = redis.createClient({
        host: 'localhost',
        port: 6379,
        retryStrategy: (times) => Math.min(times * 50, 2000),
        maxRetriesPerRequest: null,
        enableReadyCheck: false
    });

    client.on('error', (err) => console.error('Redis error:', err));
    client.on('connect', () => console.log('Connected to Redis'));

    await client.connect();
    return client;
}

// ============================================================================
// REDIS: BASIC OPERATIONS
// ============================================================================

/**
 * Basic Redis string operations
 */
async function redisBasics(client) {
    // Set and get
    await client.set('username', 'maria');
    const username = await client.get('username');
    console.log('Username:', username);

    // Set with expiration (TTL)
    await client.setEx('session:abc123', 3600, JSON.stringify({
        userId: 'maria',
        role: 'admin',
        loginTime: new Date()
    }));

    // Check if key exists
    const exists = await client.exists('session:abc123');
    console.log('Session exists:', exists);

    // Get TTL (remaining time to live)
    const ttl = await client.ttl('session:abc123');
    console.log('Session TTL:', ttl, 'seconds');

    // Delete keys
    await client.del('username');

    // Increment numeric values
    await client.incr('page_views:homepage');
    const views = await client.get('page_views:homepage');

    // Batch operations
    await client.mSet({
        'user:1:name': 'Maria',
        'user:1:email': 'maria@example.com',
        'user:2:name': 'Hans',
        'user:2:email': 'hans@example.com'
    });

    const user = await client.mGet(['user:1:name', 'user:1:email']);
    console.log('User data:', user);
}

// ============================================================================
// REDIS: COMPLEX DATA STRUCTURES
// ============================================================================

/**
 * Redis lists, sets, and hashes
 */
async function redisDataStructures(client) {
    // LISTS - ordered collections
    await client.rPush('notifications:maria', 'You have a new message');
    await client.rPush('notifications:maria', 'System update available');
    
    const notifications = await client.lRange('notifications:maria', 0, -1);
    console.log('Notifications:', notifications);

    const length = await client.lLen('notifications:maria');
    const popped = await client.lPop('notifications:maria');  // Get and remove first

    // SETS - unique collections
    await client.sAdd('user:maria:interests', 'javascript');
    await client.sAdd('user:maria:interests', 'typescript');
    await client.sAdd('user:maria:interests', 'nodejs');

    await client.sAdd('user:hans:interests', 'javascript');
    await client.sAdd('user:hans:interests', 'python');

    const interests = await client.sMembers('user:maria:interests');
    const commonInterests = await client.sInter(
        'user:maria:interests',
        'user:hans:interests'
    );
    console.log('Common interests:', commonInterests);

    // HASHES - objects/maps
    await client.hSet('user:maria:profile', {
        name: 'Maria Schmidt',
        email: 'maria@example.com',
        city: 'Berlin',
        joinDate: '2020-01-15'
    });

    const profile = await client.hGetAll('user:maria:profile');
    const name = await client.hGet('user:maria:profile', 'name');

    // SORTED SETS - ranked collections
    await client.zAdd('leaderboard', 100, 'maria');
    await client.zAdd('leaderboard', 85, 'hans');
    await client.zAdd('leaderboard', 92, 'lisa');

    const top3 = await client.zRevRange('leaderboard', 0, 2, { WITHSCORES: true });
    console.log('Top 3:', top3);

    // Increment score
    await client.zIncrBy('leaderboard', 10, 'maria');
}

// ============================================================================
// REDIS: CACHING PATTERNS
// ============================================================================

/**
 * Cache-Aside Pattern (lazy loading)
 * Check cache first, fetch from DB if missing, then cache it
 */
async function cacheAsidePattern(client, db) {
    async function getUser(userId) {
        // Try to get from cache
        const cacheKey = `user:${userId}`;
        let user = await client.get(cacheKey);

        if (user) {
            console.log('Cache HIT');
            return JSON.parse(user);
        }

        // Cache miss - fetch from database
        console.log('Cache MISS - querying database');
        user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);

        // Store in cache (expire in 1 hour)
        await client.setEx(cacheKey, 3600, JSON.stringify(user));

        return user;
    }

    return getUser;
}

/**
 * Write-Through Pattern
 * Write to cache AND database immediately
 */
async function writeThroughPattern(client, db) {
    async function updateUser(userId, data) {
        // Write to database
        await db.query('UPDATE users SET ? WHERE id = ?', [data, userId]);

        // Update cache
        const cacheKey = `user:${userId}`;
        await client.setEx(cacheKey, 3600, JSON.stringify(data));

        return data;
    }

    return updateUser;
}

/**
 * Write-Behind Pattern
 * Write to cache immediately, sync to database later
 */
async function writeBehindPattern(client, db) {
    async function updateUser(userId, data) {
        const cacheKey = `user:${userId}`;

        // Write to cache immediately
        await client.setEx(cacheKey, 3600, JSON.stringify(data));

        // Queue for database sync
        await client.rPush('db_sync_queue', JSON.stringify({
            userId,
            data,
            timestamp: Date.now()
        }));

        return data;
    }

    // Background worker to sync cache to database
    async function syncWorker() {
        while (true) {
            const item = await client.lPop('db_sync_queue');
            if (!item) {
                await new Promise(r => setTimeout(r, 1000));
                continue;
            }

            const { userId, data } = JSON.parse(item);
            await db.query('UPDATE users SET ? WHERE id = ?', [data, userId]);
        }
    }

    return { updateUser, syncWorker };
}

// ============================================================================
// REDIS: SESSION MANAGEMENT
// ============================================================================

/**
 * Session storage and management
 */
async function sessionManagement(client) {
    // Create session
    async function createSession(userId, userData) {
        const sessionId = require('crypto').randomBytes(16).toString('hex');
        const sessionData = {
            userId,
            userData,
            loginTime: new Date(),
            lastActivity: new Date()
        };

        // Store with 24 hour expiration
        await client.setEx(
            `session:${sessionId}`,
            86400,
            JSON.stringify(sessionData)
        );

        return sessionId;
    }

    // Get session
    async function getSession(sessionId) {
        const data = await client.get(`session:${sessionId}`);
        return data ? JSON.parse(data) : null;
    }

    // Update last activity
    async function touchSession(sessionId) {
        const data = await client.get(`session:${sessionId}`);
        if (data) {
            const session = JSON.parse(data);
            session.lastActivity = new Date();
            await client.setEx(
                `session:${sessionId}`,
                86400,
                JSON.stringify(session)
            );
        }
    }

    // Destroy session
    async function destroySession(sessionId) {
        await client.del(`session:${sessionId}`);
    }

    return { createSession, getSession, touchSession, destroySession };
}

// ============================================================================
// REDIS: RATE LIMITING
// ============================================================================

/**
 * Token bucket rate limiter
 */
async function rateLimiter(client) {
    async function isRateLimited(userId, maxRequests = 100, windowSeconds = 60) {
        const key = `rate_limit:${userId}`;

        // Increment request counter
        const current = await client.incr(key);

        // Set expiration on first request
        if (current === 1) {
            await client.expire(key, windowSeconds);
        }

        // Check if over limit
        if (current > maxRequests) {
            const ttl = await client.ttl(key);
            throw new Error(`Rate limit exceeded. Try again in ${ttl} seconds`);
        }

        return current;
    }

    return isRateLimited;
}

/**
 * Sliding window rate limiter
 */
async function slidingWindowRateLimiter(client) {
    async function isRateLimited(userId, maxRequests = 100, windowSeconds = 60) {
        const key = `rate_limit:${userId}`;
        const now = Date.now();
        const windowStart = now - (windowSeconds * 1000);

        // Remove old entries
        await client.zRemRangeByScore(key, '-inf', windowStart);

        // Count current requests
        const count = await client.zCard(key);

        if (count >= maxRequests) {
            throw new Error('Rate limit exceeded');
        }

        // Add current request
        await client.zAdd(key, now, `${now}-${Math.random()}`);

        // Set expiration
        await client.expire(key, windowSeconds);

        return count + 1;
    }

    return isRateLimited;
}

// ============================================================================
// REDIS: PUB/SUB MESSAGING
// ============================================================================

/**
 * Publish/Subscribe for real-time messaging
 */
async function pubSubMessaging(client) {
    // Publisher
    async function publishEvent(channel, message) {
        await client.publish(channel, JSON.stringify(message));
        console.log(`Published to ${channel}:`, message);
    }

    // Subscriber
    async function subscribeToEvents(channels, callback) {
        const subscriber = client.duplicate();
        await subscriber.connect();

        await subscriber.subscribe(channels, (message) => {
            const data = JSON.parse(message);
            callback(data);
        });

        return subscriber;
    }

    // Example usage
    const subscriber = await subscribeToEvents(
        ['notifications', 'events'],
        (message) => {
            console.log('Received:', message);
        }
    );

    // Publish events
    await publishEvent('notifications', {
        type: 'user_joined',
        userId: 'maria',
        timestamp: Date.now()
    });

    return { publishEvent, subscribeToEvents };
}

// ============================================================================
// POLYGLOT PERSISTENCE PATTERN
// ============================================================================

/**
 * Combined usage of multiple database types
 */
async function polyglotPersistence(neo4jDriver, mongoClient, redisClient) {
    /**
     * E-commerce recommendation system using multiple DBs:
     * - PostgreSQL: Orders, transactions (ACID required)
     * - MongoDB: Product catalog, flexible schemas
     * - Redis: Shopping carts, real-time inventory
     * - Neo4j: Product recommendations, social graph
     */

    async function getUserRecommendations(userId) {
        // 1. Check Redis cache first
        const cacheKey = `recommendations:${userId}`;
        let cached = await redisClient.get(cacheKey);
        if (cached) {
            console.log('Using cached recommendations');
            return JSON.parse(cached);
        }

        // 2. Use Neo4j to find similar users' purchases
        const neo4jSession = neo4jDriver.session();
        try {
            const similarUsers = await neo4jSession.run(
                `MATCH (you:User {id: $userId})-[:BOUGHT]->(p1:Product)<-[:BOUGHT]-(other:User)
                 WHERE you <> other
                 WITH other, count(p1) as score
                 ORDER BY score DESC
                 LIMIT 10
                 MATCH (other)-[:BOUGHT]->(recommended:Product)
                 WHERE NOT (you)-[:BOUGHT]->(recommended)
                 RETURN recommended.id
                 LIMIT 5`,
                { userId }
            );

            const productIds = similarUsers.records.map(r => r.get('recommended.id'));

            // 3. Fetch product details from MongoDB
            const mongoDb = mongoClient.db('ecommerce');
            const products = await mongoDb
                .collection('products')
                .find({ _id: { $in: productIds } })
                .toArray();

            // 4. Cache the recommendations in Redis
            await redisClient.setEx(cacheKey, 3600, JSON.stringify(products));

            return products;
        } finally {
            await neo4jSession.close();
        }
    }

    return { getUserRecommendations };
}

// ============================================================================
// BEST PRACTICES
// ============================================================================

/*
 * NEO4J BEST PRACTICES:
 * 
 * 1. Query Performance:
 *    - Use EXPLAIN/PROFILE to analyze queries
 *    - Create indexes on frequently queried properties
 *    - Avoid unnecessary OPTIONAL MATCHes
 * 
 * 2. Data Modeling:
 *    - Design with queries in mind
 *    - Use relationships intentionally
 *    - Consider cardinality of relationships
 * 
 * 3. Relationships:
 *    - Use meaningful relationship names
 *    - Store relevant properties on relationships
 *    - Be careful with many-to-many relationships
 * 
 * REDIS BEST PRACTICES:
 * 
 * 1. Memory Management:
 *    - Always set TTL on keys
 *    - Use eviction policies wisely
 *    - Monitor memory usage
 * 
 * 2. Data Structures:
 *    - Choose right structure for use case
 *    - Lists for queues/stacks
 *    - Sets for unique collections
 *    - Sorted sets for rankings
 *    - Hashes for objects
 * 
 * 3. Caching:
 *    - Implement cache invalidation strategy
 *    - Use cache-aside for read-heavy workloads
 *    - Use write-through for consistency
 * 
 * 4. Security:
 *    - Always require authentication
 *    - Use SSL/TLS for connections
 *    - Validate all input data
 */

module.exports = {
    // Neo4j
    connectNeo4j,
    closeNeo4j,
    createNodesAndRelationships,
    queryNodes,
    graphAnalysis,
    updateDelete,
    fraudDetection,
    socialNetworkRecommendations,

    // Redis
    connectRedis,
    redisBasics,
    redisDataStructures,
    cacheAsidePattern,
    writeThroughPattern,
    writeBehindPattern,
    sessionManagement,
    rateLimiter,
    slidingWindowRateLimiter,
    pubSubMessaging,
    polyglotPersistence
};