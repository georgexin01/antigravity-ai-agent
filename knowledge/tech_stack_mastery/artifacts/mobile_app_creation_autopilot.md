# Mobile App Creation Autopilot — Universal Guide

> **PURPOSE**: Step-by-step autopilot protocol for AI agents to automatically build any mobile-first web app from scratch. Follow these steps in order for predictable, high-quality results every time.

---

## Phase 0: Requirement Extraction (Before Coding)

### 0.1 Mandatory Questions
Before writing a single line of code, extract these from the user:

| # | Question | Why |
|---|---|---|
| 1 | What is the app about? (1 sentence) | Defines scope |
| 2 | Who are the users? (demographics, region) | Drives language, design |
| 3 | What are the core screens? (list) | Defines routes |
| 4 | Is there auth? (login/signup/OTP?) | Architecture impact |
| 5 | Is there multi-language? (which?) | i18n planning |
| 6 | What's the primary action? (book, buy, share?) | CTA design |
| 7 | What data exists? (products, menu, services?) | Data architecture |
| 8 | Brand colors? (or let AI decide) | Design tokens |

### 0.2 If User Gives Minimal Input
Infer reasonable defaults:
- Auth: Phone + OTP flow (Malaysia standard)
- Languages: EN + 中文 + BM (Malaysia market)
- Style: Dark + Gold accent (premium feel)
- Navigation: Bottom tabs (mobile standard)

---

## Phase 1: Scaffold (5 Minutes)

### 1.1 Create Project
```bash
npm create vite@latest {app-name} -- --template vue
cd {app-name}
npm install vue-router@4 vue-i18n@10
npm install -D tailwindcss @tailwindcss/vite
```

### 1.2 Create File Structure
```
src/
├── components/     # AppHeader.vue, BottomNav.vue, shared cards
├── composables/    # useAuth.js, useToast.js
├── data/           # products.js, config.js
├── i18n/           # index.js, en.js, zh.js, ms.js
├── router/         # index.js
├── views/          # One file per route
├── App.vue
├── main.js
└── style.css       # Design tokens
```

### 1.3 Design Tokens First
Define ALL brand values in `style.css` before any components:
```css
@import "tailwindcss";
@theme {
  --color-primary: #...;
  --color-dark: #...;
  --color-accent: #...;
  --color-surface: #...;
}
```

---

## Phase 2: Core Architecture (30 Minutes)

### 2.1 Build Order (STRICT)
```
1. style.css (tokens)
2. main.js (plugins)
3. router/index.js (all routes, lazy-loaded)
4. App.vue (shell: header + router-view + bottom-nav)
5. components/AppHeader.vue (title + language switcher)
6. components/BottomNav.vue (4-tab navigation)
7. views/HomeView.vue (hero + featured content)
8. data/{domain}.js (static data)
```

**Why this order**: Each file depends on the previous. Don't skip ahead.

### 2.2 State Management Decision Tree
```
< 5 shared states  →  Module-level ref() in composables (NO Pinia)
5-15 shared states →  Pinia with 1-2 stores
> 15 shared states →  Pinia with domain-separated stores
```

### 2.3 Composable Pattern
```js
// Module-level = singleton (shared across all components)
const state = ref(JSON.parse(localStorage.getItem('key') || 'null'))

export function useXxx() {
  function update(val) { state.value = val; persist() }
  function persist() { localStorage.setItem('key', JSON.stringify(state.value)) }
  return { state, update }
}
```

---

## Phase 3: Views (1-2 Hours)

### 3.1 View Priority Order
Build views in this order for fastest visible progress:
```
1. HomeView       — Hero + featured items (immediate wow factor)
2. ListingView    — Grid/list of all items with categories
3. DetailView     — Single item detail + CTA
4. ProfileView    — User info + settings
5. Auth views     — Login → OTP → Signup → Profile setup
6. Special views  — Referral, About, etc.
```

### 3.2 View Template Pattern
Every view follows this structure:
```vue
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// ... data + logic
</script>

<template>
  <div class="[page-container-classes]">
    <section><!-- Section 1 --></section>
    <section><!-- Section 2 --></section>
  </div>
</template>
```

### 3.3 Common Section Patterns

| Section Type | Pattern |
|---|---|
| Hero/Banner | Full-width image/carousel + overlay text + CTA |
| Feature Grid | `grid grid-cols-2 gap-3` with cards |
| Category Filter | Horizontal scroll tabs or vertical sidebar |
| Info Card | Gradient bg + icon + text + link |
| Company Footer | Dark bg + logo + address + phone links |
| Empty State | Centered icon + message |

---

## Phase 4: i18n Integration (30 Minutes)

### 4.1 Translation File Strategy
```
1. Create en.js with ALL keys first (complete English)
2. Copy structure to zh.js, translate all values
3. Copy structure to ms.js, translate all values
4. Product data: tourData.{id}.{field} pattern
```

### 4.2 Reactive Gotchas
```
ALWAYS computed() for:
- Navigation tab labels
- WhatsApp/external link URLs
- Any value that concatenates t() results
- Page titles in header

NEVER static for:
- Arrays of objects with t() labels
- Template-used strings (they're already reactive via $t)
```

### 4.3 Array Translation
```js
// Locale file
highlights: ['Item 1', 'Item 2', 'Item 3'],
itinerary: [
  { title: 'Day 1', desc: 'Description' },
],

// Template — use $tm() not $t()
<li v-for="h in $tm('tourData.xian.highlights')">{{ h }}</li>
```

---

## Phase 5: Polish (30 Minutes)

### 5.1 Mobile Touch Polish
```css
/* Every tappable element needs: */
.touch-ready {
  @apply active:scale-[0.97] transition-transform cursor-pointer;
  min-height: 44px;  /* iOS minimum tap target */
}
```

### 5.2 Animation Patterns
```css
/* Slide up (modals, bottom sheets) */
@keyframes slide-up {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slide-up 0.3s ease-out; }

/* Fade in (toasts, overlays) */
.animate-fade { animation: fade 0.2s ease-in; }
```

### 5.3 Loading & Empty States
Every data-dependent section needs:
```vue
<div v-if="loading" class="animate-pulse">skeleton</div>
<div v-else-if="!items.length" class="text-center py-20">
  <p class="text-gray-400">{{ $t('common.noData') }}</p>
</div>
<div v-else><!-- actual content --></div>
```

---

## Phase 6: PWA & Deployment

### 6.1 PWA Essentials
```
1. manifest.json — name, icons, theme_color, display: standalone
2. Meta tags — viewport, theme-color, apple-mobile-web-app
3. Favicon — multiple sizes (192x192, 512x512)
4. Service worker (optional) — vite-plugin-pwa
```

### 6.2 Build & Verify
```bash
npm run build          # Zero errors required
npx serve dist         # Local preview of production build
```

### 6.3 Final Checklist
- [ ] All routes work (no blank pages)
- [ ] Language switching works on all pages
- [ ] Auth flow complete (signup → OTP → profile → home)
- [ ] Back navigation works correctly
- [ ] Toast messages appear in correct language
- [ ] External links (WhatsApp) work
- [ ] Images load (lazy loading works)
- [ ] Mobile viewport (375px) looks correct
- [ ] Safe area insets applied (notch devices)
- [ ] Keep-alive: cached pages retain state
- [ ] Auth guard: logged-in users can't access login/signup

---

## Quick Reference: Technology Choices

| Need | Choice | Why |
|---|---|---|
| Framework | Vue 3 + Vite | Fast DX, small bundle |
| Styling | Tailwind CSS | Utility-first, no CSS files to manage |
| Routing | vue-router@4 | Official, lazy-loading built-in |
| i18n | vue-i18n@10 | Official, Composition API support |
| Carousel | Swiper | Touch-native, tree-shakable |
| State | Composables (ref) | Simple, no extra dependency |
| Icons | Inline SVG | No icon library dependency, tree-shaken |
| Images | Static /public | No bundling overhead, CDN-ready |

---

## Anti-Patterns (NEVER Do These)

1. **Don't install Pinia for < 5 shared states** — composable refs are simpler
2. **Don't use Vuex** — deprecated pattern, use Pinia or composables
3. **Don't hardcode strings** — always use i18n from day 1
4. **Don't use `onMounted` for auth redirects** — use router guards
5. **Don't `keep-alive` auth pages** — stale form data
6. **Don't skip design tokens** — leads to inconsistent colors/spacing
7. **Don't build all views then add i18n** — integrate as you build each view
8. **Don't use `v-html` for user content** — XSS risk
9. **Don't forget safe-area-inset** — breaks on notch devices
10. **Don't use `px` for tap targets** — minimum 44px/44pt always
