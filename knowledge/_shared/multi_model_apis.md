# Multi-Model API Configuration & Usage Limits

## API Keys
- **Anthropic (Claude) API Key**: stored in `.env.local` as `CLAUDE_API_KEY` (never committed)
- **OpenAI API Key**: stored in `.env.local` as `OPENAI_API_KEY` (never committed)
- **Cursor API Key**: stored in `.env.local` as `CURSOR_API_KEY` (never committed)

## Can the Agent Use These to Improve Performance or Reduce Tokens Automatically?
**No.** 
The Antigravity agent (currently running as Gemini) is a singleton autonomous agent powered *entirely* by the primary model selected in the IDE settings. 

The agent **cannot natively and autonomously farm out partial calculations, thinking, or tasks to Claude or OpenAI** in the background or via MCP to save its own tokens. 

## How These Keys CAN Actually Be Used
While the agent cannot swap its own brain or automatically delegate native background MCP sub-agent tasks using these keys, these keys *can* be used in explicit, custom implementations:

1. **Custom Skill Scripts**: We can write standalone Node.js or Python scripts that utilize the `openai` or `@anthropic-ai/sdk` libraries. The agent can then use the `run_command` tool to execute these scripts. This is excellent for heavy data-processing tasks where we want to offload work to a script (using another API) so it doesn't consume the main agent's context window.
2. **Dedicated MCP Servers**: If you run a custom MCP server that is specifically designed to hit Anthropic/OpenAI for data fetching or analysis, the agent can call those tools. However, this is just using the MCP like any other API tool; it does not replace the agent's core thinking process.

## Summary
Providing these keys does not magically make the Gemini agent run cheaper or faster automatically. To leverage them for cost or performance benefits, we must specifically build and run external scripts or MCPs that utilize these APIs for heavy-lifting tasks.
