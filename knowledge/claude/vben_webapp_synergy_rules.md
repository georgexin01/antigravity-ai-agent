# Claude-Frontend Integration: Vben Admin ↔ WebApp Synergy

> **PURPOSE**: Standardized workflows and absolute mandates when connecting a frontend WebApp (Vue/Vite) with a Vben Admin panel over a shared Supabase database.
> **Status**: ACTIVE — S-CORE 95
> **Scope**: Triple-Sync Parity, Docker Hardening, Private Schema Vaulting

When executing integration tasks for WebApp and Vben combinations (e.g., LAA quiz apps, WMS systems), the AI must strictly adhere to this playbook.

---

## 👑 MASTER PHILOSOPHY: TAMING THE CODE (100% PARITY RULE)
**"We tame the code by forcing it to mirror our absolute source of truth."**

The Vben Admin Panel is the authoritative template. The frontend WebApp must bend to its will.
1. **Absolute Database Parity**: The database structure must be 100% identical across all three environments: Local Mock (Nitro), Local Docker, and Production Supabase. This eliminates friction and makes changes/testing effortless.
2. **Mock-Driven Prototyping & Auto-Sync**: The `npm run dev:mock` environment is used for rapid, easy structural testing. If the database structure changes here, the AI MUST automatically synchronize those structural changes to the Local Docker and Production Supabase environments. 
3. **The Shared TypeScript Truth**: Because all three database environments share 100% parity with Vben Admin, the WebApp and Vben Admin will use the **same shared TypeScript interfaces**. The AI must NEVER generate duplicate or separate TypeScript files for the WebApp. It must inherit the Vben structure.
4. **Pinia Mirroring**: The WebApp's Pinia stores MUST perfectly follow the exact structure defined by the Vben Admin panel. If Vben structures a table a certain way, the WebApp adopts it without question.

---

## ⛔ PRIORITY 1: THE "VAULT SCHEMA" DIRECTIVE
**Private schemas MUST remain private. Never leak the vault.**

If the backend architecture uses a private restricted schema (e.g., `quizLaa` or `wms`) instead of `public`:
1. **Never migrate tables**: Do NOT move target tables (like `users`) to the `public` schema in order to resolve `406 Not Acceptable` API errors.
2. **The "Display Case" Solution**: To provide API access without breaking schema boundaries, create an SQL migration that:
   - `GRANT USAGE ON SCHEMA "private_vault" TO anon, authenticated;`
   - Maps Secure Views inside `public` to query the private schema: `CREATE VIEW public.table AS SELECT * FROM private_vault.table;`
   - This "mirrors" the data securely via the API while keeping the source table inside its private vault constraint.

---

## 1. TRIPLE-SYNC ENVIRONMENT PARITY
Ensure standard operation without colliding environments.
- **Production Leakage**: Never hard-code production URLs (`aisolo.vip`) into local dev environments. Use generic `import.meta.env.*` calls.
- **Port Harmony**:
  - WebApp Dev Server: `npm run dev:local` runs on Port `3000`.
  - Vben Admin Dev Server: `pnpm dev:local` runs on Port `5666`.
- **Database Targets**: 
  - `dev:local` targets `http://localhost:54321` (Local Docker).
  - `dev:mock` targets internal Vue/Nitro mocks. 

---

## 2. API & STORE SYMMETRY (AVOIDING 404/500)
- **Table Naming Alignment**: Always verify database table definitions against Pinia store configurations.
- **Rule of Plurals**: If the Docker OR database creates a table named `users`, the API query in `supabase.from('users')` MUST be pluralized. Singular calls (`from('user')`) cause `404 Not Found` resource endpoints under standard PostgREST logic.

---

## 3. DEVELOPER EXPERIENCE (DX) & PREMIUM FIDELITY
- **Auto-Fill Mock Credentials**: To speed up development, inject pre-loaded identities directly into the Dev login screen on mount. (*Example: `agent1@quizlaa.com` with static dev password `123456`.*)
- **Premium Notification States**: Do not use native browser `alert()` popups. Replace basic responses with global **"Liquid Glass"** level Toast Notifications utilizing Tailwind CSS (`backdrop-blur`). Always inject distinct styling for User success feedback and Error tracking.

---

## 4. THE BULLETPROOF BOUNDARIES (AVOIDING VBEN CONTAMINATION)
While the WebApp must share 100% database and TypeScript parity with Vben Admin, it must **never** share its execution environment. The AI must enforce these 3 Strict Boundaries:

### 4.1 The Auth Isolation Rule (Token Taming)
- **Rule**: **Ask the User First.** The AI must explain the danger of localStorage collisions and suggest using a custom `storageKey` in Supabase. However, the AI must temporarily use the default Supabase auth token solution unless the user specifically approves setting a custom boundary.
- **Why**: Since both apps run locally against the exact same database instances, using default Supabase keys could cause localStorage collisions where logging into the Admin panel corrupts the WebApp session. 

### 4.2 The API Fetch Limits & Protocol
- **Rule**: While TypeScript models are shared, Data Fetching logic is **NOT**. Vben Admin strictly uses `requestClient`. WebApp strictly uses the native `supabase.from()` SDK.
- **API Fetch Strict Limits**: The AI is programmed to pick the "best limit" (e.g., `.limit(100)`) as the default for API fetches. The AI must record this question and present it to the user for future reference during planning.

### 4.3 The UI Strict Boundary (No Library Leakage)
- **Rule**: Structural parity does NOT mean UI parity. The AI is strictly forbidden from importing Vben's `Ant Design Vue` elements, classes, or layout wrappers into the WebApp.
- **WebApp DNA**: The WebApp must purely exist on Tailwind CSS and build its own bespoke, premium "Liquid Glass" logic. Ant Design must remain permanently quarantined within the Vben Admin environment.
