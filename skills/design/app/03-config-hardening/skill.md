---
name: 03-config-hardening
description: "V1.0 Config Hardening: Vite, Tailwind v4, and Capacitor environmental locking."
step: 3
version: 1.0
---

# 🛡️ [03] Config Hardening — The Sovereign App Protocol

## 🎯 Objective
To ensure the build environment is stable and correctly configured for modern web app development.

## ⚙️ Configuration Standards
1.  **Vite**: Enable port locking (5173/5174) and `@` path aliasing.
2.  **Tailwind v4**: Direct CSS imports with `@theme` token definitions.
3.  **Capacitor**: Initialize with App ID and prepare for native API simulation (Camera, Geolocation).

## 🛠️ Validation Checklist
- [ ] Do `package.json` scripts include `dev`, `build`, and `type-check`?
- [ ] Is `tsconfig.json` correctly aliasing `src` to `@`?
- [ ] Are Tailwind theme colors synced with the `BLUEPRINT.md`?

---
*Premium App Design Node 03 — V1.0 Config Hardening*
