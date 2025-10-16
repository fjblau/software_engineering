/**
 * WEEK 9: ASYNCHRONOUS PROGRAMMING IN JAVASCRIPT
 * Comprehensive guide to callbacks, promises, async/await, and API integration
 * 
 * Learning Objectives:
 * - Understand callbacks and callback hell
 * - Master Promises (then, catch, finally)
 * - Use async/await for cleaner code
 * - Integrate with real external APIs
 * - Handle authentication and rate limiting
 * - Implement error handling and retry logic
 */

// ============================================================================
// SECTION 1: CALLBACKS - THE FOUNDATION
// ============================================================================

/**
 * Callbacks are functions passed as arguments to other functions
 * They're called when an operation completes
 */

// Simple callback example
function fetchUserData(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    
    // Simulate async operation (network request)
    setTimeout(() => {
        if (userId > 0) {
            callback(null, {
                id: userId,
                name: 'John Doe',
                email: 'john@example.com'
            });
        } else {
            callback(new Error('Invalid user ID'), null);
        }
    }, 1000);
}

// Using callback
// fetchUserData(1, (error, data) => {
//     if (error) {
//         console.error('Error:', error.message);
//     } else {
//         console.log('User data:', data);
//     }
// });


// ============================================================================
// SECTION 2: CALLBACK HELL (PYRAMID OF DOOM)
// ============================================================================

/**
 * Problem: Multiple nested callbacks become hard to read and maintain
 */

// function getWeatherForUser(userId, callback) {
//     fetchUserData(userId, (error, user) => {
//         if (error) return callback(error);
//         
//         fetchUserLocation(user.id, (error, location) => {
//             if (error) return callback(error);
//             
//             fetchWeather(location, (error, weather) => {
//                 if (error) return callback(error);
//                 
//                 callback(null, {
//                     user: user.name,
//                     location: location,
//                     weather: weather
//                 });
//             });
//         });
//     });
// }

// This is hard to read - solution: Promises!


// ============================================================================
// SECTION 3: PROMISES - THE SOLUTION TO CALLBACK HELL
// ============================================================================

/**
 * Promise states:
 * 1. PENDING - operation hasn't completed yet
 * 2. FULFILLED - operation succeeded, value is available
 * 3. REJECTED - operation failed, error is available
 */

// Creating a Promise
function fetchUserPromise(userId) {
    return new Promise((resolve, reject) => {
        // This setTimeout simulates a network request
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: 'Jane Doe',
                    email: 'jane@example.com'
                });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}

// Using Promises with .then() and .catch()
// fetchUserPromise(1)
//     .then(user => {
//         console.log('User fetched:', user);
//         // Can return another promise
//         return fetchUserPosts(user.id);
//     })
//     .then(posts => {
//         console.log('Posts fetched:', posts);
//     })
//     .catch(error => {
//         console.error('Error occurred:', error.message);
//     })
//     .finally(() => {
//         console.log('Request completed');
//     });


// ============================================================================
// SECTION 4: PROMISE CHAINS - HANDLING MULTIPLE OPERATIONS
// ============================================================================

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'My First Post', userId },
                { id: 2, title: 'My Second Post', userId }
            ]);
        }, 500);
    });
}

function fetchPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'Great post!', postId },
                { id: 2, text: 'Thanks for sharing!', postId }
            ]);
        }, 500);
    });
}

// Chain multiple promises
function getFullUserContent(userId) {
    return fetchUserPromise(userId)
        .then(user => {
            console.log('Step 1 - Got user:', user.name);
            return fetchUserPosts(user.id);
        })
        .then(posts => {
            console.log('Step 2 - Got posts:', posts.length);
            // Get comments for first post
            if (posts.length > 0) {
                return fetchPostComments(posts[0].id);
            }
            return [];
        })
        .then(comments => {
            console.log('Step 3 - Got comments:', comments.length);
            return {
                steps: 3,
                success: true
            };
        })
        .catch(error => {
            console.error('Chain failed:', error.message);
            return { success: false, error: error.message };
        });
}

// Execute: getFullUserContent(1)


// ============================================================================
// SECTION 5: PROMISE.ALL - PARALLEL EXECUTION
// ============================================================================

/**
 * Promise.all waits for ALL promises to complete
 * If ANY promise fails, the entire operation fails
 * Much faster than sequential execution
 */

function parallelFetch(userId) {
    // Start all requests at the same time
    const userPromise = fetchUserPromise(userId);
    const postsPromise = fetchUserPosts(userId);
    const settingsPromise = fetchUserSettings(userId);
    
    // Wait for all to complete
    return Promise.all([userPromise, postsPromise, settingsPromise])
        .then(([user, posts, settings]) => {
            console.log('All data fetched in parallel');
            return {
                user,
                posts,
                settings,
                totalFetchTime: 'fastest of all three'
            };
        })
        .catch(error => {
            console.error('One or more requests failed:', error.message);
        });
}

// execute: parallelFetch(1)


// ============================================================================
// SECTION 6: PROMISE.RACE - FIRST TO COMPLETE
// ============================================================================

/**
 * Promise.race returns the result of the FIRST promise to complete
 * Useful for timeouts and competitive requests
 */

function fetchUserWithTimeout(userId, timeout = 5000) {
    const fetchPromise = fetchUserPromise(userId);
    
    // Create a timeout promise that rejects after N milliseconds
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Request timeout after ${timeout}ms`));
        }, timeout);
    });
    
    // Whichever completes first wins
    return Promise.race([fetchPromise, timeoutPromise])
        .then(user => {
            console.log('User fetched in time:', user);
            return user;
        })
        .catch(error => {
            console.error('Request failed or timed out:', error.message);
            throw error;
        });
}

// execute: fetchUserWithTimeout(1, 500) // Will timeout
// execute: fetchUserWithTimeout(1, 5000) // Should succeed


// ============================================================================
// SECTION 7: PROMISE.ALLSETTLED - WAIT FOR ALL, REGARDLESS OF STATUS
// ============================================================================

/**
 * Unlike Promise.all, Promise.allSettled waits for ALL promises
 * Whether they resolve OR reject
 * Useful when you want results from multiple requests, even if some fail
 */

function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id => fetchUserPromise(id));
    
    return Promise.allSettled(promises)
        .then(results => {
            const successful = results
                .filter(r => r.status === 'fulfilled')
                .map(r => r.value);
            
            const failed = results
                .filter(r => r.status === 'rejected')
                .map((r, index) => ({
                    index: userIds[index],
                    error: r.reason.message
                }));
            
            console.log(`Successfully fetched: ${successful.length}`);
            console.log(`Failed: ${failed.length}`);
            
            return { successful, failed };
        });
}

// execute: fetchMultipleUsers([1, 2, -1, 3]) // One will fail, others succeed


// ============================================================================
// SECTION 8: ASYNC/AWAIT - MODERN PROMISE SYNTAX
// ============================================================================

/**
 * Async/await makes async code look like synchronous code
 * Much more readable than .then() chains
 * Requires functions to be marked as 'async'
 */

// Simple async function
async function getUser(userId) {
    try {
        // 'await' pauses execution until promise resolves
        const user = await fetchUserPromise(userId);
        console.log('Got user:', user.name);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error; // Re-throw for caller to handle
    }
}

// execute: getUser(1)


// ============================================================================
// SECTION 9: ASYNC/AWAIT WITH MULTIPLE OPERATIONS
// ============================================================================

/**
 * SEQUENTIAL: Operations happen one after another
 * Total time = operation1 + operation2 + operation3
 */

async function getUserContentSequential(userId) {
    try {
        console.time('Sequential Fetch');
        
        // Wait for user
        const user = await fetchUserPromise(userId);
        console.log('Step 1 - User:', user.name);
        
        // THEN wait for posts
        const posts = await fetchUserPosts(user.id);
        console.log('Step 2 - Posts:', posts.length);
        
        // THEN wait for comments
        const comments = await fetchPostComments(posts[0].id);
        console.log('Step 3 - Comments:', comments.length);
        
        console.timeEnd('Sequential Fetch');
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Sequential fetch failed:', error.message);
    }
}

// execute: getUserContentSequential(1) // Takes ~2 seconds


/**
 * PARALLEL: Operations happen at the same time
 * Total time = longest operation
 * Much faster when operations are independent!
 */

async function getUserContentParallel(userId) {
    try {
        console.time('Parallel Fetch');
        
        // Start all requests at once (don't await yet)
        const userPromise = fetchUserPromise(userId);
        const postsPromise = fetchUserPosts(userId);
        const settingsPromise = fetchUserSettings(userId);
        
        // Now wait for all to complete
        const [user, posts, settings] = await Promise.all([
            userPromise,
            postsPromise,
            settingsPromise
        ]);
        
        console.log('All data fetched:', {
            user: user.name,
            posts: posts.length,
            settings: Object.keys(settings).length
        });
        
        console.timeEnd('Parallel Fetch');
        
        return { user, posts, settings };
    } catch (error) {
        console.error('Parallel fetch failed:', error.message);
    }
}

// execute: getUserContentParallel(1) // Takes ~1 second (faster!)


// ============================================================================
// SECTION 10: ERROR HANDLING WITH ASYNC/AWAIT
// ============================================================================

/**
 * Errors in async functions can be caught with try/catch
 * Works similarly to synchronous code
 */

async function robustFetch(userId) {
    try {
        // If any await fails, we jump to catch block
        const user = await fetchUserPromise(userId);
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchPostComments(posts[0].id);
        
        return { user, posts, comments };
        
    } catch (error) {
        // Catch ANY error from any await
        console.error('Fetch failed at some point:', error.message);
        
        // Can handle different errors differently
        if (error.message.includes('timeout')) {
            console.error('Request timed out, please retry');
        } else if (error.message.includes('Invalid')) {
            console.error('Invalid parameters provided');
        } else {
            console.error('Unknown error occurred');
        }
        
        // Either return default value or re-throw
        return null;
        
    } finally {
        // Always executes, regardless of success or error
        console.log('Cleanup: closing connections, etc.');
    }
}

// execute: robustFetch(1)


// ============================================================================
// SECTION 11: REAL API INTEGRATION - OPENWEATHERMAP
// ============================================================================

/**
 * Working with real external APIs
 * Include your API key from environment variables (NOT in code)
 */

const API_KEY = process.env.WEATHER_API_KEY || 'YOUR_API_KEY_HERE';

async function getWeather(city) {
    try {
        // Construct API URL
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        
        // Fetch from real API
        const response = await fetch(url);
        
        // Check HTTP status
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`City "${city}" not found`);
            } else if (response.status === 401) {
                throw new Error('Invalid API key');
            } else if (response.status === 429) {
                throw new Error('Rate limited - too many requests');
            } else {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
        }
        
        // Parse JSON response
        const data = await response.json();
        
        return {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed
        };
        
    } catch (error) {
        console.error('Weather fetch error:', error.message);
        throw error;
    }
}

// Test: getWeather('Vienna')
// Result: { city: 'Vienna', country: 'AT', temperature: 15.3, ... }


// ============================================================================
// SECTION 12: MULTIPLE API CALLS IN PARALLEL
// ============================================================================

async function getWeatherForMultipleCities(cities) {
    try {
        // Start all requests at once
        const weatherPromises = cities.map(city => getWeather(city));
        
        // Wait for all to complete
        const weatherData = await Promise.all(weatherPromises);
        
        // Format results
        return weatherData.map((weather, index) => ({
            city: cities[index],
            ...weather
        }));
        
    } catch (error) {
        console.error('Multi-city fetch failed:', error.message);
        throw error;
    }
}

// Test: getWeatherForMultipleCities(['Vienna', 'Berlin', 'Paris'])
// Much faster than fetching sequentially!


// ============================================================================
// SECTION 13: AUTHENTICATION WITH API KEYS AND TOKENS
// ============================================================================

/**
 * Different authentication methods for different APIs
 */

// Method 1: API Key in URL (simple)
async function callAPIWithKeyInUrl(apiKey, resource) {
    const url = `https://api.example.com/${resource}?api_key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
}

// Method 2: API Key in Header (more secure)
async function callAPIWithKeyInHeader(apiKey, resource) {
    const url = `https://api.example.com/${resource}`;
    const response = await fetch(url, {
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

// Method 3: Bearer Token (for OAuth)
async function callAPIWithBearerToken(token, resource) {
    const url = `https://api.example.com/${resource}`;
    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

// Method 4: Basic Authentication
async function callAPIWithBasicAuth(username, password, resource) {
    const credentials = btoa(`${username}:${password}`); // Base64 encode
    const url = `https://api.example.com/${resource}`;
    const response = await fetch(url, {
        headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}


// ============================================================================
// SECTION 14: RATE LIMITING AND RETRY LOGIC
// ============================================================================

/**
 * Rate Limiting: Many APIs limit requests per minute
 * Retry Logic: Handle temporary failures gracefully
 */

// Simple rate limiter using a queue
class RateLimiter {
    constructor(requestsPerMinute) {
        this.requestsPerMinute = requestsPerMinute;
        this.requestTimestamps = [];
    }
    
    async waitIfNeeded() {
        // Remove old timestamps (older than 1 minute)
        const oneMinuteAgo = Date.now() - 60000;
        this.requestTimestamps = this.requestTimestamps.filter(
            ts => ts > oneMinuteAgo
        );
        
        // If we've hit the limit, wait
        if (this.requestTimestamps.length >= this.requestsPerMinute) {
            const oldestRequest = this.requestTimestamps[0];
            const waitTime = 60000 - (Date.now() - oldestRequest);
            console.log(`Rate limit reached. Waiting ${waitTime}ms...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
        
        // Record this request
        this.requestTimestamps.push(Date.now());
    }
}

// Usage
const limiter = new RateLimiter(60); // 60 requests per minute

async function limitedFetch(url) {
    await limiter.waitIfNeeded();
    return fetch(url);
}


// Retry logic with exponential backoff
async function fetchWithRetry(url, maxRetries = 3, backoffMs = 1000) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            
            // Handle rate limiting
            if (response.status === 429) {
                const waitTime = Math.pow(2, attempt) * backoffMs; // exponential backoff
                console.log(`Rate limited. Waiting ${waitTime}ms...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
                continue; // Retry
            }
            
            // Handle other errors
            if (!response.ok) {
                if (response.status >= 500) {
                    // Server error - might recover
                    throw new Error(`Server error: ${response.status}`);
                } else {
                    // Client error - won't recover
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
            }
            
            return await response.json();
            
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed:`, error.message);
            
            // Don't retry on last attempt
            if (attempt === maxRetries - 1) {
                throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
            }
            
            // Wait before retrying (exponential backoff)
            const waitTime = Math.pow(2, attempt) * backoffMs;
            console.log(`Retrying in ${waitTime}ms...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }
}

// Test: fetchWithRetry('https://api.example.com/data')


// ============================================================================
// SECTION 15: CACHING RESPONSES
// ============================================================================

/**
 * Cache API responses to reduce API calls and improve performance
 */

class CachedFetcher {
    constructor(cacheDurationMs = 5 * 60 * 1000) { // 5 minutes default
        this.cache = new Map();
        this.cacheDuration = cacheDurationMs;
    }
    
    async fetch(url, options = {}) {
        // Check cache first
        if (this.cache.has(url)) {
            const cachedData = this.cache.get(url);
            if (Date.now() - cachedData.timestamp < this.cacheDuration) {
                console.log('Cache hit for:', url);
                return cachedData.data;
            }
        }
        
        // Cache miss or expired - fetch fresh data
        console.log('Fetching fresh data for:', url);
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        // Store in cache
        this.cache.set(url, {
            data,
            timestamp: Date.now()
        });
        
        return data;
    }
    
    clearCache(url) {
        if (url) {
            this.cache.delete(url);
        } else {
            this.cache.clear();
        }
    }
}

// Usage
const fetcher = new CachedFetcher(60000); // 1 minute cache

// First call fetches from API
// fetcher.fetch('https://api.example.com/users/1')
//     .then(user => console.log('First call:', user));

// Second call within 1 minute returns cached data
// fetcher.fetch('https://api.example.com/users/1')
//     .then(user => console.log('Second call (cached):', user));


// ============================================================================
// SECTION 16: GITHUB API EXAMPLE - REAL WORLD
// ============================================================================

/**
 * Complete example: Fetch GitHub user data and repositories
 */

async function getGithubUserInfo(username) {
    try {
        // Fetch user info
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
            throw new Error(`User not found: ${username}`);
        }
        const user = await userResponse.json();
        
        // Fetch repositories in parallel
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!reposResponse.ok) {
            throw new Error('Failed to fetch repositories');
        }
        const repos = await reposResponse.json();
        
        return {
            user: {
                name: user.name,
                login: user.login,
                bio: user.bio,
                public_repos: user.public_repos,
                followers: user.followers,
                following: user.following
            },
            repositories: repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 5)
                .map(repo => ({
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    stars: repo.stargazers_count,
                    language: repo.language
                }))
        };
        
    } catch (error) {
        console.error('GitHub fetch error:', error.message);
        throw error;
    }
}

// Test: getGithubUserInfo('torvalds') // Get Linus Torvalds' info
// Result: { user: {...}, repositories: [{...}, ...] }


// ============================================================================
// SECTION 17: TOP-LEVEL AWAIT (ES2022+)
// ============================================================================

/**
 * In modern JavaScript (with type: "module"), you can use await at top level
 * Without wrapping in an async function
 */

// This only works in files with "type": "module" in package.json
// or in .mjs files

// Example (commented out - only works in module context):
/*
const weather = await getWeather('Vienna');
console.log('Temperature:', weather.temperature);

const users = await Promise.all([
    fetchUserPromise(1),
    fetchUserPromise(2),
    fetchUserPromise(3)
]);
console.log('Fetched users:', users.length);
*/


// ============================================================================
// SECTION 18: ASYNC GENERATOR FUNCTIONS
// ============================================================================

/**
 * Generators combined with async for iterating through async sequences
 */

async function* fetchUsersGenerator(startId, count) {
    for (let i = 0; i < count; i++) {
        try {
            const user = await fetchUserPromise(startId + i);
            yield user;
        } catch (error) {
            console.error(`Failed to fetch user ${startId + i}:`, error.message);
        }
    }
}

// Using async generator
async function processUsersStream() {
    let processedCount = 0;
    
    for await (const user of fetchUsersGenerator(1, 5)) {
        console.log('Processing user:', user.name);
        processedCount++;
    }
    
    console.log('Processed', processedCount, 'users');
}

// execute: processUsersStream()


// ============================================================================
// HELPER FUNCTIONS (used in examples above)
// ============================================================================

function fetchUserSettings(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: 'dark',
                notifications: true,
                language: 'en'
            });
        }, 500);
    });
}


// ============================================================================
// SUMMARY & BEST PRACTICES
// ============================================================================

/*
CALLBACKS → PROMISES → ASYNC/AWAIT

1. CALLBACKS
   ✓ Original async pattern
   ✗ Leads to "callback hell" with nesting
   ✗ Hard to read and maintain

2. PROMISES
   ✓ Better structured async code
   ✓ .then/.catch/.finally chains
   ✓ Promise.all for parallel execution
   ✗ Still more verbose than async/await

3. ASYNC/AWAIT (PREFERRED)
   ✓ Looks like synchronous code
   ✓ Uses try/catch for errors
   ✓ Most readable and maintainable
   ✓ Works with Promises under the hood

BEST PRACTICES:

1. Always handle errors - use try/catch with async/await
2. Use parallel execution when operations are independent
   - Start multiple promises, then await them together
   - Much faster than awaiting sequentially
3. Never commit API keys - use environment variables
4. Implement rate limiting for API calls
5. Add retry logic with exponential backoff for reliability
6. Cache responses when appropriate
7. Use meaningful error messages
8. Test async code thoroughly
9. Consider timeout protection for long operations
10. Document which APIs require authentication

COMMON PATTERNS:

// Fetch and parse
const response = await fetch(url);
const data = await response.json();

// Parallel requests
const [data1, data2] = await Promise.all([fetch1, fetch2]);

// With retry
const data = await fetchWithRetry(url, 3);

// With timeout
const data = await Promise.race([fetch(url), timeout(5000)]);

// Error handling
try {
    const data = await fetch(url).then(r => r.json());
} catch (error) {
    console.error('Failed:', error);
}
*/

// Export functions for use in other modules
module.exports = {
    fetchUserPromise,
    getWeather,
    getWeatherForMultipleCities,
    getGithubUserInfo,
    RateLimiter,
    CachedFetcher,
    fetchWithRetry,
    getFullUserContent,
    getUserContentSequential,
    getUserContentParallel
};