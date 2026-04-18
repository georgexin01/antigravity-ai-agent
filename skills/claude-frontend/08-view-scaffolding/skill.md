---
name: view-scaffolding
description: "Step 08 — View Scaffolding. Standardizes page-level containers, layout binding, and high-fidelity loading/empty states."
triggers: ["generate view", "new page", "scaffold container", "view layout"]
phase: 3-ui
version: 1.0
---

# 08-view-scaffolding — View Scaffolding

Use this protocol to clinicaly bootstrap a new page view within the Sovereign ecosystem.

## 🚀 Steps

### 1. Container Injection
- Create `src/views/<Module>/<Entity>View.vue`.
- Use a standardized base layout or shell.
- Implement **High-Fidelity Placeholders**:
  - Gray-scale loading blocks.
  - "No Results" icons for empty states.

### 2. Data Hydration
- Bind to the authoritative store (from Step 05).
- Use `onMounted` with `try-catch` error boundaries.
- Respect `fail-closed` redirects if data resolution fails.

---
**Protocol Status**: Step 08 Active | **Architect**: Claude-Frontend
