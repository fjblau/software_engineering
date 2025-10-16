/**
 * Week 6: JavaScript for the Web - DOM Manipulation & Interactive Web Applications
 * Comprehensive examples for DOM selection, manipulation, events, forms, and accessibility
 */

// ============================================================================
// 1. DOM SELECTION - Different ways to select elements
// ============================================================================

// querySelector - Select first matching element
const firstButton = document.querySelector('button');
const firstItem = document.querySelector('.item');
const mainContainer = document.querySelector('#main');

// querySelectorAll - Select all matching elements (returns NodeList)
const allButtons = document.querySelectorAll('button');
const allItems = document.querySelectorAll('.item');
const allInputs = document.querySelectorAll('input[type="text"]');

// Older methods still commonly used
const elementById = document.getElementById('header');
const elementsByClass = document.getElementsByClassName('container'); // HTMLCollection
const elementsByTag = document.getElementsByTagName('div');

// :scope for selecting direct children only
const directChildren = document.querySelectorAll(':scope > div');

// Advanced CSS selectors
const activeItems = document.querySelectorAll('li.active');
const disabledInputs = document.querySelectorAll('input:disabled');
const firstChild = document.querySelector('ul > li:first-child');
const evenItems = document.querySelectorAll('li:nth-child(even)');


// ============================================================================
// 2. DOM MANIPULATION - Creating, modifying, and removing elements
// ============================================================================

// Create new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.className = 'box';
newDiv.id = 'new-box';

// Modify text content (safe, doesn't parse HTML)
const title = document.querySelector('h1');
title.textContent = 'Updated Title';

// Modify HTML content (parses HTML, can be unsafe with user input)
const container = document.querySelector('.content');
container.innerHTML = '<p>New content</p><button>Click me</button>';

// Modify innerText (considers CSS, doesn't parse HTML)
const paragraph = document.querySelector('p');
paragraph.innerText = 'Visible text only';

// Add/modify attributes
newDiv.setAttribute('data-id', '123');
newDiv.setAttribute('aria-label', 'Important item');
newDiv.id = 'main-content';
newDiv.className = 'box active highlight';

// Get attributes
const dataId = newDiv.getAttribute('data-id');
const hasAriaLabel = newDiv.hasAttribute('aria-label');
const allAttributes = newDiv.attributes;

// Remove attributes
newDiv.removeAttribute('aria-label');

// Modify styles (inline)
newDiv.style.backgroundColor = '#3498db';
newDiv.style.padding = '20px';
newDiv.style.display = 'none';
newDiv.style.setProperty('--custom-color', 'blue'); // CSS variables

// Get computed styles
const computedStyle = window.getComputedStyle(newDiv);
const backgroundColor = computedStyle.backgroundColor;
const fontSize = computedStyle.fontSize;

// Add to DOM
const targetContainer = document.querySelector('#container');
targetContainer.appendChild(newDiv);

// Insert at specific position
const firstItem2 = document.querySelector('.item');
targetContainer.insertBefore(newDiv, firstItem2);

// Insert HTML string (safer alternative to innerHTML)
container.insertAdjacentHTML('beforeend', '<div>New item</div>');
container.insertAdjacentHTML('afterbegin', '<div>First item</div>');
container.insertAdjacentHTML('beforebegin', '<div>Before</div>');
container.insertAdjacentHTML('afterend', '<div>After</div>');

// Remove elements
newDiv.remove();
const oldElement = document.querySelector('.old');
if (oldElement) {
    oldElement.remove();
}

// Clone elements
const clonedElement = newDiv.cloneNode(true); // true = deep clone (includes children)
const shallowClone = newDiv.cloneNode(false); // false = shallow clone (no children)


// ============================================================================
// 3. DOM TRAVERSAL - Moving through the DOM tree
// ============================================================================

const element = document.querySelector('.item');

// Parent traversal
const parent = element.parentElement;
const parentContainer = element.parentElement.parentElement;
const parentNode = element.parentNode; // Can be any node type

// Parent chain until condition met
function getAncestorWithClass(el, className) {
    let current = el;
    while (current && !current.classList.contains(className)) {
        current = current.parentElement;
    }
    return current;
}

// Children traversal
const children = element.children; // HTMLCollection of element children
const firstChild2 = element.firstElementChild;
const lastChild = element.lastElementChild;

// Siblings traversal
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// Get all siblings
function getSiblings(el) {
    return Array.from(el.parentElement.children).filter(child => child !== el);
}

// Find closest ancestor matching selector
const ancestorForm = element.closest('form');
const ancestorLi = element.closest('li');

// Query within element
const buttonsInContainer = container.querySelectorAll('button');


// ============================================================================
// 4. CLASSLIST - Managing CSS classes
// ============================================================================

const item = document.querySelector('.item');

// Check if has class
const hasActiveClass = item.classList.contains('active');

// Add class
item.classList.add('active');
item.classList.add('highlight', 'important'); // Add multiple

// Remove class
item.classList.remove('inactive');
item.classList.remove('old', 'deprecated'); // Remove multiple

// Toggle class (add if not present, remove if present)
item.classList.toggle('selected');
item.classList.toggle('hidden', true); // Force add
item.classList.toggle('hidden', false); // Force remove

// Replace class
item.classList.replace('old-name', 'new-name');

// Get array of classes
const classList = Array.from(item.classList);


// ============================================================================
// 5. EVENT HANDLING - Listening to and handling user interactions
// ============================================================================

// Basic event listener
const button = document.querySelector('button');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event:', event);
    console.log('Target:', event.target);
});

// Arrow function alternative
button.addEventListener('click', (event) => {
    console.log('Click with arrow function');
});

// Multiple events
button.addEventListener('mouseenter', () => {
    console.log('Mouse entered button');
});

button.addEventListener('mouseleave', () => {
    console.log('Mouse left button');
});

// Common events
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
});

window.addEventListener('load', () => {
    console.log('All resources loaded (images, styles, etc)');
});

window.addEventListener('resize', () => {
    console.log('Window resized');
});

// Keyboard events
document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key, 'Code:', event.code);
    
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
    }
    
    if (event.key === 'Escape') {
        console.log('Escape key pressed');
    }
    
    // Check for modifiers
    if (event.ctrlKey || event.metaKey) {
        console.log('Ctrl/Cmd held');
    }
    
    if (event.shiftKey) {
        console.log('Shift held');
    }
});

// Input and change events
const input = document.querySelector('input');
if (input) {
    input.addEventListener('input', (event) => {
        console.log('Input value changed:', event.target.value);
    });
    
    input.addEventListener('change', (event) => {
        console.log('Input changed (on blur):', event.target.value);
    });
    
    input.addEventListener('focus', () => {
        console.log('Input focused');
    });
    
    input.addEventListener('blur', () => {
        console.log('Input blurred');
    });
}

// Form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        // Prevent page reload
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form submitted with data:', data);
        
        // Manual validation can happen here
        // Then send to server
    });
}

// Remove event listener
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);
// Later: button.removeEventListener('click', handleClick);


// ============================================================================
// 6. EVENT OBJECT - Understanding event properties and methods
// ============================================================================

document.addEventListener('click', (event) => {
    console.log('Event Properties:');
    console.log('  type:', event.type); // 'click'
    console.log('  target:', event.target); // Element that triggered event
    console.log('  currentTarget:', event.currentTarget); // Element listener is on
    console.log('  eventPhase:', event.eventPhase); // 1=capturing, 2=target, 3=bubbling
    
    console.log('  clientX:', event.clientX); // X position in viewport
    console.log('  clientY:', event.clientY);
    console.log('  pageX:', event.pageX); // X position in page (with scroll)
    console.log('  pageY:', event.pageY);
    console.log('  screenX:', event.screenX); // X position on screen
    console.log('  screenY:', event.screenY);
    
    // Check if modifier keys held
    console.log('  ctrlKey:', event.ctrlKey);
    console.log('  shiftKey:', event.shiftKey);
    console.log('  altKey:', event.altKey);
    
    // Mouse button (0=left, 1=middle, 2=right)
    console.log('  button:', event.button);
});


// ============================================================================
// 7. EVENT DELEGATION - Efficient event handling for dynamic content
// ============================================================================

// Instead of adding listener to each item, listen on parent
const taskList = document.querySelector('#task-list');

if (taskList) {
    taskList.addEventListener('click', (event) => {
        // Check what was clicked
        const deleteBtn = event.target.closest('.delete-btn');
        if (deleteBtn) {
            const taskItem = deleteBtn.closest('.task-item');
            console.log('Deleting task:', taskItem);
            taskItem.remove();
            return;
        }
        
        const completeBtn = event.target.closest('.complete-btn');
        if (completeBtn) {
            const taskItem = completeBtn.closest('.task-item');
            taskItem.classList.toggle('completed');
            return;
        }
        
        const editBtn = event.target.closest('.edit-btn');
        if (editBtn) {
            const taskItem = editBtn.closest('.task-item');
            console.log('Editing task:', taskItem);
            return;
        }
    });
}

// Event delegation works with dynamically added elements
function addNewTask(title) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span class="task-title">${title}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Edit</button>
    `;
    taskList?.appendChild(li);
    // Event handlers still work!
}


// ============================================================================
// 8. PREVENT DEFAULT & STOP PROPAGATION
// ============================================================================

// Prevent default browser behavior
const link = document.querySelector('a');
if (link) {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Don't navigate
        console.log('Prevented default link navigation');
    });
}

const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox) {
    checkbox.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent toggling
        console.log('Prevented checkbox toggle');
    });
}

// Stop event bubbling (event propagation)
const inner = document.querySelector('.inner');
const outer = document.querySelector('.outer');

if (inner && outer) {
    inner.addEventListener('click', (event) => {
        console.log('Inner clicked');
        event.stopPropagation(); // Don't bubble to outer
    });
    
    outer.addEventListener('click', () => {
        console.log('Outer clicked');
    });
}

// Stop immediate propagation (prevents other handlers on same element)
document.addEventListener('click', (event) => {
    console.log('Handler 1');
    event.stopImmediatePropagation();
});

document.addEventListener('click', (event) => {
    console.log('Handler 2 - Won\'t execute');
});


// ============================================================================
// 9. FORM VALIDATION - Client-side validation patterns
// ============================================================================

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validateForm(formData) {
    const errors = {};
    
    // Validate name
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Validate age
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18 || age > 120) {
        errors.age = 'Age must be between 18 and 120';
    }
    
    // Validate password strength
    if (!formData.password || formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    
    if (!/[A-Z]/.test(formData.password)) {
        errors.password = 'Password must contain at least one uppercase letter';
    }
    
    // Validate terms accepted
    if (!formData.terms) {
        errors.terms = 'You must accept the terms and conditions';
    }
    
    return errors;
}

function displayErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('input[aria-invalid]').forEach(el => {
        el.removeAttribute('aria-invalid');
    });
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const input = document.querySelector(`[name="${field}"]`);
        if (input) {
            input.setAttribute('aria-invalid', 'true');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.setAttribute('role', 'alert');
            errorDiv.textContent = errors[field];
            input.parentElement.appendChild(errorDiv);
        }
    });
}

// Real-time validation
const emailInput = document.querySelector('input[type="email"]');
if (emailInput) {
    emailInput.addEventListener('input', (event) => {
        const isValid = validateEmail(event.target.value);
        if (isValid) {
            event.target.classList.remove('invalid');
            event.target.classList.add('valid');
        } else {
            event.target.classList.remove('valid');
            event.target.classList.add('invalid');
        }
    });
}

// Form submission with validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        const errors = validateForm(data);
        
        if (Object.keys(errors).length === 0) {
            console.log('Form is valid, submitting:', data);
            // Submit to server
        } else {
            console.log('Form has errors:', errors);
            displayErrors(errors);
        }
    });
}


// ============================================================================
// 10. ACCESSIBILITY - Keyboard navigation and ARIA
// ============================================================================

// Handle keyboard navigation
document.addEventListener('keydown', (event) => {
    // Escape key closes modal
    if (event.key === 'Escape') {
        const modal = document.querySelector('.modal.open');
        if (modal) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            // Return focus to trigger button
            const triggerBtn = document.querySelector('[aria-expanded="true"]');
            if (triggerBtn) {
                triggerBtn.focus();
                triggerBtn.setAttribute('aria-expanded', 'false');
            }
        }
    }
    
    // Enter/Space on custom button
    if ((event.key === 'Enter' || event.key === ' ') && 
        event.target.matches('[role="button"]')) {
        event.preventDefault();
        event.target.click();
    }
});

// Trap focus in modal (keep focus within modal)
function trapFocus(modalElement) {
    const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modalElement.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                // Shift+Tab
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
}

// Manage focus for dynamic content
function openModal(modalId) {
    const modal = document.querySelector(modalId);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    trapFocus(modal);
    
    // Focus first focusable element
    const firstFocusable = modal.querySelector('button, input, [href]');
    if (firstFocusable) {
        firstFocusable.focus();
    }
}

// Skip navigation links
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (event) => {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        mainContent?.setAttribute('tabindex', '-1');
        mainContent?.focus();
    });
}


// ============================================================================
// 11. LOADING & DISPLAYING DATA DYNAMICALLY
// ============================================================================

async function loadTasksFromAPI() {
    try {
        // Show loading state
        const container = document.querySelector('#tasks-container');
        container.innerHTML = '<div class="loading">Loading tasks...</div>';
        container.setAttribute('aria-busy', 'true');
        
        // Fetch data
        const response = await fetch('/api/tasks');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const tasks = await response.json();
        
        // Display tasks
        displayTasks(tasks);
        container.setAttribute('aria-busy', 'false');
        
    } catch (error) {
        console.error('Error loading tasks:', error);
        const container = document.querySelector('#tasks-container');
        container.innerHTML = `<div class="error" role="alert">
            Failed to load tasks. Please try again.
        </div>`;
        container.setAttribute('aria-busy', 'false');
    }
}

function displayTasks(tasks) {
    const container = document.querySelector('#tasks-container');
    container.innerHTML = ''; // Clear
    
    if (tasks.length === 0) {
        container.innerHTML = '<p class="empty-state">No tasks yet. Add one to get started!</p>';
        return;
    }
    
    const ul = document.createElement('ul');
    ul.className = 'task-list';
    
    tasks.forEach(task => {
        const li = createTaskElement(task);
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('data-id', task.id);
    
    const completed = task.completed ? 'completed' : '';
    li.classList.add(completed);
    
    li.innerHTML = `
        <div class="task-content">
            <input 
                type="checkbox" 
                class="task-checkbox"
                ${task.completed ? 'checked' : ''}
                aria-label="Mark ${task.title} as complete"
            >
            <span class="task-text">${escapeHtml(task.title)}</span>
        </div>
        <div class="task-actions">
            <button class="delete-btn" aria-label="Delete task: ${task.title}">Delete</button>
            <button class="edit-btn" aria-label="Edit task: ${task.title}">Edit</button>
        </div>
    `;
    
    return li;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


// ============================================================================
// 12. PROFESSIONAL PATTERNS - Module pattern & encapsulation
// ============================================================================

// Module Pattern - Encapsulate functionality
const TaskManager = (function() {
    // Private variables
    let tasks = [];
    
    // Private function
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function loadTasks() {
        const stored = localStorage.getItem('tasks');
        tasks = stored ? JSON.parse(stored) : [];
    }
    
    // Public API
    return {
        init() {
            loadTasks();
            this.render();
        },
        
        addTask(title) {
            const task = {
                id: Date.now(),
                title: title,
                completed: false,
                createdAt: new Date()
            };
            tasks.push(task);
            saveTasks();
            return task;
        },
        
        getTasks() {
            return [...tasks]; // Return copy
        },
        
        completeTask(id) {
            const task = tasks.find(t => t.id === id);
            if (task) {
                task.completed = !task.completed;
                saveTasks();
            }
        },
        
        deleteTask(id) {
            tasks = tasks.filter(t => t.id !== id);
            saveTasks();
        },
        
        render() {
            displayTasks(this.getTasks());
        }
    };
})();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    TaskManager.init();
});


// ============================================================================
// 13. ERROR HANDLING - Try-catch for robust code
// ============================================================================

async function safeDataFetch(url) {
    try {
        console.log(`Fetching from: ${url}`);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Data loaded successfully');
        return data;
        
    } catch (error) {
        console.error('Fetch error:', error.message);
        
        if (error instanceof TypeError) {
            console.error('Network error - check URL and connection');
        } else if (error instanceof SyntaxError) {
            console.error('Invalid JSON response');
        }
        
        throw error; // Re-throw for caller to handle
    }
}

// Try-catch in event handlers
document.querySelector('#submit-btn')?.addEventListener('click', () => {
    try {
        const email = document.querySelector('#email').value;
        
        if (!email) {
            throw new Error('Email is required');
        }
        
        if (!validateEmail(email)) {
            throw new Error('Invalid email format');
        }
        
        console.log('Email valid:', email);
        
    } catch (error) {
        console.error('Validation error:', error.message);
        alert(`Error: ${error.message}`);
    }
});


// ============================================================================
// 14. PERFORMANCE OPTIMIZATION
// ============================================================================

// Debounce - Limit function calls during rapid events
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Use debounce for resize or search
window.addEventListener('resize', debounce(() => {
    console.log('Window resized - debounced');
}, 250));

const searchInput = document.querySelector('#search');
if (searchInput) {
    searchInput.addEventListener('input', debounce((event) => {
        console.log('Searching for:', event.target.value);
        // Call API or filter
    }, 300));
}

// Throttle - Execute function at most once per interval
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scrolled - throttled');
}, 1000));

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}


// ============================================================================
// 15. BEST PRACTICES SUMMARY
// ============================================================================

/**
 * Best Practices:
 * 
 * 1. Use querySelectorAll for multiple elements, querySelector for single
 * 2. Use textContent for text-only, innerHTML for HTML (sanitize user input!)
 * 3. Use addEventListener, not onclick attributes
 * 4. Use event delegation for dynamic content
 * 5. Always validate form input before sending to server
 * 6. Handle errors gracefully with try-catch
 * 7. Use data-* attributes for storing data
 * 8. Use CSS classes instead of inline styles
 * 9. Use semantic HTML with ARIA labels
 * 10. Test with keyboard and screen readers
 * 11. Use debounce/throttle for performance
 * 12. Cache DOM selections if used multiple times
 * 13. Minimize DOM operations in loops
 * 14. Use event delegation for better memory management
 * 15. Document your code with comments
 */