# Portability & System Resilience Protocol (V1.0)

> This protocol ensures that the `.gemini` environment is 100% portable and can be autonomously rebuilt when cloned to a new computer via GitHub.

## 1. GitHub Configuration
*   **Environment-Agnostic Paths**: All internal paths MUST remain relative to the `{{ROOT}}` directory (the `.gemini/antigravity/` folder).
*   **Repository Structure**:
    *   `_shared/`: Global/Master settings (Isolation: 100% Shared).
    *   `normal/`: General research and design (Identity: BOREALIS_BEAR_V7).
    *   `faucet/`: Autonomous earning (Identity: OMNISCIENT_EARNING_ENGINE_V22).
    *   `claude/`: Vben/Supabase automation (Identity: CLAUDE_CRUD_PIPELINE_V15).

## 2. PC Migration Protocol (Rebuild Steps)
If the environment detects a new `USERPROFILE` or a new absolute root path:
1.  **Identity Discovery**: The AI identifies its mission (Normal, Faucet, or Claude) based on the current mode keywords.
2.  **Path Re-Mapping**: The AI re-calculates all tool `SearchPaths` based on the new local root.
3.  **Bootstrap Sync**: The AI reads `_shared/boot.md` to restore all P0 master rules and logic.

## 3. Maintenance & Cleanup
*   **Delete on Sync**: Before pushing to GitHub, ensure all `implementation_plan_*.md` and `task_*.md` files from the current session are removed to keep the repo lightweight.
*   **Zero-Cross-Read Check**: Before pushing, verify that no `mode_config.md` contains cross-reads to other mode folders.

---
_V1.0 Portability Protocol — GitHub Ready (2026-04-05)_
