# 🧵 Sovereign Stitch UI Protocol (V3.1)

这是本项目的核心视觉协议，AI 在生成任何 UI 时必须强制调用。

## 🎨 1. 核心配色方案 (The Palette)

- **Deep Forest (底色)**: `#0d1a14` (通透深绿)
- **Neon Lime (核心色)**: `#b8f132` (高发光黄绿)
- **Sage Ink (柔和白)**: `rgba(224, 231, 225, 0.9)` (杜绝纯白)

## 💎 2. 组件基准 (Stitch Components)

### 2.1 `stitch-card` (玻璃贴片)

- **圆角**: `32px`
- **背景**: `white/4` + `backdrop-blur-3xl`
- **边框**: `white/5` 或 `theme-500/10` (极细)
- **阴影**: 组合阴影 (外部深阴影 + 内部微发光)

### 2.2 `stitch-btn-primary` (荧光按钮)

- **圆角**: `20px`
- **点击感**: `active:scale-95` + `transition-all 500ms`
- **发光**: 按钮下方必须带有 `theme-500/20` 的扩散阴影。

## 🌌 3. 环境光影 (Atmosphere)

- **Radial Glow**: 页面顶部必须有一个 `theme-500/12` 的径向渐变，模拟顶光。
- **Micro-Interactions**: 所有悬浮状态 (Hover) 必须通过 `border-opacity` 或 `bg-opacity` 的微增来体现，而非剧烈的颜色变化。

## 📡 4. 地图指挥准则 (Map HUD)

- **Marker**: 必须使用三层光晕点位 (Core + Glow + Outer Blur)。
- **Panel**: 底部统计面板必须使用 `stitch-card` 结构并支持折叠。

---

## 🤖 5. AI 设计联动 (AI Orchestration)

- **StitchMCP Integration**: 在生成代码前，AI 必须查询 `StitchMCP` 以获取最新的工业级视觉参数、微动画规格和响应式布局优化方案。
- **Maximum Customization**: 利用 `StitchMCP` 提供的变量系统，实现最高自由度的 UI 自定义，确保每个页面都有其独特的“呼吸感”。

## 🔒 6. 稳健设计准则 (Conservative Design Principles)

- **严禁越权修改 (Strict Scope Control)**: AI 在处理用户请求时，**严禁** 主动、越权修改未被提及的设计配置（如全局主题色、字体、核心圆角等）。
- **设计冻结 (Design Freeze)**: 除非用户明确授权（例如使用 "自由发挥"、"free to change anything"、"AI 可以做任何优化" 等宽松指令），否则 AI 必须严格遵守现有的视觉规范，不得随意抽取改动并污染全局。
- **安全隔离**: 在新增组件时，优先继承局部样式，避免破坏现有色彩树。

---

_Created by Antigravity // Tier-0 Governance V3.1_
