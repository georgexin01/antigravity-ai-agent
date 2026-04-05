# Auto-Cleanup & Workspace Health Protocol (V1.0)

> **Goal**: Maintain 100% memory efficiency by purging old artifacts.
> **Triggers**: Session Boot (Step 0.1) or Mission Completion.

## 1. Purge Rules (The "Old Task" Clear)
*   **Artifact Cleanup**: Upon every new session start, scan the `brain/` directory.
    *   **Action**: If a `task.md` or `implementation_plan.md` from a previous conversation ID is 100% complete → **DELETE**.
*   **Media Cleanup**: Remove all `.webp` and `.png` artifacts older than 48 hours unless explicitly "Pinned" by the user.
*   **Root Cleanup**: Zero-tolerance policy for `.md` files in the root `knowledge/` folder (must be in sub-folders).

## 2. Intelligence Consolidation
*   **Log Compression**: Before deleting a major task, compress the results into the mode's local `ledger/` or `vault/` as a single line.
*   **Register Purge**: Delete the `knowledge.lock` and old `timestamps.json` entries that don't match the current mode.

---
_V1.0 Auto-Cleanup — Stay Lean. Stay Fast. (2026-04-05)_
