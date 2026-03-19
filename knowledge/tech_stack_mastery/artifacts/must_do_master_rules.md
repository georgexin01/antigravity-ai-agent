# Must-Do Master Rules V2.0 — Mandatory Checklist + Auto-Queue

> **PURPOSE**: Rules extracted from repeated chat patterns + predictive workflow chains.
> **V2.0**: Added Section 8 (Auto-Queue Chains) and Section 9 (Proactive Checklist).
> **Upgraded**: 2026-03-19

---

## 1. BEFORE CODING (Every Project)

- [ ] **Read reference project** — Study FULL source code if user mentions a reference
- [ ] **Read user_preference_dna.md** — Apply learned taste BEFORE generating any design
- [ ] **Check skill_path_router.md** — Load ONLY relevant skills for this task type
- [ ] **⚠️ DESIGN RESEARCH FIRST** — Before any UI, search Mobbin/Awwwards/Godly for same app category. Study top 3. Clone if reference URL given. Use Stitch/Magic UI to accelerate. NEVER design from scratch. (See `design_research_engine.md`)
- [ ] **Infer missing requirements** — Don't ask questions you can answer by studying context
- [ ] **Plan all pages first** — List every route before writing any code
- [ ] **TypeScript types FIRST** — Define Entity, FormValues, PageParams, StatusOptions BEFORE any UI (see `typescript_pinia_standard.md`)
- [ ] **Dummy data with audit fields** — Every record: `id`, `isDelete: boolean`, `createdAt`, `updatedAt`
- [ ] **Pinia stores with CRUD** — Re-export types, soft-delete (isDelete toggle), version-based cache
- [ ] **V9: Run Intent Classifier** — Detect project type → load fingerprint → predict full scope
- [ ] **V9: Check Auto-Queue** — If resuming a project, check what was queued last session

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
| Category nav   | 76px left sidebar with active indicator                         |

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

## 8. AUTO-QUEUE CHAINS (NEW V9 — Predictive Workflow)

> When user triggers Step 1, AI auto-completes the entire chain.

### 8.1 App Creation Chain

```
User: "Create new app" or "做一个新的app"
→ FULL CHAIN (do ALL steps):
  1. Fingerprint match → load pattern set
  2. Scaffold (Vite + Vue 3 + Tailwind v4 + Pinia + Router)
  3. Design tokens (CSS variables from brand colors)
  4. Router setup (all routes from fingerprint)
  5. Store architecture (auth, cart/data, orders — all stores)
  6. Layout (AppHeader + BottomNav + AppToast)
  7. Auth flow (Login → OTP → Signup → Profile)
  8. Home page (hero + featured + categories)
  9. Listing page (category filter + product grid)
  10. Detail page (image + info + add-to-cart)
  11. Cart + checkout
  12. Order history + order detail
  13. Admin dashboard (if applicable)
  14. WhatsApp integration
  15. Build verify + route test
```

### 8.2 Auth Chain

```
User: "Add login" or "加登录"
→ FULL CHAIN:
  1. LoginView.vue (phone + password)
  2. OtpView.vue (6-digit verification)
  3. SignupView.vue (registration form)
  4. ProfileView.vue (user info + edit + logout)
  5. auth store (login/logout/register/verify actions + localStorage)
  6. Route guards (requireAuth meta + beforeEach)
  7. Auto-redirect (logged in → home, logged out → login)
```

### 8.3 Product Chain

```
User: "Add products" or "加产品"
→ FULL CHAIN:
  1. products.js data file (complete catalog with categories)
  2. ProductsView.vue (category sidebar + grid)
  3. ProductCard.vue (image + name + price + add button)
  4. ProductDetailView.vue (full info + quantity stepper + add-to-cart)
  5. CategoryNav.vue (sidebar or horizontal scroll)
  6. Search bar (filter by name/nameEn)
  7. Connect to store + router
```

### 8.4 Cart Chain

```
User: "Add cart" or "加购物车"
→ FULL CHAIN:
  1. cart store (items, addItem, removeItem, updateQty, clearCart, total)
  2. CartView.vue (item list + quantity stepper + total + checkout CTA)
  3. CheckoutModal.vue (address + payment method + confirm)
  4. OrderConfirmation.vue (success + order number)
  5. OrdersView.vue (order history list)
  6. OrderDetailView.vue (order items + status + tracking)
  7. Cart badge in header (reactive count)
  8. Empty cart state
```

### 8.5 Admin Chain

```
User: "Add admin" or "加管理"
→ FULL CHAIN:
  1. AdminView.vue (dashboard layout)
  2. Admin stats cards (today's orders, revenue, new users)
  3. AdminOrdersView.vue (order management + status update)
  4. AdminReportsView.vue (date range + charts)
  5. DailySummary component (aggregate by product)
  6. Role guard (admin-only routes)
```

### 8.6 Website Chain

```
User: "Create website" or "做网站"
→ FULL CHAIN:
  1. index.html (hero + 8-12 sections)
  2. about.html (company story + team + values)
  3. services.html (service cards + details)
  4. portfolio.html (project gallery + filters)
  5. contact.html (form + map + info)
  6. Shared header/footer (consistent across all)
  7. CSS (design tokens + responsive + animations)
  8. JS (GSAP + ScrollTrigger + Lenis + mobile menu)
  9. WhatsApp floating button
  10. Mobile responsive verification
```

### 8.7 Design Update Chain

```
User: "Change the colors" or "改颜色"
→ FULL CHAIN:
  1. Update design tokens (CSS variables / Tailwind @theme)
  2. Verify all components use tokens (no hardcoded values)
  3. Update gradient definitions
  4. Check dark/light mode consistency
  5. Verify contrast ratios (WCAG AA)
  6. Rebuild + visual verify
```

---

## 9. PROACTIVE CHECKLIST (NEW V9 — Run After Every Feature)

After completing ANY feature, automatically check:

```
□ Does this feature link to pages that don't exist yet? → Create them
□ Does this feature need a store that doesn't exist? → Create it
□ Is the nav/router updated to include this feature? → Update it
□ Does this feature have an empty state? → Create one
□ Does this feature have loading states? → Add them
□ Does this feature persist data in localStorage? → Verify persistence
□ Does this feature work with back navigation? → Test it
□ Is this feature accessible from the bottom nav? → Add tab if needed
□ Does this feature need WhatsApp integration? → Add it
□ Can this feature break other features? → Test related features
```

---

## 10. V11 MISSION-BASED EXECUTION (Autonomous Partner)

> Rule: When user gives a "Mission" (Macro Goal), AI leads the strategy.

- [ ] **Deconstruct "Mission"** — Break into Design, Logic, PWA, SEO, and Conversion waves.
- [ ] **Propose Expansion Plan** — Outline Wave 1 (Core), Wave 2 (UX), Wave 3 (Boost).
- [ ] **Lead Implementation** — AI handles task-level work autonomously, reporting only on Milestones.
- [ ] **Final Build + QA** — Mission is only "Complete" when build passes and all routes are tested.

## 11. V11 STRATEGIC PROPOSING (Growth Proactive)

> Rule: AI must propose "Growth Features" based on project state.

- [ ] **Cart/Checkout** — Propose upsells, quantity tiers, or faster payment flows.
- [ ] **Admin/Reporting** — Propose better charts, automated summaries, or export tools.
- [ ] **Visual/Feel** — Propose glassmorphism, micro-animations, or premium design spells.
- [ ] **PWA** — Propose offline-first features or home-screen install optimizations.

## 12. V11 CROSS-PROJECT DNA MIGRATION

> Rule: Proactively share S-CORE patterns across all user projects.

- [ ] **Identify S-CORE Pattern** — If a technique has 90+ score in one project, it's a candidate.
- [ ] **Context Match** — Check if Project A's pattern fits Project B's business logic.
- [ ] **Propose Migration** — "I used this in X and it worked well. Want me to add it here?"

---

## 13. F&B AESTHETIC PROTOCOL (CLEAN WHITE)

> Rule: Food apps must prioritize appetite, cleanliness, and vibrancy.

- [ ] **Clean White Logic** — Baseline should be `#FFFFFF` or very light grays. NO DARK THEMES for food unless specified.
- [ ] **Hungry-First Imagery** — Hero sections must feature 1-2 high-impact, realistic food photos.
- [ ] **Corporate Nuance** — Always check for "Branches," "Locations," and "Company Info." Assume multi-location by default.
- [ ] **Internal Point of Sale** — WhatsApp is for consultation; 100% of "点餐" apps must have internal order receipt logic.
- [ ] **Deep Order History** — History cards must be clickable to show itemized receipts.

---

## 14. V11 CVE REFLECTIVE LOOP (BRAIN UPGRADE)

> Rule: After every mission/request, V11 must evolve the lower versions.

- [ ] **V11 → V8 (Post-Mission)**: Identify and automate a new code pattern or fix found during the mission.
- [ ] **V11 → V9 (Post-Mission)**: Update prediction rules if the user corrected a direct action.
- [ ] **V11 → V10 (Post-Mission)**: Distill new preferences into the "Global DNA" profile to minimize memory fragmentation.

---

## 15. V11 CROSS-DEVICE SAFETY (MIGRATION)

> Rule: When swapping computers, V11 must ensure zero-crash continuity.

- [ ] **Path Audit**: On first boot of a new machine, V11 must locate the workspace root and update all absolute path references in the brain.
- [ ] **Sync Verification**: Before editing a core memory, check the `brain_status.md` for the latest sync timestamp from the "Other" machine.
- [ ] **State Preservation**: Load the "Active Projects" state from `user_preference_dna.md` to resume exactly where the previous device stopped.

---

_Master Rules V4.2 — Cross-Device Sync Ready (2026-03-19)_
