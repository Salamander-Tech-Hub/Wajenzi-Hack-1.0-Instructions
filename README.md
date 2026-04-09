# HACKATHON INSTRUCTIONS - BUILD YOUR VERSION OF SALAMANDER TECH HUB LANDING PAGE V2

## Overview
Create a new version of the Salamander Tech Hub's landing page. View the current version here: https://salamander-tech-hub.github.io/landing-page/

## Team Requirements
- Work in groups of **4 to 5 people**
- No group should have less than 4 people or more than 5 people
- Solo work is **not allowed**
- **The use of AI is allowed**

## Project Guidelines....

### 1. Website Requirements
Create a website inspired by the landing page that:
- Communicates what the community is all about
- Has something special and unique to it

**Example:** You could build a website that has an AI chatbot that answers questions about the community.

### 2. Repository Setup
1. Fork the repo for landing-page-v2: https://github.com/Salamander-Tech-Hub/landing-page-v2
2. In your forked repo, create a folder with your team name
3. Create a **README.md** file in your team folder containing:
   - Your team name as the title
   - Details of your team members (name and email address)
   - Link to your remote repo
   - Answer to the question: **"What makes this website special?"**
     - Example answer: *"Our version of Salamander Tech Hub Landing Page V2 is special because it incorporates simple games that community members can play."*
4. Push the changes to your remote repo
5. Create a PR (pull request) to submit your team information
6. Continue working on your repo
7. **Commit changes and push them to your repo every 30 minutes** and create PRs

### 3. Judging Criteria
Your website will be evaluated based on:

1. **Identity** - Does the website embody the brand, vision, and plan of the Salamander Community?
2. **Specialness** - Does the website have something about it that makes it unique?
3. **UI/UX** - Does the website look good, and does it appear well-formed on both mobile and web?
4. **Completeness** - Does the website and its parts work the way they are intended to?

### 4. Deployment
- Hosting/deployment is **not required**
- However, deployment is an **added advantage**

## Presentation Requirements
After the hackathon, you will present your version of the website:
- **No pitch deck needed**
- Provide a walkthrough of your website
- Describe what makes your website special
- Presentation duration: **Maximum 3 minutes**

## Prizes
The top 3 projects will receive:

| Place | Prize |
|-------|-------|
| 🥇 **First Place** | Bottles branded by Technetium |
| 🥈 **Second Place** | T-shirts branded by MUIAA |
| 🥉 **Third Place** | Stickers |

---

## Git Workflow Guide

### Step 1: Fork the Repository
1. Go to https://github.com/Salamander-Tech-Hub/landing-page-v2
2. Click the **"Fork"** button in the top-right corner
3. Select your GitHub account to create the fork

### Step 2: Clone Your Fork
```bash
# Clone your forked repository
git clone https://github.com/YOUR-USERNAME/landing-page-v2.git

# Navigate into the project directory
cd landing-page-v2
```

### Step 3: Create Your Team Folder and README
```bash
# Create a folder with your team name (replace YOUR-TEAM-NAME)
mkdir YOUR-TEAM-NAME

# Navigate into your team folder
cd YOUR-TEAM-NAME

# Create a README.md file
touch README.md
```

Edit the `README.md` file with your team information:
```markdown
# [Your Team Name]

## Team Members
- **Name:** John Doe | **Email:** john@example.com
- **Name:** Jane Smith | **Email:** jane@example.com
- **Name:** Alex Johnson | **Email:** alex@example.com
- **Name:** Sam Lee | **Email:** sam@example.com

## Remote Repository
[Link to your forked repo]

## What Makes This Website Special?
[Your answer here - explain what unique features or elements make your version stand out]
```

### Step 4: Commit and Push Initial Changes
```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Add team information and README"

# Push to your fork
git push origin main
```

### Step 5: Create a Pull Request (PR)
1. Go to your forked repository on GitHub
2. Click on **"Pull requests"** tab
3. Click the **"New pull request"** button
4. Click **"Create pull request"**
5. Add a title: `Add [Your Team Name] - Team Information`
6. Add a description explaining your submission
7. Click **"Create pull request"**

### Step 6: Continue Development
```bash
# Create your website files in your team folder
# Work on your project...

# Every 30 minutes, commit and push your changes:
git add .
git commit -m "Descriptive message about what you changed"
git push origin main

# Then create a new PR on GitHub following Step 5
```

### Helpful Git Commands
```bash
# Check status of your changes
git status

# See what changes you've made
git diff

# View commit history
git log --oneline

# Create a new branch (optional, for better organization)
git checkout -b feature/your-feature-name

# Switch back to main branch
git checkout main

# Pull latest changes from your fork
git pull origin main
```

### Best Practices
- **Commit often:** Don't wait until the end to commit
- **Write clear commit messages:** Describe what you changed and why
- **Push every 30 minutes:** As required by the hackathon rules
- **Create PRs regularly:** Keep the organizers updated on your progress
- **Test before committing:** Make sure your code works

---

## Quick Checklist
- [ ] Form a team of 4-5 people
- [ ] Fork the repository
- [ ] Clone your fork locally
- [ ] Create your team folder
- [ ] Write your team README.md
- [ ] Commit and push initial changes
- [ ] Create initial PR
- [ ] Build your special landing page
- [ ] Commit and push every 30 minutes
- [ ] Create PRs regularly
- [ ] Prepare 3-minute presentation
- [ ] (Optional) Deploy your website

---

## Need Help?
- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **Markdown Guide:** https://www.markdownguide.org/

**Good luck and happy hacking! 🚀**
