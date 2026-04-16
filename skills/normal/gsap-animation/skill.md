---
name: gsap-animation
description: "GSAP ANIMATION — LEVEL 7 CORE SKILL"
triggers: ["gsap animation", "gsap-animation", "skill"]
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

# GSAP ANIMATION — LEVEL 7 CORE SKILL

[!IMPORTANT]
Level 7 sites depend on Physics-based, scroll-driven interactions. GSAP is the industry standard for high-performance web animation.

---

## 1. CORE PLUGINS (LEVEL 7)

*   ScrollTrigger: For tying animations to scroll position.
*   SplitText: For premium staggered text reveals.
*   Observer: For scroll-speed-driven interactions.
*   CustomEase: For unique, branded motion curves (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 2. IMPLEMENTATION PATTERNS

### 2.1 The "Stitch" Text Reveal
```javascript
gsap.from(".char", {
  duration: 0.8,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
```

### 2.2 Scroll-Linked Parallax
```javascript
gsap.to(".parallax-bg", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    scrub: true
  }
});
```

---

## 3. AUDIT & POLISH

| Requirement | Audit Action |
|-------------|--------------|
| Zero Jitter | Use `will-change: transform` and `force3D: true`. |
| FPS Stability | Ensure no `width`, `height`, or `top/left/bottom/right` are animated. Use ONLY `x, y, scale, rotation`. |
| Mobile Performance | Disable heavy ScrollTrigger effects on mobile using `ScrollTrigger.matchMedia()`. |

---

Skill: GSAP Animation V1.0 (2026-04-02)
Status: ACTIVE. Current Target: 60FPS Buttery Motion.
