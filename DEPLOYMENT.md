# Deployment Guide - Youjin Choi Portfolio

## Prerequisites

1. **GitHub Account**: Create one at https://github.com if you don't have it
2. **Git installed**: Download from https://git-scm.com
3. **Node.js & npm**: Already installed and working

## Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named: **youjinchoi.github.io**
3. Choose "Public" visibility
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Initialize Git in Your Local Project

```bash
cd /Users/youjinchoi/claude_project/workspace/claude-code-mastery

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website setup"

# Add remote repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/youjinchoi.github.io.git

# Rename branch to main (GitHub Pages default)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository: https://github.com/yourusername/youjinchoi.github.io
2. Navigate to Settings → Pages
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click "Save"

### Step 4: Deploy the Website

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build the production-ready files
2. Create/update the `gh-pages` branch with the built files
3. Push to GitHub automatically

### Step 5: Verify Deployment

1. Wait ~2-5 minutes for GitHub to process
2. Visit: https://youjinchoi.github.io
3. Your portfolio should now be live!

## Updating Your Portfolio

To update content after deployment:

1. Make changes to files in `src/`
2. Update data in `src/data/` files
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update portfolio: [describe changes]"
   git push origin main
   ```
4. Deploy again:
   ```bash
   npm run deploy
   ```

## Customization Guide

### Profile Information
Edit `src/data/profile.ts`:
- Change name, bio, keywords
- Update education details
- Add/modify social links

### Projects
Edit `src/data/projects.ts`:
- Add new projects
- Update project URLs
- Change featured status

### Publications
Edit `src/data/publications.ts`:
- Add your research papers
- Update author names and conferences
- Add paper links (PDF/DOI)

### Artwork
Edit `src/data/artwork.ts`:
- Add gallery items
- Update media URLs (images/videos)
- Add tools and descriptions

### Hobbies & Travel
Edit `src/pages/Etc.tsx`:
- Modify hobby descriptions
- Update travel locations
- Add travel photos

### Design & Colors
Edit `src/theme.ts`:
- Change brand colors
- Modify component styling
- Update fonts (currently using Google Fonts: Afacad Flux, Playfair Display)

### Typography
Fonts are loaded in `index.html`. To change:
1. Edit the Google Fonts link in `index.html`
2. Update font references in `src/styles/index.css` and `src/theme.ts`

## Build Commands

```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### GitHub Pages not updating
- Wait 5-10 minutes for GitHub to process
- Check that `gh-pages` branch exists in repository
- Verify Settings → Pages is set to `gh-pages` branch

### Routes not working (404 errors)
- HashRouter is configured (`#/projects` instead of `/projects`)
- Make sure to use links with `#/` prefix
- All pages should render correctly with hash-based routing

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Images not loading
- Place images in `public/` folder
- Reference as `/imagename.jpg` in JSX
- Example: `src="/projects/project-name.jpg"`

## Project Structure Reference

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation with dark mode toggle
│   ├── Footer.tsx      # Footer with social links
│   └── SectionHeader.tsx # Section titles with styling
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero section
│   ├── Projects.tsx    # Projects showcase
│   ├── Publications.tsx # Research papers
│   ├── Artwork.tsx     # Gallery with lightbox
│   └── Etc.tsx         # Hobbies and travel
├── data/               # Content and configuration
│   ├── profile.ts      # Personal info and social links
│   ├── projects.ts     # Project details
│   ├── publications.ts # Paper listings
│   └── artwork.ts      # Gallery items
├── styles/             # Global styles
├── App.tsx             # Main app with routing
├── theme.ts            # Chakra UI theme config
└── main.tsx            # Entry point
```

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Chakra UI** - Component library
- **Framer Motion** - Animations
- **AOS** - Scroll animations
- **Typed.js** - Typing effect
- **React Router DOM** - Client-side routing (HashRouter)
- **Vite** - Build tool
- **GitHub Pages** - Hosting

## Performance Tips

1. Optimize images before adding to `public/`
2. Use lazy loading for gallery images
3. Consider code splitting for large sections
4. Monitor bundle size (currently ~198KB gzipped)

## Support & Next Steps

- Customize data files with your actual information
- Add profile photo to `public/profile.jpg`
- Add project images and artwork to `public/`
- Test all routes and responsive behavior
- Share your portfolio!
