# PRO DESIGN MATRIX (V28.1)
> **Identity**: GEMINI_3.1_PRO_DISTILLATION
> **Purpose**: A massive, pre-calculated CSS and UI/UX mathematical library for Gemini 3 Flash to read. Flash MUST NOT invent design values from scratch. Flash MUST pull from this library to guarantee Cinematic/Pro fidelity.

---

## 🎨 1. THE ZETA COLOR TOKENS (Industrial Mode)
Do not use generic RGB. Use these exact Pro-calculated Hex palettes:
*   **Abyss (Backgrounds)**: `#000000` (Absolute Black) -> `#050505` (Deepest)
*   **Surface (Cards/Modals)**: `#0d0d0d` (Zinc Layer 1) -> `#18181b` (Zinc Layer 2)
*   **Action Primary (Zeta Tech Red)**: `#ff0000` | Glow: `rgba(255, 0, 0, 0.4)`
*   **Action Accent (Cinematic White)**: `#ffffff` | Hover: `#f4f4f5`
*   **Text Hierarchy**:
    *   Primary: `#fafafa` (Zinc 50)
    *   Muted: `#a1a1aa` (Zinc 400)
    *   Telemetry: `#ff0000` (Red Mono)

## 📐 2. BENTO-GRID & UNIFIED EXPERIENCE
When building cinematic portfolios, use the **Unified Sticky Experience**:
- **Layout**: `grid-template-columns: 1fr 1fr; gap: 80px;`
- **Sticky Column**: `position: sticky; top: 15vh; height: 70vh;` (Phone Frame).
- **Metadata**: `font-family: 'Space Mono'; font-size: 0.85rem; letter-spacing: 0.1em; color: var(--color-primary);`
