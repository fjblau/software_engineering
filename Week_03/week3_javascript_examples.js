// Week 3: Understanding Data Architecture - JavaScript Examples
// Topics: JSON, Data Structures, Data Architecture Fundamentals

console.log("=== Week 3: Data Architecture Examples (JavaScript) ===\n");

// ============================================
// 1. WORKING WITH JSON DATA
// ============================================
console.log("--- 1. Working with JSON Data ---\n");

// JSON data structure (User with nested data)
const user = {
    id: 1,
    name: "Maria Schmidt",
    email: "maria@example.com",
    address: {
        street: "Hauptstraße 10",
        city: "Feldkirch",
        country: "Austria"
    },
    orders: [
        { id: 101, total: 49.99, date: "2025-03-01" },
        { id: 102, total: 89.50, date: "2025-03-05" }
    ]
};

console.log("User object:", user);
console.log("User name:", user.name); // Direct access

// Converting to JSON string
const jsonString = JSON.stringify(user, null, 2);
console.log("\nJSON string representation:");
console.log(jsonString);

// Parsing JSON string back to object
const parsedUser = JSON.parse(jsonString);
console.log("\nParsed user from JSON:", parsedUser.name);

// Accessing nested data
console.log("User's city:", user.address.city); // "Feldkirch"
console.log("First order total:", user.orders[0].total); // 49.99


// ============================================
// 2. PRODUCT CATALOG EXAMPLE
// ============================================
console.log("\n--- 2. Product Catalog (JSON Structure) ---\n");

const productCatalog = {
    store: "TechStore",
    products: [
        {
            id: 1,
            name: "Laptop",
            price: 999.99,
            stock: 15,
            category: "Electronics",
            inStock: true
        },
        {
            id: 2,
            name: "Mouse",
            price: 29.99,
            stock: 0,
            category: "Accessories",
            inStock: false
        },
        {
            id: 3,
            name: "Keyboard",
            price: 79.99,
            stock: 8,
            category: "Accessories",
            inStock: true
        }
    ]
};

console.log("Store:", productCatalog.store);
console.log("Number of products:", productCatalog.products.length);

// Access specific product
const laptop = productCatalog.products[0];
console.log(`Product: ${laptop.name}, Price: $${laptop.price}, In Stock: ${laptop.inStock}`);

// Find products in stock
const inStockProducts = productCatalog.products.filter(p => p.inStock);
console.log("In-stock products:", inStockProducts.map(p => p.name).join(", "));


// ============================================
// 3. BLOG POSTS WITH COMMENTS
// ============================================
console.log("\n--- 3. Blog Posts with Comments (JSON Structure) ---\n");

const blogPost = {
    id: 1,
    title: "Introduction to Data Architecture",
    author: "Jane Developer",
    date: "2025-03-03",
    content: "Data architecture is the foundation of modern applications...",
    tags: ["database", "architecture", "data"],
    comments: [
        {
            id: 1,
            author: "John Reader",
            text: "Great explanation!",
            timestamp: "2025-03-03 10:30"
        },
        {
            id: 2,
            author: "Sarah Student",
            text: "This really helped me understand schemas.",
            timestamp: "2025-03-03 14:15"
        }
    ]
};

console.log(`Post: "${blogPost.title}" by ${blogPost.author}`);
console.log(`Tags: ${blogPost.tags.join(", ")}`);
console.log(`Comments: ${blogPost.comments.length}`);

// Display comments
blogPost.comments.forEach(comment => {
    console.log(`  - ${comment.author}: ${comment.text}`);
});


// ============================================
// 4. UNDERSTANDING DATA TYPES
// ============================================
console.log("\n--- 4. Data Types in JSON ---\n");

const dataTypesExample = {
    stringExample: "Text data",
    numberExample: 42,
    booleanExample: true,
    nullExample: null,
    arrayExample: [1, 2, 3],
    objectExample: { nested: "data" },
    dateString: "2025-03-01"
};

console.log("String:", typeof dataTypesExample.stringExample);
console.log("Number:", typeof dataTypesExample.numberExample);
console.log("Boolean:", typeof dataTypesExample.booleanExample);
console.log("Null:", dataTypesExample.nullExample);
console.log("Array:", Array.isArray(dataTypesExample.arrayExample));
console.log("Object:", typeof dataTypesExample.objectExample);


// ============================================
// 5. CONVERTING BETWEEN FORMATS
// ============================================
console.log("\n--- 5. Converting Between Formats ---\n");

// JavaScript array to CSV
const records = [
    { id: 1, name: "Alice", department: "Engineering" },
    { id: 2, name: "Bob", department: "Sales" },
    { id: 3, name: "Charlie", department: "Engineering" }
];

// Convert to CSV string
function convertToCSV(data) {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(row => Object.values(row).join(","));
    return [headers, ...rows].join("\n");
}

const csvString = convertToCSV(records);
console.log("CSV format:");
console.log(csvString);

// JSON representation
console.log("\nJSON format:");
console.log(JSON.stringify(records, null, 2));


// ============================================
// 6. ENTITY-RELATIONSHIP CONCEPTS
// ============================================
console.log("\n--- 6. Entity-Relationship Concepts ---\n");

// Simulating a one-to-many relationship (User has many Orders)
const ecommerceData = {
    users: [
        { id: 1, name: "Maria Schmidt", email: "maria@example.com" },
        { id: 2, name: "Hans Mueller", email: "hans@example.com" }
    ],
    orders: [
        { id: 101, userId: 1, total: 49.99, status: "completed" },
        { id: 102, userId: 1, total: 89.50, status: "pending" },
        { id: 103, userId: 2, total: 120.00, status: "completed" }
    ]
};

// Find orders for a specific user
function getOrdersForUser(userId) {
    return ecommerceData.orders.filter(order => order.userId === userId);
}

const mariaOrders = getOrdersForUser(1);
console.log("Maria's orders:", mariaOrders);
console.log("Total spent:", mariaOrders.reduce((sum, order) => sum + order.total, 0));


// ============================================
// 7. DATA VALIDATION
// ============================================
console.log("\n--- 7. Data Validation ---\n");

// Simple validation function
function validateUser(user) {
    const errors = [];
    
    if (!user.name || user.name.trim() === "") {
        errors.push("Name is required");
    }
    
    if (!user.email || !user.email.includes("@")) {
        errors.push("Valid email is required");
    }
    
    if (user.age && (user.age < 0 || user.age > 150)) {
        errors.push("Age must be between 0 and 150");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

const validUser = { name: "Alice", email: "alice@example.com", age: 28 };
const invalidUser = { name: "", email: "invalid", age: 200 };

console.log("Valid user validation:", validateUser(validUser));
console.log("Invalid user validation:", validateUser(invalidUser));


// ============================================
// 8. SCHEMA DESIGN CONCEPTS
// ============================================
console.log("\n--- 8. Database Schema Concepts ---\n");

// Demonstrating normalized data structure (no redundancy)
const normalizedSchema = {
    description: "E-Commerce Database Schema",
    tables: {
        users: {
            fields: [
                { name: "id", type: "INTEGER", constraints: "PRIMARY KEY" },
                { name: "name", type: "VARCHAR(100)", constraints: "NOT NULL" },
                { name: "email", type: "VARCHAR(100)", constraints: "UNIQUE, NOT NULL" },
                { name: "created_at", type: "DATE", constraints: "" }
            ]
        },
        products: {
            fields: [
                { name: "id", type: "INTEGER", constraints: "PRIMARY KEY" },
                { name: "name", type: "VARCHAR(100)", constraints: "NOT NULL" },
                { name: "price", type: "DECIMAL(10,2)", constraints: "NOT NULL" },
                { name: "stock", type: "INTEGER", constraints: "NOT NULL" }
            ]
        },
        orders: {
            fields: [
                { name: "id", type: "INTEGER", constraints: "PRIMARY KEY" },
                { name: "user_id", type: "INTEGER", constraints: "FOREIGN KEY -> users" },
                { name: "total", type: "DECIMAL(10,2)", constraints: "NOT NULL" },
                { name: "status", type: "VARCHAR(20)", constraints: "NOT NULL" }
            ]
        }
    }
};

console.log("Schema structure:");
console.log(`Store: ${normalizedSchema.description}`);
for (const [tableName, table] of Object.entries(normalizedSchema.tables)) {
    console.log(`\nTable: ${tableName}`);
    table.fields.forEach(field => {
        console.log(`  - ${field.name} (${field.type}) ${field.constraints}`);
    });
}


// ============================================
// 9. SQL vs NOSQL COMPARISON (Conceptual)
// ============================================
console.log("\n--- 9. SQL vs NoSQL Comparison ---\n");

const comparison = {
    SQL: {
        structure: "Structured (Tables, Rows, Columns)",
        schema: "Fixed schema",
        relationships: "Foreign keys and joins",
        scalability: "Vertical scaling",
        examples: ["PostgreSQL", "MySQL", "Oracle"],
        bestFor: ["Financial data", "Complex queries", "Data integrity"]
    },
    NoSQL: {
        structure: "Flexible (Documents, Key-Value)",
        schema: "Schema-less",
        relationships: "Denormalized data",
        scalability: "Horizontal scaling",
        examples: ["MongoDB", "Redis", "DynamoDB"],
        bestFor: ["Real-time data", "Flexible schemas", "High volume"]
    }
};

console.log("SQL Databases:");
Object.entries(comparison.SQL).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

console.log("\nNoSQL Databases:");
Object.entries(comparison.NoSQL).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});


console.log("\n=== End of Week 3 Examples ===");