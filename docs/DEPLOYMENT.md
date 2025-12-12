# Deployment Guide for nemooWeb

This website is deployed using GitHub Pages with automated GitHub Actions.

## Prerequisites

- GitHub repository with Pages enabled
- Write access to the repository

## GitHub Pages Setup

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section (under "Code and automation")
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
   - This allows the workflow to deploy automatically

### 2. GitHub Actions Workflow

The website uses the `.github/workflows/static.yml` workflow which:
- Triggers automatically on pushes to the `main` branch
- Can be manually triggered from the Actions tab
- Deploys the entire repository as static content to GitHub Pages

### 3. Deploying Updates

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Check out the code
2. Set up GitHub Pages
3. Upload the site content
4. Deploy to GitHub Pages

### 4. Accessing Your Site

After deployment, your site will be available at:
```
https://<username>.github.io/<repository-name>/
```

For this repository:
```
https://capi-nemoo.github.io/nemooWeb/
```

## Local Development

To test the site locally before deploying:

```bash
# Navigate to the project directory
cd nemooWeb

# Start a local web server
python3 -m http.server 8000

# Open in browser
# http://localhost:8000
```

## Troubleshooting

### Deployment Failed

1. Check the Actions tab in your GitHub repository
2. Review the workflow run logs for errors
3. Ensure GitHub Pages is enabled in repository settings
4. Verify the workflow has proper permissions

### 404 Errors

- Make sure `index.html` exists in the root directory
- Check that all asset paths are correct (use relative or absolute paths)
- Verify the 404.html file exists for custom error pages

### Assets Not Loading

- Ensure all paths in HTML files start with `/` for absolute paths
- Or use relative paths like `./assets/...`
- Check that the assets directory structure is maintained

## Manual Deployment

If you need to manually trigger a deployment:

1. Go to the **Actions** tab in GitHub
2. Select the "Deploy static content to Pages" workflow
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## Workflow Permissions

The workflow requires these permissions:
- `contents: read` - to check out the code
- `pages: write` - to deploy to GitHub Pages
- `id-token: write` - for authentication

These are already configured in the workflow file.
