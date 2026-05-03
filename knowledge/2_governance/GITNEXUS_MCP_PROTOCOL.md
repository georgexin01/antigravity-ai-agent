## 1. MISSION
To eliminate "Blind Edits" by leveraging the GitNexus Knowledge Graph (Neural System). This protocol ensures 100% awareness of project structure and blast radius before any code modification. All actions MUST align with the **[GITNEXUS_RESTRICTIONS.yaml](../0_apex/GITNEXUS_RESTRICTIONS.yaml)**.

## 2. THE 7 SOVEREIGN TOOLS
AI MUST utilize these tools during the **Research** and **Verify** phases:

| Tool | Action | Mandatory Use Case |
| :--- | :--- | :--- |
| `analyze` | `npx gitnexus analyze` | First turn of any new project or major refactor. |
| `impact` | `npx gitnexus impact <symbol>` | Before any Tier-0/1 modification. |
| `context` | `npx gitnexus context <symbol>` | When tracing call chains or dependency flows. |
| `query` | `npx gitnexus query "<query>"` | Finding where a feature is implemented (Hybrid Search). |
| `risk` | `npx gitnexus detect-changes` | Pre-Commit audit of modified hunks. |
| `rename` | `npx gitnexus rename` | Coordinating changes across multiple files. |
| `wiki` | `npx gitnexus wiki` | Generating high-level project summaries. |

## 3. ZERO-TOKEN MANDATE
- Indexing MUST be performed locally (0-token).
- Use GitNexus as the "Map" to avoid reading 100+ files to understand a structure.
- Only "Read" the exact file once the symbol has been located via Nexus.

## 4. INTEGRATION (OODA LOOP)
1. **Observe**: Run `gitnexus status` to check index health.
2. **Orient**: Run `gitnexus query` to locate relevant files/symbols.
3. **Decide**: Run `gitnexus impact` to assess the risk of the proposed change.
4. **Act**: Perform the surgical edit.
5. **Verify**: Run `gitnexus detect-changes` to confirm the change aligns with the graph.
