# Youjin Choi - Personal Portfolio Website

A modern, responsive portfolio website built with React, Chakra UI, and Framer Motion. Designed to showcase research, projects, publications, and creative work with smooth animations and intuitive navigation.

## ✨ Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Animated Sections**: Smooth scroll animations with AOS (Animate On Scroll)
- **Interactive Lightbox**: Gallery with modal lightbox for artwork
- **Typing Effect**: Dynamic hero section with Typed.js
- **Modern UI**: Built with Chakra UI for beautiful, accessible components
- **HashRouter**: GitHub Pages compatible client-side routing
- **Performance**: Optimized build with Vite (~198KB gzipped)

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to see your portfolio in development mode.

### Build

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components (Home, Projects, etc.)
├── data/               # Configuration and content
├── styles/             # Global CSS
├── theme.ts            # Chakra UI theme configuration
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## 🛠️ Technology Stack

| Aspect | Technology |
|--------|-----------|
| Framework | React 19 |
| Language | TypeScript |
| UI Library | Chakra UI v2 |
| Styling | Emotion (Chakra's CSS-in-JS) |
| Animations | Framer Motion + AOS |
| Typing Effect | Typed.js |
| Routing | React Router DOM (HashRouter) |
| Build Tool | Vite |
| Hosting | GitHub Pages |
| Fonts | Google Fonts (Afacad Flux, Playfair Display) |

## 📝 Customization

### Edit Your Profile
Update `src/data/profile.ts`:
```typescript
export const profile = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio here',
  // ... more fields
}
```

### Add Projects
Edit `src/data/projects.ts` to add your projects.

### Add Publications
Edit `src/data/publications.ts` to list your research papers.

### Add Artwork
Edit `src/data/artwork.ts` for your gallery.

### Customize Design
- **Colors**: Update brand colors in `src/theme.ts`
- **Fonts**: Change Google Fonts link in `index.html`
- **Animations**: Adjust AOS settings in `src/App.tsx`

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**:
  - `base`: Mobile (< 480px)
  - `sm`: Small tablets (480px - 768px)
  - `md`: Medium tablets (768px - 1024px)
  - `lg`: Desktop (1024px+)

## 🎨 Color Palette

Default brand colors (orange theme):
- Primary: #ff8800
- Light: #ffa31a
- Dark: #cc7000

Customize in `src/theme.ts`

## ⌨️ Keyboard Navigation

- **`Esc`**: Close lightbox modal
- **`←` / `→`**: Navigate gallery images (when lightbox open)
- **Tab**: Navigate interactive elements
- **Space/Enter**: Activate buttons

## 🌙 Dark Mode

- Toggle via button in navigation
- User preference is remembered
- All components support both themes

## 📊 Performance

- **Bundle Size**: ~198KB gzipped
- **Load Time**: < 2s (typical connection)
- **Lighthouse Score**: 85+

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags in `index.html`
- Responsive mobile design
- Fast page load (Vite optimization)

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes not working
- This project uses HashRouter (`#/projects`)
- Links must use `#/` prefix
- Reload page if needed

### Images not showing
- Place images in `public/` folder
- Reference as `/imagename.jpg`
- Supported formats: JPG, PNG, WebP

## 📚 Dependencies

- **React & React DOM**: UI framework
- **@chakra-ui/react**: Component library
- **framer-motion**: Advanced animations
- **aos**: Scroll-triggered animations
- **typed.js**: Typing effect
- **react-router-dom**: Client-side routing
- **typescript**: Type safety

See `package.json` for all dependencies and versions.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your portfolio

## 🚀 Next Steps

1. Customize `src/data/profile.ts` with your information
2. Add your projects to `src/data/projects.ts`
3. Add your publications to `src/data/publications.ts`
4. Upload images to `public/` folder
5. Test locally with `npm run dev`
6. Deploy to GitHub Pages (see DEPLOYMENT.md)

## 📞 Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
2. Review component documentation in source files
3. Check Chakra UI docs: https://chakra-ui.com
4. Refer to technology documentation for specific libraries

---

**Built with ❤️ using React, Chakra UI, and Framer Motion**
