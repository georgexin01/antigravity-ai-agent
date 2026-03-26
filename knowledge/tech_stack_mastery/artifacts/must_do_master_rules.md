# Must-Do Master Rules V12.0 — Mandatory Checklist (Global Harvest)

> **PURPOSE**: V12.0 SITE & FLOW frameworks for high-end design consistency.
> **V12.0**: Integrated Video Lessons (Sandy Lee, Viktor Oddy, Global Playlist).
> **Upgraded**: 2026-03-24

---

## 1. BEFORE CODING (Every Project)

- [ ] **Read reference project** — Study FULL source code if user mentions a reference
- [ ] **Read user_preference_dna.md** — Apply learned taste BEFORE generating any design
- [ ] **Check skill_path_router.md** — Load ONLY relevant skills for this task type
- [ ] **⚠️ INSPIRATION CLEANING** — Before using a reference image, ensure it has a pure black background and simplified structure (no "slop").
- [ ] **⚠️ BRAND KIT FIRST** — Extract or request Brand Kit (Colors, Fonts, Assets) before any UI work.
- [ ] **⚠️ DESIGN RESEARCH FIRST** — Before any UI, search Mobbin/Awwwards/Godly for same app category. Study top 3. Clone if reference URL given. Use Stitch/Magic UI to accelerate. NEVER design from scratch. (See `design_research_engine.md`)
- [ ] **Infer missing requirements** — Don't ask questions you can answer by studying context
- [ ] **Plan all pages first** — List every route before writing any code
- [ ] **TypeScript types FIRST** — Define Entity, FormValues, PageParams, StatusOptions BEFORE any UI (see `typescript_pinia_standard.md`)
- [ ] **Dummy data with audit fields** — Every record: `id`, `isDelete: boolean`, `createdAt`, `updatedAt`
- [ ] **Pinia stores with CRUD** — Re-export types, soft-delete (isDelete toggle), version-based cache
- [ ] **V9: Run Intent Classifier** — Detect project type → load fingerprint → predict full scope
- [ ] **V9: Check Auto-Queue** — If resuming a project, check what was queued last session
- [x] **⚠️ AUTO-DEV-RUN** — When first time generating and finishing a new app, **ALWAYS** run `npm run dev` once automatically to verify the build and show the result.
- [x] **⚠️ CLAUDE MODE (ADMIN ONLY)** — Claude-Code Framework (Ant Design Vue + Supabase) is **STRICTLY** for **Admin Panels**.
  - **Logic**: Use ONLY `claude-code` skills and knowledge. **STOP** reading DNA or other skills.
- [x] **⚠️ APP/WEBSITE PROTOCOL (V12)** — For standard Apps or Websites, **DISABLE** Claude-Code mode.
  - **Logic**: Use V12 High-End Protocol (Tailwind CSS + Vue 3 + Pinia). Use DNA for style guidance.

## 2. DURING CODING (Every File)

- [ ] **Design tokens first** — NEVER hardcode hex colors or font names in components
- [ ] **Complete data entry** — Enter ALL products/items in one go. No "TODO" placeholders
- [ ] **Complete views** — Every page PRODUCTION-READY when created. No skeleton pages
- [ ] **Chinese language** — If app is Chinese, ALL UI text in 简体中文. No mixed English labels
- [ ] **WhatsApp integration** — Add floating button + wa.me link for every B2B/B2C app
- [ ] **SVG icons only** — NEVER use emoji in UI. Use inline SVG (Lucide style)
- [ ] **Mobile-first** — 540px container, bottom nav, 44px touch targets, safe-area insets
- [ ] **localStorage persistence** — Auth, cart, orders, locale — all must survive refresh
- [ ] **⚠️ CLEAN URLs (NO HASH)** — ALWAYS `createWebHistory()`. NEVER `createWebHashHistory()`. Add `.htaccess` + `_redirects` + `spaFallback()` plugin (see §3.1.6)
- [ ] **V9: Chain completion** — If building page A, and page A links to B/C, build B/C too
- [ ] **V9: Connect everything** — Store ↔ views ↔ router ↔ nav must all be connected

## 3. AFTER CODING (Every Build)

- [ ] **⚠️ BUILD TIMING (MASTER RULE)** — `npm run build` / `npm run dev` ONLY after ALL files are written. NEVER mid-creation. Finish everything first, build once at the end.
- [ ] **`npm run build` must pass** — Zero errors before presenting
- [ ] **Figma Flow**: Micro-adjustments (1-3px) on every hover. Nothing should be static.
- [ ] **Animation Spells**: Inject shooting stars, kinetic borders, or liquid typography per [Senior Designer Protocol](file:///C:/Users/User/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/senior_designer_protocol.md).
- [ ] **Gradient Blend Hack**: Use gradients to blend video backgrounds perfectly into the black page base.
- [ ] **Seamless Loops**: Verify video backgrounds have zero-jump loop continuity.
- [ ] **Typography**: Pair H1 titles with a large, low-opacity (0.05) background symbol or gradient character.
- [ ] **Test all routes** — Every page must render (no blank pages)
- [ ] **Auth flow complete** — Login → OTP → Home works end-to-end
- [ ] **Back navigation works** — router.back() with fallback to home
- [ ] **Cart badge updates** — Real-time count in header
- [ ] **V9: Run proactive checklist** — See Section 9 below

## 3.1 APP PUBLISH CHECKLIST (⚠️ MANDATORY — Every App Build/Create/Update)

> These items are **100% MUST INCLUDE** on every `npm run build` for any app.
> **Smart Detection**: AI must check if these already exist in the project (search `index.html`, `public/`, `main.js`). If missing → add them. If exist → maintain/optimize.
> Non-negotiable. AI must auto-apply ALL of these without being asked.

### 3.1.1 META DETAILS (Auto-Research)

- [ ] `<title>` — Descriptive, keyword-rich title matching the app's purpose
- [ ] `<meta name="description">` — AI researches project context (package.json, index.html, URL if provided) to generate accurate description
- [ ] `<meta name="viewport">` — Mobile-first: `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover`
- [ ] `<meta charset="UTF-8">`
- [ ] `<meta name="theme-color">` — Match app's primary brand color
- [ ] `<meta name="apple-mobile-web-app-capable" content="yes">`
- [ ] `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`
- [ ] Open Graph tags: `og:title`, `og:description`, `og:type`, `og:image` (if available)

### 3.1.2 NOINDEX / NOFOLLOW (Default ON)

- [ ] **ALWAYS** add `<meta name="robots" content="noindex, nofollow">` on every app build
- [ ] Only remove when user explicitly says "open index" or "allow crawling"
- [ ] This protects staging/dev apps from being indexed by search engines

### 3.1.3 FAVICON (Auto-Generate if Missing)

- [ ] Check if `/favicon.ico` or `/favicon.svg` exists in `public/` folder
- [ ] If user provided favicon folder → use those files
- [ ] If NO favicon exists → AI generates a simple SVG favicon using the app's brand color + first letter/initials
- [ ] Include both: `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` and fallback `.ico`
- [ ] Add `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` if available

### 3.1.4 FULLSCREEN MODE (Build Only)

- [ ] Add `manifest.json` with `"display": "standalone"` (app-like fullscreen)
- [ ] On first user interaction (click/tap), trigger `document.documentElement.requestFullscreen()` with try/catch
- [ ] Only activate in production build (`import.meta.env.PROD`)
- [ ] Respect user's exit — don't re-trigger fullscreen after user exits it manually
- [ ] Implementation: Add a one-time click listener in `main.js` or `App.vue` `onMounted`

### 3.1.5 PWA INSTALL PROMPT (Build Only)

- [ ] Create `manifest.json` (or `site.webmanifest`) in `public/` with: `name`, `short_name`, `start_url`, `display: standalone`, `background_color`, `theme_color`, `icons` (192x192 + 512x512)
- [ ] Register service worker for offline caching (basic): `navigator.serviceWorker.register('/sw.js')`
- [ ] Create minimal `sw.js` in `public/` with cache-first strategy for static assets
- [ ] Link manifest: `<link rel="manifest" href="/manifest.json">` or `<link rel="manifest" href="/site.webmanifest">`
- [ ] Browser will auto-show "Add to Home Screen" / "Install App" prompt when PWA criteria are met
- [ ] Only activate service worker in production build (`import.meta.env.PROD`)

### 3.1.6 SPA REFRESH FIX (⚠️ MANDATORY — Prevents 404 on Refresh)

> **Problem**: Vue/React apps using `createWebHistory()` (clean URLs like `/login`, `/products`) get 404 on page refresh because the server looks for physical files that don't exist.
> **Rule**: ALWAYS use `createWebHistory()` (clean URLs) + add ALL 3 server fallback files below.

- [ ] **Use `createWebHistory()`** — Clean URLs (`/login` not `/#/login`). NEVER use hash mode.
- [ ] **`.htaccess` in `public/`** — For Apache/shared hosting:
  ```
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```
- [ ] **`_redirects` in `public/`** — For Netlify/Cloudflare Pages: `/*  /index.html  200`
- [ ] **Vite `spaFallback()` plugin** — Copies `dist/index.html` → `dist/404.html` after build (for GitHub Pages, static hosts)
  ```javascript
  function spaFallback() {
    return {
      name: "spa-fallback",
      closeBundle() {
        const { readFileSync, writeFileSync } = require("fs");
        const { resolve } = require("path");
        try {
          const html = readFileSync(resolve("dist/index.html"), "utf-8");
          writeFileSync(resolve("dist/404.html"), html);
        } catch {}
      },
    };
  }
  ```
- [ ] **Catch-all route in router** — `{ path: '/:pathMatch(.*)*', redirect: '/' }` as last route
- [ ] **Result**: 3 files auto-generated in `dist/` on every build: `.htaccess`, `_redirects`, `404.html`

### 4.1 V8 DEEP INTEGRITY (ANTI-CRASH)

- **HTML Depth-Check**: Before every `replace_file_content` call on a Vue template, AI must manually verify the balance of opening/closing tags in the code block.
- **Tailwind v4 Semantic Audit**: Proactively use modern utilities (e.g., `bg-linear-*`, `z-val`) over deprecated or ad-hoc classes.
- **Build Guard**: Continuous `npm run build` checks during "Wave Transitions" to catch lints early.

## 4. COMMAND EXECUTION (Every Session)

- [ ] **BUILD/DEV LAST** — `npm run build` and `npm run dev` ONLY after ALL AI code generation is complete. No mid-creation builds.
- [ ] **Batch commands** — Combine with `&&` into ONE terminal call
- [ ] **Use file tools for file creation** — Terminal ONLY for npm/git/dev-server
- [ ] **Background long commands** — dev server, builds
- [ ] **Auto-proceed** — Don't ask permission for non-destructive operations

## 5. DESIGN PATTERNS (Always Apply)

| Pattern        | Standard                                                        |
| -------------- | --------------------------------------------------------------- |
| App container  | `max-w-[540px] mx-auto min-h-screen bg-white shadow`            |
| Header         | Fixed top, 56px, dynamic title, back button, cart badge         |
| Bottom nav     | Fixed bottom, 60px, 4 tabs, active indicator bar                |
| Card           | `rounded-xl border border-gray-100`, hover shadow               |
| Button primary | Brand color bg, white text, `rounded-lg`, `active:scale-[0.97]` |
| Modal          | Teleport to body, `bg-black/40`, slide-up content               |
| Toast          | Teleport, auto-dismiss 3s, color-coded (green/red/blue)         |
| Price display  | Brand color, `font-bold`, RM prefix                             |
| Status badge   | `rounded-full text-[10px] font-bold px-2`, color by status      |
| Empty state    | Centered icon + gray text + CTA button                          |
| Auth page      | Full-screen gradient, no chrome, centered logo + form           |
| Product grid   | `grid grid-cols-2 gap-3` with ProductCard                       |
| Category nav   | 76px left sidebar with active indicator (86car Standard)        |
| E-com Layout   | Fixed Left Sidebar (Menu) + Right Scroll (Products)             |

## 5.1 USER LEXICON (Custom Mapping)

- Whenever the user says **"div"**, they mean **CARD** (e.g., "in div" = "in card").
- Whenever the user says **"section div"**, they mean **CARD INSIDE SECTION**.
- **Visual Validation First**: When a form is submitted with required fields empty or invalid, always highlight inputs with `border-red-500 bg-red-50` AND show a **small red notice** (e.g., `text-[9px] font-black uppercase`) below the input to clarify the error.

## 6. BUSINESS LOGIC (Common Patterns)

| Feature        | Implementation                                              |
| -------------- | ----------------------------------------------------------- |
| Order cutoff   | `computed: new Date().getHours() < 23` → disable UI         |
| Payment rules  | `computed: user.isNew ? 'prepaid' : 'cod'`                  |
| Daily summary  | `computed: aggregate today's orders by product`             |
| WhatsApp copy  | Generate formatted text → `navigator.clipboard.writeText()` |
| Search         | Filter by name (Chinese) + nameEn (English) simultaneously  |
| Price tiers    | Same product, different prices based on quantity            |
| Extra services | Checkbox list with per-kg surcharges                        |
| Order status   | Array of `{ key, label, color }` with badge display         |

## 7. ERROR QUICK-FIX (Don't Read Knowledge Files)

| Error                         | Fix                                                   |
| ----------------------------- | ----------------------------------------------------- |
| `@tailwindcss/postcss` needed | Use `@tailwindcss/vite` plugin instead                |
| Module not found              | Check path casing + file extension                    |
| Component not found           | Check import path in `<script setup>`                 |
| Cannot read null              | Add `v-if` guard or `?.` optional chaining            |
| Port in use                   | Let Vite auto-increment                               |
| CSS not applying              | Check @theme token name matches class usage           |
| Keep-alive not working        | Add component `name` option or check `:exclude` array |

---

## 8. V12.0 SMART BRAIN AUDIT (MASTER VERIFICATION)

- [ ] **CATEGORY 1: BOOTSTRAP/GRID** — Mobile-first, no horizontal scroll.
- [ ] **CATEGORY 2: PWA/SEO** — Manifest, sw.js, meta tags, robots noindex.
- [ ] **CATEGORY 3: LOCALIZATION** — 100% 简体中文 consistency.
- [ ] **CATEGORY 4: WHATSAPP/CTA** — Floating WhatsApp trigger on ALL pages.
- [ ] **CATEGORY 5: CONTENT DENSITY** — Eyebrows, Trust Signals, 12+ sections per site.
- [ ] **CATEGORY 6: SMART BRAIN REPORT** — Proof of compliance generated.

---

## 13. F&B AESTHETIC PROTOCOL (CLEAN WHITE)

> Rule: Food apps must prioritize appetite, cleanliness, and vibrancy.

- [ ] **Clean White Logic** — Baseline should be `#FFFFFF` or very light grays. NO DARK THEMES for food unless specified.
- [ ] **Hungry-First Imagery** — Hero sections must feature 1-2 high-impact, realistic food photos.
- [ ] **Corporate Nuance** — Always check for "Branches," "Locations," and "Company Info." Assume multi-location by default.
- [ ] **Internal Point of Sale** — WhatsApp is for consultation; 100% of "点餐" apps must have internal order receipt logic.
- [ ] **Deep Order History** — History cards must be clickable to show itemized receipts.

---

_Master Rules V12.0 — Ascension Ready (2026-03-24)_
