# Week 9 Teacher's Guide: Asynchronous Programming
## Async in JavaScript & Python - Real API Integration

**Duration:** 35 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** April 22-25, 2025  
**Note:** Easter Holiday April 14-21 (Classes resume April 22)  
**Focus:** Callbacks, Promises, Async/Await, Real APIs, Authentication

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

Week 9 is the critical bridge from synchronous to asynchronous programming. After the Easter break self-study, students return to master non-blocking operations in both JavaScript and Python. This week emphasizes **real-world API integration**, teaching students to handle authentication, rate limiting, and graceful error handling.

### Key Teaching Points
- Async programming is essential for modern development
- Callbacks → Promises → async/await shows the evolution
- JavaScript and Python have different async models but similar patterns
- Error handling in async code requires different thinking
- Real APIs have constraints: rate limits, authentication, timeouts
- Performance benefits are significant but require proper implementation

### Week 9 Success Metrics
✅ Students understand async vs sync execution  
✅ Students master Promises in JavaScript  
✅ Students write clean async/await code in both languages  
✅ Students integrate with real external APIs  
✅ Students implement proper authentication  
✅ Students handle rate limiting gracefully  
✅ Students debug async issues confidently  

---

## Learning Objectives

By the end of Week 9, students will be able to:

### JavaScript Asynchronous Programming
- Understand callback functions and callback hell
- Create and chain Promises with `.then()`, `.catch()`, `.finally()`
- Use Promise utilities: `Promise.all()`, `Promise.race()`, `Promise.allSettled()`
- Write async functions with `async/await` syntax
- Implement error handling with try/catch blocks
- Distinguish between sequential and parallel async execution
- Perform parallel operations efficiently

### Python Asynchronous Programming
- Understand Python's event loop and asyncio library
- Write coroutines with `async def` and `await`
- Use `asyncio.gather()` for parallel execution
- Make async HTTP requests with aiohttp
- Handle async errors with try/except
- Compare async patterns between JavaScript and Python

### API Integration & Security
- Authenticate with APIs using API keys
- Understand Bearer tokens and OAuth basics
- Implement rate limiting strategies
- Handle network errors gracefully
- Parse and validate API responses
- Use environment variables for secrets

### Professional Practices
- Never commit API keys or secrets
- Document API integration patterns
- Implement retry logic with exponential backoff
- Cache responses appropriately
- Write testable async code
- Monitor performance of async operations

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday April 22)

**Required Actions:**
1. ✅ Sign up for free API keys (OpenWeatherMap, GitHub API, etc.)
2. ✅ Test all API endpoints with current credentials
3. ✅ Create `.env.example` files for student projects
4. ✅ Test all code examples on Windows, Mac, and Linux
5. ✅ Create demo repositories with starter templates
6. ✅ Prepare breakout rooms for pair programming
7. ✅ Set up project board for sprint tracking
8. ✅ Review async debugging tools in VS Code

**Classroom Setup:**
- Ensure all students can access external APIs
- Verify network doesn't block API calls
- Test rate limiting scenarios
- Prepare example error responses
- Have backup APIs if primary is down

### Student Prerequisites (Send Email Friday April 18)

**MUST HAVE BEFORE MONDAY:**
- [ ] Node.js v18+ installed
- [ ] Python 3.8+ installed with pip
- [ ] VS Code with JavaScript/Python extensions
- [ ] Git configured and working
- [ ] npm and pip functioning
- [ ] Postman or similar API testing tool installed

**MUST INSTALL BY MONDAY:**

```bash
# JavaScript dependencies (global)
npm install -g nodemon

# Python dependencies (create virtual environment)
python3 -m venv venv
source venv/bin/activate  # Mac/Linux
# OR
venv\Scripts\activate  # Windows

pip install aiohttp python-dotenv
```

**Run Verification:**

```bash
# JavaScript async support
node -e "console.log(process.version)"

# Python async support
python3 -c "import asyncio, aiohttp; print('Ready')"
```

### Software & Tool Requirements

| Tool | Version | Purpose | Installation |
|------|---------|---------|--------------|
| Node.js | 18+ LTS | JavaScript runtime | https://nodejs.org |
| npm | 9+ | JavaScript package manager | Bundled with Node |
| Python | 3.8+ | Python runtime | https://python.org |
| pip | Latest | Python package manager | Bundled with Python |
| VS Code | Latest | IDE | https://code.visualstudio.com |
| Postman | Latest | API testing | https://postman.com |
| Thunder Client | Latest | VS Code API testing | Extension |
| nodemon | Latest | Auto-reload Node | `npm install -g nodemon` |
| aiohttp | 3.8+ | Python async HTTP | `pip install aiohttp` |
| python-dotenv | Latest | Environment variables | `pip install python-dotenv` |
| Git | 2.30+ | Version control | https://git-scm.com |

### VS Code Extensions (Required by Wednesday)

**JavaScript/Node.js:**
- ES7+ React/Redux/React-Native snippets (dsznajder.es7-react-js-snippets)
- REST Client (humao.rest-client)
- Thunder Client (rangav.vscode-thunder-client)

**Python:**
- Python (ms-python.python)
- Pylance (ms-python.vscode-pylance)
- Pylint (ms-python.pylint)

**General:**
- GitLens (eamodio.gitlens)
- Thunder Client (rangav.vscode-thunder-client)
- TODO Highlight (wayou.vscode-todo-highlight)

### Required API Accounts (Set Up By Monday)

Create free accounts and get API keys:

1. **OpenWeatherMap** (Weather data)
   - Sign up: https://openweathermap.org/api
   - Free tier: 1000 calls/day
   - Save key to `.env`: `WEATHER_API_KEY=your_key_here`

2. **GitHub API** (Developer data)
   - Token: GitHub Settings → Developer settings → Personal access tokens
   - Free tier: 60 requests/hour (unauthenticated), 5000/hour (authenticated)

3. **JSONPlaceholder** (Fake API for testing)
   - No registration needed
   - URL: https://jsonplaceholder.typicode.com/
   - Perfect for examples without rate limits

4. **REST Countries** (Country data)
   - Sign up: https://restcountries.com/
   - No API key needed
   - Free tier available

---

## Daily Schedule & Topics

### MONDAY: Callbacks and Promises (JavaScript) – 6.5 hours

**Learning Goals:**
- Understand how callbacks work
- Recognize callback hell
- Master Promise fundamentals
- Chain promises effectively
- Use Promise utilities

**9:00 - 9:30 | Daily Standup & Warm-up (30 min)**
- Welcome back after Easter break
- Review of Week 8 concepts (arrays, objects, functions)
- Week 9 goals and structure
- Q&A from self-study

**9:30 - 10:30 | Asynchronous Programming Concepts (60 min)**

*Teaching Strategy:* Explain synchronous vs asynchronous execution with real-world analogies

**Key Concepts to Cover:**
1. **Synchronous = Blocking**
   - Code executes line-by-line
   - Each operation waits for previous to complete
   - Example: Network requests block user interface

2. **Asynchronous = Non-blocking**
   - Operations run without blocking main thread
   - Code continues while operation happens
   - Callback executed when operation completes
   - Example: Click handler while timer runs

**Live Demo - Synchronous vs Async:**
```javascript
// SYNCHRONOUS - Blocks everything
console.log("1. Start");
alert("Wait here"); // Blocks everything
console.log("2. After wait");

// ASYNCHRONOUS - Non-blocking
console.log("1. Start");
setTimeout(() => {
    console.log("2. After wait (async)");
}, 1000);
console.log("3. Before wait finishes");
```

**Student Activity (20 min):**
- Create simple setTimeout examples
- Observe execution order
- Demonstrate race conditions

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Callbacks Deep Dive (60 min)**

**Topics:**
- Callbacks are just functions
- Used for notifications
- Error-first callbacks convention (error, data)
- Callback hell (pyramid of doom)

**Live Coding Example - Simple Callback:**
```javascript
function fetchUser(userId, callback) {
    setTimeout(() => {
        if (userId > 0) {
            callback(null, { id: userId, name: 'John Doe' });
        } else {
            callback(new Error('Invalid ID'), null);
        }
    }, 1000);
}

fetchUser(1, (error, user) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('User:', user);
    }
});
```

**Live Coding Example - Callback Hell:**
```javascript
// This becomes impossible to read
getUser(1, (err, user) => {
    if (err) return console.error(err);
    
    getLocation(user.id, (err, location) => {
        if (err) return console.error(err);
        
        getWeather(location, (err, weather) => {
            if (err) return console.error(err);
            
            console.log(`${user.name}: ${weather.temp}°C`);
        });
    });
});
```

**Student Activity (25 min):**
- Write nested callbacks
- Experience the pyramid
- Discuss readability issues

**11:45 - 12:00 | Why Promises Exist (15 min)**
- Promises solve callback hell
- Better error handling
- More readable chaining
- Foundation for async/await

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Promise Fundamentals (60 min)**

**Promise States:**
1. **Pending** - Operation in progress
2. **Fulfilled** - Operation succeeded, value ready
3. **Rejected** - Operation failed, error ready
4. **Settled** - Either fulfilled or rejected

**Live Demo - Creating Promises:**
```javascript
// Basic Promise structure
const myPromise = new Promise((resolve, reject) => {
    // async work here
    if (success) {
        resolve(value);  // Fulfilled
    } else {
        reject(error);   // Rejected
    }
});

// Promise methods
myPromise
    .then(value => {
        console.log("Success:", value);
        return newPromise;  // Can chain
    })
    .catch(error => {
        console.error("Failed:", error);
    })
    .finally(() => {
        console.log("Complete, no matter what");
    });
```

**Live Coding Example - Convert Callback to Promise:**
```javascript
// Before (callback)
function fetchUserCallback(userId, callback) {
    setTimeout(() => {
        if (userId > 0) {
            callback(null, { id: userId, name: 'John' });
        } else {
            callback(new Error('Invalid'), null);
        }
    }, 1000);
}

// After (Promise)
function fetchUserPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: 'John' });
            } else {
                reject(new Error('Invalid'));
            }
        }, 1000);
    });
}
```

**Student Activity (20 min):**
- Convert callback examples to Promises
- Practice `.then()`, `.catch()`
- Understand state transitions

**2:00 - 2:30 | Promise Chaining (30 min)**

**Key Pattern:**
- `.then()` returns a new Promise
- Can chain multiple `.then()` calls
- Each step receives previous result

**Live Demo:**
```javascript
fetchUserPromise(1)
    .then(user => {
        console.log("Step 1: Got user:", user.name);
        return fetchPosts(user.id);  // New Promise
    })
    .then(posts => {
        console.log("Step 2: Got posts:", posts.length);
        return posts[0].id;
    })
    .then(firstPostId => {
        console.log("Step 3: First post:", firstPostId);
    })
    .catch(error => {
        console.error("Chain failed:", error);
    });
```

**2:30 - 2:45 | BREAK (15 min)**

**2:45 - 3:45 | Promise Utilities (60 min)**

**Promise.all() - Wait for ALL:**
```javascript
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => {
        console.log('All succeeded');
    })
    .catch(error => {
        console.log('One failed, entire chain fails');
    });
```

**Promise.race() - First to Finish:**
```javascript
Promise.race([fetchData(), timeout(5000)])
    .then(result => console.log('Fast enough'))
    .catch(() => console.log('Timeout'));
```

**Promise.allSettled() - Wait for All, Ignore Failures:**
```javascript
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach(r => {
            if (r.status === 'fulfilled') {
                console.log('Success:', r.value);
            } else {
                console.log('Failed:', r.reason);
            }
        });
    });
```

**Live Demo - Real Use Cases:**
- Fetching multiple independent resources
- Timeout implementation
- Handling partial failures

**Student Activity (25 min):**
- Implement Promise.all() for parallel requests
- Use Promise.race() for timeout
- Handle errors in Promise.allSettled()

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Standup Questions:**
- What was your biggest "aha" moment about Promises?
- What still feels confusing?
- Do you see the improvement over callbacks?

**Homework Assignment:**
- Complete promise exercises (see Assignments section)
- Watch async/await preview video
- Prepare Tuesday questions

---

### TUESDAY: Async/Await in JavaScript – 6.5 hours

**Learning Goals:**
- Master async/await syntax
- Handle errors with try/catch
- Implement sequential operations
- Execute parallel operations efficiently
- Understand async function behavior

**9:00 - 9:30 | Daily Standup & Review (30 min)**
- Quick callback on Monday homework
- Common misconceptions
- Q&A about Promises

**9:30 - 10:30 | Async/Await Syntax (60 min)**

**Key Concept: Async/await is syntactic sugar over Promises**

**Fundamentals:**
1. `async` keyword makes function return a Promise
2. `await` keyword pauses execution until Promise resolves
3. Looks like synchronous code but runs asynchronously

**Live Demo - Basic Async/Await:**
```javascript
// Before (Promise chains)
function getUser(userId) {
    return fetchUser(userId)
        .then(user => {
            console.log("User:", user);
            return user;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// After (async/await)
async function getUser(userId) {
    try {
        const user = await fetchUser(userId);
        console.log("User:", user);
        return user;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Using it
const user = await getUser(1);
```

**Important Notes:**
- `await` can only be used inside `async` function
- Modern Node.js supports top-level await in modules
- `async` functions always return Promises

**Student Activity (20 min):**
- Convert Promise examples to async/await
- Practice error handling with try/catch
- Observe how much more readable it is

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Sequential vs Parallel Execution (60 min)**

**SEQUENTIAL = Slow (one after another)**
```javascript
async function getDataSequential() {
    console.time('Sequential');
    
    const user = await fetchUser(1);      // Wait 1 sec
    const posts = await fetchPosts(1);    // Wait 1 sec
    const comments = await fetchComments(1); // Wait 1 sec
    
    console.timeEnd('Sequential');  // ~3 seconds total
    return { user, posts, comments };
}
```

**PARALLEL = Fast (all at the same time)**
```javascript
async function getDataParallel() {
    console.time('Parallel');
    
    // Start all at once (don't await yet)
    const userPromise = fetchUser(1);
    const postsPromise = fetchPosts(1);
    const commentsPromise = fetchComments(1);
    
    // Now wait for all
    const [user, posts, comments] = await Promise.all([
        userPromise,
        postsPromise,
        commentsPromise
    ]);
    
    console.timeEnd('Parallel');  // ~1 second total
    return { user, posts, comments };
}
```

**Key Pattern:**
- If operations depend on each other → sequential
- If operations are independent → parallel with Promise.all()

**Live Demo Performance Comparison:**
- Show actual timing difference
- Explain when each is appropriate

**Student Activity (25 min):**
- Write sequential operations
- Convert to parallel
- Measure performance improvements

**11:45 - 12:00 | Error Handling Best Practices (15 min)**

**Patterns:**
1. **Try/Catch blocks**
2. **Catch specific errors**
3. **Rethrow vs handle**
4. **Cleanup code with finally**

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Real-World API Calls (60 min)**

**Live Coding Example - Weather API:**
```javascript
async function getWeather(city) {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        const response = await fetch(url);
        
        // Check for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        // Parse response
        const data = await response.json();
        
        return {
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].main
        };
        
    } catch (error) {
        console.error(`Error fetching weather for ${city}:`, error.message);
        throw error;  // Re-throw for caller to handle
    }
}

// Using it
async function displayWeather() {
    try {
        const weather = await getWeather('Vienna');
        console.log(`${weather.city}: ${weather.temperature}°C, ${weather.condition}`);
    } catch (error) {
        console.log('Failed to display weather');
    }
}
```

**Student Activity (30 min):**
- Create .env file with API key
- Make live API call
- Handle various error scenarios

**2:00 - 2:30 | Error Handling & Retry Logic (30 min)**

**Common Errors:**
- Network errors
- 404 Not Found
- 429 Rate Limit
- 500 Server Error

**Retry with Exponential Backoff:**
```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            
            if (response.status === 429) {
                const waitTime = Math.pow(2, attempt) * 1000;
                console.log(`Rate limited. Waiting ${waitTime}ms...`);
                await new Promise(r => setTimeout(r, waitTime));
                continue;
            }
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed:`, error.message);
            if (attempt === maxRetries - 1) throw error;
            
            const delay = 1000 * (attempt + 1);
            await new Promise(r => setTimeout(r, delay));
        }
    }
}
```

**2:30 - 2:45 | BREAK (15 min)**

**2:45 - 3:45 | Common Pitfalls & Best Practices (60 min)**

**Pitfall 1: Forgetting await**
```javascript
// ❌ Wrong - not awaiting
async function bad() {
    const data = fetchData();  // Returns Promise, not data!
    console.log(data);  // Logs Promise object
}

// ✅ Correct
async function good() {
    const data = await fetchData();
    console.log(data);  // Logs actual data
}
```

**Pitfall 2: Unnecessary await in Promise.all()**
```javascript
// ❌ Wrong - Sequential instead of parallel
const results = [];
results.push(await fetch1());
results.push(await fetch2());
results.push(await fetch3());

// ✅ Correct - Parallel
const results = await Promise.all([fetch1(), fetch2(), fetch3()]);
```

**Pitfall 3: Unhandled Promise Rejections**
```javascript
// ❌ Unhandled rejection
async function fetchData() {
    throw new Error('Failed');
}

fetchData();  // Error not caught!

// ✅ Always handle
fetchData().catch(error => {
    console.error('Error:', error);
});
```

**Best Practices:**
- Always use try/catch in async functions
- Never ignore Promise rejections
- Use parallel execution when possible
- Test error scenarios
- Add timeout logic for slow APIs

**Student Activity (30 min):**
- Identify pitfalls in code samples
- Fix common mistakes
- Practice best practices

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Reflection Questions:**
- How does async/await improve readability?
- When should you use parallel vs sequential?
- What error handling strategy feels most natural?

**Homework Assignment:**
- Complete async/await exercises
- Create weather app using real API
- Prepare for Python asyncio

---

### WEDNESDAY: Python Asyncio & Async/Await – 6.5 hours

**Learning Goals:**
- Understand Python's event loop
- Master async/await in Python
- Use asyncio.gather() for parallel execution
- Make async HTTP requests with aiohttp
- Compare JavaScript and Python async patterns

**9:00 - 9:30 | Daily Standup & Review (30 min)**
- Tuesday homework check-in
- async/await concepts review
- Introduce Python async

**9:30 - 10:30 | Python Event Loop & Asyncio (60 min)**

**Key Difference from JavaScript:**
- JavaScript: Event loop runs by default in browser/Node
- Python: Must explicitly create and run event loop

**Fundamentals:**
```python
import asyncio

# Simple async function
async def say_hello(name):
    await asyncio.sleep(1)  # Simulate work
    return f"Hello, {name}!"

# Run it
asyncio.run(say_hello("World"))
```

**The Event Loop:**
- Central scheduler
- Runs one task at a time
- Switches between tasks at await points
- Similar concept to JavaScript event loop

**Live Demo - Sequential vs Parallel:**
```python
import asyncio
import time

async def task_a():
    print("Task A: Starting")
    await asyncio.sleep(2)
    print("Task A: Complete")
    return "A done"

async def task_b():
    print("Task B: Starting")
    await asyncio.sleep(1)
    print("Task B: Complete")
    return "B done"

# Sequential - 3 seconds
async def sequential():
    start = time.time()
    result_a = await task_a()
    result_b = await task_b()
    print(f"Sequential: {time.time() - start:.1f}s")
    return [result_a, result_b]

# Parallel - 2 seconds
async def parallel():
    start = time.time()
    results = await asyncio.gather(task_a(), task_b())
    print(f"Parallel: {time.time() - start:.1f}s")
    return results

# Run them
asyncio.run(sequential())  # ~3 seconds
asyncio.run(parallel())    # ~2 seconds
```

**Student Activity (20 min):**
- Write simple async functions
- Create event loop
- Observe execution order

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | asyncio.gather() for Parallel Execution (60 min)**

**asyncio.gather() = Python's Promise.all()**

```python
# Without gather (sequential)
results = []
for item_id in [1, 2, 3, 4, 5]:
    result = await fetch_data(item_id)  # One at a time
    results.append(result)

# With gather (parallel)
results = await asyncio.gather(
    fetch_data(1),
    fetch_data(2),
    fetch_data(3),
    fetch_data(4),
    fetch_data(5)
)

# Or with list comprehension
results = await asyncio.gather(*[
    fetch_data(i) for i in range(1, 6)
])
```

**Error Handling:**
```python
# Default: First error stops everything
try:
    results = await asyncio.gather(task1(), task2(), task3())
except Exception as e:
    print(f"One failed: {e}")

# Better: Collect all results and errors
results = await asyncio.gather(
    task1(), task2(), task3(),
    return_exceptions=True  # Don't raise, return exceptions
)

for i, result in enumerate(results):
    if isinstance(result, Exception):
        print(f"Task {i+1} failed: {result}")
    else:
        print(f"Task {i+1} succeeded: {result}")
```

**Live Coding Example:**
```python
async def fetch_multiple_items(item_ids):
    tasks = [fetch_data(item_id) for item_id in item_ids]
    results = await asyncio.gather(*tasks)
    return results

async def main():
    results = await fetch_multiple_items([1, 2, 3, 4, 5])
    print(f"Fetched {len(results)} items")

asyncio.run(main())
```

**Student Activity (25 min):**
- Write parallel async operations
- Handle errors with return_exceptions=True
- Measure performance improvements

**11:45 - 12:00 | Comparing JavaScript and Python Async (15 min)**

| Aspect | JavaScript | Python |
|--------|-----------|--------|
| Syntax | `async/await` | `async/await` |
| Event Loop | Automatic (browser/Node) | Manual `asyncio.run()` |
| HTTP | `fetch()` | `aiohttp` |
| Parallel | `Promise.all()` | `asyncio.gather()` |
| Error Handle | try/catch | try/except |
| Starting Point | Global context | Main coroutine |

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Aiohttp for Async HTTP Requests (60 min)**

**Why aiohttp vs requests?**
- `requests`: Synchronous, blocks thread
- `aiohttp`: Asynchronous, non-blocking

**Installation:**
```bash
pip install aiohttp
```

**Basic Aiohttp Pattern:**
```python
import aiohttp
import asyncio

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.json()

async def main():
    async with aiohttp.ClientSession() as session:
        # Single request
        data = await fetch_url(session, 'https://api.example.com/data')
        print(data)

asyncio.run(main())
```

**Multiple Requests:**
```python
async def fetch_multiple(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        return results

urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
]

results = asyncio.run(fetch_multiple(urls))
```

**Live Demo - Real Weather API:**
```python
import os
from dotenv import load_dotenv

load_dotenv()

async def get_weather(session, city):
    api_key = os.getenv('WEATHER_API_KEY')
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    
    try:
        async with session.get(url) as response:
            if response.status == 404:
                return {'error': f'City "{city}" not found'}
            elif response.status != 200:
                return {'error': f'HTTP {response.status}'}
            
            data = await response.json()
            return {
                'city': data['name'],
                'temperature': data['main']['temp'],
                'condition': data['weather'][0]['main']
            }
    except aiohttp.ClientError as e:
        return {'error': f'Network error: {e}'}

async def get_weather_for_cities(cities):
    async with aiohttp.ClientSession() as session:
        tasks = [get_weather(session, city) for city in cities]
        results = await asyncio.gather(*tasks)
        
        for city, weather in zip(cities, results):
            if 'error' in weather:
                print(f"{city}: {weather['error']}")
            else:
                print(f"{city}: {weather['temperature']}°C, {weather['condition']}")

asyncio.run(get_weather_for_cities(['Vienna', 'Berlin', 'Paris']))
```

**Student Activity (25 min):**
- Make async HTTP requests with aiohttp
- Handle errors from API
- Fetch multiple endpoints in parallel

**2:00 - 2:30 | Error Handling in Async Code (30 min)**

**HTTP Status Error Handling:**
```python
async def fetch_with_error_handling(session, url):
    try:
        async with session.get(url) as response:
            # Handle different status codes
            if response.status == 400:
                raise ValueError("Bad request")
            elif response.status == 401:
                raise PermissionError("Unauthorized")
            elif response.status == 404:
                raise FileNotFoundError("Not found")
            elif response.status == 429:
                raise Exception("Rate limited")
            elif response.status == 500:
                raise Exception("Server error")
            elif response.status != 200:
                raise Exception(f"HTTP {response.status}")
            
            return await response.json()
            
    except aiohttp.ClientError as e:
        print(f"Network error: {e}")
        raise
    except json.JSONDecodeError:
        print("Invalid JSON response")
        raise
```

**Retry Logic:**
```python
async def fetch_with_retry(url, max_retries=3):
    for attempt in range(max_retries):
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url) as response:
                    if response.status == 200:
                        return await response.json()
                    elif response.status == 429:  # Rate limited
                        wait_time = 2 ** attempt
                        print(f"Rate limited. Waiting {wait_time}s...")
                        await asyncio.sleep(wait_time)
                        continue
                    else:
                        raise Exception(f"HTTP {response.status}")
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < max_retries - 1:
                await asyncio.sleep(1 * (attempt + 1))
            else:
                raise
```

**2:30 - 2:45 | BREAK (15 min)**

**2:45 - 3:45 | JavaScript vs Python Async Comparison (60 min)**

**Side-by-Side Examples:**

**Sequential Operations:**
```javascript
// JavaScript
async function getSequential() {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return { user, posts, comments };
}
```

```python
# Python
async def get_sequential():
    user = await fetch_user(1)
    posts = await fetch_posts(user['id'])
    comments = await fetch_comments(posts[0]['id'])
    return {'user': user, 'posts': posts, 'comments': comments}
```

**Parallel Operations:**
```javascript
// JavaScript
async function getParallel() {
    const [user, posts, settings] = await Promise.all([
        fetchUser(1),
        fetchPosts(1),
        fetchSettings(1)
    ]);
    return { user, posts, settings };
}
```

```python
# Python
async def get_parallel():
    user, posts, settings = await asyncio.gather(
        fetch_user(1),
        fetch_posts(1),
        fetch_settings(1)
    )
    return {'user': user, 'posts': posts, 'settings': settings}
```

**Key Differences:**
- JavaScript: Async by default in modern environments
- Python: Need to explicitly create event loop
- JavaScript: `.then()` or `async/await`
- Python: Primarily `async/await`
- Both: Very similar syntax once loop is running

**When to Use Each:**
- **JavaScript**: Web applications, Node.js servers, real-time apps
- **Python**: Data processing, scientific computing, backend APIs

**Student Activity (30 min):**
- Write same functionality in both languages
- Compare syntax and performance
- Discuss trade-offs

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Reflection Questions:**
- How does Python async compare to JavaScript?
- Which language feels more natural to you?
- What challenges are you facing?

**Homework Assignment:**
- Complete Python asyncio exercises
- Implement same weather app in Python
- Prepare for API integration on Thursday

---

### THURSDAY: Working with Real APIs – 6.5 hours

**Learning Goals:**
- Authenticate with APIs
- Handle rate limiting
- Implement robust error handling
- Cache responses
- Build production-ready async code

**9:00 - 9:30 | Daily Standup & Review (30 min)**
- Wednesday homework review
- Language comparison discussion
- Thursday goals

**9:30 - 10:30 | API Authentication Methods (60 min)**

**Common Authentication Patterns:**

**1. API Key in URL:**
```javascript
const url = `https://api.example.com/data?api_key=${apiKey}`;
```

**2. API Key in Header:**
```javascript
const response = await fetch(url, {
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
    }
});
```

**3. Bearer Token (OAuth):**
```javascript
const response = await fetch(url, {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});
```

**4. Basic Authentication:**
```javascript
const credentials = btoa(`${username}:${password}`);
const response = await fetch(url, {
    headers: {
        'Authorization': `Basic ${credentials}`
    }
});
```

**Security Best Practice: Use Environment Variables**
```bash
# .env file (never commit!)
WEATHER_API_KEY=your_key_here
GITHUB_TOKEN=your_token_here
```

```javascript
// Load in Node.js
require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;
```

**Live Demo - GitHub API with Authentication:**
```javascript
async function getGitHubUser(username) {
    const token = process.env.GITHUB_TOKEN;
    
    const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    
    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
}
```

**Student Activity (25 min):**
- Get GitHub personal access token
- Make authenticated API call
- Display user information

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Rate Limiting & Backoff Strategies (60 min)**

**Understanding Rate Limits:**
- Most APIs limit requests per time period
- Example: 1000 requests per hour
- Exceeding → 429 Too Many Requests error
- Can be hours, minutes, or seconds

**Rate Limiting Headers:**
```
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
X-RateLimit-Reset: 1234567890
```

**Exponential Backoff Strategy:**
```javascript
async function fetchWithBackoff(url, maxRetries = 5) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            
            if (response.status === 429) {
                // Rate limited - wait longer each time
                const waitSeconds = Math.pow(2, attempt);  // 1, 2, 4, 8, 16 seconds
                console.log(`Rate limited. Waiting ${waitSeconds}s...`);
                await new Promise(r => setTimeout(r, waitSeconds * 1000));
                continue;  // Retry
            }
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
            if (attempt === maxRetries - 1) throw error;
            
            const delay = Math.pow(2, attempt) * 1000;
            await new Promise(r => setTimeout(r, delay));
        }
    }
}
```

**Python Version:**
```python
import asyncio

async def fetch_with_backoff(session, url, max_retries=5):
    for attempt in range(max_retries):
        try:
            async with session.get(url) as response:
                if response.status == 429:
                    wait_seconds = 2 ** attempt
                    print(f"Rate limited. Waiting {wait_seconds}s...")
                    await asyncio.sleep(wait_seconds)
                    continue
                
                if response.status != 200:
                    raise Exception(f"HTTP {response.status}")
                
                return await response.json()
                
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < max_retries - 1:
                await asyncio.sleep(2 ** attempt)
            else:
                raise
```

**Rate Limit Monitoring:**
```javascript
async function monitorRateLimit(response) {
    const remaining = response.headers.get('X-RateLimit-Remaining');
    const limit = response.headers.get('X-RateLimit-Limit');
    const reset = response.headers.get('X-RateLimit-Reset');
    
    console.log(`Rate limit: ${remaining}/${limit}`);
    
    if (remaining < 10) {
        const resetDate = new Date(reset * 1000);
        console.warn(`⚠️ Approaching rate limit! Resets at ${resetDate}`);
    }
}
```

**Student Activity (25 min):**
- Implement exponential backoff
- Make many rapid requests to trigger rate limit
- Observe backoff behavior

**11:45 - 12:00 | Caching Strategies (15 min)**

**Simple In-Memory Cache:**
```javascript
const cache = new Map();

async function fetchWithCache(url, ttl = 60000) {  // 1 minute TTL
    if (cache.has(url)) {
        const { data, expiry } = cache.get(url);
        if (Date.now() < expiry) {
            console.log('Cache hit');
            return data;
        }
    }
    
    const data = await fetch(url).then(r => r.json());
    cache.set(url, {
        data,
        expiry: Date.now() + ttl
    });
    return data;
}
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Building a Real API Integration Project (60 min)**

**Project Brief: Crypto Price Tracker**

Requirements:
- Fetch prices from CoinGecko API (no key needed)
- Convert between multiple currencies
- Track multiple cryptocurrencies
- Handle errors gracefully
- Display results

**Live Coding - JavaScript Version:**
```javascript
const API_BASE = 'https://api.coingecko.com/api/v3';

async function getCryptoPrice(symbol, currency = 'usd') {
    try {
        const url = `${API_BASE}/simple/price?ids=${symbol}&vs_currencies=${currency}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data[symbol]?.[currency] || null;
        
    } catch (error) {
        console.error(`Failed to get price for ${symbol}:`, error.message);
        return null;
    }
}

async function trackMultipleCryptos(symbols, currency = 'usd') {
    console.log(`Fetching prices for: ${symbols.join(', ')}`);
    
    const prices = await Promise.all(
        symbols.map(symbol => getCryptoPrice(symbol, currency))
    );
    
    symbols.forEach((symbol, index) => {
        console.log(`${symbol}: $${prices[index]}`);
    });
    
    return prices;
}

// Usage
trackMultipleCryptos(['bitcoin', 'ethereum', 'cardano']);
```

**Live Coding - Python Version:**
```python
import aiohttp
import asyncio

API_BASE = 'https://api.coingecko.com/api/v3'

async def get_crypto_price(session, symbol, currency='usd'):
    try:
        url = f'{API_BASE}/simple/price?ids={symbol}&vs_currencies={currency}'
        async with session.get(url) as response:
            if response.status != 200:
                print(f"API error: {response.status}")
                return None
            
            data = await response.json()
            return data.get(symbol, {}).get(currency)
            
    except Exception as e:
        print(f"Failed to get price for {symbol}: {e}")
        return None

async def track_multiple_cryptos(symbols, currency='usd'):
    print(f"Fetching prices for: {', '.join(symbols)}")
    
    async with aiohttp.ClientSession() as session:
        prices = await asyncio.gather(*[
            get_crypto_price(session, symbol, currency)
            for symbol in symbols
        ])
    
    for symbol, price in zip(symbols, prices):
        print(f"{symbol}: ${price}")
    
    return prices

# Usage
asyncio.run(track_multiple_cryptos(['bitcoin', 'ethereum', 'cardano']))
```

**Student Activity (30 min):**
- Implement crypto price tracker
- Add multiple cryptocurrencies
- Add error handling
- Test parallel requests

**2:00 - 2:30 | Environment Variables & Secrets Management (30 min)**

**Creating .env file:**
```bash
# .env (never commit to git!)
WEATHER_API_KEY=sk_live_51234567890
GITHUB_TOKEN=ghp_1234567890
CRYPTO_API_KEY=optional_key_if_needed
```

**.gitignore entry:**
```
.env
.env.local
.env.*.local
```

**Providing .env.example for team:**
```bash
# .env.example (safe to commit)
WEATHER_API_KEY=your_key_here
GITHUB_TOKEN=your_token_here
CRYPTO_API_KEY=optional
```

**Loading in Code:**
```javascript
// JavaScript
require('dotenv').config();
const apiKey = process.env.WEATHER_API_KEY;

// Python
from dotenv import load_dotenv
import os
load_dotenv()
api_key = os.getenv('WEATHER_API_KEY')
```

**2:30 - 2:45 | BREAK (15 min)**

**2:45 - 3:45 | Debugging Async Code & Performance (60 min)**

**VS Code Debugging:**
- Set breakpoints in async functions
- Step through async operations
- Inspect Promise state
- Use console.log() strategically

**Common Debug Techniques:**
```javascript
// Timing async operations
console.time('fetch');
const data = await fetch(url).then(r => r.json());
console.timeEnd('fetch');

// Track multiple operations
async function trackMultiple() {
    const start = Date.now();
    
    const result1 = await operation1();
    console.log(`Operation 1: ${Date.now() - start}ms`);
    
    const result2 = await operation2();
    console.log(`Operation 2: ${Date.now() - start}ms`);
    
    console.log(`Total: ${Date.now() - start}ms`);
}

// Debug Promise state
const promise = fetch(url);
console.log(promise);  // Shows Promise state
```

**Performance Monitoring:**
```javascript
// Monitor API response times
async function fetchWithMetrics(url) {
    const start = performance.now();
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const duration = performance.now() - start;
        
        console.log(`${url}: ${duration.toFixed(2)}ms`);
        return data;
    } catch (error) {
        const duration = performance.now() - start;
        console.error(`${url} failed: ${duration.toFixed(2)}ms`);
        throw error;
    }
}
```

**Common Issues to Debug:**
1. **Unhandled rejection** - Add `.catch()` to every Promise
2. **Race conditions** - Use proper awaiting
3. **Memory leaks** - Clean up resources
4. **Timeout errors** - Add timeout logic
5. **Rate limit issues** - Implement backoff

**Student Activity (20 min):**
- Debug provided buggy code
- Fix async errors
- Optimize performance

**3:45 - 4:00 | Daily Standup & Reflection (15 min)**

**Reflection Questions:**
- How confident do you feel building async applications?
- What authentication method makes most sense to you?
- How would you handle rate limits in production?

**Homework Assignment:**
- Complete API integration project
- Implement both JavaScript and Python versions
- Document API usage
- Prepare for Friday sprint review

---

### FRIDAY: Sprint Review & Project Presentations – 4 hours

**Learning Goals:**
- Demonstrate async programming mastery
- Present technical projects
- Compare implementations
- Reflect on learning
- Plan next steps

**9:00 - 9:15 | Sprint Recap (15 min)**
- Week 9 achievements
- Learning objectives review
- Q&A on challenging concepts

**9:15 - 11:15 | Student Project Presentations (120 min)**

**Presentation Format (5 min per student/group):**
1. Project overview (1 min)
2. Live demo (2 min)
3. Technical challenges & solutions (1 min)
4. Key learnings (1 min)

**Evaluation Points:**
- API integration works correctly
- Error handling is robust
- Code is readable and well-commented
- Performance is good
- Deployment considerations discussed

**11:15 - 11:30 | BREAK (15 min)**

**11:30 - 12:00 | Technical Comparison Discussion (30 min)**

**Topics to Cover:**
- JavaScript vs Python async approach
- Performance comparison results
- Language pros/cons for async
- When to use each language

**12:00 - 12:30 | Sprint Retrospective (30 min)**

**Questions for Team:**
- What went well this week?
- What was challenging?
- What would you do differently?
- How confident do you feel with async?
- Questions for next week?

---

## Assignments & Deliverables

### Daily Exercises

**Monday: Promise Exercises**
- Convert callback hell to promises
- Use Promise.all() for parallel operations
- Implement Promise.race() for timeout
- Handle errors with .catch()

**Tuesday: Async/Await Exercises**
- Convert promises to async/await
- Implement sequential operations
- Implement parallel operations with Promise.all()
- Build error handling with try/catch
- Create weather app with real API

**Wednesday: Python Asyncio Exercises**
- Write basic async functions
- Use asyncio.gather()
- Make aiohttp requests
- Handle errors in async code
- Create same weather app in Python

**Thursday: API Integration Challenges**
- Implement authentication
- Handle rate limiting
- Add retry logic
- Cache responses
- Error handling for various scenarios

### Main Assignment: Dual-Language Async API Project (100 points)

**Project Objective:**
Build the same application in both JavaScript and Python using asynchronous programming to integrate with real external APIs.

**Project Options (choose one):**
1. **Weather Dashboard** - Display weather for multiple cities with forecasts
2. **GitHub Profile Analyzer** - Display user stats, top repos, recent activity
3. **Movie Database Explorer** - Search movies, show details, recommendations
4. **Crypto Price Tracker** - Track multiple cryptocurrencies, historical data
5. **Currency Converter** - Convert between currencies using real rates

**JavaScript Version (30 points)**
- [ ] Uses Node.js with async/await
- [ ] Integrates 2+ external APIs
- [ ] Proper authentication (API keys/tokens)
- [ ] Comprehensive error handling
- [ ] Loading states/indicators
- [ ] Results displayed in console/file
- [ ] Clean, readable code

**Python Version (30 points)**
- [ ] Uses asyncio and aiohttp
- [ ] Same functionality as JavaScript version
- [ ] Proper authentication
- [ ] Error handling
- [ ] Results displayed/saved
- [ ] Clean, readable code

**Features (20 points)**
- [ ] Authentication working (5 points)
- [ ] Error handling for network issues (5 points)
- [ ] Rate limiting implementation (5 points)
- [ ] Retry logic for failures (3 points)
- [ ] Caching responses (2 points)

**Documentation (10 points)**
- [ ] README with setup instructions
- [ ] API documentation and key requirements
- [ ] Example .env file (.env.example)
- [ ] Code comments explaining async logic
- [ ] Performance notes

**Technical Comparison Document (10 points)**
- [ ] Async syntax comparison
- [ ] Performance metrics
- [ ] Ease of use comparison
- [ ] When to use each language
- [ ] Side-by-side code examples

**Submission Requirements:**
- GitHub repositories (separate for JS and Python)
- Both projects functioning
- .env.example file provided
- Comprehensive README
- Clean commit history
- Deployment instructions (Heroku, Replit, etc.)

**Rubric:**
- **A (90-100):** Full implementation, excellent error handling, both languages work perfectly, great documentation
- **B (80-89):** Complete implementation, good error handling, minor issues, solid documentation
- **C (70-79):** Core functionality works, basic error handling, documentation present
- **D (60-69):** Partially complete, some error handling, minimal documentation
- **F (<60):** Non-functional or incomplete

---

## Resource Materials

### Documentation Links

**JavaScript Async:**
- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [JavaScript.info - Async Programming](https://javascript.info/async)

**Python Async:**
- [Python asyncio Documentation](https://docs.python.org/3/library/asyncio.html)
- [aiohttp Documentation](https://docs.aiohttp.org/)
- [Real Python - Async IO](https://realpython.com/async-io-python/)

### Free APIs for Projects

| API | Purpose | Free Tier | Auth |
|-----|---------|-----------|------|
| OpenWeatherMap | Weather data | 1000/day | API Key |
| GitHub API | Developer data | 60/hr (unauth), 5000/hr (auth) | Token |
| The Movie DB | Movie data | 40/10s | API Key |
| CoinGecko | Crypto prices | Unlimited | None |
| REST Countries | Country data | Unlimited | None |
| JSONPlaceholder | Test data | Unlimited | None |
| REST | API testing | Unlimited | None |
| OpenLibrary | Book data | Unlimited | None |

### Code Example Files
- `week9_javascript_examples.js` - Complete JS async patterns
- `week9_python_examples.py` - Complete Python asyncio patterns

---

## Assessment Rubric

### Daily Code Exercises (10 points each)

**Monday & Tuesday (JavaScript): 20 points**
- Callback functionality works (2 pts)
- Promise chaining correct (3 pts)
- Async/await syntax proper (3 pts)
- Error handling implemented (2 pts)
- Code runs without errors (5 pts)
- Code is clean and documented (5 pts)

**Wednesday (Python): 10 points**
- Asyncio functions work (2 pts)
- Gather operations parallel (2 pts)
- Aiohttp requests correct (2 pts)
- Error handling present (2 pts)
- Code runs without errors (2 pts)

**Thursday (API Integration): 10 points**
- Authentication working (2 pts)
- Rate limiting handled (2 pts)
- Error handling robust (2 pts)
- Code performant (2 pts)
- All requirements met (2 pts)

### Main Project (100 points)

See Assignment section above for detailed rubric.

---

## Troubleshooting Guide

### Common Issues & Solutions

**Issue: "await is only valid in async function"**
- **Cause:** Using `await` outside async function
- **Solution:** Wrap in `async function` or use `asyncio.run()`

**Issue: Promise never resolves**
- **Cause:** Missing `resolve()` call or infinite loop
- **Solution:** Check Promise executor, add debugging console.log()

**Issue: Rate limit errors (429)**
- **Cause:** Too many rapid requests
- **Solution:** Implement exponential backoff, add delays

**Issue: "Invalid API key" error**
- **Cause:** Key not loaded from .env or wrong format
- **Solution:** Check .env file, verify process.env loading

**Issue: Unhandled promise rejection**
- **Cause:** Missing .catch() on Promise
- **Solution:** Add .catch() or use try/catch in async

**Issue: Sequential instead of parallel execution**
- **Cause:** Using separate await statements
- **Solution:** Use Promise.all() or asyncio.gather()

**Issue: Network timeout errors**
- **Cause:** API endpoint too slow or no response
- **Solution:** Implement timeout logic with Promise.race()

**Issue: JSON parsing errors**
- **Cause:** Response not valid JSON
- **Solution:** Check response.ok, handle error responses

**Issue: Python asyncio "RuntimeError: no running event loop"**
- **Cause:** Not using asyncio.run()
- **Solution:** Wrap in `asyncio.run(main())`

**Issue: aiohttp "Cannot connect to host"**
- **Cause:** Network blocked or URL invalid
- **Solution:** Test URL in browser, check firewall

**Issue: Credentials/API keys in GitHub**
- **Cause:** Committed .env file with secrets
- **Solution:** Use .gitignore, never commit .env

---

## Week 9 Success Checklist

By end of week, verify students can:

- [ ] Explain synchronous vs asynchronous execution
- [ ] Write Promises from scratch
- [ ] Chain multiple Promises
- [ ] Use Promise.all() for parallel operations
- [ ] Write async/await functions
- [ ] Handle errors with try/catch
- [ ] Compare sequential vs parallel performance
- [ ] Implement retry logic
- [ ] Use environment variables securely
- [ ] Make authenticated API requests
- [ ] Handle rate limiting appropriately
- [ ] Build same app in JavaScript and Python
- [ ] Deploy async applications
- [ ] Debug async code issues
- [ ] Explain when to use async in production

---

## Preparation for Week 10

**Preview for students:**
Week 10 introduces CI/CD pipelines and automated testing. Students will learn GitHub Actions and implement continuous integration for their async projects.

**Pre-week reading:**
- GitHub Actions basics
- CI/CD pipeline concepts
- Automated testing in JavaScript/Python

**Optional:**
- Set up GitHub Actions on personal projects
- Write first unit tests

---

**Last Updated:** April 2025  
**Instructor Notes:** This guide is designed to be flexible. Adjust timing based on class pace and student needs. Emphasis throughout should be on understanding concepts over memorizing syntax.