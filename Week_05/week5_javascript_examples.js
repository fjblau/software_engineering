// Week 5: Web Fundamentals - JavaScript Examples
// Topics: DOM, HTTP Concepts, Web Architecture, Package Management

console.log("=== Week 5: Web Fundamentals (JavaScript) ===\n");

// ============================================
// 1. UNDERSTANDING THE DOCUMENT OBJECT MODEL (DOM)
// ============================================
console.log("--- 1. DOM Structure ---\n");

// In a browser environment, you can access the DOM through:
// - document: The entire HTML document
// - window: The global browser object
// - document.body: The <body> element
// - document.head: The <head> element

console.log("Note: DOM examples work best in a browser console");
console.log("Key DOM objects:");
console.log("  - document: Represents the entire page");
console.log("  - element.getElementById(id)");
console.log("  - element.querySelector(selector)");
console.log("  - element.querySelectorAll(selector)");


// ============================================
// 2. DOM SELECTION METHODS
// ============================================
console.log("\n--- 2. DOM Selection Methods ---\n");

// Examples of DOM query methods (would run in browser):
// document.getElementById('hero') - Select by ID
// document.querySelector('.project') - Select by CSS selector
// document.querySelectorAll('article') - Select all matching elements
// document.getElementsByClassName('tag') - Select by class
// document.getElementsByTagName('section') - Select by tag name

console.log("Selection methods:");
console.log("  getElementById(id) - Single element by ID");
console.log("  querySelector(selector) - First element matching CSS selector");
console.log("  querySelectorAll(selector) - All elements matching CSS selector");
console.log("  getElementsByClassName(class) - All elements with class");
console.log("  getElementsByTagName(tag) - All elements with tag");


// ============================================
// 3. DOM MANIPULATION
// ============================================
console.log("\n--- 3. DOM Manipulation ---\n");

// Example: Change element properties
// element.textContent = "New text"
// element.innerHTML = "<h1>New HTML</h1>"
// element.className = "new-class"
// element.classList.add("class-name")
// element.style.color = "blue"

console.log("DOM manipulation methods:");
console.log("  textContent - Get/set plain text");
console.log("  innerHTML - Get/set HTML content");
console.log("  className - Get/set class attribute");
console.log("  classList.add/remove/toggle - Manage classes");
console.log("  style.propertyName - Set inline styles");
console.log("  setAttribute(name, value) - Set any attribute");


// ============================================
// 4. EVENTS AND EVENT LISTENERS
// ============================================
console.log("\n--- 4. Events and Event Listeners ---\n");

// Common events in web applications:
const eventExamples = {
    "click": "User clicks an element",
    "submit": "Form is submitted",
    "change": "Input value changes",
    "keydown": "Keyboard key is pressed",
    "mouseover": "Mouse enters element",
    "scroll": "User scrolls page",
    "load": "Page fully loaded",
    "resize": "Browser window resized",
    "focus": "Element receives focus",
    "blur": "Element loses focus"
};

console.log("Common events:");
Object.entries(eventExamples).forEach(([event, description]) => {
    console.log(`  ${event}: ${description}`);
});

// Example event listener (would run in browser):
// element.addEventListener('click', function(event) {
//     console.log('Element clicked!');
// });


// ============================================
// 5. UNDERSTANDING HTTP
// ============================================
console.log("\n--- 5. HTTP Protocol Basics ---\n");

const httpConcepts = {
    "HTTP": "HyperText Transfer Protocol - The protocol used for web communication",
    "Request": "Message sent by client (browser) to server",
    "Response": "Message sent by server back to client",
    "Method": "Action to perform (GET, POST, PUT, DELETE, etc.)",
    "Status Code": "Number indicating result of request (200, 404, 500, etc.)",
    "Headers": "Metadata about the request/response",
    "Body": "Data being sent (in POST/PUT requests)"
};

console.log("HTTP Concepts:");
Object.entries(httpConcepts).forEach(([concept, description]) => {
    console.log(`  ${concept}: ${description}`);
});

// ============================================
// 6. HTTP METHODS
// ============================================
console.log("\n--- 6. HTTP Methods (CRUD Operations) ---\n");

const httpMethods = {
    "GET": {
        description: "Retrieve data from server",
        usage: "Fetching web pages, API data",
        body: "No body"
    },
    "POST": {
        description: "Send data to server to create new resource",
        usage: "Submitting forms, creating records",
        body: "Contains data to create"
    },
    "PUT": {
        description: "Update existing resource on server",
        usage: "Updating user profile, editing posts",
        body: "Contains updated data"
    },
    "DELETE": {
        description: "Delete resource from server",
        usage: "Removing posts, deleting accounts",
        body: "Usually no body"
    },
    "PATCH": {
        description: "Partially update resource",
        usage: "Partial updates to records",
        body: "Contains partial data"
    }
};

console.log("HTTP Methods:");
Object.entries(httpMethods).forEach(([method, details]) => {
    console.log(`\n  ${method}: ${details.description}`);
    console.log(`    Usage: ${details.usage}`);
    console.log(`    Body: ${details.body}`);
});


// ============================================
// 7. HTTP STATUS CODES
// ============================================
console.log("\n--- 7. HTTP Status Codes ---\n");

const statusCodes = {
    "200 OK": "Request successful",
    "201 Created": "Resource created successfully",
    "204 No Content": "Successful request with no content to return",
    "301 Moved Permanently": "Resource moved to new URL",
    "304 Not Modified": "Resource hasn't changed (use cached version)",
    "400 Bad Request": "Invalid request syntax",
    "401 Unauthorized": "Authentication required",
    "403 Forbidden": "Access denied (authorized but no permission)",
    "404 Not Found": "Resource not found",
    "409 Conflict": "Request conflicts with current state",
    "429 Too Many Requests": "Rate limit exceeded",
    "500 Internal Server Error": "Server error",
    "502 Bad Gateway": "Invalid response from upstream server",
    "503 Service Unavailable": "Server temporarily unavailable"
};

console.log("Common Status Codes:");
Object.entries(statusCodes).forEach(([code, description]) => {
    console.log(`  ${code}: ${description}`);
});


// ============================================
// 8. FETCH API - MAKING HTTP REQUESTS
// ============================================
console.log("\n--- 8. Fetch API for HTTP Requests ---\n");

// Example: GET request
const fetchExamples = `
// GET request example
fetch('/api/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request example
fetch('/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Maria',
        email: 'maria@example.com'
    })
})
.then(response => response.json())
.then(data => console.log('Created:', data));

// Using async/await
async function getUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
`;

console.log("Fetch API Examples:");
console.log(fetchExamples);


// ============================================
// 9. UNDERSTANDING URLs & DOMAINS
// ============================================
console.log("\n--- 9. URLs and Web Addresses ---\n");

const urlExample = "https://www.example.com:8080/path/to/page?name=value#section";

console.log("URL Structure:");
console.log(`  Full URL: ${urlExample}`);
console.log("  Components:");
console.log("    Protocol: https://");
console.log("    Domain: example.com");
console.log("    Subdomain: www");
console.log("    Port: 8080");
console.log("    Path: /path/to/page");
console.log("    Query: ?name=value");
console.log("    Fragment: #section");

console.log("\nCommon Protocols:");
console.log("  http:// - Unencrypted web protocol");
console.log("  https:// - Encrypted web protocol (secure)");
console.log("  ftp:// - File Transfer Protocol");


// ============================================
// 10. CLIENT-SERVER MODEL
// ============================================
console.log("\n--- 10. Client-Server Architecture ---\n");

const clientServer = {
    Client: {
        what: "Browser running on user's computer",
        sends: "HTTP requests (GET, POST, etc.)",
        receives: "HTTP responses with content",
        examples: ["HTML", "CSS", "JavaScript", "JSON", "Images"]
    },
    Server: {
        what: "Computer running web application",
        sends: "HTTP responses with requested data",
        receives: "HTTP requests from clients",
        tasks: ["Process requests", "Query databases", "Generate responses", "Serve files"]
    },
    Network: {
        what: "Internet connection between client and server",
        protocol: "TCP/IP",
        latency: "Time for data to travel (milliseconds)"
    }
};

console.log("Client-Server Model:");
Object.entries(clientServer).forEach(([component, details]) => {
    console.log(`\n${component}:`);
    Object.entries(details).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            console.log(`  ${key}: ${value.join(", ")}`);
        } else {
            console.log(`  ${key}: ${value}`);
        }
    });
});


// ============================================
// 11. REQUEST/RESPONSE CYCLE
// ============================================
console.log("\n--- 11. Request/Response Cycle ---\n");

const requestResponseCycle = [
    "1. User enters URL or clicks link in browser",
    "2. Browser creates HTTP request",
    "3. Request travels over internet to server",
    "4. Server receives and processes request",
    "5. Server generates response (HTML, JSON, etc.)",
    "6. Server sends response back to browser",
    "7. Browser receives response",
    "8. Browser renders HTML and executes JavaScript",
    "9. Page appears in user's browser",
    "10. Browser may make additional requests for images, CSS, JS files"
];

console.log("Request/Response Cycle:");
requestResponseCycle.forEach(step => console.log("  " + step));


// ============================================
// 12. REST API CONCEPTS
// ============================================
console.log("\n--- 12. REST API Principles ---\n");

const restPrinciples = {
    "Client-Server": "Separation of concerns",
    "Stateless": "Each request contains all needed information",
    "Cacheable": "Responses can be cached for performance",
    "Uniform Interface": "Consistent API design",
    "Resource-Based URLs": "/api/users/1 instead of /api/getUser?id=1",
    "HTTP Methods": "Use GET, POST, PUT, DELETE meaningfully"
};

console.log("REST API Best Practices:");
Object.entries(restPrinciples).forEach(([principle, description]) => {
    console.log(`  ${principle}: ${description}`);
});

console.log("\nExample REST endpoints:");
console.log("  GET /api/users - Get all users");
console.log("  GET /api/users/1 - Get specific user");
console.log("  POST /api/users - Create new user");
console.log("  PUT /api/users/1 - Update user 1");
console.log("  DELETE /api/users/1 - Delete user 1");


// ============================================
// 13. HEADERS AND COOKIES
// ============================================
console.log("\n--- 13. HTTP Headers and Cookies ---\n");

const commonHeaders = {
    "Content-Type": "Specifies format of body (application/json, text/html)",
    "Authorization": "Credentials for authentication (Bearer token, etc.)",
    "Accept": "Types of content client can handle",
    "User-Agent": "Information about client browser",
    "Cache-Control": "How to cache the response",
    "CORS": "Cross-Origin Resource Sharing settings"
};

console.log("Common HTTP Headers:");
Object.entries(commonHeaders).forEach(([header, description]) => {
    console.log(`  ${header}: ${description}`);
});

console.log("\nCookies:");
console.log("  Cookies store small data on client browser");
console.log("  Sent automatically with every request to same domain");
console.log("  Uses: User preferences, session tokens, tracking");
console.log("  Set-Cookie header used to create cookies");


// ============================================
// 14. SAME-ORIGIN POLICY AND CORS
// ============================================
console.log("\n--- 14. Same-Origin Policy & CORS ---\n");

console.log("Same-Origin Policy:");
console.log("  Security feature preventing cross-site attacks");
console.log("  Same origin = same protocol + domain + port");
console.log("  Examples:");
console.log("    ✓ https://example.com/page1 to /page2 (same origin)");
console.log("    ✗ https://example.com to http://example.com (different protocol)");
console.log("    ✗ https://example.com to https://other.com (different domain)");
console.log("    ✗ https://example.com:8080 to https://example.com:3000 (different port)");

console.log("\nCORS (Cross-Origin Resource Sharing):");
console.log("  Allows controlled access from other origins");
console.log("  Server sets Access-Control-Allow-Origin header");
console.log("  Prevents unauthorized access to resources");


// ============================================
// 15. WEB DEVELOPMENT WORKFLOW
// ============================================
console.log("\n--- 15. Modern Web Development Workflow ---\n");

const workflow = [
    "1. Set up development environment (Node.js, npm, code editor)",
    "2. Initialize project with package.json",
    "3. Install dependencies (npm install)",
    "4. Create source files (HTML, CSS, JavaScript)",
    "5. Run local development server",
    "6. Test in browser (usually localhost:3000 or similar)",
    "7. Use developer tools (F12) to debug",
    "8. Commit code changes to Git",
    "9. Push to repository (GitHub, etc.)",
    "10. Deploy to web server or hosting platform",
    "11. Monitor for errors and user feedback",
    "12. Make updates and repeat"
];

console.log("Modern Web Development Workflow:");
workflow.forEach(step => console.log("  " + step));


// ============================================
// 16. BROWSER DEVELOPER TOOLS
// ============================================
console.log("\n--- 16. Browser Developer Tools ---\n");

const devTools = {
    "Inspector": "View and edit HTML/CSS",
    "Console": "Execute JavaScript, see errors and logs",
    "Debugger": "Step through code, set breakpoints",
    "Network": "Monitor API requests, see response status",
    "Performance": "Analyze page speed and performance",
    "Accessibility": "Check for accessibility issues",
    "Storage": "View cookies, local storage, session storage"
};

console.log("Developer Tools (Press F12 or Cmd+Option+I):");
Object.entries(devTools).forEach(([tool, purpose]) => {
    console.log(`  ${tool}: ${purpose}`);
});


// ============================================
// 17. PERFORMANCE BEST PRACTICES
// ============================================
console.log("\n--- 17. Web Performance Best Practices ---\n");

const performanceTips = [
    "Minimize HTTP requests (combine files, use sprites)",
    "Minimize file sizes (compress images, minify code)",
    "Lazy load images and content",
    "Use caching effectively",
    "Optimize database queries",
    "Use Content Delivery Network (CDN)",
    "Enable gzip compression",
    "Minimize JavaScript execution",
    "Use async/defer for script loading",
    "Optimize CSS (remove unused styles)",
    "Monitor with performance metrics"
];

console.log("Performance Best Practices:");
performanceTips.forEach((tip, index) => {
    console.log(`  ${index + 1}. ${tip}`);
});


console.log("\n=== End of Week 5 Examples ===");