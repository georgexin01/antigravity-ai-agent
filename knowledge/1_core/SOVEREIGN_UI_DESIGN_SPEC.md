---
name: sovereign-ui-design-spec
description: "主权 UI 设计规范 (V1.0) — 深度 Tailwind + 自定义 CSS 融合指南。"
triggers: ["ui", "design", "tailwind", "vue", "button", "input", "checkbox", "premium"]
version: 1.0
status: authoritative
---

# 🎨 主权 UI 设计规范 (SOVEREIGN UI SPEC)

## ⚖️ 0. 设计哲学 (PHILOSOPHY)
拒绝原生 HTML 样式。所有交互组件必须具备：**触感反馈 (Tactile)**、**视觉层级 (Elevation)** 和 **主题一致性 (Tonal Harmony)**。

## 🛠️ 1. Tailwind 深度定制指南

### 1.1 交互按钮 (Tactile Buttons)
*   **基础**: `rounded-stitch-btn` (12px)。
*   **反馈**: 必须包含 `active:scale-95 transition-all duration-300`。
*   **阴影**: 使用自定义 `shadow-stitch-soft` (浅绿偏移)。
*   **伪元素**: 利用 `after:` 或 `before:` 增加边框高光，模拟物理质感。

### 1.2 高保真输入框 (Premium Inputs)
*   **样式**: 禁止使用原生边框。采用 `bg-white/50 backdrop-blur-sm` 配合 `border-b-2 border-theme-200`。
*   **Focus 态**: 使用 `focus:ring-offset-2 focus:ring-theme-500` 营造光晕效果。

### 1.3 自定义复选框 (Custom Checkboxes)
*   **实现**: 隐藏 `appearance-none`，使用 `w-6 h-6` 的 `div` 模拟。
*   **状态**: 选中时触发 `bg-theme-900` 的缩放弹出动画 (`animate-pop`)。

### 1.4 日期与日历 (Calendar & Dates)
*   **视觉**: 采用网格布局，使用 `aspect-square` 确保日期单元格为正方形。
*   **色彩**: 选中的日期使用 `bg-theme-500 text-ink`。

## 🧪 2. Style.css 核心集成
在 `style.css` 的 `@layer components` 中将 Tailwind 类组合为语义化组件，例如：
```css
.stitch-input-field {
  @apply w-full px-4 py-3 rounded-stitch-btn border-none bg-theme-50/50 focus:bg-white focus:ring-2 focus:ring-theme-200 transition-all outline-none;
}
```

---
*Sovereign Design Node — V1.0*
