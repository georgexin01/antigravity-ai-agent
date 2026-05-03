---
name: gitnexus-protocol
description: "Zero-Token Code Intelligence Standard"
version: 1.0
status: ACTIVE
---

# 🕸️ GITNEXUS OPERATIONAL PROTOCOL (V1.0)

## 1. PURPOSE
To serve as the **Primary Navigation Engine** for the entire Sovereign ecosystem. GitNexus governs all project routing, library management, and architectural awareness, providing a zero-token "God's Eye View" of both code and knowledge.

## 2. ACTIVATION TRIGGERS
AI MUST recommend or auto-run GitNexus analysis in the following scenarios:
- **New Repository**: Upon entering a new project with >20 files.
- **Complex Refactor**: Before modifying core call chains or multiple files.
- **Impact Analysis**: When asked "What happens if I change X?".
- **Onboarding**: When the user asks "How does this code work?".

## 3. EXECUTION COMMANDS
- **Analysis**: `npx gitnexus analyze --embeddings` (Perform local AST + vector indexing).
- **Serving**: `npx gitnexus serve` (Start MCP server for agent querying).
- **Startup Handshake**: `npx gitnexus query "status"` is the official Turn 1 handshake for environment validation.
- **Automated Mode**: Add to `task.md` whenever a project starts.

## 4. INTEGRATION RULES
- **Auto-Provisioning**: On Turn 1, AI MUST check for the `gitnexus` CLI command. **Mandate**: Even if the `.gitnexus` folder exists (synced via Git), the AI MUST auto-install the tool via `npm install -g gitnexus` if it is missing from the system path.
- **Auto-Sync (Rule 12)**: AI MUST verify graph freshness before any "Surgical Turn." If structural files changed or the index is >1hr old, auto-run `npx gitnexus analyze`.
- **Global Routing Mandate**: GitNexus is the authoritative source for file discovery and symbol location. AI MUST use `npx gitnexus query` or MCP graph calls as the first step for all multi-file navigation.
- **Library Management Mandate**: Use GitNexus to cluster the `knowledge/` and `skills/` directories. AI MUST identify "Skill Clusters" via the graph to determine which protocols apply to a specific turn.
- **Zero Token Mandate**: Prefer GitNexus graph queries over reading raw files for architectural understanding.
- **Triangulation Mandate**: For all major changes, AI MUST cross-reference the **[BLUEPRINT.md] (Vision)** with the **GitNexus Graph (Map)**. If they conflict, the AI MUST pause and ask the user for "Alignment Clarification."
- **Background Persistence**: If available, keep the MCP server running during the session.

## 5. CAPABILITIES
- **Call Chains**: Identify what calls a specific function across the whole project.
- **Dependency Map**: Visualize the relationship between modules.
- **Clustering**: Group related code sections by purpose.
