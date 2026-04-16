---
name: tech-stack
description: "⚙️ TECH STACK DNA (V1.0) — THE UNIFIED ENGINEERING STANDARD"
triggers: ["tech stack", "engineering rules", "coding standards", "tech_stack"]
phase: constitutional
model_hint: gemini-3-flash
version: 1.0
---

# ⚙️ TECH STACK DNA (V1.0) — THE UNIFIED STANDARD

This document consolidates all high-end technical standards, data architectures, and engineering patterns. It replaces: `typescript_pinia_standard`, `pwa_offline_first_patterns`, `i18n_multilingual_mastery`, and `modular_component_registry`.

---

## 🏗️ 1. DATA ARCHITECTURE (TS + PINIA)

### 1.1 Mandatory Entity Pattern
Every entity (Product, User, Order) MUST include these 4 exports:
1. **Interface**: The database model (CamelCase).
2. **FormValues**: User input structure (excludes ID, Audit fields).
3. **Status Enum**: String literal union for states.
4. **Options**: Dropdown-ready label/value pairs with color mapping.

### 1.2 The Audit Mandate
Every record in the system MUST have:
- `id`: string (UUID or descriptive slug).
- `isDelete`: boolean (Soft-delete only. NEVER hard delete).
- `createdAt`: ISO 8601 string.
- `updatedAt`: ISO 8601 string.

---

## ⚡ 2. STORE & STATE PATTERNS (V13+)

### 2.1 The "Single Source" Rule
Always import types FROM the store that manages them.
- **Wrong**: `import { Product } from '@/types/product';`
- **Correct**: `import { useProductsStore, type Product } from '@/stores/products';`

### 2.2 Mutation Invalidation
Every store action that modifies data MUST increment a `version: ref(0)` counter to ensure global reactivity across the UI.

---

## 📱 3. PWA & OFFLINE-FIRST (MAX FIDELITY)

### 3.1 PWA Essentials
- **Meta-Viewport**: `width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover`.
- **Display**: `standalone` (to hide browser UI).
- **Status Bar**: `black-translucent` for iOS immersive feel.

### 3.2 Icon Governance
- **Requirement**: `192x192` and `512x512` icons with `maskable` purpose.
- **Favicon**: Always provide SVG + ICO fallback.

---

## 🌍 4. i18n & SEMANTIC MASTERING (MULTI-LANG)

### 4.1 Implementation Recipe
- **Plugin**: `legacy: false` (Required for Composition API).
- **Persistence**: Save selection to `localStorage`.
- **Reactive Strategy**: Any UI label derived from `t()` MUST be wrapped in `computed()`.

### 4.2 Translation Gating
- **Structural Strategy**: IDs and numbers in JS | Text in locale files.
- **Bilingual Intent**: Search EN matches CN keyword and vice versa.

---

## 🧱 5. COMPONENT STANDARDS

- **Size Limit**: Components > 200 lines MUST be split.
- **Async Safety**: Use `try/catch` on ALL API calls within stores/views.
- **Logic Isolation**: Keep views clean. Complex data fetching belongs in Pinia; complex UI toggles belong in Composables.

---
**TECH STACK V1.0 — Antigravity Authoritative Engineering Standard (2026-04-14)**
