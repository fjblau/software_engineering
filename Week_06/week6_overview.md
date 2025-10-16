# Week 6 Overview: "JavaScript for the Web"
## DOM Manipulation & Interactive Web Applications

**Duration: 30 hours**
**Dates: March 24-28, 2025**

---

## Week Overview

Week 6 brings JavaScript to the browser, teaching students to create interactive, dynamic web applications. Students learn the Document Object Model (DOM), event handling, form validation, and accessibility considerations for interactive elements.

### Key Focus Areas:
- The Document Object Model (DOM)
- Element selection and manipulation
- Event handling and event delegation
- Form handling and validation
- Accessibility for interactive elements
- Professional JavaScript patterns for the browser

### Week 6 Success Metrics:
- ✅ Students manipulate DOM elements with JavaScript
- ✅ Students handle user events effectively
- ✅ Students validate forms client-side
- ✅ Students implement keyboard accessibility
- ✅ Students build data-driven interfaces
- ✅ Students follow professional JavaScript patterns

---

## Daily Schedule

### Monday: JavaScript in the Browser - The DOM
**6.5 hours**
- What is the Document Object Model?
- Accessing the DOM
- Element selection (querySelector, querySelectorAll, getElementById)
- Creating and removing elements
- Modifying element properties
- Browser console and debugging

### Tuesday: Element Selection, Manipulation & Professional Patterns
**6.5 hours**
- DOM traversal (parent, children, siblings)
- Modifying content (innerHTML, textContent, innerText)
- Styling elements with JavaScript
- Class manipulation (classList.add/remove/toggle)
- Data attributes
- Professional DOM patterns and best practices

### Wednesday: Event Handling & Form Validation
**6.5 hours**
- Event listeners (click, submit, input, change)
- Event object and properties
- Event delegation
- Preventing default behavior
- Form validation techniques
- Regular expressions for validation

### Thursday: Accessibility & Keyboard Navigation
**6.5 hours**
- WCAG guidelines for interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Focus management
- Screen reader considerations
- ARIA live regions
- Creating accessible widgets

### Friday: Professional Project Work & Code Review
**4 hours**
- Build interactive dashboard
- Code review session
- Performance optimization
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 6, students will be able to:

1. **DOM Manipulation**
   - Select elements using various methods
   - Create and remove elements dynamically
   - Modify element content and attributes
   - Traverse the DOM tree

2. **Event Handling**
   - Attach event listeners
   - Handle user interactions
   - Use event delegation
   - Prevent default behaviors

3. **Forms**
   - Validate form input
   - Provide user feedback
   - Handle form submission
   - Use regular expressions

4. **Accessibility**
   - Implement keyboard navigation
   - Manage focus properly
   - Use ARIA attributes
   - Test with screen readers

5. **Professional Patterns**
   - Write modular JavaScript
   - Handle errors gracefully
   - Optimize performance
   - Document code effectively

---

## Key Concepts

### Document Object Model
- DOM tree structure
- Nodes and elements
- Live vs static collections
- DOM manipulation methods

### Element Selection
- querySelector / querySelectorAll
- getElementById / getElementsByClassName
- CSS selectors in JavaScript

### Event Handling
- Event types (click, input, submit, keydown, etc.)
- Event object
- Event delegation
- stopPropagation and preventDefault

### Form Validation
- Required fields
- Email validation
- Pattern matching
- Real-time feedback
- Error messages

### Accessibility
- Keyboard shortcuts
- Focus indicators
- ARIA roles
- Screen reader support
- Skip links

---

## Deliverables

### Weekly Assignment: Interactive Dashboard Project (100 points)

Build a data dashboard with dynamic content (choose one):
- **Weather Simulation Dashboard**
- **Task Tracker with Categories**
- **Personal Finance Tracker**

Requirements:

1. **Dynamic Content** (25 points)
   - Load data from JSON/CSV files (using Week 4 skills)
   - Display data dynamically
   - Update UI without page reload
   - Data visualization (charts or graphs using HTML/CSS)

2. **Form Handling** (20 points)
   - Input form to add new data
   - Client-side validation
   - Real-time feedback
   - Error messages
   - Success confirmation

3. **Interactivity** (20 points)
   - Filter data by criteria
   - Sort data by different fields
   - Search functionality
   - Delete/edit items
   - Toggle views

4. **User Feedback** (15 points)
   - Loading states
   - Error handling
   - Success messages
   - Empty states
   - Confirmation dialogs

5. **Accessibility** (10 points)
   - Keyboard navigation works
   - Focus management
   - ARIA labels where needed
   - Screen reader tested
   - Semantic HTML

6. **Performance & Professional Code** (10 points)
   - Fast load times
   - Efficient DOM manipulation
   - Professional error handling
   - Code comments
   - Clean structure

---

## Resources

### JavaScript & DOM
- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

### Events
- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Event Delegation](https://javascript.info/event-delegation)

### Forms
- [Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Regular Expressions](https://regex101.com/)

### Accessibility
- [WebAIM](https://webaim.org/)
- [A11Y Project](https://www.a11yproject.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Code Examples

### Element Selection and Manipulation
```javascript
// Select elements
const title = document.querySelector('h1');
const items = document.querySelectorAll('.item');
const container = document.getElementById('container');

// Modify content
title.textContent = 'Welcome!';
title.innerHTML = '<span>Welcome!</span>';

// Modify attributes
title.setAttribute('class', 'highlight');
title.classList.add('active');
title.classList.remove('inactive');
title.classList.toggle('visible');

// Create new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New content';
newDiv.className = 'box';
container.appendChild(newDiv);

// Remove elements
const oldElement = document.querySelector('.old');
oldElement.remove();
```

### Event Handling
```javascript
// Click event
const button = document.querySelector('#submit-btn');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event object:', event);
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    
    // Process form data
    handleFormSubmission(data);
});

// Input event for real-time validation
const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', function(event) {
    const email = event.target.value;
    validateEmail(email);
});
```

### Event Delegation
```javascript
// Instead of adding listener to each item
const list = document.querySelector('#task-list');

list.addEventListener('click', function(event) {
    // Check if clicked element is a button
    if (event.target.matches('.delete-btn')) {
        const taskItem = event.target.closest('.task-item');
        taskItem.remove();
    }
    
    if (event.target.matches('.complete-btn')) {
        const taskItem = event.target.closest('.task-item');
        taskItem.classList.toggle('completed');
    }
});
```

### Form Validation
```javascript
function validateForm(formData) {
    const errors = {};
    
    // Validate name
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Validate age
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18 || age > 120) {
        errors.age = 'Age must be between 18 and 120';
    }
    
    return errors;
}

// Display errors
function displayErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.remove());
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const input = document.querySelector(`[name="${field}"]`);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = errors[field];
        input.parentElement.appendChild(errorDiv);
        input.setAttribute('aria-invalid', 'true');
    });
}
```

### Loading Data from JSON
```javascript
async function loadTasks() {
    try {
        // Show loading state
        showLoading();
        
        const response = await fetch('tasks.json');
        if (!response.ok) {
            throw new Error('Failed to load tasks');
        }
        
        const tasks = await response.json();
        displayTasks(tasks);
        
    } catch (error) {
        showError('Failed to load tasks: ' + error.message);
    } finally {
        hideLoading();
    }
}

function displayTasks(tasks) {
    const container = document.querySelector('#tasks');
    container.innerHTML = ''; // Clear existing
    
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        container.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'task-item';
    div.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;
    return div;
}
```

### Keyboard Accessibility
```javascript
// Handle keyboard navigation
document.addEventListener('keydown', function(event) {
    // Escape key closes modal
    if (event.key === 'Escape') {
        closeModal();
    }
    
    // Enter key on custom button
    if (event.key === 'Enter' && event.target.matches('.custom-button')) {
        event.target.click();
    }
});

// Trap focus in modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(event) {
        if (event.key === 'Tab') {
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });
}
```

---

## Professional Patterns

### Module Pattern
```javascript
const TaskManager = (function() {
    // Private variables
    let tasks = [];
    
    // Private functions
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Public API
    return {
        addTask(task) {
            tasks.push(task);
            saveTasks();
        },
        
        getTasks() {
            return [...tasks]; // Return copy
        },
        
        deleteTask(id) {
            tasks = tasks.filter(t => t.id !== id);
            saveTasks();
        }
    };
})();
```

---

## Notes for Instructor

- Start with simple DOM manipulation before complex interactions
- Demonstrate browser DevTools extensively
- Show console.log() debugging techniques
- Live-code examples while explaining
- Emphasize event delegation benefits
- Show bad patterns and why they're bad
- Test accessibility with actual screen reader
- Demonstrate keyboard-only navigation
- Connect to Python concepts where applicable (event-driven programming)
- Discuss performance implications of DOM manipulation
- Show how to profile JavaScript performance
- Prepare for Flask backend integration next week

---

## Connection to Other Weeks

- **Week 2**: JavaScript fundamentals now in browser context
- **Week 4**: Load and display CSV/JSON data
- **Week 5**: Build on HTML/CSS foundation
- **Week 7**: Will send data to Python Flask backend
- **Week 11**: Will learn React (different approach to DOM)

This week transforms static websites into interactive applications, crucial skill for full-stack development.