# Web Dev Master Rules (V28.0)

> **Identity**: BOREALIS_BEAR_V7 (Normal Link)
> **Context**: Frontend Web Development, UI/UX, Design Systems.
> **Source**: Decoupled from Global Root to optimize system speed.

---

## 🎨 1. THE 10 COMMANDMENTS OF DESIGN (LOVES/HATES)

### 🟢 AUTOMATICALLY APPLY (LOVES):
1. Dark gradient headers (Off-black/Zinc).
2. White content cards with 16-20px rounded corners.
3. Plus Jakarta Sans (Primary), Inter (Secondary).
4. Bottom sheet modals for mobile.
5. Glassmorphism on dark backgrounds.
6. Subtle shadow drops (`shadow-sm` / `shadow-md`).
7. Micro-interactions (hover scales, fade-ups).
8. Mobile-first spacing (16px padding, 12px gap).

### 🔴 AUTOMATICALLY BLOCK (HATES):
1. Flat, boring layouts with zero depth.
2. Aggressive/Neon colors outside of the primary brand scope.
3. Tiny, unreadable text (<14px).
4. Cluttered sidebars on mobile.
5. Center-popup modals on mobile (use bottom sheets instead).
6. Skeleton pages (Build complete views with real layout, no "Coming Soon" empty spaces).
7. Generic Bootstrap styling.
8. Custom liquid/follower cursors (High friction, poor UX).

---

## ⚡ 2. FRONTEND TECHNICAL STANDARDS

### The PWA/Meta Standard:
- **Meta Tags**: `<title>`, `<meta description>`, `<meta og:title>`, `<meta og:image>` on every page.
- **PWA Requirement**: `manifest.json`, `registerSW`, icons (192, 512), theme-color.
- **Favicon**: Standard `/favicon.ico` + `/apple-touch-icon.png`.

### The CSS/Tailwind Standard:
- **Design Tokens**: Defined in `@theme` block FIRST. No hardcoded colors like `bg-[#FF6B35]`.
- **Background Anchor**: The `body` MUST use a fixed linear gradient (Slate-Dark → True Black) `linear-gradient(180deg, #1a1a1a 0%, #000000 100%) fixed;`.
- **Texture Ban**: NEVER use noisy, grainy, or sandy textures. Glass/gradients only.

### The Vue/Pinia Standard:
- **Component Size**: Single-responsibility. Split if >200 lines.
- **i18n**: If multilingual, use `vue-i18n`, locale files, and `<i18n>` blocks. Zero mixing (100% one language).
- **Stores**: Define with setup syntax. Include `localStorage` persistence where required.
- **Async Handling**: `try/catch` on all APIs. Skeleton or spinner while loading. Error boundary toast on failure.

---

## 📱 3. RESPONSIVE MASTERY
### The 412px Mobile Viewport:
- **Mandate**: Mobile viewport MUST use `width=412` (NOT `device-width`).
- **Syntax**: `<meta name="viewport" content="width=412, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />`
- **Why**: `device-width` causes oversized layouts on real phones due to OS display zoom. 412px guarantees pixel-perfect mapping to Chrome F12 simulation (S20 Ultra / Pixel sizing).
- **Touch Targets**: Minimum 44x44px.

---

## 🧬 3.5 THE PRO-TO-FLASH DISTILLATION (Math of Design)
Gemini 3 Flash runs fastest when given absolute mathematical constants. 
- **CRITICAL RULE**: Before you generate any HTML/CSS/UI code, you MUST run a `view_file` on `knowledge/normal/pro_design_matrix.md`.
- That file contains the "Super Large Base" of Gemini 3.1 Pro's CSS calculations (Colors, Shadows, Glassmorphism, Bento-Grids). Read it and copy those exact HEX codes and animations into your frontend. Do not invent your own UI logic.

---

## 🔌 3.6 VIRTUAL MCP MODULES (Acceleration Engines)
If the AI cannot download a physical Model Context Protocol (MCP), it WILL emulate them flawlessly by triggering these execution modules during web generation:

### ⚡ Module A: The "Stitch AI" Design Protocol
When building Vue/Vite or HTML apps, Gemini 3 Flash must behave like the **Stitch MCP**:
1. **Raw Chassis**: Build the structural grid first (No styling).
2. **Glass Injection**: Overlay the 3.5 Math Design variables (Bento-box formatting, off-black zinc).
3. **Motion Pulse**: Add AOS scroll-animations and hover-states as the final layer.
*(Result: Looks exactly like a top-tier Stitch AI generated template, but built instantly by local code).*

### ⚡ Module B: The "Google Studio" Workflow Protocol
When generating massive applications, emulate the **Google Studio MCP**:
1. **Zero-Token Scaffolding**: Never write boilerplate CSS or basic HTML wrappers. Skip directly to writing the complex reactive logic in Pinia/Vue.
2. **Architectural Readout**: Provide a lightning-fast 'Preview' of the UI via Atomic Markdown before writing a single line of code, allowing the user to approve the visual direction instantly.

---

## 🎬 4. CINEMATIC HIERARCHY (ZETA V4 / V16 SINGULARITY)

### The 6 Layers of Depth:
1. **Atmosphere**: 8% Noise Overlay (Fixed, unless full-motion applied).
2. **Foundation**: Solid theme colors with 10% deltas for layer separation. Base (#050505) → Surface 1 (#0c0c0c) → Surface 2 (#121212).
3. **Structure**: 1800px max grid width.
4. **Dynamics**: AOS 2.3.1 (Fade-Up) initialization on scroll entry.
5. **Cinematic Focus**: Canvas Scrollytelling for hero elements.
6. **Reactive**: Hover micro-interactions (Magnetic tags, scramble text).

### AOS Standardization:
- **Default Entry**: Fade-up on scroll.
- **Config**: `{ duration: 1200, easing: 'ease-out-back', once: true }`.

### Motion Containment:
- Complex 3D / Videos MUST be confined to the **Hero Display** div. Stop using global/fixed backgrounds for motion unless executing a "Product Cinema" scrollytelling workflow.

---

_Web Dev Master Rules V28.0 — Extracted for High Velocity (2026-04-07)_
