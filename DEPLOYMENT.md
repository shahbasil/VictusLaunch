# Deployment Guide - Victus Launch

## Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Environment variables configured (`.env`)
- [ ] Lead form integrations tested
- [ ] SEO metadata verified
- [ ] Analytics tracking enabled
- [ ] Build tested locally (`npm run build`)

## Build Commands

### Development
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Outputs to `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## Deployment Options

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables: Add via Netlify dashboard

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### Vercel

1. Import your repository
2. Framework Preset: Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### GitHub Pages

1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://username.github.io/victus-launch"
}
```
3. Deploy: `npm run deploy`

### AWS S3 + CloudFront

1. Build: `npm run build`
2. Upload `dist/` to S3 bucket
3. Configure CloudFront with SPA routing
4. Set index document: `index.html`
5. Configure error document: `index.html` with 200 status

**CloudFront Error Handling**:
- 403 → 200 → `/index.html`
- 404 → 200 → `/index.html`

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Form Integrations (optional)
VITE_HUBSPOT_PORTAL_ID=your_id
VITE_SLACK_WEBHOOK_URL=your_webhook
VITE_RECAPTCHA_SITE_KEY=your_key
```

## Integration Setup

### Google Analytics

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env`: `VITE_GA_TRACKING_ID=G-XXXXXXXXXX`
4. Script added in `index.html`

### Lead Form Integrations

**HubSpot**:
1. Create form in HubSpot
2. Get Portal ID and Form ID
3. Update `LeadForm.jsx` to submit to HubSpot API

**Slack**:
1. Create webhook in Slack workspace
2. Add `VITE_SLACK_WEBHOOK_URL` to `.env`
3. POST to webhook on form submission

**Google Sheets**:
1. Create Google Apps Script webhook
2. POST form data to script endpoint
3. Add security restrictions

### ReCAPTCHA v3

1. Register site at Google reCAPTCHA
2. Add `VITE_RECAPTCHA_SITE_KEY` to `.env`
3. Load script in `index.html`
4. Verify on form submission

## Performance Optimization

### Pre-deployment

```bash
# Analyze bundle
npm run build -- --analyze

# Check Lighthouse
npm run build && npm run preview
# Then run Lighthouse audit
```

### Build Optimizations

Already configured in `vite.config.js`:
- Terser minification
- Console removal
- Sourcemap disabled in production
- Tree shaking enabled

### Image Optimization

- Use WebP format where possible
- Implement lazy loading for images
- Serve responsive images with `srcset`

### Asset Optimization

- SVG for logos and icons
- Compress 3D models (glTF)
- Use CDN for fonts (Google Fonts)

## CDN Setup

### CloudFlare (Recommended)

1. Add domain to Cloudflare
2. Enable auto-minification (JS, CSS, HTML)
3. Enable Brotli compression
4. Configure page rules for caching
5. Enable security features

### Cache Headers

```
/dist/assets/* - Cache-Control: public, max-age=31536000, immutable
/index.html - Cache-Control: public, max-age=0, must-revalidate
/* - Cache-Control: public, max-age=3600
```

## DNS Configuration

1. Point domain to hosting provider
2. Configure SSL/TLS (Let's Encrypt or provider's SSL)
3. Set up redirects:
   - HTTP → HTTPS
   - www → non-www (or vice versa)
4. Verify in Google Search Console

## Monitoring & Analytics

### Google Analytics 4
- Events: form_submit, cta_click, scroll_depth
- Conversions: consultation_request

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

### Error Tracking
- Sentry (optional)
- Rollbar (optional)

## Post-Deployment

- [ ] Test all forms and CTAs
- [ ] Verify SSL certificate
- [ ] Check mobile responsiveness
- [ ] Test lead capture flow
- [ ] Verify analytics tracking
- [ ] Check page load speed
- [ ] Test accessibility (WCAG AA)
- [ ] Submit to search engines
- [ ] Set up monitoring alerts

## Rollback Procedure

If deployment fails:

1. Previous build: Keep last working build
2. Quick rollback: Revert to previous `dist/` on server
3. Git rollback: `git revert <commit-hash>`
4. Redeploy: `npm run build && deploy`

## Troubleshooting

### Build Fails
- Check Node version (18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

### 404 Errors
- Configure SPA routing properly
- Ensure `index.html` fallback set up

### Forms Not Working
- Check API endpoints
- Verify environment variables
- Check CORS settings
- Test webhook URLs

### Performance Issues
- Enable gzip/brotli compression
- Use CDN for assets
- Implement lazy loading
- Optimize images

## Support

For deployment issues, check:
- Vite documentation: https://vitejs.dev
- Netlify docs: https://docs.netlify.com
- Vercel docs: https://vercel.com/docs


