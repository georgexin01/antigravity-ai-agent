# V12 VISIONARY DNA — LEVEL 7 MASTER STANDARD

> [!NOTE]
> **V12 Visionary** supersedes V11 Mastery for high-end, immersive, and 3D projects. It focuses on the "Ghost in the Machine" feel—depth, translucency, and cinematic motion.

---

## 1. CORE AESTHETIC PRINCIPLES

### 1.1 The "Pure Black" Canvas
*   **Background**: Always `#000000`. This creates infinite depth for WebGL and hides video borders.
*   **Contrast**: Ultra-high. Text in `#FFFFFF` or high-intensity brand colors.
*   **Atmosphere**: Use radial gradients (e.g., `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 80%)`) to create subtle lighting pools.

### 1.2 "Liquid Glass" (Glassmorphism 2.0)
*   **Blur**: `backdrop-filter: blur(20px) saturate(180%)`.
*   **Border**: `1px solid rgba(255,255,255,0.1)`.
*   **Background**: `rgba(0,0,0,0.4)`.
*   **Refraction**: Use shaders to create "glass warp" effects on scroll.

### 1.3 Cinematic Motion
*   **Frame Control**: Background motion must be "Locked Frame" (no camera movement) to prevent nausea and maintain focus.
*   **Scroll Intertia**: Use `Lenis` or `GSAP ScrollSmoother` for 60FPS buttery scrolls.
*   **Parallax**: Layer 3D assets to create depth (Foreground 1.2x, Midground 1.0x, Background 0.8x).

---

## 2. ENGINEERING STANDARDS

### 2.1 3D Dimensionality
*   **Canvas-First**: The main UI often lives *within* the Three.js scene using MSDF text.
*   **Shaders**: Apply GLSL frost/distortion shaders to the edges of the viewport to create an immersive "POV" feel.
*   **GPU Efficiency**: Use **Draco** for models and **Basis Universal (KTX2)** for textures. 

### 2.2 Micro-Interactions (The "Wow" Factor)
| Interaction | Specification |
|-------------|--------------|
| **Magnetic Cursor** | Custom SVG cursor with physics-based follow and "hover grow" on buttons. |
| **Magnetic Buttons** | Buttons that physically attract the cursor when within 40px range. |
| **Scroll Cam** | The camera path must be tied to scroll position (e.g., 0% = Front, 100% = Top Down). |
| **Spatial Audio** | Interactive audio layers (ambient hum + click triggers) managed via Web Worker. |

---

## 3. ASSET PIPELINE (LEVEL 7)

1.  **AI Art Direction**: Generate high-res base assets using Midjourney/Flux.
2.  **Immersive Motion**: Kling 3.0 for background loops (10s duration, seamless).
3.  **3D Translation**: Use Spline or Three.js to digitize the visionary concept.
4.  **Performance Check**: Ensure `npm run build` results in < 2.5MB total initial load (Lazy load the rest).

---

_DNA V12.0 Visionary — Master Designer Protocol (2026-04-02)_
_Status: ACTIVE. Target Site: Igloo-Level Immersion._
