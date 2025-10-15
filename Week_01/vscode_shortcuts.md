# VS Code Essential Shortcuts & Productivity Guide
## Week 1 - Wednesday Reference

---

## General Shortcuts

### Command Palette (Most Important!)
- **Mac:** `Cmd + Shift + P`
- **Windows/Linux:** `Ctrl + Shift + P`
- **Use:** Access any VS Code command

### Quick Open File
- **Mac:** `Cmd + P`
- **Windows/Linux:** `Ctrl + P`
- **Use:** Quickly open any file in your project

### Toggle Sidebar
- **Mac:** `Cmd + B`
- **Windows/Linux:** `Ctrl + B`

### Toggle Terminal
- **Mac:** `` Cmd + ` ``
- **Windows/Linux:** `` Ctrl + ` ``

### Settings
- **Mac:** `Cmd + ,`
- **Windows/Linux:** `Ctrl + ,`

---

## Editing Shortcuts

### Multi-Cursor Editing
- **Add cursor above:** `Cmd/Ctrl + Alt + Up`
- **Add cursor below:** `Cmd/Ctrl + Alt + Down`
- **Add cursor at next match:** `Cmd/Ctrl + D`
- **Add cursor to all matches:** `Cmd/Ctrl + Shift + L`

### Line Operations
- **Delete line:** `Cmd/Ctrl + Shift + K`
- **Copy line up/down:** `Shift + Alt + Up/Down`
- **Move line up/down:** `Alt + Up/Down`
- **Insert line below:** `Cmd/Ctrl + Enter`
- **Insert line above:** `Cmd/Ctrl + Shift + Enter`

### Code Folding
- **Fold:** `Cmd/Ctrl + Alt + [`
- **Unfold:** `Cmd/Ctrl + Alt + ]`
- **Fold all:** `Cmd/Ctrl + K, Cmd/Ctrl + 0`
- **Unfold all:** `Cmd/Ctrl + K, Cmd/Ctrl + J`

### Find and Replace
- **Find:** `Cmd/Ctrl + F`
- **Replace:** `Cmd/Ctrl + H`
- **Find in files:** `Cmd/Ctrl + Shift + F`
- **Replace in files:** `Cmd/Ctrl + Shift + H`

### Comment Code
- **Toggle line comment:** `Cmd/Ctrl + /`
- **Toggle block comment:** `Cmd/Ctrl + Shift + A`

---

## Navigation Shortcuts

### File Navigation
- **Go to symbol:** `Cmd/Ctrl + Shift + O`
- **Go to line:** `Cmd/Ctrl + G`
- **Go back:** `Cmd/Ctrl + -`
- **Go forward:** `Cmd/Ctrl + Shift + -`

### Split Editor
- **Split editor:** `Cmd/Ctrl + \`
- **Focus left/right:** `Cmd/Ctrl + 1/2/3`

### Breadcrumbs Navigation
- **Focus breadcrumbs:** `Cmd/Ctrl + Shift + .`

---

## Code Shortcuts

### IntelliSense
- **Trigger suggestions:** `Ctrl + Space`
- **Trigger parameter hints:** `Cmd/Ctrl + Shift + Space`

### Formatting
- **Format document:** `Shift + Alt + F`
- **Format selection:** `Cmd/Ctrl + K, Cmd/Ctrl + F`

### Refactoring
- **Rename symbol:** `F2`
- **Quick fix:** `Cmd/Ctrl + .`

---

## Git Integration Shortcuts

### Source Control
- **Open source control:** `Cmd/Ctrl + Shift + G`
- **Stage changes:** Click `+` next to file
- **Unstage changes:** Click `-` next to file
- **Commit:** `Cmd/Ctrl + Enter` (in message box)

### Git Commands via Command Palette
1. `Cmd/Ctrl + Shift + P`
2. Type "Git:" to see all Git commands
3. Common commands:
   - Git: Commit
   - Git: Push
   - Git: Pull
   - Git: Create Branch
   - Git: Checkout to...

---

## Terminal Shortcuts

### Terminal Management
- **New terminal:** `` Cmd/Ctrl + Shift + ` ``
- **Kill terminal:** `` Cmd/Ctrl + Shift + K `` (in terminal)
- **Navigate terminals:** `Cmd/Ctrl + PageUp/PageDown`

---

## Essential Extensions for Week 1

### For All Languages
- **GitLens** - Enhanced Git capabilities
- **Git Graph** - Visualize your repository
- **Live Server** - Launch development server
- **Prettier** - Code formatter
- **Path Intellisense** - Autocomplete filenames

### For JavaScript
- **ESLint** - JavaScript linter
- **JavaScript (ES6) code snippets** - Code shortcuts
- **npm Intellisense** - npm package autocomplete

### For Python
- **Python** (by Microsoft) - Essential for Python
- **Pylance** - Fast Python language server
- **Python Debugger** - Debugging support

### Bonus Extensions
- **Material Icon Theme** - Better file icons
- **One Dark Pro** - Popular color theme
- **Auto Rename Tag** - Auto rename paired HTML tags
- **Bracket Pair Colorizer** - Color matching brackets

---

## Useful Settings to Configure

### User Settings (settings.json)

```json
{
  // Editor
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  
  // Files
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  
  // Terminal
  "terminal.integrated.fontSize": 13,
  
  // Git
  "git.autofetch": true,
  "git.confirmSync": false,
  
  // Formatting
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  
  // JavaScript
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  
  // Python
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true
  }
}
```

---

## Customizing Keyboard Shortcuts

1. Open keyboard shortcuts: `Cmd/Ctrl + K, Cmd/Ctrl + S`
2. Search for the command you want to change
3. Click the pencil icon
4. Press your desired key combination

---

## Workspace Tips

### Project-Specific Settings
Create `.vscode/settings.json` in your project:

```json
{
  "editor.tabSize": 4,
  "files.exclude": {
    "**/node_modules": true,
    "**/__pycache__": true
  }
}
```

### Recommended Extensions per Project
Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-python.python"
  ]
}
```

---

## Productivity Workflows

### Workflow 1: Start New Feature
1. `Cmd/Ctrl + Shift + P` → "Git: Create Branch"
2. `Cmd/Ctrl + P` → Open file
3. `` Cmd/Ctrl + ` `` → Open terminal
4. Start coding!

### Workflow 2: Quick File Creation
1. `Cmd/Ctrl + P` → Type filename with folder
2. If it doesn't exist, VS Code will create it
3. Example: `src/components/Header.js`

### Workflow 3: Multi-file Search and Replace
1. `Cmd/Ctrl + Shift + F` → Search all files
2. `Cmd/Ctrl + Shift + H` → Replace in all files
3. Review changes before replacing

---

## Debugging Shortcuts

### Debug Controls
- **Start/Continue:** `F5`
- **Step over:** `F10`
- **Step into:** `F11`
- **Step out:** `Shift + F11`
- **Stop:** `Shift + F5`

### Breakpoints
- **Toggle breakpoint:** `F9`
- Click in gutter (left of line numbers)

---

## Zen Mode & Focus

### Distraction-Free Coding
- **Zen Mode:** `Cmd/Ctrl + K, Z`
- **Exit Zen Mode:** `Esc` twice
- **Focus Mode:** Hide side panels and focus on code

---

## Snippets (Code Shortcuts)

### Create Your Own Snippets
1. `Cmd/Ctrl + Shift + P`
2. Type "Configure User Snippets"
3. Choose language
4. Add custom snippets

### Example JavaScript Snippet:
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

Now typing `log` + `Tab` will expand to `console.log('');`

---

## Practice Exercise: Speed Challenge

**Time yourself completing these tasks:**

1. Create new file `index.html` (without using mouse)
2. Write HTML boilerplate (use `!` + Tab)
3. Add 5 divs with different IDs (multi-cursor)
4. Copy all 5 divs and paste below
5. Add comments to each section
6. Format the entire document
7. Open terminal without mouse
8. Stage, commit, and push changes (all in VS Code)

**Goal:** Complete in under 3 minutes

---

## Additional Resources

### VS Code Documentation
- Official docs: https://code.visualstudio.com/docs
- Keyboard shortcut PDF: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

### Video Tutorials
- VS Code Can Do That: https://vscodecandothat.com/

---

## Wednesday Assignment

**Configure Your Perfect Development Environment:**

1. Install all recommended extensions
2. Customize your settings.json
3. Set up at least 3 custom keyboard shortcuts
4. Create 2 code snippets (one for JS, one for Python)
5. Take a screenshot of your configured workspace
6. Submit via GitHub repository

**Bonus Challenge:**
- Complete the Speed Challenge in under 3 minutes
- Record a screencast showing your workflow
- Share one productivity tip you discovered

---

## Remember: Muscle Memory Takes Time

**Practice Goal:** By end of Week 1, use these shortcuts without thinking:
- ✓ Command Palette
- ✓ Quick Open
- ✓ Multi-cursor editing
- ✓ Toggle terminal
- ✓ Format document

**Week 2 Goal:** Add these to muscle memory:
- ✓ Git operations via VS Code
- ✓ Split editor navigation
- ✓ Search and replace across files

**By Month 2:** You should rarely use your mouse while coding!

---

*Keyboard shortcuts make you a faster, more efficient developer. Invest time in learning them now, save hours later!*
