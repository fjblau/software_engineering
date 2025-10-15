// Week 1: JavaScript Environment Verification
// Run this file to verify your Node.js environment is set up correctly

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== JavaScript/Node.js Environment Verification ===\n');

// Check 1: Node.js Installation
console.log('Check 1: Node.js Installation');
console.log('-----------------------------');
console.log('Node.js version:', process.version);
const nodeVersion = parseInt(process.version.slice(1).split('.')[0]);
if (nodeVersion >= 18) {
  console.log('✓ Node.js version is sufficient (v18+)\n');
} else {
  console.log('⚠️  Node.js version may be outdated. Recommended: v18+\n');
}

// Check 2: npm Installation
console.log('Check 2: npm Installation');
console.log('-------------------------');
try {
  const npmVersion = execSync('npm --version').toString().trim();
  console.log('npm version:', npmVersion);
  console.log('✓ npm is installed\n');
} catch (error) {
  console.log('✗ npm not found\n');
}

// Check 3: JavaScript Execution
console.log('Check 3: JavaScript Execution');
console.log('-----------------------------');
const testValue = 5 + 3;
console.log('Basic calculation (5 + 3):', testValue);
console.log('✓ JavaScript execution working\n');

// Check 4: File System Access
console.log('Check 4: File System Access');
console.log('---------------------------');
const testFile = path.join(__dirname, 'env_test.txt');
const testContent = 'Node.js environment verification successful!\nDate: ' + new Date().toLocaleString();

try {
  fs.writeFileSync(testFile, testContent);
  console.log('✓ File write successful');
  
  const content = fs.readFileSync(testFile, 'utf8');
  console.log('✓ File read successful');
  console.log('\nTest file contents:');
  console.log(content);
  
  fs.unlinkSync(testFile);
  console.log('\n✓ File cleanup successful\n');
} catch (error) {
  console.log('✗ File system error:', error.message, '\n');
}

// Check 5: System Information
console.log('Check 5: System Information');
console.log('---------------------------');
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('✓ System information accessible\n');

// Summary
console.log('=== Environment Verification Complete! ===\n');
console.log('Your Node.js environment is ready for development.\n');
console.log('📝 Next Steps:');
console.log('  1. Learn command line basics (see monday_cli_exercises.sh)');
console.log('  2. Set up Git and GitHub');
console.log('  3. Configure VS Code with extensions');
console.log('  4. Complete Week 1 assignments\n');
console.log('💡 Week 1 Focus: Setting up your development environment');
console.log('   Programming concepts will be covered in later weeks!\n');