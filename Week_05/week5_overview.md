# Week 5 Overview: "Soundcheck & Setup"
## Web Fundamentals - HTML, CSS, and Professional Web Development

**Duration: 30 hours**
**Dates: March 17-21, 2025**
**Note: March 19 (Josefstag) is a holiday**

---

## Week Overview

Week 5 begins Month 2 with web development fundamentals. Students learn how the web works, build professional websites with semantic HTML and accessible CSS, understand package management, and establish professional development workflows.

### Key Focus Areas:
- How the web works (HTTP, client-server model)
- Semantic HTML and accessibility
- Professional CSS techniques
- Package management (npm for JavaScript, pip for Python)
- Building and deploying professional portfolio sites
- Git workflow with feature branches and pull requests

### Week 5 Success Metrics:
- ✅ Students understand how the web works
- ✅ Students write semantic, accessible HTML
- ✅ Students create responsive CSS layouts
- ✅ Students use package managers (npm, pip)
- ✅ Students deploy websites to GitHub Pages
- ✅ Students follow professional Git workflows

---

## Daily Schedule

### Monday: How the Web Works
**6.5 hours**
- Client-server model
- HTTP requests and responses
- URLs, domains, and DNS
- HTTP methods (GET, POST, PUT, DELETE)
- Status codes (200, 404, 500, etc.)
- Headers and cookies

### Tuesday: Semantic HTML & Accessible CSS
**6.5 hours**
- Semantic HTML5 elements (header, nav, main, article, section, footer)
- ARIA labels and accessibility
- CSS fundamentals and box model
- Flexbox layouts
- CSS Grid basics
- Professional CSS organization

### Wednesday: Package Management (npm & pip)
**6.5 hours**
- What are package managers?
- npm (Node Package Manager) for JavaScript
- package.json and dependencies
- pip and requirements.txt for Python
- Virtual environments (Python)
- Installing and managing packages
- Semantic versioning

### Thursday: Building Professional Portfolio Site
**6.5 hours**
- Portfolio website structure
- Responsive design principles
- Mobile-first approach
- CSS best practices
- Showcasing projects
- Professional presentation
- Git workflow with feature branches

### Friday: Code Review & Documentation Standards
**4 hours**
- Code review best practices
- Writing professional READMEs
- Documentation standards
- Pull request reviews
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 5, students will be able to:

1. **Web Fundamentals**
   - Explain how the web works
   - Understand HTTP protocol
   - Describe client-server architecture
   - Know common HTTP status codes

2. **HTML/CSS**
   - Write semantic HTML5
   - Apply accessibility standards
   - Create responsive layouts with Flexbox
   - Use CSS Grid for page layout
   - Build mobile-responsive websites

3. **Package Management**
   - Use npm to manage JavaScript packages
   - Use pip to manage Python packages
   - Understand package.json and requirements.txt
   - Install and update dependencies

4. **Professional Workflow**
   - Create feature branches
   - Make pull requests
   - Conduct code reviews
   - Write professional documentation
   - Deploy to GitHub Pages

---

## Key Concepts

### Web Architecture
- Client-server model
- HTTP protocol
- Request/response cycle
- Status codes
- Headers
- REST principles

### HTML5
- Semantic elements
- Accessibility (WCAG guidelines)
- ARIA labels
- Forms and validation
- SEO considerations

### CSS
- Box model
- Flexbox
- CSS Grid
- Responsive design
- Media queries
- CSS variables
- Mobile-first approach

### Package Management
- npm (JavaScript)
- pip (Python)
- Dependencies
- Semantic versioning
- Lock files
- Virtual environments

### Git Workflow
- Feature branches
- Pull requests
- Code review
- Merge strategies
- Branch protection

---

## Deliverables

### Weekly Assignment: Professional Portfolio Website v1.0 (100 points)

1. **Responsive Website** (40 points)
   - Semantic HTML5
   - Accessible design (ARIA labels, keyboard navigation)
   - Mobile-responsive layout
   - Professional color scheme and typography
   - At least 4 sections:
     - Hero/Introduction
     - About Me
     - Projects (showcase Week 1-4 projects)
     - Contact

2. **Technical Implementation** (25 points)
   - Flexbox or Grid layout
   - Mobile-first responsive design
   - Cross-browser compatibility
   - Fast loading times
   - Valid HTML/CSS

3. **Git Workflow** (20 points)
   - Feature branches for each section
   - Pull requests with descriptions
   - Meaningful commit messages
   - Clean commit history

4. **Deployment** (10 points)
   - Deployed to GitHub Pages
   - Custom domain (optional)
   - HTTPS enabled

5. **Documentation** (5 points)
   - Professional README with setup instructions
   - Code comments where needed
   - Highlight both JavaScript and Python skills

---

## Resources

### Web Fundamentals
- [How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [HTTP Status Codes](https://httpstatuses.com/)

### HTML & CSS
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)

### Package Managers
- [npm Documentation](https://docs.npmjs.com/)
- [pip Documentation](https://pip.pypa.io/)
- [Semantic Versioning](https://semver.org/)

### Deployment
- [GitHub Pages Guide](https://pages.github.com/)

---

## Code Examples

### Semantic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio of Maria Schmidt - Full-Stack Developer">
    <title>Maria Schmidt | Full-Stack Developer</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero" aria-label="Introduction">
            <h1>Maria Schmidt</h1>
            <p>Full-Stack Developer | JavaScript & Python</p>
        </section>
        
        <section id="about">
            <h2>About Me</h2>
            <p>Learning to code at Digital Campus Vorarlberg...</p>
        </section>
        
        <section id="projects">
            <h2>Projects</h2>
            <article class="project">
                <h3>Data Management System</h3>
                <p>JavaScript and Python application for CSV/JSON processing</p>
                <a href="https://github.com/maria/project1">View on GitHub</a>
            </article>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <form>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Maria Schmidt. All rights reserved.</p>
    </footer>
</body>
</html>
```

### Responsive CSS with Flexbox
```css
/* CSS Variables */
:root {
    --primary-color: #2563eb;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --spacing: 1rem;
}

/* Mobile-first approach */
body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    margin: 0;
    padding: 0;
}

header {
    background: var(--primary-color);
    color: white;
    padding: var(--spacing);
}

nav ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 0.5rem;
}

/* Tablet and larger */
@media (min-width: 768px) {
    nav ul {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }
}

.projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 768px) {
    .projects {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .project {
        flex: 1 1 300px;
    }
}
```

### CSS Grid Layout
```css
.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin: 0 auto;
    }
}
```

### package.json Example
```json
{
  "name": "portfolio-website",
  "version": "1.0.0",
  "description": "Professional portfolio website",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "deploy": "gh-pages -d ."
  },
  "keywords": ["portfolio", "web development"],
  "author": "Maria Schmidt",
  "license": "MIT",
  "devDependencies": {
    "gh-pages": "^4.0.0"
  }
}
```

### Python requirements.txt
```
Flask==3.0.0
requests==2.31.0
pytest==7.4.3
```

---

## Git Workflow Example

```bash
# Start new feature
git checkout -b feature/add-projects-section

# Make changes
git add .
git commit -m "Add projects section with Week 1-4 portfolio items"

# Push to remote
git push origin feature/add-projects-section

# Create Pull Request on GitHub
# Request code review
# Make any requested changes
# Merge after approval

# Switch back to main
git checkout main
git pull origin main
```

---

## Accessibility Checklist

- ✅ Semantic HTML elements
- ✅ Alt text for all images
- ✅ ARIA labels where needed
- ✅ Keyboard navigation works
- ✅ Sufficient color contrast
- ✅ Focus indicators visible
- ✅ Forms have proper labels
- ✅ Headings in logical order
- ✅ Skip-to-content link
- ✅ Responsive on all screen sizes

---

## Notes for Instructor

- **Holiday Note**: March 19 is Josefstag - adjust schedule accordingly
- Start with "view source" on real websites
- Demonstrate developer tools in browser
- Show bad vs good HTML/CSS examples
- Emphasize accessibility from the beginning
- Live-code portfolio site alongside students
- Show how to debug CSS with DevTools
- Demonstrate different package managers side by side
- Review students' portfolios as a class
- Discuss what makes a professional portfolio
- Connect Month 1 projects to portfolio
- Prepare students for JavaScript DOM manipulation (Week 6)
- Emphasize Git workflow - this is professional practice
- Show how to review others' pull requests constructively

---

## Common Mistakes to Avoid

- Using `<div>` for everything instead of semantic elements
- Not testing on mobile devices
- Ignoring accessibility
- Inconsistent Git commit messages
- Not using version control properly
- Committing node_modules or __pycache__
- Poor README documentation

---

## Connection to Other Weeks

- **Week 1**: Professional tools and Git (now applied to web dev)
- **Week 2-4**: Projects to showcase in portfolio
- **Week 6**: Will add interactivity with JavaScript
- **Week 7**: Will connect frontend to Python backend
- **Week 11**: Will enhance portfolio with React

This week bridges programming skills to web development, setting foundation for becoming full-stack developers.