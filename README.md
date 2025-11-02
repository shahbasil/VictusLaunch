# Victus Launch - Landing Page

A premium single-page landing site for Victus Launch, an end-to-end centralized exchange listing agency.

## Features

- ✨ Ultra-premium design with purple/cyan gradient theme
- 🎨 3D WebGL hero scene with Three.js
- 📱 Fully responsive design
- ⚡ Smooth animations with GSAP and Framer Motion
- 🎯 Interactive roadmap with scroll-triggered reveals
- 📝 Lead capture form with validation
- 🔍 SEO optimized with schema markup
- ♿ Accessibility compliant (WCAG AA)
- 🚀 Built with React + Vite + Tailwind CSS

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Nav.jsx              # Sticky navigation
│   │   ├── Hero.jsx             # 3D hero section
│   │   ├── TokenScene.jsx       # Three.js 3D scene
│   │   ├── TrustStrip.jsx       # Exchange logos
│   │   ├── ServicesGrid.jsx     # Services showcase
│   │   ├── Roadmap.jsx          # Interactive timeline
│   │   ├── FundingSection.jsx   # OTC & funding CTA
│   │   ├── PricingPackages.jsx  # Packages grid
│   │   ├── Testimonials.jsx     # Case studies
│   │   ├── FAQ.jsx              # Frequently asked
│   │   ├── LeadForm.jsx         # Contact modal
│   │   └── Footer.jsx           # Footer & legal
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **Tailwind CSS** - Styling
- **GSAP** - Animations
- **Framer Motion** - Motion library
- **React Intersection Observer** - Scroll triggers

## Design System

### Colors

- **Purple**: `#2B0058` (victus-purple)
- **Violet**: `#8A3BFF` (victus-violet)
- **Cyan**: `#00D1FF` (victus-cyan)
- **Charcoal**: `#0F1724` (victus-charcoal)
- **Background**: `#F8F8FB` (victus-bg)

### Typography

- **Display**: Sora (headings)
- **Body**: Inter (copy)
- **Monospace**: JetBrains Mono (numbers)

## Integrations

The lead form is set up to integrate with:

- HubSpot / Pipedrive (CRM)
- Slack notifications
- Google Sheets backup
- ReCAPTCHA v3 (ready to enable)

## Performance Targets

- Lighthouse Performance: >90 (desktop)
- Accessibility: WCAG AA compliant
- Mobile: 60 FPS (3D disabled on mobile by default)

## License  



© Victus Launch 2024. All rights reserved. 

Trigger redeploy


