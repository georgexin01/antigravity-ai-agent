# Mobile App Design DNA Library (VSS v2.0 - Hyper-Density Edition)

> **CRITICAL DIRECTIVE**: This document is the ultimate authority for **Mobile App (iOS/Android) architecture**. Do NOT use this for standard websites. Use these VSS "formulas" to read, store, and replicate God-Tier mobile app layouts.

---

## 1. Vector Shorthand Syntax (VSS) - Mobile Adaptation

The VSS allows the AI to extract and store complex nested app layouts (from UI images, Figma, or live apps) into compact strings.

### Core Syntax Rules
- **`( )`** = Screen / Scaffold Boundary
- **`{ }`** = View / ViewContainer (Div equivalent)
- **`[ ]`** = Style Injector (React Native / CSS styling). *e.g., `[flex:1 rounded:xl bg:dark]`*
- **`< >`** = Native Components (e.g., `<ScrollView>`, `<SafeArea>`)
- **`" "` (Space)** = Grouping tool. Keep variables distinct: `{ a + b }`.

### Expanded Variable Dictionary (Unlimited Storage)
The AI is permitted to use an unlimited combination of 26 lowercase letters, 26 uppercase letters, symbols, and numbers. **Case matters**:
- **Uppercase (Structural)**: `C` (Container), `T` (Title), `List` (ListView).
- **Lowercase (Elements)**: `card`, `t` (text), `icon`, `img` (image), `btn`.
- **Symbols**: `$` (System component like `$NavBar`, `$TabBar`, `$FloatingActionBtn`), `@` (Absolute Positioning), `*` (Multiplier).

### Utility-First Style Injector (Bootstrap-Inspired Mobile Adaptation)
When writing styling inside `[ ]`, adopt predictable abbreviations combined with mobile-specific logic:
- **Spacing (`m`, `p`)**: Format `{property}{sides}-{size}`. Sides: `t`, `b`, `l`, `r`, `x`, `y`. *E.g., `[pt-24 pb-16 mx-auto]`.*
- **Layout & Sizing**: Use Flexbox & standard sizing. *E.g., `[w-100]`, `[h-100]`, `[flex-1]`, `[align-center justify-between]`.*
- **SafeArea Modifiers**: Combine spacing with device limits. *E.g., `[pt-safe]`, `[pb-safe]` (Safe Area margin/padding).*
- **Interaction Targets**: `[touch-target]` implies a strict minimum 44x44px hit-area size mapping for accessibility.

---

## 2. Advanced Mobile Prototypes (God-Tier Mobile)

*   **Fluid Gestures**: Swipeable cards, bottom sheets with spring physics logic.
*   **Biometric Focus**: Centered thumb-zones for primary actions.
*   **Glassmorphic Overlays**: `[backdrop-blur:20px]` for TabBars and Modals over content.
*   **Haptic Spacing**: Padding must feel deliberate and breathable (e.g., 24px margins on screen edges).

---

## 3. Master Evolution & Intelligence Protocol

To expand the AI's app design intelligence autonomously, the **AI MUST actively and constantly update this document**:

1. **Auto-Evolution of Syntax**: If the AI encounters a new mobile gesture, native component, or complex layout that VSS struggles with, the AI **MUST** invent a new VSS symbol/rule and append it to the "Core Syntax Rules" above.
2. **Visual Image Extraction**: When parsing mobile app screenshots, Dribbble concepts, or Figma files, immediately codify the structure into VSS and append it below.
3. **Live Harvesting Protocol**: For any live view URL provided, extract the "Industrial-Standard" mobile/app dashboard logic, interaction spring-physics, and haptic-responsive components.
4. **MANDATORY EXTRACTION VAULTING**: Every unique mobile app layout the AI builds or studies MUST be appended to "Section 4: The Extraction Repository". The AI has permission to store an **unlimited** number of samples to build its design memory.

---

## 4. The Extraction Repository (Mobile App Vault)

This repository stores unlimited structural extraction patterns from high-end mobile apps. When the AI scans an image or researches an app, the layout MUST be codified and pushed here.

### Format Standard
- **Label**: [Component/Screen Type]
- **Title**: [Human Readable Name & Dimensions]
- **Description**: [Detailed structural logic & interaction behavior]
- **VSS Formula**: [The exact notation]

---

### [Stored Samples]

#### Sample 1: Ultra-Premium FinTech Dashboard
- **Label**: Dashboard
- **Title**: 3-Tier Wallet Overview
- **Description**: A mobile wallet dashboard featuring a large balance card with glassmorphism, followed by a horizontal scrolling quick-action bar, and a vertical list of recent transactions.
- **VSS Formula**: `( <SafeArea> { $NavBar [y-center] } | { <ScrollView> { Card_Glass [p24px mx24px rounded:2xl] T_Balance + t_Sub } | { <ScrollView horizontal> { Action_Icon [p16px rounded:full] * 4 } } | { List_Container [mt32px] { Transaction_Row [y-center x-between py16px] * 5 } } } { $TabBar [absolute b0 backdrop-blur] } )`

#### Sample 2: Immersive E-Commerce Feed
- **Label**: Feed
- **Title**: Full-Screen Video Swipe Feed
- **Description**: A TikTok-style full-screen product vertical swipe feed. The UI overlays the video with a right-side interaction column and bottom product details.
- **VSS Formula**: `( { Screen_Relative [flex:1] <Video_Bg absolute inset0> | { Overlay_UI [absolute inset0 justify-between] { T_Product [absolute b100px l24px] } + { Interaction_Column [absolute b100px r16px y-center gap20px] Icon_Like + Icon_Comment + Icon_Share } } } )`
