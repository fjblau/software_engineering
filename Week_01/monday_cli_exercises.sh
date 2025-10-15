#!/bin/bash

# Week 1 - Monday: Command Line Exercises (EXECUTABLE VERSION)
# This script guides you through command line practice with actual execution

echo "=== Week 1 Monday: Command Line Practice ==="
echo "This script will guide you through hands-on CLI exercises"

# Clean up any previous practice
if [ -d "bootcamp" ]; then
    echo "Cleaning up previous practice session..."
    rm -rf bootcamp
fi

# Exercise 1: Navigation Basics

# Current working directory:
pwd

# Files in current directory:
ls

# Files with details:
ls -la

read -p "Press Enter to continue..."

# Exercise 2: Creating Directory Structure

# Creating bootcamp directory structure...
mkdir -p bootcamp/week1/notes
mkdir -p bootcamp/week1/projects
mkdir bootcamp/week2

echo "✓ Created: bootcamp/week1/notes"
echo "✓ Created: bootcamp/week1/projects"
echo "✓ Created: bootcamp/week2"

# Directory tree:
ls -R bootcamp

read -p "Press Enter to continue..."

# Exercise 3: Creating Files

# Navigating to bootcamp/week1/notes...
cd bootcamp/week1/notes

echo "Current directory: $(pwd)"

# Creating note files...
touch monday_notes.txt
touch tuesday.txt wednesday.txt thursday.txt friday.txt

echo "✓ Created: monday_notes.txt"
echo "✓ Created: tuesday.txt, wednesday.txt, thursday.txt, friday.txt"

# Files in current directory:
ls -la

read -p "Press Enter to continue..."

# Exercise 4: Working with File Content

# Adding content to monday_notes.txt...
echo 'My first command line note' > monday_notes.txt
echo 'Learning the terminal is powerful!' >> monday_notes.txt
echo 'I am becoming a professional developer!' >> monday_notes.txt

echo "✓ Content added"

# Content of monday_notes.txt:
cat monday_notes.txt

read -p "Press Enter to continue..."

# Exercise 5: Copying Files

# Copying monday_notes.txt to projects folder...
cp monday_notes.txt ../projects/

echo "✓ Copied: monday_notes.txt → ../projects/"

# Files in projects folder:
ls -la ../projects/

read -p "Press Enter to continue..."

# Exercise 6: Moving Files

# Moving tuesday.txt to week2 folder...
mv tuesday.txt ../../week2/

echo "✓ Moved: tuesday.txt → ../../week2/"

# Files remaining in notes:
ls

# Files in week2:
ls ../../week2/

read -p "Press Enter to continue..."

# Exercise 7: Copying Directories

# Copying entire notes folder to week2...
cp -r ../notes ../../week2/

echo "✓ Copied: entire notes directory → week2/"

# Week2 contents:
ls -R ../../week2/

read -p "Press Enter to continue..."

# Exercise 8: Finding Files

cd ../../..

# Finding all .txt files in bootcamp directory...
find bootcamp -name "*.txt"

# Searching for 'command line' in files...
grep -r "command line" bootcamp/

read -p "Press Enter to continue..."

# Exercise 9: File Permissions

# Current permissions on monday_notes.txt:
ls -l bootcamp/week1/notes/monday_notes.txt

# Making a test script executable...
echo '#!/bin/bash' > test_script.sh
echo 'echo "This script is executable!"' >> test_script.sh
chmod +x test_script.sh

echo "✓ Created executable script"

# New permissions:
ls -l test_script.sh

# Running the script:
./test_script.sh

read -p "Press Enter to continue..."

# Exercise 10: Command Chaining

# Chaining commands: cd && ls && pwd
cd bootcamp && ls -la && pwd

# Using pipe to filter output:
ls -la | grep "week"

cd ..

read -p "Press Enter to continue..."

# Exercise 11: Environment Variables

export CLI_STUDENT="$(whoami)"

echo "Set environment variable: CLI_STUDENT=$CLI_STUDENT"

# Your PATH variable contains:
echo $PATH | tr ':' '\n' | head -5

echo "... (showing first 5 paths)"

read -p "Press Enter to continue..."

# CHALLENGE: Scavenger Hunt

echo "=== CHALLENGE: Command Line Scavenger Hunt ==="
echo "Now it's your turn! Create this exact structure:"

echo "developer_journey/"
echo "  ├── about.txt (contains 'I am learning to be a developer')"
echo "  ├── skills/"
echo "  │   ├── javascript.txt"
echo "  │   └── python.txt"
echo "  └── projects/"
echo "      ├── week1_project/"
echo "      │   └── README.md"
echo "      └── portfolio/"
echo "          └── index.html"

read -p "Press Enter when you think you're done..."

# Verify challenge

echo "Verifying your solution..."

if [ -d "developer_journey" ]; then
    echo "✓ developer_journey directory exists"
    
    if [ -f "developer_journey/about.txt" ]; then
        echo "✓ about.txt exists"
        if grep -q "I am learning to be a developer" developer_journey/about.txt; then
            echo "  ✓ Contains correct text"
        else
            echo "  ✗ Missing or incorrect text"
        fi
    else
        echo "✗ about.txt not found"
    fi
    
    [ -d "developer_journey/skills" ] && echo "✓ skills/ directory exists" || echo "✗ skills/ directory missing"
    [ -f "developer_journey/skills/javascript.txt" ] && echo "✓ javascript.txt exists" || echo "✗ javascript.txt missing"
    [ -f "developer_journey/skills/python.txt" ] && echo "✓ python.txt exists" || echo "✗ python.txt missing"
    [ -d "developer_journey/projects" ] && echo "✓ projects/ directory exists" || echo "✗ projects/ directory missing"
    [ -d "developer_journey/projects/week1_project" ] && echo "✓ week1_project/ exists" || echo "✗ week1_project/ missing"
    [ -f "developer_journey/projects/week1_project/README.md" ] && echo "✓ README.md exists" || echo "✗ README.md missing"
    [ -d "developer_journey/projects/portfolio" ] && echo "✓ portfolio/ exists" || echo "✗ portfolio/ missing"
    [ -f "developer_journey/projects/portfolio/index.html" ] && echo "✓ index.html exists" || echo "✗ index.html missing"

else
    echo "✗ developer_journey directory not found"
    
    echo "Try again! Here's the solution if you need help:"
    
    echo "mkdir -p developer_journey/skills"
    echo "mkdir -p developer_journey/projects/week1_project"
    echo "mkdir -p developer_journey/projects/portfolio"
    echo "echo 'I am learning to be a developer' > developer_journey/about.txt"
    echo "touch developer_journey/skills/javascript.txt"
    echo "touch developer_journey/skills/python.txt"
    echo "touch developer_journey/projects/week1_project/README.md"
    echo "touch developer_journey/projects/portfolio/index.html"

fi

echo "=== Exercise Complete ==="

echo "📊 What you practiced:"
echo "  ✓ Navigation (pwd, cd, ls)"
echo "  ✓ Creating directories (mkdir)"
echo "  ✓ Creating files (touch, echo)"
echo "  ✓ Copying files and directories (cp)"
echo "  ✓ Moving files (mv)"
echo "  ✓ Finding files (find, grep)"
echo "  ✓ File permissions (chmod)"
echo "  ✓ Command chaining (&&, |)"
echo "  ✓ Environment variables (export, echo)"

echo "🧹 Cleanup:"
echo "To remove practice directories, run:"
echo "  rm -rf bootcamp developer_journey test_script.sh"

echo "💡 Remember: Use 'man <command>' to learn more about any command"
