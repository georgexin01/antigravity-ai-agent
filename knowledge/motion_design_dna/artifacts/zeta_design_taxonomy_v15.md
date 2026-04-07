# ZETA Advanced Design Taxonomy (V15)

This taxonomy defines the **Deep-Tier Architectural Hierarchy** and **Situational Mode Selection** that the AI uses to maintain "Level 10" design consistency across all ZETA Industrial projects.

## 🏛️ Deep-Tier Design Hierarchy (The 6 Layers)

| Layer | Component | standard | Interaction |
| :--- | :--- | :--- | :--- |
| **0. Atmosphere** | Texture | 8% Noise Overlay (Fixed) | Passive Grain |
| **1. Foundation** | Background | [P0-20] 10% Layered Depth | Solid Section Flow |
| **2. Structure** | Skeleton | 1800px Grid / 20px corners | Volumetric Shadow |
| **3. Dynamics** | Revelation | [P0-18] AOS 2.3.1 (Fade-Up) | Stable Entry |
| **4. Cinematic** | Focus | [P0-22] Canvas Scrollytelling | Scroll-Scrub (Manual) |
| **5. Reactive** | Micro-UX | [P0-03] Magnetic / Scramble | Hover-Driven |
| **6. Intelligence**| Content | Gemma-4 26B Logic Drafting | AI-Driven Context |

---

## 🌘 Situational Expansion (The "Mode" Matrix)

When a project is initialized, the AI automatically selects one or more **Modes**:

### 🏙️ MODE A: Hero Landing (Maximum Impact)
*   **Target**: First impression, Brand Hook.
*   **Motion**: Layer 4 (Canvas Scrollytelling) or Layer 3 (Three.js Hero-Scope).
*   **Interaction**: Scramble Text + Magnetic CTA.
*   **Restriction**: 3D motion MUST NOT exceed the Hero section bounds.

### 📱 MODE B: App Matrix (High Density)
*   **Target**: Portfolio, Service Grids, App Lists.
*   **Structure**: 4-6 Column Grids (Desktop) / 1 Column (Mobile).
*   **Design**: **Glassmorphism 3.0** (Inner shadows + 1px primary-color border-opacity).
*   **Interaction**: Staggered AOS + Active Hover Scaling.

### 🛡️ MODE C: Admin/SaaS (High Fidelity Data)
*   **Target**: Dashboards, Order Logs, Management.
*   **Structure**: Sidebar Nav + Header 2 (HeaderBack).
*   **Design**: Solid Layering + 20px Card Radius + Volumetric Shadows.
*   **Core UI**: Real checkboxes, high-precision forms.

### 📽️ MODE D: Product Cinema (Scrollytelling)
*   **Target**: Single-item cinematic deep dives.
*   **Motion**: 100% Scroll-Controlled Canvas (Layer 4).
*   **Asset**: 60-120 Frame Sequence (WebP).
*   **Constraint**: Container must be `sticky top-0 h-screen` for the scrollytelling duration.

---

## 🎨 Token & Color Logic (The 10% Protocol)

### Background Layering
- **Base (Hero/Core)**: `#050505`
- **Surface 1 (Separator)**: `#0c0c0c`
- **Surface 2 (Component)**: `#121212`
- **Surface 3 (Hover)**: `#1a1a1a`

### Interaction States
- **Button (Normal)**: `bg-primary`
- **Button (Active)**: `scale-95 + brightness-110`
- **Card (Hover)**: `border-primary/20 + translateY(-10px)`

---

## 🧠 AI Autonomous Deployment Loop

Before any code generation, the AI performs a self-check against this taxonomy:
1.  **MODE?** (A/B/C/D)
2.  **LAYERS?** (Check 0 through 5)
3.  **TOKEN SYNC?** (Check 10% offsets)
4.  **MOTION SCOPE?** (Verify Hero-only if Mode A)

---
*Created: 2026-04-07 | Version: V15 Alpha | Status: S-CORE 98*
