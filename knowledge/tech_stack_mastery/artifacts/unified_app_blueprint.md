# Unified App Blueprint — Vue 3 + Vite + Tailwind

> **Replaces**: `mobile_app_creation_autopilot.md` + `vue3_mobile_app_blueprint.md`
> **V2.0** — Consolidated, token-optimized. Same output quality, 60% fewer tokens.

---

## 1. SCAFFOLD

```bash
npm create vite@latest {name} -- --template vue
cd {name} && npm install vue-router@4 [optional: pinia vue-i18n@10 swiper]
npm install -D tailwindcss @tailwindcss/vite
```

### Directory Convention
```
src/
├── components/     # AppHeader, BottomNav, Cards, WhatsAppFloat, Toast
├── composables/    # useAuth, useToast — module-level ref() singletons
├── data/           # Static data (products, config, categories)
├── i18n/           # [optional] index.js + locale files
├── router/         # index.js — lazy-loaded routes
├── stores/         # [if Pinia] auth.js, cart.js, orders.js
├── views/          # One file per route
├── App.vue         # Shell: conditional header + router-view + bottom-nav
├── main.js         # Plugin registration
└── style.css       # @import "tailwindcss" + @theme tokens + utility classes
```

---

## 2. BUILD ORDER (STRICT)

```
1. style.css → Design tokens (@theme), utility classes (.btn, .card, .input-field)
2. main.js → Register plugins (router, pinia, i18n)
3. router/index.js → All routes (lazy-loaded), navigation guards
4. data/{domain}.js → Complete entity data + categories + statuses
5. stores/ or composables/ → State management (auth, cart, domain logic)
6. App.vue → Shell with conditional chrome
7. components/ → Layout components (Header, Nav, Card, Toast, Float)
8. views/ → All pages (build in parallel batches, each view COMPLETE)
9. Verify → npm run build (zero errors)
```

---

## 3. DESIGN TOKENS (Define BEFORE Components)

```css
@import "tailwindcss";
@theme {
  --color-primary-{50-900}: ...;
  --color-dark: ...;
  --color-accent: ...;
  --shadow-card: 0 2px 8px rgba(0,0,0,.08);
  --shadow-header: 0 2px 8px rgba(0,0,0,.06);
  --shadow-nav: 0 -2px 10px rgba(0,0,0,.08);
  --font-sans: 'Font Name', system-ui, sans-serif;
}
```

---

## 4. STATE MANAGEMENT

```
< 5 shared states  → Module-level ref() in composables/
5-15 shared states → Pinia with 1-3 stores
> 15 shared states → Pinia with domain-separated stores
```

### Pattern (Pinia or Composable)
```js
const data = ref(JSON.parse(localStorage.getItem('key') || 'fallback'))
function save() { localStorage.setItem('key', JSON.stringify(data.value)) }
// Expose: reactive refs + computed derivations + mutation functions
```

---

## 5. APP SHELL

```vue
<template>
  <div class="app-container"> <!-- max-w-[540px] mx-auto min-h-screen bg-white shadow -->
    <AppHeader v-if="showChrome && !hasCustomHeader" />
    <main :class="{ 'pt-[56px] pb-[64px]': showChrome }">
      <router-view v-slot="{ Component }">
        <keep-alive :exclude="['LoginView','SignupView','OtpView']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <BottomNav v-if="showChrome" />
  </div>
</template>
```

---

## 6. COMPONENT PATTERNS

| Component | Key Pattern |
|---|---|
| **Header** | Fixed top, dynamic title from route, back button (history > 1), cart badge |
| **BottomNav** | Fixed bottom, 4 tabs, active indicator (top bar + color), SVG icons |
| **Card** | Image (aspect-ratio or padding-top trick) + badge overlay + info + price |
| **Modal** | Teleport to body, `fixed inset-0 z-50 bg-black/40`, slide-up content |
| **Toast** | Teleport, TransitionGroup, auto-dismiss (3s), type-based colors |
| **Stepper** | Inline-flex, -/value/+ buttons, border between |
| **WhatsApp** | Fixed position, above nav, green, wa.me/{phone}?text={encoded} |

---

## 7. VIEW BUILDING

### Priority Order
```
1. HomeView      → Hero + featured (immediate wow)
2. ListingView   → Grid/sidebar categories
3. DetailView    → Full info + CTA
4. Auth views    → Login → OTP → Signup
5. CartView      → Items + checkout modal
6. OrdersView    → Status-tracked list
7. ProfileView   → User card + menu
8. Admin views   → Dashboard + management
```

### Section Patterns
| Type | Implementation |
|---|---|
| Hero/Banner | Gradient bg + overlay text + status indicator |
| Feature Grid | `grid grid-cols-2 gap-3` with ProductCards |
| Category Sidebar | `w-[76px]` fixed left + scrollable right content |
| Stats Cards | `grid grid-cols-2 gap-3` with gradient bg + large number + label |
| Empty State | Centered SVG icon + gray text + CTA button |
| Footer Info | Dark bg + company info + contact link |

---

## 8. AUTH FLOW

```
Login  → phone input → OTP (4-6 digits, auto-advance) → verify → home
Signup → name + phone + optional fields → OTP → verify → create user → home
Guard  → router.beforeEach: check user + role → redirect if unauthorized
```

Auth pages: Full-screen gradient, centered logo, form card, safe-area padding.

---

## 9. i18n (If Multi-Language)

```
1. Create en.js with ALL keys first
2. Copy structure to zh.js, ms.js → translate values
3. Use computed() for nav labels, WhatsApp URLs, concatenated strings
4. Use $tm() for arrays, $t() for strings in templates
5. Product data: t('product.{id}.name') pattern
```

---

## 10. MOBILE UI QUICK REFERENCE

| Element | Pattern |
|---|---|
| Touch target | `min-h-[44px] min-w-[44px]` |
| Card press | `active:scale-[0.97] transition-transform cursor-pointer` |
| Bottom sheet | `fixed inset-0 z-50 items-end` + slide-up |
| Badge | `text-[10px] font-bold px-2 py-0.5 rounded-full` |
| Safe area | `env(safe-area-inset-top)` / `env(safe-area-inset-bottom)` |
| Section title | `font-extrabold` + left accent bar (`w-[3px] rounded-full bg-primary`) |

---

## 11. ANTI-PATTERNS

1. Don't install Pinia for < 5 states — use composable refs
2. Don't hardcode colors — use design tokens
3. Don't build views without data layer first
4. Don't use `onMounted` for auth redirects — use router guards
5. Don't `keep-alive` auth pages — stale form data
6. Don't use `v-html` for user content — XSS risk
7. Don't skip safe-area-inset — breaks on notch devices
8. Don't build desktop-first — 540px mobile container from start
9. Don't ask user questions you can infer — just build and verify
10. Don't create partial/skeleton pages — each view must be COMPLETE

---

_Blueprint V2.0 — Consolidated from autopilot + vue3_blueprint (2026-03-19)_
