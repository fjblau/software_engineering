# Week 7 Teacher's Guide: "Python for the Web"
## Backend Basics with Flask - Building RESTful APIs

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** March 31 - April 4, 2025

---

## Table of Contents

1. [Overview](#overview)
2. [Learning Objectives](#learning-objectives)
3. [Pre-Class Setup Requirements](#pre-class-setup-requirements)
4. [Teaching Philosophy](#teaching-philosophy)
5. [Daily Schedule](#daily-schedule)
6. [Professional Patterns & Best Practices](#professional-patterns--best-practices)
7. [Student Activities & Assignments](#student-activities--assignments)
8. [Assessment Rubric](#assessment-rubric)
9. [Troubleshooting Guide](#troubleshooting-guide)
10. [Teacher Tips & Common Misconceptions](#teacher-tips--common-misconceptions)

---

## Overview

Week 7 introduces **backend development with Python and Flask**. Students transition from frontend-only development to full-stack applications, learning to build web servers, create RESTful APIs, handle HTTP requests, connect frontend JavaScript to backend Python, and persist data with SQLite.

This week is the critical bridge between frontend skills (Weeks 1-6) and advanced web development (Weeks 8+). Students finally see how their JavaScript forms talk to servers and how data persists beyond page refreshes.

### Key Teaching Points
- **Flask** = lightweight Python web framework that doesn't enforce patterns
- **REST API** = standard architectural style for frontend-backend communication  
- **HTTP methods** = GET (read), POST (create), PUT (update), DELETE (delete)
- **CORS** = required for frontend on different port/domain to call backend
- **SQLite** = serverless SQL database perfect for learning (no server setup needed)
- **Request/Response cycle** = fundamental pattern for all web communication
- **Status codes** = standard language for HTTP communication success/failure
- **JSON** = universal data format for modern APIs

### Success Metrics
✅ Students build Flask web servers and test them locally  
✅ Students design and implement RESTful API endpoints  
✅ Students connect their Week 6 frontend to backend  
✅ Students persist data across requests with SQLite  
✅ Students handle errors gracefully on both frontend and backend  
✅ Students deploy full-stack applications

### Positioning in Curriculum
- **Previous Weeks:** HTML, CSS, JavaScript (static and interactive UIs)
- **This Week:** Where UI talks to servers (backend basics)
- **Next Weeks:** Advanced patterns, async programming, production deployment

---

## Learning Objectives

### Flask Fundamentals
- **Installation & Setup:** Install Flask, create basic project structure, understand app context
- **Routing:** Create routes with decorators, understand URL routing patterns
- **Request Handling:** Parse GET/POST requests, access URL and query parameters
- **Response Handling:** Return JSON responses, set proper HTTP status codes
- **Debugging:** Use Flask debug mode, understand error messages, test endpoints

### RESTful API Design
- **Resource-Based URLs:** Design clean API endpoints following RESTful conventions
- **HTTP Methods:** Implement GET (retrieve), POST (create), PUT (update), DELETE (remove)
- **CRUD Operations:** Create, read, update, delete data through API
- **Status Codes:** Return 200, 201, 204, 400, 404, 500 appropriately
- **Documentation:** Write clear API docs with request/response examples

### Frontend-Backend Communication  
- **Fetch API:** Use async/await to call backend from JavaScript
- **CORS:** Understand cross-origin issues, enable flask-cors
- **Request Headers:** Set Content-Type: application/json
- **JSON Serialization:** Convert JavaScript objects to JSON and back
- **Error Handling:** Handle network errors and API error responses

### Data Persistence with SQLite
- **Database Design:** Create schemas, define tables, set up relationships
- **SQL Queries:** Write SELECT, INSERT, UPDATE, DELETE statements
- **Query Results:** Convert database rows to JSON, handle result sets
- **Transactions:** Understand commit/rollback, handle integrity errors
- **Data Validation:** Validate input before storing, prevent bad data

### Full-Stack Integration
- **Architecture:** Understand how frontend, backend, and database work together
- **Request Flow:** Trace data from UI click through backend to database and back
- **Error Propagation:** Handle errors at each layer, display to user
- **Testing:** Test complete workflows end-to-end

---

## Pre-Class Setup Requirements

### Teacher Preparation Checklist
- [ ] Install Python 3.9+ on teaching machine
- [ ] Install Flask and Flask-CORS: `pip install flask flask-cors`
- [ ] Install SQLite3 (usually included with Python)
- [ ] Have Postman or Thunder Client installed for API testing
- [ ] Test Flask development server runs properly
- [ ] Prepare demo Flask app and test it works
- [ ] Create sample database and verify queries work
- [ ] Test connecting frontend to backend with CORS
- [ ] Prepare student code templates/starter files
- [ ] Create example API documentation

### Student Prerequisites
- ✅ Proficiency with JavaScript (DOM manipulation, Fetch API)
- ✅ Understanding of HTML forms and form submission
- ✅ Comfort with command line (pip, python commands)
- ✅ Basic understanding of client-server architecture
- ✅ Completed Week 6 interactive dashboard project

### Software Requirements

| Tool | Version | Purpose | Installation |
|------|---------|---------|--------------|
| Python | 3.9+ | Backend runtime | `python --version` to verify |
| Flask | 2.0+ | Web framework | `pip install flask` |
| Flask-CORS | 3.0+ | Enable CORS | `pip install flask-cors` |
| SQLite3 | 3.0+ | Database | `sqlite3 --version` to verify |
| Postman | Latest | API testing | Download from postman.com |
| Git | Latest | Version control | For deployment |

### Verification Commands (Run Before Class)

```bash
# Verify Python
python --version  # Should be 3.9+

# Verify Flask installation
pip list | grep -i flask  # Should show flask and flask-cors

# Create test Flask app
cat > test_app.py << 'EOF'
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({'message': 'Flask works!'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
EOF

# Test it
python test_app.py
# Visit http://localhost:5000/api/test in browser
```

---

## Teaching Philosophy

### How to Explain Week 7 Concepts

**Backend Analogy:** "Think of Flask like a restaurant. JavaScript (frontend) is the customer placing an order. Flask is the server taking the order and kitchen. Database is the pantry storing ingredients. CORS is permission to serve customers from a different address."

**API as Contract:** "An API is a contract between frontend and backend. Frontend says 'I'll send you JSON with these fields' and 'I expect back JSON in this format.' Backend says 'I promise to respond with status 200 if successful.' Everyone follows the contract, things work smoothly."

**Database as Truth:** "Frontend data is temporary (lost on page refresh). Database is permanent truth. If data isn't in database, it doesn't really exist in your app."

**HTTP Status Codes as Language:** "Status codes are how backend talks to frontend without words. 200 = 'all good,' 201 = 'created it,' 400 = 'you sent bad data,' 404 = 'doesn't exist,' 500 = 'I messed up.' They're like traffic lights."

### Progressive Teaching Strategy

1. **Day 1 (Monday):** Build simple Flask app, understand routing
2. **Day 2 (Tuesday):** Build complete CRUD API (still in-memory, no database)
3. **Day 3 (Wednesday):** Connect JavaScript frontend to Flask backend
4. **Day 4 (Thursday):** Add database persistence, full-stack working
5. **Day 5 (Friday):** Polish, fix bugs, deploy, celebrate

---

## Daily Schedule

### MONDAY: Introduction to Flask & HTTP Basics (6.5 hours)

**9:00-10:45 | Flask Setup & Routing (105 min)**

**Teaching Strategy:** Start with what they know (JavaScript), show how Flask is similar (functions called by routes), then build visible working example.

**What is Flask - Conceptual Overview:**
Flask is a "microframework" - it provides the minimum you need (routing, request handling, responses) without forcing patterns. Think of it like building with Lego blocks - you pick what you need. Compare to Django which is pre-built (like a pre-made house).

**Installation & Project Setup:**

```bash
# Create project directory
mkdir week7_backend
cd week7_backend

# Create virtual environment (best practice)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install flask flask-cors

# Create app.py
```

**Complete Example - app.py:**

```python
from flask import Flask, jsonify, request

# Create Flask app
app = Flask(__name__)  # __name__ tells Flask where the app is

# First endpoint - responds to GET requests
@app.route('/api/hello', methods=['GET'])
def hello():
    """
    Simple GET endpoint
    URL: http://localhost:5000/api/hello
    Response: {"message": "Hello from Flask!"}
    """
    return jsonify({'message': 'Hello from Flask!'})

# Endpoint with URL parameter
@app.route('/api/greet/<name>', methods=['GET'])
def greet(name):
    """
    Greet someone by name
    URL: http://localhost:5000/api/greet/Alice
    Response: {"greeting": "Hello, Alice!"}
    """
    return jsonify({'greeting': f'Hello, {name}!'})

# Endpoint with query parameter
@app.route('/api/add', methods=['GET'])
def add():
    """
    Add two numbers from query params
    URL: http://localhost:5000/api/add?a=5&b=3
    Response: {"result": 8}
    """
    a = request.args.get('a', type=int, default=0)
    b = request.args.get('b', type=int, default=0)
    return jsonify({'result': a + b})

if __name__ == '__main__':
    # debug=True: Auto-reloads when code changes, shows errors clearly
    # port=5000: Server runs on http://localhost:5000
    app.run(debug=True, port=5000)
```

**Key Concepts Explained:**

- **@app.route():** Decorator that maps URLs to Python functions
- **methods=['GET']:** Specifies which HTTP method(s) this route accepts
- **jsonify():** Converts Python dict to JSON and sets correct headers
- **URL Parameters** vs **Query Parameters:**
  - URL: `/api/greet/<name>` - part of the path (required)
  - Query: `?a=5&b=3` - optional, after the ?

**Live Demo (15 min):**

1. Create `app.py` with examples above
2. Run it: `python app.py`
3. Test endpoints:
   - Browser: Visit `http://localhost:5000/api/hello`
   - Postman: GET `http://localhost:5000/api/greet/Alice`
   - Postman: GET `http://localhost:5000/api/add?a=10&b=5`
4. Show debug mode: Edit greeting string, save, refresh browser (auto-reloads!)
5. Show error: Try `http://localhost:5000/api/greet/` (missing name param causes error)

**Student Activity (20 min):**
- Create their own Flask app
- Add at least 2 routes
- Test each route with Postman
- Make sure debug mode works

**10:45-11:00 | BREAK**

**11:00-12:00 | Understanding HTTP Methods: GET vs POST vs PUT vs DELETE (60 min)**

**Teaching Strategy:** Explain HTTP methods as CRUD operations on resources. Show comparison table. Use clear naming analogy.

**HTTP Methods Explained:**

| Method | Purpose | Has Body? | When Used | Status Code |
|--------|---------|-----------|-----------|-------------|
| GET | Retrieve data | No | Read resources | 200 |
| POST | Create data | Yes | Add new resource | 201 |
| PUT | Update data | Yes | Replace resource | 200 |
| DELETE | Remove data | No | Delete resource | 204 |

**Complete Examples:**

```python
# In-memory storage for examples (will use database Thursday)
users = [
    {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'},
    {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'},
]
next_id = 3

# GET - Retrieve all users
@app.route('/api/users', methods=['GET'])
def get_all_users():
    """
    GET /api/users
    Response: [{"id": 1, "name": "Alice", ...}, ...]
    """
    return jsonify(users)

# GET - Retrieve specific user
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """
    GET /api/users/1
    Response: {"id": 1, "name": "Alice", ...}
    """
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

# POST - Create new user
@app.route('/api/users', methods=['POST'])
def create_user():
    """
    POST /api/users
    Body: {"name": "Charlie", "email": "charlie@example.com"}
    Response: {"id": 3, "name": "Charlie", ...} (201 Created)
    """
    global next_id
    data = request.get_json()
    
    # Validate required fields
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({'error': 'Name and email required'}), 400
    
    new_user = {
        'id': next_id,
        'name': data['name'],
        'email': data['email']
    }
    users.append(new_user)
    next_id += 1
    
    return jsonify(new_user), 201  # 201 = Created

# PUT - Update user
@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    """
    PUT /api/users/1
    Body: {"name": "Alice Updated", "email": "alice.new@example.com"}
    Response: {"id": 1, "name": "Alice Updated", ...}
    """
    user = next((u for u in users if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    data = request.get_json()
    user['name'] = data.get('name', user['name'])
    user['email'] = data.get('email', user['email'])
    
    return jsonify(user)  # 200 OK (default)

# DELETE - Remove user
@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    """
    DELETE /api/users/1
    Response: {} (204 No Content)
    """
    global users
    users = [u for u in users if u['id'] != user_id]
    return '', 204  # 204 = No Content (deleted successfully, no response body)
```

**Student Activity (20 min):**
- Add these endpoints to their Flask app
- Test each HTTP method in Postman
- Create a user, read it, update it, delete it
- Observe status codes (201, 200, 404, 204)

**12:00-1:00 | LUNCH**

**1:00-2:15 | Input Validation & Error Handling (75 min)**

**Teaching Strategy:** Show the difference between code that works when given perfect data vs. code that handles real-world messy data.

**Why Validation Matters:**
Bad data destroys applications. "Garbage in, garbage out." Always assume frontend will send wrong data (accidentally or maliciously).

**Validation Pattern - Before & After:**

```python
# ❌ BAD - No validation, crashes if data missing
@app.route('/api/users', methods=['POST'])
def create_user_bad():
    data = request.get_json()
    new_user = {'name': data['name'], 'email': data['email']}  # Crashes if name missing!
    return jsonify(new_user), 201

# ✅ GOOD - Validates before processing
@app.route('/api/users', methods=['POST'])
def create_user_good():
    data = request.get_json()
    
    # Check if data exists
    if not data:
        return jsonify({'error': 'Request body required'}), 400
    
    # Check required fields
    errors = {}
    if not data.get('name'):
        errors['name'] = 'Name is required'
    if not data.get('email'):
        errors['email'] = 'Email is required'
    
    if errors:
        return jsonify(errors), 400
    
    # Additional validation
    if len(data['name']) < 2:
        return jsonify({'error': 'Name must be at least 2 characters'}), 400
    
    if '@' not in data['email']:
        return jsonify({'error': 'Invalid email format'}), 400
    
    # All good, create user
    new_user = {'id': 1, 'name': data['name'], 'email': data['email']}
    return jsonify(new_user), 201
```

**Common Validation Rules:**

```python
# Email validation (basic)
if '@' not in email or '.' not in email:
    return jsonify({'error': 'Invalid email'}), 400

# Length validation
if len(name) < 2 or len(name) > 100:
    return jsonify({'error': 'Name must be 2-100 characters'}), 400

# Type validation (assuming correct from JSON, but be safe)
try:
    age = int(data.get('age', 0))
except ValueError:
    return jsonify({'error': 'Age must be a number'}), 400

# Enum validation (only certain values allowed)
if role not in ['admin', 'user', 'guest']:
    return jsonify({'error': 'Invalid role'}), 400
```

**Status Codes Cheat Sheet:**
- **200 OK:** Request succeeded, returning data
- **201 Created:** Resource created successfully
- **204 No Content:** Request succeeded, no data to return (DELETE)
- **400 Bad Request:** Client error (bad data, missing fields)
- **404 Not Found:** Resource doesn't exist
- **500 Internal Server Error:** Server crashed/error

**Student Activity (25 min):**
- Add validation to all POST/PUT endpoints
- Test with bad data (missing fields, wrong types, empty)
- Make sure errors return 400
- Test with good data (returns 201/200)

**2:15-2:30 | BREAK**

**2:30-3:45 | API Testing with Postman (75 min)**

**Teaching Strategy:** Many students haven't used professional API testing tools. Show every feature, demo workflows.

**Postman Basics:**
1. Create request (GET, POST, etc)
2. Enter URL
3. Add headers if needed (Content-Type: application/json)
4. Add body for POST/PUT
5. Send and see response

**Workflow Example - Complete CRUD Test:**

```
1. GET /api/users
   ➜ See all users (initially 2)

2. POST /api/users
   Body: {"name": "Charlie", "email": "charlie@example.com"}
   ➜ Returns 201 Created with new user

3. GET /api/users
   ➜ Now 3 users

4. GET /api/users/3
   ➜ See Charlie

5. PUT /api/users/3
   Body: {"name": "Charles", "email": "charles@example.com"}
   ➜ Returns updated user

6. DELETE /api/users/3
   ➜ Returns 204 No Content

7. GET /api/users
   ➜ Back to 2 users
```

**Student Activity (45 min):**
- Import their Flask app in Postman
- Perform complete CRUD workflow
- Test error cases (GET non-existent, POST bad data)
- Document their API (Postman auto-generates docs)

---

### TUESDAY: RESTful API Design & CORS (6.5 hours)

**9:00-10:45 | Building RESTful Endpoints (105 min)**

**Teaching Strategy:** Show well-designed API vs messy one. Explain the thinking behind each decision.

**What Makes an API RESTful:**

REST = Representational State Transfer. Not a requirement, but a convention that makes APIs intuitive.

**RESTful URL Patterns:**

```
Good (RESTful):
GET    /api/tasks          # List all tasks
GET    /api/tasks/5        # Get task #5
POST   /api/tasks          # Create task
PUT    /api/tasks/5        # Update task #5
DELETE /api/tasks/5        # Delete task #5

Bad (Not RESTful):
GET /api/getAllTasks
GET /api/getTask?id=5
POST /api/createTask
POST /api/updateTask
POST /api/deleteTask?id=5
```

**Why Patterns Matter:** Developers can predict URLs without documentation. Same pattern everywhere = consistency.

**Complete Task API Example:**

```python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage (replace with database Thursday)
tasks = [
    {'id': 1, 'title': 'Learn Flask', 'completed': True, 'priority': 1},
    {'id': 2, 'title': 'Build API', 'completed': False, 'priority': 2},
]
next_id = 3

# ========== READ ==========

@app.route('/api/tasks', methods=['GET'])
def list_tasks():
    """Get all tasks, optionally filter by completed status"""
    completed = request.args.get('completed')
    
    if completed is not None:
        completed_bool = completed.lower() == 'true'
        filtered = [t for t in tasks if t['completed'] == completed_bool]
        return jsonify(filtered)
    
    return jsonify(tasks)

@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    """Get single task by ID"""
    task = next((t for t in tasks if t['id'] == task_id), None)
    if not task:
        return jsonify({'error': f'Task {task_id} not found'}), 404
    return jsonify(task)

# ========== CREATE ==========

@app.route('/api/tasks', methods=['POST'])
def create_task():
    """Create new task"""
    global next_id
    data = request.get_json()
    
    # Validate
    if not data:
        return jsonify({'error': 'Request body required'}), 400
    if not data.get('title'):
        return jsonify({'error': 'Title required'}), 400
    if len(data['title']) < 3:
        return jsonify({'error': 'Title must be at least 3 characters'}), 400
    
    # Create
    task = {
        'id': next_id,
        'title': data['title'],
        'completed': data.get('completed', False),
        'priority': data.get('priority', 3)  # Default priority
    }
    tasks.append(task)
    next_id += 1
    
    return jsonify(task), 201

# ========== UPDATE ==========

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    """Update existing task"""
    task = next((t for t in tasks if t['id'] == task_id), None)
    if not task:
        return jsonify({'error': f'Task {task_id} not found'}), 404
    
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Request body required'}), 400
    
    # Update allowed fields only
    if 'title' in data:
        if len(data['title']) < 3:
            return jsonify({'error': 'Title must be at least 3 characters'}), 400
        task['title'] = data['title']
    if 'completed' in data:
        task['completed'] = data['completed']
    if 'priority' in data:
        task['priority'] = data['priority']
    
    return jsonify(task)

# ========== DELETE ==========

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Delete task"""
    global tasks
    task = next((t for t in tasks if t['id'] == task_id), None)
    if not task:
        return jsonify({'error': f'Task {task_id} not found'}), 404
    
    tasks = [t for t in tasks if t['id'] != task_id]
    return '', 204  # No content (success with no response body)
```

**Key Patterns:**
- **Consistent naming:** `/api/tasks` (not `/api/getallTasks`)
- **Resource-based:** Think in terms of resources, not actions
- **Status codes:** 201 for create, 404 for not found, 204 for delete
- **Filtering via query:** `?completed=true` vs new endpoint

**Student Activity (20 min):**
- Implement Task API (or similar with their own resource)
- Test all 5 endpoints in Postman
- Try filtering, error cases

**10:45-11:00 | BREAK**

**11:00-12:00 | Understanding CORS (60 min)**

**Teaching Strategy:** Show CORS error first, then fix. Students understand problems better than abstract explanations.

**What is CORS and Why We Need It:**

Modern browsers have "Same-Origin Policy" - can't call URLs from different origin (different domain or port). This protects users but breaks development when frontend and backend run on different ports.

**CORS Error Demonstration:**

Without flask-cors, when JavaScript calls backend from different port:
```
❌ No 'Access-Control-Allow-Origin' header on response
Access blocked because CORS policy
```

**The Fix:**

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins (fine for development, restrict in production)

# OR more specific:
CORS(app, resources={
    r"/api/*": {"origins": ["http://localhost:3000"]}  # Only localhost:3000 allowed
})
```

**Frontend Code That Works with CORS:**

```javascript
// From http://localhost:3000 (frontend)
// Calling http://localhost:5000 (backend)

async function getTasks() {
    try {
        const response = await fetch('http://localhost:5000/api/tasks');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const tasks = await response.json();
        console.log(tasks);  // Works with CORS enabled!
    } catch (error) {
        console.error('Error:', error);
    }
}
```

**Student Activity (25 min):**
- Create simple HTML file with JavaScript
- Serve from one port (e.g., `python -m http.server 3000`)
- Call Flask API from different port
- Observe CORS error, then fix it with flask-cors

**12:00-1:00 | LUNCH**

**1:00-2:15 | Frontend-Backend Integration (75 min)**

**Teaching Strategy:** This is the moment students realize their JavaScript can actually talk to servers. Show working end-to-end example.

**Complete Example - Frontend Calling Backend:**

```html
<!-- index.html - runs on port 3000 -->
<!DOCTYPE html>
<html>
<head>
    <title>Task Manager</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 20px auto; }
        input { padding: 8px; font-size: 16px; }
        button { padding: 8px 16px; background: #007bff; color: white; border: none; cursor: pointer; }
        ul { list-style: none; padding: 0; }
        li { padding: 10px; border: 1px solid #ddd; margin: 5px 0; display: flex; justify-content: space-between; }
        .error { color: red; }
    </style>
</head>
<body>
    <h1>Task Manager</h1>
    
    <div>
        <input type="text" id="taskInput" placeholder="New task...">
        <button onclick="addTask()">Add Task</button>
    </div>
    
    <div id="error" class="error"></div>
    <ul id="taskList"></ul>

    <script>
        const API_URL = 'http://localhost:5000/api/tasks';
        
        // Load tasks when page loads
        window.onload = () => loadTasks();
        
        async function loadTasks() {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
                const tasks = await response.json();
                displayTasks(tasks);
            } catch (error) {
                showError(`Failed to load tasks: ${error.message}`);
            }
        }
        
        async function addTask() {
            const input = document.getElementById('taskInput');
            const title = input.value.trim();
            
            if (!title) {
                showError('Task title required');
                return;
            }
            
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, completed: false, priority: 3 })
                });
                
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.error || `HTTP ${response.status}`);
                }
                
                input.value = '';
                showError('');  // Clear errors
                await loadTasks();  // Reload list
            } catch (error) {
                showError(`Failed to add task: ${error.message}`);
            }
        }
        
        async function deleteTask(taskId) {
            try {
                const response = await fetch(`${API_URL}/${taskId}`, {
                    method: 'DELETE'
                });
                
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
                await loadTasks();
            } catch (error) {
                showError(`Failed to delete task: ${error.message}`);
            }
        }
        
        async function toggleTask(taskId, currentStatus) {
            try {
                const response = await fetch(`${API_URL}/${taskId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ completed: !currentStatus })
                });
                
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
                await loadTasks();
            } catch (error) {
                showError(`Failed to update task: ${error.message}`);
            }
        }
        
        function displayTasks(tasks) {
            const list = document.getElementById('taskList');
            list.innerHTML = '';
            
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.style.opacity = task.completed ? '0.5' : '1';
                li.innerHTML = `
                    <div>
                        <input type="checkbox" ${task.completed ? 'checked' : ''} 
                               onchange="toggleTask(${task.id}, ${task.completed})">
                        <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
                            ${task.title}
                        </span>
                    </div>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                `;
                list.appendChild(li);
            });
        }
        
        function showError(message) {
            document.getElementById('error').textContent = message;
        }
    </script>
</body>
</html>
```

**Key Patterns:**
- Use `async/await` for clean code
- Check `response.ok` before assuming success
- Handle errors at each step
- Reload data after mutations (POST/PUT/DELETE)
- Disable UI while loading to prevent double-clicks

**Student Activity (35 min):**
- Create HTML file with form for tasks
- Implement addTask, loadTasks, deleteTask functions
- Connect to their Flask backend
- Test complete workflow: add, view, delete

**2:15-2:30 | BREAK**

**2:30-3:45 | Error Handling on Both Ends (75 min)**

**Common Error Scenarios and Solutions:**

```python
# Backend - Handle missing request body
@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    if not data:  # Frontend forgot to send body
        return jsonify({'error': 'Request body required'}), 400
    # ... rest of function

# Frontend - Handle network errors
async function saveTask(task) {
    try {
        const response = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        
        // Network succeeded, but HTTP status was error
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || `HTTP ${response.status}`);
        }
        
        return await response.json();  // Success!
    } catch (error) {
        // Network error OR HTTP error
        console.error('Save failed:', error.message);
        showUserError('Could not save task: ' + error.message);
        throw error;
    }
}

# Show meaningful errors to users
function showUserError(message) {
    // Show to user in UI, not just console
    document.getElementById('errorDiv').textContent = message;
    document.getElementById('errorDiv').style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        document.getElementById('errorDiv').style.display = 'none';
    }, 5000);
}
```

**Student Activity (35 min):**
- Add comprehensive error handling to frontend
- Add try/catch to all fetch calls
- Display errors to user
- Test by:
  - Stopping backend server (network error)
  - Sending invalid data (validation error)
  - Requesting non-existent task (404 error)

---

### WEDNESDAY: Full-Stack Application Build (6.5 hours)

This day bridges the gap between backend API and frontend UI. Students integrate their Week 6 interactive dashboard with the Flask backend from Tuesday.

**9:00-10:45 | Recap & Architecture Planning (105 min)**

**Teaching Strategy:** Draw architecture diagram, trace data flow, show how pieces connect.

**Architecture Overview:**

```
┌─────────────────────────────────────────┐
│      BROWSER (Frontend)                 │
│  ┌───────────────────────────────────┐  │
│  │   HTML/CSS/JavaScript             │  │
│  │   - Form to collect data          │  │
│  │   - Display from server           │  │
│  └───────────────────────────────────┘  │
│              ↕ (fetch)                  │
│         Port 3000                       │
└─────────────────────────────────────────┘
              ↕↕↕ CORS
         Network Request
              ↕↕↕
┌─────────────────────────────────────────┐
│      FLASK SERVER (Backend)             │
│  ┌───────────────────────────────────┐  │
│  │   Python/Flask                    │  │
│  │   - Receive requests              │  │
│  │   - Validate data                 │  │
│  │   - Query database                │  │
│  │   - Send JSON response            │  │
│  └───────────────────────────────────┘  │
│              ↕                          │
│         Port 5000                       │
└─────────────────────────────────────────┘
              ↕
┌─────────────────────────────────────────┐
│      DATABASE (SQLite)                  │
│      (persistent storage)               │
└─────────────────────────────────────────┘
```

**Data Flow Example:**

```
User types "Buy milk" into form
         ↓
JavaScript: onClick -> addTask()
         ↓
fetch('http://localhost:5000/api/tasks', {
  method: 'POST',
  body: {'title': 'Buy milk'}
})
         ↓
CORS check: Are you allowed?
         ↓
Flask receives POST /api/tasks
         ↓
Backend validates: Title present? Not too long?
         ↓
Backend saves to database
         ↓
Backend sends back: {'id': 5, 'title': 'Buy milk', 'completed': false}
         ↓
Frontend receives JSON
         ↓
JavaScript: displayTasks() - render new task in UI
         ↓
User sees "Buy milk" appear in list
```

**Planning Activity (30 min):**

Have students sketch their architecture and trace through:
1. Loading data on page load
2. Adding new item
3. Deleting item

**10:45-11:00 | BREAK**

**11:00-12:00 | Connecting Week 6 Frontend to Week 7 Backend (60 min)**

**Task:** Modify their Week 6 dashboard to talk to Flask backend instead of local storage.

**Key Changes Needed:**

```javascript
// Old (Week 6): Stored in localStorage
// localStorage.setItem('tasks', JSON.stringify(tasks))

// New (Week 7): Stored in database via API
// fetch('http://localhost:5000/api/tasks', {method: 'POST', body: ...})
```

**Example Migration:**

```javascript
// BEFORE (Week 6) - localStorage only
class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
    
    addTask(title) {
        const task = { id: Date.now(), title, completed: false };
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.render();
    }
    
    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.render();
    }
}

// AFTER (Week 7) - Flask backend
class TaskManager {
    constructor() {
        this.API_URL = 'http://localhost:5000/api/tasks';
        this.loadTasks();
    }
    
    async loadTasks() {
        try {
            const response = await fetch(this.API_URL);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            this.tasks = await response.json();
            this.render();
        } catch (error) {
            console.error('Failed to load tasks:', error);
            // Fallback: show error message to user
        }
    }
    
    async addTask(title) {
        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, completed: false })
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to create task');
            }
            
            // Reload all tasks (simpler than trying to add to list)
            await this.loadTasks();
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    }
    
    async deleteTask(id) {
        try {
            const response = await fetch(`${this.API_URL}/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            await this.loadTasks();
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    }
}

// Usage stays the same:
const taskManager = new TaskManager();
```

**Student Activity (45 min):**
- Take their Week 6 code
- Replace localStorage with fetch calls
- Test that add, view, delete work
- Verify data persists after page refresh

**12:00-1:00 | LUNCH**

**1:00-2:15 | Testing Full-Stack Workflow (75 min)**

**Student Checklist - Make Sure These Work:**
- [ ] Load page → Tasks from database appear
- [ ] Add task → Appears in list immediately
- [ ] Refresh page → Task still there (from database, not localStorage)
- [ ] Delete task → Removed from database and UI
- [ ] Edit task → Changes saved to database
- [ ] Backend down → Frontend shows friendly error message
- [ ] Send invalid data → Backend validates and rejects
- [ ] UI is responsive while waiting for server

**Testing Scenarios:**

```bash
# Test 1: Happy path
# Start backend: python app.py
# Start frontend: python -m http.server 3000
# Open http://localhost:3000
# Add task → Should work ✓

# Test 2: Backend down
# Stop Flask server (Ctrl+C)
# Try to add task
# Should show error message ✓

# Test 3: Invalid data
# In browser console:
fetch('http://localhost:5000/api/tasks', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({})  // Missing title
})
# Should return 400 error ✓
```

**Student Activity (60 min):**
- Run through testing checklist
- Fix any bugs found
- Document any remaining issues
- Add loading indicators (optional: "Saving...")

**2:15-2:30 | BREAK**

**2:30-3:45 | Debugging & Optimization (75 min)**

**Debugging Tools & Techniques:**

1. **Browser DevTools Network Tab:**
   - See actual HTTP requests sent
   - View request headers and body
   - Check response status and body
   - Spot CORS errors

2. **Flask Debug Mode:**
   - `debug=True` shows errors clearly
   - Shows which route was called
   - Shows what data was received

3. **Console Logging:**
   ```javascript
   console.log('Making request:', {url, options});
   const response = await fetch(url, options);
   console.log('Response:', response.status, response);
   ```

**Common Issues & Fixes:**

| Issue | Cause | Fix |
|-------|-------|-----|
| CORS error | CORS not enabled on backend | Add `CORS(app)` in Flask |
| 404 endpoint not found | Wrong URL or Flask not running | Check URL, verify Flask running on :5000 |
| Empty response | Fetch succeeded but no data | Check database has data, check query |
| Stale data | Showing localStorage, not server data | Remove localStorage, use fetch |
| Slow UI | Not using async/await | Use async functions, show loading state |

**Student Activity (35 min):**
- Open DevTools Network tab
- Perform actions (add, delete)
- Observe HTTP requests and responses
- Fix any issues found
- Optimize: Add loading states ("Saving...", disabled buttons during request)

---

### THURSDAY: Data Persistence with SQLite (6.5 hours)

By Thursday, students have working frontend + backend. Now add database so data persists across server restarts and between users.

**9:00-10:45 | SQLite Database Design (105 min)**

**Teaching Strategy:** Before writing code, design schema. Show how data structures map to database tables.

**Database Design for Tasks:**

Think about what data we need to store:
- `id` - unique identifier (so we can reference individual tasks)
- `title` - the task text
- `completed` - whether task is done
- `priority` - importance (1=high, 2=medium, 3=low)
- `created_at` - when task was created

SQL Table Definition:

```sql
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT 0,
    priority INTEGER DEFAULT 3,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Understanding Each Field:**
- `INTEGER PRIMARY KEY AUTOINCREMENT` - Auto-incrementing ID (1, 2, 3, ...)
- `TEXT NOT NULL` - Title must be provided (can't be empty/null)
- `BOOLEAN DEFAULT 0` - Default to false (not completed)
- `DEFAULT CURRENT_TIMESTAMP` - Automatically set to creation time

**Complete Flask + SQLite App:**

```python
import sqlite3
from flask import Flask, jsonify, request, g
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

DATABASE = 'tasks.db'

# ========== DATABASE SETUP ==========

def get_db():
    """Get database connection, create if needed"""
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row  # Access columns by name
    return db

@app.teardown_appcontext
def close_connection(exception):
    """Close database connection at end of request"""
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    """Create tables if they don't exist"""
    with app.app_context():
        db = get_db()
        db.execute('''
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                completed BOOLEAN DEFAULT 0,
                priority INTEGER DEFAULT 3,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        db.commit()

# Initialize database on startup
if not os.path.exists(DATABASE):
    init_db()

# ========== READ ENDPOINTS ==========

@app.route('/api/tasks', methods=['GET'])
def list_tasks():
    """Get all tasks"""
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks ORDER BY created_at DESC')
    tasks = [dict(row) for row in cursor.fetchall()]
    return jsonify(tasks)

@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    """Get single task"""
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (task_id,))
    row = cursor.fetchone()
    
    if not row:
        return jsonify({'error': f'Task {task_id} not found'}), 404
    
    return jsonify(dict(row))

# ========== CREATE ENDPOINT ==========

@app.route('/api/tasks', methods=['POST'])
def create_task():
    """Create new task"""
    data = request.get_json()
    
    # Validate
    if not data or not data.get('title'):
        return jsonify({'error': 'Title required'}), 400
    
    title = data['title'].strip()
    if len(title) < 3:
        return jsonify({'error': 'Title must be at least 3 characters'}), 400
    if len(title) > 500:
        return jsonify({'error': 'Title must be less than 500 characters'}), 400
    
    try:
        db = get_db()
        cursor = db.execute(
            'INSERT INTO tasks (title, priority) VALUES (?, ?)',
            (title, data.get('priority', 3))
        )
        db.commit()
        
        # Get the created task
        new_id = cursor.lastrowid
        cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (new_id,))
        task = dict(cursor.fetchone())
        
        return jsonify(task), 201
    except sqlite3.IntegrityError as e:
        return jsonify({'error': 'Invalid data'}), 400

# ========== UPDATE ENDPOINT ==========

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    """Update task"""
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (task_id,))
    task = cursor.fetchone()
    
    if not task:
        return jsonify({'error': f'Task {task_id} not found'}), 404
    
    data = request.get_json()
    
    # Build update query dynamically
    updates = []
    params = []
    
    if 'title' in data:
        title = data['title'].strip()
        if len(title) < 3:
            return jsonify({'error': 'Title must be at least 3 characters'}), 400
        updates.append('title = ?')
        params.append(title)
    
    if 'completed' in data:
        updates.append('completed = ?')
        params.append(1 if data['completed'] else 0)
    
    if 'priority' in data:
        if data['priority'] not in [1, 2, 3]:
            return jsonify({'error': 'Priority must be 1, 2, or 3'}), 400
        updates.append('priority = ?')
        params.append(data['priority'])
    
    if not updates:
        return jsonify({'error': 'No fields to update'}), 400
    
    # Add task ID to params for WHERE clause
    params.append(task_id)
    
    try:
        db.execute(
            f"UPDATE tasks SET {', '.join(updates)} WHERE id = ?",
            params
        )
        db.commit()
        
        # Return updated task
        cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (task_id,))
        updated = dict(cursor.fetchone())
        return jsonify(updated)
    except Exception as e:
        return jsonify({'error': 'Update failed'}), 500

# ========== DELETE ENDPOINT ==========

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Delete task"""
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (task_id,))
    task = cursor.fetchone()
    
    if not task:
        return jsonify({'error': f'Task {task_id} not found'}), 404
    
    try:
        db.execute('DELETE FROM tasks WHERE id = ?', (task_id,))
        db.commit()
        return '', 204
    except Exception as e:
        return jsonify({'error': 'Delete failed'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

**Key Patterns:**
- `get_db()` returns connection, creating if needed
- `db.row_factory = sqlite3.Row` lets us access columns by name like dicts
- `?` in SQL queries = safe parameter binding (prevents SQL injection)
- `db.commit()` = save changes permanently
- `cursor.lastrowid` = ID of just-inserted row
- Always check `if not task` before updating/deleting

**Student Activity (35 min):**
- Create their `tasks.db` file
- Create `tasks` table
- Run Flask app and test endpoints with Postman
- Verify data persists after stopping/starting server

**10:45-11:00 | BREAK**

**11:00-12:00 | SQL Queries & Data Retrieval (60 min)**

**Common SQL Queries Students Should Know:**

```sql
-- Get all tasks
SELECT * FROM tasks;

-- Get specific task
SELECT * FROM tasks WHERE id = 5;

-- Get uncompleted tasks
SELECT * FROM tasks WHERE completed = 0;

-- Get high priority tasks
SELECT * FROM tasks WHERE priority = 1;

-- Count total tasks
SELECT COUNT(*) FROM tasks;

-- Count completed tasks
SELECT COUNT(*) FROM tasks WHERE completed = 1;

-- Sort by date (newest first)
SELECT * FROM tasks ORDER BY created_at DESC;

-- Sort by priority (high to low)
SELECT * FROM tasks ORDER BY priority ASC;

-- Limit results (pagination)
SELECT * FROM tasks LIMIT 10 OFFSET 0;  -- First 10
SELECT * FROM tasks LIMIT 10 OFFSET 10; -- Next 10
```

**Using in Flask:**

```python
# Get completed tasks
@app.route('/api/tasks/completed', methods=['GET'])
def get_completed_tasks():
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks WHERE completed = 1')
    tasks = [dict(row) for row in cursor.fetchall()]
    return jsonify(tasks)

# Get statistics
@app.route('/api/tasks/stats', methods=['GET'])
def get_stats():
    db = get_db()
    
    total = db.execute('SELECT COUNT(*) FROM tasks').fetchone()[0]
    completed = db.execute('SELECT COUNT(*) FROM tasks WHERE completed = 1').fetchone()[0]
    
    return jsonify({
        'total': total,
        'completed': completed,
        'remaining': total - completed
    })
```

**Student Activity (35 min):**
- Add endpoints for:
  - GET completed tasks only
  - GET high priority tasks
  - GET task statistics
- Test with various data

**12:00-1:00 | LUNCH**

**1:00-2:15 | Error Handling & Data Validation (75 min)**

**Database Errors Students Will Encounter:**

```python
# Error: Column does not exist
# db.execute('SELECT wrong_column FROM tasks')
# FIX: Use correct column name

# Error: Type mismatch
# db.execute('INSERT INTO tasks (priority) VALUES (?)', ('high'))
# FIX: Use correct type (1 for high)

# Error: UNIQUE constraint failed
# If you had UNIQUE columns and tried duplicates
# FIX: Check constraints, validate data

# Error: database is locked
# Happens when multiple connections try to write
# FIX: Close connections properly (use get_db() pattern)
```

**Input Validation Before Database:**

```python
def validate_task_data(data):
    """Validate task input, return errors dict"""
    errors = {}
    
    if not data:
        return {'data': 'Request body required'}
    
    # Check title
    title = data.get('title', '').strip()
    if not title:
        errors['title'] = 'Title required'
    elif len(title) < 3:
        errors['title'] = 'Title too short (min 3 chars)'
    elif len(title) > 500:
        errors['title'] = 'Title too long (max 500 chars)'
    
    # Check priority
    if 'priority' in data:
        if data['priority'] not in [1, 2, 3]:
            errors['priority'] = 'Priority must be 1, 2, or 3'
    
    return errors

# Use in endpoint
@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    errors = validate_task_data(data)
    
    if errors:
        return jsonify(errors), 400
    
    # If we get here, data is valid
    # Safe to insert into database
    ...
```

**Student Activity (45 min):**
- Add comprehensive validation to all endpoints
- Test with invalid data (empty, too long, wrong types)
- Ensure all errors return 400 with clear messages

**2:15-2:30 | BREAK**

**2:30-3:45 | Complete Integration & Testing (75 min)**

**Checklist - Make Sure Everything Works:**
- [ ] Database file created (`tasks.db`)
- [ ] Can create task → saved to database
- [ ] Can read task → retrieved from database
- [ ] Can update task → changes persisted
- [ ] Can delete task → removed from database
- [ ] Data persists after server restart
- [ ] All validation works (bad data rejected)
- [ ] All error messages clear and helpful
- [ ] Frontend still works with database backend

**Testing Workflow:**

```bash
# 1. Start fresh
rm tasks.db  # Delete old database
python app.py

# 2. Test creating tasks
# In Postman: POST /api/tasks with {"title": "Buy milk"}

# 3. Verify data in database
sqlite3 tasks.db
sqlite> SELECT * FROM tasks;

# 4. Stop server (Ctrl+C)

# 5. Start server again
python app.py

# 6. Verify data still there
# GET /api/tasks should show task we created

# 7. Test edge cases:
# - Create task with empty title (should error)
# - Create task with very long title (should error)
# - Update non-existent task (should 404)
# - Delete task (should work)
```

**Student Activity (60 min):**
- Run complete test workflow
- Fix any bugs
- Connect their frontend to database backend
- Verify full-stack workflow works:
  - Add task in UI → appears in database
  - Refresh page → data from database appears
  - Delete in UI → removed from database

---

### FRIDAY: Full-Stack Integration Workshop (4 hours)

**9:00-10:00 | Complete Full-Stack Polish (60 min)**

Students finalize their applications:
- ✅ All CRUD operations working
- ✅ Data persists in database
- ✅ Frontend properly displays data
- ✅ All validation working
- ✅ Errors displayed nicely
- ✅ Code is clean and commented
- ✅ Tested edge cases

**Final Checklist:**
- [ ] Backend running without errors
- [ ] Frontend can add item
- [ ] Frontend can view all items
- [ ] Frontend can update item
- [ ] Frontend can delete item
- [ ] Refresh page → data from database
- [ ] Backend down → friendly error shown
- [ ] Invalid data → validation error shown
- [ ] Code pushed to GitHub

**10:00-11:00 | Code Review & Peer Learning (60 min)**

Each student:
1. Shares their GitHub repo
2. Demonstrates full workflow (add, view, update, delete)
3. Talks through their code (architecture, key decisions)
4. Answers questions from peers

Peers provide feedback on:
- Code organization and clarity
- Error handling quality
- User experience
- Suggested improvements

**11:00-12:30 | Presentations & Celebration (90 min)**

Each student does 3-minute presentation:
- What they built (what makes it useful?)
- Technical challenges faced (how did you solve them?)
- One thing you're proud of
- One thing you'd improve next

---

## Professional Patterns & Best Practices

### API Design Patterns

**Resource-Based URLs:**
```
✅ GOOD: /api/tasks
❌ BAD: /api/getAllTasks

✅ GOOD: /api/tasks/5
❌ BAD: /api/tasks?id=5  (for getting one)

✅ GOOD: /api/tasks?completed=true
❌ BAD: /api/getCompletedTasks
```

**Consistent Response Format:**
```python
# Always return JSON with consistent structure
# Success response
{
    "data": {...},
    "error": null,
    "status": 200
}

# Error response
{
    "data": null,
    "error": "User not found",
    "status": 404
}

# Flask implementation
def make_response(data=None, error=None, status_code=200):
    return jsonify({
        'data': data,
        'error': error,
        'status': status_code
    }), status_code
```

**Pagination for Large Results:**
```python
@app.route('/api/tasks', methods=['GET'])
def list_tasks():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    
    db = get_db()
    
    # Get paginated results
    offset = (page - 1) * per_page
    cursor = db.execute(
        'SELECT * FROM tasks LIMIT ? OFFSET ?',
        (per_page, offset)
    )
    tasks = [dict(row) for row in cursor.fetchall()]
    
    # Get total count
    count_cursor = db.execute('SELECT COUNT(*) FROM tasks')
    total = count_cursor.fetchone()[0]
    
    return jsonify({
        'tasks': tasks,
        'page': page,
        'per_page': per_page,
        'total': total,
        'pages': (total + per_page - 1) // per_page
    })
```

### Error Handling Patterns

**Centralized Error Handler:**
```python
@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad request'}), 400

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Resource not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Server error'}), 500

# Use it
@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (task_id,))
    row = cursor.fetchone()
    if not row:
        abort(404)  # Triggers error handler
    return jsonify(dict(row))
```

**Try-Catch Pattern:**
```python
@app.route('/api/tasks', methods=['POST'])
def create_task():
    try:
        data = request.get_json()
        if not data or not data.get('title'):
            return jsonify({'error': 'Title required'}), 400
        
        db = get_db()
        cursor = db.execute(
            'INSERT INTO tasks (title) VALUES (?)',
            (data['title'],)
        )
        db.commit()
        
        # Return created resource
        new_id = cursor.lastrowid
        cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (new_id,))
        task = dict(cursor.fetchone())
        return jsonify(task), 201
        
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Invalid data'}), 400
    except Exception as e:
        app.logger.error(f'Error creating task: {e}')
        return jsonify({'error': 'Server error'}), 500
```

### Frontend Patterns

**API Client Class:**
```javascript
class TaskAPI {
    constructor(baseURL = 'http://localhost:5000/api') {
        this.baseURL = baseURL;
    }
    
    async request(endpoint, options = {}) {
        try {
            const url = `${this.baseURL}${endpoint}`;
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || `HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error(`API request failed: ${error.message}`);
            throw error;
        }
    }
    
    getTasks() {
        return this.request('/tasks');
    }
    
    createTask(title) {
        return this.request('/tasks', {
            method: 'POST',
            body: JSON.stringify({ title, completed: false })
        });
    }
    
    updateTask(id, updates) {
        return this.request(`/tasks/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updates)
        });
    }
    
    deleteTask(id) {
        return this.request(`/tasks/${id}`, {
            method: 'DELETE'
        });
    }
}

// Usage
const api = new TaskAPI();

async function loadTasks() {
    try {
        const tasks = await api.getTasks();
        displayTasks(tasks);
    } catch (error) {
        showError(error.message);
    }
}
```

---

## Student Activities & Assignments

### Daily Assignments (Monday - Thursday)

**Monday Assignment:** Build a Flask API with at least 3 GET endpoints
- Create app.py with Flask routes
- At least one endpoint with URL parameter
- At least one endpoint with query parameter
- Test all endpoints with Postman
- *Points: 15*

**Tuesday Assignment:** Build a complete REST API for a resource
- Implement CRUD for at least one resource (tasks, todos, items, etc.)
- All endpoints following REST conventions
- Proper HTTP methods and status codes
- Working with Postman
- *Points: 20*

**Wednesday Assignment:** Connect frontend to backend
- Take Week 6 frontend code (or create new)
- Modify to call Flask API instead of localStorage
- All CRUD operations working
- Error handling on frontend
- *Points: 10*

### Main Project: Full-Stack Application (50 points)

**Requirements:**
- Fully functional full-stack app (frontend + backend + database)
- At least CRUD operations on 1 resource
- SQLite database with schema
- Proper error handling and validation
- Code is clean, commented, version controlled

**Deliverables:**
- GitHub repository with code
- README.md with setup instructions
- Working application
- Presentation (see Friday presentations)

**Submission:**
- Link to GitHub repo
- 3-minute demo of working app
- Brief reflection on learning

**Rubric: See Assessment Rubric section below**

---

## Assessment Rubric

### Full-Stack Application Rubric (100 points)

| Category | Novice (0-1 pts) | Developing (2 pts) | Proficient (3 pts) | Advanced (4 pts) | Points |
|----------|------------------|-------------------|-------------------|------------------|--------|
| **Backend API Design (15 pts)** | No working API | API endpoints exist but don't follow REST | REST design is mostly correct, minor inconsistencies | Perfect REST API design, well organized | _/15 |
| **Database Integration (15 pts)** | No database | Database exists but CRUD operations incomplete | CRUD working, data persists, minor issues | Full CRUD with robust schema, excellent persistence | _/15 |
| **Frontend-Backend Communication (15 pts)** | Endpoints don't connect | Can communicate but inconsistent errors | Most operations work, error handling present | Seamless communication, comprehensive error handling | _/15 |
| **Form Validation & Error Handling (15 pts)** | No validation | Basic validation exists | Validates inputs, shows user errors | Comprehensive validation, helpful error messages | _/15 |
| **Code Quality & Documentation (15 pts)** | Messy, no comments | Some organization, minimal docs | Well-organized, clear code, good comments | Excellent structure, clear logic, thorough docs | _/15 |
| **Deployment & Git Usage (10 pts)** | No GitHub repo | Repo exists, few commits | Repo with regular commits, clear history | Well-organized repo, meaningful commit messages | _/10 |
| **Bonus Opportunities** | | | | Add 5pts each for: Advanced features (filtering, search), User authentication, Animations/UI polish, Unit tests, Deployment to production | _/+ |

**Scoring Guide:**

- **0-59:** Below expectations - significant gaps
- **60-75:** Meets basic expectations - functional but needs polish
- **76-89:** Good work - solid implementation with minor improvements needed
- **90-100:** Excellent - professional quality code

---

## Troubleshooting Guide

### Backend Issues

**Problem:** `ModuleNotFoundError: No module named 'flask'`
- **Cause:** Flask not installed
- **Solution:** `pip install flask flask-cors`
- **Prevention:** Create `requirements.txt`, document dependencies

**Problem:** `Address already in use`
- **Cause:** Another process running on port 5000
- **Solution:** 
  - Find process: `lsof -i :5000`
  - Kill it: `kill -9 <PID>`
  - Or use different port: `app.run(port=5001)`
- **Prevention:** Save port numbers in .env file

**Problem:** `CORS error: No 'Access-Control-Allow-Origin' header`
- **Cause:** CORS not enabled on backend
- **Solution:** Add `from flask_cors import CORS` and `CORS(app)` at top of app.py
- **Prevention:** Enable CORS by default in development

**Problem:** `sqlite3.OperationalError: database is locked`
- **Cause:** Multiple connections trying to write simultaneously
- **Solution:** Ensure connections are closed properly, use get_db() pattern
- **Prevention:** Use proper connection management (see Thursday examples)

### Frontend Issues

**Problem:** `Fetch returns undefined or empty`
- **Cause:** Not parsing JSON or checking response
- **Solution:** Use `await response.json()` and check `response.ok`
- **Prevention:** Test with console.log, use pattern from examples

**Problem:** `Stale data showing in frontend`
- **Cause:** Showing localStorage instead of fetching from server
- **Solution:** Remove localStorage code, reload data after mutations
- **Prevention:** Only use localStorage if backend unavailable

**Problem:** `Button doesn't respond when clicked`
- **Cause:** Function not called or JavaScript error
- **Solution:** Check console for errors, verify onclick handler
- **Prevention:** Use DevTools console during development

### Full-Stack Issues

**Problem:** `Works in Postman but not in frontend`
- **Cause:** Usually Content-Type header missing
- **Solution:** Add `headers: {'Content-Type': 'application/json'}`
- **Prevention:** Check headers in Network tab

**Problem:** `Data doesn't persist after page refresh`
- **Cause:** Not fetching from backend, only using variables
- **Solution:** Fetch data on page load: `window.onload = () => loadTasks()`
- **Prevention:** Always fetch on load, never rely on variables

**Problem:** `Error messages not showing to user`
- **Cause:** Catching errors but not displaying them
- **Solution:** Update UI with error: `document.getElementById('error').textContent = error.message`
- **Prevention:** Have error display element in HTML, always show errors

---

## Teacher Tips & Common Misconceptions

### Time Management for the Week

**Monday (6.5 hrs):**
- 9:00-10:45: Setup & routing (45 min for setup, 60 min practice)
- 11:00-12:00: HTTP methods (40 min content, 20 min activity)
- 1:00-2:15: Validation (40 min content, 35 min activity)
- 2:30-3:45: Postman testing (15 min demo, 60 min practice)
- *Focus:* Get everyone comfortable with basic Flask, confident with Postman

**Tuesday (6.5 hrs):**
- 9:00-10:45: RESTful design (40 min teaching, 20 min coding)
- 11:00-12:00: CORS (20 min demo, 40 min practice)
- 1:00-2:15: Frontend integration (30 min coding example, 45 min practice)
- 2:30-3:45: Error handling (20 min patterns, 55 min practice)
- *Focus:* Working full-stack without database (in-memory), confident with fetch

**Wednesday (6.5 hrs):**
- 9:00-10:45: Architecture review (45 min teaching, 60 min planning)
- 11:00-12:00: Migration help (60 min guided practice)
- 1:00-2:15: Testing workflows (30 min demo, 45 min practice)
- 2:30-3:45: Debugging (30 min tools, 45 min hands-on)
- *Focus:* Everyone has working full-stack without database, confident debugging

**Thursday (6.5 hrs):**
- 9:00-10:45: Database design (40 min teaching, 65 min coding)
- 11:00-12:00: SQL queries (20 min teaching, 40 min practice)
- 1:00-2:15: Validation & errors (25 min content, 50 min practice)
- 2:30-3:45: Integration & testing (20 min checklist, 55 min practice)
- *Focus:* Everyone has working database, full-stack with persistence

**Friday (4 hrs):**
- 9:00-10:00: Polish & fix bugs (60 min open lab)
- 10:00-11:00: Code review prep (60 min setup)
- 11:00-12:30: Presentations (90 min demos)
- *Focus:* Celebrate, reflect, peer learning

### Engagement Strategies

1. **Start with Success:** Everyone should have a working "Hello" endpoint by 11am Monday. Build confidence.

2. **Show Real Data:** Use Postman to show network requests/responses live. Let students see the HTTP happening.

3. **Celebrate Debuggability:** When something breaks (and it will), celebrate it. "Great! We have a CORS error! Let's fix it together." Bugs are learning moments.

4. **Peer Programming:** Have students sit in pairs for Wednesday/Thursday. Better learning, fewer "stuck" moments.

5. **Stretch Goal Friday:** After core functionality, suggest enhancements (filtering, sorting, statistics). Advanced students don't get bored.

### Common Misconceptions

**Misconception 1:** "The database stores the last value"
- **Reality:** Database stores ALL values. Page refresh gets fresh data from database.
- **Teaching Fix:** Show SQLite directly: `sqlite3 tasks.db SELECT * FROM tasks`. Prove data is there.

**Misconception 2:** "Fetch and localStorage do the same thing"
- **Reality:** localStorage stays in browser, fetch talks to server.
- **Teaching Fix:** Show Network tab. localStorage has no network activity. Fetch does.

**Misconception 3:** "PUT and POST are the same"
- **Reality:** POST creates new, PUT updates existing. Different status codes.
- **Teaching Fix:** Show examples: POST returns 201 (created), PUT returns 200 (updated).

**Misconception 4:** "400 errors mean my code is broken"
- **Reality:** 400 = client sent bad data. 500 = server bug. 400 is actually good - backend caught problem!
- **Teaching Fix:** Show validation: `if not data.get('title'): return 400`. "400 is a feature!"

**Misconception 5:** "I need to learn databases to build web apps"
- **Reality:** SQLite is simple. Understanding data persistence matters more than SQL syntax.
- **Teaching Fix:** Start with simple queries. Complex SQL comes later (Week 14+).

### Customization for Different Levels

**For Struggling Students:**
- Provide app.py template with structure (just fill in logic)
- Provide HTML/JavaScript template for frontend
- Pair with stronger student Wednesday/Thursday
- Focus on getting one CRUD operation working perfectly

**For On-Track Students:**
- Let them implement from scratch
- Have them choose their own resource (not just tasks)
- Challenge: Add filtering/sorting
- Challenge: Write documentation

**For Advanced Students:**
- Challenge: Add user authentication
- Challenge: Deploy to production (Heroku, Replit, etc.)
- Challenge: Build frontend in React instead of vanilla JS
- Challenge: Add unit tests
- Stretch: API versioning (/api/v1/tasks)

### Daily Stand-Up Prompts

*Use these to check in with students:*

- "Show me your most recent Postman request. What did it return?"
- "Walk me through what happens when you click 'Add Task' in your app."
- "What's the hardest part for you right now?"
- "What's one thing that surprised you this week?"
- "How is your database looking?" (Check schema, sample data)

### Resources for Students

**Documentation:**
- Flask: https://flask.palletsprojects.com/
- SQLite: https://www.sqlite.org/docs.html
- Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- REST: https://restfulapi.net/

**Tools:**
- Postman: https://www.postman.com/ (API testing)
- DB Browser for SQLite: https://sqlitebrowser.org/ (Visualize database)
- VS Code extensions: REST Client, Thunder Client (alternative to Postman)

**Tutorials:**
- Flask by Example: https://flask.palletsprojects.com/en/latest/tutorial/
- Building REST APIs: https://www.youtube.com/watch?v=qbLc5a9jdXo
- Full-Stack JavaScript: Numerous YouTube tutorials available