---
name: laa-project-snapshot
description: "Sovereign Blueprint & Project Snapshot — WebApp-LAA, Website-Agent, Admin-Panel (V15.1 Apex)"
triggers: ["laa project state", "quizLaa snapshot", "current architecture", "laa current state"]
phase: reference
model_hint: gemini-3-flash
version: 15.1
status: authoritative
---

# 🛡️ SOVEREIGN PROJECT SNAPSHOT (V15.1)

This node remains the **Ground Truth** for the LAA project ecosystem. All operations are strictly downstream of the **13 Apex Principles**.

## 🏗️ MONOREPO ARCHITECTURE
- **Admin Panel**: Vben 5.x / Vue 3 / Ant Design. Authority: `apps/web-antd`.
- **Student WebApp**: Vue 3 + Supabase. Authority: `webApp-LAA-quiz-v2`.
- **Public Website**: Sovereign PHP + REST. Authority: `website-LAA-agent`.

## ⚙️ DATABASE (quizLaa Schema)
- **Authority**: All business tables reside in the `quizLaa` schema (Principle 5).
- **FK Lock**: Cross-schema business FKs are forbidden (linked via email/mapping).
- **Casing Protocol**:
    - `quizLaa.*`: camelCase (quoted). e.g., `isDelete`, `userId`.
    - `public.*`: snake_case. e.g., `is_delete`, `auth_id`.

| Core Tables | Purpose | Key FK |
| :--- | :--- | :--- |
| `users` | Business Profiles | — |
| `lessons` | Course Content | — |
| `questions` | Quiz Logic | `lessonId → lessons` |
| `questionAnswers` | Attempts Snapshot | `userId → users` |

## 🛡️ CRITICAL DECISIONS (Recall)
- **webApp**: Two-query manual joins only (PostgREST embedded selects disabled).
- **webApp**: Options-API Bakery stores mandatory.
- **website**: UUID-only routing. Slugs are deprecated.
- **admin**: RPC-based user CRUD (`public.create_user`) for instant auth-sync.

## 🔴 KNOWN LOGIC DRIFTS (Bugs)
- **H1. Logout Stale Data**: Pinia stores do not reset on logout.
- **H2. Weak Guard**: Router guard only checks token presence.
- **H3. Hardcoded Creds**: Legacy agent1 defaults in `login.vue`.

## 🧪 APEX SYNC
Last Verified: 2026-04-17 (Peak Sovereign Integrity).
Any architectural change MUST update this snapshot immediately.
