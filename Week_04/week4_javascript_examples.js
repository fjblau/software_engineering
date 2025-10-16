// Week 4: Data Structures & Storage - JavaScript Examples
// Topics: Arrays, Objects, CSV/JSON Processing, Algorithms, JOIN Operations

console.log("=== Week 4: Data Structures & Storage (JavaScript) ===\n");

// ============================================
// 1. ARRAYS - CREATION AND ACCESS
// ============================================
console.log("--- 1. Arrays: Creation and Access ---\n");

const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
console.log("Array:", fruits);
console.log("First element:", fruits[0]); // Apple
console.log("Last element:", fruits[fruits.length - 1]); // Date
console.log("Array length:", fruits.length);

const numbers = [10, 20, 30, 40, 50];
console.log("Numbers:", numbers);
console.log("Element at index 2:", numbers[2]); // 30


// ============================================
// 2. ARRAY METHODS - MUTATING
// ============================================
console.log("\n--- 2. Array Methods: Mutating Methods ---\n");

// Push: Add to end
const animals = ['Cat', 'Dog'];
animals.push('Bird');
console.log("After push:", animals); // ['Cat', 'Dog', 'Bird']

// Pop: Remove from end
const lastAnimal = animals.pop();
console.log("Popped:", lastAnimal); // 'Bird'
console.log("After pop:", animals); // ['Cat', 'Dog']

// Unshift: Add to beginning
animals.unshift('Elephant');
console.log("After unshift:", animals); // ['Elephant', 'Cat', 'Dog']

// Splice: Remove and/or insert
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(1, 2, 'Orange'); // Start at index 1, remove 2 items, insert 'Orange'
console.log("After splice:", colors); // ['Red', 'Orange', 'Yellow']


// ============================================
// 3. ARRAY METHODS - NON-MUTATING
// ============================================
console.log("\n--- 3. Array Methods: Non-Mutating Methods ---\n");

// Slice: Get a portion without modifying
const numbers2 = [1, 2, 3, 4, 5];
const sliced = numbers2.slice(1, 4); // From index 1 to 3
console.log("Original:", numbers2);
console.log("Sliced:", sliced); // [2, 3, 4]

// Includes: Check if value exists
const hasThree = numbers2.includes(3);
console.log("Includes 3?", hasThree); // true

// IndexOf: Find position
const indexOfTwo = numbers2.indexOf(2);
console.log("Index of 2:", indexOfTwo); // 1


// ============================================
// 4. ARRAY ITERATION METHODS
// ============================================
console.log("\n--- 4. Array Iteration Methods ---\n");

const scores = [85, 92, 78, 95, 88];

// forEach: Execute function for each element
console.log("Using forEach:");
scores.forEach((score, index) => {
    console.log(`  Score ${index + 1}: ${score}`);
});

// map: Transform each element
const doubled = scores.map(score => score * 2);
console.log("Doubled scores:", doubled);

// filter: Keep only elements matching condition
const passing = scores.filter(score => score >= 80);
console.log("Scores >= 80:", passing); // [85, 92, 95, 88]

// find: Get first element matching condition
const firstPassing = scores.find(score => score >= 90);
console.log("First score >= 90:", firstPassing); // 92

// reduce: Combine elements into single value
const sum = scores.reduce((total, score) => total + score, 0);
const average = sum / scores.length;
console.log("Sum:", sum, "Average:", average);


// ============================================
// 5. OBJECTS - CREATION AND ACCESS
// ============================================
console.log("\n--- 5. Objects: Creation and Access ---\n");

const person = {
    name: 'Maria Schmidt',
    age: 28,
    city: 'Feldkirch',
    email: 'maria@example.com'
};

console.log("Person object:", person);
console.log("Name (dot notation):", person.name);
console.log("Age (bracket notation):", person['age']);

// Dynamic property access
const key = 'city';
console.log("City (dynamic):", person[key]);


// ============================================
// 6. NESTED OBJECTS AND ARRAYS
// ============================================
console.log("\n--- 6. Nested Structures ---\n");

const employee = {
    id: 1001,
    name: 'Hans Mueller',
    department: 'Engineering',
    address: {
        street: 'Hauptstraße 15',
        city: 'Dornbirn',
        country: 'Austria'
    },
    skills: ['JavaScript', 'Python', 'SQL'],
    projects: [
        { name: 'Website Redesign', hours: 120 },
        { name: 'Database Migration', hours: 80 }
    ]
};

console.log("Employee:", employee);
console.log("Department:", employee.department);
console.log("City:", employee.address.city);
console.log("First skill:", employee.skills[0]);
console.log("First project:", employee.projects[0].name);


// ============================================
// 7. READING CSV DATA
// ============================================
console.log("\n--- 7. Reading CSV Data (Simulated) ---\n");

// Simulated CSV data (in real apps, would read from file)
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    
    const records = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const record = {};
        headers.forEach((header, index) => {
            record[header.trim()] = values[index].trim();
        });
        records.push(record);
    }
    
    return records;
}

const csvData = `id,name,department,salary
1,Maria Schmidt,Engineering,75000
2,Hans Mueller,Sales,60000
3,Anna Weber,Marketing,55000`;

const employees = parseCSV(csvData);
console.log("Parsed CSV data:");
employees.forEach(emp => {
    console.log(`  ${emp.name} - ${emp.department} - $${emp.salary}`);
});


// ============================================
// 8. CONVERTING TO JSON
// ============================================
console.log("\n--- 8. Converting to JSON ---\n");

const jsonString = JSON.stringify(employees, null, 2);
console.log("JSON representation:");
console.log(jsonString);


// ============================================
// 9. FILTERING AND SORTING
// ============================================
console.log("\n--- 9. Filtering and Sorting ---\n");

const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 29, category: 'Electronics' },
    { id: 3, name: 'Desk', price: 299, category: 'Furniture' },
    { id: 4, name: 'Chair', price: 199, category: 'Furniture' }
];

// Filter by category
const electronics = products.filter(p => p.category === 'Electronics');
console.log("Electronics:", electronics.map(p => p.name).join(", "));

// Filter by price
const affordable = products.filter(p => p.price < 100);
console.log("Under $100:", affordable.map(p => p.name).join(", "));

// Sort by price ascending
const byPriceAsc = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted by price (ascending):", byPriceAsc.map(p => `${p.name} ($${p.price})`).join(", "));

// Sort by price descending
const byPriceDesc = [...products].sort((a, b) => b.price - a.price);
console.log("Sorted by price (descending):", byPriceDesc.map(p => p.name).join(", "));


// ============================================
// 10. SEARCH ALGORITHMS
// ============================================
console.log("\n--- 10. Search Algorithms ---\n");

// Linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const testArray = [10, 20, 30, 40, 50];
console.log("Linear search for 30:", linearSearch(testArray, 30)); // 2
console.log("Linear search for 100:", linearSearch(testArray, 100)); // -1

// Find product by ID
function findProductById(products, id) {
    return products.find(p => p.id === id);
}

const found = findProductById(products, 3);
console.log("Found product:", found.name); // "Desk"


// ============================================
// 11. AGGREGATION FUNCTIONS
// ============================================
console.log("\n--- 11. Aggregation Functions ---\n");

const sales = [
    { product: 'Laptop', amount: 999 },
    { product: 'Mouse', amount: 29 },
    { product: 'Keyboard', amount: 79 }
];

// Sum
const totalSales = sales.reduce((sum, sale) => sum + sale.amount, 0);
console.log("Total sales:", totalSales);

// Average
const avgSale = totalSales / sales.length;
console.log("Average sale:", avgSale.toFixed(2));

// Max and Min
const maxSale = Math.max(...sales.map(s => s.amount));
const minSale = Math.min(...sales.map(s => s.amount));
console.log("Max sale:", maxSale, "Min sale:", minSale);

// Count by category
const productsByCategory = {};
products.forEach(p => {
    productsByCategory[p.category] = (productsByCategory[p.category] || 0) + 1;
});
console.log("Products by category:", productsByCategory);


// ============================================
// 12. SIMULATING SQL JOIN OPERATION
// ============================================
console.log("\n--- 12. Simulating SQL JOIN ---\n");

const customers = [
    { id: 1, name: 'Maria Schmidt', city: 'Feldkirch' },
    { id: 2, name: 'Hans Mueller', city: 'Dornbirn' },
    { id: 3, name: 'Anna Weber', city: 'Hohenems' }
];

const orders = [
    { id: 101, customer_id: 1, total: 99.99, date: '2025-03-10' },
    { id: 102, customer_id: 1, total: 149.50, date: '2025-03-11' },
    { id: 103, customer_id: 2, total: 75.00, date: '2025-03-12' },
    { id: 104, customer_id: 3, total: 250.00, date: '2025-03-13' }
];

// JOIN operation: combine customers with their orders
function joinCustomerOrders(customers, orders) {
    return customers.map(customer => ({
        ...customer,
        orders: orders.filter(o => o.customer_id === customer.id),
        totalOrders: orders.filter(o => o.customer_id === customer.id).length,
        totalSpent: orders
            .filter(o => o.customer_id === customer.id)
            .reduce((sum, o) => sum + o.total, 0)
    }));
}

const joined = joinCustomerOrders(customers, orders);
console.log("Customer orders joined:");
joined.forEach(c => {
    console.log(`  ${c.name}: ${c.totalOrders} orders, Total: $${c.totalSpent.toFixed(2)}`);
});


// ============================================
// 13. DATA TRANSFORMATION
// ============================================
console.log("\n--- 13. Data Transformation ---\n");

// Transform flat data to hierarchical
const sales2 = [
    { date: '2025-03-10', product: 'Laptop', amount: 999 },
    { date: '2025-03-10', product: 'Mouse', amount: 29 },
    { date: '2025-03-11', product: 'Keyboard', amount: 79 }
];

const byDate = sales2.reduce((acc, sale) => {
    if (!acc[sale.date]) {
        acc[sale.date] = [];
    }
    acc[sale.date].push(sale);
    return acc;
}, {});

console.log("Sales grouped by date:");
console.log(JSON.stringify(byDate, null, 2));


// ============================================
// 14. ARRAY COMPREHENSION EQUIVALENT
// ============================================
console.log("\n--- 14. Array Operations ---\n");

const numbers3 = [1, 2, 3, 4, 5, 6];

// Chain operations (similar to Python comprehension)
const result = numbers3
    .filter(n => n % 2 === 0) // Keep even numbers
    .map(n => n * n) // Square them
    .reduce((sum, n) => sum + n, 0); // Sum them

console.log("Even numbers squared and summed:", result); // 4 + 16 + 36 = 56


// ============================================
// 15. OBJECT ITERATION
// ============================================
console.log("\n--- 15. Object Iteration ---\n");

const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'Vienna'
};

// Get keys
const keys = Object.keys(person2);
console.log("Keys:", keys);

// Get values
const values = Object.values(person2);
console.log("Values:", values);

// Get entries
const entries = Object.entries(person2);
console.log("Entries:");
entries.forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});


console.log("\n=== End of Week 4 Examples ===");