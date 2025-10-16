# Week 1 Overview: "Setting Up Your Gear"
## Professional Development Environment

**Duration: 30 hours**
**Dates: February 17-21, 2025**

---

## Week Overview

Week 1 is the foundation of the entire bootcamp - not just learning tools, but building professional habits that will carry through all 16 weeks. Students transition from beginners to professional developers by mastering the command line, Git/GitHub, IDE configuration, and Agile methodology. This isn't just "setup week" - it's "become a professional" week.

### Key Focus Areas:
- Command line mastery for professional workflows
- Git/GitHub for version control and collaboration
- IDE optimization (VS Code) for productivity
- Agile methodology (standups, sprints, user stories)
- Project management tools (GitHub Projects, Jira)
- Professional identity establishment

### Week 1 Success Metrics:
- ✅ Students comfortable with command line navigation
- ✅ Students using Git confidently for version control
- ✅ Students have professional GitHub profiles
- ✅ Students have optimized development environment
- ✅ Students understand Agile ceremonies
- ✅ Students can write user stories
- ✅ Students use project boards for planning

---

## Daily Schedule

### Monday: "Gig Ready" Introduction, Command Line Mastery, Professional Identity Setup
**6.5 hours**
- Bootcamp overview and expectations
- Agile sprint format introduction
- Command line fundamentals (pwd, ls, cd, mkdir, touch, cp, mv, rm)
- Professional identity setup (GitHub account)
- Git configuration (user.name, user.email)
- First repository creation
- Writing meaningful commit messages

### Tuesday: Git Fundamentals - Repos, Commits, Branching, Collaboration
**6.5 hours**
- Git vs GitHub understanding
- Local vs remote repositories
- Remote repository operations (git remote, git push, git pull, git clone)
- SSH key setup for secure authentication
- Branching concepts and practice
- Merge operations and conflict resolution
- Collaborative Git workflows

### Wednesday: IDE Optimization (VS Code), Productivity Tools, Professional Shortcuts
**6.5 hours**
- VS Code installation and interface tour
- Essential extensions for JavaScript and Python
- Git integration extensions (GitLens, Git Graph)
- Productivity shortcuts and multi-cursor editing
- Integrated terminal usage
- Source control panel for visual Git operations
- Custom settings and workspace configuration

### Thursday: Agile Methodology, Standups, Sprints, User Stories
**6.5 hours**
- Agile vs Waterfall methodologies
- Scrum framework overview
- Agile ceremonies (Daily Standup, Sprint Planning, Sprint Review, Retrospective)
- User story format: "As a [role], I want [feature], so that [benefit]"
- Acceptance criteria definition
- Story points and estimation techniques
- Planning Poker exercise

### Friday: Project Management Tools (Jira, GitHub Issues), Estimation Basics
**4 hours**
- GitHub Projects board creation
- Issue management (creating, assigning, labeling)
- Converting user stories to issues
- Jira overview for enterprise context
- Sprint planning exercise
- Week 1 Sprint Review presentation
- Retrospective discussion

---

## Learning Objectives

By the end of Week 1, students will be able to:

1. **Command Line**
   - Navigate directory structures confidently
   - Create, move, copy, and delete files
   - Understand file paths (absolute vs relative)
   - Use command line for Git operations

2. **Git & GitHub**
   - Initialize repositories
   - Stage and commit changes
   - Push and pull from remote repositories
   - Create and merge branches
   - Resolve basic merge conflicts
   - Collaborate on shared repositories

3. **IDE Proficiency**
   - Configure VS Code for JavaScript and Python
   - Install and use essential extensions
   - Use keyboard shortcuts for efficiency
   - Perform Git operations within IDE
   - Split editor views and multi-cursor editing

4. **Agile Practices**
   - Participate in daily standups
   - Write user stories with acceptance criteria
   - Estimate work with story points
   - Understand sprint ceremonies
   - Use Agile terminology correctly

5. **Project Management**
   - Create and manage project boards
   - Convert requirements to actionable issues
   - Prioritize work effectively
   - Track progress visually

---

## Key Concepts

### Command Line
- **pwd**: Print working directory
- **ls**: List directory contents
- **cd**: Change directory
- **mkdir**: Make directory
- **touch**: Create file
- **cp**: Copy
- **mv**: Move/rename
- **rm**: Remove (use with caution!)

### Git Workflow
```
Working Directory → Staging Area → Local Repository → Remote Repository
       |                |               |                    |
   (edit files)    (git add)      (git commit)         (git push)
```

### Branching
- **main/master**: Primary branch
- **feature branches**: Isolated development
- **merge**: Combine branches
- **conflict**: When changes overlap

### Agile Ceremonies
- **Daily Standup**: Quick sync (Yesterday, Today, Blockers)
- **Sprint Planning**: What to build in sprint
- **Sprint Review**: Demo completed work
- **Retrospective**: Reflect and improve

---

## Deliverables

### Weekly Assignment: Professional Development Environment Setup (70 points + 10 bonus)

Students must submit by Friday 5 PM:

1. **GitHub Profile** (15 points)
   - Professional photo uploaded
   - Bio describing bootcamp journey and goals
   - At least one pinned repository
   - Professional username (if needed, guide students to choose wisely)

2. **First Repository** (20 points)
   - Meaningful README.md with project description
   - At least 5 commits with descriptive messages
   - Evidence of branching (at least 1 feature branch)
   - Proper .gitignore file

3. **IDE Configuration** (10 points)
   - Screenshot showing installed extensions for JavaScript and Python
   - Custom settings configured (theme, font size, etc.)
   - Integrated terminal working
   - Git integration demonstrated

4. **Command Line Practice** (10 points)
   - Complete all exercises in `monday_cli_exercises.sh`
   - Submit results via GitHub repository
   - Demonstrate file navigation and manipulation

5. **User Stories** (10 points)
   - Write 5 user stories for a simple app concept
   - Proper format: "As a... I want... so that..."
   - Include acceptance criteria for each
   - Use professional language

6. **Project Board** (5 points)
   - GitHub Projects board created
   - Course assignments added as issues
   - Columns organized (Backlog, To Do, In Progress, Done)
   - At least 3 issues properly labeled

**Blog Post (Optional Bonus: +10 points)**
- "My Developer Journey" post on Medium, Dev.to, or personal site
- 300+ words about why learning software engineering
- Link added to GitHub profile README
- Professional tone and proper formatting

---

## Command Line Examples

### Basic Navigation
```bash
# Where am I?
pwd

# What's in this directory?
ls
ls -la  # detailed list including hidden files

# Move around
cd Documents
cd ..              # go up one level
cd ~               # go to home directory
cd /absolute/path  # absolute path
```

### File Operations
```bash
# Create directory
mkdir projects
mkdir -p projects/week1/day1  # create nested directories

# Create files
touch README.md
touch index.html style.css script.js

# Copy files
cp file.txt file_backup.txt
cp -r folder1 folder2  # copy directory recursively

# Move/rename
mv old_name.txt new_name.txt
mv file.txt ../other_folder/

# Delete (careful!)
rm file.txt
rm -rf folder  # delete directory (dangerous!)
```

### Useful Commands
```bash
# View file contents
cat README.md
less long_file.txt  # paginated view

# Search
grep "search term" file.txt
find . -name "*.js"  # find all JavaScript files

# Command history
history
!!  # repeat last command
```

---

## Git Examples

### Basic Git Workflow
```bash
# Initialize repository
git init

# Check status
git status

# Stage files
git add README.md
git add .  # stage all changes

# Commit
git commit -m "Add README with project description"

# View history
git log
git log --oneline
```

### Remote Repository
```bash
# Connect to remote
git remote add origin https://github.com/username/repo.git

# Push to remote
git push -u origin main
git push  # subsequent pushes

# Clone repository
git clone https://github.com/username/repo.git

# Pull changes
git pull origin main
```

### Branching
```bash
# Create branch
git branch feature-login
git checkout feature-login
# Or in one command:
git checkout -b feature-login

# List branches
git branch

# Switch branches
git checkout main

# Merge branch
git checkout main
git merge feature-login

# Delete branch
git branch -d feature-login
```

### SSH Setup
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key (Mac)
pbcopy < ~/.ssh/id_ed25519.pub

# Then add to GitHub: Settings → SSH and GPG keys → New SSH key
```

---

## VS Code Extensions

### JavaScript
- **ESLint**: Code linting for JavaScript
- **Prettier**: Code formatting
- **JavaScript (ES6) code snippets**: Quick code templates

### Python
- **Python**: Microsoft's official Python extension
- **Pylance**: Fast Python language server
- **Python Test Explorer**: Run tests visually

### Git
- **GitLens**: Supercharged Git integration
- **Git Graph**: Visualize Git history
- **Git History**: View file history

### General
- **Live Server**: Launch local development server
- **Auto Rename Tag**: Rename paired HTML tags
- **Bracket Pair Colorizer**: Color matching brackets
- **Path Intellisense**: Autocomplete file paths

---

## VS Code Shortcuts

### Essential Shortcuts (Mac / Windows)

| Action | Mac | Windows |
|--------|-----|---------|
| Command Palette | Cmd+Shift+P | Ctrl+Shift+P |
| Quick Open File | Cmd+P | Ctrl+P |
| Toggle Terminal | Ctrl+` | Ctrl+` |
| Toggle Sidebar | Cmd+B | Ctrl+B |
| Find | Cmd+F | Ctrl+F |
| Replace | Cmd+Opt+F | Ctrl+H |
| Go to Line | Ctrl+G | Ctrl+G |
| Comment Line | Cmd+/ | Ctrl+/ |
| Copy Line Down | Opt+Shift+↓ | Alt+Shift+↓ |
| Delete Line | Cmd+Shift+K | Ctrl+Shift+K |
| Multi-cursor | Opt+Click | Alt+Click |
| Select All Occurrences | Cmd+Shift+L | Ctrl+Shift+L |
| Split Editor | Cmd+\ | Ctrl+\ |

---

## User Story Examples

### Example 1: To-Do List App
```
As a busy professional
I want to create a daily to-do list
So that I can organize my tasks and track my progress

Acceptance Criteria:
- User can add new tasks with a title
- User can mark tasks as complete
- User can delete tasks
- Completed tasks show with strikethrough
- Tasks persist when page refreshes
```

### Example 2: Weather App
```
As a daily commuter
I want to check the current weather in my city
So that I can decide what to wear and whether to bring an umbrella

Acceptance Criteria:
- User can enter city name
- App displays current temperature
- App shows weather condition (sunny, rainy, etc.)
- App displays an appropriate icon for weather
- Error message shown if city not found
```

### Example 3: Personal Portfolio
```
As a job seeker
I want to showcase my projects and skills online
So that potential employers can see my work

Acceptance Criteria:
- Homepage with introduction and photo
- Projects section with descriptions and links
- Skills section listing technologies
- Contact information and social media links
- Responsive design for mobile devices
```

---

## Agile Ceremony Templates

### Daily Standup (15 minutes max)
Each team member answers:
1. **Yesterday**: What did I accomplish?
2. **Today**: What will I work on?
3. **Blockers**: What's blocking my progress?

Example:
> "Yesterday I set up my GitHub profile and created my first repository. Today I'll work on learning VS Code shortcuts and installing extensions. No blockers right now."

### Sprint Review (30-60 minutes)
- Demo completed work
- Get feedback from instructor/peers
- Celebrate wins
- Discuss what wasn't completed and why

### Retrospective (30-60 minutes)
Discuss three questions:
1. **What went well?** (Keep doing)
2. **What could be improved?** (Change)
3. **What will we commit to next sprint?** (Action items)

---

## GitHub Project Board Setup

### Columns
1. **Backlog**: All future work
2. **To Do**: Ready for current sprint
3. **In Progress**: Currently working on
4. **Done**: Completed

### Creating Issues
```markdown
Title: Set up GitHub profile

Description:
Create professional GitHub profile with photo, bio, and pinned repository.

Acceptance Criteria:
- [ ] Profile photo uploaded
- [ ] Bio written (50+ words)
- [ ] At least 1 pinned repository
- [ ] Social links added

Labels: week-1, setup
Estimate: 1 hour
```

---

## Professional Git Commit Messages

### Good Examples
```bash
git commit -m "Add README with project description and setup instructions"
git commit -m "Fix navigation bug in mobile menu"
git commit -m "Update dependencies to latest versions"
git commit -m "Refactor authentication logic for clarity"
```

### Bad Examples (Don't do this!)
```bash
git commit -m "stuff"
git commit -m "fixed it"
git commit -m "asdf"
git commit -m "WIP"
```

### Commit Message Guidelines
- Use present tense ("Add feature" not "Added feature")
- Be specific about what changed
- Explain why, not just what
- Keep first line under 50 characters
- Add detailed description if needed

---

## Resources

### Command Line
- [Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)

### Git & GitHub
- [Pro Git Book](https://git-scm.com/book/en/v2) (Free)
- [GitHub Guides](https://guides.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/) (Interactive)

### VS Code
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

### Agile
- [Agile Manifesto](https://agilemanifesto.org/)
- [Scrum Guide](https://scrumguides.org/)
- [User Story Guide](https://www.mountaingoatsoftware.com/agile/user-stories)

---

## Common Issues & Solutions

### Issue: Git asks for password every time
**Solution**: Set up SSH keys (see SSH Setup section)

### Issue: Can't push to GitHub
**Solution**: 
```bash
git remote -v  # Check remote URL
git remote set-url origin git@github.com:username/repo.git
```

### Issue: Merge conflict
**Solution**: 
1. Open conflicted file in VS Code
2. VS Code shows conflict markers
3. Choose "Accept Current" or "Accept Incoming"
4. Save, add, and commit

### Issue: Committed to wrong branch
**Solution**:
```bash
git log  # Find commit hash
git checkout correct-branch
git cherry-pick <commit-hash>
```

---

## Notes for Instructor

- Week 1 sets the tone for the entire bootcamp - emphasize professionalism
- Students come with varying experience levels - normalize this
- Command line can be intimidating - provide safety nets
- Git will confuse students - that's normal, keep reinforcing
- Agile concepts are abstract - use real examples from bootcamp
- Encourage questions - no question is "stupid"
- Live demo everything before students try
- Have backup plans if services are down (GitHub, etc.)
- Celebrate every small win - first commit, first branch, first merge
- Connect everything to professional work: "Real developers do this every day"

---

## Connection to Other Weeks

- **Week 2**: Development environment ready for JavaScript and Python coding
- **Week 3+**: Git workflow continues for all assignments
- **All weeks**: Agile ceremonies (standups, sprint reviews) continue
- **Weeks 4, 9, 13**: Month-end sprint reviews use these Agile practices
- **Week 16**: Capstone project uses all these professional tools

**This is your foundation. Master it now, use it forever.** 🚀