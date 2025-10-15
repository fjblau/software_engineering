#!/bin/bash

# Week 1 - Tuesday: Git Fundamentals (EXECUTABLE VERSION)
# This script guides you through hands-on Git practice with actual execution

echo "=== Week 1 Tuesday: Git Fundamentals Practice ==="
echo "This script will guide you through Git exercises"
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "✗ Git is not installed. Please install Git first."
    exit 1
fi

echo "✓ Git is installed: $(git --version)"
echo ""

# Check Git configuration
echo "Checking your Git configuration..."
GIT_NAME=$(git config --global user.name)
GIT_EMAIL=$(git config --global user.email)

if [ -z "$GIT_NAME" ] || [ -z "$GIT_EMAIL" ]; then
    echo "⚠️  Git user information not configured"
    echo ""
    read -p "Enter your name: " NEW_NAME
    read -p "Enter your email: " NEW_EMAIL
    git config --global user.name "$NEW_NAME"
    git config --global user.email "$NEW_EMAIL"
    echo "✓ Git configured with:"
    echo "  Name: $NEW_NAME"
    echo "  Email: $NEW_EMAIL"
else
    echo "✓ Git already configured:"
    echo "  Name: $GIT_NAME"
    echo "  Email: $GIT_EMAIL"
fi

echo ""
read -p "Press Enter to continue..."
echo ""

# Clean up any previous practice
if [ -d "git-practice" ]; then
    echo "Cleaning up previous practice session..."
    rm -rf git-practice
fi

# Exercise 1: Initialize a Repository
echo "=== Exercise 1: Initialize a Repository ==="
echo "Creating a new directory: git-practice"
mkdir git-practice
cd git-practice
echo "✓ Directory created"
echo ""

echo "Initializing Git repository..."
git init
echo "✓ Git repository initialized"
echo ""

echo "Checking repository status..."
git status
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 2: First Commit
echo "=== Exercise 2: Making Your First Commit ==="
echo "Creating README.md..."
cat > README.md << 'EOF'
# My Git Practice Repository

This repository is for learning Git fundamentals.

## What I'm Learning
- Git basics
- Commits and branches
- Collaboration workflows
EOF
echo "✓ README.md created"
echo ""

echo "Adding file to staging area..."
git add README.md
echo "✓ File staged"
echo ""

echo "Current status:"
git status
echo ""

echo "Making first commit..."
git commit -m "Initial commit: Add README"
echo "✓ First commit created"
echo ""

echo "Viewing commit history..."
git log --oneline
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 3: Multiple Commits
echo "=== Exercise 3: Multiple Commits ==="
echo "Creating index.html..."
cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>Git Practice</title>
</head>
<body>
    <h1>Learning Git</h1>
    <p>This is my practice project.</p>
</body>
</html>
EOF
echo "✓ index.html created"
echo ""

echo "Creating style.css..."
cat > style.css << 'EOF'
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}
EOF
echo "✓ style.css created"
echo ""

echo "Adding all files..."
git add .
echo "✓ Files staged"
echo ""

echo "Committing changes..."
git commit -m "Add HTML and CSS files"
echo "✓ Commit created"
echo ""

echo "Commit history:"
git log --oneline
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 4: Branching
echo "=== Exercise 4: Working with Branches ==="
echo "Current branch:"
git branch
echo ""

echo "Creating feature branch: add-javascript"
git branch add-javascript
echo "✓ Branch created"
echo ""

echo "All branches:"
git branch
echo ""

echo "Switching to add-javascript branch..."
git checkout add-javascript
echo "✓ Switched to add-javascript"
echo ""

echo "Creating script.js in feature branch..."
cat > script.js << 'EOF'
console.log('Hello from Git practice!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
});
EOF
echo "✓ script.js created"
echo ""

echo "Committing on feature branch..."
git add script.js
git commit -m "Add JavaScript file"
echo "✓ Committed on feature branch"
echo ""

echo "Commit history on feature branch:"
git log --oneline
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 5: Merging
echo "=== Exercise 5: Merging Branches ==="
echo "Switching back to main branch..."
git checkout main
echo "✓ On main branch"
echo ""

echo "Files in main branch (before merge):"
ls -la
echo ""

echo "Merging add-javascript into main..."
git merge add-javascript -m "Merge add-javascript feature"
echo "✓ Merge complete"
echo ""

echo "Files in main branch (after merge):"
ls -la
echo ""

echo "Commit history after merge:"
git log --oneline --graph
echo ""

echo "Deleting feature branch (good practice after merge)..."
git branch -d add-javascript
echo "✓ Feature branch deleted"
echo ""

echo "Remaining branches:"
git branch
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 6: Viewing Changes
echo "=== Exercise 6: Viewing Changes ==="
echo "Making a change to README.md..."
echo "" >> README.md
echo "## Recent Updates" >> README.md
echo "- Added HTML, CSS, and JavaScript files" >> README.md
echo "- Learned about branching and merging" >> README.md
echo "✓ File modified"
echo ""

echo "Viewing changes (before staging):"
git diff README.md
echo ""

echo "Staging the changes..."
git add README.md
echo "✓ Changes staged"
echo ""

echo "Viewing staged changes:"
git diff --staged
echo ""

echo "Committing changes..."
git commit -m "Update README with recent changes"
echo "✓ Changes committed"
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 7: Undoing Changes
echo "=== Exercise 7: Undoing Changes ==="
echo "Making an unwanted change to style.css..."
echo "/* This is a bad change */" >> style.css
echo "✓ Bad change made"
echo ""

echo "Current status:"
git status
echo ""

echo "Discarding the change..."
git checkout -- style.css
echo "✓ Change discarded"
echo ""

echo "Status after discard:"
git status
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 8: Git Log Variations
echo "=== Exercise 8: Viewing History ==="
echo "Compact log:"
git log --oneline
echo ""

echo "Detailed log (last 3 commits):"
git log -3
echo ""

echo "Log with graph:"
git log --oneline --graph --all
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 9: .gitignore
echo "=== Exercise 9: Using .gitignore ==="
echo "Creating some files that shouldn't be tracked..."
echo "temp data" > temp.log
echo "secret key" > .env
echo "✓ Created temp.log and .env"
echo ""

echo "Status before .gitignore:"
git status
echo ""

echo "Creating .gitignore..."
cat > .gitignore << 'EOF'
# Log files
*.log

# Environment variables
.env

# Node modules (for future use)
node_modules/

# OS files
.DS_Store
Thumbs.db
EOF
echo "✓ .gitignore created"
echo ""

echo "Status after .gitignore:"
git status
echo ""
echo "Notice: temp.log and .env are now ignored!"
echo ""

echo "Committing .gitignore..."
git add .gitignore
git commit -m "Add .gitignore file"
echo "✓ .gitignore committed"
echo ""
read -p "Press Enter to continue..."
echo ""

# Exercise 10: Creating a Practice Conflict
echo "=== Exercise 10: Understanding Merge Conflicts ==="
echo "Creating a scenario where a conflict might occur..."
echo ""

echo "Creating conflict-demo branch..."
git checkout -b conflict-demo
echo "✓ On conflict-demo branch"
echo ""

echo "Modifying README.md in conflict-demo branch..."
sed -i.bak 's/# My Git Practice Repository/# Git Practice - Conflict Demo Branch/' README.md
git add README.md
git commit -m "Update title in conflict-demo branch"
echo "✓ Committed change in conflict-demo"
echo ""

echo "Switching back to main..."
git checkout main
echo ""

echo "Modifying README.md in main branch (same line)..."
sed -i.bak 's/# My Git Practice Repository/# Git Practice - Main Branch/' README.md
git add README.md
git commit -m "Update title in main branch"
echo "✓ Committed change in main"
echo ""

echo "Attempting to merge conflict-demo into main..."
echo "This will create a conflict..."
if git merge conflict-demo; then
    echo "✓ Merged successfully (no conflict)"
else
    echo "⚠️  Merge conflict detected!"
    echo ""
    echo "Conflict in README.md:"
    cat README.md | head -15
    echo ""
    echo "To resolve:"
    echo "1. Open README.md in an editor"
    echo "2. Look for <<<<<<< HEAD markers"
    echo "3. Edit to keep the version you want"
    echo "4. Remove conflict markers"
    echo "5. Run: git add README.md"
    echo "6. Run: git commit -m 'Resolve merge conflict'"
    echo ""
    echo "For this demo, we'll abort the merge..."
    git merge --abort
    echo "✓ Merge aborted"
fi

# Clean up conflict demo
git branch -D conflict-demo 2>/dev/null
rm -f README.md.bak
echo ""
read -p "Press Enter to continue..."
echo ""

# Final Summary
echo ""
echo "=== Git Practice Complete! ==="
echo ""
echo "📊 What you practiced:"
echo "  ✓ Initializing repositories (git init)"
echo "  ✓ Staging changes (git add)"
echo "  ✓ Committing changes (git commit)"
echo "  ✓ Creating branches (git branch)"
echo "  ✓ Switching branches (git checkout)"
echo "  ✓ Merging branches (git merge)"
echo "  ✓ Viewing history (git log)"
echo "  ✓ Viewing changes (git diff)"
echo "  ✓ Undoing changes (git checkout --)"
echo "  ✓ Using .gitignore"
echo "  ✓ Understanding merge conflicts"
echo ""

echo "📁 Your practice repository:"
git log --oneline --graph --all
echo ""

echo "📂 Files in repository:"
ls -la
echo ""

echo "💡 Next Steps:"
echo "  1. Create a GitHub account if you haven't"
echo "  2. Set up SSH keys for GitHub"
echo "  3. Create a remote repository on GitHub"
echo "  4. Push this repository: git remote add origin <url>"
echo "  5. Push: git push -u origin main"
echo ""

echo "🧹 To clean up practice repository:"
echo "  cd .."
echo "  rm -rf git-practice"
echo ""

echo "Keep practicing! Git gets easier with repetition."
