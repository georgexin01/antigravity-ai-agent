# JIN HONG M&E - 品牌官网标准化设计规范 (Design Spec)

## 1. 核心定位 (Brand Identity)

- **品牌调性**: 国际视野、高精尖科技感、专业可靠、重工业实力。
- **视觉风格**: 现代商务 + 工业科技 (Modern Corporate + Tech Industrial)。以深色/冷色系奠定可靠基调，亮色点缀传达活力与科技感。摒弃廉价的传统纯蓝，转向更具质感的“深空蓝”与“电光青”。

## 2. 色彩体系 (Color System - Design Tokens)

### 主品牌色 (Primary)

- `--color-primary-dark`: `#0B192C` (深空极夜蓝 - 用于背景、页脚、强烈对比模块，传递厚重工业感)
- `--color-primary`: `#1A5F7A` (工业海蓝 - 用于主导视觉、大面积色块)
- `--color-primary-light`: `#227C9D` (亮青蓝 - 用于Hover或辅组强调)

### 辅助强调色 (Accent)

- `--color-accent`: `#FFC107` (工业警示黄 - 非常克制地用于核心CTA按钮、重要图标点缀，与深蓝形成极致对比)

### 中性色/文本色 (Neutrals)

- `--color-text-main`: `#1F2937` (深灰 - 主文本)
- `--color-text-muted`: `#6B7280` (中灰 - 辅助文本)
- `--color-bg-light`: `#F9FAFB` (极浅灰 - 斑马线背景交替)
- `--color-bg-white`: `#FFFFFF` (纯白 - 卡片背景)
- `--color-border`: `#E5E7EB` (边框分隔线)

## 3. 字体体系 (Typography System)

- **字体栈 (Font Stack)**:
  - **英文字体 (Headings & Numbers)**: `'Space Grotesk', sans-serif;`
    - _(选用 Space Grotesk：这款带有强烈几何感与科技属性的字体，非常适合展现“高精尖机电”、“数据中心”、“重工业”的精密感。用于大字号数字（如 800+）和英文字母时极具视觉冲击力。)_
  - **中文字体 (Body & Chinese Text)**: `'Noto Sans SC', 'Inter', sans-serif;`
    - _(选用思源黑体 (Noto Sans SC) 替代系统默认的微软雅黑，字重丰富，屏幕阅读体验极佳，能带来高级的现代企业官网质感。)_
- **字号与垂直节奏 (Scale & Rhythm)**:
  - `H1` (Hero Banner): `56px` (移动端 `40px`)，字重 `700`，行高 `1.1`。
  - `H2` (Section Title): `36px` (移动端 `28px`)，字重 `600`，行高 `1.2`。
  - `H3` (Card Title): `20px`，字重 `600`。
  - `Body` (正文): `16px`，字重 `400`，行高 `1.6`。
  - `Small` (备注/标签): `14px`，字重 `400`，行高 `1.5`。

## 4. 深度板块排版规范 (Advanced Layout & Content Architecture)

_(注：坚决摒弃“简单Div色块+Icon+居中文字”的廉价老旧排版，全面采用 2024/2025 现代网页高阶图文空间建构手法)_

### 通用布局框架 (Global Architecture)

- **非对称网格 (Asymmetrical Grids)**: 打破传统的 12 栏绝对对称。采用 7:5 或 8:4 的不对称比例切割空间，制造视觉张力带来的高级感。
- **留白即呼吸 (Macro Whitespace)**: 模块间距拓展至 `120px` (移动端 `80px`)，给大字体和高清图片留足空间。

### 核心板块重构方案 (Section Enhancements)

1. **Hero Banner (首屏视觉 - 沉浸式叙事)**:
   - **视觉层**: 左侧或底层铺设高质量的“工程实拍图”或“数据中心线框图”，覆盖一层深度昏暗的渐变遮罩 (`linear-gradient(to right, #0B192C 40%, transparent)`)保证文字可读性。
   - **交互层**: 引入大字号 `Space Grotesk` 标题，并配有极简的滚动引导 (Scroll Down Indicator)。

2. **企业实力与简介 (Split Screen: Image + Content)**:
   - **布局模式**: 采用经典的屏幕对半切割 (50/50 Split View)。
   - **左侧视觉区**: 放置精心裁剪的建筑/施工现场高清叠图 (Layered Images)，而非单调的一张图。可以是一大一小两张图交错放置，带有一点视差位移。
   - **右侧内容区**: 采用大段落留白，搭配结构化的金字塔文本（大标题 -> 亮色副标题 -> 段落正文）。

3. **核心优势/关键数据 (Bento Box & Data Viz)**:
   - **布局模式**: 彻底放弃 4 个均等大小的方块。改为流行的**便当盒 (Bento Box)** 布局。
   - 比如一个跨越两列的宽卡片展示“800+ 劳工团队（附带团队实录微视/背景图）”；旁边搭配两个正方形小卡片展示“持牌资质”。
   - **材质**: 背景采用高深度的暗色毛玻璃卡片 (`backdrop-filter: blur(16px)`)。

4. **业务范围 (Rich Hover Cards with Imagery)**:
   - 放弃纯 Icon 排版。每个服务项目（如“电气工程”、“通风空调”）必须是 **高质量背景图 + 黑色半透明遮罩** 的深层卡片。
   - **交互设定**: 默认状态只显示服务名称（大号醒目字体），鼠标 Hover 时遮罩颜色变深，描述性内容和“查看详情”按钮从底部优雅滑出。

## 5. 交互与微动效 (Interaction Design)

- **全局过渡 (Transitions)**: 所有可点击元素应用 `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`。
- **导航栏 (Navbar)**: 滚动超出首屏时，导航栏增加背景毛玻璃效果 `backdrop-filter: blur(10px)` 和细微边界阴影。
- **按钮 (Buttons)**: 主按钮 (CTA) 悬浮时，增加发光阴影效果 `box-shadow: 0 4px 14px 0 rgba(255,193,7,0.39);` (配合 Accent 警示黄)。

---

**设计评估结论 (Design Audit)**: 当前网站结构清晰但视觉平庸偏旧。本规范通过引入 `Outfit` 字体、深空蓝与工业警示黄的撞色体系、Bento盒布局以及毛玻璃质感，将在不增加额外大图的基础上，将界面“高精尖/专业”质感提升数个档次（对齐现代科技企业风格）。
