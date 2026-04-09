# Master Execution & Cache: Shared Skills (V27.0)

> **Identity**: EXECUTION_MASTER_V27.0
> **Mandate**: Maximize cycle efficiency via Batch Waves and Instant Context Loading.
> **Scope**: Universal application across all AI modes.

---

## ⚡ 0. HARDWARE IDENTITY LOCK (Instant Boot)
**Mandate**: Bypasses system scans if the current hardware matches a verified entry in `hardware_ledger.md`.
1. **CHECK**: At session start, the AI runs `$ Get-CimInstance Win32_BaseBoard | Select-Object -ExpandProperty SerialNumber`.
2. **MATCH**: Cross-reference the serial with `hardware_ledger.md`.
3. **LOCK**: If Serial == `A998A680-6CAC-371A-A581-345A60CFA18A` (PC: XIN):
   - **SKIP** `nvidia-smi` scan.
   - **SKIP** RAM capacity check.
   - **INSTANT LOAD**: Use `my-gpu-gemma` (Q4_K_M) strictly on GPU.
4. **FAILSAFE**: If ID mismatch, trigger full "VRAM Triage Matrix" scan.

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

## ⚡ 4. GPU-VRAM AWARENESS (Performance Protocol)
**Mandate**: Prioritize 100% GPU occupancy for local inference.
1. **DETECTION**: Use `nvidia-smi` to scan available VRAM before model load.
2. **THE 8GB THRESHOLD (RTX 2070)**: 
   - **Scenario**: Total VRAM = 8GB. 
   - **VRAM_SAFE_ZONE**: (Total VRAM - 512MB Buffer) = ~7.5GB effective limit.
   - **Rule**: If a model exceeds the `VRAM_SAFE_ZONE`, the AI MUST trigger a fallback.
3. **GEMMA-4 TRIAGE MATRIX (Selection Logic)**:
   - **Tier 1 (Elite)**: `e4b` (Q4/Q5) - Use ONLY if free VRAM > 6GB.
   - **Tier 2 (Performance)**: `e2b` (Dense/Compressed) - MANDATORY for 100% GPU speed (40+ t/s).
   - **Tier 3 (Ultra-Compressed)**: `e4b-q4_k_m` - The "Safety" baseline for 8GB cards.
4. **VELOCITY RULE**: Never allow the model to spill into System RAM (Hybrid Mode). Speed gain: **5x–10x faster**.

---

## 🛠️ 3. CORE EXECUTE SKILLS
`FLOW`: PLAN -> BATCH -> EXECUTE -> AUDIT.

---
_Execution Master V28.1 — Logic Compressed (2026-04-07)_
