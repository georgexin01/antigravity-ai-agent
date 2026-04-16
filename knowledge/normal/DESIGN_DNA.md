---
name: design-dna
description: "🎨 DESIGN DNA (V1.0) — THE UNIFIED UI/UX & MOTION STANDARD"
triggers: ["design dna", "design matrix", "ui standard", "ux standard", "design_dna"]
phase: constitutional
model_hint: gemini-3-flash
version: 1.0
---

# 🎨 DESIGN DNA (V1.0) — THE UNIFIED STANDARD

This document consolidates all Cinematic, Industrial, and Mobile-First design principles. It replaces: `dna_design_matrix`, `pro_design_matrix`, `mobile_design_mastery`, `design_thinking`, and `v12_visionary_dna`.

---

## 🎨 1. THE CINEMATIC CALCULATOR (PRO-DISTILLATION)

Do not invent design values. Use these pre-calculated constants for high-fidelity outputs:

### 1.1 Atomic Color Palette (Zinc/Red Spectrum)
| Layer | Hex Code | Description |
| :--- | :--- | :--- |
| **Background (Abyss)** | `#000000` | Absolute Black. Root for WebGL. |
| **Surface 1 (Base)** | `#0a0b10` | Deepest Zinc/Onyx for base page. |
| **Surface 2 (Card)** | `#121212` | Elevated card layer. |
| **Primary (Tech Red)** | `#d52b1e` | High-intensity action. |
| **Accent (White)** | `#fafafa` | Primary text/headings. |
| **Muted** | `#a1a1aa` | Muted descriptions/secondary text. |

### 1.2 The "Liquid Glass" Formula
- **Blur**: `backdrop-filter: blur(24px) saturate(180%)`.
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`.
- **Background**: `rgba(0, 0, 0, 0.45)`.
- **Active State**: `active:scale-[0.97] duration-200`.

---

## 📐 2. LAYOUT ARCHITECTURE (BENTO & STICKY)

### 2.1 The Unified Bento-Grid
- **Desktop**: `grid-template-columns: repeat(12, 1fr); gap: 24px;`.
- **Mobile Flow**: `grid-cols-1` or `grid-cols-2` for cards.
- **Section Spacing**: Vertical gap `clamp(80px, 10vh, 150px)` for high-end "Ocular" logic.

### 2.2 Sticky "Sim" Experience
- **Pattern**: Left (Vertical Info/Title) | Right (Sticky Phone/Asset Simulation).
- **Sticky Column**: `position: sticky; top: 15vh; height: 70vh;`.

---

## 📱 3. MOBILE MASTERY (NATIVE-FEEL STANDARDS)

### 3.1 Touch & Ergonomics
- **Touch Target**: Minimum 44x44px for every interactive handle.
- **Bottom Anchor**: CTAs and WhatsApp floats MUST reside in the bottom 30% thumb zone.
- **Safe Area**: ALWAYS apply `padding-top: env(safe-area-inset-top)` and `padding-bottom: env(safe-area-inset-bottom)`.

### 3.2 Mobile Transitions
- **Modals**: ONLY use Slide-Up Bottom Sheets for mobile. Center popups are forbidden.
- **Drawer Animation**: `cubic-bezier(0.85, 0, 0.15, 1)` for smooth "SaaS Premium" feel.
- **Scroll**: Use `Lenis` or `GSAP ScrollSmoother` for 60FPS buttery interactions.

---

## 🧬 4. MOTION & DEPTH (V12/V16 INTEGRATION)

### 4.1 Atmospheric Depth
- **Parallax Scaling**: Foreground: 1.2x | Midground: 1.0x | Background: 0.8x.
- **Ocular Glow**: Use radial lighting pools at 50% opacity behind primary assets.

### 4.2 Physics-Based Animation (AOS)
- **Standard**: `{ duration: 1200, easing: 'ease-out-back', once: true }`.
- **Stagger**: Nav items and grid cards MUST have staggered entries (0.1s increments).

---
**DESIGN DNA V1.0 — Antigravity Authoritative Design Sync (2026-04-14)**
