---
name: gitnexus-deep-reasoning
description: "High-Fidelity Knowledge Graph Engineering for Gemini 3 Flash"
version: 1.0
status: ACTIVE
---

# 🛰️ GITNEXUS DEEP REASONING & USE CASES

## 💡 THE 10 COMMANDMENTS OF GITNEXUS (ADVICE)

1.  **Graph-First Research**: Before opening any file, query the GitNexus MCP to understand its upstream and downstream dependencies.
2.  **Zero-Token Context**: Use the local index to answer structural questions. Do not feed the AI thousands of lines of code; feed it the Graph Result.
3.  **The "God's Eye" Protocol**: Always keep `AGENTS.md` updated via GitNexus. This allows any AI agent (Claude, Gemini, etc.) to immediately "orient" themselves in the project.
4.  **Semantic Clustering**: Use `--skills` to let GitNexus identify "functional neighborhoods." This helps in organizing knowledge by purpose rather than just file paths.
5.  **Ignore Bloat**: Explicitly exclude `.json` logs, `node_modules`, and large assets in `.gitnexusignore` to maintain graph speed.
6.  **Incremental Hydration**: Only run full `--force` re-indexes after major architectural shifts. Use standard `analyze` for day-to-day work.
7.  **Embeddings for Logic**: Enable `--embeddings` for "How" questions (e.g., "How does authentication flow?") and disable for "What" questions (e.g., "What files are in X?").
8.  **Registry Portability**: Keep a backup of `~/.gitnexus/registry.json` or use the `--name` flag to ensure consistent mapping across different machines.
9.  **Agentic Triggers**: Configure the system to auto-run `gitnexus analyze` on every `git commit` or major file batch edit.
10. **Dead Code Elimination**: Use the graph to find "Orphaned Nodes" (files/functions with no incoming edges) to maintain a lean system.

---

## 🚀 50 GITNEXUS USE CASES (SYSTEM INTEGRATION)

### A. Architectural Mapping (1-10)
1. **Dependency Inversion Analysis**: Identifying where high-level modules depend on low-level details.
2. **Call Chain Visualization**: Mapping exactly how a user request flows through 10+ files.
3. **Circular Dependency Detection**: Finding and breaking logic loops that cause memory leaks.
4. **Namespace Collision Check**: Ensuring new global variables don't conflict with legacy ones.
5. **Impact Prediction**: "If I change this variable, which 20 files will break?"
6. **Feature Discovery**: Finding all files related to "Auth" across a fragmented repo.
7. **Entry Point Identification**: Pinpointing the genesis file in a complex framework.
8. **Layer Violation Audit**: Ensuring UI code isn't talking directly to the DB layer.
9. **Component Usage Audit**: Finding every instance where a specific UI spell is used.
10. **API Surface Mapping**: Automatically listing all exported functions and their signatures.

### B. Deep Debugging & Repair (11-20)
11. **Shadow Path Tracking**: Finding "hidden" logic paths that only trigger in specific states.
12. **Variable Lifecycle Trace**: Tracking a specific token from input to storage.
13. **Error Propagation Mapping**: Visualizing how a failed promise travels through the stack.
14. **State Leak Detection**: Finding where global state is modified without proper hooks.
15. **Race Condition Identification**: Identifying files that access the same resource simultaneously.
16. **Environment Variable Audit**: Checking which files rely on specific `.env` keys.
17. **Dead Branch Pruning**: Identifying `if/else` blocks that are never logically reachable.
18. **Type Mismatch Analysis**: Finding where a function returns a type that the caller doesn't expect.
19. **Performance Bottleneck Mapping**: Identifying the "Central Nodes" (most called functions) for optimization.
20. **Legacy Code Archeology**: Understanding how a 3-year-old module interacts with modern ones.

### C. Refactoring & Optimization (21-30)
21. **Module Decoupling**: Identifying the "minimum cut" to move a module to a new repo.
22. **Function Extraction**: Finding repeated logic patterns across files to merge into a utility.
23. **Rename Propagation**: Safely renaming a core function across 100 files without grep errors.
24. **Boilerplate Reduction**: Identifying redundant setup code in multiple components.
25. **Library Replacement**: Mapping all calls to a deprecated library before switching to a new one.
26. **Class-to-Hook Migration**: Identifying state logic in classes for React Hook conversion.
27. **Async/Await Standardization**: Finding old `.then()` chains to modernize.
28. **CSS-in-JS Cleanup**: Mapping which components use which style tokens.
29. **File Splitting**: Deciding where to split a 2000-line "God File" based on logic clusters.
30. **Interface Hardening**: Ensuring all modules strictly follow the defined protocol.

### D. Security & Governance (31-40)
31. **Secret Leak Audit**: Finding hardcoded API keys via semantic search.
32. **Permission Flow Mapping**: Ensuring sensitive functions are wrapped in auth checks.
33. **Data PII Tracking**: Identifying every file that touches "User Email" or "Password".
34. **Dependency Vulnerability Impact**: "CVE-2026-X is in library Y; show me which files use Y."
35. **Sanitization Audit**: Checking if user input is sanitized before hitting the DB.
36. **CORS Policy Analysis**: Mapping which routes are exposed to which origins.
37. **Encryption Audit**: Identifying where sensitive data is stored unencrypted.
38. **Logic Bomb Detection**: Finding "anomalous" code patterns in a large codebase.
39. **Compliance Verification**: Ensuring all files contain the mandatory License/Header.
40. **Access Control Visualization**: Mapping roles to specific code execution paths.

### E. Portability & System Evolution (41-50)
41. **Cross-Machine Registry Sync**: Using GitNexus names to maintain state across PCs.
42. **Bootstrap Script Generation**: Using the graph to know which files are needed for a 0-to-100% build.
43. **Knowledge Base Hydration**: Automatically creating `.md` docs for every folder.
44. **AI Skill Generation**: Letting GitNexus build the `SKILL.md` files for a new project.
45. **Pulse Integration**: Updating `PULSE.idx` based on graph health.
46. **Session Shadow Pruning**: Knowing which session data is safe to delete based on current focus.
47. **Automated Readme Updates**: Keeping top-level documentation in sync with code reality.
48. **Corpus Name Alignment**: Ensuring workspace names match the GitNexus registry.
49. **Recursive System Repair**: Using the graph to auto-fix broken file paths after a move.
50. **Singularity Engine Sync**: Ensuring the AI's "Internal Model" of the repo matches the actual Graph.

---

## 🛠️ PORTABILITY & PLUG-IN PROTOCOL

To ensure GitNexus works 100% identically across PCs:
1. **Workspace Rooting**: Always keep the `.gemini` folder at the root of your workspace.
2. **Registry Mapping**: 
   - Run `npx gitnexus analyze --name antigravity_core` on Every new PC.
   - This registers the path into the local `~/.gitnexus/registry.json`.
3. **Environment Parity**: The AI will check for `npx gitnexus` availability on Turn 1. If missing, it will auto-install.
4. **DNA Transfer**: Since `DNA_KERNEL.json` is in your `.gemini` folder (synced via Git or Cloud), I will always know the rules.
