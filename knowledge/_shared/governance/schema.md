---
name: schema
description: "schema"
triggers: ["schema", "sovereign_evolution_schema"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
_ohdy_wrapper: |-
  <dna_node>
  n: sovereign_evolution_schema
  d: "Strict validation governance over all autonomous YAML patching and evolution."
  prio: 15.0 # P0 Governance Lock
  
  # 2. SEMANTIC GRAPHING (DAG)
  # Overrules isolated logic strings. All new modules must link to the ecosystem.
  graphing_strict:
    tags_required: true     # Must include array of semantic vectors e.g., [auth, db_schema]
    requires_array: true    # Must explicitly declare K_ALPHA or other core node dependencies.
  
  # 3. KNOWLEDGE DECAY & ROI
  # Eliminates context bloat over iterations.
  entropy_mechanics:
    v_score_baseline: 1.0     # All new skills start at 1.0 Velocity/ROI baseline.
    k_decay_threshold: -5.0   # If v_score drops below -5.0 through unused cycles, the rule moves to _relics.
    c_weight: "Mandatory 1-100 to override conflicting generic rules."
  
  # 4. HOLOGRAPHIC REDUCTION
  hologram_rules:
    trigger: "File length > 250 lines"
    action: "Must prepend a 'holo:' 50-token summarizer block for Level 0 scanner context."
  
  # 5. ATOMIC VALIDATION PROTOCOL
  patch_protocol:
    1: "AI dumps raw logic to dna_candidate.yaml"
    2: "AI triggers Simulated Consensus using Gemma E4B models for high-reasoning voting."
    3: "IF c > 0.95 AND Simulation == PASS: Trigger Sovereign_PatchDNA.ps1"
  
  # 6. NATIVE YAML OPTIMIZATION (WAVE 8)
  native_yaml:
    anchors_required: "MUST use & and * when variables are repeated (e.g., brand colors, repeated logic)."
    streams_allowed: "Use '---' to cleanly split Context from Execution inside single large files."
    explicit_types: "Use !!str, !!int, or !!float if reasoning ambiguity risk is High."
  l: |-
  </dna_node>
---

# MASTER EVOLUTION SCHEMA (Rule 2)
# EPOCH: THE INFINITY MATRIX

## [Rule 2] - STRUCTURAL (FIXED)

### Rule 2: Case 3 (Mandatory Metadata):
- _t_required: true   # Thought Trace
- c_required: true    # Confidence logic (>0.95)
