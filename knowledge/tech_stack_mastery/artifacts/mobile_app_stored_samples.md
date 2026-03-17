# Master Stored Samples: Mobile App DNA

This repository stores structural patterns optimized for mobile viewport performance and thumb-friendly interaction.

## Standard Format

- **Label**: [Screen/Component Type]
- **Title**: [Human Readable Pattern Name]
- **Description**: [Logic and visual behavior]
- **VSS Formula**: [Mobile V2.0 Shorthand]

---

### [Stored Samples]

#### 1. Animated Hero Slider (App Home)

- **Label**: Hero / Slider
- **Title**: Mobile Animated Brand Slider
- **Description**: High-impact 180px height slider with text overlays and dot indicators. Optimized for small screen impact.
- **VSS Formula**: `( { Slider_Container [h-180 rounded-12 relative overflow-hidden shadow-lg] { Track [d-flex] { Slide [min-w-100 h-100 relative] @Overlay [absolute bottom-0 gradient-top] T_Slide + p_Desc } * 3 } + @Dots [absolute bottom-15 right-20 d-flex gap-6] } )`

#### 2. Interior Designer Order Grid

- **Label**: Grid / Shopping
- **Title**: High-Density Variation Selection
- **Description**: Compact 2-column grid for showcasing material variations with direct hit targets for ordering.
- **VSS Formula**: `( { Row [gap-3 py-4] { Col_6 { Card_Glass [p-2 text-center clickable shadow-sm] img_Square + T_Bold + t_Muted + Badge_Stock } * 4 } } )`

#### 3. Administrative Order Card (Approval Flow)

- **Label**: Card / Workflow
- **Title**: Lock/Unlock Status Card
- **Description**: Vertical card with badge status, price summary, and role-based action buttons (Unlock/Approve).
- **VSS Formula**: `{ Card_White [glass shadow-soft mb-3 p-3] { Header_Flex T_Product + Badge_Status } | { Stats_Flex [fs-small] t_Qty + T_Total } | { Action_Group [mt-3] !Btn_Quartz_Full } }`

#### 4. 6-Digit OTP Verification Grid

- **Label**: Auth / Form
- **Title**: Standard Mobile OTP Input
- **Description**: 6 independent verification boxes with auto-focus and large numeric hit areas.
- **VSS Formula**: `( { OTP_Container [d-flex justify-between mt-4] { Input_Digit [w-45 h-55 fs-24 fw-bold border rounded-8] * 6 } } )`

#### 5. User Selection "Normal" Login

- **Label**: Auth / Login
- **Title**: Multi-Role "Normal" Entry
- **Description**: Standard phone/password form with high-contrast buttons and secondary navigation for Signup.
- **VSS Formula**: `( { Login_Card [glass p-4] { Input_Group T_Label + i_Icon + f_Input } * 2 + !Btn_Primary [py-3 mb-3] + Links_Flex [text-center] t_Muted + !Link_Signup } )`

#### 6. Stitch Premium Inventory Catalog (Stitch v1.1.0)

- **Label**: Catalog / Mobile
- **Title**: Stitch Premium Inventory Grid
- **Description**: Adaptive search and chip-filter layout with aspect-ratio locked product cards and safe-area aware bottom navigation. Features `no-scrollbar` horizontal categories.
- **VSS Formula**: `( { Header_Sticky [blur border-b safe-pt] { Flex_Between [px-4 py-4] Logo_Group + Notification_Btn } } | { Main_Scroll [pb-32 px-4] { Search_Bar [relative rounded-xl shadow-sm] } | { Chips_Row [flex gap-3 overflow-x-auto no-scrollbar] Btn_Active + Btn_Ghost * 3 } | { Grid_3_Col [gap-6] { Card_Product [rounded-xl shadow-sm overflow-hidden group] { Img_Box [aspect-4/3 relative] img_Cover + Badge_New@TR } | { Content_P4 T_Bold + p_Muted + Action_Row } } * N } } | { Nav_Fixed_Bottom [blur border-t safe-pb] { Tab_Group [h-20 justify-around] !Tab_Active [w-20 text-primary] + !Tab_Inactive [w-20 text-muted] * 4 } } )`
