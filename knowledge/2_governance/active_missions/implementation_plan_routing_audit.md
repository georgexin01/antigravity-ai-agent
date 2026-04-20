# Implementation Plan: Sovereign Routing Audit & Normalization (V1.2)

This mission performs a clinical, system-wide audit of all internal file paths (routes) within the Sovereign Knowledge Pyramid (SKP). It corrects broken links caused by the 5-tier transition and enforces a consistent pathing standard.

## User Review Required

> [!IMPORTANT]
> **Case Normalization**: I will normalize all paths to `C:/Users/User/` (Uppercase 'U') for consistency across the pyramid.
> 
> **Archive Linkage**: Links within the `4_archive` tier will be updated to point to current `0_apex` or `1_core` documents where they previously pointed to root files.

## Proposed Changes

### 🏛️ Tier 0: Apex (Central Routing)
- **MODIFY] [PYRAMID_ATLAS.md `(file removed)`**: Ensure all Tier-3 and Tier-4 routes are precise.
- **[MODIFY] [GROUND_KERNEL.md](../../0_apex/GROUND_KERNEL.md)**: Standardize all internal protocol links.

### 🧬 Tier 1 & 2: Governance & Core
- **[MODIFY] [ACTIVATION_PROTOCOL_V11.md](../ACTIVATION_PROTOCOL_V11.md)**: Correct paths for `dna_core` and `PYRAMID_ATLAS`.
- **[MODIFY] [AOE_PROTOCOL.md](../AOE_PROTOCOL.md)**: Fix HUD library routing.

### ⚡ Tier 3: Domains (Specialist)
- **[MODIFY] [3_domains/claude/INDEX.md](../../3_domains/claude/INDEX.md)**: 
    - Fix absolute links pointing to `knowledge/claude/` (should be `knowledge/3_domains/claude/`).
    - Fix links to `GROUND_KERNEL.md` (should be `0_apex/GROUND_KERNEL.md`).

### 🏺 Tier 4: Archive (Cold Storage Cleanup)
- **[MOVE] `walkthrough_skp.md`** -> `4_archive/missions/walkthrough_skp.md`.
- **[MODIFY] `4_archive/missions/`**: Bulk update paths in legacy plans/tasks to prevent "dead-end" routing for the AI.

## Open Questions

> [!NOTE]
> Are there any specific external documentations (outside the `.gemini` folder) that should be linked in the Apex Tier for your daily workflow? (e.g. specialized project files).

## Verification Plan

### Automated Audit
- `grep -r "file:///C:/Users/User/.gemini/antigravity/knowledge/"`: Verify no files exist at the root level of the knowledge base.
- Manual check of `3_domains/claude/INDEX.md` links.

### Manual Verification
- AI must confirm < 3s resolution for any "Trigger Vector" (e.g. asking "what is the design DNA?").
