# Quick Start Guide - Victus Launch

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy.

---

## What's Included

✨ **Components**
- Hero section with 3D WebGL scene
- Trust strip with exchange logos
- Services grid (6 services)
- Interactive roadmap (7 steps)
- Funding section
- Pricing packages
- Testimonials
- FAQ with schema markup
- Lead capture form
- Footer with legal

🎨 **Features**
- Fully responsive (mobile, tablet, desktop)
- Smooth animations & scroll effects
- 3D graphics with Three.js
- Purple/cyan gradient theme
- SEO optimized
- WCAG AA accessible

---

## Next Steps

1. **Customize Content**: Edit component files in `src/components/`
2. **Add Integrations**: Configure form endpoints in `LeadForm.jsx`
3. **Deploy**: See `DEPLOYMENT.md` for hosting options
4. **Style**: Check `STYLE_GUIDE.md` for design system

---

## Project Structure

```
src/
├── App.jsx              # Main app
├── main.jsx             # Entry point
├── index.css            # Global styles
└── components/
    ├── Nav.jsx          # Navigation
    ├── Hero.jsx         # Hero with 3D
    ├── TokenScene.jsx   # 3D scene
    ├── TrustStrip.jsx   # Exchange logos
    ├── ServicesGrid.jsx # Services
    ├── Roadmap.jsx      # Timeline
    ├── FundingSection.jsx
    ├── PricingPackages.jsx
    ├── Testimonials.jsx
    ├── FAQ.jsx
    ├── LeadForm.jsx     # Contact modal
    └── Footer.jsx
```

---

## Need Help?

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Docs**: README.md, STYLE_GUIDE.md, DEPLOYMENT.md


