# MOBILE APP: Food Delivery Dashboard (Dark Mode)

> **Extraction Date**: 2026-04-07
> **Color Theme**: Absolute Dark (`--bg-900`) with Vivid Orange (`--primary-500`) accents.
> **Architecture**: High-density horizontal SCROLL loops.

## The Extracted VSS 4.0 Layout

### 1. Navigation Header (Sticky)
`{ Cg [pad:3 flex:row justify:between align:center] { C_Search [bg:dark round:pill flex:row] Ii_search & Tm_<Search Dish...> } + Bp_<FilterMenu> [round:circle bg:orange w:48px h:48px] }`

### 2. Exclusive Offers (Carousel)
`( { Cg [pad:3] { Th_Exclusive & B_SeeAll [col:orange] } } )`
`+`
`{ = C_PromoCard [bg:orange round:xl pos:relative depth:3 h:200px overflow:hidden] { Tp_Weekend + Th_Special { T_30 + Tm_percent } + !Bp_GetNow [bg:black round:lg] } + Ib_<GrayBox:PizzaHero> [pos:absolute top:0 right:0 w:50%] }`
`+`
`{ Cf [flex:row justify:center mt:3 gap:2] { Dot_Active [bg:orange] + Dot * 3 [bg:dark] } }`

### 3. Explore Categories (Pill Scroll)
`( { Cg [pad:3] { Th_Explore & B_SeeAll [col:dark] } } )`
`+`
`{ Cf [flex:row gap:2 overflow:x-scroll pad_x:3] { !Bp_Burger [round:pill bg:orange] Ii_Burger & Tp_Burger } + { Bg_Pizza [round:pill bg:dark] Ii_Pizza & Tp_Pizza } + { Bg_Noodles [round:pill bg:dark] Ii_Ndl & Tp_Ndl } }`

### 4. Popular Dishes (Product Grid Scroll)
`( { Cg [pad:3] { Th_Popular & B_SeeAll [col:dark] } } )`
`+`
`{ Cf [flex:row gap:3 overflow:x-scroll pad_x:3] { c_Product [round:lg bg:dark pos:relative depth:3 w:220px] { Tm_Badge [pos:absolute top:2 left:2 bg:green fs:xs round:pill] + B_Favorite [pos:absolute top:2 right:2 bg:black round:circle] } + Ib_<GrayBox:PizzaImage> [w:100 h:120px round_t:lg] + { pad:3 { Th_Title + { Ii_Star[col:orange] & Tp_4.9 } + Tm_DeliveryTime } } } * 4 }`

### 5. Bottom Universal Nav (Fixed)
`( { C_BottomNav [pos:fixed bottom:0 w:100 bg:black flex:row justify:between pad:4 border:top] { Cg [flex:col align:center] Ii_Home_Active & Tm_Home [col:orange] } + { Cg [flex:col align:center] Ii_Explore & Tm_Explore } * 4 } )`
