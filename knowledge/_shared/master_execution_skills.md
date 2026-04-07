# Master Execution & Cache: Shared Skills (V27.0)

> **Identity**: EXECUTION_MASTER_V27.0
> **Mandate**: Maximize cycle efficiency via Batch Waves and Instant Context Loading.
> **Scope**: Universal application across all AI modes.

---

## ⚡ 1. SESSION WARM-UP CACHE (Instant Context)
Read this first (10 tokens) to restore project state without full directory re-scans.
- **Last Session**: [Date], [Project], [Mode Identity].
- **State**: [Percentage Complete], [Next Action Required].
- **Rule**: Update at the END of every session; trim old entries to < 30 lines.

---
## ⚡ 1. GLOBAL MICRO-DELEGATE (Token Saver)
**Rule**: Cloud Orchestrator MUST NOT process unformatted bulk text >100 lines (e.g., raw JSON dumps, sprawling system logs).
**Action**: If User pastes block data, Cloud AI triggers Local Gemma-4 -> `Gemma-4 parses bulk data` -> `Gemma-4 returns only the minimal extracted logic (e.g. 3 lines)`. Cloud AI resumes processing.

---

## 🌊 2. BATCH WAVES (Speed Multiplier)
**Mandate**: Serial edits strictly forbidden for multi-file tasks.
1. **PLAN**: Map dependencies.
2. **BATCH**: Group targets into parallel scopes.
3. **PARALLEL LIMIT (RAM-Safe)**: 
   - `BOOT_CHECK`: `$ Get-CimInstance Win32_OperatingSystem | Select TotalVisibleMemorySize, FreePhysicalMemory`
   - `IF <4GB` -> 1 Tool (Serial)
   - `IF 4-8GB` -> 2 Tools
   - `IF >8GB` -> 3 Tools. Max 3 if Gemma-4 model active (17GB footprint).
4. **JIT INGESTION**: Use `grep_search` locally. Full file `view_file` only when absolutely necessary.
5. **SINGLE VERIFY**: Run Build/Lint exactly once after wave finishes.

### Wave Template (Vue/Vite Standard):
- **Wave A**: Types/Config.
- **Wave B**: Stores/Composables.
- **Wave C**: Views/Components.
- **Wave D**: Router/Main.

---

## 🛠️ 3. CORE EXECUTE SKILLS
`FLOW`: PLAN -> BATCH -> EXECUTE -> AUDIT.

---
_Execution Master V28.1 — Logic Compressed (2026-04-07)_
