# Sovereign Module Audit Protocol (V1.2) — SYSTEM-WIDE MANDATE (MUST DISPLAY)

> [!IMPORTANT]
> **MANDATORY DISPLAY RULE**: This protocol and its **Visual Audit Dashboard** MUST be displayed at the end of EVERY interaction involving module Create, Edit, Update, Delete, Error Check, or Testing. It is the authoritative proof of architectural integrity.

## 🕵️ Phase 1: Relation Check (Referral: 5. has relation)
Whenever a module is updated or created, the AI MUST proactively scan for existing relations using **Smarter Detection Logic**:

### 1.1 Detection Intelligence
- **Strong Signal**: If a table (e.g. `agent_review`) contains a column ending in `Id` (e.g. `agentId`) where the prefix matches a **partial or single word** from a parent table name (e.g. `agent_list`).
- **Ambiguous Signal**: If the `Id` prefix (e.g. `report`) only vaguely matches a table name or exists in a non-standard module (e.g. `report_list`).

### 1.2 The Handshake Rule (MUST ASK)
- **Automatic**: If the relation is a Clear-Cut 1:N (e.g. Agents -> Reviews), proceed with the standard injection.
- **Handshake**: If the relation is ambiguous (e.g. Reports -> Agents), **Gemini MUST ask the user**: *"I detected an agentId in report_list. Should I add the LayerIcon and relationship modules?"*
- **No Unilateral Change**: Never add relationship drawers or icons for ambiguous cases without explicit "GO" from the user. Cleaning up redundant modules is difficult.

## 🧪 Phase 2: CRUD Integrity Audit (Referral: 6. create + 7. edit)
The AI MUST perform a mental or code-level audit of the "popup modules" (Drawers) to prevent technical debt.

### 2.1 Audit: 6. Create Tables (Left-Side Popup)
- **Action**: Verify the `submit` logic and Supabase integration. 
- **Requirement**: Ensure the list refreshes on success.

### 2.2 Audit: 7. Edit Tables (Right-Side Popup)
- **Action**: Verify the "input is empty" bug is NOT present.
- **Requirement**: Ensure `getDetailApi` and `idKey` are correctly synced in `useEditDrawer`.

## 📊 Phase 3: The Visual Audit Dashboard (GUI Report)

Gemini MUST display a graphical summary table after finishing a module. This provides the user with an at-a-glance confirmation of architectural health.

### 🛡️ [Module Name] Industrial Audit Report
| Functional Node | Audit logic | Status | Industrial Element |
|---|---|---|---|
| **6. Create Module** | Left-Side Popup Integrity | ✅ PASSED | `lucide:plus` |
| **7. Edit Module** | Right-Side Popup Hydration | ✅ PASSED | `lucide:edit-3` |
| **8. CRUD Registry** | Lifecycle Verification | ✅ PASSED | `supabase:rpc` |
| **5. Has Relation** | Down: LayerIcon / Up: FkLink | 🔗 LINKED | `lucide:layers` |
| **Relational Tray** | Dropdown Module Column | ✅ SYNCED | `vben:tray` |
| **i18n Namespace** | Namespace Check (Step 12) | ✅ CLEAN | `$t('page.*')` |
| **Workflow Bridge** | E2E Action Registry (Step 14) | ✅ READY | `__workflow_*` |
| **Sovereign Data** | Malaysian Seed Standard | ✅ SYNCED | `Sdn Bhd / +60` |

> [!NOTE]
> If a feature is omitted (e.g. no relations), the status should be **N/A** with a brief explanation.

## 🔁 Phase 4: The Failure-Correction Loop

Whenever a user reports a failure or a "bug" (e.g., *"Edit form is empty"* or *"Submission failed"*), Gemini MUST follow this three-step industrial sequence:

1.  **Code-Level Audit**: Use `view_file` to audit the store (Step 04), forms (Step 06/07), and views (Step 09). Identify the structural mismatch.
2.  **Surgical Repair**: Apply the fix while maintaining 100% industrial density (removing Card padding, ensuring correct `idKey` and `api` bindings).
3.  **GUI Proof-of-Fix**: Display the **Visual Audit Dashboard** at the end of the response to show that the specific failing node is now **✅ PASSED**.

## 📐 Pattern: The Clean Module Standard
A module is considered "Clean" only if it meets these criteria:
- **RAW Density**: VXE tables have `border: true` and no surrounding Cards/padding.
- **Universal CRUD**: All 4 actions (Create, Read, Update, Delete) are functional.
- **Malaysian Context**: Mock data and seed logic follow the Malaysian high-fidelity specs.

---
**Status**: Authoritative | **Last Update**: 2026-04-21 | **Referral**: GEMINI-V9-EVOLVE
