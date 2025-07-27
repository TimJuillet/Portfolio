# React Portfolio - Timothée Juillet

A modern and interactive portfolio built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Elegant interface with smooth animations
- **Dark/Light Mode**: Adaptive theme with smooth transitions
- **Advanced Animations**: 
  - Text animations (Split Text, Blur Text, Typewriter)
  - Interactive Folder components
  - Parallax effects
  - Custom cursor
  - Scroll progress indicator
  - Creative dock navigation
- **Responsive**: Optimized for all devices
- **Performance**: Fast loading and optimized animations

## 📦 Installation

1. Navigate to the project directory:
```bash
cd /Users/timotheejuillet/Documents/Perso/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Technologies Used

- **React 19**: Modern JavaScript framework
- **Vite**: Fast build tool
- **Tailwind CSS 3**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hooks**: State and effects management
- **Context API**: Global theme management

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Responsive navigation bar
│   ├── Hero.jsx           # Hero section with animations
│   ├── About.jsx          # About section with timeline
│   ├── Projects.jsx       # Projects gallery with filters
│   ├── Contact.jsx        # Contact form
│   ├── Footer.jsx         # Footer
│   ├── TextAnimations.jsx # Text animation components
│   ├── Folder.jsx         # Interactive folder components
│   ├── Button.jsx         # Reusable button components
│   ├── Dock.jsx           # Dock navigation
│   └── Effects.jsx        # Visual effects (cursor, scroll, etc.)
├── contexts/
│   └── ThemeContext.js    # Theme management
├── hooks/
│   └── useScroll.js       # Custom hooks
├── App.jsx                # Main component
├── main.jsx               # Entry point
└── index.css              # Global Tailwind styles
```

## 🎨 Customization

### Modify Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add Projects
Modify the `projects` array in `src/components/Projects.jsx`

### Update Personal Information
Update information in:
- `Hero.jsx`: Title and main description
- `About.jsx`: Experience and skills
- `Contact.jsx`: Contact information

## 🚀 Deployment

To create a production build:

```bash
npm run build
```

The `build/` folder will contain optimized files ready for deployment.

## 📱 Responsive Design

The portfolio is optimized for:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## ⚡ Performance

- Component lazy loading
- Image optimization
- GPU-accelerated animations
- Automatic code splitting

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 💡 Tips

1. **Animations**: Animations are disabled on mobile for better performance
2. **Images**: Use optimized formats (WebP, AVIF) for better performance
3. **SEO**: Add appropriate meta tags in `public/index.html`
4. **CV**: Replace the placeholder CV file in `public/CV_Timothee_Juillet.pdf` with your actual CV

## 📄 License

This project is under MIT license.

---

Made with ❤️ by Timothée Juillet
