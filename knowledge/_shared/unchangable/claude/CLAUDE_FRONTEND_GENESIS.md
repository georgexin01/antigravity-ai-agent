# 🏛️ CLAUDE FRONTEND GENESIS (V1.0)

This is the authoritative architectural blueprint for the **LAA Project Ecosystem**. All future web applications (Quiz-v2, Quiz-v3, Admin, etc.) MUST adhere to these connectivity and security standards.

---

## 🛰️ 1. DOCKER CONNECTIVITY PROTOCOL

To ensure consistent networking across different dev machines and Docker containers, the following configuration is MANDATORY:

### 1.1 Host Mapping
- **Authoritative API Gateway**: `http://zeta-groups.com:8000`
- **Why**: This hostname is mapped in the local `hosts` file to bypass internal Docker networking complexities and provide a stable endpoint for all `supabase-js` calls.

### 1.2 Environmental Variables (.env.development.localhost)
```bash
VITE_SUPABASE_URL=http://zeta-groups.com:8000
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_PROJECT_ID=5b65e9f4-0b66-4191-be7d-30f14647385f
```
- `VITE_PROJECT_ID`: Crucial anchor for Multi-Tenancy. It binds the frontend to a specific project scope within the shared Supabase instance.

---

## 🔒 2. AUTH HARDENING (JWT CONTEXT SWITCHING)

The Supabase `custom_access_token_hook` is the heart of our security. It injects `agent` roles and `project_id` into the JWT, but it requires a **Metadata Signal** from the frontend.

### 2.1 The "Genesis" Login Pattern
Every `authStore.login()` implementation MUST follow this 3-step sequence:

1.  **Standard Auth**: `supabase.auth.signInWithPassword(...)`
2.  **Metadata Signaling**: 
    If the current session's JWT does NOT match `VITE_PROJECT_ID`, you MUST trigger:
    ```typescript
    await supabase.auth.updateUser({
      data: { active_project_id: import.meta.env.VITE_PROJECT_ID }
    });
    ```
3.  **Identity Refresh**:
    Follow the update immediately with:
    ```typescript
    await supabase.auth.refreshSession();
    ```
    - **Result**: Supabase generates a NEW `access_token` where the Postgres hook has processed the `active_project_id` and injected the correct database roles (`admin`, `staff`, etc.).

---

## 📊 3. DATA ACCESS & SCHEMA BINDING

### 3.1 Strict Schema Targeting
To access project-specific data (e.g., questions, students), you must define a schema-bound client:

```typescript
// api/supabase.ts
export const supabase = createClient(URL, KEY, {
  db: { schema: 'quizLaa' } // Target the specific project schema
});

export const publicClient = createClient(URL, KEY, {
  db: { schema: 'public' } // Target standard auth/user tables
});
```

### 3.2 Verification Rule
- **Correct by Construction**: If you receive a `404 Not Found` or `406 Not Acceptable`, verify BOTH the `VITE_PROJECT_ID` and the `db.schema` setting. 
- **DB Debugging**: Use `SELECT get_current_role();` and `SELECT get_current_project_id();` in the terminal to verify the JWT claims are landing in Postgres correctly.

---

## ⚙️ 4. WORKFLOW STANDARDIZATION

- **Primary Driver**: `npm run dev` (Consolidated root command).
- **Verification**: All logic must be verified via `pnpm build` and terminal logs.
- **Credit Saving**: Never use `browser_subagent` for UI previews during active development.

---
**CLAUDE FRONTEND GENESIS V1.0 (2026-04-14)**
