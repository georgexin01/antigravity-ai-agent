# Knowledge: Stitch Visual Protocol (SVP)

> The "Stitch Visual Protocol" is a set of elite design and prompting guidelines derived from Google Stitch.
> **Includes**: Official Stitch & AI Studio Modal Protocols (merged)

## 0. Source Priority & Default Actions

- **Priority**: stitch-app-developer SKILL > Google AI Studio > agent_core_protocol
- **Default**: On any "create/redesign" request, generate `stitch-ui-design` prompt mapping FIRST
- **Visual Extraction**: Use AI Studio multimodal to parse images/PDFs into structural components before coding
- **Component-First**: Design modularly in Stitch → export to HTML/CSS/PHP
- **Modal Mastery**: All notifications/forms in glassmorphism modals. Desktop = centered, Mobile = bottom sheet.

## 1. Multimodal Prompting (MMP)

To achieve Stitch-grade quality, prompts for `generate_image` or UI descriptions MUST include:

- **Visual Anchors**: Mention specific textures (Glassmorphism, Brushed Metal, Translucent Organic).
- **Lighting Model**: Specify "Studio Lighting," "Soft Ambient Glow," or "Cybernetic Neon Trails."
- **Art Direction**: Reference "Japanese Minimalism," "Silicon Valley Premium," or "Futuristic High-Tech."
- **Depth-of-Field**: Always specify 3D depth, perspective (preserve-3d), and parallax readiness.

## 2. Hierarchical Design (1.1 - 1.4)

Break down UI components using the Stitch Hierarchy:

- **1.1 (Shell)**: Structural layout (Bento, Sidebar, etc.).
- **1.2 (Substance)**: Core components (Cards, Forms, Lists).
- **1.3 (Style)**: Visual signatures (Gradients, Glows, Borders).
- **1.4 (Soul)**: Micro-interactions and animations (Tilt, Hover, Reveal).

## 3. Platform Fidelity

Strictly adhere to platform-specific metrics for all "App" requests:

- **Mobile (iOS)**: 375pt width, 16-24px margins, SF Pro typography style.
- **Mobile (Android)**: 360dp width, Material Design 3 spacing rules.
- **Responsive Web**: 1440px grid baseline, fluid 12-column layout.

## 4. Visual Verification Logic

Before declaring a design "complete," verify:

- **Contrast**: WCAG 2.1 compliance (≥4.5:1).
- **Balance**: Check for "Ma" (negative space) in Japanese-inspired contexts.
- **Harmony**: Ensure all AI-generated assets in a single directory share the same lighting/material model.
