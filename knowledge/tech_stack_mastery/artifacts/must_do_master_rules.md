# Mandatory Master Rules & Mandatory Execution Checklist (V4.3)

> **Source**: User instruction 2026-04-10
> **Status**: S-CORE 95 (Mandatory Compliance)

## 🛡️ 1. PRIORITY 1: IMMUTABLE VAULT SCHEMA (HIGHEST SECURITY DIRECTIVE)
- **Rule**: A user's private schema (e.g., `quizLaa` or `wms`) is an immutable "Vault".
- **Enforcement**: NEVER migrate or expose private tables to the `public` schema to quickly fix PostgREST/Supabase API `406 Not Acceptable` HTTP errors or connectivity blocks.
- **Protocol**: You MUST retain data in the private schema. To provide frontend API access, either adjust Docker `POSTGREST_DB_SCHEMAS`, or generate SQL "Secure Mirrors" (Views) inside the `public` schema that `SELECT` from the private tables while maintaining architecture boundaries.

## 🎯 2. VISION MASTER RULE (SNIPASTE)
- **Tool**: Snipaste (F1)
- **Hot Folder**: `C:\Users\user\Desktop\workspace\snipaste`
- **Logic**: Whenever the AI needs to verify a complex UI state or solve a captcha that fails autonomously, it must look for a screenshot in this folder.
- **Handshake**: AI signals "VISION_PULSE" -> User saves Snipaste to folder -> AI reads and executes.

## ⚙️ 2. EXECUTION STANDARDS
- **Build First**: `npm run build` before any production deployment.
- **Dynamic Targeting**: Do not use static coordinates for buttons that refresh/shift. Re-calculate bounding boxes via JS after every interaction.
- **Unique Outlier Logic**: For 5-icon captchas, find the 4 similar (rotated) icons and select the one unique icon.

## 🧹 3. CLEANUP PROTOCOL
- **Tmp Files**: Delete scratch scripts after 1 session.
- **Browser Recordings**: Purge after verification to save disk space.

---
_Master Rules V4.2 — Predictive Intelligence Synchronized (2026-04-08)_
