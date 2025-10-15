/**
 * Week 2 JavaScript Examples
 * Programming Fundamentals - JavaScript
 * Digital Campus Vorarlberg
 * 
 * This file contains all JavaScript code examples from Week 2 Teacher's Guide.
 */

// ============================================================================
// DAY 1: SETTING UP YOUR INSTRUMENTS
// ============================================================================

console.log("=== DAY 1: Hello World & Basic Syntax ===\n");

// JavaScript greet function
// This function takes a name parameter and returns a greeting string
// Note: JavaScript uses 'function' keyword or arrow function syntax
function greet(name) {
    return `Hello, ${name}!`;
}

// Call the function
console.log(greet("World"));

// ----------------------------------------------------------------------------
// Node.js REPL Examples
// These are commands you can run in Node's interactive shell
// To start: type 'node' in terminal
// ----------------------------------------------------------------------------

/*
Node REPL Commands:
> 2 + 2
4

> "Hello" + " " + "World"
'Hello World'

> let x = 10
undefined

> x * 2
20

> .exit  // or Ctrl+C twice to exit
*/

// ----------------------------------------------------------------------------
// First JavaScript Script - hello.js
// ----------------------------------------------------------------------------

console.log("\n=== First JavaScript Script ===\n");

// Print a simple greeting
console.log("Hello from JavaScript!");

// Variables in JavaScript need declarations (let, const, var)
let name = "Developer";
console.log("Welcome, " + name);

// Basic math operations
let x = 10;
let y = 5;
console.log("10 + 5 =", x + y);


// ============================================================================
// DAY 2: VARIABLES, DATA TYPES, AND OPERATORS
// ============================================================================

console.log("\n=== DAY 2: Variables, Data Types, and Operators ===\n");

// ----------------------------------------------------------------------------
// Variable Declaration and Data Types
// ----------------------------------------------------------------------------

// JavaScript has three ways to declare variables:
// let - for variables that can be reassigned
// const - for variables that cannot be reassigned (constants)
// var - older way, avoid in modern JavaScript

// Numbers (JavaScript has only one number type)
let age = 25;
const price = 19.99;

// Strings (both single and double quotes work)
let firstName = "Alice";
let city = 'Vienna';

// Booleans (lowercase true/false)
let isStudent = true;
const hasPassed = false;

// Check types using typeof
console.log(typeof age);         // number
console.log(typeof price);       // number
console.log(typeof firstName);   // string
console.log(typeof isStudent);   // boolean

// ----------------------------------------------------------------------------
// String Operations
// ----------------------------------------------------------------------------

console.log("\n=== String Operations ===\n");

let userName = "Alice";

// String concatenation
let greeting = "Hello, " + userName;
console.log(greeting);

// Template literals (using backticks) - preferred modern way
let message = `My name is ${userName}`;
console.log(message);

// String methods
console.log(userName.toUpperCase());    // ALICE
console.log(userName.toLowerCase());    // alice
console.log(userName.length);           // 5
console.log(userName[0]);               // A (first character)
console.log(userName[userName.length - 1]); // e (last character)

// ----------------------------------------------------------------------------
// Arithmetic Operators
// ----------------------------------------------------------------------------

console.log("\n=== Arithmetic Operators ===\n");

let a = 10;
let b = 3;

// Basic operations
console.log(a + b);     // 13 - Addition
console.log(a - b);     // 7  - Subtraction
console.log(a * b);     // 30 - Multiplication
console.log(a / b);     // 3.333... - Division
console.log(a % b);     // 1  - Modulus (remainder)
console.log(a ** b);    // 1000 - Exponentiation (ES6+)

// Increment and decrement
let counter = 0;
counter++;              // Increment by 1
console.log(counter);   // 1
counter--;              // Decrement by 1
console.log(counter);   // 0

// ----------------------------------------------------------------------------
// Comparison Operators
// ----------------------------------------------------------------------------

console.log("\n=== Comparison Operators ===\n");

let num1 = 5;
let num2 = 10;

console.log(num1 == num2);   // false - Equal to (loose equality)
console.log(num1 === num2);  // false - Strict equal to (checks type too)
console.log(num1 != num2);   // true  - Not equal to
console.log(num1 !== num2);  // true  - Strict not equal to
console.log(num1 < num2);    // true  - Less than
console.log(num1 > num2);    // false - Greater than
console.log(num1 <= num2);   // true  - Less than or equal
console.log(num1 >= num2);   // false - Greater than or equal

// Important: == vs ===
console.log(5 == "5");      // true  - Loose equality (converts types)
console.log(5 === "5");     // false - Strict equality (no type conversion)

// ----------------------------------------------------------------------------
// Type Conversion
// ----------------------------------------------------------------------------

console.log("\n=== Type Conversion ===\n");

// String to number
let ageString = "25";
let ageNumber = Number(ageString);
// Or use parseInt/parseFloat
let ageInt = parseInt(ageString);
console.log(ageNumber + 5);    // 30

// Number to string
let score = 100;
let scoreMessage = "Your score is: " + String(score);
// Or use toString()
let scoreString = score.toString();
console.log(scoreMessage);

// String to float
let priceValue = parseFloat("19.99");
console.log(priceValue * 2);    // 39.98

// Boolean conversions
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false (empty string)
console.log(Boolean("Hi"));     // true (non-empty string)

// ----------------------------------------------------------------------------
// Type Conversion Challenge - JavaScript's Quirky Behavior
// ----------------------------------------------------------------------------

console.log("\n=== Type Conversion Experiments ===\n");

// JavaScript is more permissive with type mixing than Python
console.log("5" + 5);           // "55" - string concatenation
console.log("5" - 5);           // 0 - numeric subtraction (converts to number)
console.log(true + 1);          // 2 - true becomes 1
console.log(false + 1);         // 1 - false becomes 0
console.log("hello" * 2);       // NaN - Not a Number

// ----------------------------------------------------------------------------
// Working with Numbers
// ----------------------------------------------------------------------------

console.log("\n=== Working with Numbers ===\n");

// JavaScript Math Object Operations

// Random numbers
console.log(Math.random());                    // 0-1 random float
console.log(Math.random() * 100);              // 0-100 random float
console.log(Math.floor(Math.random() * 100));  // 0-99 random integer

// Rounding
console.log(Math.round(3.7));   // 4 - rounds to nearest
console.log(Math.round(3.2));   // 3
console.log(Math.floor(3.9));   // 3 - always rounds down
console.log(Math.ceil(3.1));    // 4 - always rounds up

// Min/Max
console.log(Math.min(5, 10, 3, 8));     // 3 - finds minimum
console.log(Math.max(5, 10, 3, 8));     // 10 - finds maximum

// Power and roots
console.log(Math.pow(2, 3));    // 8 (2^3)
console.log(2 ** 3);            // 8 - ES6 exponentiation operator
console.log(Math.sqrt(16));     // 4 - square root

// Absolute value
console.log(Math.abs(-5));      // 5 - makes negative positive

// Constants
console.log(Math.PI);           // 3.14159...
console.log(Math.E);            // 2.718... (Euler's number)

// ----------------------------------------------------------------------------
// Number Formatting
// ----------------------------------------------------------------------------

console.log("\n=== Number Formatting ===\n");

let numToFormat = 123.456789;

// Decimal places
console.log(numToFormat.toFixed(2));              // "123.46" (string!)
console.log(parseFloat(numToFormat.toFixed(2)));  // 123.46 (number)
console.log(numToFormat.toFixed(4));              // "123.4568"

// Localization
let priceToFormat = 1234.56;
console.log(priceToFormat.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
}));  // "$1,234.56"

console.log(priceToFormat.toLocaleString('de-AT', {
    style: 'currency',
    currency: 'EUR'
}));  // "€ 1.234,56" (German/Austrian format)

// Large numbers with commas
let bigNum = 1234567.89;
console.log(bigNum.toLocaleString('en-US'));  // "1,234,567.89"

// ----------------------------------------------------------------------------
// Tip Calculator Exercise
// ----------------------------------------------------------------------------

console.log("\n=== Tip Calculator ===\n");

const billAmount = 50.00;
const tipPercentage = 18;

const tipAmount = billAmount * (tipPercentage / 100);
const totalAmount = billAmount + tipAmount;

console.log(`Bill Amount: $${billAmount.toFixed(2)}`);
console.log(`Tip (${tipPercentage}%): $${tipAmount.toFixed(2)}`);
console.log(`Total: $${totalAmount.toFixed(2)}`);

// Split bill
const numberOfPeople = 4;
const perPerson = totalAmount / numberOfPeople;
console.log(`\nPer person (${numberOfPeople} people): $${perPerson.toFixed(2)}`);

// ----------------------------------------------------------------------------
// Working with Strings
// ----------------------------------------------------------------------------

console.log("\n=== Working with Strings ===\n");

// String creation (single, double quotes, or template literals)
let str1 = 'Single quotes';
let str2 = "Double quotes";
let str3 = `Template literal with ${str1}`;

// Concatenation
let first = "Ada";
let last = "Lovelace";
let fullName = first + " " + last;
let fullName2 = `${first} ${last}`;  // Better - more readable

console.log(fullName);
console.log(fullName2);

// Length
console.log(fullName.length);           // 12 - number of characters

// Accessing characters (0-indexed)
console.log(fullName[0]);                       // 'A' - first character
console.log(fullName.charAt(0));                // 'A' - alternative
console.log(fullName[fullName.length - 1]);     // 'e' - last character

// Strings are immutable (can't change individual characters)
let textString = "hello";
// textString[0] = "H";  // Doesn't work!
textString = "H" + textString.slice(1);  // "Hello" - create new string instead
console.log(textString);

// ----------------------------------------------------------------------------
// String Methods
// ----------------------------------------------------------------------------

console.log("\n=== String Methods ===\n");

let sampleText = "  Hello, World!  ";

// Case conversion
console.log(sampleText.toUpperCase());      // "  HELLO, WORLD!  "
console.log(sampleText.toLowerCase());      // "  hello, world!  "

// Trimming whitespace
console.log(sampleText.trim());             // "Hello, World!"
console.log(sampleText.trimStart());        // "Hello, World!  "
console.log(sampleText.trimEnd());          // "  Hello, World!"

// Searching
console.log(sampleText.indexOf("World"));       // 9 - index of first occurrence
console.log(sampleText.indexOf("xyz"));         // -1 - not found
console.log(sampleText.includes("World"));      // true - membership test
console.log(sampleText.search(/world/i));       // 9 - regex search (case-insensitive)

// Count occurrences (using match)
let lCount = (sampleText.match(/l/g) || []).length;
console.log(lCount);                            // 3 - count of 'l'

// Replacing
console.log(sampleText.replace("World", "JavaScript"));  // "  Hello, JavaScript!  "
console.log(sampleText.replace(/ /g, ""));               // "Hello,World!" - remove all spaces (regex)
console.log(sampleText.replaceAll(" ", ""));             // "Hello,World!" - ES2021

// Splitting and joining
let sentence = "JavaScript is awesome";
let words = sentence.split(" ");        // ['JavaScript', 'is', 'awesome']
console.log(words);

let csvData = "apple,banana,orange";
let fruits = csvData.split(",");        // ['apple', 'banana', 'orange']
console.log(fruits);

// Join array into string
let newSentence = words.join(" ");      // "JavaScript is awesome"
console.log(newSentence);
let csvOutput = fruits.join(",");       // "apple,banana,orange"
console.log(csvOutput);

// Extracting substrings
let phrase = "JavaScript Programming";
console.log(phrase.substring(0, 10));   // "JavaScript"
console.log(phrase.slice(0, 10));       // "JavaScript"
console.log(phrase.slice(-11));         // "Programming" (negative index from end)

// ----------------------------------------------------------------------------
// String Methods - Checking
// ----------------------------------------------------------------------------

console.log("\n=== String Checking Methods ===\n");

// Check string start/end
let filename = "document.pdf";
console.log(filename.startsWith("doc"));    // true
console.log(filename.endsWith(".pdf"));     // true
console.log(filename.endsWith(".txt"));     // false

// Repeat strings
console.log("Ha".repeat(3));                // "HaHaHa"
console.log("*".repeat(10));                // "**********"

// Padding
console.log("5".padStart(3, "0"));          // "005"
console.log("5".padEnd(3, "0"));            // "500"


// ============================================================================
// DAY 3: CONTROL FLOW - MAKING DECISIONS
// ============================================================================

console.log("\n=== DAY 3: Control Flow - Making Decisions ===\n");

// ----------------------------------------------------------------------------
// Conditional Statements
// ----------------------------------------------------------------------------

console.log("\n=== Conditional Statements ===\n");

// if/else statements
// Note: JavaScript uses curly braces {} and 'else if' (not 'elif')
let userAge = 18;

if (userAge >= 18) {
    console.log("You are an adult");
} else if (userAge >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Nested conditionals
let temperature = 25;
let isRaining = false;

if (temperature > 20) {
    if (isRaining) {
        console.log("Warm but rainy");
    } else {
        console.log("Nice weather!");
    }
} else {
    console.log("It's cold");
}

// Ternary operator (shorthand if/else)
let canVote = (userAge >= 18) ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// ----------------------------------------------------------------------------
// Truthy and Falsy Values
// ----------------------------------------------------------------------------

console.log("\n=== Truthy and Falsy Values ===\n");

// Falsy values in JavaScript: false, 0, "", null, undefined, NaN
// Everything else is truthy

if (0) {
    console.log("This won't print");
}

if ("") {
    console.log("This won't print either");
}

if ("Hello") {
    console.log("Non-empty strings are truthy");
}

// ----------------------------------------------------------------------------
// Logical Operators
// ----------------------------------------------------------------------------

console.log("\n=== Logical Operators ===\n");

// JavaScript uses &&, ||, ! for logical operations
let driverAge = 25;
let hasLicense = true;

// AND operator (&&) - both conditions must be true
if (driverAge >= 18 && hasLicense) {
    console.log("You can drive");
}

// OR operator (||) - at least one condition must be true
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No work today!");
}

// NOT operator (!) - inverts boolean value
let raining = false;
if (!raining) {
    console.log("Let's go outside");
}

// ----------------------------------------------------------------------------
// For Loops
// ----------------------------------------------------------------------------

console.log("\n=== For Loops ===\n");

// Classic for loop (C-style)
// Syntax: for (initialization; condition; increment)
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

console.log("---");

// For loop with different start
for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}

// Iterating over an array
let fruitList = ["apple", "banana", "orange"];

// Traditional for loop
for (let i = 0; i < fruitList.length; i++) {
    console.log(`I like ${fruitList[i]}`);
}

console.log("---");

// For...of loop (modern, cleaner for arrays)
for (let fruit of fruitList) {
    console.log(`I like ${fruit}`);
}

console.log("---");

// For...in loop (iterates over indices/keys)
for (let index in fruitList) {
    console.log(`${index}: ${fruitList[index]}`);
}

// ----------------------------------------------------------------------------
// While Loops
// ----------------------------------------------------------------------------

console.log("\n=== While Loops ===\n");

// While loop - continues while condition is true
let count = 0;
while (count < 5) {
    console.log(`Count is: ${count}`);
    count++;
}

console.log("Loop finished!");

// ----------------------------------------------------------------------------
// Break and Continue
// ----------------------------------------------------------------------------

console.log("\n=== Break and Continue ===\n");

// Break - exits the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stop when we reach 5
    }
    console.log(i);
}

console.log("---");

// Continue - skips to next iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // Only odd numbers printed
}

// ----------------------------------------------------------------------------
// FizzBuzz Challenge
// ----------------------------------------------------------------------------

console.log("\n=== FizzBuzz Challenge ===\n");

// FizzBuzz - Classic Programming Challenge
// Print numbers 1-100, but:
// - Print "Fizz" for multiples of 3
// - Print "Buzz" for multiples of 5
// - Print "FizzBuzz" for multiples of both

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}


// ============================================================================
// DAY 4: FUNCTIONS & SCOPE
// ============================================================================

console.log("\n=== DAY 4: Functions & Scope ===\n");

// ----------------------------------------------------------------------------
// Function Fundamentals
// ----------------------------------------------------------------------------

console.log("\n=== Function Fundamentals ===\n");

// Function declaration
function sayHello() {
    console.log("Hello!");
}

// Call the function
sayHello();

// Function with parameters
function greetPerson(personName) {
    console.log(`Hello, ${personName}!`);
}

greetPerson("Alice");

// Function with return value
function add(num1, num2) {
    return num1 + num2;
}

let result = add(5, 3);
console.log(`5 + 3 = ${result}`);

// ----------------------------------------------------------------------------
// Default Parameters
// ----------------------------------------------------------------------------

console.log("\n=== Default Parameters ===\n");

// ES6 default parameters
function greetWithDefault(personName, greetingText = "Hello") {
    return `${greetingText}, ${personName}!`;
}

// Use default greeting
console.log(greetWithDefault("Alice"));        // Hello, Alice!

// Provide custom greeting
console.log(greetWithDefault("Bob", "Hi"));    // Hi, Bob!

// ----------------------------------------------------------------------------
// Multiple Return Values (using objects or arrays)
// ----------------------------------------------------------------------------

console.log("\n=== Multiple Return Values ===\n");

// JavaScript doesn't have tuples like Python, but can return objects or arrays
function getNameAndAge() {
    let personName = "Alice";
    let personAge = 25;
    return { name: personName, age: personAge }; // Return object
}

// Destructure the returned object
let { name: userName2, age: userAge2 } = getNameAndAge();
console.log(`${userName2} is ${userAge2} years old`);

// Or access properties
let person = getNameAndAge();
console.log(`${person.name} is ${person.age} years old`);

// Using array (like Python tuple)
function getCoordinates() {
    return [10, 20]; // Return array
}

let [x2, y2] = getCoordinates(); // Array destructuring
console.log(`X: ${x2}, Y: ${y2}`);

// ----------------------------------------------------------------------------
// Scope - Global vs Local
// ----------------------------------------------------------------------------

console.log("\n=== Scope ===\n");

// Global variable
let globalVar = "I'm global";

function testScope() {
    // Local variable
    let localVar = "I'm local";
    console.log(globalVar);  // Can access global
    console.log(localVar);   // Can access local
}

testScope();
console.log(globalVar);  // Works
// console.log(localVar);  // Would cause error - not accessible outside function

// Variable shadowing
let scopeTest = "global";

function shadowingExample() {
    let scopeTest = "local"; // Shadows the global variable
    console.log(scopeTest);  // "local"
}

shadowingExample();
console.log(scopeTest);      // "global"

// ----------------------------------------------------------------------------
// Arrow Functions (ES6)
// ----------------------------------------------------------------------------

console.log("\n=== Arrow Functions ===\n");

// Arrow function syntax: (parameters) => expression
// Or: (parameters) => { statements }

// Traditional function
function square(num) {
    return num * num;
}

// Equivalent arrow function
const squareArrow = (num) => num * num;

console.log(square(5));         // 25
console.log(squareArrow(5));    // 25

// Arrow function with multiple parameters
const addArrow = (a, b) => a + b;
console.log(addArrow(3, 4));    // 7

// Arrow function with block body (when you need multiple statements)
const greetArrow = (name) => {
    let greeting = `Hello, ${name}!`;
    return greeting;
};
console.log(greetArrow("Charlie"));

// Arrow functions are often used with array methods
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// ----------------------------------------------------------------------------
// Functions as Values (First-class functions)
// ----------------------------------------------------------------------------

console.log("\n=== Functions as Values ===\n");

// Functions can be assigned to variables
const multiply = function(a, b) {
    return a * b;
};

// Functions can be passed as arguments (callbacks)
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(5, 3, add));          // 8
console.log(calculate(5, 3, multiply));     // 15

// Anonymous functions as arguments
console.log(calculate(5, 3, function(a, b) {
    return a - b;
})); // 2

// ----------------------------------------------------------------------------
// Temperature Converter Example
// ----------------------------------------------------------------------------

console.log("\n=== Temperature Converter ===\n");

// Temperature Converter Utility Functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Test the functions
let tempC = 25;
console.log(`${tempC}°C = ${celsiusToFahrenheit(tempC)}°F`);
console.log(`${tempC}°C = ${celsiusToKelvin(tempC)}K`);

let tempF = 77;
console.log(`${tempF}°F = ${fahrenheitToCelsius(tempF)}°C`);

// ----------------------------------------------------------------------------
// Password Validator Example
// ----------------------------------------------------------------------------

console.log("\n=== Password Validator ===\n");

// Password Validator Function
// Checks if password meets security requirements
function validatePassword(password) {
    /**
     * Validate password strength
     * Requirements:
     * - At least 8 characters
     * - Contains at least one number
     * - Contains at least one uppercase letter
     */
    
    if (password.length < 8) {
        return { valid: false, message: "Password must be at least 8 characters" };
    }
    
    // Check for number using regex
    let hasNumber = /\d/.test(password);
    if (!hasNumber) {
        return { valid: false, message: "Password must contain at least one number" };
    }
    
    // Check for uppercase letter
    let hasUpper = /[A-Z]/.test(password);
    if (!hasUpper) {
        return { valid: false, message: "Password must contain at least one uppercase letter" };
    }
    
    return { valid: true, message: "Password is valid" };
}

// Test the validator
let testPasswords = ["weak", "stillweak1", "StrongPass1"];

testPasswords.forEach(pwd => {
    let validation = validatePassword(pwd);
    console.log(`${pwd}: ${validation.message}`);
});


// ============================================================================
// DAY 5: TESTING & WEEK REVIEW
// ============================================================================

console.log("\n=== DAY 5: Testing & Week Review ===\n");

// ----------------------------------------------------------------------------
// Simple Testing Approach
// ----------------------------------------------------------------------------

console.log("\n=== Simple Testing ===\n");

// Simple testing using assertions
function addForTest(a, b) {
    return a + b;
}

function multiplyForTest(a, b) {
    return a * b;
}

// Simple test function using console.assert
function testAdd() {
    console.assert(addForTest(2, 3) === 5, "2 + 3 should equal 5");
    console.assert(addForTest(0, 0) === 0, "0 + 0 should equal 0");
    console.assert(addForTest(-1, 1) === 0, "-1 + 1 should equal 0");
    console.log("All add tests passed!");
}

function testMultiply() {
    console.assert(multiplyForTest(2, 3) === 6, "2 * 3 should equal 6");
    console.assert(multiplyForTest(0, 5) === 0, "0 * 5 should equal 0");
    console.assert(multiplyForTest(-2, 3) === -6, "-2 * 3 should equal -6");
    console.log("All multiply tests passed!");
}

// Run tests
testAdd();
testMultiply();


// ============================================================================
// COMPLETE INTEGRATION EXAMPLE
// ============================================================================

console.log("\n=== Complete Calculator Example ===\n");

// Complete Calculator - Integrating All Week 2 Concepts
// Note: This is a simplified version for demonstration
// In a real program, you'd use readline or prompts for user input

function calculator() {
    /**
     * Simple calculator with menu system
     * Demonstrates: functions, objects, conditionals, switch statement
     */
    
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => {
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        }
    };
    
    // Example calculations
    console.log("=== Simple Calculator ===");
    console.log("Example operations:");
    
    console.log(`10 + 5 = ${operations.add(10, 5)}`);
    console.log(`10 - 5 = ${operations.subtract(10, 5)}`);
    console.log(`10 * 5 = ${operations.multiply(10, 5)}`);
    console.log(`10 / 5 = ${operations.divide(10, 5)}`);
    console.log(`10 / 0 = ${operations.divide(10, 0)}`);
}

calculator();


// ============================================================================
// SUMMARY
// ============================================================================

console.log("\n=== Week 2 JavaScript Summary ===\n");

console.log(`
This file covered:
- Day 1: JavaScript basics, REPL, first programs
- Day 2: Variables (let/const/var), data types, operators, type conversion
- Day 3: Control flow (if/else), logical operators, loops (for/while)
- Day 4: Functions, parameters, scope, arrow functions
- Day 5: Testing basics and integration

Key JavaScript Characteristics:
- Uses curly braces {} for code blocks
- Uses semicolons (optional but recommended)
- Uses 'function' keyword or arrow syntax (=>)
- Uses 'else if' not 'elif'
- Uses &&, ||, ! for logical operators
- Has three variable declarations: let, const, var
- camelCase naming convention
- Dynamic typing (like Python)
- Has both == and === for equality
- Truthy/falsy value coercion

Practice Resources:
- JavaScript.info: https://javascript.info/
- MDN JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- Eloquent JavaScript: https://eloquentjavascript.net/
`);

console.log("\n=== End of Week 2 JavaScript Examples ===\n");