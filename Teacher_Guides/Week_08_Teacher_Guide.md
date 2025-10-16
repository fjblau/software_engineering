# Week 8 Teacher's Guide: "Easter Break & Async Learning"
## Self-Study Week - Async JavaScript & Python + Open Source

**Duration:** Self-Study Week  
**Dates:** April 7-11, 2025  
**Note:** Easter Holiday April 14-21

---

## Overview

Week 8 is a **self-study consolidation week** during Easter break. Students work independently on asynchronous programming, contribute to open-source projects, and deepen understanding of professional development practices.

### Flexible Self-Study Approach
- Recommended 20-25 hours over the week
- Students can distribute work around Easter celebrations
- Multiple activity options available
- Learning journal required for accountability
- Asynchronous learning prepares for Week 9 intensive

### Success Metrics
✅ Students understand async/await concepts  
✅ Students make open-source contribution  
✅ Students refactor and improve previous work  
✅ Students practice independent learning

---

## Activity Structure

### Activity 1: Async JavaScript Learning (6-8 hours)

**Topics to Cover:**
- Callbacks basics
- Promises (.then(), .catch(), .finally())
- Promise.all() and Promise.race()
- Async/await syntax
- Error handling with try/catch
- Async arrow functions

**Resources:**
- MDN JavaScript Guide to Promises
- javascript.info async articles
- freeCodeCamp async courses

**Exercises:**
- Convert callbacks to Promises
- Practice Promise chaining
- Build async data fetcher
- Handle errors properly

### Activity 2: Python Asyncio Learning (6-8 hours)

**Topics to Cover:**
- async/await in Python
- asyncio.run() and event loop
- asyncio.gather() for parallel
- async with for context managers
- Comparing to JavaScript async

**Resources:**
- Python asyncio documentation
- Real Python async tutorials
- asyncio examples

**Exercises:**
- Write async functions
- Use asyncio.gather()
- Compare with JavaScript patterns
- Practice error handling

### Activity 3: Open Source Contribution (6-8 hours)

**Finding Projects:**
- First Timers Only
- Good First Issue
- GitHub good-first-issue label
- Documentation projects

**Contribution Process:**
1. Fork repository
2. Understand contribution guidelines
3. Create feature branch
4. Make changes (documentation, bug fix, tests, etc.)
5. Commit with clear messages
6. Submit pull request
7. Respond to code review

**Documentation Example:**
Contribute typo fixes, improve README, add examples, translate docs.

### Activity 4: Project Refactoring (3-4 hours)

**Choose one previous project and:**
- Remove commented code
- Improve variable names
- Add error handling
- Update documentation
- Fix any bugs found
- Improve code organization

**Refactoring Checklist:**
- ✓ Code quality improvements
- ✓ Better error handling
- ✓ Clear comments added
- ✓ README updated
- ✓ Tests working

### Activity 5: Professional Development (2-3 hours)

**Read and Research:**
- Developer blogs
- Technology news
- Career development articles
- Learning resource evaluation
- Industry trends

**Reflection:**
- What excites you about development?
- Where do you want to specialize?
- What skills to focus on next?

---

## Deliverables (100 points)

### 1. Open Source Contribution (40 points)
- Submit pull request to open-source project
- Document the process
- Share link to your PR
- Describe contribution
- Reflect on experience

### 2. Async Learning Completion (30 points)
- Complete JavaScript async tutorials
- Complete Python asyncio tutorials
- Submit practice exercises
- Create comparison document
  - Similarities and differences
  - When to use each approach
  - Code examples side-by-side

### 3. Project Refactoring (15 points)
- Choose previous project
- Document improvements made
- Git commits showing changes
- Updated README
- List of quality improvements

### 4. Learning Journal (10 points)
- Daily entries (5-7 days)
- What you learned
- What you built/practiced
- Challenges encountered
- Tomorrow's goals
- Resources used

### 5. Sprint Review Presentation (5 points)
- 5-minute presentation
- Open source contribution experience
- Async programming insights
- Professional collaboration learning

---

## Learning Journal Template

```markdown
# Learning Journal - Week 8

## Day 1 - April 7, 2025

### What I Learned
- JavaScript Promise basics
- How to chain .then() calls
- Difference between resolve and reject

### What I Built/Practiced
- Converted 3 callback functions to Promises
- Built simple data fetcher

### Challenges
- Understanding Promise chaining
- Proper error handling

### Tomorrow's Goals
- Learn async/await syntax
- Find open-source project

### Resources
- MDN Promises guide
- freeCodeCamp async course

### Time Spent: 4 hours

---

## Day 2 - April 8, 2025
...continue for each day...
```

---

## Async JavaScript Key Concepts

### Callbacks (Review)
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}

fetchData((data) => console.log(data));
```

### Promises
```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Async/Await
```javascript
async function loadData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Parallel operations
async function loadAll() {
    const [users, posts] = await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json())
    ]);
}
```

---

## Python Asyncio Key Concepts

### Basic Async/Await
```python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return 'Data loaded'

async def main():
    data = await fetch_data()
    print(data)

asyncio.run(main())
```

### Parallel Operations
```python
async def fetch_all():
    users, posts = await asyncio.gather(
        fetch_users(),
        fetch_posts()
    )
    return users, posts
```

### Async HTTP Requests
```python
import aiohttp

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()
```

---

## Open Source Example: First Contribution

1. **Find Project:** Search "good-first-issue"
2. **Understand:** Read README, CONTRIBUTING.md
3. **Fork & Clone:** Fork on GitHub, clone locally
4. **Create Branch:** `git checkout -b fix-typo-readme`
5. **Make Changes:** Fix typos, improve docs, etc.
6. **Commit:** `git commit -m "Fix typo in README"`
7. **Push:** `git push origin fix-typo-readme`
8. **Pull Request:** Create PR with clear description
9. **Respond:** Address reviewer comments
10. **Merged:** Contribution accepted!

---

## Resources

### Async JavaScript
- MDN Promises guide
- javascript.info async section
- freeCodeCamp async course

### Python Async
- asyncio documentation
- Real Python async tutorials
- Official asyncio examples

### Open Source
- First Timers Only
- Good First Issue
- GitHub Contributing guides
- opensource.guide

### Professional Development
- Dev.to community
- Hacker News
- CSS-Tricks blog
- Medium engineering articles

---

## Expectations

- **Quality over Speed** - Better to do fewer things well
- **Independent Learning** - Research, experiment, learn
- **Professional Collaboration** - Real open source experience
- **Reflection** - Document your learning journey
- **Sprint Review** - Be ready to present findings

---

## Week 9 Preview

Next week (after Easter break):
- **Intensive Async Programming Week**
- Real API integration
- Authentication and rate limiting
- Dual-language comparison
- Projects using both async patterns
