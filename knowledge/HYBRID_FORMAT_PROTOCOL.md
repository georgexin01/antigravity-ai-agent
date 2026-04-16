---
name: hybrid-format-protocol
description: "Canonical rules for writing AI knowledge and skills in the 5-language hybrid system (YAML, MD, JSON, TOON, XML) optimized for Gemini 3 Flash routing and token efficiency."
triggers: ["hybrid format", "format rules", "how to write skill", "how to write knowledge", "new skill", "new knowledge", "format protocol", "gemini flash format"]
phase: constitutional
requires: [ALPHA_DIRECTIVE]
v_score: 1.0
k_decay: 0
holo: "Canonical 5-language format system for AI knowledge/skills. Enforces YAML frontmatter + MD body rules for token efficiency."
model_hint: gemini-3-flash
version: 1.1
status: authoritative
date_created: "2026-04-13"
applies_to: "all new and updated knowledge/skills files across all modes (claude, faucet, normal, openclaw, _shared)"
---

# HYBRID FORMAT PROTOCOL (V1.0)

> The canonical 5-language format system for all AI knowledge and skills files.
> Any new or updated knowledge/skill MUST follow the rules below.

## 1. WHY THIS EXISTS

Gemini 3 Flash is latency-optimized and excels at structured output + literal keyword matching. Writing skills in the wrong format costs tokens (up to 45% per call), breaks routing accuracy, and makes maintenance fragile. This protocol fixes that with one rule: **match the format to the content type.**

Goals:
- **Token efficiency** — avoid wrapper overhead (e.g. OHDY `l: |-` YAML blocks wasted ~13% tokens)
- **Router accuracy** — frontmatter `triggers[]` enables literal keyword routing without reading the body
- **Parse reliability** — stop wrapping markdown in YAML strings where escape rules break on colons/quotes
- **Structured output compatibility** — Gemini 3 Flash's strongest mode needs explicit `output_format` contracts
- **Cross-file portability** — skills should be copy-pasteable without custom loaders

## 2. THE 5 LANGUAGES AND WHEN TO USE EACH

### 2.1 Decision Table (authoritative)

| Content type | Format | Why | Example files |
|---|---|---|---|
| **Instructions, playbooks, guides, protocols, skills** | **Hybrid Markdown** (YAML frontmatter + MD body) | Prose + tables + code — MD native; frontmatter enables cheap routing | `skill.md`, `handbook.md`, `*_protocol.md` |
| **Config, registry, index, map, router, rules** | **Pure YAML** | Key-value state, not prose; YAML parses faster for structured reads | `mode_config.yaml`, `category_index.yaml`, `hub.yaml` |
| **Machine state, timestamps, metadata, API payloads, versioned checkpoints** | **JSON** | Universal, fast, no whitespace ambiguity; best for programmatic read/write | `timestamps.json`, `metadata.json`, `shortform_registry.json` |
| **Append-only ledgers, compact session logs, token-efficient history records** | **TOON** (`.toon`) | Token-Oriented Object Notation — 3-5× more compact than JSON for repeated records | `faucet_session_ledger.toon`, `faucet_history_audit.toon` |
| **Schema-validated documents, prompt templates with strict tags, structured output contracts** | **XML** | Only when you need explicit open/close tags for tool-use or multi-section structured output | `<tool_use>`, `<thinking>`, `<output_format>` blocks |

### 2.2 Quick Decision Tree

```
Is the file mostly prose + code + tables?
├── YES → Hybrid Markdown
└── NO → Is it structured data (keys + values)?
         ├── YES → Is it state/metadata/machine-updated?
         │        ├── YES → JSON (or TOON if repeated records)
         │        └── NO → YAML (config, registry, rules)
         └── NO → Does it need XML tags for tool use / structured output?
                  ├── YES → XML
                  └── NO → Reconsider — probably Hybrid MD
```

### 2.3 Anti-Patterns (FORBIDDEN)

| Anti-pattern | Why it's wrong | Correct alternative |
|---|---|---|
| Wrapping markdown in `l: \|-` YAML string (OHDY style) | 13% token overhead, fragile escape rules, parser-hostile | Hybrid MD with YAML frontmatter |
| Using XML tags inside YAML (e.g. `<dna_node>` in `.yaml`) | Neither format, breaks both parsers | Hybrid MD if prose, pure YAML if data |
| Instructions written as pure YAML bullet lists | Flash routes worse on YAML prose than MD prose | Hybrid MD |
| Config values written as Markdown tables | Programmatic reads need structured YAML/JSON | YAML or JSON |
| Timestamps/state as YAML | JSON is faster, safer, canonical | JSON |
| Mixing formats inside a single file without frontmatter boundary | Ambiguous parse | Hybrid MD frontmatter + body |

## 3. HYBRID MARKDOWN FRONTMATTER SCHEMA (Canonical)

Every `.md` skill or knowledge file MUST have this frontmatter block at the top.

### 3.1 Required fields

| Field | Type | Purpose |
|---|---|---|
| `name` | string | Unique ID, matches folder or filename (no spaces) |
| `description` | string | One-line summary (max 500 chars) — used by router for fallback semantic match |
| `triggers` | string[] | 2-5 literal keywords the router matches against user input |
| `phase` | enum | `constitutional` \| `0-orchestrator` \| `1-analysis` \| `2-scaffold` \| `3-testing` \| `reference` |
| `model_hint` | enum | `gemini-3-flash` (fast scaffold) \| `gemini-3-pro` (heavy reasoning) |
| `version` | string | Skill version for cache-busting |

### 3.2 Optional fields

| Field | Type | Purpose |
|---|---|---|
| `requires` | string[] | Skill IDs that must run first |
| `unlocks` | string[] | Skill IDs this one enables |
| `inputs` | string[] | Required input parameter names |
| `output_format` | string | Structured output contract (e.g. `json_files`, `sql_migration`, `structured_confirmation`) |
| `risk` | enum | `safe` \| `unknown` \| `high` |
| `source` | string | Origin (`community`, `internal`, URL) |
| `date_added` | ISO date | `YYYY-MM-DD` |
| `status` | enum | `draft` \| `active` \| `deprecated` \| `authoritative` |

### 3.3 Template (copy this for new skills)

```markdown
---
name: my-new-skill
description: "One-line description — what this skill does and when to use it."
triggers: ["keyword one", "keyword two", "keyword three"]
phase: 2-scaffold
requires: []
unlocks: []
inputs: [entity_name, field_list]
output_format: typescript_files
model_hint: gemini-3-flash
version: 1.0
---

# My New Skill

## When to Use
One sentence. Flash routes on this — keep it literal, not poetic.

## Steps
1. Imperative verb first. Short.
2. One action per step.
3. End each step with expected signal.

## Output
Return: { "status": "...", "files": [...] }

## Guardrails
- DO NOT do X.
- STOP if step 2 fails.
```

## 4. FORMAT-SPECIFIC RULES

### 4.1 Hybrid Markdown (.md)

- **MUST** start with `---` frontmatter block
- **MUST** include all required fields from §3.1
- Body uses `##` headings for Flash to chunk on
- Keep body under 400 tokens per section for Flash latency
- Use imperative voice in step lists ("Do X", not "You should do X")
- Use CAPS for MUST/DO NOT/STOP guardrails — Flash respects these strongly
- Tables for structured comparison (Flash reads tables well)
- Code blocks for exact syntax (no paraphrasing)

### 4.2 Pure YAML (.yaml)

Use when content is genuinely structured data:

```yaml
# mode_config.yaml — valid use of pure YAML
mode: claude
triggers: [ai claude, architect, vben]
folder_lock: [skills/claude, knowledge/claude, _shared]
blocked: [skills/faucet, knowledge/faucet]
phase_gates:
  1: data_layer
  2: mock_layer
  3: ui_layer
```

Rules:
- Top-level keys are machine-readable (no prose dumps)
- No `l: |-` multiline prose blocks — those belong in hybrid MD
- Use lists, maps, scalars only
- Comment lines with `#` for human context
- NEVER mix XML tags into YAML

### 4.3 JSON (.json)

Use for state, timestamps, metadata, programmatic payloads:

```json
{
  "lastUpdated": "2026-04-13T12:00:00Z",
  "version": "42.0",
  "skills": {
    "brainstorming": { "lastRun": "2026-04-12", "runCount": 17 }
  }
}
```

Rules:
- ISO 8601 for dates
- camelCase for keys
- No comments (use `_meta` fields if needed)
- Pretty-print (2-space indent) for human-readable files; minify for transport

### 4.4 TOON (.toon)

Use for append-only ledgers where records repeat the same shape — TOON compresses repeated keys 3-5× better than JSON.

```toon
# faucet_session_ledger.toon
@schema: [ts, platform, reward, status]
2026-04-13T09:00:00Z | viefaucet | 0.012 | verified
2026-04-13T09:01:00Z | 99faucet  | 0.008 | verified
2026-04-13T09:02:00Z | viefaucet | 0.000 | failed
```

Rules:
- First line declares schema: `@schema: [field1, field2, ...]`
- Each record is one line, `|` separator
- Append-only (never rewrite old lines)
- Human-readable without parsing
- Use when file will have 100+ repeated records

### 4.5 XML

Use ONLY for structured output tags in tool-use prompts or contract-enforced sections:

```xml
<tool_use>
  <name>analyze_schema</name>
  <input>
    <entity>User</entity>
    <fields>id, name, email</fields>
  </input>
</tool_use>
```

Rules:
- Never use XML for general knowledge storage
- Only when Gemini 3 Flash's tool-use or structured-output mode requires it
- Keep tag depth ≤ 3
- Self-close empty tags: `<break/>`

## 5. TOKEN EFFICIENCY PRINCIPLES (Gemini 3 Flash)

1. **Thin frontmatter** — only fields the router needs. Don't dump content into YAML keys.
2. **Body chunked by `##` headings** — Flash skims headings to decide what section to read.
3. **Literal triggers** — 2-5 exact phrases the user might say. Not semantic paraphrases.
4. **Model hint routing** — send heavy reasoning to `gemini-3-pro`, light scaffold to `gemini-3-flash`.
5. **Output contracts** — declare `output_format` so Flash's structured-output mode locks onto it.
6. **Cache-friendly** — keep total corpus under 1M tokens per mode so it stays in context cache.
7. **No duplication** — don't repeat content across frontmatter + body. Frontmatter for routing, body for execution.

## 6. MIGRATION RULES (legacy → hybrid)

When converting old OHDY/YAML-wrapped files to hybrid MD:

1. **Lossless only** — every word from the original must appear in the converted file (verified by word-count check)
2. **Archive originals** — copy to `.archive/` mirror structure before writing new file
3. **Word-count verify** — run `gemini-converter.mjs verify` before any delete
4. **Delete only after 100% pass** — use `gemini-converter.mjs clean` which only removes files with a verified archive
5. **Preserve inner frontmatter** — legacy files may have nested `---...---` blocks; keep them verbatim in `_inner_frontmatter: |-` field
6. **Preserve OHDY wrapper words** — use `_ohdy_wrapper: |-` literal block to keep `<dna_node>`, `l: |-`, header words

## 7. FILE NAMING CONVENTIONS

| Kind | Naming | Location |
|---|---|---|
| Skill (subfolder) | `skill.md` (lowercase) | `skills/{mode}/{slug}/skill.md` |
| Skill (loose) | `{slug}.md` | `skills/{mode}/{slug}.md` |
| Knowledge reference | `{topic}.md` or `{TOPIC}.md` for constitutional | `knowledge/{mode}/` or `knowledge/` |
| Config | `{name}.yaml` | Same folder as the skill/knowledge it configs |
| State/timestamps | `timestamps.json` or `{name}.json` | Each mode folder |
| Ledger | `{name}.toon` | Mode-specific folder |

## 8. QUICK REFERENCE CARD

```
INSTRUCTION / PLAYBOOK / GUIDE  →  Hybrid MD
CONFIG / REGISTRY / INDEX       →  Pure YAML
STATE / TIMESTAMP / METADATA    →  JSON
APPEND-ONLY LEDGER              →  TOON
STRUCTURED OUTPUT TAGS          →  XML (only inside prompts)
```

## 9. ENFORCEMENT

- **All new files** created after 2026-04-13 MUST follow this protocol
- **Legacy files** are migrated incrementally per §6 using `gemini-converter.mjs`
- **Violations** of §2.3 anti-patterns are blocking — fix before merge
- **Schema drift** in §3.1 required fields is blocking — all required fields must be present

## 10. REFERENCES

- `gemini-converter.mjs` — Lossless YAML→MD converter with archive + verify pipeline
- `skills/claude/README.md` — Canonical example of hybrid MD registry
- `skills/claude/*/skill.md` — 15 reference skills using this protocol
- `skills/normal/*/skill.md` — 36+ converted skills using this protocol

## 11. CHANGELOG

- **V1.0** (2026-04-13): Initial protocol. Codifies findings from `skills/claude` and `skills/normal` migrations. Replaces ad-hoc OHDY YAML wrapper convention.
