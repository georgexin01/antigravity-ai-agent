# 🛡️ Master Rules — "Must Do" Checklist (V1.0)

This document contains non-negotiable architectural and deployment rules that must be applied to every project.

---

## 1 · SPA Routing (404 Refresh Fix)

**Problem**: In Single Page Applications (Vue, React, etc.), refreshing the page on any route other than the root (e.g., `/jobs`) results in a 404 because the server tries to find a physical file.

**Rule**: Every SPA project MUST include a routing fallback configuration in the `public/` directory (so it is copied to `dist/` during `npm run build`).

### 1.1 Apache / Cpanel (`.htaccess`)
Place this in `public/.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 1.2 Vercel (`vercel.json`)
Place this in the project root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 1.3 Netlify (`_redirects`)
Place this in `public/_redirects`:
```text
/*    /index.html   200
```

### 1.4 Nginx (Server Config)
If managing the server directly:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 2 · PWA & Assets
- See [`pwa_favicon_meta_setup.md`](../../pwa_favicon_meta_setup.md) for mandatory meta tags and favicon set.

---

## 3 · Build & Deployment (Auto-Queue)
When `npm run build` or `npm run dev` is detected:
1. **Verify** `.htaccess` exists in `public/`. If missing, AUTO-GENERATE it.
2. **Verify** `index.html` has correct meta tags (Title, Description, Viewport).
3. **Verify** Favicon assets exist.
