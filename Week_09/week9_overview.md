# Week 9 Overview: "Asynchronous Programming"
## Async in JavaScript & Python - Real API Integration

**Duration: 35 hours**
**Dates: April 22-25, 2025**
**Note: Easter Holiday April 14-21 (Classes resume April 22)**

---

## Week Overview

Week 9 builds on the Easter break self-study to master asynchronous programming in both JavaScript and Python. Students learn to work with real external APIs, handle authentication, manage rate limiting, and build robust async applications.

### Key Focus Areas:
- Callbacks and Promises (JavaScript)
- async/await in JavaScript
- Python asyncio and async/await
- Working with real APIs
- Authentication (API keys, OAuth basics)
- Rate limiting and error handling
- Comparing async approaches in both languages

### Week 9 Success Metrics:
- ✅ Students master async/await in JavaScript
- ✅ Students use Python asyncio effectively
- ✅ Students integrate external APIs
- ✅ Students handle authentication
- ✅ Students implement error handling and rate limiting
- ✅ Students build dual-language async projects

---

## Daily Schedule

### Monday: Callbacks and Promises (JavaScript)
**6.5 hours**
- Review callbacks and callback hell
- Promise fundamentals
- Creating Promises
- Chaining Promises (.then, .catch, .finally)
- Promise.all, Promise.race, Promise.allSettled
- Converting callbacks to Promises

### Tuesday: Async/Await in JavaScript
**6.5 hours**
- async/await syntax
- Error handling with try/catch
- Sequential vs parallel execution
- Async functions return Promises
- Top-level await
- Common pitfalls and best practices

### Wednesday: Python Asyncio & Async/Await
**6.5 hours**
- Python event loop
- async/await in Python
- asyncio.gather() for parallel execution
- aiohttp for async HTTP requests
- Comparing JavaScript and Python async patterns
- When to use async in Python

### Thursday: Working with Real APIs
**6.5 hours**
- API authentication (API keys, tokens)
- OAuth basics
- Rate limiting strategies
- Error handling (network errors, API errors)
- Retry logic
- Caching responses
- Environment variables for secrets

### Friday: Sprint Review - Async Projects
**4 hours**
- Dual-language async project demonstrations
- Technical comparison presentations
- Code review session
- Performance discussions
- Sprint retrospective

---

## Learning Objectives

By the end of Week 9, students will be able to:

1. **JavaScript Async**
   - Write and use Promises
   - Use async/await effectively
   - Handle async errors properly
   - Execute async operations in parallel

2. **Python Async**
   - Use asyncio library
   - Write async functions with async/await
   - Perform async HTTP requests
   - Compare with JavaScript async patterns

3. **API Integration**
   - Authenticate with APIs
   - Handle API rate limits
   - Parse API responses
   - Handle API errors gracefully

4. **Error Handling**
   - Implement retry logic
   - Handle network failures
   - Provide meaningful error messages
   - Use loading states

5. **Professional Practices**
   - Secure API keys
   - Document API usage
   - Write async code in both languages
   - Compare language approaches

---

## Key Concepts

### JavaScript Promises
- Promise states (pending, fulfilled, rejected)
- then() and catch()
- Promise chaining
- Promise.all(), Promise.race()
- Creating custom Promises

### Async/Await
- Async functions
- Await keyword
- try/catch for error handling
- Sequential vs parallel execution
- Top-level await

### Python Asyncio
- Event loop
- Coroutines
- asyncio.run()
- asyncio.gather()
- aiohttp library

### API Concepts
- REST APIs
- API keys and authentication
- Rate limiting (requests per minute)
- HTTP status codes
- JSON responses
- Query parameters

### Best Practices
- Never commit API keys
- Use environment variables
- Implement rate limiting
- Cache when appropriate
- Provide loading states
- Handle errors gracefully

---

## Deliverables

### Weekly Assignment: Dual-Language API Integration (100 points)

Build the same application in BOTH JavaScript and Python:

**Project Ideas (choose one):**
- Weather Dashboard (multiple locations, forecasts)
- GitHub Profile Analyzer (user stats, repos)
- Movie Database Explorer (search, details, recommendations)
- Crypto Price Tracker (multiple currencies, historical data)

Requirements:

1. **JavaScript Version (Node.js)** (30 points)
   - Consume 2+ external APIs
   - Use async/await
   - Handle authentication
   - Error handling
   - Loading states
   - Display results

2. **Python Version** (30 points)
   - Same functionality as JavaScript version
   - Use asyncio and aiohttp
   - Handle authentication
   - Error handling
   - Display or save results

3. **Features** (20 points)
   - Authentication (API keys)
   - Error handling for network issues
   - Rate limiting implementation
   - Retry logic for failed requests
   - Loading indicators
   - Cache responses (optional but recommended)

4. **Technical Comparison Document** (10 points)
   - Compare async syntax between languages
   - Performance comparison
   - Ease of use comparison
   - When to use each approach
   - Code examples side-by-side

5. **Deployment & Documentation** (10 points)
   - Deploy both versions
   - Complete API documentation
   - Setup instructions
   - Environment variable configuration
   - Professional Git workflow

---

## Resources

### JavaScript Async
- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [JavaScript.info - Async](https://javascript.info/async)

### Python Async
- [Python asyncio](https://docs.python.org/3/library/asyncio.html)
- [aiohttp Documentation](https://docs.aiohttp.org/)
- [Real Python - Async IO](https://realpython.com/async-io-python/)

### APIs to Use
- [OpenWeatherMap](https://openweathermap.org/api) - Weather data
- [GitHub API](https://docs.github.com/en/rest) - Developer data
- [The Movie DB](https://www.themoviedb.org/documentation/api) - Movie data
- [CoinGecko](https://www.coingecko.com/en/api) - Crypto prices
- [REST Countries](https://restcountries.com/) - Country data
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Test API

---

## Code Examples

### JavaScript - Promises
```javascript
// Creating a Promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject(new Error('Network response was not ok'));
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Using Promises
fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Request completed'));

// Promise.all for parallel requests
Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(([users, posts, comments]) => {
    console.log('All data loaded:', {users, posts, comments});
});
```

### JavaScript - Async/Await
```javascript
// Async function
async function loadWeather(city) {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error loading weather:', error);
        throw error;
    }
}

// Using async function
async function displayWeather() {
    try {
        const weather = await loadWeather('Vienna');
        console.log(`Temperature in Vienna: ${weather.main.temp}K`);
    } catch (error) {
        console.error('Failed to display weather');
    }
}

// Parallel async operations
async function loadMultipleCities() {
    try {
        const cities = ['Vienna', 'Berlin', 'Paris'];
        
        // Parallel execution
        const weatherPromises = cities.map(city => loadWeather(city));
        const weatherData = await Promise.all(weatherPromises);
        
        weatherData.forEach((data, index) => {
            console.log(`${cities[index]}: ${data.main.temp}K`);
        });
        
    } catch (error) {
        console.error('Error loading weather data:', error);
    }
}
```

### Python - Asyncio
```python
import asyncio
import aiohttp
import os
from dotenv import load_dotenv

load_dotenv()

async def fetch_weather(session, city):
    """Fetch weather for a single city"""
    api_key = os.getenv('WEATHER_API_KEY')
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
    
    try:
        async with session.get(url) as response:
            response.raise_for_status()
            data = await response.json()
            return data
    except aiohttp.ClientError as e:
        print(f'Error fetching weather for {city}: {e}')
        return None

async def fetch_multiple_cities(cities):
    """Fetch weather for multiple cities in parallel"""
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_weather(session, city) for city in cities]
        results = await asyncio.gather(*tasks)
        return results

async def main():
    cities = ['Vienna', 'Berlin', 'Paris']
    
    print('Fetching weather data...')
    weather_data = await fetch_multiple_cities(cities)
    
    for city, data in zip(cities, weather_data):
        if data:
            temp = data['main']['temp']
            print(f'{city}: {temp}K')

# Run the async function
if __name__ == '__main__':
    asyncio.run(main())
```

### Error Handling and Retry Logic
```javascript
// JavaScript - Retry with exponential backoff
async function fetchWithRetry(url, maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(url);
            
            if (response.status === 429) {
                // Rate limited - wait and retry
                const waitTime = Math.pow(2, attempt) * 1000;
                console.log(`Rate limited. Waiting ${waitTime}ms...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
                continue;
            }
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
            
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed:`, error.message);
            
            if (attempt === maxRetries - 1) {
                throw new Error(`Failed after ${maxRetries} attempts`);
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
        }
    }
}
```

```python
# Python - Retry with exponential backoff
async def fetch_with_retry(session, url, max_retries=3):
    """Fetch with retry logic"""
    for attempt in range(max_retries):
        try:
            async with session.get(url) as response:
                if response.status == 429:
                    # Rate limited
                    wait_time = (2 ** attempt)
                    print(f'Rate limited. Waiting {wait_time}s...')
                    await asyncio.sleep(wait_time)
                    continue
                
                response.raise_for_status()
                return await response.json()
                
        except aiohttp.ClientError as e:
            print(f'Attempt {attempt + 1} failed: {e}')
            
            if attempt == max_retries - 1:
                raise Exception(f'Failed after {max_retries} attempts')
            
            await asyncio.sleep(1 * (attempt + 1))
```

### Rate Limiting
```javascript
// Simple rate limiter
class RateLimiter {
    constructor(requestsPerMinute) {
        this.requestsPerMinute = requestsPerMinute;
        this.queue = [];
        this.processing = false;
    }
    
    async request(fn) {
        return new Promise((resolve, reject) => {
            this.queue.push({ fn, resolve, reject });
            this.processQueue();
        });
    }
    
    async processQueue() {
        if (this.processing || this.queue.length === 0) return;
        
        this.processing = true;
        
        while (this.queue.length > 0) {
            const { fn, resolve, reject } = this.queue.shift();
            
            try {
                const result = await fn();
                resolve(result);
            } catch (error) {
                reject(error);
            }
            
            // Wait between requests
            const delay = (60 * 1000) / this.requestsPerMinute;
            await new Promise(r => setTimeout(r, delay));
        }
        
        this.processing = false;
    }
}

// Usage
const limiter = new RateLimiter(10); // 10 requests per minute

await limiter.request(() => fetch('/api/data/1'));
await limiter.request(() => fetch('/api/data/2'));
```

---

## Environment Variables Setup

```bash
# .env file
WEATHER_API_KEY=your_api_key_here
GITHUB_TOKEN=your_github_token_here
TMDB_API_KEY=your_tmdb_key_here
```

```javascript
// JavaScript - load environment variables
require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;
```

```python
# Python - load environment variables
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv('WEATHER_API_KEY')
```

---

## Notes for Instructor

- Build on Easter break self-study
- Review Promise concepts before async/await
- Live-code async examples
- Show common mistakes and how to fix them
- Demonstrate debugging async code
- Emphasize error handling - networks fail!
- Show real API rate limiting in action
- Compare JavaScript and Python side-by-side
- Discuss when to use async (not always necessary)
- Security: Never commit API keys!
- Prepare for testing next week (Week 10)

---

## Common Pitfalls

1. **Forgetting await**
   ```javascript
   // ❌ Wrong
   const data = fetchData(); // Returns Promise
   
   // ✅ Correct
   const data = await fetchData();
   ```

2. **Not handling errors**
   ```javascript
   // ❌ Wrong
   const data = await fetchData();
   
   // ✅ Correct
   try {
       const data = await fetchData();
   } catch (error) {
       console.error(error);
   }
   ```

3. **Sequential when parallel is better**
   ```javascript
   // ❌ Slow - sequential
   const user = await fetchUser();
   const posts = await fetchPosts();
   
   // ✅ Fast - parallel
   const [user, posts] = await Promise.all([
       fetchUser(),
       fetchPosts()
   ]);
   ```

---

## Connection to Other Weeks

- **Week 8**: Built on Easter break self-study
- **Week 7**: Enhanced Flask backend with async concepts
- **Week 10**: Will test async code
- **Week 12**: Advanced async patterns with databases

Asynchronous programming is crucial for modern web development - APIs, databases, and user interactions all benefit from async patterns!