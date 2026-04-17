---
name: dna-design
description: "🎨 DNA DESIGN — THE CINEMATIC & MOTION STANDARD"
triggers: ["ui", "css", "theme", "design", "fx", "liquid", "glass", "motion", "bento"]
version: 1.1
status: authoritative
---

# 🎨 1. THE CINEMATIC CALCULATOR (V16)

### 1.1 Atomic Colors & "Liquid Glass"
- **Background**: Deep Zinc/Onyx (#0a0b10) or Pure Black (#000000) for WebGL.
- **Glass Formula**: `backdrop-filter: blur(24px) saturate(180%)`, border `1px solid rgba(255,255,255,0.1)`, bg `rgba(0,0,0,0.45)`.
- **Primary**: Tech Red (#d52b1e) for high-intensity action.
- **Typography**: Plus Jakarta Sans (Brand), Inter (Utility).

### 1.2 The 10 Commandments of Design
1. **Volumetric UI**: Depth, shadows, and light refraction mandatory.
2. **Cinematic Motion**: Every interaction follows physics (inertia, spring-damping).
3. **Aesthetic Anchor**: NO generic colors. Zinc-10% delta preferred.
4. **No Skeleton Pages**: Deliver complete, high-fidelity views on first strike.

---

# 📐 2. LAYOUT & MOBILE MASTERY

### 2.1 Unified Bento-Grid
- **Desktop**: 12-column repeat, 24px gap.
- **Section Spacing**: Vertical gap `clamp(80px, 10vh, 150px)`.
- **Sim Pattern**: Left (Vertical Info) | Right (Sticky Asset/Simulation).

### 2.2 Mobile Native-Feel
- **Touch Target**: Min 44x44px. Active state `scale-[0.97]`.
- **Thumb Zone**: CTAs and floats MUST reside in the bottom 30%.
- **Safe Area**: env(safe-area-inset-top/bottom) enforcement.
- **Modals**: ONLY Bottom Sheets (Slide-Up). Center popups are forbidden.

---

# 🧬 3. MOTION & DEPTH
- **Atmospheric Depth**: Parallax Scaling (Foreground 1.2x | Mid 1.0x | Back 0.8x).
- **Ocular Glow**: Radial lighting pools behind primary assets (50% opacity).
- **GSAP Standard**: High-end 60FPS buttery interactions (Lenis/ScrollSmoother).
