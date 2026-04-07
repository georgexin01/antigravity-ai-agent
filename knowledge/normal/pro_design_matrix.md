# PRO DESIGN MATRIX (V28.1)
> **Identity**: GEMINI_3.1_PRO_DISTILLATION
> **Purpose**: A massive, pre-calculated CSS and UI/UX mathematical library for Gemini 3 Flash to read. Flash MUST NOT invent design values from scratch. Flash MUST pull from this library to guarantee Cinematic/Pro fidelity.

---

## 🎨 1. THE ZETA COLOR TOKENS (Industrial Mode)
Do not use generic RGB. Use these exact Pro-calculated Hex palettes:
*   **Abyss (Backgrounds)**: `#09090b` (Zinc 950) -> `#18181b` (Zinc 900)
*   **Surface (Cards/Modals)**: `#27272a` (Zinc 800) -> `#3f3f46` (Zinc 700)
*   **Action Primary (Sovereign Blue)**: `#3b82f6` (Blue 500) | Hover: `#60a5fa`
*   **Action Accent (Neon Void)**: `#8b5cf6` (Purple 500) | Hover: `#a855f7`
*   **Text Hierarchy**:
    *   Primary: `#fafafa` (Zinc 50)
    *   Muted: `#a1a1aa` (Zinc 400)
    *   Telemetry: `#52525b` (Zinc 600)

## 📐 2. BENTO-GRID MATHEMATICS
When building dashboards, use the asymmetrical Bento-Box architecture:
- **Grid Container**: `display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;`
- **Hero Span**: `grid-column: span 2;` (On desktop only `>1024px`).
- **Internal Padding**: `padding: 2rem;` (Cards must breathe).
- **Corner Radii (The App Look)**: `border-radius: 24px;` (Outer) -> `16px` (Inner buttons).

## 🪟 3. ADVANCED GLASS & SHADOWS
- **Neo-Glassmorphism**: 
    `background: linear-gradient(145deg, rgba(39,39,42,0.6) 0%, rgba(24,24,27,0.8) 100%);`
    `backdrop-filter: blur(24px) saturate(150%);`
    `border: 1px solid rgba(250,250,250, 0.08);`
- **Depth Shadow (Elevation 1)**: `box-shadow: 0 4px 20px -2px rgba(0,0,0,0.4);`
- **Glint Shadow (Elevation 2 - Hover)**: `box-shadow: 0 12px 32px -4px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.1);`

## 🎬 4. MICRO-INTERACTIONS (Motion DNA)
Always inject these interaction physics:
- **Magnetic Buttons**: `transform: translateY(-2px) scale(1.02); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);` (Slight bounce out).
- **Fade-Up Entrance**: `animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;`
    *   `@keyframes fadeUp { 0% { opacity: 0; transform: translateY(30px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }`
- **Text Reveal (Scramble/Wipe)**: `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);`

## 🔠 5. PRO TYPOGRAPHY (Tracking & Leading)
Never use default spacing.
- **H1 (Display)**: `font-size: 4.5rem; line-height: 1.1; letter-spacing: -0.04em; font-weight: 800;`
- **H2 (Section)**: `font-size: 2.5rem; line-height: 1.2; letter-spacing: -0.02em; font-weight: 700;`
- **Body & Forms**: `font-size: 1.125rem; line-height: 1.6; letter-spacing: 0em; font-weight: 400;`
- **Telemetry/Labels**: `font-family: 'Space Mono', monospace; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em;`
