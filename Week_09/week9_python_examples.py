"""
WEEK 9: ASYNCHRONOUS PROGRAMMING IN PYTHON
Comprehensive guide to asyncio, aiohttp, and API integration

Learning Objectives:
- Understand Python's event loop
- Master asyncio and async/await
- Use aiohttp for async HTTP requests
- Integrate with real external APIs
- Handle authentication and rate limiting
- Compare Python and JavaScript async approaches
"""

import asyncio
import aiohttp
import json
import os
import time
from typing import List, Dict, Optional, Any
from collections import deque
from datetime import datetime, timedelta
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


# ============================================================================
# SECTION 1: ASYNCIO BASICS - THE EVENT LOOP
# ============================================================================

"""
Python's asyncio library provides:
1. Event Loop - schedules and runs async tasks
2. Coroutines - async functions defined with 'async def'
3. Tasks - scheduled coroutines
4. Futures - represent eventual results
"""

# Simple async function
async def say_hello(name: str) -> str:
    """A simple coroutine that returns a greeting."""
    await asyncio.sleep(1)  # Simulate async work
    return f"Hello, {name}!"


# Running a simple coroutine
async def run_hello_example():
    """Example of running async functions."""
    result = await say_hello("World")
    print(result)  # Output: Hello, World!


# To run: asyncio.run(run_hello_example())


# ============================================================================
# SECTION 2: THE EVENT LOOP AND ASYNC CONTEXT
# ============================================================================

"""
The event loop is the heart of asyncio.
It:
1. Runs coroutines
2. Manages callbacks
3. Handles I/O operations
4. Executes one task at a time

asyncio.run() creates a new event loop and runs a coroutine
"""

async def task_a():
    """First task."""
    print("Task A: Starting")
    await asyncio.sleep(2)
    print("Task A: Complete")
    return "A done"


async def task_b():
    """Second task."""
    print("Task B: Starting")
    await asyncio.sleep(1)
    print("Task B: Complete")
    return "B done"


async def sequential_example():
    """Run tasks one after another - SLOW"""
    print("\n--- SEQUENTIAL (takes 3 seconds) ---")
    start = time.time()
    
    result_a = await task_a()
    result_b = await task_b()
    
    elapsed = time.time() - start
    print(f"Sequential completed in {elapsed:.1f}s")
    return [result_a, result_b]


async def parallel_example():
    """Run tasks in parallel - FAST"""
    print("\n--- PARALLEL (takes 2 seconds) ---")
    start = time.time()
    
    # Create tasks without waiting
    task_a_job = asyncio.create_task(task_a())
    task_b_job = asyncio.create_task(task_b())
    
    # Now wait for both
    result_a = await task_a_job
    result_b = await task_b_job
    
    elapsed = time.time() - start
    print(f"Parallel completed in {elapsed:.1f}s")
    return [result_a, result_b]


# asyncio.run(sequential_example())  # Takes ~3 seconds
# asyncio.run(parallel_example())    # Takes ~2 seconds


# ============================================================================
# SECTION 3: GATHERING MULTIPLE COROUTINES
# ============================================================================

"""
asyncio.gather() is the primary tool for parallel execution
It waits for all tasks to complete
If any task fails, gather() raises that exception
"""

async def fetch_data(item_id: int, delay: float = 1) -> Dict:
    """Simulate fetching data for an item."""
    await asyncio.sleep(delay)
    return {
        'id': item_id,
        'data': f'Data for item {item_id}',
        'timestamp': datetime.now().isoformat()
    }


async def gather_example():
    """Fetch multiple items in parallel."""
    print("\n--- GATHER EXAMPLE ---")
    
    # Create multiple coroutines
    tasks = [
        fetch_data(1),
        fetch_data(2),
        fetch_data(3),
        fetch_data(4)
    ]
    
    # Wait for all to complete
    results = await asyncio.gather(*tasks)
    
    print(f"Fetched {len(results)} items")
    for item in results:
        print(f"  Item {item['id']}: {item['data']}")
    
    return results


# asyncio.run(gather_example())


# ============================================================================
# SECTION 4: ERROR HANDLING IN ASYNC CODE
# ============================================================================

"""
Errors in async functions can be caught with try/except
If a task fails in gather(), you can set return_exceptions=True
"""

async def might_fail(item_id: int) -> Dict:
    """A task that might fail."""
    await asyncio.sleep(0.5)
    if item_id == 2:
        raise ValueError(f"Item {item_id} is invalid!")
    return {'id': item_id, 'success': True}


async def error_handling_example():
    """Handle errors in gathered tasks."""
    print("\n--- ERROR HANDLING ---")
    
    tasks = [
        might_fail(1),
        might_fail(2),  # This will fail
        might_fail(3)
    ]
    
    # With return_exceptions=True, exceptions are returned as results
    # Instead of raising immediately
    results = await asyncio.gather(*tasks, return_exceptions=True)
    
    for i, result in enumerate(results, 1):
        if isinstance(result, Exception):
            print(f"  Task {i}: ERROR - {result}")
        else:
            print(f"  Task {i}: SUCCESS - {result['success']}")
    
    return results


# asyncio.run(error_handling_example())


# ============================================================================
# SECTION 5: AIOHTTP - ASYNC HTTP REQUESTS
# ============================================================================

"""
aiohttp is the async library for making HTTP requests
Much more efficient than requests library for multiple requests
Uses the same connection pool and event loop
"""

async def fetch_url(session: aiohttp.ClientSession, url: str) -> Dict:
    """Fetch a single URL."""
    try:
        async with session.get(url) as response:
            # Wait for response
            if response.status == 200:
                data = await response.json()
                return {'status': 'success', 'data': data}
            else:
                return {
                    'status': 'error',
                    'code': response.status,
                    'reason': response.reason
                }
    except aiohttp.ClientError as e:
        return {'status': 'error', 'error': str(e)}


async def fetch_multiple_urls():
    """Fetch multiple URLs in parallel."""
    print("\n--- FETCH MULTIPLE URLS ---")
    
    urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3',
        'https://jsonplaceholder.typicode.com/users/1',
        'https://jsonplaceholder.typicode.com/users/2'
    ]
    
    # Create a session (manages connections)
    async with aiohttp.ClientSession() as session:
        # Create tasks for all URLs
        tasks = [fetch_url(session, url) for url in urls]
        
        # Fetch all in parallel
        results = await asyncio.gather(*tasks)
    
    successful = sum(1 for r in results if r['status'] == 'success')
    print(f"Successfully fetched {successful}/{len(urls)} URLs")
    
    return results


# asyncio.run(fetch_multiple_urls())


# ============================================================================
# SECTION 6: WORKING WITH REAL APIS - WEATHER API
# ============================================================================

"""
Complete example using a real API with proper error handling
"""

WEATHER_API_KEY = os.getenv('WEATHER_API_KEY', 'YOUR_API_KEY_HERE')


async def get_weather(session: aiohttp.ClientSession, city: str) -> Dict:
    """Fetch weather for a city."""
    url = (
        f'https://api.openweathermap.org/data/2.5/weather'
        f'?q={city}&appid={WEATHER_API_KEY}&units=metric'
    )
    
    try:
        async with session.get(url) as response:
            # Check status
            if response.status == 404:
                return {'error': f'City "{city}" not found'}
            elif response.status == 401:
                return {'error': 'Invalid API key'}
            elif response.status == 429:
                return {'error': 'Rate limited - too many requests'}
            elif response.status != 200:
                return {'error': f'HTTP {response.status}: {response.reason}'}
            
            # Parse JSON
            data = await response.json()
            
            return {
                'city': data['name'],
                'country': data['sys']['country'],
                'temperature': data['main']['temp'],
                'feels_like': data['main']['feels_like'],
                'condition': data['weather'][0]['main'],
                'humidity': data['main']['humidity'],
                'wind_speed': data['wind']['speed']
            }
            
    except aiohttp.ClientError as e:
        return {'error': f'Network error: {str(e)}'}
    except json.JSONDecodeError:
        return {'error': 'Invalid JSON response'}


async def get_weather_for_cities(cities: List[str]) -> List[Dict]:
    """Fetch weather for multiple cities in parallel."""
    print("\n--- WEATHER FOR MULTIPLE CITIES ---")
    
    async with aiohttp.ClientSession() as session:
        # Create tasks for all cities
        tasks = [get_weather(session, city) for city in cities]
        
        # Fetch all in parallel
        results = await asyncio.gather(*tasks)
    
    for city, weather in zip(cities, results):
        if 'error' in weather:
            print(f"{city}: ERROR - {weather['error']}")
        else:
            print(
                f"{city}: {weather['temperature']}°C, "
                f"{weather['condition']}, "
                f"Humidity: {weather['humidity']}%"
            )
    
    return results


# asyncio.run(get_weather_for_cities(['Vienna', 'Berlin', 'Paris']))


# ============================================================================
# SECTION 7: AUTHENTICATION - API KEYS AND TOKENS
# ============================================================================

"""
Different authentication methods for different APIs
"""

async def call_api_with_key_in_url(
    session: aiohttp.ClientSession,
    url: str,
    api_key: str
) -> Dict:
    """Make request with API key in URL."""
    full_url = f"{url}?api_key={api_key}"
    async with session.get(full_url) as response:
        return await response.json()


async def call_api_with_key_in_header(
    session: aiohttp.ClientSession,
    url: str,
    api_key: str
) -> Dict:
    """Make request with API key in header."""
    headers = {
        'X-API-Key': api_key,
        'Content-Type': 'application/json'
    }
    async with session.get(url, headers=headers) as response:
        return await response.json()


async def call_api_with_bearer_token(
    session: aiohttp.ClientSession,
    url: str,
    token: str
) -> Dict:
    """Make request with Bearer token (OAuth)."""
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    async with session.get(url, headers=headers) as response:
        return await response.json()


async def call_api_with_basic_auth(
    session: aiohttp.ClientSession,
    url: str,
    username: str,
    password: str
) -> Dict:
    """Make request with Basic authentication."""
    async with session.get(url, auth=aiohttp.BasicAuth(username, password)) as response:
        return await response.json()


# ============================================================================
# SECTION 8: RATE LIMITING AND THROTTLING
# ============================================================================

"""
Rate limiters ensure we don't exceed API quotas
Throttling slows down requests to stay within limits
"""

class RateLimiter:
    """Simple rate limiter using asyncio."""
    
    def __init__(self, max_requests: int, period_seconds: int = 60):
        """
        Initialize rate limiter.
        
        Args:
            max_requests: Maximum requests allowed
            period_seconds: Time period for the limit
        """
        self.max_requests = max_requests
        self.period = period_seconds
        self.requests = deque()  # Timestamps of requests
        self.lock = asyncio.Lock()
    
    async def wait_if_needed(self):
        """Wait if we've reached the rate limit."""
        async with self.lock:
            now = time.time()
            cutoff = now - self.period
            
            # Remove old requests outside the period
            while self.requests and self.requests[0] < cutoff:
                self.requests.popleft()
            
            # If at limit, wait
            if len(self.requests) >= self.max_requests:
                sleep_time = self.requests[0] + self.period - now
                if sleep_time > 0:
                    print(f"Rate limit reached. Waiting {sleep_time:.1f}s...")
                    await asyncio.sleep(sleep_time)
                    return await self.wait_if_needed()
            
            # Record this request
            self.requests.append(now)


async def rate_limited_fetch(
    session: aiohttp.ClientSession,
    limiter: RateLimiter,
    url: str
) -> str:
    """Fetch URL with rate limiting."""
    await limiter.wait_if_needed()
    async with session.get(url) as response:
        return await response.text()


class Throttler:
    """Throttle requests with a minimum delay between them."""
    
    def __init__(self, delay_seconds: float = 1.0):
        """
        Initialize throttler.
        
        Args:
            delay_seconds: Minimum delay between requests
        """
        self.delay = delay_seconds
        self.last_request = 0
        self.lock = asyncio.Lock()
    
    async def wait(self):
        """Wait if needed to maintain throttle."""
        async with self.lock:
            elapsed = time.time() - self.last_request
            if elapsed < self.delay:
                await asyncio.sleep(self.delay - elapsed)
            self.last_request = time.time()


async def throttled_fetch(
    session: aiohttp.ClientSession,
    throttler: Throttler,
    url: str
) -> str:
    """Fetch URL with throttling."""
    await throttler.wait()
    async with session.get(url) as response:
        return await response.text()


# ============================================================================
# SECTION 9: RETRY LOGIC WITH EXPONENTIAL BACKOFF
# ============================================================================

"""
Retry failed requests with exponential backoff
Handles temporary network issues gracefully
"""

async def fetch_with_retry(
    session: aiohttp.ClientSession,
    url: str,
    max_retries: int = 3,
    backoff_factor: float = 2.0
) -> Optional[Dict]:
    """
    Fetch URL with retry logic and exponential backoff.
    
    Args:
        session: aiohttp ClientSession
        url: URL to fetch
        max_retries: Maximum number of retry attempts
        backoff_factor: Multiplier for backoff delay
    
    Returns:
        Response data or None if all retries failed
    """
    for attempt in range(max_retries):
        try:
            async with session.get(url) as response:
                # Handle rate limiting
                if response.status == 429:
                    wait_time = backoff_factor ** attempt
                    print(f"Rate limited. Waiting {wait_time:.1f}s...")
                    await asyncio.sleep(wait_time)
                    continue  # Retry
                
                # Handle server errors (retry)
                if response.status >= 500:
                    if attempt < max_retries - 1:
                        wait_time = backoff_factor ** attempt
                        print(f"Server error {response.status}. Retrying in {wait_time:.1f}s...")
                        await asyncio.sleep(wait_time)
                        continue
                    else:
                        raise Exception(f"Server error {response.status}")
                
                # Handle client errors (don't retry)
                if response.status >= 400:
                    raise Exception(f"Client error {response.status}: {response.reason}")
                
                # Success
                return await response.json()
                
        except (aiohttp.ClientError, asyncio.TimeoutError) as e:
            if attempt < max_retries - 1:
                wait_time = backoff_factor ** attempt
                print(f"Request failed: {e}. Retrying in {wait_time:.1f}s...")
                await asyncio.sleep(wait_time)
            else:
                print(f"All {max_retries} retries failed: {e}")
                return None
    
    return None


# ============================================================================
# SECTION 10: TIMEOUT PROTECTION
# ============================================================================

"""
Protect async operations from hanging indefinitely
Use asyncio.timeout or asyncio.wait_for
"""

async def fetch_with_timeout(
    session: aiohttp.ClientSession,
    url: str,
    timeout_seconds: float = 5.0
) -> Optional[Dict]:
    """Fetch with timeout protection."""
    try:
        # Set timeout for the entire request
        timeout = aiohttp.ClientTimeout(total=timeout_seconds)
        async with aiohttp.ClientSession(timeout=timeout) as new_session:
            async with new_session.get(url) as response:
                return await response.json()
    except asyncio.TimeoutError:
        print(f"Request timed out after {timeout_seconds}s")
        return None
    except aiohttp.ClientError as e:
        print(f"Request failed: {e}")
        return None


async def fetch_with_wait_for(
    session: aiohttp.ClientSession,
    url: str,
    timeout_seconds: float = 5.0
) -> Optional[Dict]:
    """Alternative: use asyncio.wait_for."""
    try:
        async with session.get(url) as response:
            data = await asyncio.wait_for(
                response.json(),
                timeout=timeout_seconds
            )
            return data
    except asyncio.TimeoutError:
        print(f"Request timed out after {timeout_seconds}s")
        return None


# ============================================================================
# SECTION 11: CACHING RESPONSES
# ============================================================================

"""
Cache API responses to reduce API calls
Useful when the same data is requested multiple times
"""

class AsyncCache:
    """Simple async cache for API responses."""
    
    def __init__(self, ttl_seconds: int = 300):
        """
        Initialize cache.
        
        Args:
            ttl_seconds: Time to live for cached items
        """
        self.cache = {}
        self.ttl = ttl_seconds
    
    async def get(
        self,
        key: str,
        fetcher
    ) -> Any:
        """
        Get item from cache or fetch if not cached or expired.
        
        Args:
            key: Cache key
            fetcher: Async function to fetch data if not cached
        
        Returns:
            Cached or freshly fetched data
        """
        now = time.time()
        
        # Check if in cache and not expired
        if key in self.cache:
            cached_data, timestamp = self.cache[key]
            if now - timestamp < self.ttl:
                print(f"Cache hit: {key}")
                return cached_data
        
        # Cache miss or expired
        print(f"Cache miss: {key}")
        data = await fetcher()
        
        # Store in cache
        self.cache[key] = (data, now)
        
        return data
    
    def clear(self, key: Optional[str] = None):
        """Clear cache."""
        if key:
            self.cache.pop(key, None)
        else:
            self.cache.clear()


async def cache_example():
    """Example of using async cache."""
    print("\n--- ASYNC CACHE EXAMPLE ---")
    
    cache = AsyncCache(ttl_seconds=10)
    
    async def fetch_user_data():
        """Simulate fetching user data."""
        await asyncio.sleep(1)
        return {'id': 1, 'name': 'John Doe'}
    
    # First call - fetches from API
    user1 = await cache.get('user:1', fetch_user_data)
    print(f"User 1: {user1}")
    
    # Second call - from cache
    user2 = await cache.get('user:1', fetch_user_data)
    print(f"User 2 (cached): {user2}")
    
    return user1


# asyncio.run(cache_example())


# ============================================================================
# SECTION 12: GITHUB API EXAMPLE - REAL WORLD
# ============================================================================

"""
Complete example: Fetch GitHub user data and repositories
"""

async def get_github_user_info(username: str) -> Dict:
    """Fetch user info and top repositories from GitHub."""
    async with aiohttp.ClientSession() as session:
        try:
            # Fetch user info
            user_url = f'https://api.github.com/users/{username}'
            async with session.get(user_url) as user_response:
                if user_response.status == 404:
                    return {'error': f'User "{username}" not found'}
                if user_response.status != 200:
                    return {'error': f'Failed to fetch user: {user_response.status}'}
                user = await user_response.json()
            
            # Fetch repositories
            repos_url = f'https://api.github.com/users/{username}/repos'
            async with session.get(repos_url) as repos_response:
                if repos_response.status != 200:
                    return {'error': 'Failed to fetch repositories'}
                repos = await repos_response.json()
            
            # Process and return
            return {
                'user': {
                    'name': user['name'],
                    'login': user['login'],
                    'bio': user['bio'],
                    'public_repos': user['public_repos'],
                    'followers': user['followers'],
                    'following': user['following']
                },
                'top_repositories': sorted(
                    repos,
                    key=lambda r: r['stargazers_count'],
                    reverse=True
                )[:5]
            }
            
        except aiohttp.ClientError as e:
            return {'error': f'Network error: {str(e)}'}


async def github_example():
    """Example of GitHub API integration."""
    print("\n--- GITHUB API EXAMPLE ---")
    
    info = await get_github_user_info('torvalds')
    
    if 'error' in info:
        print(f"Error: {info['error']}")
    else:
        print(f"User: {info['user']['name']} (@{info['user']['login']})")
        print(f"Followers: {info['user']['followers']}")
        print("Top Repositories:")
        for repo in info['top_repositories']:
            print(f"  - {repo['name']}: {repo['stargazers_count']} stars")
    
    return info


# asyncio.run(github_example())


# ============================================================================
# SECTION 13: ASYNCIO UTILITIES - TASKS AND EVENTS
# ============================================================================

"""
Additional asyncio utilities for advanced async patterns
"""

async def create_task_example():
    """Example of creating and managing tasks."""
    print("\n--- CREATE TASK EXAMPLE ---")
    
    async def worker(worker_id: int):
        """A worker coroutine."""
        for i in range(3):
            print(f"Worker {worker_id} working on task {i}")
            await asyncio.sleep(1)
    
    # Create tasks
    tasks = [
        asyncio.create_task(worker(1)),
        asyncio.create_task(worker(2)),
        asyncio.create_task(worker(3))
    ]
    
    # Wait for all to complete
    await asyncio.gather(*tasks)
    
    print("All workers done")


async def wait_example():
    """Example of asyncio.wait with FIRST_COMPLETED."""
    print("\n--- WAIT EXAMPLE ---")
    
    async def quick_task():
        await asyncio.sleep(0.5)
        return "Quick"
    
    async def slow_task():
        await asyncio.sleep(2)
        return "Slow"
    
    tasks = {
        asyncio.create_task(quick_task()),
        asyncio.create_task(slow_task())
    }
    
    # Wait for first one to complete
    done, pending = await asyncio.wait(
        tasks,
        return_when=asyncio.FIRST_COMPLETED
    )
    
    print(f"First done: {[t.result() for t in done]}")
    print(f"Still pending: {len(pending)}")
    
    # Cancel pending tasks
    for task in pending:
        task.cancel()


# ============================================================================
# SECTION 14: COMPARING PYTHON AND JAVASCRIPT ASYNC
# ============================================================================

"""
KEY DIFFERENCES:

Python asyncio:
✓ Event-based concurrency model
✓ asyncio.gather() for parallel execution
✓ aiohttp for HTTP requests
✓ All async code must use await
✓ Context managers (async with) for resource management

JavaScript:
✓ Promise-based (underlying, hidden in async/await)
✓ Promise.all() for parallel execution
✓ fetch() built-in for HTTP requests
✓ Can mix sync and async code
✓ Event listeners for managing async operations

SIMILAR CONCEPTS:
- async/await syntax nearly identical
- Parallel execution patterns similar
- Error handling with try/catch
- Rate limiting and retry logic identical in concept

PYTHON ADVANTAGES:
- More explicit control over event loop
- Fixtures and testing utilities in pytest
- Context managers prevent resource leaks
- Better for CPU-bound operations with subprocess

JAVASCRIPT ADVANTAGES:
- Native browser support (web standard)
- Top-level await easier
- Fetch API simpler and built-in
- Better for DOM manipulation
"""


# ============================================================================
# SUMMARY & BEST PRACTICES
# ============================================================================

"""
BEST PRACTICES FOR ASYNC PYTHON:

1. USE asyncio.gather() FOR PARALLEL EXECUTION
   - Much faster than sequential awaits
   - Start all tasks, then await together

2. USE aiohttp FOR HTTP REQUESTS
   - More efficient than requests library
   - Reuse session for multiple requests
   - Set timeouts to prevent hanging

3. ALWAYS HANDLE ERRORS
   - Use try/except with await
   - Set return_exceptions=True in gather for fault tolerance
   - Implement retry logic for network requests

4. USE ASYNCIO.WAIT_FOR FOR TIMEOUTS
   - Prevent requests from hanging
   - Set appropriate timeout values

5. IMPLEMENT RATE LIMITING
   - Don't overwhelm APIs
   - Use asyncio.Lock for thread-safe operations
   - Track request timestamps

6. CACHE RESPONSES
   - Reduce API calls
   - Implement TTL (time to live)
   - Clear cache when data changes

7. USE CONTEXT MANAGERS
   - async with session.get() as response:
   - Ensures resources are properly cleaned up

8. NEVER SLEEP BLOCK
   - Use await asyncio.sleep() not time.sleep()
   - time.sleep() blocks the entire event loop

9. DOCUMENT ASYNC BEHAVIOR
   - Specify which functions are coroutines
   - Document expected concurrency patterns
   - Note any blocking operations

10. TEST ASYNC CODE
    - Use pytest-asyncio plugin
    - Test both success and error cases
    - Verify proper cleanup and resource management

COMMON PATTERNS:

# Fetch multiple items in parallel
results = await asyncio.gather(*[fetch(id) for id in ids])

# Fetch with retry
data = await fetch_with_retry(url, max_retries=3)

# Fetch with timeout
data = await fetch_with_timeout(url, timeout=5)

# Fetch with rate limiting
await rate_limiter.wait_if_needed()
data = await fetch(url)

# Cache result
data = await cache.get(key, fetcher)
"""


if __name__ == '__main__':
    # Run examples (uncomment to test)
    # asyncio.run(run_hello_example())
    # asyncio.run(sequential_example())
    # asyncio.run(parallel_example())
    # asyncio.run(gather_example())
    # asyncio.run(error_handling_example())
    # asyncio.run(fetch_multiple_urls())
    # asyncio.run(get_weather_for_cities(['Vienna', 'Berlin', 'Paris']))
    # asyncio.run(github_example())
    # asyncio.run(create_task_example())
    # asyncio.run(wait_example())
    
    print("Week 9 Python Async Examples")
    print("Uncomment examples in __main__ to test")