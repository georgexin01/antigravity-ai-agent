---
name: config-hardening
description: "Step 02 — Industrial Workspace Hardening. Centralizes all root .ts utilities in src/config/ and initializes the unified src/api/ layer."
triggers: ["config hardening", "industrial workspace", "src/config setup", "api layer init"]
phase: 1-foundation
version: 1.0
---

# 02-config-hardening — Industrial Workspace Hardening

Use this protocol to clinicaly clean the project root and establish the authoritative service layer.

## 🚀 Steps

### 1. Root Utility Migration
- Audit root for `.ts` utility files (except `vite.config.ts`).
- Create `src/config/`.
- Move utilities to `src/config/`.
- Re-route any internal `process.env` logic to use `process.cwd()` for robust CLI execution.

### 2. Service Layer Initialization
- Create `src/api/`.
- Deploy `apiClient.ts` (Axios) with native platform interceptors.
- Deploy `capacitorClient.ts` (Native Bridge) for cross-platform robustness.

### 3. Verification
- Verify `src/api/apiClient.ts` compiles.
- Verify `src/config/` contains all moved utilities.

---
**Protocol Status**: Step 02 Active | **Architect**: Claude-Frontend
