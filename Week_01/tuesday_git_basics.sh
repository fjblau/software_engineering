#!/bin/bash

# Week 1 - Tuesday: Git Fundamentals Reference
# Essential Git commands for repos, commits, branching, and collaboration

echo "=== Week 1 Tuesday: Git Fundamentals ==="
echo ""

# ============================================
# PART 1: INITIAL GIT SETUP
# ============================================
echo "PART 1: Initial Git Configuration"
echo "=================================="
echo ""

# Configure your identity
echo "# Configure your Git identity (do this once)"
echo "git config --global user.name 'Your Name'"
echo "git config --global user.email 'your.email@example.com'"
echo ""

# View your configuration
echo "# View your Git configuration"
echo "git config --list"
echo ""

# Set default branch name to main
echo "# Set default branch name to 'main'"
echo "git config --global init.defaultBranch main"
echo ""
echo ""

# ============================================
# PART 2: LOCAL REPOSITORY BASICS
# ============================================
echo "PART 2: Working with Local Repositories"
echo "========================================"
echo ""

# Initialize a repository
echo "# Create a new Git repository"
echo "cd my-project"
echo "git init"
echo ""

# Check status
echo "# Check status of your repository"
echo "git status"
echo ""

# Add files to staging
echo "# Add files to staging area"
echo "git add filename.txt          # Add specific file"
echo "git add .                      # Add all files in current directory"
echo "git add *.js                   # Add all JavaScript files"
echo ""

# Commit changes
echo "# Commit staged changes"
echo "git commit -m 'Add initial files'"
echo ""
echo "# Commit with longer message (opens editor)"
echo "git commit"
echo ""

# View commit history
echo "# View commit history"
echo "git log"
echo "git log --oneline              # Compact view"
echo "git log --graph --oneline      # Visual branch graph"
echo ""
echo ""

# ============================================
# PART 3: BRANCHING
# ============================================
echo "PART 3: Working with Branches"
echo "=============================="
echo ""

# Create and manage branches
echo "# Create a new branch"
echo "git branch feature-login"
echo ""

echo "# List all branches"
echo "git branch"
echo ""

echo "# Switch to a branch"
echo "git checkout feature-login"
echo ""

echo "# Create and switch in one command"
echo "git checkout -b feature-signup"
echo ""

echo "# Switch back to main"
echo "git checkout main"
echo ""

# Merging branches
echo "# Merge a branch into current branch"
echo "git merge feature-login"
echo ""

# Delete a branch
echo "# Delete a branch (after merging)"
echo "git branch -d feature-login"
echo ""
echo ""

# ============================================
# PART 4: REMOTE REPOSITORIES (GITHUB)
# ============================================
echo "PART 4: Working with Remote Repositories"
echo "========================================="
echo ""

# SSH Key Setup (for authentication)
echo "# Generate SSH key (if you don't have one)"
echo "ssh-keygen -t ed25519 -C 'your.email@example.com'"
echo ""
echo "# Copy SSH key to clipboard (Mac)"
echo "pbcopy < ~/.ssh/id_ed25519.pub"
echo ""
echo "# Copy SSH key to clipboard (Linux)"
echo "xclip -selection clipboard < ~/.ssh/id_ed25519.pub"
echo ""
echo "# Then add the key to GitHub: Settings → SSH Keys → New SSH Key"
echo ""

# Connecting to remote
echo "# Connect local repo to GitHub (after creating repo on GitHub)"
echo "git remote add origin git@github.com:username/repo-name.git"
echo ""

echo "# Verify remote connection"
echo "git remote -v"
echo ""

echo "# Push to remote repository"
echo "git push -u origin main        # First push (sets upstream)"
echo "git push                       # Subsequent pushes"
echo ""

# Cloning repositories
echo "# Clone an existing repository"
echo "git clone git@github.com:username/repo-name.git"
echo ""

# Pulling changes
echo "# Pull changes from remote"
echo "git pull                       # Pull from current branch's remote"
echo "git pull origin main           # Pull from specific branch"
echo ""
echo ""

# ============================================
# PART 5: COLLABORATION WORKFLOW
# ============================================
echo "PART 5: Collaboration Workflow"
echo "==============================="
echo ""

echo "# Typical collaboration workflow:"
echo ""
echo "1. Clone the repository"
echo "   git clone git@github.com:username/repo-name.git"
echo "   cd repo-name"
echo ""
echo "2. Create a feature branch"
echo "   git checkout -b feature/add-login"
echo ""
echo "3. Make changes and commit"
echo "   git add ."
echo "   git commit -m 'Add login form'"
echo ""
echo "4. Push your branch to remote"
echo "   git push -u origin feature/add-login"
echo ""
echo "5. Create Pull Request on GitHub"
echo "   (Done through GitHub web interface)"
echo ""
echo "6. After PR is merged, update your local main"
echo "   git checkout main"
echo "   git pull origin main"
echo ""
echo "7. Delete old feature branch"
echo "   git branch -d feature/add-login"
echo ""
echo ""

# ============================================
# PART 6: HANDLING MERGE CONFLICTS
# ============================================
echo "PART 6: Handling Merge Conflicts"
echo "================================="
echo ""

echo "# When a merge conflict occurs:"
echo "1. Git will mark conflicted files"
echo "2. Open the files and look for conflict markers:"
echo "   <<<<<<< HEAD"
echo "   Your changes"
echo "   ======="
echo "   Their changes"
echo "   >>>>>>> branch-name"
echo ""
echo "3. Edit the file to resolve conflicts"
echo "4. Remove the conflict markers"
echo "5. Add the resolved files:"
echo "   git add filename.txt"
echo ""
echo "6. Complete the merge:"
echo "   git commit -m 'Resolve merge conflict'"
echo ""
echo ""

# ============================================
# PART 7: UNDOING CHANGES
# ============================================
echo "PART 7: Undoing Changes"
echo "======================="
echo ""

echo "# Discard changes in working directory"
echo "git checkout -- filename.txt"
echo ""

echo "# Unstage a file (keep changes)"
echo "git reset HEAD filename.txt"
echo ""

echo "# Undo last commit (keep changes)"
echo "git reset --soft HEAD~1"
echo ""

echo "# Undo last commit (discard changes) ⚠️ DANGEROUS"
echo "git reset --hard HEAD~1"
echo ""

echo "# Revert a commit (creates new commit)"
echo "git revert <commit-hash>"
echo ""
echo ""

# ============================================
# PART 8: USEFUL COMMANDS
# ============================================
echo "PART 8: Useful Commands"
echo "======================="
echo ""

echo "# See what changed"
echo "git diff                       # Changes not yet staged"
echo "git diff --staged              # Changes staged for commit"
echo ""

echo "# See who changed what"
echo "git blame filename.txt"
echo ""

echo "# Stash changes temporarily"
echo "git stash                      # Save changes for later"
echo "git stash pop                  # Bring back stashed changes"
echo "git stash list                 # See all stashes"
echo ""

echo "# Clean up"
echo "git clean -fd                  # Remove untracked files/directories"
echo ""
echo ""

# ============================================
# EXERCISE: PAIR COLLABORATION
# ============================================
echo "=== TUESDAY EXERCISE: Pair Collaboration ==="
echo ""
echo "Work with a partner to complete this exercise:"
echo ""
echo "Person A (Repository Owner):"
echo "  1. Create a new repository on GitHub called 'pair-exercise'"
echo "  2. Clone it locally"
echo "  3. Create a README.md with your name"
echo "  4. Commit and push"
echo "  5. Add Person B as a collaborator on GitHub"
echo ""
echo "Person B (Collaborator):"
echo "  1. Clone Person A's repository"
echo "  2. Create a new branch: feature/add-about"
echo "  3. Create about.txt with information about yourself"
echo "  4. Commit and push the branch"
echo "  5. Create a Pull Request on GitHub"
echo ""
echo "Person A:"
echo "  1. Review the Pull Request"
echo "  2. Add a comment"
echo "  3. Merge the Pull Request"
echo ""
echo "Both:"
echo "  1. Person B: Pull the updated main branch"
echo "  2. Discuss what you learned"
echo ""
echo ""

# ============================================
# BEST PRACTICES
# ============================================
echo "=== GIT BEST PRACTICES ==="
echo ""
echo "✓ Commit often with clear messages"
echo "✓ Pull before you push"
echo "✓ Use branches for features"
echo "✓ Keep commits focused (one logical change)"
echo "✓ Write meaningful commit messages:"
echo "  - Use present tense: 'Add feature' not 'Added feature'"
echo "  - Be specific: 'Add login form validation' not 'Update code'"
echo "✓ Review your changes before committing (git diff)"
echo "✓ Never commit sensitive data (passwords, API keys)"
echo ""

echo "=== End of Tuesday Git Reference ==="
echo "Practice these commands to build muscle memory!"
