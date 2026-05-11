# Thailand App — Deployment

## Before Going Live

### PWA Icons
Replace placeholder icons in `public/icons/` with real ones:
1. Go to https://www.pwabuilder.com/imageGenerator
2. Upload a 512×512 image (palm tree 🌴 on turquoise #00B4D8 background)
3. Download the generated icons
4. Replace: `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`

### Deploy (Free, HTTPS)
```bash
npm run build
# Option A — Netlify drag & drop:
# Go to app.netlify.com/drop, drag the dist/ folder
# Option B — Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Install on Phone
- **iPhone/iPad**: Open in Safari → Share → "Add to Home Screen"
- **Android**: Open in Chrome → Menu ⋮ → "Add to Home Screen"

The app works fully offline once installed.
