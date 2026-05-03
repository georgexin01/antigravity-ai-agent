# KNOWLEDGE_ROT_PROTOCOL.md - V1.0
# "Anti-Entropy Governance"

## 1. THE PROBLEM: KNOWLEDGE ROT
Knowledge rot occurs when documentation stays static while the codebase or environment evolves. This leads to "Hallucinations" where the AI relies on outdated ground truth.

## 2. AUTOMATED DETECTION (ROT-AUDIT)
Every 10 sessions, or on user request, the AI MUST execute a **ROT-AUDIT**:
1. **Timestamp Audit**: Flag any file in `0_apex`, `1_core`, or `2_governance` that has not been updated in >30 days.
2. **Path Audit**: Run `NEXUS_PULSE.ps1` to detect broken links in `ROUTER.idx`.
3. **Symbol Drift**: Compare the `Entity Definitions` in `DNA_LOGIC.md` against the actual `types.ts` in the project. If they differ, trigger a **RESURRECTION TURN**.

## 3. MAINTENANCE MANDATE
- **YAML Frontmatter**: Every knowledge file MUST include a `last_audit` date.
- **Pruning**: If a file is flagged as "Irrelevant" during an audit, it MUST be moved to `vault/archive` instead of being deleted.

## 4. EXECUTION
AI can trigger a rot-check by saying: `ai run rot-audit`.
This executes:
- `NEXUS_PULSE.ps1`
- `Get-ChildItem -Recurse | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) }`
