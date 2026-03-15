# Master Stored Samples: Website DNA

This is the high-density repository for all structural patterns extracted from live websites or AI-generated layouts.

## Standard Format
- **Label**: [Vertical/Type]
- **Title**: [Human Readable Pattern Name]
- **Description**: [Logic and visual behavior]
- **VSS Formula**: [V2.0 Shorthand]

---

### [Stored Samples]

#### 1. Interactive Image Gallery (3x6)
- **Label**: Gallery
- **Title**: 3x6 Interactive Grid
- **Description**: Image gallery with 3 boxes per row, modal enlargement on click.
- **VSS Formula**: `( { Gallery_Grid [grid-cols:3 gap20px] { Image_Wrap [cursor:pointer overflow:hidden] @ Modal_Trigger * 3 } } )`

#### 2. Liquid Data Bento
- **Label**: Bento
- **Title**: 4x2 Hyper-Bento with Pulse
- **Description**: Asymmetrical grid with large hero card and data-heavy side cards.
- **VSS Formula**: `( { Container [pt100px pb100px] { Bento_Grid [grid-cols:4] { Bento_Main [span2 row2 bg:glass-dark] T_Hero + p_Sub } + { Bento_Small [pulse-hover] * 4 } } } )`

#### 3. Bexon Zig-Zag About
- **Label**: About
- **Title**: Industrial Zig-Zag Narrative
- **Description**: Alternating image/text blocks with structural mesh backgrounds.
- **VSS Formula**: `( { Row [py100] { Col_6 { img_Industrial [rounded-lg shadow-xl] } | Col_6 { S_Tag + T_Bold + t_Detailed } } } @ { circular-dashed-bg } )`

#### 4. Ethereal AI Hero (Vercel Style)
- **Label**: Hero
- **Title**: Mesh-Gradiant Glass Hero
- **Description**: Centered headline with Serif-Italic emotive keywords over plasma mesh.
- **VSS Formula**: `( { @mesh-plasma [absolute top-0 z-0] } + { Content_Center [z-10] T_H1 + T_Italic_Keyword + p_Feature + !Btn_Pill [glow-pulse] } )`

#### 5. FinTech Rolling Dashboard
- **Label**: Dashboard
- **Title**: High-Trust Data Visualization
- **Description**: White-card interface with professional indigo accents and rolling numbers.
- **VSS Formula**: `{ Card_Main [shadow-xl bg-white] { Header_Flex } | { Grid_2 { Card_Inner [bg-green-50] "Income" + @rolling } + { Card_Inner [bg-red-50] "Spent" } } }`

#### 6. Action Kinetic Hero (Ref: Xriders)
- **Label**: Hero
- **Title**: Slanted Action Sports Hero
- **Description**: Slanted background dividers with high-contrast, heavy typography and "Kinetic Cut" clip-paths.
- **VSS Formula**: `( { S_Action [clip-slant bg-mesh relative] @img_Hero [fixed] + { Content_Center [slant-bg-red] T_Massive [uppercase] + !Btn_Skew } } )`

#### 7. Industrial Logistics Matrix (Ref: Kargon)
- **Label**: Data Grid
- **Title**: Heavy-Duty Logistics Stats
- **Description**: 4-column rigid grid with heavy left borders and radial progress SVG indicators for shipment tracking.
- **VSS Formula**: `( { S_Stats [bg-noise] { G_4 [gap-20 border-4] { Stat [px-4 border-l-4 border-orange] T_Num + t_Label + W_Radial [ring-62%] } * 4 } } )`

#### 8. Enterprise IT Modular Hero (Ref: Solvior)
- **Label**: Hero
- **Title**: React-Driven Consulting Hero
- **Description**: Modular left-aligned hero with "//" prefix sub-headings and pill CTAs with icons.
- **VSS Formula**: `( { S_Hero [d-flex flex-row align-center] { Col_6 T_Bold + p_Sub_Prefix["//"] + !Btn_Pill_Icon } | { Col_6 @img_Mockup } } )`

#### 9. High-Tech Enterprise Grid (Ref: Solvior)
- **Label**: Data Grid
- **Title**: Modular IT Service Matrix
- **Description**: 3-column minimalist grid with linear icons and large ghostly watermark numbers behind each card.
- **VSS Formula**: `( { G_3 [gap-6] { Card_Minimal [relative hover:glow-indigo] i_Line + T + t + @T_Num_Watermark[opacity-0.1] } * 3 } )`

#### 10. Residem Luxury Hero (Ref: Residem)
- **Label**: Hero
- **Title**: Architectural Minimalist Hero
- **Description**: High-end minimalist hero with gold/sand accents, wide-tracked typography, and ultra-thin "Address" floating tags.
- **VSS Formula**: `( { Header_Glass [px-120] } + { Content_Left [mt-20] [border-l-2 border-[#C8AD8F]] T_Address + T_Big_Sans + !Btn_Gold_Explore } )`

#### 11. Asymmetrical Property Grid (Ref: Residem)
- **Label**: Gallery
- **Title**: Luxury Asymmetrical Asset Grid
- **Description**: Museum-style gallery using heavy 120px white-space and intentionally offset images with floating square detail labels.
- **VSS Formula**: `( { S_Gallery [bg-[#FAFAF9] py150] { G_12 { img_Large [span-8] } | { img_Small_Offset [span-4 mt50] } + @Detail_Label [absolute p4 bg-[#0F2A24] text-white] } } )`

#### 12. Hoyo-Cyber Glass Panel (Ref: HSR)
- **Label**: Glass Panel
- **Title**: Hyper-Density Cyber-Blur Panel
- **Description**: Multi-layered news/promo panel with heavy backdrop-filter blur (60px+) and neon accent borders.
- **VSS Formula**: `{ Panel_Cyber [backdrop-blur-60 shadow-neon-blue] { Tab_Nav | News_List [fw-tech] + @img_Promo_Overlap } }`

#### 13. Dynamic Parallax Lore Slider (Ref: HSR/Genshin)
- **Label**: Slider
- **Title**: World Lore Atmosphere Slider
- **Description**: Full-screen horizontal slider with independent parallax layers for background atmosphere, landscape, and lore blurb.
- **VSS Formula**: `( { @Atmosphere_Parallax [z-0] + { @Landscape_Focus [z-1] } + { Lore_Blurb [z-2 absolute-m] T_Lore + p_Lore + !Btn_Explore } } )`

#### 14. Glitch-Art Hero Matrix (Ref: HI3rd)
- **Label**: Hero
- **Title**: Industrial Sci-Fi Hero
- **Description**: Background video with chromatic aberration/glitch overlays and high-density "Matrix" style download grids.
- **VSS Formula**: `( { @Bg_Vdo [filter-glitch] } + { Splash_Art [z-1] } + { G_Download [absolute-bottom-r] { DL_Item [border-glitch] QR + txt } * 3 } )`

#### 15. Real Estate Telemetry Bar (Ref: Residem)
- **Label**: Stats
- **Title**: Minimalist Property Telemetry
- **Description**: Ultra-thin floating status bar with property metrics (Sqft, Bed, Bath) and hairline dividers.
- **VSS Formula**: `{ Stat_Bar [bg-white/90 glass shadow-soft] { Stat [px-6 border-r] Val + Unit_Icon } * 4 }`

#### 16. Neon Gaming Hero (Ref: Playhost)
- **Label**: Hero
- **Title**: Nuclear Violet Action Hero
- **Description**: Full-screen slider featuring character-centric imagery, deep vignetting, and neon violet/cyan action buttons with price badges.
- **VSS Formula**: `( { @img_Full [filter-vignette] } + { Content [z-2] H_XL + p + !Btn_Violet + @Price_Badge [pulse] } )`

#### 17. AI Abstract Halo (Ref: Webze)
- **Label**: Hero
- **Title**: Minimalist Amber AI Halo
- **Description**: Centered minimalist typography over a large amber glowing halo/blur background with a clean email capture field.
- **VSS Formula**: `( { @Halo_Amber_Blur [absolute-center] } + { Center_Content [z-1] H_Center_XL + p_M + Form_Clean [input + !Btn_Submit] } )`

#### 18. Cyber-Shield Content Split (Ref: CyberGuard)
- **Label**: Content
- **Title**: Defensive Shield Split Layout
- **Description**: Two-column layout with a large absolute-positioned shield icon/graphic overlapping the divider line, paired with bulleted mission points.
- **VSS Formula**: `( { Col_Media [relative] @img_Shield_Abs } | { Col_Content H2 + p + List_Bullet + !Btn_Cyan } )`
