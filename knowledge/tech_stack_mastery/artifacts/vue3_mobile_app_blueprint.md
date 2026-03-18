# Vue 3 Mobile App Blueprint (Vite + Tailwind Edition)

> **SOURCE**: Extracted from Four Win Travel App (2026-03). Battle-tested patterns for building production-ready mobile-first Vue 3 apps from zero to deployment.

---

## 1. Project Scaffold (60-Second Setup)

```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm install vue-router@4 vue-i18n@10 swiper
npm install -D tailwindcss @tailwindcss/vite
```

### 1.1 Directory Convention
```
src/
├── components/          # Shared UI (AppHeader, BottomNav, TourCard, WhatsAppFloat)
├── composables/         # useAuth(), useReferral(), useToast() — reactive state
├── data/                # Static data + helpers (tours.js, config)
├── i18n/                # index.js + en.js + zh.js + ms.js
├── router/              # index.js — lazy-loaded routes
├── views/               # Page-level components (one per route)
├── App.vue              # Layout shell: Header + router-view + BottomNav
├── main.js              # Plugin registration: router, i18n
└── style.css            # @import "tailwindcss" + custom design tokens
```

### 1.2 Design Token System (Tailwind)
```css
@import "tailwindcss";
@theme {
  --color-primary: #C8A95E;       /* Brand gold */
  --color-primary-dark: #B08D3E;
  --color-dark: #1A1A2E;          /* Deep navy */
  --color-accent: #E74C3C;        /* CTA red */
  --color-surface: #F8F8F8;       /* Page background */
  --font-sans: 'Inter', system-ui, sans-serif;
  --shadow-card: 0 2px 12px rgba(0,0,0,.06);
}
```

**Rule**: Define ALL brand colors, fonts, shadows as tokens. Never hardcode hex in components.

---

## 2. App Shell Architecture

### 2.1 App.vue Layout Pattern
```vue
<template>
  <div id="app" class="min-h-screen bg-surface font-sans">
    <AppHeader />
    <router-view v-slot="{ Component, route }">
      <keep-alive :max="5" :exclude="['LoginView','SignupView','OtpView']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
    <BottomNav v-if="showNav" />
    <WhatsAppFloat v-if="showNav" />
    <ToastContainer />
  </div>
</template>
```

### 2.2 Keep-Alive Rules
| Include in cache | Exclude from cache |
|---|---|
| Home, Tours, Profile, Referral | Login, Signup, OTP, SignupProfile |

**Why**: Auth pages must re-render fresh (prevent stale form data). Content pages benefit from caching.

**Critical**: Components must have `export default { name: 'ViewName' }` script block for `:exclude` to work with `<script setup>`.

### 2.3 Safe Area Handling (Mobile)
```css
/* Always account for notch/home indicator */
padding-top: env(safe-area-inset-top, 0px);
padding-bottom: env(safe-area-inset-bottom, 0px);
```
Use in: App shell, fixed headers, bottom navs, auth pages.

---

## 3. Routing Patterns

### 3.1 Lazy Loading (Mandatory)
```js
const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/tours', component: () => import('@/views/ToursView.vue') },
  { path: '/tour/:id', component: () => import('@/views/TourDetailView.vue') },
  // Auth routes — meta flag for guard
  { path: '/login', name: 'login', meta: { auth: true }, component: () => import('@/views/LoginView.vue') },
]
```

### 3.2 Navigation Guard (Auth Redirect)
```js
router.beforeEach((to) => {
  if (to.meta.auth && !['otp','signup-profile'].includes(to.name)) {
    const { currentUser } = useAuth()
    if (currentUser.value) return '/'
  }
})
```
**Pattern**: Centralize auth redirects in router, NOT in component `onMounted`. Prevents stale state with keep-alive.

### 3.3 Bottom Navigation Structure
```js
const tabs = computed(() => [
  { path: '/', label: t('nav.home'), icon: 'home' },
  { path: '/tours', label: t('nav.tours'), icon: 'compass' },
  { path: '/referral', label: t('nav.referral'), icon: 'users' },
  { path: '/profile', label: t('nav.profile'), icon: 'user' },
])
```
**Rule**: Always `computed()` when labels depend on i18n — ensures reactivity on language switch.

---

## 4. Composable Patterns

### 4.1 State Composable (useReferral/useAuth)
```js
// composables/useAuth.js
import { ref } from 'vue'
const currentUser = ref(JSON.parse(localStorage.getItem('user') || 'null'))
export function useAuth() {
  function login(phone) { currentUser.value = { phone }; persist() }
  function logout() { currentUser.value = null; persist() }
  function persist() { localStorage.setItem('user', JSON.stringify(currentUser.value)) }
  return { currentUser, login, logout }
}
```
**Pattern**: Module-level `ref()` = singleton state shared across all components. No Pinia/Vuex needed for small apps.

### 4.2 Toast Composable
```js
const toasts = ref([])
export function useToast() {
  function success(msg) { push({ type: 'success', msg }) }
  function error(msg) { push({ type: 'error', msg }) }
  function push(toast) {
    toasts.value.push({ ...toast, id: Date.now() })
    setTimeout(() => toasts.value.shift(), 3000)
  }
  return { toasts, success, error }
}
```
**Rule**: Toast messages MUST use `t('toast.key')` for i18n support.

---

## 5. Component Patterns

### 5.1 Product Card (Reusable)
```
Props: { tour: Object, layout: 'grid' | 'list' }
Display: Image (lazy) + duration badge + discount badge + name + tagline + price
Link: router-link wrapping entire card
Active state: active:scale-[0.98] for touch feedback
```

### 5.2 Category Sidebar (Vertical Tabs)
```
Layout: grid with fixed sidebar (72px) + scrollable content
Icons: SVG icons wrapped in rounded-full containers + emoji flags
Active state: left border indicator + bg tint + bold text
Data: Categories array with id + svg identifier
```

### 5.3 Image Pattern
```html
<!-- Aspect ratio trick for consistent cards -->
<div class="relative pt-[110%]">
  <img class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  <span class="absolute top-2 left-2 badge">overlay badge</span>
</div>
```

### 5.4 Modal Pattern
```html
<!-- Teleport to body, backdrop + centered card -->
<Teleport to="body">
  <div v-if="show" class="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
    <div class="bg-white rounded-t-2xl w-full max-w-md p-6 animate-slide-up">
      <!-- content -->
    </div>
  </div>
</Teleport>
```

---

## 6. Auth Flow Blueprint

```
[Signup] → phone input → [OTP] → 6-digit verify → [Profile] → name + referral code → [Home]
[Login]  → phone input → [OTP] → 6-digit verify → [Home]
```

### 6.1 OTP Input Pattern
```js
// 6 individual inputs, auto-focus next on input, auto-focus prev on backspace
function handleInput(idx, e) {
  if (e.target.value && idx < 5) nextTick(() => inputs[idx + 1].focus())
}
function handleKeydown(idx, e) {
  if (e.key === 'Backspace' && !digits[idx] && idx > 0) inputs[idx - 1].focus()
}
```

### 6.2 Auth Page Design
- Full-screen with gradient/branded background
- Centered logo + form
- Bottom link (toggle login/signup)
- Malaysia phone prefix (+60) with flag emoji
- Safe-area padding on top and bottom

---

## 7. Data Architecture

### 7.1 Static Data File (tours.js)
```js
export const tours = [
  { id: 'xian', name: "Xi'an", country: 'China', image: '/images/...',
    duration: '5D4N', price: 2388, originalPrice: 2888,
    category: 'china', featured: true },
]
export const categories = [
  { id: 'all', svg: 'globe' },
  { id: 'hot', svg: 'fire' },
  { id: 'china', svg: 'china' },
]
export function getTourById(id) { return tours.find(t => t.id === id) }
export function getToursGrouped(category) { /* returns { categoryKey: [...tours] } */ }
```

### 7.2 Translation-Ready Data
- Keep structural data (price, duration, image, id) in JS
- Move ALL text content (name, tagline, description, highlights, itinerary) to locale files
- Reference via `t('tourData.${tour.id}.name')`
- Use `tm()` for arrays (highlights, itinerary, includes)

---

## 8. Performance Checklist

- [ ] Lazy-load all route components (`() => import()`)
- [ ] `loading="lazy"` on all images below the fold
- [ ] `<keep-alive :max="5">` to cache visited pages
- [ ] CSS `@import "tailwindcss"` via Vite plugin (tree-shaken)
- [ ] Swiper: import only needed modules (Autoplay, Pagination)
- [ ] No Pinia/Vuex unless 10+ shared state properties
- [ ] `computed()` for derived values (never re-compute in template)

---

## 9. Mobile UI Quick Reference

| Element | Tailwind Pattern |
|---|---|
| Touch target | `min-h-[44px] min-w-[44px]` |
| Card press | `active:scale-[0.97] transition-transform` |
| Bottom sheet | `fixed inset-0 z-50` + `items-end` |
| Glass effect | `bg-white/80 backdrop-blur-md` |
| Badge | `text-[10px] font-bold px-2 py-0.5 rounded-full` |
| Truncate text | `truncate` or `line-clamp-2` |
| Safe area | `env(safe-area-inset-top)` / `env(safe-area-inset-bottom)` |
| Section title | `font-extrabold text-dark text-sm` + left accent bar |

---

## 10. Deployment Checklist

- [ ] `npm run build` — zero errors, zero warnings
- [ ] Test all routes: Home → Tours → TourDetail → Referral → Profile → Auth flow
- [ ] Test language switching on every page
- [ ] Test on mobile viewport (375px width)
- [ ] Verify localStorage persistence (auth + locale)
- [ ] Check WhatsApp links open correctly
- [ ] Verify keep-alive: navigate away and back — state preserved
- [ ] Verify auth guard: logged-in user cannot access /login or /signup
