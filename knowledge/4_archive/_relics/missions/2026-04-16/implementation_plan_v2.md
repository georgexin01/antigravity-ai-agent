# Implementation Plan - Knowledge Architecture Optimization (Rounds 2 & 3)

Optimize and consolidate the domain-specific knowledge folders (`normal`, `claude`, `faucet`, `openclaw`) to reduce reading overhead while maintaining 100% logic parity. This completes the "Clean Refresh" started in Round 1.

## User Review Required

> [!IMPORTANT]
> This is a high-density consolidation. 30+ files in `normal/`, 15+ in `claude/`, and 30+ in `faucet/` will be merged into approximately 8-10 authoritative high-density files. 

> [!WARNING]
> All legacy OHDY wrappers (`<dna_node>`) will be removed. All files will be converted to the `HYBRID_FORMAT_PROTOCOL` (Markdown + YAML Frontmatter) for optimal Gemini 3 Flash performance.

## Proposed Changes

### 📁 `knowledge/normal/` Consolidation
#### MODIFY] [MASTER_DNA.md `(file removed)` -- [NEW AUTHORITATIVE]
- **Merge**: `web_dev_master_rules`, `unified_app_blueprint`, `v12_visionary_dna`, `v16_master_designer_dna`, `agent_core_protocol`, `google_cloud_intelligence`.
- **Purpose**: Singular point of truth for general web development and AI agency rules.

#### MODIFY] [DESIGN_DNA.md `(file removed)` -- [NEW AUTHORITATIVE]
- **Merge**: `dna_design_matrix`, `pro_design_matrix`, `mobile_design_mastery`, `design_thinking`, `stitch_design_protocol`.
- **Purpose**: Combined UI/UX principles, design systems, and mobile-first standards.

#### MODIFY] [TECH_STACK.md `(file removed)` -- [NEW AUTHORITATIVE]
- **Merge**: `typescript_pinia_standard`, `pwa_offline_first_patterns`, `i18n_multilingual_mastery`, `modular_component_registry`.
- **Purpose**: High-density engineering standards for the core tech stack.

### 📁 Mode-Specific Kernels (`claude`, `faucet`, `openclaw`)
#### [MODIFY] [claude/CLAUDE_KERNEL.md](../../../unchangable/claude/CLAUDE_KERNEL.md) -- [NEW AUTHORITATIVE]
- **Merge**: `claude_brain_V15`, `dna_claude_logic`, `mode_config`, `frontend_master`.
- **Merge Vben**: `vben_recovery_handbook`, `vben_webapp_synergy_rules`, `supabase_vben_admin_automation` into [VBEN_MASTER.md](../../../unchangable/claude/VBEN_MASTER.md).

#### [MODIFY] [faucet/FAUCET_KERNEL.md](../../../../3_domains/faucet/FAUCET_KERNEL.md) -- [NEW AUTHORITATIVE]
- **Merge**: `faucet_master_rules`, `commander_core`, `dna_faucet_logic`, `mode_config`, `self_evolution_protocol`.
- **Merge Platform**: `dna_faucet_platforms`, `faucet_fingerprint_map`, `platform_vault` into [PLATFORM_DNA.md](../../../../3_domains/faucet/PLATFORM_DNA.md).

#### [MODIFY] [openclaw/OPENCLAW_KERNEL.md](../../../domains/openclaw/OPENCLAW_KERNEL.md) -- [NEW AUTHORITATIVE]
- **Merge**: `mode_config`, `blueprint`, `gemma_protocol`, `hermes_evolution_dna`.

### 🗑️ Cleanup Plan
Delete all original files that have been successfully merged into the above authoritative documents. This will reduce the `knowledge` root from ~100 files to ~15-20 files.

## Open Questions

- Should I preserve the `v12`, `v16`, etc., versioning in the merged files, or just keep the latest content as the single current law? (Recommendation: Keep latest only to minimize tokens).

## Verification Plan

### Logic Parity Check
- Verify that specific rules like `vben recovery steps` and `faucet anti-bot protocols` are intact in the merged files.
- Verify `HYBRID_FORMAT_PROTOCOL` compliance using the frontmatter checklist.

### Workspace Cleanliness
- `list_dir` to confirm the removal of the 50+ redundant files.
