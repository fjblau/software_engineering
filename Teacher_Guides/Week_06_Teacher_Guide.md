# Week 6 Teacher's Guide: "JavaScript for the Web"
## DOM Manipulation, Event Handling & Interactive Web Applications

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** March 24-28, 2025  
**Focus:** Document Object Model (DOM), Event Handling, Form Validation, Accessibility for Interactive Elements, Data-Driven Interfaces

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

Week 6 bridges static websites from Week 5 to **dynamic, interactive applications**. Students learn that JavaScript is the bridge between HTML (structure) and the user (interaction). The Document Object Model (DOM) becomes the central concept: it's how JavaScript "sees" and manipulates the page.

### Week 6 as Capability Expansion

> "Week 5 was like building a house. Week 6 is moving in and making it work: opening doors, turning on lights, responding to visitors."

This week emphasizes:
- **DOM as the interface** - JavaScript's way of accessing and changing HTML
- **Events as triggers** - Every user action (click, type, submit) is captured and handled
- **Form handling as a skill** - Collecting user input and validating it professionally
- **Accessibility for interactivity** - Interactive elements must work with keyboards and screen readers
- **Data-driven interfaces** - Content changes based on user actions, not just static HTML

### Week 6 Success Metrics

✅ Students select and modify DOM elements with confidence  
✅ Students attach event listeners and handle events correctly  
✅ Students validate forms with real-time feedback  
✅ Students implement keyboard navigation in custom components  
✅ Students build data-driven interfaces that respond to user input  
✅ Students test accessibility of interactive elements  
✅ Students write clean, maintainable event handling code  

### Key Teaching Points

- **DOM is a tree** - Visualize it as a family tree (parent, children, siblings)
- **Selection matters** - Choose the right elements with efficient selectors
- **Event handling is polling** - Listeners "wait" for events, then respond
- **Form validation is essential** - Validate early and often, give clear feedback
- **Keyboard accessibility is non-negotiable** - Interactive elements MUST work without a mouse
- **Accessibility is testable** - Use tools like axe DevTools to verify
- **Modular code wins** - Cache selectors, reuse functions, avoid repetition

---

## Learning Objectives

By the end of Week 6, students will be able to:

### DOM Fundamentals
- Explain the DOM as a tree structure (parent, child, sibling relationships)
- Select elements efficiently using querySelector, getElementById, getElementsByClassName
- Create new DOM elements and insert them into the page
- Remove elements from the page
- Traverse the DOM tree (parent, children, siblings)
- Understand the difference between nodes and elements

### DOM Manipulation
- Modify element content (textContent, innerHTML, innerText)
- Add and remove CSS classes dynamically
- Get and set HTML attributes (id, data-*, custom attributes)
- Modify inline styles (sparingly, prefer classes)
- Use dataset property to store and retrieve custom data
- Batch DOM changes for performance

### Event Handling
- Add event listeners with addEventListener
- Handle common events (click, input, change, submit, keydown, focus, blur)
- Access event object properties (target, currentTarget, type, key, code)
- Prevent default behavior with preventDefault
- Stop event propagation (bubbling) with stopPropagation
- Implement event delegation for dynamically added elements

### Form Handling & Validation
- Collect form data using FormData API
- Validate form inputs (required, email, patterns)
- Provide real-time validation feedback
- Show/hide error messages
- Handle form submission
- Prevent accidental double-submissions

### Accessibility for Interactive Elements
- Implement keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Manage focus programmatically
- Use ARIA attributes for interactive elements
- Test with keyboard only (no mouse)
- Test with screen reader
- Ensure custom components are accessible

### Professional Code Patterns
- Cache element references to avoid repeated queries
- Use event delegation for efficiency
- Write reusable event handler functions
- Organize code logically
- Comment complex event logic
- Handle errors gracefully

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Essential Actions:**
1. ✅ Create working DOM manipulation examples
2. ✅ Prepare DevTools console demonstrations
3. ✅ Test all event handling examples in browser
4. ✅ Create form validation examples (real-time feedback)
5. ✅ Set up accessibility testing tools (axe DevTools, NVDA)
6. ✅ Prepare keyboard navigation examples
7. ✅ Create project template for dashboard/todo app
8. ✅ Test all accessibility requirements

**Classroom Setup:**
- Ensure DevTools console is accessible (F12)
- Verify axe DevTools extension is installed
- Test screen reader (NVDA or VoiceOver)
- Prepare DOM diagram posters
- Have event reference guide printed or digital
- Test form validation examples on multiple browsers

### Student Pre-Requisites (Send Friday Before Week 6)

**MUST HAVE BEFORE MONDAY:**
- [ ] All Week 5 requirements (HTML, CSS, responsive design)
- [ ] Understanding of JS functions from Week 2
- [ ] Understanding of objects from Week 3
- [ ] Comfort opening DevTools console
- [ ] GitHub account and git basics
- [ ] npm installed and working

**Verification Commands (Send to Students):**
```bash
# Node/npm verification
node --version && npm --version

# Git verification  
git --version && git config user.name

# Browser DevTools test
# Open any website, press F12, go to Console tab
```

### Software & Tool Requirements

| Tool | Purpose | Version | Notes |
|------|---------|---------|-------|
| Browser | DevTools, testing | Latest | Chrome, Firefox, Safari |
| Node.js/npm | JavaScript runtime, package mgmt | 14+ | From Week 2 |
| VS Code | Editor | Latest | From Week 1 |
| Git/GitHub | Version control | Latest | From Week 1 |
| axe DevTools | Accessibility testing | Latest | Browser extension |
| NVDA or VoiceOver | Screen reader testing | Latest | Accessibility |
| DevTools | Console, DOM inspector | Built-in | F12 to open |

---

## Daily Schedule & Topics

### MONDAY: Document Object Model - Structure & Selection (6.5 hours)

**Learning Goals:**
- Understand DOM as a tree structure
- Select elements efficiently
- Modify element properties
- Understand the difference between reading and manipulating

**9:00 - 9:30 | Week 6 Overview & Bridge from Week 5 (30 min)**

Connect to Week 5:
- Week 5: Static websites (structure and styling)
- Week 6: Dynamic websites (behavior and interactivity)
- This week: JavaScript becomes the remote control for the page
- Show before/after: Static portfolio vs interactive portfolio

Explain this week's challenge:
> "In Week 5, users could only look. In Week 6, they can click buttons, fill forms, and see the page respond. You're making websites that talk back to users."

---

**9:30 - 10:45 | Understanding the DOM (75 min)**

*Teaching Strategy:* Concrete visualization with tree diagrams

**What is the DOM?**

```
The DOM (Document Object Model) is:
1. JavaScript's representation of the HTML page
2. A tree structure of nodes (like a family tree)
3. LIVE - changes in JavaScript appear on screen immediately
4. The bridge between HTML (structure) and JavaScript (behavior)

HTML is static text:
<div class="container">
  <h1>Welcome</h1>
  <button>Click me</button>
</div>

DOM is the live object that JavaScript can see and change:
{
  type: "div",
  class: "container",
  children: [
    { type: "h1", text: "Welcome" },
    { type: "button", text: "Click me" }
  ]
}
```

**DOM Tree Structure (Draw on Board):**

```
                    html
                    /  \
                 head    body
                  |     /    \
               title  div    script
                     / | \
                   h1 p button
```

Show parent-child relationships:
- `<body>` is parent of `<div>`
- `<h1>` and `<p>` are siblings (same parent)
- `<button>` is child of `<div>`

**Live Demo - DevTools Inspector:**

1. Open any website
2. Press F12 → Elements tab
3. Hover over elements → highlight on page
4. Click inspect icon, then click element on page
5. Show the HTML structure
6. Expand/collapse elements to see tree

**Common Element Types in DOM:**

```javascript
// Element nodes (most common, what we manipulate)
<div>, <p>, <button>, <input>, <form>, <h1>

// Text nodes (the words inside elements)
"Hello" is a text node inside <p>

// Attribute nodes (properties of elements)
class="active" is an attribute on <div>

// We mostly work with elements (node type 1)
```

---

**10:45 - 11:00 | BREAK (15 min)**

---

**11:00 - 12:00 | Selecting Elements (60 min)**

*Teaching Strategy:* Comparison of methods, when to use each

**Modern Selection Methods (Use These!):**

```javascript
// querySelector - BEST for modern code
// Returns first matching element
document.querySelector('#main')           // By ID
document.querySelector('.active')         // By class
document.querySelector('button')          // By tag
document.querySelector('nav > a')         // With selector
document.querySelector('[data-id="5"]')   // By attribute

// querySelectorAll - For multiple elements
// Returns NodeList (similar to array)
const buttons = document.querySelectorAll('button')
const active = document.querySelectorAll('.active')

// Loop through results
buttons.forEach(btn => {
  console.log(btn.textContent)
})
```

**Older Selection Methods (Still See in Code):**

```javascript
// Still work, but less flexible than querySelector

// By ID (returns element or null)
document.getElementById('main')

// By class (returns HTMLCollection, not array!)
document.getElementsByClassName('active')

// By tag name
document.getElementsByTagName('button')

// Problem: HTMLCollection acts weird, not a real array
// Solution: Use querySelector instead
```

**CSS Selectors Work! (All these are valid):**

```javascript
// Basic selectors
'div'                    // All div elements
'.active'               // Any element with class "active"
'#main'                 // Element with ID "main"

// Combinators (relationships)
'nav > a'              // Direct child: <a> inside <nav>
'div p'                // Descendant: <p> anywhere inside <div>
'h1 + p'               // Adjacent sibling: <p> right after <h1>

// Attribute selectors
'[type="email"]'       // Inputs with type="email"
'[data-id="5"]'        // Elements with data-id="5"
'[href*="example"]'    // Links with "example" in href

// Pseudo-selectors
'li:first-child'       // First <li> in parent
'input:checked'        // Checked inputs
'button:hover'         // On hover state
```

**Live Demo - Selection in Console:**

```javascript
// Open DevTools Console (F12)

// Try selecting the <body>
document.querySelector('body')
// Result: <body>...</body>

// Select all buttons
document.querySelectorAll('button')
// Result: NodeList(5) [button, button, ...]

// Select by attribute
document.querySelector('[type="submit"]')
// Result: <input type="submit">

// Store in variable for later
const title = document.querySelector('h1')
console.log(title)
```

Show how students can play with selectors in console - very interactive!

**Practice Activity:**

Have students:
1. Open any website (like github.com)
2. Open DevTools Console
3. Try selecting various elements:
   - All paragraphs
   - Element with ID "main"
   - All links in navigation
   - First button on page
4. Verify selections by logging to console

**12:00 - 1:00 | LUNCH**

---

**1:00 - 2:15 | Reading & Modifying Element Content (75 min)**

*Teaching Strategy:* Show problems with each method, explain why

**Three Ways to Change Text/HTML (Each Has a Use):**

```javascript
// 1. textContent - Plain text only (SAFEST)
const p = document.querySelector('p')
p.textContent = 'Hello World'    // Changes text
console.log(p.textContent)        // Reads text back

// Problem: HTML in string is shown as text, not rendered
const div = document.querySelector('div')
div.textContent = '<strong>Bold</strong>'  // Shows literal text
// Result: Shows "<strong>Bold</strong>" as text, not bold

// 2. innerHTML - Parses HTML (POWERFUL but CAREFUL!)
div.innerHTML = '<strong>Bold</strong>'  // Renders HTML!
// Result: Actually makes text bold

// But: Dangerous with user input!
// Never do this with user input:
const userInput = getUserInput()
div.innerHTML = userInput  // SECURITY RISK!

// Use textContent for user input instead:
div.textContent = userInput  // Safe, shows as text

// 3. innerText - Visible text (Rarely needed)
// Like textContent but respects CSS display
// Use textContent instead, more reliable
```

**Modifying Attributes:**

```javascript
const button = document.querySelector('button')

// Get attribute
button.getAttribute('class')          // 'submit-btn'

// Set attribute
button.setAttribute('data-id', '123') // Add custom data

// Remove attribute
button.removeAttribute('disabled')    // Remove disabled

// Check if has attribute
button.hasAttribute('disabled')       // true or false

// Common attributes
button.id = 'my-button'              // Direct access (special attributes)
button.className = 'btn primary'     // Rename: class → className
button.alt = 'Button image'
```

**Working with Data Attributes (Very Useful!):**

```html
<!-- In HTML, store custom data -->
<div class="product" data-id="42" data-price="19.99">
  <h3>Awesome Product</h3>
  <button>Add to Cart</button>
</div>
```

```javascript
// In JavaScript, access with .dataset
const product = document.querySelector('.product')

// Read custom data
console.log(product.dataset.id)      // "42"
console.log(product.dataset.price)   // "19.99"

// Modify custom data
product.dataset.quantity = "1"       // Add new data
product.dataset.id = "100"           // Change existing

// Remove data attribute
delete product.dataset.id            // Remove the attribute

// Use for: Storing IDs, storing state, configuration
```

**Live Demo - Changing Content:**

```html
<div id="demo">Original text</div>
<button id="change">Change it</button>
```

```javascript
const demo = document.querySelector('#demo')
const button = document.querySelector('#change')

button.addEventListener('click', () => {
  // Change the text
  demo.textContent = 'Changed! ' + new Date()
  
  // Change styling
  demo.style.color = 'blue'
  
  // Change custom data
  demo.dataset.updated = new Date()
})
```

Show this in browser - very visual!

---

**2:15 - 2:30 | BREAK**

---

**2:30 - 3:45 | Creating & Removing Elements (75 min)**

*Teaching Strategy:* Build something visible and dynamic

**Creating New Elements:**

```javascript
// Step 1: Create element in memory
const newParagraph = document.createElement('p')
newParagraph.textContent = 'I am new!'
newParagraph.className = 'new-text'

// Step 2: Add to page (doesn't show until this step!)
const container = document.querySelector('#container')
container.appendChild(newParagraph)  // Add as last child

// Now it appears on page!
```

**Different Ways to Add Elements:**

```javascript
const parent = document.querySelector('.container')
const newDiv = document.createElement('div')
newDiv.textContent = 'Hello'

// appendChild - Add at end
parent.appendChild(newDiv)

// insertBefore - Add before specific element
const firstChild = parent.firstElementChild
parent.insertBefore(newDiv, firstChild)  // Add at beginning

// after/before - Add relative to element
const target = document.querySelector('#target')
target.after(newDiv)   // Add after target
target.before(newDiv)  // Add before target

// prepend/append - More readable
parent.prepend(newDiv) // Add at beginning
parent.append(newDiv)  // Add at end
```

**Removing Elements:**

```javascript
const element = document.querySelector('.item')

// Simple removal
element.remove()       // Element gone!

// Or via parent
element.parentElement.removeChild(element)
```

**Live Demo - Building a Todo List:**

```html
<div id="list"></div>
<input id="taskInput" type="text" placeholder="Enter task">
<button id="addBtn">Add Task</button>
```

```javascript
const list = document.querySelector('#list')
const input = document.querySelector('#taskInput')
const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', () => {
  const taskText = input.value
  
  // Create new list item
  const li = document.createElement('li')
  li.textContent = taskText
  li.className = 'task'
  
  // Create delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    li.remove()  // Delete the task
  })
  
  // Add to list
  li.appendChild(deleteBtn)
  list.appendChild(li)
  
  // Clear input
  input.value = ''
})
```

Show this working - students see items appear and disappear!

---

### TUESDAY: DOM Traversal & Professional Patterns (6.5 hours)

**Learning Goals:**
- Navigate the DOM tree efficiently
- Understand parent, child, sibling relationships
- Write reusable, maintainable code
- Optimize for performance

**9:00 - 10:45 | DOM Traversal & Relationships (105 min)**

*Teaching Strategy:* Map it to family relationships (students get it!)

**The DOM is a Family Tree:**

```
      <html>           (ancestor)
       /  \
    <head> <body>     (brothers - siblings)
            /  |  \
         <div> <p> <footer>  (siblings)
         /  \
      <h1> <button>  (brothers - siblings)
```

**Navigating the Tree:**

```javascript
const element = document.querySelector('.product')

// Parents (going up)
element.parentElement         // Direct parent
element.parentElement.parentElement  // Grandparent
element.closest('.container') // First ancestor with this class

// Children (going down)
element.children              // All element children (NodeList)
element.firstElementChild     // First child element
element.lastElementChild      // Last child element
element.querySelectorAll('button')  // Descendants

// Siblings (same level)
element.previousElementSibling  // Previous brother/sister
element.nextElementSibling      // Next brother/sister
element.parentElement.children  // All siblings (including self)
```

**Live Demo - Exploring Family Tree:**

```html
<article class="post">
  <header>
    <h1>Article Title</h1>
    <span class="author">Jane</span>
  </header>
  <div class="content">
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </div>
  <footer>
    <button class="like">Like</button>
    <button class="share">Share</button>
  </footer>
</article>
```

```javascript
const post = document.querySelector('.post')

// Get the author from this post
const author = post.querySelector('.author')
console.log(author.textContent)  // "Jane"

// Get all paragraphs in this post
const paragraphs = post.querySelectorAll('p')
console.log(paragraphs.length)   // 2

// Get the Like button
const likeBtn = post.querySelector('.like')

// Get the next button (Share)
const shareBtn = likeBtn.nextElementSibling
console.log(shareBtn.textContent)  // "Share"

// Go up to article, then to next sibling
const nextArticle = post.nextElementSibling
```

This is much cleaner than selecting every element individually!

---

**10:45 - 11:00 | BREAK**

---

**11:00 - 12:00 | Best Practices & Performance (60 min)**

*Teaching Strategy:* Show bad code, then good code

**Problem 1: Selecting Same Element Many Times**

```javascript
// ❌ BAD - Searching 3 times
document.querySelector('button').textContent = 'Loading'
document.querySelector('button').disabled = true
document.querySelector('button').style.opacity = '0.5'

// ✅ GOOD - Store reference, use once
const button = document.querySelector('button')
button.textContent = 'Loading'
button.disabled = true
button.style.opacity = '0.5'
```

**Problem 2: Modifying DOM in Loops**

```javascript
// ❌ BAD - DOM modified 1000 times (slow!)
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li')
  li.textContent = `Item ${i}`
  list.appendChild(li)  // Each append causes repaint!
}

// ✅ GOOD - Create fragment, append once
const fragment = document.createDocumentFragment()
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li')
  li.textContent = `Item ${i}`
  fragment.appendChild(li)  // Append to fragment, not DOM
}
list.appendChild(fragment)  // One append!
```

**Problem 3: Using innerHTML for User Input**

```javascript
// ❌ DANGEROUS - User input in innerHTML (security risk!)
const userInput = getUserComment()  // Could be malicious
comment.innerHTML = userInput

// ✅ SAFE - User input as text content
comment.textContent = userInput
```

**Problem 4: Repetitive DOM Queries**

```javascript
// ❌ BAD - Find cart items 100 times
function updateTotal() {
  let total = 0
  for (let i = 0; i < 100; i++) {
    const item = document.querySelector(`[data-id="${i}"]`)  // Query each time!
    total += parseFloat(item.dataset.price)
  }
  return total
}

// ✅ GOOD - Find all once, then loop
function updateTotal() {
  const items = document.querySelectorAll('[data-id]')  // One query!
  let total = 0
  items.forEach(item => {
    total += parseFloat(item.dataset.price)
  })
  return total
}
```

**Performance Tips Summary:**

```javascript
// 1. Cache element references
const button = document.querySelector('button')

// 2. Batch DOM changes
const style = element.style
style.color = 'blue'
style.fontSize = '16px'

// 3. Use document fragments for multiple adds
const fragment = document.createDocumentFragment()

// 4. Delegate events (more on this tomorrow!)
parent.addEventListener('click', handleClick)

// 5. Minimize reflows (style changes cause repaints)
// Read all, then write all
const width = element.offsetWidth
element.style.width = width + 'px'
```

---

**12:00 - 1:00 | LUNCH**

---

**1:00 - 2:15 | Working with Classes & Styles (75 min)**

*Teaching Strategy:* Classes for behavior, styles for appearance

**Modifying CSS Classes (PREFERRED):**

```javascript
const button = document.querySelector('button')

// Add a class
button.classList.add('active')         // Adds class

// Remove a class
button.classList.remove('active')      // Removes class

// Toggle a class (on/off)
button.classList.toggle('active')      // Add if missing, remove if present

// Check if has class
if (button.classList.contains('active')) {
  console.log('Button is active')
}

// Replace class
button.classList.replace('btn-primary', 'btn-success')

// Add multiple classes at once
button.classList.add('active', 'focused', 'highlighted')
```

**Why Classes Are Better Than Direct Styles:**

```javascript
// ❌ AVOID - Direct styles
button.style.backgroundColor = '#007bff'
button.style.color = 'white'
button.style.padding = '10px 20px'
button.style.border = 'none'

// ✅ BETTER - Use CSS class
button.classList.add('btn-primary')

// In CSS:
/*
.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
}
*/
```

**Direct Styles When Necessary:**

```javascript
// Sometimes styles ARE dynamically calculated
const element = document.querySelector('.box')

// Get window width
const screenWidth = window.innerWidth

// Calculate size based on screen
const boxWidth = screenWidth > 768 ? '50%' : '100%'
element.style.width = boxWidth

// More common: use media queries instead!
```

**Modifying Styles Directly (When You Must):**

```javascript
// camelCase in JavaScript (not kebab-case)
element.style.backgroundColor = 'blue'   // Not background-color
element.style.borderRadius = '10px'      // Not border-radius
element.style.fontSize = '16px'          // Not font-size

// Get computed style
const color = window.getComputedStyle(element).color
```

---

**2:15 - 2:30 | BREAK**

---

**2:30 - 3:45 | Hands-On Practice: Build Dynamic Widget (75 min)**

Students build a toggle component:

```html
<div class="toggle-widget">
  <h2>Settings</h2>
  <button id="toggleBtn">Show Details</button>
  <div id="details" class="hidden">
    <p>Detailed information goes here</p>
    <p>This section toggles on/off</p>
  </div>
</div>

<style>
  .hidden {
    display: none;
  }
  
  .visible {
    display: block;
  }
  
  button.active {
    background: #007bff;
    color: white;
  }
</style>
```

```javascript
const button = document.querySelector('#toggleBtn')
const details = document.querySelector('#details')

button.addEventListener('click', () => {
  // Toggle visibility
  details.classList.toggle('hidden')
  
  // Update button
  if (details.classList.contains('hidden')) {
    button.textContent = 'Show Details'
    button.classList.remove('active')
  } else {
    button.textContent = 'Hide Details'
    button.classList.add('active')
  }
})
```

Students practice with variations:
- Change button color
- Add animation (CSS transition)
- Toggle multiple sections

---

### WEDNESDAY: Event Handling & Form Validation (6.5 hours)

**Learning Goals:**
- Add and handle events
- Access event object properties
- Validate form inputs
- Give real-time feedback to users

**9:00 - 10:45 | Event Listeners & Common Events (105 min)**

*Teaching Strategy:* Explain each event with real-world examples

**What Are Events?**

```
Events are things that happen in the browser:
- User clicks a button → click event
- User types in input → input event
- User submits form → submit event
- Page finishes loading → load event
- Window is resized → resize event

JavaScript listens for events and responds!
```

**The addEventListener Pattern:**

```javascript
const button = document.querySelector('button')

// Listen for event
button.addEventListener('click', handleClick)

// Define handler function
function handleClick(event) {
  console.log('Button was clicked!')
  console.log(event)  // The event object
}

// Or use arrow function
button.addEventListener('click', (event) => {
  console.log('Button clicked!')
})
```

**Common Events (With Examples):**

```javascript
// MOUSE EVENTS
element.addEventListener('click', () => {})       // Single click
element.addEventListener('dblclick', () => {})    // Double click
element.addEventListener('mouseenter', () => {})  // Mouse enters
element.addEventListener('mouseleave', () => {})  // Mouse leaves
element.addEventListener('mouseover', () => {})   // Mouse over (with bubbling)
element.addEventListener('mouseout', () => {})    // Mouse leaves (with bubbling)

// KEYBOARD EVENTS
input.addEventListener('keydown', (e) => {})      // Key pressed (before character)
input.addEventListener('keyup', (e) => {})        // Key released
input.addEventListener('keypress', (e) => {})     // Character typed (legacy)

// FORM EVENTS
form.addEventListener('submit', (e) => {})        // Form submitted
input.addEventListener('input', (e) => {})        // Input changed (every keystroke)
input.addEventListener('change', (e) => {})       // Input finished changing
input.addEventListener('focus', (e) => {})        // Input focused
input.addEventListener('blur', (e) => {})         // Input lost focus

// OTHER USEFUL EVENTS
window.addEventListener('load', () => {})         // Page loaded
window.addEventListener('resize', () => {})       // Window resized
element.addEventListener('scroll', () => {})      // Scrolled
```

**The Event Object (Very Useful!):**

```javascript
button.addEventListener('click', (event) => {
  // event.target - The element that was clicked
  console.log(event.target)  // <button>...
  
  // event.type - What type of event
  console.log(event.type)    // "click"
  
  // event.currentTarget - Element with listener
  console.log(event.currentTarget)  // Same as event.target usually
  
  // event.key - For keyboard events
  input.addEventListener('keydown', (e) => {
    console.log(e.key)  // "a", "Enter", "Escape", etc
    console.log(e.code) // Physical key: "KeyA", "Enter"
  })
  
  // event.preventDefault() - Stop default action
  link.addEventListener('click', (e) => {
    e.preventDefault()  // Don't follow link!
  })
  
  // event.stopPropagation() - Stop bubbling
  button.addEventListener('click', (e) => {
    e.stopPropagation()  // Don't bubble up to parent
  })
})
```

**Live Demo - Interactive Button:**

```html
<button id="demo">Click me!</button>
<p id="output"></p>
```

```javascript
const button = document.querySelector('#demo')
const output = document.querySelector('#output')

button.addEventListener('click', (event) => {
  output.textContent = `Clicked at ${new Date().toLocaleTimeString()}`
})

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = 'lightblue'
})

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = ''
})
```

Students can modify and see results immediately!

---

**10:45 - 11:00 | BREAK**

---

**11:00 - 12:00 | Event Delegation & Advanced Patterns (60 min)**

*Teaching Strategy:* Solve the "dynamically added elements" problem

**Problem: Dynamic Elements Aren't Captured**

```html
<div id="list"></div>
<button id="addBtn">Add item</button>
```

```javascript
// ❌ PROBLEM - Add listeners before elements exist
const items = document.querySelectorAll('.item')
items.forEach(item => {
  item.addEventListener('click', handleClick)  // No effect on new items!
})

// Later, add new item
const newItem = document.createElement('div')
newItem.className = 'item'
newItem.textContent = 'New item'
document.querySelector('#list').appendChild(newItem)
// New item has NO click listener!
```

**Solution: Event Delegation**

```javascript
// ✅ SOLUTION - Listen on parent, check target
const list = document.querySelector('#list')

list.addEventListener('click', (event) => {
  // Check if clicked element is an item
  if (event.target.classList.contains('item')) {
    console.log('Item clicked:', event.target)
    handleClick(event)
  }
})

// Now all items, including NEW ones, respond!
```

**Event Delegation Pattern:**

```javascript
// Parent listens, checks child
const parent = document.querySelector('.container')

parent.addEventListener('click', (event) => {
  // Useful method: matches()
  if (event.target.matches('button')) {
    handleButtonClick(event)
  }
  
  if (event.target.matches('a')) {
    handleLinkClick(event)
  }
})

// Can also use closest() to find parent
parent.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.delete-btn')
  if (deleteBtn) {
    deleteItem(deleteBtn)
  }
})
```

**Benefits of Event Delegation:**

```
1. New elements automatically work
2. Fewer event listeners (better performance)
3. Cleaner code
4. Perfect for lists, tables, dynamic content
```

---

**12:00 - 1:00 | LUNCH**

---

**1:00 - 2:15 | Form Handling & Real-Time Validation (75 min)**

*Teaching Strategy:* Build actual form users understand

**Understanding Form Events:**

```javascript
const form = document.querySelector('form')
const email = document.querySelector('input[type="email"]')

// form.submit - When form submitted
form.addEventListener('submit', (e) => {
  e.preventDefault()  // Stop page reload!
  
  // Now get the data
  const formData = new FormData(form)
  console.log(Object.fromEntries(formData))
})

// input - When field changes (real-time)
email.addEventListener('input', (e) => {
  console.log('User typing:', e.target.value)
})

// change - When field finished changing
email.addEventListener('change', (e) => {
  console.log('Field changed to:', e.target.value)
})

// focus - When field gets focus
email.addEventListener('focus', (e) => {
  console.log('Field focused')
})

// blur - When field loses focus
email.addEventListener('blur', (e) => {
  console.log('Field blurred (lost focus)')
})
```

**Collecting Form Data:**

```html
<form id="register">
  <input name="username" type="text">
  <input name="email" type="email">
  <select name="country">
    <option value="">Select...</option>
    <option value="us">USA</option>
    <option value="ca">Canada</option>
  </select>
  <checkbox name="agree"> I agree
  <button type="submit">Register</button>
</form>
```

```javascript
const form = document.querySelector('#register')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  // Method 1: FormData (modern, recommended)
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  console.log(data)
  // {
  //   username: 'john',
  //   email: 'john@example.com',
  //   country: 'us',
  //   agree: 'on'
  // }
  
  // Method 2: Manual collection
  const data = {
    username: document.querySelector('[name="username"]').value,
    email: document.querySelector('[name="email"]').value,
    country: document.querySelector('[name="country"]').value
  }
})
```

**Real-Time Validation with Feedback:**

```html
<form id="signup">
  <div class="form-group">
    <label for="email">Email:</label>
    <input id="email" name="email" type="email" required>
    <span class="error" id="emailError"></span>
  </div>
  
  <div class="form-group">
    <label for="password">Password:</label>
    <input id="password" name="password" type="password" required>
    <span class="error" id="passwordError"></span>
    <div class="strength" id="strength"></div>
  </div>
  
  <button type="submit" id="submitBtn">Sign Up</button>
</form>
```

```javascript
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const emailError = document.querySelector('#emailError')
const passwordError = document.querySelector('#passwordError')
const strengthBar = document.querySelector('#strength')
const form = document.querySelector('#signup')

// Validate email as user types
email.addEventListener('input', () => {
  const value = email.value
  
  // Check format
  const isValid = value.includes('@') && value.includes('.')
  
  if (!isValid && value) {
    emailError.textContent = 'Invalid email format'
    email.classList.add('error')
  } else {
    emailError.textContent = ''
    email.classList.remove('error')
  }
})

// Validate password strength
password.addEventListener('input', () => {
  const value = password.value
  let strength = 'weak'
  let color = 'red'
  
  if (value.length >= 8) strength = 'medium', color = 'orange'
  if (value.length >= 12 && /[A-Z]/.test(value)) strength = 'strong', color = 'green'
  
  strengthBar.textContent = strength
  strengthBar.style.backgroundColor = color
})

// Validate on submit
form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let isValid = true
  
  if (!email.value.includes('@')) {
    emailError.textContent = 'Email required'
    isValid = false
  }
  
  if (password.value.length < 8) {
    passwordError.textContent = 'Password must be 8+ characters'
    isValid = false
  }
  
  if (isValid) {
    console.log('Form valid, sending...')
    // Send to server
  }
})
```

---

**2:15 - 2:30 | BREAK**

---

**2:30 - 3:45 | Form Validation Practice (75 min)**

Students build contact form:

```html
<form id="contact">
  <input name="name" type="text" placeholder="Name" required>
  <input name="email" type="email" placeholder="Email" required>
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
  <div id="status"></div>
</form>
```

```javascript
const form = document.querySelector('#contact')
const status = document.querySelector('#status')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const name = form.name.value
  const email = form.email.value
  const message = form.message.value
  
  // Validate
  if (!name || !email || !message) {
    status.textContent = 'All fields required'
    status.style.color = 'red'
    return
  }
  
  // Simulate sending
  status.textContent = 'Sending...'
  status.style.color = 'blue'
  
  setTimeout(() => {
    status.textContent = 'Message sent!'
    status.style.color = 'green'
    form.reset()
  }, 1000)
})
```

---

### THURSDAY: Accessibility for Interactive Elements (6.5 hours)

**Learning Goals:**
- Implement keyboard navigation
- Use ARIA for custom components
- Test accessibility
- Ensure screen reader support

**9:00 - 10:45 | Keyboard Navigation (105 min)**

*Teaching Strategy:* "Test with keyboard only - do it right now"

**Why Keyboard Access Matters:**

```
- 15-20% of people use keyboard only (disabilities, injuries)
- Power users use keyboard for speed
- Mobile users appreciate keyboard alternatives
- It's often a legal requirement!
```

**Standard Keyboard Interactions:**

```javascript
// TAB - Move to next focusable element
// SHIFT+TAB - Move to previous focusable element

// ENTER - Activate button, submit form
button.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleClick()
  }
})

// SPACE - Toggle checkbox, activate button
checkbox.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    checkbox.checked = !checkbox.checked
  }
})

// ESCAPE - Close dialog, cancel action
dialog.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDialog()
  }
})

// ARROW KEYS - Navigate menus, sliders
menu.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    selectNextItem()
  }
  if (e.key === 'ArrowUp') {
    selectPreviousItem()
  }
})
```

**Making Elements Keyboard Accessible:**

```html
<!-- ❌ NOT accessible - div with click handler -->
<div class="button" onclick="doSomething()">
  Click me
</div>

<!-- ✅ ACCESSIBLE - proper button element -->
<button onclick="doSomething()">
  Click me
</button>
```

Why buttons work but divs don't:
- Button is focusable (Tab focuses it)
- Button responds to Enter and Space
- Screen readers announce "button"
- Browser handles keyboard automatically

**For Custom Components, Add tabindex:**

```html
<!-- tabindex="0" makes element focusable -->
<div class="tab" tabindex="0" role="tab">
  Tab 1
</div>

<!-- tabindex="-1" makes it not focusable (but can programmatically focus) -->
<div id="popup" tabindex="-1">
  Popup content
</div>
```

```javascript
// Focus programmatically
popup.focus()

// Test if element can receive focus
button.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    // Move focus to next button
    nextButton.focus()
  }
})
```

**Focus Management in Custom Widgets:**

```html
<div class="tabs">
  <button class="tab" data-tab="1">Tab 1</button>
  <button class="tab" data-tab="2">Tab 2</button>
  <button class="tab" data-tab="3">Tab 3</button>
</div>
<div class="tab-content">
  <div id="panel-1">Content 1</div>
  <div id="panel-2" hidden>Content 2</div>
  <div id="panel-3" hidden>Content 3</div>
</div>
```

```javascript
const tabs = document.querySelectorAll('.tab')
let currentTab = 0

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(index))
  
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      selectTab((index + 1) % tabs.length)
    }
    if (e.key === 'ArrowLeft') {
      selectTab((index - 1 + tabs.length) % tabs.length)
    }
  })
})

function selectTab(index) {
  // Hide all
  document.querySelectorAll('.tab-content > div').forEach(p => p.hidden = true)
  tabs.forEach(t => t.classList.remove('active'))
  
  // Show selected
  const panelId = `panel-${tabs[index].dataset.tab}`
  document.querySelector(`#${panelId}`).hidden = false
  tabs[index].classList.add('active')
  tabs[index].focus()  // Focus the selected tab
}
```

---

**10:45 - 11:00 | BREAK**

---

**11:00 - 12:00 | ARIA Attributes & Screen Readers (60 min)**

*Teaching Strategy:* Screen reader demo (show students how it sounds)

**ARIA = Accessible Rich Internet Applications**

ARIA attributes add accessibility info for screen readers:

```html
<!-- aria-label - Describe element if no visible text -->
<button aria-label="Close dialog">✕</button>

<!-- aria-labelledby - Reference element that labels this -->
<h2 id="dialog-title">Confirm Action</h2>
<div aria-labelledby="dialog-title">
  Do you want to proceed?
</div>

<!-- aria-describedby - Additional description -->
<input type="password" aria-describedby="pwd-hint">
<span id="pwd-hint">Must be 8+ characters</span>

<!-- aria-live - Announce dynamic changes -->
<div aria-live="polite" id="status">
  Loading...
</div>
<!-- When this div content changes, screen reader announces it -->

<!-- aria-pressed - Button that toggles state -->
<button aria-pressed="false">Mute</button>

<!-- aria-expanded - Element that expands/collapses -->
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
<div id="menu" hidden>
  Menu items...
</div>
```

**Live Demo - Accessible Toggle:**

```html
<button id="toggleBtn" aria-expanded="false" aria-controls="details">
  Show Details
</button>
<div id="details" hidden aria-live="polite">
  Detailed information
</div>
```

```javascript
const button = document.querySelector('#toggleBtn')
const details = document.querySelector('#details')

button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') === 'true'
  
  // Toggle state
  button.setAttribute('aria-expanded', !expanded)
  details.hidden = expanded
  button.textContent = expanded ? 'Show Details' : 'Hide Details'
  
  // Screen reader announces: "Details, expanded" or "Details, collapsed"
})
```

**Testing with Screen Reader:**

Mac users have VoiceOver built-in:
- Press Cmd+F5 to enable
- Use VO (Control+Option) to navigate
- Press VO+U for "rotor" (web elements)

Windows: Download NVDA (free, open-source)

Students should:
1. Enable screen reader
2. Use Tab to navigate
3. Listen for announcements
4. Try the interactive components

---

**12:00 - 1:00 | LUNCH**

---

**1:00 - 2:15 | Testing Accessibility (75 min)**

*Teaching Strategy:* Use tools and test with keyboard

**Automated Testing with axe DevTools:**

1. Open website
2. Click axe DevTools extension
3. "Scan this page"
4. See issues and fixes

**Manual Keyboard Testing Checklist:**

```
□ Open page
□ Press Tab - Does focus move visibly?
□ Can you reach all interactive elements?
□ Do buttons work with Enter?
□ Do checkboxes work with Space?
□ Can you close dialogs with Escape?
□ Are forms fully keyboard navigable?
□ Is focus visible (not hidden)?
```

**Manual Screen Reader Testing:**

```
□ Enable screen reader
□ Use Tab to navigate
□ Listen to headings ("rotor")
□ Check form labels announced correctly
□ Verify buttons announced as buttons
□ Test dynamic content announcements
□ Check link text is meaningful
```

Students practice testing the interactive form from Wednesday!

---

**2:15 - 2:30 | BREAK**

---

**2:30 - 3:45 | Build Accessible Interactive Component (75 min)**

Students build dropdown menu with full accessibility:

```html
<button id="menuBtn" aria-haspopup="true" aria-expanded="false">
  Menu
</button>
<ul id="menu" hidden role="menu">
  <li><a href="/home" role="menuitem">Home</a></li>
  <li><a href="/about" role="menuitem">About</a></li>
  <li><a href="/contact" role="menuitem">Contact</a></li>
</ul>
```

Requirements:
- Click to open/close
- Escape closes menu
- Arrow keys navigate
- Full keyboard accessibility
- Passes axe accessibility check

---

### FRIDAY: Project Completion & Code Review (4 hours)

**9:00 - 11:00 | Interactive Dashboard Completion (120 min)**

Students finish their main project:
- All interactive features working
- Accessibility compliance
- Error handling
- Clean code

**11:00 - 12:30 | Code Review & Presentations (90 min)**

Each student:
- Demo the dashboard (3 min)
- Show keyboard navigation (1 min)
- Code walkthrough - explain key features (2 min)
- Discuss accessibility implementation (1 min)
- Answer questions (1 min)

---

## Assignments & Deliverables

### Assignment 1: DOM Manipulation Practice (15 points)
**Due:** Tuesday end of day
- Select elements using querySelector
- Modify content, attributes, classes
- Create new elements dynamically
- Remove elements
- Store data in data attributes

### Assignment 2: Form Validation (20 points)
**Due:** Wednesday end of day
- Create form with email, password, name fields
- Real-time validation (as user types)
- Error message display
- Form submission handling
- Password strength indicator

### Assignment 3: Event Delegation (10 points)
**Due:** Thursday morning
- Create list that dynamically adds items
- Use event delegation for event handling
- Delete functionality
- Edit functionality
- All through event listeners

### Main Assignment: Interactive Dashboard (100 points)
**Due:** Friday end of day

**Requirements (100 points total):**

1. **Dynamic Content** (25 points)
   - DOM manipulation works correctly
   - Elements added/removed as expected
   - Content updates in real-time
   - No console errors

2. **Form Handling** (20 points)
   - Form collects data correctly
   - Real-time validation works
   - Error messages display/hide appropriately
   - Submit prevents page reload

3. **Event Handling** (20 points)
   - All interactive features work
   - Event delegation used appropriately
   - No unnecessary event listeners
   - Efficient code (selectors cached)

4. **Accessibility** (20 points)
   - Keyboard navigation works (Tab, Enter, Escape)
   - All interactive elements focusable
   - Focus visible (not hidden)
   - Semantic HTML used
   - ARIA labels where needed

5. **Professional Code** (10 points)
   - Clean, readable code
   - Comments on complex logic
   - No console errors or warnings
   - Follows naming conventions
   - Error handling implemented

6. **Testing** (5 points)
   - Tested with keyboard only
   - Tested with screen reader (if available)
   - Tested on multiple browsers
   - No accessibility violations (axe check)

---

## Resource Materials

### Quick References
- [DOM Manipulation Cheat Sheet](#)
- [Event Types Reference](#)
- [Form Validation Patterns](#)
- [ARIA Attributes Quick Reference](#)
- [Accessibility Testing Checklist](#)
- [Keyboard Events Reference](#)

### Online Resources
- **MDN DOM Documentation:** Complete reference
- **JavaScript.info:** DOM, Events, Forms sections
- **WebAIM:** Keyboard Accessibility Guide
- **A11Y Project:** Accessibility Checklist
- **WCAG 2.1:** Official accessibility guidelines

### Tools Students Should Know
- **DevTools Console (F12):** DOM inspection and JavaScript execution
- **DevTools Elements/Inspector:** DOM tree exploration
- **DevTools Debugger:** Step through code
- **axe DevTools:** Accessibility checker (browser extension)
- **WAVE Extension:** Alternative accessibility checker
- **NVDA or VoiceOver:** Screen reader testing

---

## Assessment Rubric

### Interactive Dashboard Rubric (100 points total)

#### DOM Manipulation (15 points)
- **Novice (0-5):** Selectors don't work, content doesn't update
- **Developing (6-10):** Basic DOM manipulation works, but inefficient or errors
- **Proficient (11-13):** DOM manipulation works smoothly, mostly efficient
- **Advanced (14-15):** Excellent DOM handling, optimized selectors, clean code

#### Form Handling & Validation (15 points)
- **Novice (0-5):** Form doesn't validate, errors not displayed
- **Developing (6-10):** Basic validation works, missing features or bugs
- **Proficient (11-13):** Validation works well, user feedback clear
- **Advanced (14-15):** Real-time validation, excellent error handling, UX polish

#### Event Handling (15 points)
- **Novice (0-5):** Events don't work or cause errors
- **Developing (6-10):** Events work but inefficient, repetitive listeners
- **Proficient (11-13):** Events work well, mostly uses event delegation
- **Advanced (14-15):** Excellent event handling, efficient delegation, clean code

#### Keyboard Accessibility (15 points)
- **Novice (0-5):** Not keyboard accessible, can't navigate with Tab
- **Developing (6-10):** Partial keyboard access, some elements unreachable
- **Proficient (11-13):** Full keyboard navigation works, focus visible
- **Advanced (14-15):** Excellent keyboard access, focus management perfect, ARIA used well

#### Code Quality (20 points)
- **Novice (0-7):** Messy code, console errors, hard to read
- **Developing (8-13):** Readable code, minor errors, some optimization needed
- **Proficient (14-18):** Clean code, no errors, good organization
- **Advanced (19-20):** Excellent code quality, well-commented, error handling, professional

#### Git & Deployment (10 points)
- **Novice (0-3):** No commits or one giant commit
- **Developing (4-6):** Multiple commits, unclear messages
- **Proficient (7-8):** Good commits, clear messages, deployed
- **Advanced (9-10):** Professional Git history, deployed, clean repository

**Bonus Opportunities (+5 points each):**
- Add animations/transitions
- Implement search/filter feature
- Add local storage persistence
- Build custom accessible component
- Add unit tests for functions

---

## Troubleshooting Guide

### DOM Selection Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| querySelector returns null | Element doesn't exist or wrong selector | Check selector in DevTools, verify element exists |
| Selected element works, but new elements don't | Elements haven't been created yet | Use event delegation instead |
| Selector too complex | Selector targets too specifically | Simplify selector, add classes if needed |
| Getting HTMLCollection not NodeList | Used getElementsBy* instead of querySelect* | Use document.querySelectorAll() instead |

### Content Modification Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| HTML not rendering | Using textContent instead of innerHTML | Use innerHTML for HTML, textContent for text |
| Security warning about innerHTML | User input in innerHTML | Use textContent for user input, or sanitize |
| Changes don't appear on page | DOM modified but not connected to document | Verify element is appended to document |
| Old content still visible | Element hidden with CSS | Check if display:none or visibility:hidden |

### Event Handling Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| Event listener not firing | Attached to wrong element or wrong event | Verify selector finds element, try in console |
| Event fires multiple times | Multiple listeners attached | Check if addEventListener called in loop |
| Form submits and page reloads | Missing preventDefault() | Add e.preventDefault() in submit handler |
| Keyboard shortcut conflicts with browser | Browser has default key binding | Check console for conflicts, use different key |

### Form Validation Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| Form submits invalid data | Validation not working or not run | Check validation runs before submit, test logic |
| Validation runs but doesn't show error | Error element hidden by CSS | Verify error element display/visibility |
| Validation too strict | Regex or requirements wrong | Test validation logic separately |
| User can't bypass validation | Good! Validation too lenient | Add more validation rules if needed |

### Accessibility Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| Can't reach element with Tab | Element not focusable | Add tabindex="0" if needed, use semantic elements |
| Focus not visible | Focus styles missing | Add :focus-visible CSS styles |
| Screen reader doesn't announce element | Missing aria-label or semantic element | Add aria-label or use <button> instead of <div> |
| Keyboard shortcuts conflict | Multiple handlers on same key | Check event handling, use e.stopPropagation() if needed |
| Keyboard handler interferes with form | Handler prevents default on Enter | Use e.key check to only trigger on specific keys |

### Performance Issues
| Issue | Cause | Solution |
|-------|-------|----------|
| Page slow after adding many elements | Creating/appending many times | Use document fragment to batch additions |
| Event listener slow with many elements | Listener on each element | Use event delegation on parent |
| Styles not updating | CSS not loaded yet | Check CSS file loads, add class instead of inline |
| Script runs before HTML loads | Script before elements | Move script to end of body or use load event |

---

## Teacher Tips

### Managing Time Effectively
- **Monday:** Focus on DOM concepts (selection, traversal, tree structure)
- **Tuesday:** Practice selecting and modifying (lots of console work)
- **Wednesday:** Event handling (students love making things interactive)
- **Thursday:** Accessibility (often overlooked, essential)
- **Friday:** Project completion and celebration

### Keeping Students Engaged
- Show real-world examples (interactive sites they use)
- Let them build immediately (fast feedback loop)
- Celebrate working code (visually obvious when it works!)
- Involve peer code review (they learn from each other)
- Challenge advanced students with complexity

### Common Misconceptions
1. **"DOM = HTML"** → DOM is the live, changeable representation of HTML
2. **"I need to select every element"** → Event delegation means fewer selectors
3. **"JavaScript slows down the page"** → Badly written JavaScript does; efficient code is fast
4. **"Accessibility is hard"** → Semantic HTML + testing = straightforward
5. **"Forms are just HTML"** → JavaScript validation provides user experience

### Customization Notes
- **For advanced students:** Assign event delegation patterns, complex components, performance optimization
- **For struggling students:** Provide component templates, simplify form validation, focus on basics
- **For speed learners:** Add framework concepts (React hooks are like event handlers), add more complex projects
- **For struggling groups:** Pre-select elements in HTML with IDs, provide partial event handling code

### Encouraging Accessibility Testing
- Make it a game: "Can you use this with eyes closed?"
- Test your own code regularly
- Show how accessibility helps everyone (even on mobile!)
- Celebrate accessible code in code reviews
- Use tools to make testing easy (axe DevTools, NVDA)