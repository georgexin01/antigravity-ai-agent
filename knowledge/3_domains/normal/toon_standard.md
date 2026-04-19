---
name: toon-standard
description: "toon standard"
triggers: ["toon standard", "toon_standard"]
phase: reference
model_hint: gemini-3-flash
version: 1.0
_ohdy_wrapper: |-
  <dna_node>
  v: 1.0
  n: toon_standard
  summary: "Formalizes the TOON format for high-density AI context ingestion."
  
  syntax_rules:
    1: "Schema-First: Declare the header structure at the top of the file or block."
    2: "Piped-Data: Use the pipe symbol (|) to separate fields, reducing character waste."
    3: "Indentation-Agnostic: Use minimal whitespace to save additional tokens."
    4: "No-Quotes: Standard strings do not require quotes unless they contain pipes."
    5: "Comment-Support: Use '#' for metadata or AI-only instructions."
  
  example:
    # TOON Mission Log Example
    SCHEMA: [id, action, timestamp, result]
    1|Open Browser|2026-04-11|Success
    2|Scroll Page|2026-04-12|Pending
    3|Capture Link|2026-04-13|Fault
  
  sovereign_mapping:
    Usage: "High-density long-term memory, research archives, and massive logs."
    ROI: "~50-70% reduction in token weight compared to JSON/Markdown."
  l: |-
  </dna_node>
---

# TOON STANDARD (V1.0) — TOKEN-ORIENTED OBJECT NOTATION
# Mandate: Wave 04_26 (Architectural ROI)
