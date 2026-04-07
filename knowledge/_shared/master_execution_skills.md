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

## 🌊 2. BATCH EXECUTION PROTOCOL (Wave Process)
For any task involving 2+ files, prioritize **Wave Execution** over serial edits (Saves 40-57% cycles).
1. **PLAN**: List ALL files, dependencies, and parallel batches.
2. **BATCH**: Group independent files into the same edit wave.
3. **PARALLEL (RAM-Safe)**: Use `waitForPreviousTools: false` for independent tasks — **MAX 2-3 parallel tools at once**. Never exceed 3 when Gemma4:26b is loaded (17GB model = high memory pressure).
4. **ATOMIC READ**: If target knowledge is known, use `grep_search` instead of `view_file` to ingest only the required logic.
5. **CHECK**: Run build/lint ONCE after the entire batch is complete.
6. **FIX**: Apply all fixes in a single "Fix Wave" based on the error log.

> **RAM Safety Rule (Dynamic — Check on Boot)**:
> At session start, AI must check available RAM using:
> `Get-CimInstance Win32_OperatingSystem | Select-Object TotalVisibleMemorySize, FreePhysicalMemory`
> Then apply the following ceiling:
> | Free RAM Available | Max Parallel Tools |
> | :--- | :--- |
> | < 4 GB | **1 (Serial only)** |
> | 4–8 GB | **2 (Safe Parallel)** |
> | > 8 GB | **3 (Full Parallel)** |
> This ensures portability across all PCs and never assumes a fixed spec.

### Wave Template (Standard Module):
- **Batch A (Parallel)**: Types, Locales, Config.
- **Batch B (Parallel)**: Stores, Composables, Mocks.
- **Batch C (Parallel)**: Views, Components, Drawer.
- **Batch D**: Router, App Entry (Context dependencies).

---

## 🛠️ 3. CORE EXECUTION SKILLS
- **Cycle Control**: PLAN -> BATCH -> EXECUTE -> AUDIT.
- **Cost Reduction**: Minimize browser-tool calls for static verification.
- **Accuracy**: 100% path precision and zero-drift click execution.

---

_Execution Master V27.0 — Shared Efficiency Active (2026-04-07)_
