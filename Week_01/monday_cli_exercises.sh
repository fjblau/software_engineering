#!/bin/bash

# Week 1 - Monday: Command Line Exercises
# Complete these exercises to practice command line navigation and file operations

echo "=== Week 1 Monday: Command Line Practice ==="
echo "Follow the instructions below and execute each command"
echo ""

# Exercise 1: Navigation Basics
echo "Exercise 1: Navigation Basics"
echo "------------------------------"
echo "1. Print your current working directory"
echo "   Command: pwd"
echo ""
echo "2. List all files in the current directory"
echo "   Command: ls"
echo "   Command: ls -la  (shows hidden files and details)"
echo ""
echo "3. Navigate to your home directory"
echo "   Command: cd ~"
echo ""

# Exercise 2: Creating Directory Structure
echo "Exercise 2: Creating Directory Structure"
echo "-----------------------------------------"
echo "Create the following structure:"
echo "bootcamp/"
echo "  ├── week1/"
echo "  │   ├── notes/"
echo "  │   └── projects/"
echo "  └── week2/"
echo ""
echo "Commands:"
echo "  mkdir -p bootcamp/week1/notes"
echo "  mkdir -p bootcamp/week1/projects"
echo "  mkdir bootcamp/week2"
echo ""

# Exercise 3: Creating and Editing Files
echo "Exercise 3: Creating Files"
echo "--------------------------"
echo "1. Navigate into bootcamp/week1/notes"
echo "   Command: cd bootcamp/week1/notes"
echo ""
echo "2. Create a file called monday_notes.txt"
echo "   Command: touch monday_notes.txt"
echo ""
echo "3. Create multiple files at once"
echo "   Command: touch tuesday.txt wednesday.txt thursday.txt friday.txt"
echo ""

# Exercise 4: Copying and Moving Files
echo "Exercise 4: Copying and Moving"
echo "------------------------------"
echo "1. Copy monday_notes.txt to the projects folder"
echo "   Command: cp monday_notes.txt ../projects/"
echo ""
echo "2. Move tuesday.txt to the week2 folder"
echo "   Command: mv tuesday.txt ../../week2/"
echo ""
echo "3. Copy entire notes folder to week2"
echo "   Command: cp -r ../notes ../../week2/"
echo ""

# Exercise 5: File Content
echo "Exercise 5: Working with File Content"
echo "--------------------------------------"
echo "1. Add content to a file using echo"
echo "   Command: echo 'My first command line note' > monday_notes.txt"
echo ""
echo "2. Append more content"
echo "   Command: echo 'Learning the terminal is powerful!' >> monday_notes.txt"
echo ""
echo "3. Display file contents"
echo "   Command: cat monday_notes.txt"
echo ""

# Exercise 6: Finding Files
echo "Exercise 6: Finding Things"
echo "--------------------------"
echo "1. Find all .txt files in bootcamp directory"
echo "   Command: find bootcamp -name '*.txt'"
echo ""
echo "2. Search for content within files"
echo "   Command: grep 'command line' bootcamp/week1/notes/monday_notes.txt"
echo ""

# Exercise 7: Removing Files (BE CAREFUL!)
echo "Exercise 7: Removing Files and Directories"
echo "------------------------------------------"
echo "⚠️  CAUTION: These commands permanently delete files!"
echo ""
echo "1. Remove a single file"
echo "   Command: rm wednesday.txt"
echo ""
echo "2. Remove a directory and its contents"
echo "   Command: rm -rf bootcamp/week2/notes"
echo ""
echo "Note: Always double-check before using rm -rf!"
echo ""

# Exercise 8: Permissions
echo "Exercise 8: File Permissions"
echo "----------------------------"
echo "1. View file permissions"
echo "   Command: ls -l monday_notes.txt"
echo ""
echo "2. Make a file executable"
echo "   Command: chmod +x script.sh"
echo ""
echo "3. Change permissions using numbers (755 = rwxr-xr-x)"
echo "   Command: chmod 755 script.sh"
echo ""

# Exercise 9: Environment Variables
echo "Exercise 9: Environment Variables"
echo "---------------------------------"
echo "1. View all environment variables"
echo "   Command: env"
echo ""
echo "2. View specific variable (like PATH)"
echo "   Command: echo $PATH"
echo ""
echo "3. Set a temporary variable"
echo "   Command: export MY_NAME='Your Name'"
echo "   Command: echo $MY_NAME"
echo ""

# Exercise 10: Chaining Commands
echo "Exercise 10: Command Chaining"
echo "-----------------------------"
echo "1. Run multiple commands in sequence"
echo "   Command: cd bootcamp && ls -la && pwd"
echo ""
echo "2. Run command only if previous succeeds"
echo "   Command: mkdir test && cd test"
echo ""
echo "3. Pipe output from one command to another"
echo "   Command: ls -la | grep '.txt'"
echo ""

# CHALLENGE: Scavenger Hunt
echo ""
echo "=== CHALLENGE: Command Line Scavenger Hunt ==="
echo "Create this exact structure and file system:"
echo ""
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
echo ""
echo "Submit your solution as a series of commands in a file called 'scavenger_solution.sh'"
echo ""

# Solution (Hidden - for instructor reference)
: '
mkdir -p developer_journey/skills
mkdir -p developer_journey/projects/week1_project
mkdir -p developer_journey/projects/portfolio
cd developer_journey
echo "I am learning to be a developer" > about.txt
touch skills/javascript.txt skills/python.txt
touch projects/week1_project/README.md
touch projects/portfolio/index.html
'

echo "=== End of Monday Command Line Exercises ==="
echo "Practice these commands until they feel natural!"
echo "Remember: Use 'man <command>' to read the manual for any command"
