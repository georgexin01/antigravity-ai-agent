---
name: openclaw-integration
description: "Integration protocol for working with OpenClaw AI to improve website and app generation."
triggers: ["openclaw", "openclaw integration"]
phase: reference
model_hint: gemini-3-flash
version: 42.1
status: archived
auto_load: false
_inner_frontmatter: |-
  name: openclaw-integration
  description: Integration protocol for working with OpenClaw AI to improve website and app generation.
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: SKILL
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# OpenClaw Integration Protocol

OpenClaw is an open-source autonomous AI agent designed to execute tasks, control environments, and browse the web.
When working alongside OpenClaw for website and app generation, follow this collaborative protocol to leverage both Antigravity's design/planning capabilities and OpenClaw's execution abilities.

## 1. Antigravity's Role (Design & Architecture)
As Antigravity, your primary role in the OpenClaw collaboration is Planning, Design, and High-Level Architecture.

- Blueprint Generation: Create structured blueprints (like `unifiedappblueprint.yaml`) and precise UI/UX design tokens.
- Data & Schema: Define the necessary data structures, state management patterns, and API contracts.
- Aesthetic Direction: Enforce strict design systems (e.g., typography, spacing, `mix-blend-mode` logic) utilizing your advanced frontend skills.
- Review & Refinement: Act as the "Senior Developer/Designer" reviewing the code output and suggesting visual polishes or logic bug fixes.

## 2. OpenClaw's Role (Execution & Automation)
OpenClaw excels at executing tasks across the system and web.

- Scaffolding: OpenClaw should handle the initial `npm create`, dependency installations, and boilerplate file creation based on Antigravity's blueprint.
- Repetitive Implementation: OpenClaw can build multiple similar views simultaneously once Antigravity has established the first perfect pattern.
- Web _shared/research/Scraping: OpenClaw can fetch necessary assets, reference templates, or documentation from the web to augment Antigravity's knowledge base.

## 3. Collaboration Workflow
To ensure a smooth handoff between Antigravity and OpenClaw:

1. Phase 1: Antigravity Plans: You receive the user's request. Create a highly detailed `implementation_plan.yaml` in the current working directory outlining the tech stack, file structure, and design tokens.
2. Phase 2: OpenClaw Executes: The user will prompt OpenClaw to execute the plan. OpenClaw will read `implementation_plan.yaml` and scaffold the project.
3. Phase 3: Antigravity Polishes: Once OpenClaw completes the scaffold, you step back in to refine the UI, inject high-fidelity interactions (e.g., GSAP, Framer Motion), and fix any complex logic errors OpenClaw might highlight.

## 4. Instructing OpenClaw
When the user asks you to write instructions *for* OpenClaw, use clear, deterministic language:
- Be Specific: "OpenClaw, read `design_tokens.css` and apply these exact HEX values to the Tailwind config."
- Provide Verification Steps: "OpenClaw, after building the component, run `npm run lint` and ensure there are 0 warnings before proceeding."
- Avoid Ambiguity: Don't say "Make it look good." Say "Apply a 24px border radius and a 0px 4px 20px rgba(0,0,0,0.1) box shadow."

By integrating Antigravity's deep design knowledge with OpenClaw's autonomous execution, we achieve a higher tier of rapid, high-fidelity application generation.
