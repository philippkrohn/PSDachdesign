# GitHub Pages Deployment Requirements

## Key Information from GitHub Documentation

### Publishing Options
1. **Deploy from a branch** (recommended for simple static sites)
   - Source branch can be any branch in the repository
   - Source folder can be either root (`/`) or `/docs` folder
   - Changes pushed to source branch automatically publish to GitHub Pages site

2. **GitHub Actions workflow** (for custom build processes)
   - Use when you need control over the build process
   - Use when you don't want Jekyll or need custom build tools

### File Structure Requirements
- Main HTML file must be named `index.html`
- Files can be in root directory (`/`) or in `/docs` folder
- Static files (HTML, CSS, JavaScript) are supported
- Repository can contain symbolic links but requires GitHub Actions workflow

### Important Notes
- GitHub Pages sites are publicly available on the internet
- Sites are available even if repository is private (depending on plan)
- Repository size limit: 1 GB
- Monthly bandwidth limit: 100 GB
- Commits pushed by GitHub Actions using `GITHUB_TOKEN` don't trigger builds

### Setup Process
1. Navigate to repository Settings
2. Go to Pages section under "Code and automation"
3. Under "Build and deployment", select "Deploy from a branch"
4. Choose source branch and folder
5. Click Save



## Static Website Deployment (HTML/CSS/JS)

### Key Requirements
1. **Entry Point**: Main HTML file must be named `index.html`
2. **File Organization**: Clean folder structure with directories for scripts and styles
3. **No Build Step**: Basic HTML/CSS/JS apps don't need a build process
4. **Repository Setup**: Simply push code to GitHub repository

### Deployment Process
1. Create GitHub repository
2. Initialize Git and push code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[username]/[repo-name].git
   git push -u origin main
   ```
3. Configure GitHub Pages in repository Settings > Pages
4. Select main branch as source
5. Site will be available at: `https://[username].github.io/[repo-name]`

### Common Issues to Avoid
- Missing `index.html` file
- Incorrect file paths (relative vs absolute)
- Case sensitivity in file names
- Missing assets (images, CSS, JS files)
- Symbolic links (require GitHub Actions workflow)

