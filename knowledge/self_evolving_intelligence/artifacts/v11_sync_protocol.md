# V11 Cross-Device Migration & Sync Protocol

> **Purpose**: Decouple the AI "Brain" from a single machine. Ensure multi-device coordination without data corruption.

---

## 🏗️ 1. Path Abstraction Engine (Anti-Crash)

To prevent broken links when swapping computers, V11 follows **Absolute-Agnostic Pathing**.

- **Dynamic Rooting**: At the start of every session, the AI must locate the `/knowledge` and `/brain` directories relative to the current workspace, NOT the hardcoded `C:\Users\user\...` path.
- **Reference Logic**:
  - Use `${BRAIN_ROOT}` and `${KNOWLEDGE_ROOT}` placeholders in internal discussion.
  - Resolve these to actual absolute paths ONLY during active tool calls.
- **Migration Audit**: If V11 detects a new `CWD` or `hostname`, it must perform a 10-second scan to re-verify all artifact links.

## 🔄 2. Conflict-Free Sync (CFA)

When using two computers (e.g., Office & Home), the knowledge must not "crash" or overwrite blindly.

- **Append-Only Vaults**: The `v10_evolution_vault.md` uses time-stamped entries. When syncing via Git/Cloud, V11 will perform a **Smart Merge** to combine new entries from both machines.
- **Master Rule Precedence**: `must_do_master_rules.md` is the "Bible." One device is nominated as the **PRIMARY** for rule-making, while the other acts as an **EQUIVALENT** learner.
- **Sync Trigger**: Before starting a Mission, V11 checks the `brain_status.md` for a "Last Updated" timestamp from the other machine.

## 🛡️ 3. Safety & Stability (No Redundant Creation)

- **ID-Based Artifacts**: Every major artifact (Mission Blueprint, Implementation Plan) has a Unique ID. V11 will search for the ID before creating a duplicate on a second machine.
- **State Check**: User says "continue." V11 reads the `user_preference_dna.md` → **Active Projects** section to find the exact state saved by the _other_ computer.

## 🚀 4. "The Migration Handshake"

When you move to a new computer:

1.  **AI Detection**: "I see we have moved to a new system (Hostname: ${new_host})."
2.  **Path Re-Mapping**: "I am updating the internal pointers for DaCheng Loklok V2 to match this machine's folder structure."
3.  **Sync Summary**: "I see 3 new learnings from your session on the other machine. Integrating now."

---

_V11 Sync Protocol — Implementation Wave 2026-03-19_
_Vision: One Unified Brain, Any Device._
