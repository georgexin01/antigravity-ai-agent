# Claude Code Mode Startup Optimization

This plan optimizes the "Claude Code Mode" (ADMIN mode) startup sequence to ensure the AI immediately grasps the Supabase RLS and Postgres connection architecture before proceeding with module creation.

## User Review Required

> [!IMPORTANT]
> This change modifies the core "Boot Sequence" and "Claude Protocol" of the AI. Once applied, every time you trigger "ai claude" or start an "admin" task, I will automatically read the Supabase RLS and Connection skills first.

## Proposed Changes

### [Knowledge Base]

#### [MODIFY] [ai_claude_protocol.md](file:///c:/Users/user/.gemini/antigravity/knowledge/self_evolving_intelligence/artifacts/ai_claude_protocol.md)
- Add specific file reading priority to Section 1 (Activation Logic).
- Explicitly name `supabase-rls-rbac-design.md` and `mcp-supabase-postgres-connection.md` as "Master Skills" to be read immediately.

#### [MODIFY] [must_do_master_rules.md](file:///c:/Users/user/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/must_do_master_rules.md)
- Update **Gate 1.1 (Task Classification)** to include the mandatory reading of Supabase architecture files for "admin" tasks.

#### [MODIFY] [session_boot_sequence.md](file:///c:/Users/user/.gemini/antigravity/knowledge/self_evolving_intelligence/artifacts/session_boot_sequence.md)
- Update **Step 4 (ROUTE TO FILES)** under `ADMIN mode` to explicitly list the priority files.

#### [MODIFY] [skill_path_router.md](file:///c:/Users/user/.gemini/antigravity/knowledge/task_execution_logic/artifacts/skill_path_router.md)
- Add a dedicated **ADMIN MODE / CLAUDE-CODE** section in the Task Routing Table to standardize the file list and predictive queue.

## Open Questions

- Should I also include `supabase-auth-architecture` in the "read first" list, or keep it strictly to RLS and Postgres connections as requested?

## Verification Plan

### Manual Verification
- I will simulate a "Session Start" or "ai claude" trigger and verify (via log/note) that the specified files are indexed and prioritized.
- I will check the internal state to ensure `task_type = ADMIN` triggers the new routing logic.
