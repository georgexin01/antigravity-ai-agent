# Mobile Design Mastery — Unified Mobile Architecture & Patterns

> **Consolidated from**: mobile_adept_interaction_dna.md + mobile_app_design_dna.md + mobile_app_stored_samples.md
> **Purpose**: Single file for ALL mobile design knowledge. Load when task = APP.
> **Protocol ID**: ADEPT-V2-2026

---

## 1. NATIVE APP SIMULATION (Core Principles)

Goal: Move beyond "responsive stacking" → achieve **Native App Feel** below 768px.

### Navigation: Modal Drawer
- Entrance: `cubic-bezier(0.85, 0, 0.15, 1)` smooth slide
- Staggered entry: nav items with `transition-delay` (0.1s increments)
- Close triggers: X button, backdrop click, link click
- Scroll lock: `body overflow: hidden` when active

### Typography: Fluid Clamp
- Headers: `clamp()` to never exceed viewport, dominant on 390-430px
- Grids: collapse to 1-column on mobile, vertical rhythm priority

### CTAs: Bottom-Fixed
- WhatsApp/Contact as fixed anchor in mobile drawer
- Min touch target: 44×44px

### Visual DNA
- Backdrop blur: minimum `blur(40px)` for overlays
- Micro-shadows: `box-shadow: 0 10px 30px rgba(0,0,0,0.5)` on mobile cards
- Never allow horizontal scroll

---

## 2. MOBILE APP ARCHITECTURE (God-Tier Patterns)

- **Fluid Gestures**: Swipeable cards, bottom sheets with spring physics
- **Biometric Focus**: Centered thumb-zones, hit targets ≥ 44pt
- **Glassmorphic Overlays**: `backdrop-blur:20px` for TabBars/Modals
- **Haptic Spacing**: 16-24px margins, deliberate and breathable
- **Section Atmosphere**: Every screen module has unique bg signature (gradient/mesh/pattern)
- **10-Tier Color Shades**: `--theme-100` to `--theme-900` for depth
- **Glass Bottom Nav**: `backdrop-blur-lg bg-white/95 h-20 w-20` tap zones
- **Search Depth**: Input fields with `shadow-sm rounded-xl` SaaS premium feel
- **Safe Area**: `pt-safe pb-safe` mandatory for notch devices

---

## 3. STORED PATTERNS (Ready to Extract)

### 3.1 Animated Hero Slider (App Home)
- 180px height slider, text overlays, dot indicators
- Optimized for small screen impact

### 3.2 Interior Designer Order Grid
- 2-column compact grid, material variations, direct hit targets

### 3.3 Administrative Order Card (Approval Flow)
- Badge status, price summary, role-based action buttons (Unlock/Approve)

### 3.4 6-Digit OTP Verification
- 6 independent boxes, auto-focus, large numeric hit areas

### 3.5 Multi-Role Login
- Phone/password form, high-contrast buttons, secondary signup link

### 3.6 Premium Inventory Catalog
- Sticky header + chip filters + aspect-ratio product cards + safe-area bottom nav

---

_Mobile Design Mastery V2.0 — Consolidated (2026-03-19)_
_Merged: mobile_adept_interaction_dna + mobile_app_design_dna + mobile_app_stored_samples_
