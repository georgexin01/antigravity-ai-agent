# LEVEL 7 MASTER TEST PROTOCOL (V0.5)

> [!CAUTION]
> Level 7 designs heavily use WebGL and GPU power. Projects MUST pass these audits to ensure accessibility and performance.

---

## 1. PERFORMANCE BENCHMARKS (Step 1 — Engineering)

### 1.1 Rendering Stability
*   **Target FPS**: Consistent 60 FPS on 1920x1080.
*   **GPU Memory**: Main canvas should not exceed 150MB VRAM on initial load.
*   **Asset Load**:
    *   **Low Connection**: Must load a static "Skeleton Frame" within 2s.
    *   **High Connection**: Must stream 3D models and high-res video within 5s.

### 1.2 Optimization Checklist
- [ ] **Draco Compression**: Every GLB/GLTF file must use Draco (`0-1` compression level).
- [ ] **TEXTURE_BASIS**: Every texture must be in Basis/KTX2 for GPU-native decoding.
- [ ] **Web Workers**: Heavy JS calculation (physics, complex audio) MUST run on separate threads.

---

## 2. IMMERSION AUDIT (Step 2 — Visual)

### 2.1 The "Living" Environment
*   **Scroll-Cam Mapping**: Verify that scrolling through the page provides a logical sequence of camera movements (e.g., zoom in on product, pan to tech specs).
*   **Physics Interaction**: Verify that interactive elements have "Momentum" and "Friction" using GSAP Physics2D or InertiaPlugin.
*   **The Look**: No standard browser scrollbars. All scrolling must be custom or hidden to maintain the "Application" feel.

### 2.2 Visual Continuity
*   **Shader Sync**: If multiple shaders are used, they must share the same "Time" uniform to synchronize distortion/liquid effects.
*   **Motion Flow**: Background video transitions must be seamless loops with zero "stutter" at the loop point.

---

## 3. MASTER LEVEL 7 CHECKLIST

| Requirement | Threshold | Audit Action |
|-------------|-----------|--------------|
| **Interactive 3D Scene** | Must respond to cursor move or scroll | `browser_subagent` hover test |
| **Micro-Animations** | Hover, click, and transition effects | `browser_subagent` animation verify |
| **Asset Size** | Total initial bundle < 3MB | Network tab check |
| **FPS Drop** | Zero drops below 30FPS during scroll | `requestAnimationFrame` monitor |
| **Spatial Audio** | Audio panning based on object position | Manual console/logic check |

---

_Test Protocol: Level 7 Master — Engineering Excellence (2026-04-02)_
_Status: ACTIVE. Current Target: 60FPS Immersive Fidelity._
