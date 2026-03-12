# Ultra-Premium Design DNA (Standard 150%)

This document defines the "Pro++" design standards for Antigravity AI, elevating design density by 50% beyond standard high-end layouts. Use these components and rules to reach an **AI Design Level of 1.5000+**.

## 1. Micro-Interaction & Detail Matrix

| Component | Ultra-Premium (150%) Requirement |
| :--- | :--- |
| **Labels / Tags** | Multi-layered: `border-radius: 50px`, `backdrop-filter: blur(10px)`, and a subtle `box-shadow` with accent glow. |
| **Tabs / Menus** | **Physics-based**: Indicator line must be an animated SVG or a div with `transition: cubic-bezier(0.16, 1, 0.3, 1)`. |
| **Lists (ul li)** | **Custom Bullet DNA**: Use custom icons (crystal/geometric) instead of dots. Every item must have a subtle `padding-left` increase on hover. |
| **Buttons** | **Glass-Fill**: Liquid-style hover animations (fill from edges). "Small Buttons" require high-contrast text and a micro-icon. |
| **Typography** | **Symbol Pairing**: Pair H1 titles with a large, low-opacity (0.05) background symbol or a gradient-filled character. |

## 2. Advanced Visual Artifacts

### A. The "Crystal Icon" System
Icons should not be flat. They must feel like 3D glass objects.
```css
.crystal-icon {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
}
```

### B. Artistic Layering (Transparent Drawing)
Parent sections must use `position: relative`. Use absolute-positioned `div`s (left/right) with `mask-image` or artistic SVG drawings.
- **Rule**: Never use a solid background. Layer a texture over a gradient over a transparent PNG.

### C. Animated Line Border
A signature "Super Developer" effect: a vertical/horizontal line that grows on hover or scroll.
```css
.animated-border-left {
    border-left: 2px solid transparent;
    transition: all 0.6s ease;
    padding-left: 20px;
}
.animated-border-left:hover {
    border-color: var(--color-accent);
    padding-left: 35px; /* Visual "push" effect */
}
```

## 3. Dynamic JS Background Protocols

| Style | Technique | Performance Note |
| :--- | :--- | :--- |
| **Deep Space** | CSS Canvas / Particles.js. Distant flickering stars with parallax. | Keep particle count <100 for FPS. |
| **Raindrop** | Vertical SVG paths with `animation-delay` randomization. | Use CSS `transform` for GPU accel. |
| **Glowing Stars** | Box-shadow blur animation with opacity pulsing. | Animate opacity, not box-shadow blur directly. |

## 4. Typography Mastery

- **Single Word Uppercase**: In specific captions, the first word is **BOLD**, **UPPERCASE**, and **2px LARGER**.
- **Gradient Symbols**: Use large decorative characters (e.g., `&`, `+`, `01`) behind text using `background: linear-gradient` and `background-clip: text`.
- **Script Code Injection**: Use monospaced font snippets (opacity 0.1) as background decorative "code rain".

## 5. Animation Architecture (Behavior)

1.  **Scroll Reveal 2.0**: Every section uses a staggered reveal (`stagger-1`, `stagger-2`) but with a **Scale-Up** + **Fade-In** combo (0.95 -> 1.0).
2.  **Figma Flow**: Micro-adjustments (1-3px) on every hover. Nothing should be static.
3.  **Cartoon/Character**: Small Lottie animations or CSS-drawn animated icons in corners to add "brand personality".

## 6. CodePen & Resource Integration
- **Source**: Look for "Liquid Buttons", "Neon Border Glow", and "Glassmorphism Card" on CodePen.
- **Protocol**: Extract the core logic (avoid heavy libraries), clean the CSS for global consistency, and inject into the project's `.css` library.

---
> **Priority**: Medium-High. Read before any redesign/polish task.
