# Week 1 Teacher's Guide: Setting Up Your Gear
## Professional Development Environment

**Duration:** 30 hours (6.5 hours M-Th, 4 hours F)  
**Dates:** February 17-21, 2025  
**Focus:** Tools, Professional Identity, Agile Foundations

---

## Table of Contents
1. [Overview](#overview)
2. [Learning Objectives](#learning-objectives)
3. [Pre-Class Setup Requirements](#pre-class-setup-requirements)
4. [Daily Schedule & Topics](#daily-schedule--topics)
5. [Assignments & Deliverables](#assignments--deliverables)
6. [Resource Materials](#resource-materials)
7. [Assessment Rubric](#assessment-rubric)
8. [Troubleshooting Guide](#troubleshooting-guide)

---

## Overview

Week 1 is **not just setup week**—it's "become a professional developer" week. Students transition from beginners to professionals by mastering command line, Git/GitHub, IDE configuration, and Agile methodology. This foundation carries through all 16 weeks.

### Key Teaching Points
- Frame as **professional identity establishment**, not just tools
- Emphasize that muscle memory for shortcuts takes practice
- Connect each tool to real-world workflows
- Use Agile ceremonies from day one
- Celebrate small wins (first commit, first branch merge, etc.)

### Week 1 Success Metrics
✅ Students comfortable with command line navigation  
✅ Students using Git confidently for version control  
✅ Students have professional GitHub profiles  
✅ Students have optimized development environment  
✅ Students understand Agile ceremonies  
✅ Students can write user stories  
✅ Students use project boards for planning

---

## Learning Objectives

By the end of Week 1, students will be able to:

### Command Line Mastery
- Navigate directory structures confidently using `pwd`, `ls`, `cd`
- Distinguish between absolute and relative paths
- Create, move, copy, and delete files and directories
- Use pipes and command chaining (`&&`, `|`)
- Manage file permissions with `chmod`

### Git & GitHub Proficiency
- Initialize local repositories with `git init`
- Stage and commit changes with descriptive messages
- Push and pull from remote repositories
- Create and merge branches
- Resolve basic merge conflicts
- Understand Git vs GitHub distinction
- Set up SSH authentication

### IDE Optimization (VS Code)
- Configure VS Code for JavaScript and Python development
- Install and enable essential extensions
- Use keyboard shortcuts to increase efficiency
- Perform Git operations within IDE
- Utilize split editors and multi-cursor editing
- Customize workspace settings

### Agile Practices
- Participate in daily standups (Yesterday, Today, Blockers)
- Write user stories in proper format with acceptance criteria
- Estimate work using story points
- Understand sprint ceremonies (Planning, Review, Retrospective)
- Use project management boards to track progress

### Professional Development Identity
- Create a professional GitHub profile
- Write clear, meaningful README files
- Establish professional Git workflow habits
- Use professional terminology and communication

---

## Pre-Class Setup Requirements

### Teacher Preparation (Before Monday)

**Required Actions:**
1. ✅ Verify all students have GitHub accounts created
2. ✅ Set up course GitHub organization (if using)
3. ✅ Create template repository for assignments
4. ✅ Test all exercise scripts on multiple OS platforms
5. ✅ Prepare demo accounts for live demonstrations
6. ✅ Arrange breakout rooms for group exercises (if virtual)
7. ✅ Install all recommended extensions in demo VS Code

**Classroom Setup:**
- Ensure all workstations have stable internet
- Test terminal/command line access
- Verify screen sharing capability
- Prepare printed reference cards (Git commands, shortcuts)

### Student Pre-Requisites (Send Email Friday Before Week 1)

Provide students with pre-class checklist:

**MUST HAVE BEFORE MONDAY:**
- [ ] GitHub account created and verified
- [ ] Git installed and verified (`git --version` in terminal)
- [ ] VS Code installed
- [ ] Terminal/command line access (Terminal on Mac, PowerShell on Windows)
- [ ] Node.js installed (v18+) - verify with `node --version`

**NICE TO HAVE:**
- [ ] Python 3.8+ installed
- [ ] Jupyter installed
- [ ] Familiar with your operating system's file system

**Run This Verification Command (send to students):**
```bash
# Mac/Linux
git --version && node --version && npm --version

# Windows PowerShell
git --version; node --version; npm --version
```

### Software & Tool Requirements

| Tool | Version | Platform | Installation |
|------|---------|----------|--------------|
| Git | 2.30+ | Mac/Windows/Linux | https://git-scm.com |
| VS Code | Latest | Mac/Windows/Linux | https://code.visualstudio.com |
| Node.js | 18+ LTS | Mac/Windows/Linux | https://nodejs.org |
| npm | 9+ | Included with Node.js | Bundled |
| Python | 3.8+ | Mac/Windows/Linux | https://python.org |
| Jupyter | Latest | Mac/Windows/Linux | `pip install jupyter` |
| Terminal | Native | Mac/Linux | Built-in |
| PowerShell | 7+ | Windows | https://github.com/PowerShell/PowerShell |

### VS Code Extensions (Required by Wednesday)

**JavaScript Development:**
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- JavaScript (ES6) code snippets (xabikos.javascriptsnippets)

**Python Development:**
- Python (ms-python.python)
- Pylance (ms-python.vscode-pylance)
- Python Test Explorer (hbenl.vscode-test-explorer)

**Git Integration:**
- GitLens (eamodio.gitlens)
- Git Graph (mhutchie.git-graph)
- Git History (donjayamanne.githistory)

**Productivity:**
- Live Server (ritwickdey.liveserver)
- Path Intellisense (christian-kohler.path-intellisense)
- Bracket Pair Colorizer (coenraads.bracket-pair-colorizer-2)
- Material Icon Theme (pkief.material-icon-theme)

---

## Daily Schedule & Topics

### MONDAY: Command Line Mastery & Professional Identity (6.5 hours)

**Learning Goals:**
- Navigate file system confidently
- Create professional GitHub account
- Configure Git locally
- Make first commit
- Understand basic CLI concepts

**9:00 - 9:30 | Welcome & Bootcamp Overview (30 min)**
- Bootcamp goals and structure
- Week 1 importance: building professional habits
- Success metrics for the week
- Icebreaker activity

**9:30 - 10:00 | Agile Sprint Introduction (30 min)**
- What is Agile methodology?
- Sprint structure and ceremonies
- Daily standup format (Yesterday, Today, Blockers)
- Why this matters for professional teams

**10:00 - 10:15 | BREAK (15 min)**

**10:15 - 11:15 | Command Line Fundamentals (60 min)**

*Teaching Strategy:* Live coding in terminal, students follow along

**Commands to Cover:**
```bash
pwd              # Where am I?
ls               # What's here?
ls -la           # Detailed view
cd               # Navigate
cd ..            # Go up
mkdir            # Create folder
touch            # Create file
cp               # Copy
mv               # Move/rename
rm               # Delete
cat              # View file
echo             # Print/append text
```

**Live Demo:**
1. Show file system navigation
2. Create project directory structure
3. Create and move files
4. Show consequences of `rm -rf` (carefully!)

**Student Activity - Command Line Challenge (25 min):**
- Provide `monday_cli_exercises.sh` script
- Students run exercises and follow along
- Pair programming approach

**11:15 - 12:00 | GitHub Professional Profile Setup (45 min)**

**Create GitHub Account (if needed):**
1. Visit github.com
2. Choose professional username (no silly nicknames)
3. Add professional photo
4. Write compelling bio

**Profile Requirements:**
- Professional photo (headshot or profile picture)
- Bio mentioning "Software Engineer" or "Developer"
- Location (optional but professional)
- Pinned repositories (will add Week 1 project)

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 1:30 | Git Configuration & Concepts (30 min)**

**Topics:**
- Git vs GitHub distinction
- Local vs remote repositories
- Three-state Git model (Working → Staging → Committed)
- Commit messages matter

**Live Demo - Configure Git:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list  # Verify
```

**Emphasize:**
- Your name and email will be on every commit
- Use professional email
- This is permanent until changed

**1:30 - 2:30 | First Repository Creation (60 min)**

**Live Coding Demo:**
1. Create new directory
2. `git init`
3. Create README.md with project description
4. `git add README.md`
5. `git commit -m "Initial commit: Add README"`
6. View log with `git log --oneline`

**Student Activity (40 min):**
- Create first repository locally
- Make at least 3 commits with meaningful messages
- Practice using the three commands daily:
  - `git status`
  - `git add`
  - `git commit -m "message"`

**2:30 - 2:45 | BREAK (15 min)**

**2:45 - 3:30 | Meaningful Commit Messages (45 min)**

**Why This Matters:**
- Future you will search commit history
- Teams rely on clear messages
- Professional habit to establish now

**Good vs Bad Examples:**

✅ **Good:**
- "Add README with installation instructions"
- "Fix login button styling for mobile"
- "Refactor user authentication module"

❌ **Bad:**
- "stuff"
- "fixed it"
- "WIP"
- "asdf"

**Rules for Commit Messages:**
1. Use imperative mood ("Add" not "Added")
2. Keep first line under 50 characters
3. Reference issues if applicable
4. Explain why, not just what

**Activity - Commit Message Audit:**
- Show real commit history from open-source projects
- Have students identify good vs bad messages
- Discuss patterns

**3:30 - 4:00 | Daily Standup & End-of-Day Reflection (30 min)**

**First Daily Standup:**
- What did you accomplish today?
- What are you working on tomorrow?
- What blocked you?

**Reflection Questions:**
- What was the most confusing concept?
- What felt natural?
- What do you want to practice more?

**Homework Assignment (detailed in Assignments section)**

---

### TUESDAY: Git Workflows & Collaboration (6.5 hours)

**Learning Goals:**
- Understand branching and merging
- Push code to GitHub
- Collaborate with others
- Handle merge conflicts
- Set up SSH authentication

**9:00 - 9:30 | Daily Standup & Review (30 min)**
- Quick check-in on Monday homework
- Common issues encountered
- Today's goals

**9:30 - 10:15 | SSH Setup for Secure Authentication (45 min)**

**Why SSH?**
- HTTPS requires password every time
- SSH keys are more secure
- Industry standard for professional development

**Live Demo - Generate SSH Key:**
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press enter for default location
# Create passphrase (optional but recommended)

# Start SSH agent and add key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Display public key (Mac)
pbcopy < ~/.ssh/id_ed25519.pub
# OR (Windows)
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

**Add to GitHub:**
1. GitHub Settings → SSH and GPG keys
2. New SSH key
3. Paste public key
4. Test: `ssh -T git@github.com`

**10:15 - 10:30 | BREAK (15 min)**

**10:30 - 11:30 | Branching Concepts & Practice (60 min)**

**Topics:**
- Branch as isolated work stream
- Main/master as production code
- Feature branches for development
- Branch naming conventions

**Convention Examples:**
- `feature/user-authentication`
- `bugfix/login-button-styling`
- `docs/add-api-documentation`

**Live Demo - Create & Merge Branch:**
```bash
# Create branch
git branch feature-login
git checkout feature-login
# Or shorthand:
git checkout -b feature-login

# Make changes, commit
echo "login code" > login.js
git add login.js
git commit -m "Add login functionality"

# Switch back to main
git checkout main

# Merge branch
git merge feature-login

# Delete branch (cleanup)
git branch -d feature-login
```

**Student Activity (35 min):**
- Run `tuesday_git_basics.sh` exercise script
- Create feature branch
- Make changes and commit
- Merge back to main
- Practice 2-3 times until comfortable

**11:30 - 12:00 | Push to Remote Repository (30 min)**

**Create Repository on GitHub:**
1. GitHub.com → New repository
2. Name it (e.g., "week1-project")
3. Add description
4. README - YES
5. .gitignore - JavaScript
6. Create

**Connect Local to Remote:**
```bash
git remote add origin https://github.com/username/week1-project.git
git branch -M main
git push -u origin main

# After first push:
git push  # Subsequent pushes
```

**Show GitHub UI:**
- Repository page
- Commits tab showing history
- Branch visualization

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:00 | Cloning & Collaboration (60 min)**

**Concepts:**
- Clone to get full copy of repository
- Pull to get latest changes
- Push to share your changes
- Workflow in teams

**Live Demo - Clone Repository:**
```bash
git clone https://github.com/username/repo.git
cd repo
git status
```

**Collaborative Workflow:**
1. Pull latest changes
2. Create feature branch
3. Make changes
4. Push branch
5. Create Pull Request (introduce concept)
6. Merge after review

**Student Activity - Pair Programming (40 min):**
- Students in pairs
- One person clones other's repository
- Makes small change and pushes
- Original person pulls changes
- Swap roles

**2:00 - 2:30 | Understanding Merge Conflicts (30 min)**

**When Do Conflicts Happen?**
- Two people edit same line
- Different branches change same code
- Not actually scary if you understand them

**Conflict Anatomy:**
```
<<<<<<< HEAD
your changes
=======
their changes
>>>>>>> branch-name
```

**How to Resolve:**
1. Open conflicted file
2. Edit to keep what you want
3. Remove conflict markers
4. Stage and commit

**Live Demo (if time):**
- Create intentional conflict
- Show markers
- Resolve together
- Commit resolved version

**2:30 - 3:00 | BREAK & Mini-Standup (30 min)**

**3:00 - 4:00 | Git Troubleshooting & Best Practices (60 min)**

**Common Mistakes & Recovery:**
```bash
# Oops - staged wrong file
git reset README.md

# Oops - made commit with wrong message
git commit --amend -m "New message"

# Oops - want to undo last commit (before push)
git reset --soft HEAD~1

# Oops - deleted file locally, get it back
git checkout -- filename
```

**Important Safety Rules:**
- ⚠️ Don't force push `--force` unless you really know what you're doing
- ⚠️ Don't delete branches hastily
- ✅ Always pull before you push
- ✅ Always create descriptive commit messages

**Best Practices:**
- Commit frequently (small, logical commits)
- Push regularly (don't let changes pile up)
- Pull before starting work
- Use branches for features
- Review your changes before committing (`git diff`)

**4:00 - 4:30 | Daily Standup & Reflection (30 min)**

**Homework Assignment (to complete by Wednesday)**

---

### WEDNESDAY: VS Code Configuration & Productivity (6.5 hours)

**Learning Goals:**
- Master VS Code interface and navigation
- Install and configure extensions
- Learn keyboard shortcuts
- Optimize for JavaScript and Python
- Use Git integration in IDE

**9:00 - 9:30 | Daily Standup & SSH Key Check (30 min)**
- Verify SSH keys working
- Troubleshoot any Git issues
- Today's path: IDE mastery

**9:30 - 10:15 | VS Code Tour & Interface (45 min)**

**Key Areas:**
- Activity bar (left sidebar)
- Editor area (center)
- Sidebar (file explorer, search, Git)
- Terminal (bottom)
- Status bar (very bottom)

**Key Shortcuts to Learn Immediately:**
```
Cmd/Ctrl + P           Quick open file
Cmd/Ctrl + Shift + P   Command palette
Cmd/Ctrl + B           Toggle sidebar
Cmd/Ctrl + `           Toggle terminal
Cmd/Ctrl + /           Comment line
Cmd/Ctrl + F           Find
Cmd/Ctrl + H           Replace
Cmd/Ctrl + D           Multi-cursor next match
```

**Live Demo - Show Efficiency:**
- Open 5 files without mouse
- Multi-cursor edit
- Search and replace
- Terminal in editor

**10:15 - 10:30 | BREAK (15 min)**

**10:30 - 11:30 | Installing Extensions (60 min)**

**Demo Installation Process:**
1. Click Extensions icon (Cmd/Ctrl + Shift + X)
2. Search for extension
3. Click Install
4. Extensions tab shows installed

**Install By Category:**

**JavaScript (Demo):**
1. ESLint
2. Prettier
3. JavaScript snippets
4. npm Intellisense

**Python (Demo):**
1. Python extension
2. Pylance
3. Python Test Explorer

**Git (Demo):**
1. GitLens
2. Git Graph
3. Git History

**General (Demo):**
1. Live Server
2. Material Icons
3. Path Intellisense

**Student Activity (35 min):**
- Students install 8-10 recommended extensions
- Explore what each does
- Customize theme and icons

**11:30 - 12:00 | Settings & Customization (30 min)**

**Access Settings:**
- Cmd/Ctrl + , (comma)
- Show settings.json option
- GUI vs JSON editing

**Key Settings to Configure:**
```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "git.autofetch": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter"
  }
}
```

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 1:45 | Keyboard Shortcuts Mastery (45 min)**

**Strategy:** Teach in layers (essential → advanced → bonus)

**Layer 1 - Essential (Use Every Day):**
- Command Palette: Cmd/Ctrl + Shift + P
- Quick Open: Cmd/Ctrl + P
- Terminal: Cmd/Ctrl + `
- Find: Cmd/Ctrl + F
- Save: Cmd/Ctrl + S

**Layer 2 - Common (Use Several Times Daily):**
- Multi-cursor: Cmd/Ctrl + D
- Comment line: Cmd/Ctrl + /
- Go to line: Cmd/Ctrl + G
- Format: Shift + Alt + F
- Delete line: Cmd/Ctrl + Shift + K

**Layer 3 - Advanced (Professional Workflow):**
- Split editor: Cmd/Ctrl + \
- All occurrences: Cmd/Ctrl + Shift + L
- Replace: Cmd/Ctrl + H
- Go back: Cmd/Ctrl + -
- Rename symbol: F2

**Live Demo - Speed Challenge:**
Time yourself:
1. Open new file with Cmd/Ctrl + P
2. Type "index.html"
3. Hit enter (creates file)
4. Type "! + Tab" (HTML boilerplate)
5. Multi-cursor edit 5 sections
6. Comment lines with Cmd/Ctrl + /
7. Format with Shift + Alt + F
8. Open terminal Cmd/Ctrl + `
9. Git add/commit without mouse

**Goal:** Complete in 2-3 minutes

**Student Activity (30 min):**
- Practice speed challenge
- Try different variations
- Gradually remove mouse dependency

**1:45 - 2:30 | Git Integration in VS Code (45 min)**

**Source Control Panel:**
- Access: Cmd/Ctrl + Shift + G
- Shows: Modified files, staged files
- UI buttons: Stage, Unstage, Commit

**Live Demo - Full Git Workflow:**
1. Make changes in editor
2. See in Source Control
3. Click + to stage
4. Type commit message in box
5. Cmd/Ctrl + Enter to commit
6. Click ... menu → Push

**Advantages Over Terminal:**
- Visual diff highlighting
- Easy staging/unstaging
- See what changed at a glance
- Less typing (sometimes)

**When to Use Terminal vs IDE:**
- **IDE:** Basic workflow, staging, committing
- **Terminal:** Complex operations, rebase, reset

**2:30 - 2:45 | BREAK (15 min)**

**2:45 - 3:30 | Integrated Terminal & Project Setup (45 min)**

**Terminal in VS Code:**
- Cmd/Ctrl + ` to toggle
- Create new terminal: Cmd/Ctrl + Shift + `
- Terminal starts in project root
- Run scripts, npm commands, git commands

**Demo:**
```bash
# Terminal in VS Code
npm --version
node --version
git status
python --version
```

**Best Practices:**
- Keep terminal clean
- One terminal per task
- Can use both PowerShell and bash (Mac)

**Creating Workspace Configuration:**
- Create `.vscode/settings.json`
- Create `.vscode/extensions.json`
- Share these with team
- Ensures consistent environment

**3:30 - 4:00 | Coding Snippets & Time Savers (30 min)**

**What Are Snippets?**
- Code templates
- Trigger with keyword + Tab
- Can include placeholders

**Create Custom Snippet:**
1. Cmd/Ctrl + Shift + P
2. "Configure User Snippets"
3. Choose language
4. Add custom snippet

**Example - Console Log:**
```json
{
  "Console Log": {
    "prefix": "log",
    "body": [
      "console.log('$1');",
      "$2"
    ]
  }
}
```

**Benefits:**
- Reduces typing
- Ensures consistency
- Faster coding
- Professional efficiency

**4:00 - 4:30 | Daily Standup & Assignment Review (30 min)**

**Homework Assignment (to complete by Thursday)**

---

### THURSDAY: Agile Methodology & User Stories (6.5 hours)

**Learning Goals:**
- Understand Agile vs Waterfall
- Learn Scrum framework
- Participate in ceremonies
- Write professional user stories
- Estimate work with story points

**9:00 - 9:30 | Daily Standup (Professional Version) (30 min)**

**Formal Standup Format:**
- Each person 2 minutes max
- Standing (yes, really!)
- Three things:
  1. What did you complete yesterday?
  2. What are you working on today?
  3. What's blocking you?

**Lead By Example:**
- Model first standup
- Show good timeboxing
- Demonstrate blocking problems
- Ask clarifying questions

**9:30 - 10:30 | Agile vs Waterfall Methodologies (60 min)**

**Waterfall (Traditional):**
- Sequential phases
- Requirements → Design → Build → Test → Deploy
- Each phase complete before next
- Changes are expensive
- Long feedback loop
- Works for: Embedded systems, hardware

**Agile (Modern):**
- Iterative and incremental
- Short cycles (sprints)
- Continuous feedback
- Change is expected
- Working software often
- Works for: Web, mobile, startups, fast-moving teams

**Visual Comparison:**

```
WATERFALL:  Plan ➜ Design ➜ Build ➜ Test ➜ Deploy (6-12 months)

AGILE:      Sprint 1 ➜ Sprint 2 ➜ Sprint 3 ➜ Sprint 4
            (2 weeks each, shipping regularly)
```

**Why Industry Prefers Agile:**
- Fail fast - discover issues early
- Customer collaboration - get feedback
- Adapt to change - market moves fast
- Team morale - seeing progress regularly
- Risk reduction - problems caught early

**10:30 - 10:45 | BREAK (15 min)**

**10:45 - 11:45 | Scrum Framework Deep Dive (60 min)**

**Scrum Roles:**
- **Product Owner:** What to build, prioritization
- **Scrum Master:** Process, removes blockers
- **Development Team:** Does the work

**Scrum Artifacts:**
- **Product Backlog:** All work (prioritized)
- **Sprint Backlog:** Work for current sprint
- **Increment:** Working product at end of sprint

**Scrum Ceremonies (4 Meetings):**

1. **Sprint Planning (4 hours for 2-week sprint)**
   - What will we commit to?
   - How will we do it?
   - Team estimates effort

2. **Daily Standup (15 minutes)**
   - Sync on progress
   - Surface blockers
   - Adjust plan if needed

3. **Sprint Review (2 hours)**
   - Demo finished work
   - Gather feedback
   - Update backlog

4. **Retrospective (1.5 hours)**
   - What went well?
   - What can improve?
   - Action items

**Live Demo - Show Real Sprint Board:**
- Backlog section
- In Progress column
- Done column
- Issues/cards moving across

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 2:15 | User Stories & Acceptance Criteria (75 min)**

**User Story Format (Most Important!):**

```
As a [role/user type]
I want [feature/capability]
So that [benefit/value]
```

**Examples:**

**Good:**
```
As a busy professional
I want to create a to-do list with due dates
So that I can prioritize my daily tasks

Acceptance Criteria:
- User can add new tasks
- Each task has a title, description, and due date
- User can mark tasks as complete
- Completed tasks show with strikethrough
- Tasks are sorted by due date
- Data persists between sessions
```

**Bad:**
```
"Make the app better"
"Add features users want"
"Fix stuff"
```

**Why User Stories Matter:**
- Focus on user value, not technical details
- Easy for non-technical stakeholders to understand
- Conversational starting point (not contract)
- Requirements stay focused

**Acceptance Criteria:**
- Testable conditions
- Definition of "done"
- Both functional and non-functional
- Written in plain language

**Anti-Patterns to Avoid:**
❌ "The system shall" (technical, not user-focused)
❌ Too vague ("user can use the system")
❌ Too specific (technical implementation details)
❌ Missing acceptance criteria

**Live Activity - Story Refinement (45 min):**

**Project: Simple Budget Tracker App**

**Bad Story Provided:**
```
"Add expense tracking to the app"
```

**Class Refines It:**
- What does "expense tracking" mean?
- Who is the user?
- What value does it provide?
- How do we know it works?

**Good Story Result:**
```
As a student on a budget
I want to record daily expenses with categories
So that I can track where my money goes

Acceptance Criteria:
- User can enter expense amount
- User can select category (food, transport, etc.)
- Each expense has date/time
- User sees total spent by category
- Data saved when app closes
```

**Student Activity - Write 5 Stories:**
- Topic: Simple chat application
- Must follow format
- Must have 3-5 acceptance criteria
- Share with partner for feedback

**2:15 - 2:30 | BREAK (15 min)**

**2:30 - 3:30 | Story Points & Estimation (60 min)**

**What Are Story Points?**
- Relative measure of work
- Not hours (abstract)
- Considers complexity, risk, unknowns
- Team estimates together

**Why Points Instead of Hours?**
- Hours are often wrong estimates
- Points are about relative size
- Better for sprint planning
- Reduce pressure to hit exact hours

**Fibonacci Scale (Common):**
1, 2, 3, 5, 8, 13, 21, 34...

**Why Fibonacci?**
- Gaps increase with complexity
- Big items harder to estimate accurately
- Forces conversation about big unknowns

**Story Point Guidelines:**
- **1 point:** Trivial (typo fix, simple update)
- **2-3 points:** Small (simple feature, low risk)
- **5-8 points:** Medium (complex feature, some unknowns)
- **13+ points:** Large (very complex, break down!)

**Planning Poker Exercise (40 min):**

**Rules:**
1. PO reads story
2. Team discusses questions
3. Everyone picks card secretly
4. Reveal simultaneously
5. If big differences, discuss
6. Re-estimate until consensus

**Demo Stories (Estimate Together):**

Story 1: "Fix typo in README"
- Estimate: Most say 1
- Quick consensus
- Move to next

Story 2: "Add dark mode to website"
- Estimate: Range 3-8
- Discussion: Requires testing, CSS changes, user preference storage
- Consensus: 5 points
- Add to backlog

Story 3: "Rebuild authentication system with 2FA"
- Estimate: Range 13-21
- Discussion: Too big! Needs breaking down
- Decision: Split into smaller stories

**Student Activity - Plan Bootcamp Project (20 min):**
- Use Budget Tracker app stories from earlier
- Students estimate each story
- Practice Planning Poker
- Discuss disagreements

**3:30 - 4:00 | Sprint Planning Overview & Burndown (30 min)**

**Sprint Planning:**
- How many points can team do? (velocity)
- Which stories fit in sprint?
- Break stories into tasks
- Assign ownership

**Burndown Chart:**
- Shows work remaining
- Horizontal = ideal progress
- Diagonal down = team progress
- Helps identify blockers

**Team Velocity:**
- Points completed in typical sprint
- First sprint often inaccurate
- Stabilizes after 3-4 sprints
- Use to plan future sprints

**4:00 - 4:30 | Daily Standup & Assignment Review (30 min)**

**Homework Assignment (to complete by Friday)**

---

### FRIDAY: Project Management Tools & Sprint Closure (4 hours)

**Learning Goals:**
- Create project boards
- Convert stories to issues
- Manage project visually
- Run sprint review and retrospective
- Reflect on Week 1 growth

**9:00 - 9:30 | Daily Standup (30 min)**

**9:30 - 10:15 | GitHub Projects Board Creation (45 min)**

**Why Project Boards?**
- Visual work management
- Team stays aligned
- Easy progress tracking
- Integration with GitHub

**Live Demo - Create Project:**
1. GitHub.com → Projects tab
2. New project
3. Name: "Week 1 Bootcamp"
4. Template: Kanban
5. Create

**Set Up Columns:**
- Backlog (all items)
- To Do (sprint items)
- In Progress (actively working)
- Review (waiting for approval)
- Done (completed)

**Add GitHub Issues:**
1. Repository → Issues → New Issue
2. Title: User story or task
3. Add description with acceptance criteria
4. Assign to team member
5. Add labels (bug, feature, documentation)
6. Add to project board

**Convert User Stories to Issues (30 min):**

**Bad Issue:**
```
Title: "Add login"
```

**Good Issue:**
```
Title: "Implement user login with email"

Description:
As a user
I want to log in with email and password
So that I can access my account

Acceptance Criteria:
- [ ] User can enter email
- [ ] User can enter password
- [ ] Invalid credentials show error
- [ ] Valid login redirects to dashboard
- [ ] Session persists on refresh
```

**Labeling Strategy:**
- **Type:** feature, bug, documentation, chore
- **Priority:** high, medium, low
- **Difficulty:** easy, medium, hard
- **Status:** blocked, in-progress, review

**10:15 - 10:30 | BREAK (15 min)**

**10:30 - 11:30 | Sprint Review Presentation (60 min)**

**Format (Each Student - 2 minutes max):**

1. **Share what you built** (demo or screenshot)
2. **Explain one challenge you overcame**
3. **Show your GitHub profile with completed tasks**

**Encourage Celebration:**
- First commit! 🎉
- First merge! 🎉
- Professional Git history! 🎉
- Keyboard shortcuts mastery! 🎉

**Sprint Review as Team:**
- What did we accomplish?
- What went well?
- What was hard?
- Customer feedback (instructor plays role)

**11:30 - 12:00 | Retrospective & Improvements (30 min)**

**Retro Format:**

1. **What went well?** (5 min brainstorm)
   - Examples: Clear instructions, good team vibe, fun exercises

2. **What could improve?** (5 min brainstorm)
   - Examples: Need more breaks, exercises too hard/easy

3. **Action items** (5 min)
   - Specific changes for Week 2
   - Assign owners
   - Make them measurable

**Example Retro Outcome:**
- "We need more break time" → Add 10-min breaks
- "Git was confusing" → Extra tutorial video for Week 2
- "Loved the pair programming" → More collaborative exercises

**12:00 - 1:00 | LUNCH (1 hour)**

**1:00 - 1:30 | Assignment Submissions & Verification (30 min)**

**Check Off Week 1 Deliverables:**
- GitHub profile complete ✓
- Repository with proper history ✓
- IDE configured with extensions ✓
- Project board created ✓
- User stories written ✓

**Celebrate milestones with class!**

---

## Assignments & Deliverables

### Weekly Assignment: Professional Development Environment Setup
**Total Points: 70 + 10 bonus**  
**Due: Friday 5 PM**

#### 1. GitHub Profile (15 points)
**Requirements:**
- [ ] Professional photo uploaded
- [ ] Bio describing bootcamp journey (2-3 sentences)
- [ ] At least one pinned repository (Week 1 project)
- [ ] Professional username (no silly names)
- [ ] Location filled in (optional but professional)

**Grading:**
- Photo professional and clear (5 pts)
- Bio shows personality and goals (5 pts)
- Pinned repository visible (3 pts)
- Overall professionalism (2 pts)

#### 2. First Repository (20 points)
**Requirements:**
- [ ] Repository created on GitHub
- [ ] Meaningful README.md (not empty)
- [ ] At least 5 commits with descriptive messages
- [ ] At least 1 feature branch created and merged
- [ ] Proper .gitignore file for project type

**Grading:**
- README quality and completeness (5 pts)
- Commit messages professional and meaningful (5 pts)
- Evidence of branching workflow (5 pts)
- .gitignore appropriate (3 pts)
- Overall repository structure (2 pts)

#### 3. IDE Configuration (10 points)
**Requirements:**
- [ ] Screenshot of extensions panel (showing 8+ installed)
- [ ] Custom theme and icons applied
- [ ] VS Code settings.json customized (show screenshot)
- [ ] Git integration demonstrated

**Grading:**
- Extensions for JS and Python (4 pts)
- Custom settings documented (3 pts)
- Theme/aesthetic choices (2 pts)
- Git integration working (1 pt)

#### 4. Command Line Practice (10 points)
**Requirements:**
- [ ] Complete all exercises in `monday_cli_exercises.sh`
- [ ] Document commands used in a file
- [ ] Submit output showing successful completion

**Grading:**
- All exercises completed (6 pts)
- Output files demonstrating mastery (3 pts)
- Documentation clear (1 pt)

#### 5. User Stories (10 points)
**Requirements:**
- [ ] Write 5 user stories for a simple app
- [ ] Proper format: "As a... I want... so that..."
- [ ] 3-5 acceptance criteria for each story
- [ ] Professional language used

**Grading:**
- Correct user story format (4 pts)
- Acceptance criteria clear and testable (3 pts)
- User value clearly articulated (2 pts)
- Professional language (1 pt)

**Example App Ideas:**
- Weather app
- Expense tracker
- Note-taking app
- Simple game
- Task management

#### 6. Project Board (5 points)
**Requirements:**
- [ ] GitHub Projects board created
- [ ] At least 5 issues/cards added
- [ ] Columns: Backlog, To Do, In Progress, Done
- [ ] At least 3 cards moved to Done

**Grading:**
- Board structure organized (2 pts)
- Issues well-documented (2 pts)
- Evidence of progress (1 pt)

### Optional Bonus: Developer Blog Post (+10 points)
**Requirements:**
- [ ] Post on Medium, Dev.to, Hashnode, or personal blog
- [ ] Title: "My Developer Journey: Week 1"
- [ ] 300+ words
- [ ] Reflection on learning experience
- [ ] Link added to GitHub profile README

**Topics to Cover:**
- Why you're doing the bootcamp
- What was hardest?
- What was most exciting?
- What are you looking forward to?
- Lessons learned about professional development

**Grading:**
- 300+ words (3 pts)
- Personal reflection and honesty (4 pts)
- Professional writing (2 pts)
- Linked to GitHub profile (1 pt)

---

## Resource Materials

### Quick Reference Guides (Print or Share)

**Command Line Cheat Sheet:**
```bash
# Navigation
pwd                    # Current location
ls                     # List files
cd directory           # Change directory
cd ..                  # Go up one level

# File Operations
mkdir folder           # Create directory
touch file.txt         # Create file
cp source dest         # Copy
mv old new             # Move/rename
rm file                # Delete file
rm -rf folder          # Delete folder (careful!)

# Viewing
cat filename           # Display file
less filename          # Page through file

# Searching
find . -name "*.js"    # Find files
grep "text" file       # Find text in file
```

**Git Commands Cheat Sheet:**
```bash
# Setup
git config --global user.name "Name"
git config --global user.email "email"

# Basic Workflow
git init               # Initialize repo
git status             # Check status
git add filename       # Stage file
git add .              # Stage all
git commit -m "msg"    # Commit
git log                # View history

# Remote
git remote add origin URL
git push -u origin main
git pull origin main
git clone URL

# Branching
git branch feature     # Create branch
git checkout feature   # Switch branch
git checkout -b name   # Create & switch
git merge feature      # Merge branch
git branch -d feature  # Delete branch
```

**VS Code Shortcuts (by OS):**

**Mac:**
- `Cmd+Shift+P` - Command Palette
- `Cmd+P` - Quick Open
- `Cmd+`` - Terminal
- `Cmd+B` - Toggle Sidebar
- `Cmd+/` - Comment
- `Cmd+D` - Multi-cursor

**Windows/Linux:**
- `Ctrl+Shift+P` - Command Palette
- `Ctrl+P` - Quick Open
- `Ctrl+`` - Terminal
- `Ctrl+B` - Toggle Sidebar
- `Ctrl+/` - Comment
- `Ctrl+D` - Multi-cursor

### Recommended Tutorials/Videos

**For Self-Paced Learning:**
- Git Tutorial: https://git-scm.com/docs/gittutorial
- VS Code Docs: https://code.visualstudio.com/docs
- Agile Primer: https://www.atlassian.com/agile

### Troubleshooting Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Git command not found | Git not installed | Install from git-scm.com |
| Permission denied | File permissions | `chmod +x filename` |
| SSH connection fails | SSH key not added | Add public key to GitHub settings |
| Merge conflict | Both branches edited same line | Edit file, remove markers, recommit |
| "detached HEAD" state | Checked out old commit | `git checkout main` to return |
| Can't find file | Wrong directory | Use `pwd` to verify location |
| VS Code extensions not loading | Extension conflict | Disable all, re-enable one by one |
| Python notebook kernel dead | Wrong Python path | Restart kernel, verify Python install |

---

## Assessment Rubric

### Overall Week 1 Success Rubric

| Skill | Novice (0-2) | Developing (3-4) | Proficient (5) |
|-------|---|---|---|
| **Command Line** | Confused about navigation | Can navigate with help | Navigates confidently, uses advanced commands |
| **Git Basics** | Makes commits but messages unclear | Commits with mostly good messages | Professional commit messages, proper workflow |
| **Branching** | Struggles to create/merge branches | Can create and merge with help | Creates, merges, and manages branches independently |
| **GitHub Profile** | Profile incomplete or unprofessional | Profile complete but generic | Professional, complete profile with pinned repo |
| **IDE Setup** | Few extensions installed | Most extensions installed, some config | Fully configured, optimized, uses shortcuts |
| **User Stories** | Format incorrect, no AC | Format correct but AC unclear | Perfect format, clear AC, professional language |
| **Agile Understanding** | Confused about Agile concepts | Understands basics but needs clarification | Can explain Agile concepts and apply them |

### Proficiency Levels for Each Topic

**Command Line - Proficiency Levels:**
- **Level 1 (Novice):** Can use `cd`, `ls`, `mkdir`
- **Level 2 (Developing):** Can navigate, create files, use pipes
- **Level 3 (Proficient):** Uses find, grep, manages permissions
- **Level 4 (Expert):** Writes bash scripts, uses advanced features

**Git - Proficiency Levels:**
- **Level 1:** Can make commits with your help
- **Level 2:** Can commit and push independently
- **Level 3:** Can branch, merge, handle simple conflicts
- **Level 4:** Manages complex workflows, rebases, stashes

**IDE - Proficiency Levels:**
- **Level 1:** Uses mouse for most operations
- **Level 2:** Uses some keyboard shortcuts
- **Level 3:** Uses shortcuts regularly, less mouse dependency
- **Level 4:** Rarely uses mouse, highly efficient

---

## Troubleshooting Guide

### Command Line Issues

**"command not found: git"**
- Git not installed
- Solution: Install from https://git-scm.com

**"Permission denied" when running script**
- File not marked as executable
- Solution: `chmod +x script.sh`

**Can't navigate to directory**
- Typo in path or directory doesn't exist
- Solution: Use `pwd` to verify location, `ls` to see available directories

### Git Issues

**SSH key not working**
- Solution: Regenerate key and add to GitHub
- Verify with: `ssh -T git@github.com`

**Merge conflict**
- Open file, find `<<<<< HEAD` markers
- Edit to keep what you want
- Remove conflict markers
- Stage and commit

**Accidentally deleted branch**
- Can recover with: `git reflog`
- Find the commit hash
- Create new branch from that commit

### GitHub Issues

**Can't push to repository**
- Usually: authentication issue or wrong remote URL
- Check: `git remote -v`
- SSH method: `git remote set-url origin git@github.com:user/repo.git`

**Repository not showing on GitHub**
- Push the repository: `git push -u origin main`
- Verify on GitHub.com

### VS Code Issues

**Extensions not loading**
- Restart VS Code completely
- Try disabling all extensions, re-enable one by one

**Terminal showing wrong shell**
- Select terminal type in VS Code
- Settings → Terminal → Integrated Shell

**Git integration not working**
- Verify Git is in PATH: `which git`
- Restart VS Code

### Python/Node Issues

**Python not found in VS Code terminal**
- Select Python interpreter: Cmd+Shift+P → "Python: Select Interpreter"

**npm command not found**
- Node.js not installed or PATH issue
- Verify: `npm --version`
- Reinstall Node.js if needed

---

## Week 1 Reflection & Next Steps

### Success Indicators

By end of Friday, students should:

✅ **Comfortably navigate command line**
- No longer intimidated by terminal
- Can create/move/delete files
- Understand relative vs absolute paths

✅ **Use Git daily workflow independently**
- Stage, commit, push without prompting
- Professional commit messages
- Create branches for features

✅ **Have optimized development environment**
- VS Code configured for their work
- Keyboard shortcuts becoming automatic
- Extensions installed and used

✅ **Understand Agile concepts**
- Can write user stories
- Participate in standups
- Understand sprint ceremonies

✅ **Professional GitHub presence**
- Profile represents them well
- Repository shows good practices
- Ready to show to employers

### Common Struggles to Expect

- **Mental Load:** A lot of new concepts this week
- **Muscle Memory:** Shortcuts take practice
- **File System Confusion:** Directory navigation takes time
- **Git Abstract:** Hard to visualize what's happening
- **Terminal Anxiety:** Terminal seems scary at first

### How to Address

- **Repetition:** Practice same commands multiple times
- **Patience:** Reassure that confusion is normal
- **Visualization:** Show Git graphs, file tree diagrams
- **Encouragement:** Celebrate small wins
- **Office Hours:** Extra help sessions for struggling students

### Preparation for Week 2

**Send to Students Friday End of Day:**

Week 2 brings programming! Here's what to prepare:

**Optional Pre-Work:**
- Review JavaScript basics (if weak background)
- Review Python basics (if weak background)
- Review HTML/CSS basics

**What You'll Need:**
- All Week 1 tools still
- Same VS Code setup
- Your bootcamp repository ready
- Enthusiasm for coding!

**We'll Cover:**
- JavaScript fundamentals
- Variables, data types, operators
- Functions and scope
- First real program!

---

## Notes for Instructors

### Teaching Strategies

**Use Pair Programming:**
- Stronger student drives, weaker student navigates
- Switch roles halfway
- Promotes learning and confidence

**Live Code Everything:**
- Show mistakes and recovery
- Students learn debugging
- More relatable than perfect code

**Use Breakout Rooms (Virtual):**
- Small group exercises
- More interaction time
- Easier to ask questions

**Emphasize Process Over Correctness:**
- It's okay if someone can't merge
- Important they understand Git flow
- Troubleshooting is the skill

### Engagement Tips

- Start day with a quick win (short, successful exercise)
- Use stories/context (why does this matter?)
- Celebrate first commits, first branches, first bugs caught
- Vary teaching methods (demo, exercise, discussion, video)
- Keep energy high (standing, moving, interacting)

### Pacing Notes

**If Behind:**
- Skip optional content
- Combine exercises
- Assign catchup work for homework

**If Ahead:**
- Add challenge exercises
- Introduce advanced concepts
- Start Week 2 topics early

### Differentiating for Experience Levels

**For Students New to Command Line:**
- Pair with more experienced student
- Extra command-line practice session
- Reference sheet always visible

**For Students New to Git:**
- Extra Git practice Thursday evening
- Visual Git tutorials
- Redo exercises multiple times

**For Experienced Students:**
- Challenge them to teach others
- Advanced Git concepts (rebase, stash)
- Research and present Git workflow comparison

---

## Final Checklist for Teachers

### Before Week 1 Starts
- [ ] All software verified working on multiple OS
- [ ] Exercise scripts tested
- [ ] Demo accounts created and ready
- [ ] Classroom/virtual setup tested
- [ ] Backup plan for connectivity issues
- [ ] Printed reference cards available
- [ ] Grading rubric prepared

### Each Day Morning
- [ ] Check attendance
- [ ] Verify screen sharing works
- [ ] Open demo files/terminals
- [ ] Have backup explanations ready
- [ ] Mentally prepare for common issues

### Each Day Closing
- [ ] Assign clear homework
- [ ] Collect any submissions
- [ ] Note who struggled
- [ ] Prepare extra help for struggling students
- [ ] Recap key learning points

### End of Week
- [ ] Grade all submissions
- [ ] Provide constructive feedback
- [ ] Identify students needing extra support
- [ ] Prepare Week 2 materials
- [ ] Update retrospective notes

---

**Week 1 is about laying professional foundations. Success this week sets the tone for all 16 weeks. Invest time in getting this right!**
