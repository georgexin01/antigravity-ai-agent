# App Creation Masterplan — AI Agent Methodology V1.0

> **SOURCE**: Extracted from Claude AI's Lee Ming Pork V2 build session (2026-03-19). Proven methodology for building production-ready apps in a single session.

---

## PHILOSOPHY: Why This Works

The key difference between amateur and professional AI app creation:

- **Amateur**: Ask questions → wait → code one file → ask more → repeat (slow, fragmented)
- **Professional**: Parallel research → full architecture plan → batch execution → verify (fast, cohesive)

---

## PHASE 0: PARALLEL INTELLIGENCE GATHERING (5 min)

### 0.1 Launch All Research Simultaneously

When given a project brief, DO NOT start coding. Instead, run these in parallel:

```
AGENT 1: Read relevant antigravity skills (SKILL.md files matching the task domain)
AGENT 2: Study reference project(s) (read ALL source files: components, views, routes, styles, data)
AGENT 3: Study reference website(s) (fetch HTML/CSS, analyze design language)
AGENT 4: Check target project folder (empty? existing code? package.json?)
```

**Why parallel**: 4 agents × 30 seconds = 30 seconds total vs 4 × 30 seconds = 2 minutes sequential. The more context gathered upfront, the fewer corrections needed later.

### 0.2 Extract from Research

From each research agent, extract and note:

- **Tech stack** (framework, CSS approach, state management, build tool)
- **File structure** (directory convention, naming patterns)
- **Design tokens** (colors, fonts, shadows, spacing, border-radius)
- **Component patterns** (card, header, nav, modal, form, toast)
- **Navigation pattern** (tabs, sidebar, drawer, stack)
- **Data shape** (products/items structure, categories, statuses)

### 0.3 Infer What the User Didn't Say

Users give ~60% of requirements. AI must infer the other 40%:

- No auth mentioned? → Default to phone + OTP (Malaysia standard)
- No pages listed? → Derive from features (ordering = cart + checkout + orders)
- No design mentioned? → Match reference project's visual language
- No language mentioned? → Match user's communication language
- No tech stack? → Default to Vue 3 + Vite + Tailwind (proven stack)

---

## PHASE 1: ARCHITECTURE PLAN (2 min)

### 1.1 Define Before Coding

Before writing any code, declare:

```
TECH STACK: [Framework] + [Build] + [CSS] + [Router] + [State] + [Extras]
DESIGN: [Color theme] + [Font] + [Container style] + [Nav pattern]
PAGES: [List all pages with routes]
DATA: [Core entities and their fields]
BUSINESS RULES: [Key logic that affects architecture]
```

### 1.2 Page Planning Formula

```
Customer Pages = Core Features + Auth + Profile
Admin Pages = Dashboard + Entity Management per core feature
Total = Customer + Admin
```

Example (Lee Ming Pork):

```
Customer: Home, Products, ProductDetail, Cart, Orders, Login, Signup, OTP, Profile = 9
Admin: Dashboard, AdminOrders, AdminProducts = 3
Total: 12 pages
```

### 1.3 Route Structure Convention

```
/               → Home
/{entity}       → List view (products, orders)
/{entity}/:id  → Detail view
/cart           → Cart/checkout
/login          → Auth entry
/admin          → Admin dashboard
/admin/{entity} → Admin management
```

---

## PHASE 2: SCAFFOLD & FOUNDATION (3 min)

### 2.1 Project Init (Single Command Chain)

```bash
npm create vite@latest {name} -- --template vue
cd {name}
npm install && npm install [all-deps-at-once]
```

**Rule**: Install ALL dependencies in one command. Never install one-by-one.

### 2.2 Build Order (STRICT — Each Layer Depends on Previous)

```
Layer 1: CONFIG      → vite.config.js, index.html (with BUILD_VERSION), theme.css
Layer 2: PLUMBING    → main.js, router/index.js, registerServiceWorker.ts (auto-update)
Layer 3: DATA        → data/{domain}.js (all entities, categories, statuses)
Layer 4: STATE       → stores/ or composables/ (auth, cart, orders)
Layer 5: LAYOUT      → components/ (AppHeader, BottomNav, WhatsAppFloat, Toast)
Layer 6: VIEWS       → views/ (all pages, built in parallel batches)
Layer 7: RELIABILITY → sw.js (NetworkFirst strategy), index.html (Recovery Script)
Layer 8: VERIFY      → npm run build (increment V-number), npm run dev
```

**Why this order**: You cannot build views without data. You cannot build layout without routes. Design tokens must exist before any component references colors.

### 2.3 Design Tokens FIRST (Non-Negotiable)

```css
@import "tailwindcss";
@theme {
  --color-primary-{50-900}: ...;  /* Brand color scale */
  --color-dark: ...;               /* Dark theme */
  --color-accent: ...;             /* CTA/highlight */
  --shadow-card: ...;              /* Elevation system */
  --shadow-header: ...;
  --shadow-nav: ...;
  --font-sans: 'Font Name', system-ui;
}
```

Then define reusable CSS classes: `.btn-primary`, `.btn-outline`, `.card`, `.badge`, `.input-field`, `.stepper`

---

## PHASE 3: DATA LAYER (10 min)

### 3.1 Complete Data Entry

Enter ALL product/entity data in ONE file. Do not leave placeholders or "TODO" items.

```js
// data/products.js
export const categories = [{ id, name, icon }, ...]
export const products = [{ id, category, name, nameEn, price, unit, ... }, ...]
export const statuses = [{ key, label, color }, ...]
export const extraCharges = [{ name, price, unit }, ...]
```

**Why complete data**: Partial data = partial UI = rework later. Enter everything once.

### 3.2 Store Architecture

For apps with ordering/cart/auth, create 3 stores:

```
auth.js  → user state, login/logout, role checks, localStorage sync
cart.js  → items array, add/remove/update, totals (computed), localStorage sync
orders.js → order CRUD, status management, daily aggregation, WhatsApp text generation
```

Each store follows the pattern:

```js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useXxxStore = defineStore("xxx", () => {
  const data = ref(JSON.parse(localStorage.getItem("key") || "[]"));
  // computed properties for derived data
  // mutation functions that also persist to localStorage
  return { data, ...computeds, ...mutations };
});
```

---

## PHASE 4: COMPONENT ASSEMBLY (20 min)

### 4.1 Layout Components (Build These First)

```
AppHeader.vue   → Fixed top, dynamic title, back button logic, cart badge
BottomNav.vue   → Fixed bottom, 4 tabs, active state indicator
WhatsAppFloat.vue → Fixed floating button, positioned above nav
AppToast.vue    → Teleported notification system (success/error/info)
ProductCard.vue → Reusable card with image, name, price, badge
```

### 4.2 App.vue Shell Pattern

```vue
<template>
  <div class="app-container">
    <!-- max-width: 540px, centered, shadow -->
    <AppHeader v-if="showChrome" />
    <main :class="{ 'pt-[56px] pb-[64px]': showChrome }">
      <router-view v-slot="{ Component }">
        <keep-alive :exclude="['LoginView', 'SignupView', 'OtpView']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <BottomNav v-if="showChrome" />
  </div>
</template>
```

### 4.3 View Building Strategy

Build views in parallel batches (not one-by-one):

```
Batch 1 (parallel): HomeView + LoginView + SignupView + OtpView + ProductsView
Batch 2 (parallel): ProductDetailView + CartView + OrdersView + ProfileView
Batch 3 (parallel): AdminDashboard + AdminOrders + AdminProducts
```

Each view file should be COMPLETE when created — no half-built pages.

---

## PHASE 5: VERIFICATION (2 min)

### 5.1 Build Test

```bash
npm run build    # Must produce zero errors
npm run dev      # Must start without warnings
```

### 5.2 Route Verification Checklist

- [ ] All routes render (no blank pages)
- [ ] Auth pages hide header/nav
- [ ] Back navigation works
- [ ] Cart badge updates
- [ ] LocalStorage persists across refresh
- [ ] Admin guard redirects non-admin users

### Finalization & Delivery

- [ ] **Proactive Run**: Always execute `npm run dev` as the final step of the first generation.
- [ ] **Walkthrough**: Generate a detailed `walkthrough.md` with screenshots/recordings.
- [ ] **Verify**: Ensure all links and routes are functional.

---

## ANTI-PATTERNS (Things That Waste Time)

| Bad Practice                                | Better Approach                                       |
| ------------------------------------------- | ----------------------------------------------------- |
| Ask user 8 questions before starting        | Infer defaults, start building, user can adjust       |
| Code one file, show user, wait for feedback | Build ALL files, verify build, present complete app   |
| Install dependencies one-by-one             | Single `npm install a b c d` command                  |
| Create placeholder/skeleton views           | Create complete views with real data                  |
| Build desktop-first then shrink             | Mobile-first (540px container from start)             |
| Use generic colors then customize           | Design tokens FIRST, reference everywhere             |
| Build auth last                             | Build auth early (many features depend on user state) |
| Separate research from coding               | Parallel research while planning architecture         |

---

## TECHNOLOGY DECISION MATRIX

| Need      | Default Choice         | When to Upgrade                                           |
| --------- | ---------------------- | --------------------------------------------------------- |
| Framework | Vue 3 + Vite           | React for complex SPA, Next.js for SSR                    |
| CSS       | Tailwind CSS           | Bootstrap for rapid prototyping with pre-built components |
| State     | Pinia                  | Composable refs for < 5 shared states                     |
| Routing   | vue-router (hash mode) | History mode if backend supports it                       |
| Icons     | Inline SVG             | Lucide/Heroicons for large icon sets                      |
| Font      | Plus Jakarta Sans      | Match brand/reference project                             |
| i18n      | vue-i18n               | Skip if single-language app                               |
| Carousel  | Swiper                 | Skip if no carousels needed                               |

---

## BUSINESS LOGIC PATTERNS (Reusable)

### Ordering System

```
cutoff time → computed isOpen check → disable UI after cutoff
payment rules → computed from user.isNew → prepaid vs COD
daily summary → computed aggregation from today's orders by product
WhatsApp integration → formatted text generation → clipboard copy + wa.me link
```

### Product Catalog

```
categories[] → sidebar navigation with active indicator
products[] → filtered by category + search query
product detail → specs grid + extra services (checkboxes) + quantity stepper
```

### Auth Flow

```
Login → phone input → OTP page → verify → redirect home
Signup → name + phone + company → OTP → verify → create user → home
Guard → router.beforeEach checks user + role → redirect if unauthorized
```

---

_Masterplan V1.0 — Extracted from Claude AI production build methodology (2026-03-19)_
