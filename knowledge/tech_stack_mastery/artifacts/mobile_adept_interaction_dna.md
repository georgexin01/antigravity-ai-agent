# MOBILE ADEPT MASTER PROTOCOL (TOP PRIORITY)

This document codifies the core intelligence behind the Zeta Web V3 "Mobile Adept" responsive architecture. It is the **Gold Standard** for this project and must be inherited by all future updates and agents.

## 1. Vision: Native App Simulation

The goal is to move beyond simple "responsive stacking" and achieve a **Native App Feel**. Every interaction on a viewport below 768px must mirror high-end mobile application behaviors.

## 2. Core Architectural Principles

### A. The Modal Drawer (Navigation)

- **Entrance**: Use `cubic-bezier(0.85, 0, 0.15, 1)` for a smooth, high-tension slide.
- **Staggered Entry**: Nav items must not appear all at once. Use `.mobile-drawer.active .links a:nth-child(n)` with incrementing `transition-delay` (0.1s steps) to create a premium "ripple" entry.
- **Implicit Closure**: The drawer must close on three triggers:
  1. Internal "X" Close Button (`#drawerClose`).
  2. Backdrop Blur Overlay click.
  3. Navigation link click.
- **Scroll Lock**: The `body` element must have `overflow: hidden` while the drawer is active to prevent background scrolling jitters.

### B. Fluid Typography & Spacing

- **Clamp Protocol**: Use `clamp()` for headers to ensure they never exceed the viewport width but remain dominant on 390px-430px screens.
- **1-Column Stacking**: Any grid structure (2, 3, or 4 columns) must collapse into a robust 1-column layout on mobile, prioritizing vertical rhythm.

### C. Bottom-Fixed Calls to Action

- **Dynamic CTA**: The WhatsApp/Contact button should appear as the final, "fixed-like" anchor in the mobile drawer, ensuring it is always the most accessible touch point.

## 3. Visual DNA Standards

- **Backdrop Blur**: Use a minimum of `blur(40px)` for mobile overlays to ensure high contrast between the UI and content.
- **Micro-Shadows**: Mobile elements (cards) should use stronger, more localized shadows (`box-shadow: 0 10px 30px rgba(0,0,0,0.5)`) to compensate for the smaller screen size.

## 4. Maintenance Logic

When adding new sections or pages:

1. **Always** include the `.mobile-drawer` component with the `#drawerClose` ID.
2. **Never** allow horizontal scrolling; any overflow must be clipped or wrapped.
3. **Verify** that link staggering is maintained in `global.css`.

---

**Status**: TOP PRIORITY / CRYSTALLIZED
**Level**: 2.0.00 (God-Tier Mobile)
**Protocol ID**: ADEPT-V1-2026
