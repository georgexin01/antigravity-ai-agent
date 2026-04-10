# LAA Frontend Building Protocol V2: Master AI Instructions

> **Origin**: Vben + Bakery DNA Synthesis (2026-04-10)
> **Status**: S-CORE 100 (Immutable Architectural Standard)

## 🎯 The Core Philosophy: "Sync-First & Hybrid-Ready"
All LAA frontend projects must be built as a specialized extension of the Vben Admin ecosystem. They must be capable of switching between Shared Dev, Local Docker, and Nitro Mock without structural changes.

## 🚀 The 5-Step High-Fidelity Flow

### Step 1: Readiness & Vben Sync (*)
- **Action**: Verify connection strings in `.env.development` match `apps/web-antd`.
- **Action**: Check `quizLaa` schema for naming consistency.
- **(*) AI Note**: *Cohesion between the admin panel and the client app is non-negotiable. Always treat Vben as the source of truth for schema names.*

### Step 2: Modeling (The Blueprint) (*)
- **Action**: Define explicit interfaces in `src/types/`.
- **Action**: Separation of concerns: Request types vs. Response types.
- **(*) AI Note**: *Following the Bakery-v2 pattern of explicit models prevents UI "jitter" and type-safety gaps when iterating on the backend.*

### Step 3: Courier Configuration (API Client) (*)
- **Action**: Use `src/api/request.ts` (Axios) with data unwrapping interceptors.
- **Action**: Normalize error messages across all environments.
- **(*) AI Note**: *A thin API layer with robust interceptors keeps the Stores clean of boilerplate code.*

### Step 4: The Coordination Layer (Stores) (*)
- **Action**: Action-oriented Pinia stores with `isMock` toggles.
- **Action**: Stores must handle all "Dirty Work" (formatting, sorting, persistence).
- **(*) AI Note**: *Keeping business logic in the store makes the Views purely declarative. A page should simply say "store.loadData()" and show the results.*

### Step 5: Interface Hardening (The UX) (*)
- **Action**: Mandatory Loading Skeletons for every async fetch.
- **Action**: Mandatory Empty States for zero-result scenarios.
- **(*) AI Note**: *UX Premium feel is found in the "Transitions." Users should never see a flickering or blank screen.*

---

## 🤖 AI Execution Guardrails
1.  **Iterative Mode**: Present each step to the user before moving to the next.
2.  **Build Enforcement**: Always run `npm run build` after any multi-file change to verify type integrity.
3.  **Notation Rule**: Use `(*)` in logs and responses to indicate context-deep architectural decisions.

---
_V2.0 Intelligence Pulse — Hardened for ZETA IT / LAA Ecosystem (2026-04-10)_
