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

// Examples from Week 1 Overview
console.log('=== Quick Reference: Command Line Examples ===\n');
console.log('Navigation:');
console.log('  pwd                    # Print working directory');
console.log('  ls -la                 # List all files (detailed)');
console.log('  cd Documents           # Change directory');
console.log('  cd ..                  # Go up one level\n');

console.log('File Operations:');
console.log('  mkdir projects         # Create directory');
console.log('  mkdir -p a/b/c         # Create nested directories');
console.log('  touch README.md        # Create file');
console.log('  cp file.txt file2.txt  # Copy file');
console.log('  mv old.txt new.txt     # Move/rename file');
console.log('  rm file.txt            # Delete file\n');

console.log('=== Quick Reference: Git Examples ===\n');
console.log('Basic Workflow:');
console.log('  git init               # Initialize repository');
console.log('  git add .              # Stage all changes');
console.log('  git commit -m "message" # Commit changes');
console.log('  git push               # Push to remote\n');

console.log('Branching:');
console.log('  git checkout -b feature-name  # Create & switch branch');
console.log('  git checkout main             # Switch to main');
console.log('  git merge feature-name        # Merge branch\n');

console.log('=== VS Code Recommended Extensions ===\n');
console.log('JavaScript:');
console.log('  • ESLint - Code linting');
console.log('  • Prettier - Code formatting');
console.log('  • JavaScript (ES6) code snippets\n');

console.log('Python:');
console.log('  • Python - Microsoft official extension');
console.log('  • Pylance - Fast Python language server');
console.log('  • Python Test Explorer\n');

console.log('Git Integration:');
console.log('  • GitLens - Supercharged Git integration');
console.log('  • Git Graph - Visualize Git history');
console.log('  • Git History - View file history\n');

console.log('💡 Week 1 Focus: Setting up your development environment');
console.log('   Programming concepts will be covered in later weeks!\n');