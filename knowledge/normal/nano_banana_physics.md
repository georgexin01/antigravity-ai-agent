# Nano Banana: Cinematic Scroll Physics (V27.2)

This protocol, derived from the **Nano Banana 2** cinematic workflow, defines the "High-Fidelity" standards for scroll-triggered animation and interactive physics. These rules are **MANDATORY** for all "Cinematic" or "Hybrid" missions.

---

## 🎞️ 1. CINEMATIC ENGINE: JPEG SEQUENCES

To ensure a frame-perfect, lag-free experience, the following rules apply:

1.  **NO .mp4 FOR SCROLL-SYNC**: Standard video tags (HTML5) are BANNED for scroll-synced animations due to playback/pause latency.
2.  **MANDATE: JPEG sequences**: Use a folder of high-quality `.jpg` frames (extracted from AI-generated videos e.g. Kling AI, Luma).
3.  **CANVAS RENDERING**: Use the HTML5 `<canvas>` element to render these frames dynamically based on the user's scroll depth (`scrollY`).
4.  **FRAME CACHING**: Pre-load the first 5-10 frames of any sequence to ensure a "Zeta-Fast" initial impression.

---

## 🌀 2. INTERACTIVE PHYSICS: SPRING DYNAMICS

All interactive elements (cursors, panels, hover-states) must use weighted physics:

1.  **MANDATE: Spring Physics**: Use GSAP or Framer-style spring logic (`stiffness: 100`, `damping: 20`).
2.  **PHYSICS TRACE**: Mouse velocity must affect the component's scale and glow-intensity (the **Ghost Intent** engine).
3.  **PARALLAX DEPTH**: Standard `translateY` parallax is BANNED as a standalone feature. It must be combined with a **Camera Zoom** or **Mesh Distortion** (Three.js/Canvas) to achieve the Level 11 "Wow" factor.

---

_Protocol Update: Nano Banana Physics (2026-04-04)_
_Status: ACTIVE GORILLA PROTOCOL._
