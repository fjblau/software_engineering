# Week 7 Overview: "Python for the Web"
## Backend Basics with Flask - Building APIs

**Duration: 30 hours**
**Dates: March 31 - April 4, 2025**

---

## Week Overview

Week 7 introduces backend development with Python and Flask. Students learn to build web servers, create RESTful APIs, handle HTTP requests, connect frontend JavaScript to backend Python, and persist data with SQLite and files.

### Key Focus Areas:
- Introduction to Flask framework
- Routing and handling HTTP requests
- Building RESTful API endpoints
- Working with JSON in Flask
- Connecting JavaScript frontend to Python backend
- CORS (Cross-Origin Resource Sharing)
- Data persistence with SQLite and CSV files

### Week 7 Success Metrics:
- ✅ Students build Flask web servers
- ✅ Students create RESTful API endpoints
- ✅ Students connect frontend to backend
- ✅ Students handle CORS properly
- ✅ Students persist data with SQLite
- ✅ Students build full-stack applications

---

## Daily Schedule

### Monday: Introduction to Flask - Routing & Requests
**6.5 hours**
- What is a web framework?
- Flask installation and setup
- Creating routes (@app.route)
- Handling GET and POST requests
- URL parameters and query strings
- Flask request object
- Returning JSON responses

### Tuesday: Working with JSON & Building APIs
**6.5 hours**
- RESTful API principles
- Building API endpoints
- JSON serialization with Flask
- Request data parsing
- Status codes and error handling
- API design best practices
- Testing APIs with Postman/Thunder Client

### Wednesday: Frontend-Backend Integration
**6.5 hours**
- Fetch API in JavaScript
- CORS (Cross-Origin Resource Sharing)
- flask-cors setup
- Connecting React/vanilla JS frontend to Flask
- Handling async requests
- Error handling on both ends

### Thursday: Data Persistence - SQLite & Files
**6.5 hours**
- SQLite database with Flask
- Creating tables and schemas
- CRUD operations (Create, Read, Update, Delete)
- File-based data storage (CSV, JSON)
- Database connections and context
- Data validation

### Friday: Full-Stack Integration Workshop
**4 hours**
- Build complete full-stack application
- Frontend sends data to backend
- Backend processes and stores data
- Frontend displays updated data
- Sprint Review presentations

---

## Learning Objectives

By the end of Week 7, students will be able to:

1. **Flask Basics**
   - Set up Flask applications
   - Create routes and endpoints
   - Handle HTTP requests
   - Return JSON responses

2. **RESTful APIs**
   - Design RESTful endpoints
   - Implement CRUD operations
   - Use appropriate HTTP methods
   - Return proper status codes

3. **Frontend-Backend Communication**
   - Use Fetch API in JavaScript
   - Handle CORS issues
   - Send data from frontend to backend
   - Display backend data in frontend

4. **Data Persistence**
   - Use SQLite with Flask
   - Perform database operations
   - Store data in files
   - Validate data before storage

5. **Error Handling**
   - Handle errors on backend
   - Return meaningful error messages
   - Handle errors on frontend
   - Provide user feedback

---

## Key Concepts

### Flask Framework
- WSGI application
- Routes and view functions
- Request/response cycle
- Decorators (@app.route)
- Flask development server

### HTTP Methods
- GET (retrieve data)
- POST (create data)
- PUT/PATCH (update data)
- DELETE (remove data)

### RESTful APIs
- Resource-based URLs
- Stateless communication
- JSON data format
- HTTP status codes
- API versioning

### CORS
- Same-origin policy
- Cross-origin requests
- CORS headers
- flask-cors configuration

### SQLite
- Lightweight database
- SQL queries in Python
- Connection management
- Prepared statements

---

## Deliverables

### Weekly Assignment: Full-Stack Application - JavaScript Frontend + Python Backend (100 points)

Build a full-stack application (choose one):
- **Task Management System**
- **Recipe Collection App**
- **Personal Budget Tracker**

Requirements:

1. **JavaScript Frontend** (25 points)
   - Clean, responsive UI
   - Forms for data input
   - Display data from backend
   - Update UI without page reload
   - Error handling and user feedback

2. **Flask Backend with RESTful API** (30 points)
   - At least 3 API endpoints:
     - GET /api/items (retrieve all)
     - POST /api/items (create new)
     - DELETE /api/items/<id> (delete)
   - Proper HTTP methods
   - JSON responses
   - Status codes (200, 201, 404, 500)

3. **Data Persistence** (20 points)
   - SQLite database OR CSV file storage
   - CRUD operations implemented
   - Data validation
   - Handle edge cases

4. **Professional Error Handling** (15 points)
   - Backend validates input
   - Returns meaningful error messages
   - Frontend displays errors to user
   - Try-except blocks in Python
   - Try-catch in JavaScript

5. **Documentation & Deployment** (10 points)
   - Complete API documentation (endpoints, methods, responses)
   - README with setup instructions
   - Environment variable management
   - Requirements.txt file
   - Professional Git workflow

---

## Resources

### Flask
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
- [Flask Quickstart](https://flask.palletsprojects.com/en/3.0.x/quickstart/)

### RESTful APIs
- [REST API Tutorial](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)

### CORS
- [Flask-CORS](https://flask-cors.readthedocs.io/)
- [Understanding CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### SQLite
- [SQLite Tutorial](https://www.sqlitetutorial.net/)
- [Python sqlite3 module](https://docs.python.org/3/library/sqlite3.html)

### Testing APIs
- [Postman](https://www.postman.com/)
- [Thunder Client (VS Code)](https://www.thunderclient.com/)

---

## Code Examples

### Basic Flask Application
```python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

# Simple GET route
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Flask!'}), 200

# GET with parameter
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    # TODO: Get user from database
    user = {'id': user_id, 'name': 'Maria Schmidt'}
    return jsonify(user), 200

# POST route - create resource
@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    # Validate data
    if not data or 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400
    
    # TODO: Save to database
    new_user = {
        'id': 123,
        'name': data['name'],
        'email': data.get('email', '')
    }
    
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

### Flask with SQLite
```python
import sqlite3
from flask import Flask, jsonify, request, g
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATABASE = 'tasks.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    with app.app_context():
        db = get_db()
        db.execute('''
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                completed BOOLEAN DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        db.commit()

# GET all tasks
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    db = get_db()
    cursor = db.execute('SELECT * FROM tasks ORDER BY created_at DESC')
    tasks = [dict(row) for row in cursor.fetchall()]
    return jsonify(tasks), 200

# POST new task
@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    
    if not data or 'title' not in data:
        return jsonify({'error': 'Title is required'}), 400
    
    db = get_db()
    cursor = db.execute(
        'INSERT INTO tasks (title, completed) VALUES (?, ?)',
        (data['title'], data.get('completed', False))
    )
    db.commit()
    
    return jsonify({
        'id': cursor.lastrowid,
        'title': data['title'],
        'completed': data.get('completed', False)
    }), 201

# DELETE task
@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    db = get_db()
    db.execute('DELETE FROM tasks WHERE id = ?', (task_id,))
    db.commit()
    return jsonify({'message': 'Task deleted'}), 200

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=5000)
```

### Frontend: Fetch API to Connect to Backend
```javascript
const API_URL = 'http://localhost:5000/api';

// GET all tasks
async function loadTasks() {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        
        if (!response.ok) {
            throw new Error('Failed to load tasks');
        }
        
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to load tasks');
    }
}

// POST new task
async function createTask(title) {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false })
        });
        
        if (!response.ok) {
            throw new Error('Failed to create task');
        }
        
        const newTask = await response.json();
        console.log('Task created:', newTask);
        
        // Reload tasks
        loadTasks();
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to create task');
    }
}

// DELETE task
async function deleteTask(taskId) {
    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete task');
        }
        
        loadTasks();
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to delete task');
    }
}

// Form submission
document.querySelector('#task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#task-title').value;
    await createTask(title);
    
    // Clear form
    e.target.reset();
});

// Initial load
loadTasks();
```

### Error Handling Pattern
```python
@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    try:
        db = get_db()
        cursor = db.execute('SELECT * FROM tasks WHERE id = ?', (task_id,))
        task = cursor.fetchone()
        
        if task is None:
            return jsonify({'error': 'Task not found'}), 404
        
        return jsonify(dict(task)), 200
        
    except sqlite3.Error as e:
        return jsonify({'error': 'Database error', 'details': str(e)}), 500
    except Exception as e:
        return jsonify({'error': 'Internal server error'}), 500
```

### Environment Variables
```python
# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    DATABASE = os.getenv('DATABASE', 'tasks.db')
    DEBUG = os.getenv('DEBUG', 'True') == 'True'

# app.py
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
```

```bash
# .env file
SECRET_KEY=your-secret-key-here
DATABASE=tasks.db
DEBUG=True
```

---

## API Documentation Example

```markdown
# Task Manager API Documentation

## Base URL
`http://localhost:5000/api`

## Endpoints

### GET /tasks
Retrieve all tasks

**Response:** 200 OK
```json
[
  {
    "id": 1,
    "title": "Learn Flask",
    "completed": false,
    "created_at": "2025-03-31 10:00:00"
  }
]
```

### POST /tasks
Create a new task

**Request Body:**
```json
{
  "title": "Learn Flask",
  "completed": false
}
```

**Response:** 201 Created
```json
{
  "id": 1,
  "title": "Learn Flask",
  "completed": false
}
```

### DELETE /tasks/:id
Delete a task

**Response:** 200 OK
```json
{
  "message": "Task deleted"
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": "Title is required"
}
```

### 404 Not Found
```json
{
  "error": "Task not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```
```

---

## Notes for Instructor

- Start with simplest Flask "Hello World"
- Gradually build complexity
- Demonstrate Postman/Thunder Client for testing APIs
- Show browser Network tab to see requests
- Emphasize RESTful design principles
- Explain CORS thoroughly (common source of confusion)
- Live-code full-stack integration
- Show debugging techniques for both frontend and backend
- Discuss when to use SQLite vs files
- Connect Python concepts from Week 2 to web context
- Prepare students for async JavaScript (Week 9)
- Discuss security basics (don't commit sensitive data)

---

## Common Issues & Solutions

**Issue:** CORS errors
**Solution:** Install and configure flask-cors properly

**Issue:** Port already in use
**Solution:** Change port or kill existing process

**Issue:** Database locked
**Solution:** Proper connection management with app context

**Issue:** 404 for all routes
**Solution:** Check if Flask server is running, verify URLs

---

## Connection to Other Weeks

- **Week 3**: Database concepts now implemented
- **Week 4**: Data processing skills applied to backend
- **Week 6**: Frontend JavaScript now connects to backend
- **Week 9**: Will learn async patterns for better data handling
- **Week 12**: Will use PostgreSQL instead of SQLite

This week brings together frontend and backend, completing the full-stack loop for the first time!