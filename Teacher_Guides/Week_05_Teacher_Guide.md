# Week 5 Teacher's Guide: "Soundcheck & Setup"
## Web Fundamentals - HTTP, HTML5, CSS, Package Management & Professional Portfolio

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** March 17-21, 2025  
**Note:** March 19 (Josefstag) is a holiday  
**Focus:** HTTP/Web Architecture, Semantic HTML5, Responsive CSS (Flexbox/Grid), Package Management (npm/pip), Professional Portfolio Development

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

Week 5 launches **Month 2** with a critical transition from backend/data thinking to **frontend web development**. Students shift their perspective: no longer thinking about databases in isolation, but understanding how the web actually works—how requests travel, how browsers render, how users interact.

### Week 5 as Transition Point

> "Week 5 bridges backend knowledge to frontend reality: everything we learned about data now appears in web pages. Students finally see how the concepts connect."

This week emphasizes:
- **HTTP as the universal language** - every web interaction is a request-response cycle
- **HTML as semantic structure** - not just markup, but meaningful structure for accessibility and SEO
- **CSS as responsive layout** - building for all screen sizes using modern techniques
- **Package managers as professional practice** - managing dependencies professionally
- **Portfolio as real deliverable** - creating portfolio-quality code from day one
- **Professional workflow** - branching, pull requests, code review, deployment

### Week 5 Success Metrics

✅ Students explain the HTTP request-response cycle correctly  
✅ Students write semantic HTML5 with proper accessibility  
✅ Students build responsive layouts with Flexbox AND Grid  
✅ Students manage npm and pip workflows effectively  
✅ Students deploy working websites to GitHub Pages  
✅ Students follow professional Git workflows (branches, PRs, reviews)  
✅ Students review code constructively  

### Key Teaching Points

- **HTTP demystified** - make it concrete with DevTools Network tab
- **Semantic HTML matters** - accessibility and SEO aren't buzzwords, they're job requirements
- **Responsive design is mandatory** - not optional, expected in all professional work
- **Flexbox for components, Grid for layout** - learn when to use each
- **Package managers are essential** - every professional project uses them
- **Deployment is part of development** - show it early and often
- **Code review is cultural** - this week starts the peer review practice

---

## Learning Objectives

By the end of Week 5, students will be able to:

### Web Fundamentals
- Explain client-server model and HTTP protocol with examples
- Describe request-response cycle with request methods and status codes
- Understand URLs and URL structure (protocol, domain, path, query, fragment)
- Understand DNS and domain name system basics
- Interpret HTTP headers and understand their purpose
- Understand difference between static and dynamic websites

### HTML Mastery
- Write semantic HTML5 using proper elements (header, nav, main, article, section, footer)
- Apply WCAG accessibility standards in HTML structure
- Use ARIA labels and attributes appropriately
- Link form labels to inputs correctly
- Include proper alt text for images
- Build keyboard-navigable websites

### CSS & Responsive Design
- Create Flexbox layouts for one-dimensional components
- Create CSS Grid layouts for two-dimensional page structures
- Implement mobile-first responsive design
- Use media queries with appropriate breakpoints
- Understand box model (content, padding, border, margin)
- Understand CSS specificity and cascading
- Use flexible units (rem, %, em) appropriately

### Package Management
- Initialize projects with npm init and pip venv
- Install and manage dependencies with npm and pip
- Understand semantic versioning (MAJOR.MINOR.PATCH)
- Create and manage package.json and requirements.txt
- Distinguish between dependencies and devDependencies
- Create custom npm scripts

### Professional Practices
- Create feature branches for work
- Write clear commit messages
- Create and review pull requests
- Deploy to GitHub Pages
- Write professional README files
- Conduct constructive code reviews

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Test HTTP examples in browser DevTools Network tab
2. ✅ Prepare HTML/CSS templates for demos
3. ✅ Test responsive designs on multiple screen sizes
4. ✅ Create working npm/pip project examples
5. ✅ Test GitHub Pages deployment workflow
6. ✅ Prepare accessibility checklist
7. ✅ Set up peer review examples
8. ✅ Create portfolio project template repository

**Classroom Setup:**
- Ensure all students can open DevTools (F12)
- Test HTTP requests to public APIs
- Verify GitHub Pages is enabled for student accounts
- Prepare example portfolio designs
- Have CSS/HTML reference guides printed or digital
- Create sample responsive design mockups

### Student Pre-Requisites (Send Friday Before Week 5)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 4 requirements (arrays, objects, CSV/JSON)
- [ ] GitHub account with SSH keys configured
- [ ] npm installed and working (verify: `npm --version`)
- [ ] Python venv understanding from Week 4
- [ ] Browser DevTools accessible (test F12)
- [ ] Basic HTML/CSS knowledge from Week 4

**Verification Commands (Send to Students):**
```bash
# npm verification
npm --version && npm config get prefix

# Python verification
python3 -m venv test_venv && source test_venv/bin/activate && deactivate

# Git verification
git --version && git config user.name
```

### Software & Tool Requirements

| Tool | Purpose | Version | Notes |
|------|---------|---------|-------|
| Browser | HTTP testing, DevTools | Latest | Chrome, Firefox, Safari |
| npm | JavaScript package manager | 8+ | From Week 2 |
| Python | Package management | 3.8+ | From Week 2 |
| Git | Version control | 2.30+ | From Week 1 |
| GitHub | Repository hosting | - | Student accounts active |
| VS Code | Editor | Latest | From Week 1 |
| HTTP client | API testing | - | Thunder Client or Postman |

---

## Daily Schedule & Topics

### MONDAY: How the Web Works (6.5 hours)

**Learning Goals:**
- Understand HTTP as fundamental protocol
- Explain request-response cycle concretely
- Understand URLs and DNS
- Use browser tools to inspect web traffic
- Understand web architecture basics

**9:00 - 9:30 | Week 5 Overview & Month 2 Launch (30 min)**

Focus on the bridge:
- Recap Month 1: We learned programming fundamentals and data management
- Month 2 preview: Now we BUILD with these concepts on the web
- This week: Foundation for everything else in Month 2
- Show working portfolio example

**9:30 - 10:45 | Client-Server Model & HTTP Fundamentals (75 min)**

*Teaching Strategy:* Concrete visualization with real examples

**Concepts to Explain:**

```
The Web is Simple:
1. Client (browser) sends REQUEST to server
2. Server receives, processes request
3. Server sends RESPONSE back
4. Client (browser) displays response

Real Example:
You type: google.com
Browser converts to IP address
Browser sends HTTP GET request to Google's server
Google's server processes your search
Sends back HTML page as response
Your browser renders it on screen

HTTP = HyperText Transfer Protocol
- Stateless: each request is independent
- Request-Response: always follows this pattern
- Text-based: you can read HTTP messages
```

**Live Demo - Inspect Real Traffic:**

Open any website (example.com) and show:

1. **Open DevTools (F12) → Network tab**
2. **Refresh page (Ctrl+R)**
3. **Point out:**
   - First request to example.com
   - Show Request Headers (method: GET, URL, User-Agent, etc.)
   - Show Response Headers (Content-Type, Content-Length, etc.)
   - Show response body (HTML code)
4. **Show cascade of requests:**
   - HTML document loads
   - HTML references CSS file
   - HTML references JavaScript files
   - Browser requests images
   - Show timeline of requests

**Code Concepts to Teach:**

```
HTTP Request Components:
- METHOD: What action? (GET, POST, PUT, DELETE)
- URL: Where? (https://api.example.com/users/123)
- HEADERS: Additional info (Accept, Authorization, etc.)
- BODY: Data being sent (for POST/PUT)

HTTP Response Components:
- STATUS CODE: Success/failure (200, 404, 500, etc.)
- HEADERS: Response info (Content-Type, Set-Cookie, etc.)
- BODY: Data returned (HTML, JSON, etc.)
```

**10:45 - 11:00 | BREAK (15 min)**

**11:00 - 12:00 | URLs, DNS & HTTP Methods (60 min)**

*Teaching Strategy:* Structure mapping

**URL Anatomy - Draw on Board:**

```
https://www.example.com:443/path/to/page?query=value#fragment

PROTOCOL: https://
- http:// = unencrypted
- https:// = encrypted (secure)

DOMAIN: www.example.com
- www = subdomain (optional)
- example = domain name
- com = top-level domain (TLD)

PORT: :443 (optional, defaults: 80 for http, 443 for https)

PATH: /path/to/page
- Hierarchy of resources
- Like folder structure

QUERY STRING: ?query=value&other=data
- Parameters passed to server
- Starts with ?
- Multiple parameters separated by &

FRAGMENT: #fragment
- Internal link on page
- Not sent to server
- Used for anchors
```

**Teaching HTTP Methods:**

```
GET - Retrieve data
- Safe: doesn't modify
- Idempotent: same result every time
- Example: browser requesting a web page
- Data in URL as query string

POST - Create data
- Modifies server
- Data in request body (hidden from URL)
- Example: submitting a form to create account

PUT - Update data (replace whole resource)
- Modifies server
- Data in request body
- Idempotent: replacing with same data = same result

PATCH - Update data (partial)
- Modifies server
- Update only specific fields
- Not idempotent

DELETE - Remove data
- Modifies server
- Safe: really shouldn't modify, but does
```

**DNS Explanation:**

```
Problem: Humans can't remember IP addresses (like 93.184.216.34)
Solution: Domain Name System

Process:
1. User types: example.com into browser
2. Browser asks: "What's the IP for example.com?"
3. DNS server responds: "93.184.216.34"
4. Browser connects to 93.184.216.34
5. Communication happens

DNS is like a phone book for the internet
```

**12:00 - 1:00 | LUNCH**

**1:00 - 2:15 | HTTP Status Codes & Headers (75 min)**

*Teaching Strategy:* Reference catalog building

**Status Codes - Create Poster/Reference:**

```
1xx - Information (rarely seen)
- 100 Continue

2xx - Success (what we want!)
- 200 OK: Request succeeded
- 201 Created: New resource created
- 204 No Content: Success but no body

3xx - Redirection (automatic, user doesn't notice)
- 301 Moved Permanently
- 302 Found (temporary redirect)
- 304 Not Modified (use cached version)

4xx - Client Error (user/browser's fault)
- 400 Bad Request: Malformed request
- 401 Unauthorized: Need authentication
- 403 Forbidden: Don't have permission
- 404 Not Found: Resource doesn't exist

5xx - Server Error (server's fault)
- 500 Internal Server Error: Generic failure
- 502 Bad Gateway: Server unreachable
- 503 Service Unavailable: Server overloaded
```

**Live Demo - Different Status Codes:**

```
In DevTools Network tab:

1. Normal page: 200
   - google.com → look at status

2. Redirect: 301/302
   - Type old-domain.com → see redirect to new domain

3. Not found: 404
   - google.com/this-doesnt-exist

4. See headers:
   - Click on any request
   - Show Request tab: what you sent
   - Show Response tab: what server sent back
   - Show Headers: metadata about request/response
```

**HTTP Headers Explanation:**

```
Common Request Headers:
- User-Agent: What browser made request
- Accept: What content types client wants
- Accept-Language: Preferred language
- Authorization: Authentication token
- Host: Domain being requested

Common Response Headers:
- Content-Type: What format is body (text/html, application/json, etc.)
- Content-Length: Size of response
- Set-Cookie: Browser should save this cookie
- Cache-Control: How long to cache response
- Access-Control-Allow-Origin: CORS policy
```

**2:15 - 2:30 | BREAK**

**2:30 - 3:45 | HTTP Exploration Activity (75 min)**

*Teaching Strategy:* Hands-on investigation

**Student Activities:**

1. **Network Tab Exploration:**
   - Open favorite website
   - Refresh and watch Network tab
   - Count number of requests
   - Find HTML document request
   - Find CSS file requests
   - Find JavaScript requests
   - Find image requests

2. **Status Code Hunt:**
   - Find a 200 status
   - Try to find a 404 (visit fake page)
   - Observe redirects (301/302)
   - Check status codes in DevTools

3. **Header Analysis:**
   - Open DevTools on any website
   - Click on main HTML document request
   - Go to "Headers" tab
   - Read Request Headers
   - Read Response Headers
   - Discuss what each means

4. **API Exploration (if time):**
   - Use Thunder Client or Postman
   - Make GET request to: https://api.github.com/users/github
   - Examine status code (should be 200)
   - Read headers
   - Observe JSON response

**3:45 - 4:00 | Wrap-up & Preview**

---

### TUESDAY: Semantic HTML5 & Accessibility (6.5 hours)

**Learning Goals:**
- Build semantic HTML structure
- Understand and implement accessibility
- Learn new HTML5 elements
- Practice proper form structure
- Test for accessibility

**9:00 - 10:45 | Semantic HTML5 & Web Standards (105 min)**

*Teaching Strategy:* Show before/after comparison

**The Problem with `<div>`:**

```html
<!-- Non-semantic (bad): browser doesn't know structure -->
<div>
  <div>My Site</div>
  <div>
    <div>Home</div>
    <div>About</div>
  </div>
  <div>
    <p>Article content</p>
  </div>
  <div>
    <p>Copyright 2025</p>
  </div>
</div>

<!-- Semantic (good): browser KNOWS structure -->
<header>
  <h1>My Site</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <p>Article content</p>
  </article>
</main>
<footer>
  <p>Copyright 2025</p>
</footer>
```

**Why Semantic HTML Matters:**

1. **Accessibility** - Screen readers understand page structure
2. **SEO** - Search engines understand what's important
3. **Maintainability** - Code is self-documenting
4. **Responsive Design** - Easier to style semantically
5. **Professional** - Expected in all modern web development

**HTML5 Semantic Elements - Teach Each One:**

```html
<!-- Page Structure Elements -->
<header>...</header>     <!-- Top of page, typically contains logo, nav -->
<nav>...</nav>           <!-- Navigation links -->
<main>...</main>         <!-- Main content (one per page) -->
<section>...</section>   <!-- Thematic grouping of content -->
<article>...</article>   <!-- Self-contained content (blog post, comment) -->
<aside>...</aside>       <!-- Sidebar or tangential content -->
<footer>...</footer>     <!-- Bottom of page, typically copyright, links -->

<!-- Content Elements -->
<figure>                 <!-- Container for illustration, diagram, photo -->
  <img src="..." alt="...">
  <figcaption>...</figcaption>  <!-- Caption for figure -->
</figure>

<time datetime="2025-03-17">March 17</time>  <!-- Dates/times -->
<mark>highlighted text</mark>   <!-- Mark important text -->
<details>                        <!-- Collapsible content -->
  <summary>Click to expand</summary>
  More information here
</details>
```

**Live Demo - Build Semantic Page:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
</head>
<body>
  <header>
    <h1>John Developer</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a developer...</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <article>
        <h3>Project Name</h3>
        <p>Description</p>
      </article>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 John Developer</p>
  </footer>
</body>
</html>
```

**10:45 - 11:00 | BREAK**

**11:00 - 12:00 | Accessibility Standards & ARIA (60 min)**

*Teaching Strategy:* Empathy-building with accessibility

**Start with Why:**

> "Imagine you're blind or have low vision. You use a screen reader. When a developer writes `<div class="button">Click Me</div>`, the screen reader says 'div'. Not helpful. When they write `<button>Click Me</button>`, the screen reader says 'button - Click Me'. Much better."

**WCAG Accessibility Levels:**

```
WCAG = Web Content Accessibility Guidelines

Level A: Basic accessibility
- Basic text alternatives
- Basic keyboard navigation
- Basic color contrast

Level AA: Enhanced accessibility (TARGET FOR THIS COURSE)
- Better alternatives
- Full keyboard support
- 4.5:1 color contrast for body text
- Captions for videos
- Error identification

Level AAA: Advanced accessibility
- Enhanced alternatives
- Advanced keyboard shortcuts
- 7:1 color contrast
- Sign language for videos
```

**Forms - Make Them Accessible:**

```html
<!-- Bad: label not connected -->
<label>Email</label>
<input type="email">

<!-- Good: label connected with for/id -->
<label for="email">Email</label>
<input id="email" type="email" required>

<!-- Better: feedback on errors -->
<label for="email">Email</label>
<input id="email" type="email" required aria-describedby="email-help">
<p id="email-help">Enter your email address to contact you</p>
```

**ARIA Attributes (when HTML isn't enough):**

```html
<!-- aria-label: Provide label when text isn't visible -->
<button aria-label="Close menu">✕</button>

<!-- aria-labelledby: Link to element that labels this -->
<h2 id="dialog-title">Confirm Delete</h2>
<div aria-labelledby="dialog-title">Are you sure?</div>

<!-- aria-describedby: Additional description -->
<input type="password" aria-describedby="pwd-hint">
<p id="pwd-hint">At least 8 characters, one number</p>

<!-- aria-hidden: Hide from screen readers (usually for decorative) -->
<span aria-hidden="true">→</span>

<!-- role: Override element purpose -->
<div role="button" tabindex="0">Custom Button</div>
```

**Keyboard Navigation:**

```
Essential:
- Tab: Move to next element
- Shift+Tab: Move to previous element
- Enter: Activate button/link
- Space: Activate button
- Arrow keys: Navigate within components

Always test:
- Can you use tab key to access all interactive elements?
- Can you see where focus is? (Focus outline)
- Can you activate buttons with keyboard?
```

**12:00 - 1:00 | LUNCH**

**1:00 - 2:15 | CSS Fundamentals & Box Model (75 min)**

*Teaching Strategy:* Visual demonstration

**CSS Review - Build Foundation:**

```css
/* Basic selectors */
p { color: blue; }              /* Element */
.highlight { background: yellow; } /* Class */
#main { width: 1000px; }        /* ID */
p.intro { color: red; }         /* Element + class */

/* Combinators */
ul li { margin: 5px; }          /* Descendant (any level) */
div > p { padding: 10px; }      /* Child (direct) */
h1 + p { margin-top: 0; }       /* Adjacent sibling */

/* Specificity (importance order, don't use !important) */
/* Element: 1 point */
/* Class: 10 points */
/* ID: 100 points */
/* Inline style: 1000 points */
```

**Box Model Deep Dive:**

```
Every element is a box:

    Margin (outside)
    ┌────────────────────┐
    │ Border             │
    │ ┌──────────────┐   │
    │ │  Padding     │   │
    │ │ ┌──────────┐ │   │
    │ │ │ Content  │ │   │
    │ │ └──────────┘ │   │
    │ └──────────────┘   │
    └────────────────────┘

margin: space OUTSIDE border
border: line around element
padding: space INSIDE border
content: actual content

Example:
<div class="box">Content</div>

.box {
  width: 300px;           /* Content width only! */
  padding: 20px;          /* Inside space: 340px wide now */
  border: 2px solid;      /* Adds 4px: 344px wide now */
  margin: 10px;           /* Outside space: doesn't add to size */
}

With box-sizing: border-box (recommended):
width: 300px includes padding and border
much easier to calculate layouts!
```

**Live Demo - Box Model Visualization:**

```html
<!-- Show in browser DevTools -->
<style>
  .demo {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
    background: lightblue;
  }
</style>

<!-- Open DevTools, inspect element -->
<!-- Shows box model diagram with measurements -->
```

**2:15 - 2:30 | BREAK**

**2:30 - 3:45 | Flexbox Introduction (75 min)**

*Teaching Strategy:* Progressive complexity with visual aids

**Flexbox is for One-Dimensional Layouts:**

```
Flexbox = layout items in ONE direction
- In a row (horizontal)
- In a column (vertical)
- With automatic wrapping

Perfect for:
- Navigation bars
- Card layouts
- Centering content
- Even distribution of items
```

**Flexbox Fundamentals - Teach Progressively:**

```css
/* Step 1: Create flex container */
.container {
  display: flex;  /* Enables flexbox */
}

/* Step 2: Direction - what direction? */
.row {
  display: flex;
  flex-direction: row;    /* Left to right (default) */
}

.column {
  display: flex;
  flex-direction: column; /* Top to bottom */
}

.wrap {
  display: flex;
  flex-wrap: wrap;  /* Wrap to next line if overflow */
}

/* Step 3: Alignment - distribute along main axis */
.justify {
  display: flex;
  justify-content: space-between;  /* Space items apart */
  justify-content: center;         /* Center items */
  justify-content: flex-start;     /* Items to left */
  justify-content: flex-end;       /* Items to right */
}

/* Step 4: Alignment - distribute along cross axis */
.align {
  display: flex;
  align-items: center;       /* Vertical center (for rows) */
  align-items: flex-start;   /* Top align */
  align-items: flex-end;     /* Bottom align */
}

/* Step 5: Gap - space between items */
.gap {
  display: flex;
  gap: 20px;  /* Space between each item */
}

/* Step 6: Individual item sizing */
.item {
  flex: 1;      /* Grow equal amount, shrink if needed */
  flex-grow: 1; /* How much to grow */
  flex-basis: 200px; /* Base width before growing */
}
```

**Live Demo - Flexbox Navigation Bar:**

```html
<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #333;
  }

  nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  nav a:hover {
    background: #555;
  }
</style>

<nav>
  <div>Logo</div>
  <div style="display: flex; gap: 1rem;">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
</nav>

Show in browser - very clean nav bar!
```

**Live Demo - Centering with Flexbox:**

```html
<style>
  .centered {
    display: flex;
    justify-content: center;    /* Horizontal center */
    align-items: center;        /* Vertical center */
    height: 300px;
    background: lightblue;
  }
</style>

<div class="centered">
  <p>Perfectly centered!</p>
</div>

Show this worked forever but was hard. Flexbox makes it trivial.
```

---

### WEDNESDAY: CSS Grid & Responsive Design (6.5 hours)

**Learning Goals:**
- Build two-dimensional layouts with Grid
- Understand media queries
- Implement mobile-first responsive design
- Use flexible units

**9:00 - 10:45 | CSS Grid Fundamentals (105 min)**

*Teaching Strategy:* Build up from simple to complex

**Why Grid Matters:**

> "Flexbox is for items in one line (nav bar, card row). Grid is for entire page layout (header, main, sidebar, footer). Different tool for different job."

**Grid Basics - Teach Progressively:**

```css
/* Step 1: Create grid container */
.container {
  display: grid;  /* Enables CSS Grid */
}

/* Step 2: Define columns */
.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Two equal columns */
}

.flexible {
  display: grid;
  grid-template-columns: 200px 1fr; /* Fixed sidebar, flexible main */
}

.many-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
}

/* Step 3: Define rows (usually auto) */
.with-rows {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px auto 50px; /* header, content, footer */
}

/* Step 4: Gap between items */
.gaps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;           /* Space between items */
  row-gap: 30px;       /* Different vertical space */
  column-gap: 10px;    /* Different horizontal space */
}

/* Step 5: Align items */
.aligned {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;   /* Horizontal alignment */
  align-items: center;     /* Vertical alignment */
}

/* Step 6: Span multiple cells */
.item-wide {
  grid-column: span 2;  /* Take up 2 columns */
}

.item-tall {
  grid-row: span 2;     /* Take up 2 rows */
}
```

**Units Explained:**

```
fr = Fraction unit (proportional space)
- 1fr = one fraction
- 2fr = two fractions (twice as wide)
- 1fr 2fr = first column 1/3, second 2/3

px = Pixels (fixed size)
- 200px = exactly 200 pixels

auto = Fill available space
- After fixed items, take remaining space

% = Percentage of parent
- 50% = half the parent width
```

**Live Demo - Page Layout with Grid:**

```html
<style>
  body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 40px;
    min-height: 100vh;
    gap: 0;
  }

  header {
    background: #333;
    grid-column: 1;
    grid-row: 1;
  }

  main {
    background: white;
    grid-column: 1;
    grid-row: 2;
  }

  footer {
    background: #333;
    grid-column: 1;
    grid-row: 3;
  }
</style>
```

**Show this creates perfect page structure!**

**10:45 - 11:00 | BREAK**

**11:00 - 12:00 | Responsive Design Principles (60 min)**

*Teaching Strategy:* Mobile-first demonstration

**Mobile-First Approach:**

```
Traditional (Desktop First - old way):
1. Design for 1920px desktop
2. Remove things for 768px tablet
3. Remove more for 320px phone
Problem: Often breaks, hard to scale down

Mobile First (modern way):
1. Design for 320px phone FIRST
2. Add features for 768px tablet
3. Add more for 1920px desktop
Better: Progressively enhance, always works
```

**Breakpoints - Industry Standard:**

```
320px:  Small phones (iPhone SE)
768px:  Tablets (iPad)
1024px: Small laptops
1440px: Large monitors
1920px: Very large monitors

Strategy:
- Write mobile styles first (base)
- Use media queries to add tablet/desktop styles
```

**Live Demo - Responsive Navigation:**

```html
<style>
  /* Mobile first - hidden by default */
  nav {
    display: none;
  }

  nav.active {
    display: flex;
    flex-direction: column;
  }

  /* Tablet and up - show navigation */
  @media (min-width: 768px) {
    nav {
      display: flex;
      flex-direction: row;
    }
  }

  /* Desktop - style for larger screens */
  @media (min-width: 1024px) {
    nav {
      justify-content: space-between;
      align-items: center;
    }
  }
</style>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

Open in browser, resize window, show breakpoints working
```

**Media Queries Explained:**

```css
/* Apply styles when condition is true */

@media (min-width: 768px) {
  /* These styles apply when viewport is 768px or wider */
}

@media (max-width: 767px) {
  /* These styles apply when viewport is 767px or narrower */
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* These styles apply ONLY for tablets */
}

@media (prefers-color-scheme: dark) {
  /* Respect user's dark mode preference */
}

@media (prefers-reduced-motion: reduce) {
  /* Respect user's motion preferences */
}
```

**Flexible Units (Not Pixels):**

```css
/* Pixels are fixed */
.fixed {
  width: 200px;  /* Always 200px, doesn't scale */
}

/* Relative to root font size (usually 16px) */
.rem-unit {
  width: 12.5rem;  /* 12.5 * 16 = 200px, but scales with user preference */
  font-size: 1.5rem;  /* 1.5 * 16 = 24px */
}

/* Relative to parent */
.em-unit {
  width: 50%;  /* Half of parent */
  padding: 1em;  /* 1 * parent font-size */
}

/* Relative to viewport */
.vw-unit {
  width: 50vw;  /* 50% of viewport width */
  height: 100vh;  /* 100% of viewport height */
}

/* Min/max functions */
.responsive {
  width: min(100%, 1200px);  /* Maximum 1200px, but scale down on small screens */
  font-size: clamp(1rem, 5vw, 3rem);  /* Scale between 1rem and 3rem */
}
```

**12:00 - 1:00 | LUNCH**

**1:00 - 2:15 | Package Management with npm (75 min)**

*Teaching Strategy:* Workflow demonstration

**npm Demystified:**

> "npm is like a store for code libraries. You tell npm what you need, and it downloads and installs them with all dependencies."

**Live Demo - Initialize Project:**

```bash
# Create new project folder
mkdir my-portfolio
cd my-portfolio

# Initialize npm (creates package.json)
npm init

# Answer questions:
# package name: (my-portfolio) 
# version: (1.0.0) 
# description: My professional portfolio
# entry point: (index.js) 
# test command: 
# git repository: 
# keywords: portfolio
# author: Your Name
# license: (ISC) MIT

# Result: package.json file created!
```

**Explain package.json:**

```json
{
  "name": "my-portfolio",
  "version": "1.0.0",
  "description": "My professional portfolio",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "keywords": ["portfolio"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "prettier": "^3.0.0"
  }
}
```

**Install Packages:**

```bash
# Install for production (runs in production)
npm install lodash

# Install for development only (doesn't run in production)
npm install --save-dev prettier

# Install all packages from package.json
npm install

# Update packages (careful - might break things)
npm update

# Remove package
npm uninstall lodash

# Show installed packages
npm list
```

**Semantic Versioning:**

```
Version format: MAJOR.MINOR.PATCH
Example: 4.18.2
- MAJOR: Breaking changes (incompatible)
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

In package.json:
"express": "4.18.2"   - Exact version
"express": "^4.18.2"  - Accept minor/patch updates (4.x.x)
"express": "~4.18.2"  - Accept only patch updates (4.18.x)
"express": "*"        - Any version (avoid!)
```

**Create Custom npm Scripts:**

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write ."
  }
}
```

**Run scripts:**
```bash
npm run dev      # Runs 'nodemon index.js'
npm start        # Special: runs 'start' script
npm test         # Special: runs 'test' script
```

**2:15 - 2:30 | BREAK**

**2:30 - 3:45 | Package Management with pip (75 min)**

*Teaching Strategy:* Parallel workflow comparison

**pip Demystified:**

> "pip is Python's version of npm. Similar concept: libraries stored in PyPI, install what you need."

**Live Demo - Virtual Environment:**

```bash
# Create virtual environment (isolated Python)
python3 -m venv venv

# Activate it
source venv/bin/activate  # Mac/Linux
# venv\Scripts\activate   # Windows

# You're now in virtual environment!
# Install packages only in this project

# Install packages
pip install flask
pip install requests

# Save dependencies
pip freeze > requirements.txt

# Later, recreate environment
pip install -r requirements.txt

# Deactivate when done
deactivate
```

**Why Virtual Environments Matter:**

```
Project A needs flask 2.0
Project B needs flask 3.0

Without venv: Conflicts! Can't have both
With venv: Each project has its own Python, no conflicts
```

**requirements.txt:**

```
flask==2.3.0
requests==2.31.0
python-dotenv==1.0.0
```

**Common pip Commands:**

```bash
pip list                  # Show installed packages
pip search flask          # Search for packages
pip install --upgrade pip # Update pip itself
pip show flask            # Details about package
pip uninstall flask       # Remove package
```

**2:30 - 3:45 | Build Project with npm & pip (75 min)**

*Teaching Strategy:* Hands-on setup

**Student Activities:**

1. **Create npm Project:**
   - Run `npm init`
   - Install a package like `lodash`
   - Create custom script in package.json
   - Run npm script

2. **Create Python Project:**
   - Create virtual environment
   - Install package with pip
   - Create requirements.txt
   - Show clean setup

3. **Understanding Dependencies:**
   - Install package A
   - Package A depends on package B
   - Package B automatically installed
   - npm/pip handle it!

---

### THURSDAY: Responsive Design Practice & Portfolio (6.5 hours)

**9:00 - 10:45 | Portfolio Planning Workshop (105 min)**

*Teaching Strategy:* Design planning before coding

Have students plan before building:

```
Portfolio Sections:
1. Header & Navigation
   - Logo/name
   - Navigation to sections

2. Hero Section
   - Large introduction
   - Call to action (projects button)

3. About Me
   - Who are you?
   - What's your focus?
   - Skills/experience

4. Projects Showcase
   - 3-5 best projects
   - Card layout
   - Link to each

5. Skills Section
   - Languages, tools, frameworks
   - Visual representation

6. Contact Section
   - Email link
   - Social links
   - Simple contact form

7. Footer
   - Copyright
   - Links
```

**10:45 - 11:00 | BREAK**

**11:00 - 12:00 | HTML Structure (60 min)**

Build semantic HTML skeleton first, no CSS yet.

**12:00 - 1:00 | LUNCH**

**1:00 - 2:15 | Responsive CSS (75 min)**

Add CSS with mobile-first approach.

**2:15 - 2:30 | BREAK**

**2:30 - 3:45 | Testing & Refinement (75 min)**

- Test on multiple screen sizes
- Check accessibility
- Fix issues

---

### FRIDAY: Git Workflow & Code Review (4 hours)

**9:00 - 10:30 | Feature Branches & Pull Requests (90 min)**

**Professional Git Workflow:**

```bash
# Create feature branch
git checkout -b feature/hero-section

# Make changes
# Commit frequently
git add .
git commit -m "Add hero section with CTA button"

# Push to GitHub
git push origin feature/hero-section

# On GitHub: Create Pull Request
# Write description of changes
# Link to any issues
# Request reviewers

# Wait for review
# Make improvements based on feedback
# Merge when approved
```

**9:00 - 11:00 | Peer Code Review (120 min)**

Students review 2 peer portfolios:

- Code quality
- Accessibility compliance
- Responsive design
- Semantic HTML
- CSS organization
- Professional appearance

**11:00-12:30 | Sprint Review & Deployment (90 min)**

Each student:
- Presents portfolio (5 minutes)
- Shows responsive design working
- Demonstrates Git workflow
- Discusses decisions made
- Answers questions

---

## Assignments & Deliverables

### Assignment 1: HTTP & Web Architecture (15 points)
**Due:** Tuesday end of day
- Diagram request-response cycle with 3 examples
- Explain 5 HTTP methods with real use cases
- Document 10 HTTP status codes with meanings
- Screenshot DevTools Network tab analysis
- Written explanation of DNS

### Assignment 2: Semantic HTML Website (25 points)
**Due:** Wednesday end of day
- Semantic HTML5 structure
- Proper heading hierarchy
- Accessibility features (alt text, ARIA where needed)
- Forms with proper labels
- Responsive meta tags
- Pass accessibility checker

### Assignment 3: Package Management Project (10 points)
**Due:** Wednesday
- npm project with package.json
- Installed and listed 3 packages
- Python venv with requirements.txt
- Written explanation of both workflows

### Main Assignment: Professional Portfolio Website v1.0 (50 points)
**Due:** Friday end of day

**Requirements (50 points total):**
1. **Semantic HTML5** (10 points)
   - Proper semantic elements
   - Correct heading hierarchy
   - Proper form structure

2. **Responsive CSS** (15 points)
   - Mobile-first design
   - Flexbox for components
   - Grid for layout (at least one section)
   - Media queries for at least 2 breakpoints
   - Works on phone, tablet, desktop

3. **Accessibility** (10 points)
   - Alt text on all images
   - ARIA labels where needed
   - Color contrast 4.5:1 minimum
   - Keyboard navigable
   - Pass WAVE or AXE accessibility check

4. **Professional Appearance** (10 points)
   - Consistent styling
   - Good use of white space
   - Professional color scheme
   - Clear typography
   - No broken links

5. **Git Workflow & Deployment** (5 points)
   - Feature branches for sections
   - Meaningful commit messages
   - Deployed to GitHub Pages
   - Clean repository

---

## Resource Materials

### Quick References
- [HTTP Status Codes Poster](#)
- [HTML Semantic Elements Cheat Sheet](#)
- [CSS Flexbox Visual Guide](#)
- [CSS Grid Visual Guide](#)
- [Responsive Design Breakpoints](#)
- [Accessibility Checklist](#)

### Online Resources
- **MDN Web Docs:** HTML, CSS, JavaScript documentation
- **CSS-Tricks:** Flexbox and Grid guides with interactive examples
- **WebAIM:** Web accessibility resources
- **Web.dev:** Google's modern web guide
- **Can I Use:** Browser support checker

### Tools Students Should Know
- **DevTools (F12):** Network inspection, accessibility testing
- **WAVE Browser Extension:** Accessibility checker
- **AXE DevTools:** Accessibility audit
- **Lighthouse:** Performance and accessibility audit
- **Responsive Design Checker:** Test breakpoints
- **Color Contrast Checker:** Verify contrast ratios
- **GitHub Pages:** Free hosting for portfolios

---

## Assessment Rubric

### Portfolio Website Rubric (100 points total)

#### Semantic HTML (20 points)
- **Novice (0-5):** Uses mostly `<div>` tags, no semantic structure
- **Developing (6-12):** Uses some semantic elements but inconsistently
- **Proficient (13-18):** Proper semantic structure, correct heading hierarchy
- **Advanced (19-20):** Perfect semantic structure, excellent accessibility foundation

#### Responsive Design (25 points)
- **Novice (0-8):** Not responsive, looks good on one screen size only
- **Developing (9-16):** Responsive but with issues, missing breakpoints
- **Proficient (17-22):** Mobile-first, 2+ breakpoints, mostly working
- **Advanced (23-25):** Excellent responsive design, smooth transitions, 3+ breakpoints

#### Accessibility (20 points)
- **Novice (0-7):** Missing alt text, poor color contrast, not keyboard accessible
- **Developing (8-13):** Has alt text but incomplete, some contrast issues
- **Proficient (14-18):** Good alt text, sufficient contrast, mostly keyboard accessible
- **Advanced (19-20):** Excellent accessibility, passes WAVE, tested with screen reader

#### Professional Design (20 points)
- **Novice (0-7):** Looks like a beginner project, inconsistent styling
- **Developing (8-13):** Decent appearance but needs refinement
- **Proficient (14-18):** Professional looking, consistent styling, good UX
- **Advanced (19-20):** Polished, excellent UX, stands out as portfolio quality

#### Git & Deployment (15 points)
- **Novice (0-5):** One giant commit, not deployed or broken deployment
- **Developing (6-9):** Multiple commits but unclear messages, deploy issues
- **Proficient (10-12):** Good commit messages, feature branches, clean deployment
- **Advanced (13-15):** Professional Git workflow, clear commits, clean repository

**Bonus Opportunities (+5 points each):**
- Use CSS animations
- Implement a contact form
- Add project filtering with CSS
- Use advanced Grid layout
- Custom domain setup

---

## Troubleshooting Guide

### HTTP & Networking
| Issue | Cause | Solution |
|-------|-------|----------|
| DevTools Network tab empty | Not opened before refresh | Open DevTools, then refresh page |
| Can't see response body | Wrong tab selected | Click on "Response" tab in DevTools |
| API returns 401 | Missing authentication | Check if API needs token/key |
| CORS error | Browser security | Must use HTTPS or same domain |
| DNS not resolving | Internet issue | Check network connection |

### HTML & Accessibility
| Issue | Cause | Solution |
|-------|-------|----------|
| Screen reader ignores elements | Missing semantic elements | Use proper `<button>`, `<nav>`, etc. |
| Form not working with keyboard | Missing labels | Add `<label for="id">` linked to input |
| Images not accessible | Missing alt text | Add meaningful alt text to all images |
| Color contrast fails | Poor color choice | Use contrast checker, aim for 4.5:1 |
| Keyboard trap | Focus can't escape | Add focusable elements, test with Tab |

### CSS & Responsive
| Issue | Cause | Solution |
|-------|-------|----------|
| Styles not applying | Wrong selector | Verify selector in DevTools |
| Media query not working | Wrong viewport meta tag | Add `<meta name="viewport" content="width=device-width">` |
| Flexbox not centering | Missing property | Add `justify-content: center` AND `align-items: center` |
| Grid items uneven | Width not specified | Set `grid-template-columns` explicitly |
| Responsive looks bad | Missing mobile view | Start with 320px design first |

### npm & pip
| Issue | Cause | Solution |
|-------|-------|----------|
| `npm: command not found` | npm not installed | Install Node.js from nodejs.org |
| `npm install` hangs | Network issue | Cancel and retry, or use npm cache clean |
| `pip: command not found` | Python not in PATH | Use `python3 -m pip install` instead |
| venv not activating | Wrong command | Check OS: `source venv/bin/activate` (Mac/Linux) or `venv\Scripts\activate` (Windows) |
| Package version conflict | Incompatible versions | Check npm/pip documentation for compatible versions |

### GitHub Pages
| Issue | Cause | Solution |
|-------|-------|----------|
| GitHub Pages not deploying | gh-pages branch missing | Create branch from master, push to gh-pages |
| Page shows 404 | Repository not public | Make repository public in GitHub settings |
| Custom domain not working | DNS not configured | Add CNAME file, update DNS settings |
| Deployment stuck | GitHub Actions error | Check Actions tab for error messages |
| Old content showing | Cache issue | Wait 1-2 minutes, hard refresh (Ctrl+Shift+R) |

---

## Teacher Tips

### Managing Time Effectively
- Monday: Concepts only, no coding (sets foundation)
- Tuesday: HTML coding (structure before styling)
- Wednesday: CSS and packages (after structure understood)
- Thursday: Portfolio building (synthesis)
- Friday: Review and presentations (celebration)

### Keeping Students Engaged
- Show real portfolio examples (great designers, developers)
- Celebrate responsive design working (very visual, motivating)
- Do peer reviews (students learn from each other)
- Deploy live (GitHub Pages deployment is motivating)
- Invite alumni to share their portfolios

### Common Misconceptions
1. "Accessibility is only for disabled users" → Everyone benefits (keyboard users, small screens, etc.)
2. "CSS is easier than HTML" → Structure matters more than styling
3. "Just use `<div>` everywhere" → Semantic HTML enables better CSS and is more maintainable
4. "Package managers are complicated" → They're actually simpler than manual installation

### Customization Notes
- If students know some HTML/CSS: Speed up Monday-Tuesday, spend more time on Grid/Responsive
- If students don't know HTML/CSS: Slow down, provide templates for portfolio structure
- For advanced students: Assign Sass, CSS animations, or complex Grid layouts
- For struggling students: Provide portfolio template, focus on responsiveness and accessibility
