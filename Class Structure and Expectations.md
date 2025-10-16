# Software Engineering Bootcamp
## Weekly Structure & Student Expectations

---

## Overview

This document outlines the structure, routines, and expectations that apply to every week of the bootcamp. Understanding these patterns will help you succeed and get the most from the program.

---

## Weekly Time Commitment

**Monday - Thursday:** 6.5 hours per day (08:30 - 15:30)
- **Morning Session:** 08:30 - 12:00 (3.5 hours with break)
- **Lunch:** 12:00 - 12:30 (30 minutes)
- **Afternoon Session:** 12:30 - 15:30 (3 hours with break)

**Friday:** 4 hours (08:30 - 12:30)
- Shorter day focused on review, presentations, and retrospective
- No afternoon session

**Total Weekly Hours:** 30 hours of instruction + homework

---

## Daily Structure

### Morning Routine (Mon-Fri)

**08:30 - 09:00: Daily Standup (30 minutes)**

Every morning begins with a standup meeting where each student shares:
1. What you accomplished yesterday (or over the weekend on Monday)
2. What you're working on today
3. Any blockers or challenges you're facing

**Purpose:** Build accountability, identify issues early, practice professional communication

**Your Role:**
- Be prepared with your update
- Listen to peers' updates
- Offer help when you can
- Ask questions if you're stuck

---

### Typical Daily Flow

#### Monday - Thursday Pattern

**Session 1:** Concept Introduction (1.5 hours)
- New concept or tool introduced
- Live demonstrations
- Why it matters in professional development
- Interactive discussion

**Break:** 15 minutes

**Session 2:** Deep Dive or Practice (1.25 hours)
- Detailed exploration of concept
- Hands-on exercises
- Guided practice
- Common pitfalls addressed

**Lunch:** 30 minutes

**Session 3:** Application (1.5 hours)
- Apply concepts to real scenarios
- Build components or features
- Pair programming opportunities
- Troubleshooting and debugging

**Break:** 15 minutes

**Session 4:** Hands-on Project Work (1 hour)
- Independent or guided building
- Integration of concepts
- Code review and feedback
- Testing and validation

**Reflection:** 15 minutes
- Daily journal entry
- Key takeaways
- Questions that arose
- Self-assessment

#### Friday Pattern

**Session 1:** Peer Code Review (1.5 hours)
- Review partner's code using GitHub Pull Requests
- Give constructive feedback
- Learn from others' approaches

**Break:** 15 minutes

**Session 2:** Documentation & Retrospective (1 hour)
- Update project documentation
- Week retrospective discussion
- Identify lessons learned

**Session 3:** Presentations (30 minutes)
- Quick demos of weekly project
- Share one challenge overcome
- Peer feedback

---

## Learning Philosophy

### Core Principles

**1. Professional Standards from Day One**
- You're not just learning to code; you're learning to be a professional developer
- Industry best practices are integrated, not added later
- Tools and workflows mirror real development teams

**2. Understand the "Why" Before the "How"**
- Every concept includes context about why it matters
- Understanding > memorization
- Connect to real-world applications

**3. Build to Learn**
- Heavy emphasis on hands-on practice
- Learn by creating actual projects
- Mistakes are valuable learning opportunities

**4. Accessibility and Quality First**
- Every project must be accessible
- Code quality matters as much as functionality
- User experience drives technical decisions

**5. Collaborative Learning**
- Pair programming encouraged
- Code reviews build skills
- Learn from peers' approaches
- Professional communication practice

---

## Weekly Project Pattern

Every week includes a substantial project that:

### Builds Throughout the Week
- **Monday:** Setup and foundational concepts
- **Tuesday-Wednesday:** Core functionality development
- **Thursday:** Integration and refinement
- **Friday:** Polish, review, and presentation

### Requires Professional Practices
- Git feature branch workflow
- Comprehensive README documentation
- Testing and validation
- Deployment to production
- Code review process

### Demonstrates Learning
- Applies all weekly concepts
- Integrates with previous weeks' knowledge
- Shows professional development practices
- Solves a real-world problem

---

## Git Workflow Expectations

### Feature Branch Workflow (Used Every Week)

```
main (or master)
  └── develop
       ├── feature/your-feature-name
       ├── feature/another-feature
       └── feature/final-feature
```

**Process:**
1. Always work in feature branches
2. Create branch from `develop`: `git checkout -b feature/feature-name`
3. Make focused commits with clear messages
4. Push branch: `git push origin feature/feature-name`
5. Create Pull Request on GitHub
6. Get code review
7. Merge to `develop` after approval

**Commit Message Format:**
```
feat: Add user authentication
fix: Resolve navigation menu bug
docs: Update README with installation steps
style: Format CSS with consistent spacing
refactor: Simplify data fetching logic
```

**What NOT to Do:**
- ❌ Work directly on main/master branch
- ❌ Commit message: "updates" or "fix"
- ❌ Giant commits with 50+ file changes
- ❌ Commit without testing first
- ❌ Skip code review

---

## Documentation Standards

### README Requirements

Every project must include a comprehensive README with:

**Essential Sections:**
- Project title and description
- Features implemented
- Tech stack used
- Installation instructions
- Usage instructions
- Project structure overview
- Design/architecture decisions
- Testing approach
- License information
- Author/contact info

**Professional Touch:**
- Clear, scannable formatting
- Code examples where helpful
- Screenshots or demos
- Links to live deployment
- Badges (optional but professional)

### Code Comments

**When to Comment:**
- Complex algorithms or logic
- Non-obvious decisions
- Workarounds for known issues
- API usage that isn't self-evident

**When NOT to Comment:**
- Obvious code that explains itself
- Restating what code does
- Outdated information

```javascript
// ❌ Bad: Stating the obvious
// Increment counter by 1
counter++;

// ✅ Good: Explaining the why
// Using debounce to prevent excessive API calls during rapid typing
const debouncedSearch = debounce(searchHandler, 300);
```

---

## Assessment Approach

### Weekly Project Rubric (Typical Point Allocation)

**Technical Implementation (40-50 points)**
- Feature completeness
- Code quality and organization
- Correct use of concepts taught
- Bug-free functionality

**Professional Practices (30-40 points)**
- Git workflow and commit quality
- Documentation completeness
- Code review participation
- Deployment success

**Quality Standards (20-30 points)**
- Accessibility compliance
- Responsive design
- Browser testing
- Performance optimization
- Code validation

### What We're Evaluating

**Not Just "Does It Work?"**
- How well does it work?
- Is it maintainable?
- Is it accessible?
- Does it follow best practices?
- Can other developers understand it?

**Growth Mindset:**
- We expect mistakes and learning
- Improvement week-over-week matters
- Asking for help is encouraged
- Failing forward builds skills

---

## Homework Expectations

### Daily Homework (Mon-Thu)

**Time Commitment:** 1-2 hours
**Purpose:** Reinforce daily concepts, prepare for next day

**Typical Assignments:**
- Complete or refine in-class exercises
- Research deeper into topics covered
- Reading/documentation review
- Prepare questions for next day

**Deliverables:**
- Code pushed to GitHub
- Commits with clear messages
- Updated documentation
- Reflection notes

### Weekend Work

**Friday Assignment:** Larger, integrative project
**Time Commitment:** 3-5 hours
**Purpose:** Consolidate weekly learning, prepare for next week

**What to Submit:**
- Complete project in GitHub repository
- All features working
- Documentation complete
- Deployed to production (when applicable)
- Ready for Monday code review

---

## Code Review Process

### Giving Feedback (Friday Sessions)

**Do:**
- ✅ Be specific: "Consider using semantic HTML here instead of divs"
- ✅ Explain why: "This will improve accessibility for screen readers"
- ✅ Ask questions: "What was your reasoning for this approach?"
- ✅ Praise good work: "Great use of CSS Grid here!"
- ✅ Suggest improvements: "You might simplify this with array methods"

**Don't:**
- ❌ Be vague: "This is wrong"
- ❌ Be personal: "You don't know what you're doing"
- ❌ Just criticize: Focus on improvement, not just problems
- ❌ Ignore good code: Positive feedback matters too

### Receiving Feedback

**Mindset:**
- Code review makes you better
- Feedback is about the code, not you personally
- Questions help you learn
- Everyone's code gets reviewed (including seniors!)

**Response:**
- Listen/read carefully
- Ask clarifying questions
- Thank reviewers
- Address feedback thoughtfully
- Explain your decisions when asked

---

## Professional Practices Expected

### From Week 1 Forward

**Version Control:**
- Commit regularly (not just end of day)
- Write meaningful commit messages
- Use branches appropriately
- Keep repository organized

**Code Quality:**
- Follow formatting standards
- Name things clearly
- Keep functions/methods focused
- Avoid duplication

**Testing:**
- Test your code before committing
- Check multiple browsers
- Verify responsive design
- Validate HTML/CSS
- Check accessibility

**Communication:**
- Ask questions when stuck (don't suffer in silence)
- Share solutions that helped you
- Update others on blockers
- Document decisions

---

## Tools & Environment

### Required Tools

**Development:**
- Code editor (VS Code recommended)
- Git for version control
- Node.js and npm
- Modern browser with DevTools (Chrome/Firefox)

**Accounts:**
- GitHub account
- Various service accounts as needed per week

**Testing:**
- HTML/CSS validators
- Accessibility testing tools (WAVE, Lighthouse)
- Browser DevTools

### DevTools Mastery

**You'll use DevTools daily for:**
- Inspecting HTML/CSS
- Debugging JavaScript
- Testing responsive design
- Checking network requests
- Auditing performance and accessibility
- Console logging and testing

**Expect to get very comfortable with:**
- Elements panel
- Console panel
- Network panel
- Application panel
- Lighthouse audits

---

## Typical Weekly Themes

### Week Structure Pattern

**Monday:** Foundation & Setup
- New concepts introduced
- Project scaffolding
- Tools and workflow setup

**Tuesday:** Core Learning
- Deep dive into concepts
- Practical application
- Skill building

**Wednesday:** Advanced Topics
- More complex concepts
- Integration
- Professional techniques

**Thursday:** Build Day
- Heavy project work
- Integration of concepts
- Instructor support and debugging

**Friday:** Review & Reflect
- Code review
- Documentation
- Retrospective
- Presentations
- Week wrap-up

---

## Accessibility Requirements (Every Week)

### Non-Negotiable Standards

**Every project must:**
- Use semantic HTML
- Include proper heading hierarchy (h1-h6)
- Provide alt text for images
- Ensure keyboard navigation works
- Meet WCAG AA color contrast (4.5:1 minimum)
- Include form labels
- Have focus indicators
- Work with screen readers

**Why This Matters:**
- Legal requirement in many jurisdictions
- 15%+ of population has some disability
- Better for everyone (mobile users, temporary impairments)
- Professional standard
- SEO benefits

**Testing Required:**
- Keyboard navigation test
- Screen reader test (basic)
- WAVE accessibility checker
- Lighthouse accessibility audit (aim for 90+)

---

## Common Pitfalls to Avoid

### Technical Mistakes

**Version Control:**
- Committing node_modules/ (use .gitignore!)
- Working directly on main branch
- Vague commit messages
- Not pulling before pushing

**Code Quality:**
- Copy-pasting without understanding
- Ignoring errors/warnings
- Not testing before committing
- Skipping validation

**Process:**
- Starting to code before understanding the problem
- Not reading documentation
- Skipping accessibility
- Not asking for help when stuck

### Professional Mistakes

- Missing standups or arriving unprepared
- Not participating in code reviews
- Incomplete documentation
- Late submissions without communication
- Not testing in multiple environments

---

## Success Strategies

### Study Habits

**During Class:**
- Take notes (but not everything - focus on key concepts)
- Ask questions immediately when confused
- Try concepts as they're explained
- Help classmates when you can

**Outside Class:**
- Review notes shortly after class
- Practice concepts independently
- Read documentation (MDN, official docs)
- Build small side projects

**When Stuck:**
1. Read error messages carefully
2. Check documentation
3. Use DevTools to investigate
4. Google the specific error
5. Ask classmates
6. Ask instructor

### Time Management

**During Build Time:**
- Break problems into small steps
- Commit working code frequently
- Test incrementally (don't wait until end)
- Take breaks when frustrated

**For Homework:**
- Start early, don't wait until late night
- Budget time for unexpected issues
- Prioritize required features first
- Polish if time allows

---

## Communication Channels

### When to Use What

**In Class:**
- Questions during instruction
- Help during work time
- Pair programming collaboration

**Standups:**
- Share progress
- Identify blockers
- Ask for specific help

**Code Reviews:**
- Technical feedback
- Best practice discussions
- Learning from peers

**Office Hours:**
- Deep dive on concepts
- Debugging complex issues
- Career guidance

---

## Growth Mindset

### Remember

**You're Not Expected to Know Everything:**
- Confusion is normal
- Mistakes are learning opportunities
- Everyone starts somewhere
- Asking questions shows engagement

**Professional Development is a Journey:**
- Week 1 foundations enable Week 12 complexity
- Skills compound over time
- Concepts that seem hard become natural
- Professional practices feel awkward until they don't

**Your Bootcamp Journey:**
- Early weeks feel overwhelming (normal!)
- Mid-bootcamp clarity emerges
- Late bootcamp confidence builds
- Post-bootcamp learning continues

---

## What Makes a Successful Student

### Technical Habits
- ✅ Commits code regularly
- ✅ Tests thoroughly before submitting
- ✅ Reads error messages carefully
- ✅ Uses DevTools effectively
- ✅ Validates HTML/CSS
- ✅ Checks accessibility

### Professional Habits
- ✅ Shows up prepared for standups
- ✅ Participates in code reviews
- ✅ Writes clear documentation
- ✅ Communicates blockers early
- ✅ Helps classmates
- ✅ Asks questions when confused

### Learning Habits
- ✅ Reads documentation
- ✅ Experiments with code
- ✅ Reflects on mistakes
- ✅ Connects concepts
- ✅ Practices outside class
- ✅ Maintains curiosity

---

## Weekly Retrospective Questions

### Reflect on These Each Friday

**Learning:**
1. What was your biggest "aha!" moment this week?
2. What concept is still unclear?
3. How did this week connect to previous weeks?

**Process:**
1. What went well in your workflow?
2. What would you do differently next week?
3. Did you manage your time effectively?

**Collaboration:**
1. How did you help others this week?
2. What did you learn from code reviews?
3. Did you ask for help when needed?

**Professional:**
1. Did you maintain professional standards?
2. How was your code quality?
3. Did you document your work well?

---

## Final Reminders

### This Bootcamp is Intense

**Expect:**
- Fast pace
- High volume of new information
- Some frustration and confusion
- Growth through challenge
- Professional-level expectations

**You'll Succeed By:**
- Staying engaged
- Asking questions
- Practicing consistently
- Helping others
- Maintaining professional habits
- Taking care of yourself

### The Goal

**By the End:**
- Build full-stack applications
- Work like a professional developer
- Collaborate in teams
- Solve complex problems
- Continue learning independently
- Launch your developer career

### You've Got This!

This structure is designed to support your learning and growth. Follow these expectations, maintain professional standards, and don't hesitate to ask for help. We're all here to support your success.

---

**Questions about any of these expectations?**
Bring them to your instructor during standup or office hours.

**Remember:** Professional development is as much about process and practices as it is about code. Master both, and you'll thrive.
