# Master Stored Samples: Mobile App DNA

This is the high-density repository for all mobile-specific patterns (iOS/Android/React Native) extracted or designed.

## Standard Format
- **Label**: [Platform/Type]
- **Title**: [Human Readable Pattern Name]
- **Description**: [Gesture and haptic logic]
- **VSS Formula**: [V2.0 Mobile Shorthand]

---

### [Stored Samples]

#### 1. Ultra-Premium FinTech Dashboard
- **Label**: Dashboard
- **Title**: 3-Tier Wallet Overview
- **Description**: Balance card with glassmorphism + scroll-action bar + transaction list.
- **VSS Formula**: `( <SafeArea> { $NavBar [y-center] } | { <ScrollView> { Card_Glass [p24px mx24px rounded:2xl] T_Balance + t_Sub } | { <ScrollView horizontal> { Action_Icon [p16px rounded:full] * 4 } } | { List_Container [mt32px] { Transaction_Row [y-center x-between py16px] * 5 } } } { $TabBar [absolute b0 backdrop-blur] } )`

#### 2. Immersive E-Commerce Feed
- **Label**: Feed
- **Title**: Full-Screen Video Swipe Feed
- **Description**: TikTok-style vertical sweep with absolute UI overlays.
- **VSS Formula**: `( { Screen_Relative [flex:1] <Video_Bg absolute inset0> | { Overlay_UI [absolute inset0 justify-between] { T_Product [absolute b100px l24px] } + { Interaction_Column [absolute b100px r16px y-center gap20px] Icon_Like + Icon_Comment + Icon_Share } } } )`

#### 3. Mobile Finance Terminal
- **Label**: Dashboard
- **Title**: High-Density Finance Control
- **Description**: Multi-trust indicators + dashed vertical process workflow.
- **VSS Formula**: `( <SafeArea> { Header_Indigo } | { Card_Balance [p24 bg-indigo-600 rounded-3xl] T_Balance + @rolling } | { Scroll_List { Step_Dashed [border-dash-l] T_Step + t_Desc } * 3 } )`
