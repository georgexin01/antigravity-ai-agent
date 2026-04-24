---
name: dna-specialty
description: "📱 DNA SPECIALTY — PWA, i18n, and native-bridge deployment patterns for Vue 3 + Capacitor sovereign stack."
triggers: ["pwa", "offline", "service worker", "manifest", "i18n", "lang", "translate", "locale", "capacitor", "native bridge"]
phase: constitutional
version: 2.0
status: authoritative
date_updated: "2026-04-24"
---

# 📱 DNA SPECIALTY (V2.0) — PWA · i18n · Native Deploy

The three adjacent domains that every modern web build must handle. Each is surgically scoped — no framework lock-in, no speculative features. Use this as the authoritative reference for Tier-0/1 decisions in these domains.

---

## 🛠️ 1. PWA — Progressive Web App

### 1.1 Manifest essentials
- **Display**: `standalone` (no browser chrome) — mandatory.
- **Status bar (iOS)**: `black-translucent` via `<meta name="apple-mobile-web-app-status-bar-style">`.
- **Icons**: 192×192 AND 512×512 as `maskable` PNG. Optional 180×180 `apple-touch-icon`.
- **Start URL**: `/?source=pwa` — preserves attribution for analytics.
- **Theme color**: must match the header background at first paint (prevents flash).
- **Orientation**: `any` unless app is game/media-specific.

### 1.2 Service worker strategy
- **Default**: `NetworkFirst` for HTML, `CacheFirst` for `/assets/*` fingerprinted bundles.
- **Ban**: `StaleWhileRevalidate` on API routes — causes stale data bugs.
- **Update flow**: skipWaiting + clients.claim + reload prompt, NOT silent reload.
- **Revision**: service-worker version bumped on every deploy.

### 1.3 Viewport mandate
- **`width=412`** (Samsung S20 Ultra) — NOT `width=device-width`. Matches Chrome DevTools F12 simulation so phone browsers render identically.
- `initial-scale=1.0`, `maximum-scale=1.0`, `user-scalable=no`, `viewport-fit=cover`.

### 1.4 Install-prompt UX
- Defer `beforeinstallprompt` — capture the event, show CTA only after user engagement (≥ 2 page views OR ≥ 30 s on site).
- After install: switch to `window.matchMedia('(display-mode: standalone)')` for in-app UX branch.

---

## 🌐 2. i18n — Internationalization

### 2.1 Vue i18n setup (Composition API ONLY)
- **`legacy: false`** — always. Composition API unlocks reactive `t()` via `useI18n()`.
- **Global scope**: `useI18n({ useScope: 'global' })` for shared keys; default `'local'` for page-specific bundles.
- **Storage**: persist user locale in `localStorage` key `__locale`, sync to Pinia on app mount.
- **Fallback chain**: `zh-CN → en` (or reverse per project). Never hard-crash on missing key.

### 2.2 The ID/text split
- **IDs, numbers, enums, keys** → live in JS/TS.
- **Visible strings** → live ONLY in `/locales/{lang}.json`.
- **Rule #1 violation**: writing Chinese/English directly in `.vue` template = auto-fail in code review.

### 2.3 Reactive bindings
- Every visible string in a template MUST use `{{ t('path.to.key') }}` or `:placeholder="t(...)"`.
- Dynamic labels: wrap in `computed(() => t(...))` so locale switches rerender instantly.
- Never use `$t` in setup script when Composition API is available — use destructured `t` from `useI18n()`.

### 2.4 Bilingual search intent
- Search inputs accept BOTH languages — normalize via a `searchTerms` array per record (e.g. `["司机", "driver", "sije"]`).
- Pinyin fallback for Chinese projects when possible.

---

## 🧭 3. Native Bridge (Capacitor 6+)

### 3.1 When to go native
- Need Google Maps native SDK, GPS, Camera with high FPS, or Bluetooth → **Capacitor**.
- Pure browser features (Notifications, File upload, simple Geolocation) → **PWA only**, don't ship native.

### 3.2 Plugin discipline
- Wrap every native plugin call in a try/catch that falls back to the web API.
- **Example**: Camera → `Camera.getPhoto()` native; on web fallback to `<input type="file" accept="image/*" capture>`.
- Initialize plugins inside `onMounted` only when `Capacitor.isNativePlatform()` — never at module scope.

### 3.3 Deep linking
- Use `@capacitor/app` `appUrlOpen` listener.
- Route table: map `myapp://driver/task/:id` → router.push(`/driver/task/${id}`).

### 3.4 Build pipeline
- `npm run build` → `dist/` → `npx cap sync` → open in Android Studio / Xcode.
- Never commit `android/` or `ios/` native folders to project git — regenerate from web build.
- Keep Capacitor version pinned in `package.json`; breaking changes land between minor versions.

---

## 🛡️ 4. CROSS-CONCERN GOVERNANCE

| Concern | Rule | Enforced by |
|---|---|---|
| Bundle size | PWA pre-cache < 3 MB gzipped | Vite build analyzer |
| First paint | TTI < 2.5 s on 4G | Lighthouse CI |
| Locale missing-key | Log to console.warn, not throw | i18n fallback chain |
| Native-only code | Guarded by `isNativePlatform()` | try/catch wrapper |
| Service worker scope | Never register on `/admin/*` routes | registration guard |

---

## 🔗 REFERENCES

- [claude-frontend/12-i18n-composables/skill.md](../../skills/claude-frontend/12-i18n-composables/skill.md) — step-by-step implementation
- [claude-frontend/13-native-pwa-deploy/skill.md](../../skills/claude-frontend/13-native-pwa-deploy/skill.md) — deploy pipeline
- [lib/htmlHead.php](../../../../alexis/lib/htmlHead.php) (in alexis project) — viewport 412 reference implementation

---
**DNA Specialty V2.0 — 2026-04-24 · Expanded from V1.0 stub with concrete PWA, i18n, and Capacitor rules**
