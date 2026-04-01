# 🧠 Global Auto-Learning & Fixed Rules Vault

> **STATUS**: ACTIVE
> **PURPOSE**: Autonomous background system for **ALL MODES** (Normal, Claude, NextJS, Websites, Apps) to record chat context, solve recurring problems, track important changes, and convert repeated knowledge into strict, "Fixed Rules". 

---

## 1. DYNAMIC LEARNING LEDGER (Transient Memory)
*This section records active problems and recent important changes picked up from regular chat. The AI should continuously prune or upgrade these entries.*

### 📝 Current Active Learnings
- **[2026-04-01] Vben 5 Vite Cache Issue**: Mass deleting files (stores/types) without restarting the Vite dev server (`pnpm dev:local`) causes internal 500 router crashes and 404s due to stale dependency graphs. **Solution**: Force restart `pnpm dev:local` after destructive cleanups. *(Candidate for Fixed Rule upgrade).*

---

## 2. FIXED RULES VAULT (Permanent Immutable Laws)
*Every single rule in this section MUST be parsed and executed by the AI whenever the Master Rules trigger this vault (which is mandated for every session in Phase 1).*

### 🛑 Fixed Rule 1: The User Authenticator Shield [Mode: ALL / Vben]
**Condition**: Any time the user asks to "clean all modules", "wipe database", or do mass destructive actions.
**Execution**: The **User Authenticator module** (`src/views/_core/authentication`, `src/api/auth`, `src/stores/auth`, etc.) is strictly immune. **NEVER** delete it, even if the user forgets to exclude it from their prompt.

### 🛑 Fixed Rule 2: Interactive Schema Consultation (Pre-Flight) [Mode: VBEN ADMIN]
**Condition**: Any time the user asks to create a "new module".
**Execution**: The AI MUST pause. It must ask the user what database table and columns to use, proactively recommend standard admin columns (status, is_delete), and WAIT for explicit confirmation before writing any code (Step 1 of the 14-Step Pipeline).

---

## 3. AUTO-UPGRADE PROTOCOL (Background Maintenance)
Every session, the AI must autonomously:
1. Scan the chat for repetitive tweaks, preferred workflows, or persistent bugs across ANY mode.
2. Log them into the **Dynamic Learning Ledger**.
3. If a ledger item is repeatedly proven useful and stable, extract it and move it into the **Fixed Rules Vault**.
4. Delete obsolete transient notes to keep token consumption minimal.
