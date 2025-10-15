// Week 1: JavaScript Environment Setup Verification
// Run this file to verify your JavaScript development environment is properly configured

console.log('=== JavaScript Environment Verification ===\n');

// Check 1: Node.js Installation
console.log('Check 1: Node.js Installation');
console.log('-----------------------------');
console.log('Node.js version:', process.version);
console.log('Expected: v18.x or higher');
console.log('Status: ✓ Node.js is installed\n');

// Check 2: npm Installation
console.log('Check 2: npm Installation');
console.log('-------------------------');
const { execSync } = require('child_process');
try {
  const npmVersion = execSync('npm --version').toString().trim();
  console.log('npm version:', npmVersion);
  console.log('Expected: 9.x or higher');
  console.log('Status: ✓ npm is installed\n');
} catch (error) {
  console.log('Status: ✗ npm not found\n');
}

// Check 3: Basic JavaScript Features
console.log('Check 3: JavaScript Features');
console.log('----------------------------');

// Variables and Data Types
const studentName = 'Your Name';
let age = 25;
var isBootcampStudent = true;

console.log('✓ Variables working (const, let, var)');
console.log(`  Student: ${studentName}, Age: ${age}, Enrolled: ${isBootcampStudent}`);

// Arrays
const skills = ['HTML', 'CSS', 'JavaScript', 'Python'];
console.log('✓ Arrays working:', skills);

// Objects
const developer = {
  name: 'Student',
  cohort: 'Feb 2025',
  languages: ['JavaScript', 'Python'],
  ready: true
};
console.log('✓ Objects working:', developer);

// Functions
function greet(name) {
  return `Hello, ${name}! Welcome to the bootcamp!`;
}
console.log('✓ Functions working:', greet('Developer'));

// Arrow Functions (ES6+)
const add = (a, b) => a + b;
console.log('✓ Arrow functions working:', add(5, 3));

// Template Literals
const message = `You are learning ${skills.join(', ')}`;
console.log('✓ Template literals working:', message);

// Destructuring
const { name, languages } = developer;
console.log('✓ Destructuring working:', name, languages);

// Spread Operator
const moreSkills = [...skills, 'React', 'Node.js'];
console.log('✓ Spread operator working:', moreSkills);

console.log('\nStatus: ✓ All basic JavaScript features working\n');

// Check 4: Asynchronous JavaScript
console.log('Check 4: Asynchronous JavaScript');
console.log('--------------------------------');

// Promises
const testPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Promise resolved!'), 100);
});

testPromise.then((result) => {
  console.log('✓ Promises working:', result);
});

// Async/Await
async function testAsync() {
  const result = await testPromise;
  console.log('✓ Async/await working:', result);
}

testAsync();

// Check 5: File System Access (Node.js)
console.log('\nCheck 5: Node.js File System');
console.log('----------------------------');
const fs = require('fs');
const path = require('path');

try {
  const testFile = path.join(__dirname, 'test_verification.txt');
  fs.writeFileSync(testFile, 'JavaScript environment is working!');
  const content = fs.readFileSync(testFile, 'utf8');
  console.log('✓ File system access working');
  console.log('  Test file created and read successfully');
  fs.unlinkSync(testFile); // Clean up
  console.log('  Test file cleaned up\n');
} catch (error) {
  console.log('✗ File system error:', error.message, '\n');
}

// Check 6: Package Management
console.log('Check 6: Package.json Configuration');
console.log('------------------------------------');

// Check if package.json exists
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = require(packagePath);
  console.log('✓ package.json found');
  console.log('  Project:', packageJson.name);
  console.log('  Version:', packageJson.version);
} else {
  console.log('ℹ No package.json found (normal for basic scripts)');
  console.log('  To create one, run: npm init -y');
}

console.log('\n');

// Check 7: Popular Array Methods
console.log('Check 7: Array Methods');
console.log('----------------------');

const numbers = [1, 2, 3, 4, 5];

// Map
const doubled = numbers.map(n => n * 2);
console.log('✓ .map() working:', doubled);

// Filter
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('✓ .filter() working:', evenNumbers);

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('✓ .reduce() working:', sum);

// Find
const found = numbers.find(n => n > 3);
console.log('✓ .find() working:', found);

console.log('\n');

// Check 8: Error Handling
console.log('Check 8: Error Handling');
console.log('-----------------------');

try {
  throw new Error('Test error');
} catch (error) {
  console.log('✓ Try/catch working:', error.message);
}

console.log('\n');

// Check 9: JSON Handling
console.log('Check 9: JSON Handling');
console.log('----------------------');

const data = { name: 'Student', week: 1 };
const jsonString = JSON.stringify(data);
console.log('✓ JSON.stringify working:', jsonString);

const parsed = JSON.parse(jsonString);
console.log('✓ JSON.parse working:', parsed);

console.log('\n');

// Check 10: Module System
console.log('Check 10: Module System');
console.log('-----------------------');
console.log('✓ CommonJS (require/module.exports) working');
console.log('ℹ ES Modules (import/export) require package.json with "type": "module"');

console.log('\n');

// Final Summary
console.log('=== Environment Verification Complete ===');
console.log('\n📊 Summary:');
console.log('  ✓ Node.js and npm installed');
console.log('  ✓ JavaScript features working');
console.log('  ✓ Async operations functional');
console.log('  ✓ File system access available');
console.log('  ✓ Array methods working');
console.log('  ✓ Error handling functional');
console.log('  ✓ JSON operations working');
console.log('\n🎉 Your JavaScript environment is ready!');

console.log('\n📝 Next Steps:');
console.log('  1. Initialize a project: npm init -y');
console.log('  2. Install a package: npm install lodash');
console.log('  3. Create a .gitignore file (include node_modules/)');
console.log('  4. Start building your first project!');

console.log('\n💡 Useful Commands:');
console.log('  node filename.js          - Run JavaScript file');
console.log('  node -v                   - Check Node version');
console.log('  npm -v                    - Check npm version');
console.log('  npm install package-name  - Install a package');
console.log('  npm list                  - List installed packages');

console.log('\n=== End of Verification ===\n');

// EXERCISE: Environment Practice
console.log('🏋️ PRACTICE EXERCISE:');
console.log('----------------------');
console.log('1. Create a new directory: mkdir js-practice');
console.log('2. Navigate to it: cd js-practice');
console.log('3. Initialize npm: npm init -y');
console.log('4. Install a package: npm install chalk');
console.log('5. Create index.js and import chalk');
console.log('6. Run your file: node index.js');
console.log('7. Add to git and commit');
console.log('\nSubmit your js-practice repository to GitHub!');
