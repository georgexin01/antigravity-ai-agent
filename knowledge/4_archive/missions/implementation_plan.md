# V12 JIT Activation — Token-Lean Intelligence

Further reduction of the startup phase to reach sub-5s response times and preserve context window for long-running sessions.

## User Review Required

> [!IMPORTANT]
> This transition moves from "Layered Hydration" to **Trigger-Based Pull**. The AI will no longer read "Global DNA" on boot. It will only pull technical rules when it detects active work on a relevant file or feature.

## Proposed Changes

### 1. The JIT Manifest (V12)
Creation of a high-density, YAML-based `JIT_MANIFEST.yaml` that maps every file extension and keyword to its specific knowledge fragment.

### 2. Atomic Fragmentation
Break down large `MASTER_DNA.md` and `TECH_STACK.md` files into:
- `DNA_STYLES.md` (CSS/Tailwind)
- `DNA_LOGIC.md` (TS/Vue/Pinia)
- `DNA_BACKEND.md` (Supabase/DB)
- `DNA_PWA.md` (Manifest/Offline)

### 3. Turn 0 (The Phantom Boot)
The AI is instructed to **NEVER** read the `GROUND_KERNEL` or `CORE_VITALS` unless a "System Inconsistency" or "Manual Activation" is triggered. It will rely on a tiny context block injected into the prompt.

## Execution Sequence

1. **Fragmentation**: Split `MASTER_DNA.md` and `TECH_STACK.md` into atomic nodes.
2. **Manifest Creation**: Build `JIT_MANIFEST.yaml` with trigger mappings.
3. **Vitals Compression**: Shrink `CORE_VITALS.md` into a "Token-Lean Header".
4. **Logic Guarding**: Update `GROUND_KERNEL` to enforce "JIT Pull" over "Boot Read".

## Open Questions

- Should we use **Holo-Grep** (searching for specific line ranges) to save even more tokens, or is full-fragment reading acceptable?
- Do you want to keep `evolving_knowledge.md` as a global read in Turn 2, or make it on-demand for "What happened?" queries?

## Verification Plan

### Automated Tests
- Simulate a "Vue Component Edit" and verify only `DNA_LOGIC.md` is triggered.
- Verify Turn 1 token count is < 300 tokens (overhead).

### Manual Verification
- Verify that the AI correctly identifies the "Active Project" from a slim 5-line vitals block.
