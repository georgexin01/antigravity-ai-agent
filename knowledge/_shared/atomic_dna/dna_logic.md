---
name: dna-logic
description: "⚡ DNA LOGIC — TS, PINIA & ENGINEERING STANDARDS"
triggers: ["typescript", "ts", "pinia", "store", "state", "entity", "component", "quality", "logic"]
version: 1.1
status: authoritative
---

# ⚡ 1. DATA ARCHITECTURE (TS + PINIA)

### 1.1 Mandatory Entity Pattern
Every entity (Product, User, etc.) MUST include these 4 exports:
1. **Interface**: The database model (CamelCase).
2. **FormValues**: User input structure (excludes ID, Audit fields).
3. **Status Enum**: String literal union for states.
4. **Options**: Dropdown-ready label/value pairs with color mapping.

### 1.2 The Audit Mandate
Every record MUST have: `id` (UUID), `isDelete` (Soft-delete), `createdAt`, `updatedAt` (ISO 8601).

### 1.3 Store & State Patterns
- **Single Source**: Import types FROM the store that manages them.
- **Mutation Invalidation**: Every store action MUST increment a `version: ref(0)` counter.
- **Logic Isolation**: Keep views clean. Complex fetching in Pinia; complex UI toggles in Composables.

---

# 🧱 2. ENGINEERING STANDARDS & GATES (V27+)

### 2.1 Component & Build Rules
- **Size Limit**: Components > 200 lines MUST be split.
- **Async Safety**: Use `try/catch` on ALL API calls in stores/views.
- **Zero Error Policy**: `npm run build` must have zero errors.

### 2.2 Quantum Quality Gates
- **Mobile Viewport**: MUST be fixed `width=412`.
- **AOS Standard**: `{ duration: 1200, easing: 'ease-out-back', once: true }`.
- **Archetype Classification**: 
    - **"website"**: Multi-Page (`.html`).
    - **"landing site"**: Single-Page.
    - **"app"**: Vue 3 + Vite + Pinia + Tailwind.

### 2.3 PWA Standards
- **Essentials**: `standalone` mode, `black-translucent` status bar, maskable icons.
- **Favicon**: Always provide SVG + ICO fallback.
