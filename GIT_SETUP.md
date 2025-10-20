# Git Repository Setup Guide - Kishi Consulting

This guide will help you set up a remote Git repository for your Kishi Consulting website.

## 🎉 Local Repository Status

✅ **Local Git repository initialized successfully!**
- Repository created in: `C:\Users\ACER\Kishi`
- Initial commit made with 35 files
- All project files are now tracked by Git

## 📋 Next Steps: Create Remote Repository

### Option 1: GitHub (Recommended)

#### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `kishi-consulting` (or your preferred name)
   - **Description**: `Professional financial consulting website built with React, Next.js, and Firebase`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

#### 2. Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kishi-consulting.git

# Rename the default branch to 'main' (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### Option 2: GitLab

#### 1. Create GitLab Repository

1. Go to [GitLab.com](https://gitlab.com) and sign in
2. Click **"New project"**
3. Select **"Create blank project"**
4. Fill in the details:
   - **Project name**: `kishi-consulting`
   - **Project slug**: `kishi-consulting`
   - **Visibility**: Choose your preference
   - **DO NOT** initialize with README
5. Click **"Create project"**

#### 2. Connect to GitLab

```bash
# Add the remote repository
git remote add origin https://gitlab.com/YOUR_USERNAME/kishi-consulting.git

# Rename branch to main
git branch -M main

# Push your code
git push -u origin main
```

### Option 3: Bitbucket

#### 1. Create Bitbucket Repository

1. Go to [Bitbucket.org](https://bitbucket.org) and sign in
2. Click **"Create repository"**
3. Fill in the details:
   - **Repository name**: `kishi-consulting`
   - **Access level**: Choose your preference
   - **DO NOT** initialize with README
4. Click **"Create repository"**

#### 2. Connect to Bitbucket

```bash
# Add the remote repository
git remote add origin https://bitbucket.org/YOUR_USERNAME/kishi-consulting.git

# Rename branch to main
git branch -M main

# Push your code
git push -u origin main
```

## 🔧 Git Configuration (First Time Setup)

If this is your first time using Git, you may need to configure your identity:

```bash
# Set your name and email (replace with your actual details)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 📝 Common Git Commands

### Daily Workflow

```bash
# Check status of your files
git status

# Add specific files
git add filename.txt

# Add all changes
git add .

# Commit changes with a message
git commit -m "Your commit message here"

# Push changes to remote repository
git push

# Pull latest changes from remote
git pull
```

### Branch Management

```bash
# Create a new branch
git checkout -b feature/new-feature

# Switch to a branch
git checkout branch-name

# List all branches
git branch

# Merge a branch
git merge branch-name

# Delete a branch
git branch -d branch-name
```

### Viewing History

```bash
# View commit history
git log

# View commit history in one line
git log --oneline

# View changes in a specific commit
git show commit-hash
```

## 🚀 Deployment Integration

Once your repository is set up, you can easily deploy to:

### Vercel (Recommended for Next.js)

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import your `kishi-consulting` repository
5. Vercel will automatically detect it's a Next.js project
6. Click **"Deploy"**

### Netlify

1. Go to [Netlify.com](https://netlify.com)
2. Sign in and click **"New site from Git"**
3. Connect your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **"Deploy site"**

## 🔒 Security Best Practices

### Environment Variables

Never commit sensitive information to Git:

```bash
# Make sure these files are in .gitignore
.env
.env.local
.env.production
server/.env
```

### Firebase Configuration

- Keep your Firebase config in environment variables
- Use the `env.example` files as templates
- Never commit actual API keys

## 📚 Repository Structure

Your repository now contains:

```
kishi-consulting/
├── app/                    # Next.js app directory
├── components/            # React components
├── lib/                   # Utility libraries
├── server/                # Express.js backend
├── public/                # Static assets
├── .gitignore            # Git ignore rules
├── README.md             # Project documentation
├── QUICK_START.md        # Quick setup guide
├── DEPLOYMENT.md         # Deployment instructions
├── GIT_SETUP.md          # This file
└── package.json          # Dependencies
```

## 🆘 Troubleshooting

### Common Issues

1. **Authentication Error**
   ```bash
   # Use personal access token instead of password
   git remote set-url origin https://YOUR_TOKEN@github.com/USERNAME/REPO.git
   ```

2. **Large File Error**
   ```bash
   # Remove large files from history
   git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch large-file.txt' --prune-empty --tag-name-filter cat -- --all
   ```

3. **Merge Conflicts**
   ```bash
   # Resolve conflicts in your editor, then:
   git add .
   git commit -m "Resolve merge conflicts"
   ```

## 🎯 Next Steps After Repository Setup

1. **Set up environment variables** (see README.md)
2. **Configure Firebase** (see QUICK_START.md)
3. **Deploy to production** (see DEPLOYMENT.md)
4. **Set up CI/CD** for automatic deployments
5. **Add collaborators** if working with a team

## 📞 Support

If you encounter any issues:

1. Check the [Git documentation](https://git-scm.com/doc)
2. Review the [GitHub help](https://help.github.com)
3. Check your repository's Issues section
4. Consult the project's README.md for specific setup instructions

---

**🎉 Congratulations! Your Kishi Consulting website is now ready for version control and deployment!**
