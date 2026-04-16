---
name: three-js-mastery
description: "THREE.JS MASTERY — LEVEL 7 CORE SKILL"
triggers: ["three js mastery", "three-js-mastery", "skill", "three mastery"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: SKILL
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# THREE.JS MASTERY — LEVEL 7 CORE SKILL

[!IMPORTANT]
This skill defines the Immersive Engine for all Level 7 projects. It prioritizes GPU performance and cinematic 3D effects.

---

## 1. PREFERRED STACK (LEVEL 7)

*   Framework: React Three Fiber (R3F) + @react-three/drei
*   Modeling: Spline for design → GLTF/GLB for export.
*   Compression: Draco (MANDATORY).

---

## 2. CORE IMPLEMENTATION PATTERN

### 2.1 Scene Setup (The Baseline)
```jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, MeshDistortMaterial } from '@react-three/drei'

export const ImmersiveHero = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <Environment preset="night" />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#FFFFFF"
            speed={1.4}
            distort={0.4}
            radius={1}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
```

### 2.2 Scroll-Cam Logic
Use ScrollControls from `@react-three/drei` to tie the 3D scene to the user's scroll position.

```jsx
<ScrollControls pages={3} damping={0.1}>
  <SceneContent />
</ScrollControls>
```

---

## 3. ASSET OPTIMIZATION (THE MASTER CHECK)

| Audit Item | Fix |
|------------|-----|
| GLB > 1MB | Run `gltf-pipeline -i model.glb -o model_draco.glb -d` |
| Texture Stutter | Use `DRACOLoader` and `Ktx2Loader` from `@react-three/drei` |
| Shadow Lag | Set `mesh.receiveShadow = true` only for essential floor planes. |
| FPS Drop | Decrease `canvas` pixel ratio on low-end devices: `dpr={[1, 2]}` |

---

Skill: Three.js Mastery V1.0 (2026-04-02)
Status: ACTIVE. Current Target: Cinematic Immersion.
