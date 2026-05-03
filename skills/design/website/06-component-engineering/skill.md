---
name: 06-component-engineering
description: "High-Density Component Engineering: Designing modular car cards, glass panels, and interactive grids with focus on 3D depth and tactile feedback."
step: 6
version: 1.0
---

# 💎 [06] Component Engineering — The Tactile Engine

## 🎯 Objective
To build UI components that feel "Solid" and "High-End". Every card, button, and input must follow the 3D-depth and tactile rules of the Sovereign Design System.

## 📖 The Protocol
1.  **The "Premium Glass" Standard**:
    - Background: `rgba(255, 255, 255, 0.05)`.
    - Blur: `20px`.
    - Border: `1px solid rgba(255, 255, 255, 0.1)`.
    - Shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`.
2.  **3D Depth & Elevation**:
    - Use `:hover` states to elevate components (`transform: translateY(-5px)`).
    - Increase shadow intensity on hover for a "lifting" effect.
3.  **Tactile Buttons & Inputs**:
    - Add `active:scale-95` to all buttons for immediate tactile feedback.
    - Style inputs with `bg-white-05` and a "Glow" on focus.
4.  **Grid Systems**:
    - Use `display: grid` or `flex` with consistent gaps (e.g., `gap: 30px`).
    - Ensure cards in a grid have uniform height and spacing.

## 📦 Code Vault: The Premium Car Card

```html
<article class="premium-card premium-glass overflow-hidden">
    <div class="card-image relative">
        <img src="/images/car.jpg" class="w-full h-250 object-cover" loading="lazy">
        <div class="card-badge absolute top-20 right-20 bg-primary px-15 py-5 rounded-10 text-white fs-12 fw-7">
            Verified
        </div>
    </div>
    <div class="card-content p-25">
        <h4 class="text-white fs-22 fw-8">Honda Civic RS</h4>
        <p class="text-white opacity-60 fs-14 mt-5">2023 • 5,000 km • Automatic</p>
        
        <div class="flex justify-between align-center mt-20">
            <span class="fs-24 fw-8 text-primary">RM 92,800</span>
            <a href="/car/1" class="btn-premium py-10 px-20 fs-14">View Details</a>
        </div>
    </div>
</article>
```

## 🛠️ Validation Checklist
- [ ] Do glass panels have `backdrop-filter`?
- [ ] Is there tactile feedback (`active:scale-95`) on buttons?
- [ ] Do cards have consistent shadows and border-radius (20px)?
- [ ] Is the spacing (`padding`/`margin`) consistent across components?

---
*Premium Design Node 06 — Component Engineering*
