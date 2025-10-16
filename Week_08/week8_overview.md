# Week 8 Overview: Easter Break & Async Learning
## Self-Study Week - Async JavaScript & Python + Open Source Contribution

**Duration: Self-Study**
**Dates: April 7-11, 2025**
**Note: Easter Holiday Week - April 14-21, 2025**

---

## Week Overview

Week 8 is a self-study and consolidation week during Easter break. Students work independently on online courses, contribute to open-source projects, and deepen their understanding of asynchronous programming in both JavaScript and Python. This week provides valuable experience with professional development practices and prepares for Week 9's intensive async programming focus.

### Key Focus Areas:
- Asynchronous programming concepts
- Independent learning and research
- Open-source contribution workflow
- Code review in real projects
- Professional collaboration practices
- Refactoring previous projects

### Week 8 Success Metrics:
- ✅ Students complete async learning materials
- ✅ Students make open-source contribution
- ✅ Students refactor and improve previous work
- ✅ Students document their learning journey
- ✅ Students practice professional collaboration

---

## Self-Study Schedule

### Flexible Schedule (Plan Your Time)
**Recommended: 20-25 hours over the week**

Distribute your time across these activities:

### Activity 1: Async JavaScript Learning (6-8 hours)
- Online courses on async JavaScript
- Understanding Promises
- Introduction to async/await
- Error handling in async code
- Practice exercises

**Recommended Resources:**
- [JavaScript Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Async JavaScript Course - freeCodeCamp](https://www.freecodecamp.org/)
- [JavaScript.info - Async/Await](https://javascript.info/async-await)

### Activity 2: Python Async Learning (6-8 hours)
- Python asyncio basics
- async/await in Python
- Comparing JavaScript and Python async
- Practice with real examples
- Understanding event loops

**Recommended Resources:**
- [Python asyncio Documentation](https://docs.python.org/3/library/asyncio.html)
- [Real Python - Async IO](https://realpython.com/async-io-python/)
- [asyncio Tutorial](https://www.youtube.com/watch?v=t5Bo1Je9EmE)

### Activity 3: Open Source Contribution (6-8 hours)
- Find suitable project
- Understand contribution guidelines
- Make meaningful contribution
- Submit pull request
- Respond to code review

### Activity 4: Project Refactoring (3-4 hours)
- Review previous projects
- Apply new learning
- Improve code quality
- Update documentation
- Fix bugs

### Activity 5: Professional Development Reading (2-3 hours)
- Read developer blogs
- Study best practices
- Research industry trends
- Career development planning

---

## Learning Objectives

By the end of Week 8, students will be able to:

1. **Async Concepts**
   - Explain synchronous vs asynchronous code
   - Understand Promises in JavaScript
   - Understand asyncio in Python
   - Compare async approaches in both languages

2. **Open Source**
   - Find projects to contribute to
   - Follow contribution guidelines
   - Make pull requests
   - Respond to code review feedback

3. **Independent Learning**
   - Find quality learning resources
   - Learn from documentation
   - Practice self-directed study
   - Set and achieve learning goals

4. **Code Quality**
   - Refactor existing code
   - Apply new knowledge retroactively
   - Improve documentation
   - Fix technical debt

---

## Deliverables

### Weekly Assignment: Open Source Contribution & Learning Journal (100 points)

1. **Open Source Contribution** (40 points)
   - Find and contribute to open-source project (any language)
   - Contribution types (choose one or more):
     - Documentation improvements
     - Bug fix
     - Small feature
     - Test addition
     - Translation
   - Document the process
   - Link to your pull request

2. **Async Learning Completion** (30 points)
   - Complete async JavaScript tutorials
   - Complete Python asyncio tutorials
   - Submit practice exercises
   - Create comparison document between JS and Python async

3. **Project Refactoring** (15 points)
   - Choose one previous project
   - Apply new learning
   - Improve code quality
   - Update documentation
   - Document improvements made

4. **Learning Journal & Reflection** (10 points)
   - Document daily learning
   - Reflect on challenges
   - Note key takeaways
   - Plan application to future projects

5. **Sprint Review Presentation** (5 points)
   - Present contribution and learning
   - Discuss professional collaboration experience
   - Share insights and challenges
   - Prepare for Month 2 capstone project

---

## Open Source Contribution Guide

### Finding Projects

**Beginner-Friendly Platforms:**
- [First Timers Only](https://www.firsttimersonly.com/)
- [Good First Issue](https://goodfirstissue.dev/)
- [Up For Grabs](https://up-for-grabs.net/)
- GitHub labels: `good-first-issue`, `beginner-friendly`, `documentation`

**Project Types:**
- Documentation projects
- Tutorial repositories
- Developer tools
- Educational projects
- Local community projects

### Contribution Process

1. **Find a Project**
   - Look for `CONTRIBUTING.md`
   - Read `README.md` thoroughly
   - Check issue tracker
   - Find `good-first-issue` labels

2. **Understand the Project**
   - Clone and run locally
   - Read documentation
   - Understand code structure
   - Review existing issues and PRs

3. **Make Your Contribution**
   - Fork the repository
   - Create feature branch
   - Make your changes
   - Test thoroughly
   - Commit with clear messages

4. **Submit Pull Request**
   - Write clear PR description
   - Reference related issues
   - Explain your changes
   - Be responsive to feedback

5. **Code Review**
   - Respond professionally
   - Make requested changes
   - Learn from feedback
   - Thank reviewers

---

## Async JavaScript Learning Path

### Topics to Cover:

1. **Callbacks**
   ```javascript
   function fetchData(callback) {
       setTimeout(() => {
           callback('Data loaded');
       }, 1000);
   }
   
   fetchData((data) => {
       console.log(data);
   });
   ```

2. **Promises**
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

3. **Async/Await**
   ```javascript
   async function loadData() {
       try {
           const data = await fetchData();
           console.log(data);
       } catch (error) {
           console.error(error);
       }
   }
   ```

4. **Multiple Async Operations**
   ```javascript
   async function loadAllData() {
       const [users, posts, comments] = await Promise.all([
           fetch('/api/users'),
           fetch('/api/posts'),
           fetch('/api/comments')
       ]);
   }
   ```

---

## Python Async Learning Path

### Topics to Cover:

1. **Basic Async/Await**
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

2. **Multiple Async Operations**
   ```python
   async def load_all_data():
       users, posts = await asyncio.gather(
           fetch_users(),
           fetch_posts()
       )
       return users, posts
   ```

3. **Async with HTTP Requests**
   ```python
   import aiohttp
   
   async def fetch_url(url):
       async with aiohttp.ClientSession() as session:
           async with session.get(url) as response:
               return await response.text()
   ```

---

## Refactoring Checklist

When refactoring previous projects:

### Code Quality
- ✅ Remove commented-out code
- ✅ Consistent naming conventions
- ✅ Add missing error handling
- ✅ Improve variable names
- ✅ Break down large functions
- ✅ Remove code duplication

### Documentation
- ✅ Update README
- ✅ Add code comments
- ✅ Document setup process
- ✅ Add usage examples
- ✅ List dependencies clearly

### Git Practices
- ✅ Meaningful commit messages
- ✅ Squash messy commits
- ✅ Add .gitignore if missing
- ✅ Remove sensitive data

### Testing
- ✅ Test all features manually
- ✅ Fix any bugs found
- ✅ Add input validation
- ✅ Handle edge cases

---

## Resources

### Async JavaScript
- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [JavaScript.info - Async](https://javascript.info/async)

### Python Async
- [Python asyncio Docs](https://docs.python.org/3/library/asyncio.html)
- [Real Python - Async IO](https://realpython.com/async-io-python/)
- [aiohttp - Async HTTP](https://docs.aiohttp.org/)

### Open Source
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [GitHub Open Source Guide](https://github.com/open-source)

### Professional Development
- [Dev.to](https://dev.to/) - Developer community
- [Hacker News](https://news.ycombinator.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)

---

## Daily Learning Log Template

```markdown
# Day 1 - April 7, 2025

## What I Learned
- JavaScript Promises basics
- How to chain .then() calls
- Error handling with .catch()

## What I Built/Practiced
- Converted callback-based code to Promises
- Built simple async data fetcher

## Challenges
- Understanding Promise chains
- Handling errors properly

## Tomorrow's Goals
- Learn async/await syntax
- Find open-source project to contribute to

## Resources Used
- MDN Promises documentation
- freeCodeCamp tutorial

## Time Spent: 4 hours
```

---

## Sprint Review Preparation (April 25)

Prepare 5-minute presentation covering:

1. **Open Source Contribution**
   - What project?
   - What did you contribute?
   - Show your pull request
   - What did you learn about collaboration?

2. **Async Learning**
   - Key concepts learned
   - Compare JS vs Python approaches
   - Show one code example

3. **Refactoring**
   - Which project did you improve?
   - What changes did you make?
   - Before/after comparison

4. **Key Takeaways**
   - Most valuable learning
   - How will you apply it?
   - Preparation for Week 9

---

## Notes for Instructor

- **This is self-study week** - students work independently
- Provide list of recommended projects for contributions
- Be available for questions (online office hours)
- Review students' pull requests and learning journals
- Prepare to help students who struggled with async concepts
- Use Sprint Review to assess understanding
- Connect contributions to professional development
- Emphasize that Week 9 builds directly on this learning
- Celebrate successful open-source contributions
- Discuss challenges students faced in independent learning

---

## Week 9 Preview

After Easter break and self-study, Week 9 will dive deep into:
- Asynchronous programming (building on self-study)
- Real API integration
- Advanced async patterns
- Error handling in async code
- Dual-language async project

Students should come prepared with questions and ready to apply their self-study learning!

---

## Connection to Other Weeks

- **Weeks 1-7**: Foundation that makes independent learning possible
- **Week 9**: Intensive async programming (applies self-study)
- **Week 11+**: Professional practices including open-source mindset
- **Week 16**: Capstone project benefits from refactoring skills

This week develops crucial professional skills: self-directed learning, collaboration, and contributing to the wider developer community.