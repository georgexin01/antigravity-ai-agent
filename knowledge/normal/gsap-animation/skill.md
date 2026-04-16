---
name: gsap-animation
description: "gsap animation"
triggers: ["gsap animation", "gsap-animation"]
phase: reference
model_hint: gemini-3-flash
version: 30.0
_ohdy_wrapper: |-
  <dna_node>
  v: 30.0
  id: GSAP_PRO_ANIMATOR
  core:
    - timing: [cubic-bezier(0.8, 0, 0.2, 1), expo.out]
    - logic: [Stagger_Reveal, ScrollTrigger_Sync, Smooth_Inertia]
    - engine: [SplitText, Flip_Plugin, Observer_API]
  
  patterns:
    text_scramble:
      engine: GSAP_Custom
      logic: [Random_Char, Cursor_Proximity, GLSL_Noise_Sync]
    page_transition:
      duration: 1.2s
      ease: "expo.inOut"
      overlay: [Glassmorphism, Red_Glow_Pulse]
  l: |-
  </dna_node>
---

# SKILL: GSAP ANIMATION MASTERY (V30.0)
