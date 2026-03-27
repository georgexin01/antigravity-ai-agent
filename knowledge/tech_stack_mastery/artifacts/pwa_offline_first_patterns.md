# PWA & Offline-First Patterns

> **PURPOSE**: Complete reference for converting any Vue/React web app into a Progressive Web App. Covers manifest, meta tags, icons, service workers, and fullscreen mode.
> **V13 Upgraded**: 2026-03-27

---

## WHEN TO USE THIS FILE

```
Trigger:    task_type = APP or DEPLOY, AND project needs PWA
            Also: must_do_master_rules.md Phase 3 Step 3.2 (auto-include check)
Pre-check:  App is built and npm run build passes
Depends:    App views complete, brand kit resolved ({{BRAND_COLOR}}, {{APP_NAME}})
Next:       → must_do_master_rules.md Phase 4 (publish)
```

---

## 1. Web App Manifest (`manifest.json`)

Place in `/public/manifest.json`:

```json
{
  "name": "App Full Name",
  "short_name": "AppName",
  "description": "One-line app description",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#1A1A2E",
  "theme_color": "#C8A95E",
  "icons": [
    { "src": "/icons/icon-72x72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/icons/icon-96x96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/icons/icon-128x128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/icons/icon-144x144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/icons/icon-152x152.png", "sizes": "152x152", "type": "image/png" },
    { "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icons/icon-384x384.png", "sizes": "384x384", "type": "image/png" },
    { "src": "/icons/icon-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

### 1.1 Display Modes
| Mode | Behavior |
|---|---|
| `standalone` | Looks like native app (no browser bar) — **RECOMMENDED** |
| `fullscreen` | No status bar, no browser bar (games, immersive) |
| `minimal-ui` | Small browser controls visible |
| `browser` | Normal browser tab |

### 1.2 Orientation
- `portrait` — Lock to vertical (mobile apps)
- `landscape` — Lock to horizontal (games, dashboards)
- `any` — Allow rotation

---

## 2. HTML Meta Tags (`index.html`)

```html
<head>
  <!-- PWA Meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#C8A95E">
  <meta name="description" content="App description for SEO">

  <!-- iOS PWA Support -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="AppName">
  <link rel="apple-touch-icon" href="/icons/icon-192x192.png">

  <!-- Android / Chrome -->
  <link rel="manifest" href="/manifest.json">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" href="/favicon.ico">

  <!-- Splash Screen (iOS) -->
  <meta name="apple-mobile-web-app-capable" content="yes">
</head>
```

### 2.1 iOS Status Bar Styles
| Value | Effect |
|---|---|
| `default` | White bar with black text |
| `black` | Black bar with white text |
| `black-translucent` | Transparent bar, content extends behind — **BEST for immersive** |

### 2.2 Viewport-Fit
`viewport-fit=cover` + `env(safe-area-inset-*)` = content fills entire screen including notch area.

---

## 3. Favicon & Icon Generation

### 3.1 Required Sizes
```
/public/
├── favicon.ico          # 16x16, 32x32 multi-size ICO
├── favicon-16x16.png
├── favicon-32x32.png
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png   # Android home screen
    ├── icon-384x384.png
    └── icon-512x512.png   # Play Store / splash screen
```

### 3.2 Quick Icon Generation
If only one source image exists:
1. Use a 512x512 PNG as source
2. Generate all sizes via canvas or tool
3. For maskable icons: ensure logo has 20% padding (safe zone)

### 3.3 Temporary Icon Strategy
If no brand icon exists yet:
- Use a colored square with text initials (e.g., "FW" for Four Win)
- Generate via SVG → PNG conversion
- Replace with real icon later

---

## 4. Fullscreen Mode

### 4.1 Manifest: `"display": "standalone"` or `"fullscreen"`
- `standalone`: Hides browser URL bar but keeps system status bar — recommended
- `fullscreen`: Hides everything (including status bar) — for games/media

### 4.2 CSS for Fullscreen Support
```css
/* Prevent pull-to-refresh on mobile */
html, body {
  overscroll-behavior: none;
}

/* Ensure app fills viewport including safe areas */
#app {
  min-height: 100dvh;  /* dynamic viewport height */
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
```

### 4.3 Disable Zoom (Mobile App Feel)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

---

## 5. Service Worker (Optional — Advanced)

### 5.1 Vite Plugin PWA (Easiest)
```bash
npm install -D vite-plugin-pwa
```

```js
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa'
export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: { /* same as manifest.json */ },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webp}'],
      },
    }),
  ],
}
```

### 5.2 Offline Strategy
| Strategy | Best For |
|---|---|
| Cache First | Static assets (CSS, JS, images) |
| Network First | API calls, dynamic content |
| Stale While Revalidate | Semi-static pages (home, about) |

---

## 6. PWA Testing Checklist

- [ ] Manifest loads (DevTools → Application → Manifest)
- [ ] Icons display correctly on home screen
- [ ] Theme color matches app branding
- [ ] `standalone` mode hides browser bar
- [ ] Safe area insets work on notch devices
- [ ] No zoom on double-tap
- [ ] No pull-to-refresh interference
- [ ] Favicon shows in browser tab
- [ ] Apple touch icon works on iOS home screen
- [ ] App installs prompt appears (Chrome)

---

## 7. Platform-Specific Notes

### iOS (Safari)
- `manifest.json` partially supported — meta tags are more reliable
- `apple-mobile-web-app-capable` is required for standalone mode
- `apple-touch-icon` must be separate `<link>` tag
- Splash screens require specific `<link>` tags per device size

### Android (Chrome)
- Full manifest.json support
- Install prompt auto-triggered after engagement criteria
- `maskable` icon purpose recommended for adaptive icons
- TWA (Trusted Web Activity) available for Play Store listing

### Desktop
- PWA install available in Chrome, Edge
- `display: standalone` works as desktop window
- Different icon sizes needed (at least 192x192 and 512x512)

---

## 8. VERIFICATION CHECKLIST

After applying PWA patterns:

```
- [ ] manifest.json exists in public/ with name, short_name, icons, display: standalone
- [ ] index.html has: <link rel="manifest" href="/manifest.json">
- [ ] Meta tags: theme-color, apple-mobile-web-app-capable, apple-mobile-web-app-status-bar-style
- [ ] Favicon: SVG + ICO fallback + apple-touch-icon
- [ ] Icons: at least 192x192 + 512x512 with maskable purpose
- [ ] Service worker: sw.js in public/ (PROD only activation)
- [ ] SPA fallback: .htaccess + _redirects + 404.html + catch-all route
- [ ] viewport meta: width=device-width, viewport-fit=cover, user-scalable=no
- [ ] CSS: overscroll-behavior: none, min-height: 100dvh, safe-area insets
- [ ] Fullscreen: standalone display, no zoom on double-tap
```

### WRONG / CORRECT Examples

```html
<!-- WRONG — missing viewport-fit=cover (breaks on notch devices) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- CORRECT — full viewport control -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
```

```json
// WRONG — missing maskable purpose (ugly icon on Android)
{ "src": "/icons/icon-192x192.png", "sizes": "192x192" }

// CORRECT — maskable for adaptive icons
{ "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" }
```

```javascript
// WRONG — SW active in development (caching stale files during dev)
navigator.serviceWorker.register('/sw.js')

// CORRECT — PROD only
if (import.meta.env.PROD) {
  navigator.serviceWorker.register('/sw.js')
}
```

### Next Step
→ Run `must_do_master_rules.md` Phase 3 full verification chain
→ Then Phase 4 publish checklist

---

_PWA Patterns V1.1 — V13 Upgraded with trigger, verification, WRONG/CORRECT (2026-03-27)_
