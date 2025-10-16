/**
 * Week 7: Python for the Web - Frontend JavaScript Integration
 * Full-stack development: Connecting JavaScript frontend to Python Flask backend
 */

// ============================================================================
// 1. FETCH API BASICS - Making HTTP Requests
// ============================================================================

// Simple GET request
async function fetchTasks() {
    try {
        const response = await fetch('http://localhost:5000/api/tasks');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const tasks = await response.json();
        console.log('Tasks:', tasks);
        return tasks;
        
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

// GET with query parameters
async function fetchTasksByStatus(status) {
    try {
        const url = new URL('http://localhost:5000/api/tasks');
        url.searchParams.append('status', status); // 'pending' or 'completed'
        
        const response = await fetch(url);
        const tasks = await response.json();
        return tasks;
    } catch (error) {
        console.error('Error:', error);
    }
}

// GET specific resource
async function fetchTaskById(taskId) {
    try {
        const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`);
        
        if (response.status === 404) {
            console.log('Task not found');
            return null;
        }
        
        const task = await response.json();
        return task;
    } catch (error) {
        console.error('Error fetching task:', error);
    }
}


// ============================================================================
// 2. POST REQUESTS - Sending Data to Server
// ============================================================================

// Simple POST request
async function createTask(taskTitle) {
    try {
        const response = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: taskTitle,
                completed: false
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const newTask = await response.json();
        console.log('Task created:', newTask);
        return newTask;
        
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

// POST with validation
async function createTaskWithValidation(taskData) {
    try {
        // Validate client-side first
        if (!taskData.title || taskData.title.trim().length === 0) {
            throw new Error('Task title is required');
        }
        
        if (taskData.title.length > 500) {
            throw new Error('Task title is too long (max 500 characters)');
        }
        
        const response = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                title: taskData.title,
                description: taskData.description || '',
                priority: taskData.priority || 'medium',
                due_date: taskData.due_date || null
            })
        });
        
        // Handle different response statuses
        if (response.status === 201) {
            const newTask = await response.json();
            return { success: true, data: newTask };
        } else if (response.status === 400) {
            const error = await response.json();
            return { success: false, error: error.error };
        } else if (response.status === 422) {
            const error = await response.json();
            return { success: false, validationErrors: error.errors };
        } else {
            throw new Error(`Unexpected status: ${response.status}`);
        }
        
    } catch (error) {
        console.error('Error:', error.message);
        return { success: false, error: error.message };
    }
}


// ============================================================================
// 3. PUT REQUESTS - Updating Data on Server
// ============================================================================

// Update entire resource
async function updateTask(taskId, taskData) {
    try {
        const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        });
        
        if (response.status === 404) {
            throw new Error('Task not found');
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const updatedTask = await response.json();
        return updatedTask;
        
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
}

// Mark task as complete
async function completeTask(taskId) {
    return updateTask(taskId, { completed: true });
}

// Update partial task data
async function updateTaskPartial(taskId, updates) {
    try {
        const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
            method: 'PATCH', // or PUT, depending on API design
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates)
        });
        
        const updatedTask = await response.json();
        return updatedTask;
    } catch (error) {
        console.error('Error updating task:', error);
    }
}


// ============================================================================
// 4. DELETE REQUESTS - Removing Data from Server
// ============================================================================

// Delete a resource
async function deleteTask(taskId) {
    try {
        const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (response.status === 404) {
            throw new Error('Task not found');
        }
        
        if (response.status === 204) {
            // No content response
            return true;
        }
        
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}

// Delete with confirmation
async function deleteTaskWithConfirmation(taskId, taskTitle) {
    if (confirm(`Are you sure you want to delete "${taskTitle}"?`)) {
        try {
            await deleteTask(taskId);
            console.log('Task deleted');
            return true;
        } catch (error) {
            console.error('Delete failed:', error);
            return false;
        }
    }
    return false;
}


// ============================================================================
// 5. ERROR HANDLING - Proper error handling in API calls
// ============================================================================

async function safeApiCall(endpoint, options = {}) {
    try {
        const url = `http://localhost:5000${endpoint}`;
        
        // Set default headers
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers
        };
        
        const response = await fetch(url, {
            ...options,
            headers
        });
        
        // Check HTTP status
        if (!response.ok) {
            // Attempt to parse error message from response
            let errorMessage = `HTTP ${response.status}`;
            
            try {
                const errorData = await response.json();
                errorMessage = errorData.error || errorMessage;
            } catch (e) {
                // Response wasn't JSON
            }
            
            throw new Error(errorMessage);
        }
        
        // Parse response
        const data = await response.json();
        return { success: true, data };
        
    } catch (error) {
        // Handle different error types
        if (error instanceof TypeError) {
            // Network error
            return {
                success: false,
                error: 'Network error - check your connection',
                details: error.message
            };
        } else if (error instanceof SyntaxError) {
            // JSON parse error
            return {
                success: false,
                error: 'Invalid response from server',
                details: error.message
            };
        } else {
            // Other errors
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// Usage:
// const result = await safeApiCall('/api/tasks');
// if (result.success) {
//     console.log('Tasks:', result.data);
// } else {
//     console.error('Error:', result.error);
// }


// ============================================================================
// 6. HANDLING HTTP STATUS CODES
// ============================================================================

async function handleStatusCodes(endpoint) {
    try {
        const response = await fetch(`http://localhost:5000${endpoint}`);
        
        switch (response.status) {
            case 200:
                console.log('OK - Request successful');
                break;
            case 201:
                console.log('Created - Resource successfully created');
                break;
            case 204:
                console.log('No Content - Request successful but no content to return');
                break;
            case 400:
                console.log('Bad Request - Invalid request data');
                const badReqError = await response.json();
                console.error('Error:', badReqError.error);
                break;
            case 401:
                console.log('Unauthorized - Authentication required');
                break;
            case 403:
                console.log('Forbidden - Permission denied');
                break;
            case 404:
                console.log('Not Found - Resource does not exist');
                break;
            case 422:
                console.log('Unprocessable Entity - Validation failed');
                const validation = await response.json();
                console.error('Validation errors:', validation.errors);
                break;
            case 500:
                console.log('Internal Server Error');
                break;
            default:
                console.log(`Status: ${response.status}`);
        }
        
        return response;
        
    } catch (error) {
        console.error('Fetch error:', error);
    }
}


// ============================================================================
// 7. CORS - Cross-Origin Resource Sharing
// ============================================================================

/**
 * CORS Issues and Solutions:
 * 
 * If you get a CORS error:
 * 1. Make sure backend has CORS enabled (Flask-CORS)
 * 2. Check that credentials are being sent if needed
 * 3. Verify the origin is allowed by the server
 */

// Fetch with credentials (cookies, auth tokens)
async function fetchWithAuth(endpoint, token) {
    try {
        const response = await fetch(`http://localhost:5000${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            credentials: 'include' // Include cookies
        });
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Handling CORS preflight requests
// Preflight: Browser sends OPTIONS request automatically
// Your backend must respond to OPTIONS requests


// ============================================================================
// 8. FORM SUBMISSION - Sending form data to backend
// ============================================================================

function setupFormSubmission() {
    const form = document.querySelector('#task-form');
    
    form?.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Optional: Disable button while submitting
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        
        try {
            const result = await createTaskWithValidation(data);
            
            if (result.success) {
                console.log('Task created:', result.data);
                form.reset();
                // Update UI
                displayTasks();
            } else if (result.validationErrors) {
                displayValidationErrors(result.validationErrors);
            } else {
                showError(result.error);
            }
            
        } catch (error) {
            showError('Failed to create task');
            console.error(error);
        } finally {
            submitBtn.disabled = false;
        }
    });
}

// Display validation errors from server
function displayValidationErrors(errors) {
    const errorContainer = document.querySelector('#form-errors');
    errorContainer.innerHTML = '';
    
    Object.entries(errors).forEach(([field, message]) => {
        const errorEl = document.createElement('div');
        errorEl.className = 'error-message';
        errorEl.textContent = `${field}: ${message}`;
        errorContainer.appendChild(errorEl);
    });
}

// Show error to user
function showError(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = message;
    
    const container = document.querySelector('.container');
    container?.insertBefore(alertDiv, container.firstChild);
    
    setTimeout(() => alertDiv.remove(), 5000);
}


// ============================================================================
// 9. REAL-TIME UPDATES - Keeping UI in sync with server
// ============================================================================

// Fetch and display tasks
async function displayTasks() {
    try {
        const tasks = await fetchTasks();
        
        const taskList = document.querySelector('#task-list');
        taskList.innerHTML = '';
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.dataset.id = task.id;
            
            li.innerHTML = `
                <div class="task-content">
                    <input 
                        type="checkbox" 
                        class="task-checkbox"
                        ${task.completed ? 'checked' : ''}
                    >
                    <span class="task-text">${task.title}</span>
                </div>
                <button class="delete-btn">Delete</button>
            `;
            
            // Checkbox change event
            li.querySelector('.task-checkbox').addEventListener('change', async () => {
                await completeTask(task.id);
                displayTasks(); // Refresh list
            });
            
            // Delete button
            li.querySelector('.delete-btn').addEventListener('click', async () => {
                await deleteTaskWithConfirmation(task.id, task.title);
                displayTasks(); // Refresh list
            });
            
            taskList.appendChild(li);
        });
        
    } catch (error) {
        showError('Failed to load tasks');
        console.error(error);
    }
}

// Poll for updates (check server periodically)
function startPolling(interval = 5000) {
    setInterval(async () => {
        await displayTasks();
    }, interval);
}

// Debounce function to prevent too many requests
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Auto-save on input (with debounce)
const autoSaveTask = debounce(async (taskId, title) => {
    try {
        await updateTask(taskId, { title });
        console.log('Auto-saved');
    } catch (error) {
        console.error('Auto-save failed:', error);
    }
}, 1000);


// ============================================================================
// 10. ADVANCED PATTERNS - Batch operations, caching, etc.
// ============================================================================

// Batch delete multiple tasks
async function deleteMultipleTasks(taskIds) {
    try {
        const results = await Promise.all(
            taskIds.map(id => deleteTask(id))
        );
        console.log('Deleted tasks:', results);
        return results;
    } catch (error) {
        console.error('Error deleting tasks:', error);
    }
}

// Cache responses to reduce server load
class APICache {
    constructor(ttl = 60000) { // TTL in milliseconds
        this.cache = new Map();
        this.ttl = ttl;
    }
    
    set(key, value) {
        this.cache.set(key, {
            value,
            timestamp: Date.now()
        });
    }
    
    get(key) {
        const cached = this.cache.get(key);
        
        if (!cached) return null;
        
        if (Date.now() - cached.timestamp > this.ttl) {
            this.cache.delete(key);
            return null;
        }
        
        return cached.value;
    }
    
    clear() {
        this.cache.clear();
    }
}

// Usage:
// const cache = new APICache(60000); // 1 minute TTL
// const tasks = cache.get('tasks') || await fetchTasks();
// cache.set('tasks', tasks);


// ============================================================================
// 11. INITIALIZATION - Setup on page load
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Task App');
    
    // Setup form submission
    setupFormSubmission();
    
    // Load initial tasks
    displayTasks();
    
    // Optional: Start polling for updates
    // startPolling(5000); // Check every 5 seconds
});

// Add task button
document.querySelector('#add-task-btn')?.addEventListener('click', async () => {
    const title = prompt('Enter task title:');
    if (title) {
        const result = await createTaskWithValidation({ title });
        if (result.success) {
            displayTasks();
        } else {
            showError(result.error);
        }
    }
});


// ============================================================================
// 12. DEBUGGING TIPS
// ============================================================================

/**
 * Common Issues and Solutions:
 * 
 * 1. CORS Error: "No 'Access-Control-Allow-Origin' header"
 *    - Make sure Flask app has CORS enabled
 *    - Check flask_cors is installed: pip install flask-cors
 * 
 * 2. 404 Not Found
 *    - Verify endpoint URL is correct
 *    - Check backend route is defined
 * 
 * 3. 400 Bad Request
 *    - Check request body format
 *    - Verify required fields are included
 *    - Use browser DevTools Network tab to inspect request
 * 
 * 4. 422 Unprocessable Entity
 *    - Server received data but validation failed
 *    - Check server response for validation errors
 * 
 * 5. Network Timeout
 *    - Backend server may be down
 *    - Check if Flask server is running
 *    - Verify host and port are correct
 * 
 * Debugging Tips:
 * - Use console.log() to inspect data
 * - Use browser DevTools Network tab
 * - Check backend logs (Flask terminal output)\n * - Test endpoints with Postman or curl first\n */

// Console debugging helper\nfunction debugRequest(method, url, body = null) {\n    console.log(`${method} ${url}`);\n    if (body) console.log('Body:', body);\n}\n\n// Usage: debugRequest('POST', '/api/tasks', { title: 'Test' });\n