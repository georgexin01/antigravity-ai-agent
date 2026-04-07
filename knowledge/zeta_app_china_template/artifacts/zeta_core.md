# Zeta App Core: Project Blueprint (V27.0)

> **Identity**: ZETA_CORE_V27.0
> **Authorized Mode**: CLAUDE (Logic/Backend) + NORMAL (Front-end).
> **Mandate**: Deliver AI-driven, high-fidelity mobile-responsive "Zeta" style applications.

---

## 🎨 1. CORE DESIGN PHILOSOPHY
- **Aesthetic**: Premium "Motion 3D" (Glassmorphism + Three.js).
- **Palette**: Red (#FF0000) highlights | Deep Black (#0A0A0A) background | Slate Gray (#333333).
- **Typography**: Inter/Roboto (UI) | Orbitron (Tech Headers).

## ⚡ 2. TECHNICAL STACK (Vue 3 + Vite)
- **Framework**: Vue 3 + Vite + SCSS (Sass).
- **Component UI**: Element Plus (Glassmorphism theme).
- **Libraries**: `three` (3D), `lucide-vue-next` (Icons), `pinia` (State), `axios` (API).

### Quick Scaffold:
```powershell
npx -y create-vite@latest ./ --template vue
npm install element-plus three lucide-vue-next axios pinia vue-router
npm install -D sass
```

---

## 📂 3. ARCHITECTURE TEMPLATE
- `/src/assets`: Images & 3D models.
- `/src/components`: UI components (Navbar, Hero, AppCard).
- `/src/views`: Main pages (Home, Apps, AI-Tech).
- `/src/store`: Pinia state management.
- `/src/utils`: Three.js helpers.

---

_V27.0 Zeta App Core — Premium Blueprint Active (2026-04-07)_
