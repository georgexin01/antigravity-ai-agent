# Claude Code Mode Optimization Walkthrough

I have updated the AI's internal protocols and master rules to prioritize the **Supabase RLS** and **Postgres Connection** architecture skills whenever **Claude-Code Mode** (ADMIN mode) is triggered.

## Changes Made

### 🧠 Self-Evolving Intelligence
- **[ai_claude_protocol.md](file:///c:/Users/user/.gemini/antigravity/knowledge/self_evolving_intelligence/artifacts/ai_claude_protocol.md)**: Added a mandatory architecture reading step in Section 1 (Activation Logic). I will now read `supabase-rls-rbac-design.md` and `mcp-supabase-postgres-connection.md` before any other actions.
- **[session_boot_sequence.md](file:///c:/Users/user/.gemini/antigravity/knowledge/self_evolving_intelligence/artifacts/session_boot_sequence.md)**: Updated Step 4 (ROUTE TO FILES) for ADMIN mode to explicitly prioritize these Supabase files and link to the detailed routing table.

### 🛠️ Tech Stack Mastery
- **[must_do_master_rules.md](file:///c:/Users/user/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/must_do_master_rules.md)**: Updated Gate 1.1 (Task Classification) to enforce the mandatory reading rule for all "admin" tasks.

### 🗺️ Task Execution Logic
- **[skill_path_router.md](file:///c:/Users/user/.gemini/antigravity/knowledge/task_execution_logic/artifacts/skill_path_router.md)**: Created a dedicated **ADMIN MODE / CLAUDE-CODE** section in the routing table. This standardizes what files I read (Always vs. Relevant) and what I predict you'll need next (SQL -> Types -> Stores -> Views).

## Verification Results

> [!TIP]
> From now on, when you ask to "create module X" or trigger `ai claude`, I will automatically verify your Supabase schema and RLS policies first, ensuring zero security or connectivity errors during development.

- **Gate 1.1 Logic**: Verified as "Mandatory" for admin tasks.
- **Boot Sequence**: Step 4 now explicitly routes to Supabase skills.
- **Predictive Queue**: Updated to match the Claude-Code workflow (migrations first).
