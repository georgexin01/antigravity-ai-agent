# Unified App Blueprint — Vue 3 + Vite + Tailwind

> **Replaces**: `mobile_app_creation_autopilot.md` + `vue3_mobile_app_blueprint.md`
> **V2.1** — V13 Upgraded with triggers, gates, verification. 2026-03-27

---

## WHEN TO USE THIS FILE

```
Trigger:    task_type = APP (Vue 3 mobile/web app)
Pre-check:  typescript_pinia_standard.md patterns understood
Depends:    agent_core_protocol.md (execution sequence)
            must_do_master_rules.md (phase gates)
Next:       → Build views using §7 priority order
            → Verify using must_do_master_rules.md Phase 3
```

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

## 2. BUILD ORDER (STRICT — WAVE BATCHING)

> V15: 8 serial steps → 6 waves (37% fewer cycles). Same output, batched execution.

```
WAVE 1 (Foundation):
  → style.css        Design tokens (@theme), utility classes (.btn, .card, .input-field)

WAVE 2 (Parallel — both depend on Wave 1):
  → main.js          Register plugins (router, pinia, i18n)
  → data/{domain}.js Complete entity data + categories + statuses
  ✓ Independent — write in same batch

WAVE 3 (Router — depends on Wave 2):
  → router/index.js  All routes (lazy-loaded), navigation guards

WAVE 4 (Parallel — depends on Wave 1-3):
  → stores/          State management (auth, cart, domain logic)
  → components/      Layout components (Header, Nav, Card, Toast, Float)
  ✓ Independent — write in same batch

WAVE 5 (Final Assembly — depends on Wave 4):
  → App.vue          Shell with conditional chrome (needs stores)
  → views/           All pages in parallel batches, each COMPLETE
  ✓ Independent — write in same batch

WAVE 6 (Verify):
  → npm run build    Zero errors. CHECK ONCE after all files written.
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

## 12. VERIFICATION CHECKLIST

After building an app with this blueprint:

```
- [ ] Design tokens defined in style.css @theme (no hardcoded colors)
- [ ] All routes in router/index.js (lazy-loaded, guards applied)
- [ ] Data layer complete: types → dummy data → stores
- [ ] App shell: Header (56px) + BottomNav (60px) + Container (540px)
- [ ] ALL views production-ready (no skeletons, no TODOs)
- [ ] localStorage persistence for auth, cart, locale
- [ ] WhatsApp float on all B2B/B2C pages
- [ ] npm run build passes with zero errors
- [ ] Every route renders (no blank pages)
```

### WRONG / CORRECT Examples

```javascript
// WRONG — build views before data layer
// Step 1: HomeView.vue  ← no data to display!

// CORRECT — data layer first
// Step 1: types/products.ts → Step 2: data/products.ts → Step 3: stores/products.ts → Step 4: views/Home.vue
```

```css
/* WRONG — hardcoded color */
.header { background: #8B1A1A; }

/* CORRECT — design token */
.header { background: var(--color-primary); }
/* or with Tailwind: class="bg-primary" */
```

```javascript
// WRONG — hash router
import { createWebHashHistory } from 'vue-router'  // ← NEVER

// CORRECT — clean URLs
import { createWebHistory } from 'vue-router'  // ← ALWAYS
```

### Next Step
→ Run `must_do_master_rules.md` Phase 3 verification chain
→ Then Phase 4 publish checklist (if deploying)

---

_Blueprint V2.1 — V13 Upgraded with gates + verification (2026-03-27)_
