name: routing-logic
description: "Step 09 — Routing Logic. Standardizes dynamic route registration with built-in Auth Guards and Project Binding checks."
triggers: ["generate route", "new route", "update router", "route guard"]
phase: 3-ui
version: 1.0
---

# 09-routing-logic — Routing Logic

Use this protocol to register new sovereign modules with the dynamic Vue Router.

## 🚀 Steps

### 1. Route Registration
- Update `src/router/index.ts` or module-specific router files.
- Use `props: true` for ID-based detail routes.
- Implement **Auth Protection**:
  - Add `meta: { requiresAuth: true }`.
  - Ensure the `beforeEach` guard validates project-id binding.

### 2. Verification
- Verify unauthenticated users are redirected to login.
- Verify deep-links to unassigned content are intercepted.

---
**Protocol Status**: Step 09 Active | **Architect**: Claude-Frontend
