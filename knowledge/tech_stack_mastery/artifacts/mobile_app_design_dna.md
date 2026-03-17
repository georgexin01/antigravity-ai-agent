# Mobile App Design DNA Library (VSS v2.0 - Hyper-Density Edition)

> **CRITICAL DIRECTIVE**: This document is the ultimate authority for **Mobile App (iOS/Android) architecture**. Do NOT use this for standard websites. Use these VSS "formulas" to read, store, and replicate God-Tier mobile app layouts.

---

## 1. Vector Shorthand Syntax (VSS) - Mobile Adaptation

The VSS allows the AI to extract and store complex nested app layouts (from UI images, Figma, or live apps) into compact strings.

### Core Syntax Rules

- **`( )`** = Screen / Scaffold Boundary
- **`{ }`** = View / ViewContainer (Div equivalent)
- **`[ ]`** = Style Injector (React Native / CSS styling). _e.g., `[flex:1 rounded:xl bg:dark]`_
- **`< >`** = Native Components (e.g., `<ScrollView>`, `<SafeArea>`)
- **`" "` (Space)** = Grouping tool. Keep variables distinct: `{ a + b }`.

### Expanded Variable Dictionary (Unlimited Storage)

The AI is permitted to use an unlimited combination of 26 lowercase letters, 26 uppercase letters, symbols, and numbers. **Case matters**:

- **Uppercase (Structural)**: `C` (Container), `T` (Title), `List` (ListView).
- **Lowercase (Elements)**: `card`, `t` (text), `icon`, `img` (image), `btn`.
- **Symbols**: `$` (System component like `$NavBar`, `$TabBar`, `$FloatingActionBtn`), `@` (Absolute Positioning), `*` (Multiplier).

### Utility-First Style Injector (Bootstrap-Inspired Mobile Adaptation)

When writing styling inside `[ ]`, adopt predictable abbreviations combined with mobile-specific logic:

- **Spacing (`m`, `p`)**: Format `{property}{sides}-{size}`. Sides: `t`, `b`, `l`, `r`, `x`, `y`. _E.g., `[pt-24 pb-16 mx-auto]`._
- **Layout & Sizing**: Use Flexbox & standard sizing. _E.g., `[w-100]`, `[h-100]`, `[flex-1]`, `[align-center justify-between]`._
- **SafeArea Modifiers**: Combine spacing with device limits. _E.g., `[pt-safe]`, `[pb-safe]` (Safe Area margin/padding)._
- **Interaction Targets**: `[touch-target]` implies a strict minimum 44x44px hit-area size mapping for accessibility.

---

## 2. Advanced Mobile Prototypes (God-Tier Mobile)

- **Fluid Gestures**: Swipeable cards, bottom sheets with spring physics logic.
- **Biometric Focus**: Centered thumb-zones for primary actions (Hit targets >= 44pt).
- **Glassmorphic Overlays**: `[backdrop-blur:20px]` for TabBars and Modals over content.
- **Haptic Spacing**: Padding must feel deliberate and breathable (e.g., 16px-24px margins).
- **Section-Specific Atmosphere**: Every screen module MUST have a unique background signature (Gradients, Mesh, or Subtle Pattern) to prevent visual fatigue.
- **10-Tier Color Shade Protocol**: Maintain theme tiers (`--theme-100` to `900`) for borders, text, and active states to ensure depth.
- **Industrial Crystal Icons**: Icons should use subtle glass backgrounds and borders to feel like interactable objects.

## 3. Stitch Extraction Protocols (Mobile v1.4)

### 3.1 Layout Utilities

- **1.1.1 `safe-pt` / `safe-pb`**: Mandatory use of safe-area insets for fixed headers/footers to support modern mobile notches.
- **1.1.2 `no-scrollbar`**: Standard for horizontal chip/category rows. Must hide scrollbars while maintaining gesture functionality.
- **1.1.3 Asp Ratio Lock**: All catalog images must use a fixed aspect ratio (e.g., `aspect-[4/3]` or `aspect-square`) to ensure grid alignment.

### 3.2 Visual Signatures

- **1.2.1 Glass Bottom Nav**: `backdrop-blur-lg` + `bg-white/95` with fixed `h-20` height and `w-20` tap zones for precise ergonomics.
- **1.2.2 Search Depth**: Input fields should use `shadow-sm` and `rounded-xl` for a software-as-a-service (SaaS) premium feel.

## 4. Master Evolution & Intelligence Protocol

To expand the AI's app design intelligence autonomously, the **AI MUST actively and constantly update this document**:

1. **Auto-Evolution of Syntax**: If the AI encounters a new mobile gesture, native component, or complex layout that VSS struggles with, the AI **MUST** invent a new VSS symbol/rule and append it to the "Core Syntax Rules" above.
2. **Visual Image Extraction**: When parsing mobile app screenshots, Dribbble concepts, or Figma files, immediately codify the structure into VSS and append it below.
3. **Live Harvesting Protocol**: For any live view URL provided, extract the "Industrial-Standard" mobile/app dashboard logic, interaction spring-physics, and haptic-responsive components.
4. **MANDATORY EXTRACTION VAULTING**: Every unique mobile app layout the AI builds or studies MUST be appended to "Section 4: The Extraction Repository". The AI has permission to store an **unlimited** number of samples to build its design memory.

---

## 4. The Extraction Repository (Mobile App Vault)

> [!IMPORTANT]
> To ensure infinite scalability, all high-density mobile app samples are now stored in:
> **[mobile_app_stored_samples.md](file:///C:/Users/User/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/mobile_app_stored_samples.md)**

This repository stores unlimited structural extraction patterns from high-end mobile apps. When the AI scans an image or researches an app, the layout MUST be codified and pushed to the external vault above.

### Format Standard

- **Label**: [Component/Screen Type]
- **Title**: [Human Readable Name & Dimensions]
- **Description**: [Detailed structural logic & interaction behavior]
- **VSS Formula**: [The exact notation]
