---
name: industrial-stores
description: "Step 05 — Industrial Pinia Stores. Standardizes relational, fail-closed stores with project-binding and identity filtering."
triggers: ["generate store", "new store", "relational store", "pinia logic"]
phase: 2-scaffold
version: 1.0
---

# 05-industrial-stores — Industrial Pinia Stores

Use this protocol to generate robust, relational stores that bind to the Sovereign project schema.

## 🚀 Steps

### 1. Type Foundry
- Create `src/types/<entity>.ts`.
- Export interfaces that represent the business record precisely.

### 2. Store Scaffolding
- Use `@supabase/supabase-js`.
- Implement `state` with reactive collections.
- Implement `actions` with `fail-closed` logic:
  - Verify `authStore.user` exists.
  - Inject the authoritative `userId` into filters.
  - Inject `VITE_PROJECT_ID` into all relational cross-schema joins.

### 3. Verification
- Verify store returns empty array on unauthorized access.
- Verify relational joins are binding correctly to the `quizLaa` schema.

---
**Protocol Status**: Step 05 Active | **Architect**: Claude-Frontend
