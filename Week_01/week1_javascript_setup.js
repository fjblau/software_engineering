// Week 1: JavaScript Interactive Practice & Environment Verification
// Run this file to verify your environment and complete interactive exercises

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('=== JavaScript Environment Verification & Practice ===\n');

  // Check 1: Node.js Installation
  console.log('Check 1: Node.js Installation');
  console.log('-----------------------------');
  console.log('Node.js version:', process.version);
  const nodeVersion = parseInt(process.version.slice(1).split('.')[0]);
  if (nodeVersion >= 18) {
    console.log('✓ Node.js version is sufficient (v18+)');
  } else {
    console.log('⚠️  Node.js version may be outdated. Recommended: v18+');
  }
  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Check 2: npm Installation
  console.log('Check 2: npm Installation');
  console.log('-------------------------');
  try {
    const npmVersion = execSync('npm --version').toString().trim();
    console.log('npm version:', npmVersion);
    console.log('✓ npm is installed');
  } catch (error) {
    console.log('✗ npm not found');
  }
  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Check 3: Basic JavaScript Features
  console.log('Check 3: JavaScript Features');
  console.log('----------------------------');

  // Variables
  const studentName = await prompt('Enter your name: ');
  let age = await prompt('Enter your age: ');
  var isBootcampStudent = true;

  console.log('\n✓ Variables working (const, let, var)');
  console.log(`  Student: ${studentName}, Age: ${age}, Enrolled: ${isBootcampStudent}`);

  // Arrays
  const skills = ['HTML', 'CSS', 'JavaScript', 'Python'];
  console.log('✓ Arrays working:', skills);

  // Objects
  const developer = {
    name: studentName,
    cohort: 'Feb 2025',
    languages: ['JavaScript', 'Python'],
    ready: true
  };
  console.log('✓ Objects working:', developer);

  // Functions
  function greet(name) {
    return `Hello, ${name}! Welcome to the bootcamp!`;
  }
  console.log('✓ Functions working:', greet(studentName));

  // Arrow Functions
  const add = (a, b) => a + b;
  console.log('✓ Arrow functions working:', add(5, 3), '= 8');

  // Template Literals
  const message = `You are learning ${skills.join(', ')}`;
  console.log('✓ Template literals working:', message);

  // Destructuring
  const { name, languages } = developer;
  console.log('✓ Destructuring working:', name, languages);

  // Spread Operator
  const moreSkills = [...skills, 'React', 'Node.js'];
  console.log('✓ Spread operator working:', moreSkills);

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Exercise 1: Array Methods Practice
  console.log('=== Exercise 1: Array Methods Practice ===');
  console.log('We have this array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
  console.log('');

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Map
  const doubled = numbers.map(n => n * 2);
  console.log('Using .map() to double each number:', doubled);

  // Filter
  const evenNumbers = numbers.filter(n => n % 2 === 0);
  console.log('Using .filter() to get even numbers:', evenNumbers);

  // Reduce
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log('Using .reduce() to sum all numbers:', sum);

  // Find
  const found = numbers.find(n => n > 7);
  console.log('Using .find() to find first number > 7:', found);

  // Challenge
  console.log('\n🏋️ Your turn!');
  console.log('Write the result of: numbers.filter(n => n > 5).map(n => n * 3)');
  const answer = await prompt('What array do you get? (e.g., [1,2,3]): ');
  const correctAnswer = [18, 21, 24, 27, 30];
  const userAnswer = JSON.parse(answer);
  
  if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
    console.log('✓ Correct! The answer is', correctAnswer);
  } else {
    console.log('✗ Not quite. The answer is', correctAnswer);
    console.log('  Explanation: filter(n > 5) gives [6,7,8,9,10], then map(n * 3) multiplies each by 3');
  }

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Check 4: Asynchronous JavaScript
  console.log('Check 4: Asynchronous JavaScript');
  console.log('--------------------------------');

  console.log('Creating a Promise that resolves after 1 second...');
  const testPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved!'), 1000);
  });

  const result = await testPromise;
  console.log('✓ Promises working:', result);
  console.log('✓ Async/await working (you just used it!)');

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Check 5: File System
  console.log('Check 5: Node.js File System');
  console.log('----------------------------');

  const testFile = path.join(__dirname, 'js_practice.txt');
  const testContent = `JavaScript Practice File
Created by: ${studentName}
Date: ${new Date().toLocaleString()}

Skills learned:
${skills.map((skill, i) => `${i + 1}. ${skill}`).join('\n')}
`;

  try {
    fs.writeFileSync(testFile, testContent);
    console.log('✓ Created file: js_practice.txt');
    
    const content = fs.readFileSync(testFile, 'utf8');
    console.log('\nFile contents:');
    console.log(content);
    
    const keepFile = await prompt('Keep this file? (y/n): ');
    if (keepFile.toLowerCase() !== 'y') {
      fs.unlinkSync(testFile);
      console.log('✓ File deleted');
    } else {
      console.log('✓ File kept: js_practice.txt');
    }
  } catch (error) {
    console.log('✗ File system error:', error.message);
  }

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Exercise 2: Function Practice
  console.log('=== Exercise 2: Write a Function ===');
  console.log('Complete this function to calculate the average of an array:');
  console.log('');
  console.log('function calculateAverage(numbers) {');
  console.log('  // Your code here');
  console.log('}');
  console.log('');
  console.log('Test array: [10, 20, 30, 40, 50]');
  console.log('Expected result: 30');
  console.log('');

  // Give them a hint
  const showHint = await prompt('Need a hint? (y/n): ');
  if (showHint.toLowerCase() === 'y') {
    console.log('\nHint: Sum all numbers, then divide by array length');
    console.log('You can use .reduce() and .length');
  }

  console.log('\nHere\'s the solution:');
  console.log('');
  
  function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }

  console.log('function calculateAverage(numbers) {');
  console.log('  const sum = numbers.reduce((acc, curr) => acc + curr, 0);');
  console.log('  return sum / numbers.length;');
  console.log('}');
  console.log('');

  const testNumbers = [10, 20, 30, 40, 50];
  const average = calculateAverage(testNumbers);
  console.log('Testing:', average, '(should be 30)');
  console.log(average === 30 ? '✓ Function works correctly!' : '✗ Something went wrong');

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Check 6: Error Handling
  console.log('Check 6: Error Handling');
  console.log('-----------------------');

  try {
    console.log('Attempting to divide by zero...');
    const result = 10 / 0;
    console.log('Result:', result, '(Infinity in JavaScript)');
    
    console.log('\nThrowing an actual error...');
    throw new Error('Test error for practice');
  } catch (error) {
    console.log('✓ Caught error:', error.message);
  }

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Check 7: JSON Handling
  console.log('Check 7: JSON Handling');
  console.log('----------------------');

  const profile = {
    name: studentName,
    age: age,
    skills: skills,
    enrolledDate: new Date().toISOString()
  };

  const jsonString = JSON.stringify(profile, null, 2);
  console.log('✓ Your profile as JSON:');
  console.log(jsonString);

  const parsed = JSON.parse(jsonString);
  console.log('\n✓ Parsed back to object:', parsed);

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Exercise 3: Object Practice
  console.log('=== Exercise 3: Working with Objects ===');
  console.log('Create an object representing a book with:');
  console.log('- title, author, year, pages');
  console.log('');

  const title = await prompt('Book title: ');
  const author = await prompt('Author: ');
  const year = await prompt('Year: ');
  const pages = await prompt('Number of pages: ');

  const book = { title, author, year: parseInt(year), pages: parseInt(pages) };
  console.log('\n✓ Created book object:', book);

  // Add a method
  book.getInfo = function() {
    return `${this.title} by ${this.author} (${this.year}) - ${this.pages} pages`;
  };

  console.log('✓ Added method to object');
  console.log('  book.getInfo():', book.getInfo());

  console.log('');
  await prompt('Press Enter to continue...');
  console.log('');

  // Final Summary
  console.log('=== Practice Complete! ===\n');
  console.log('📊 What you practiced:');
  console.log('  ✓ Variables (const, let, var)');
  console.log('  ✓ Arrays and array methods');
  console.log('  ✓ Objects and methods');
  console.log('  ✓ Functions (regular and arrow)');
  console.log('  ✓ Async/await and Promises');
  console.log('  ✓ File system operations');
  console.log('  ✓ Error handling');
  console.log('  ✓ JSON operations');
  console.log('');

  // Save practice results
  const saveResults = await prompt('Save your practice results to a file? (y/n): ');
  if (saveResults.toLowerCase() === 'y') {
    const resultsFile = path.join(__dirname, 'practice_results.json');
    const results = {
      student: studentName,
      date: new Date().toISOString(),
      completedExercises: ['Array Methods', 'Functions', 'Objects'],
      book: book,
      profile: profile
    };
    
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    console.log('✓ Saved to practice_results.json');
  }

  console.log('\n🎉 Your JavaScript environment is ready!');
  console.log('\n📝 Next Steps:');
  console.log('  1. Create a new project directory');
  console.log('  2. Run: npm init -y');
  console.log('  3. Install a package: npm install chalk');
  console.log('  4. Create your first real project!');
  console.log('  5. Initialize Git and make your first commit');
  console.log('\n💡 Keep practicing these concepts - they\'re the foundation of JavaScript!');

  rl.close();
}

main().catch(error => {
  console.error('Error:', error);
  rl.close();
});
