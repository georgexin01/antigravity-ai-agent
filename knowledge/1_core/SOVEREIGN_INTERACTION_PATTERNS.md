# 🪄 主权交互与动效规范 (Sovereign Interaction Patterns)

本文档沉淀了在实战中验证的高保真前端交互公式，确保所有应用具备统一的工业美学。

## 📦 1. 空状态公式 (Empty State Formula)
当列表无数据可用时，**必须** 渲染以下标准空状态，严禁粗暴显示“无数据”文本：

```html
<div class="flex flex-col items-center justify-center py-20 px-10 text-center gap-4">
  <div class="size-20 rounded-full bg-gray-100 flex items-center justify-center">
    <!-- Icon 视上下文而定 -->
    <Icon name="inventory_2" class="text-gray-400 text-4xl" />
  </div>
  <p class="text-gray-900 font-bold text-lg">{{ emptyTitle }}</p>
  <p class="text-gray-500 text-sm">{{ emptyHint }}</p>
  <button @click="refresh" class="text-primary font-bold text-sm mt-2">刷新</button>
</div>
```

## 🪄 2. 微动效设计手册 (Micro-Interactions)
为增强页面的“呼吸感”，推荐采用以下动效：
1.  **梯次入场 (GSAP Entrance)**: 列表卡片采用 `GSAP stagger: 0.1`，模拟丝滑滑出感。
2.  **状态呼吸 (Pulse)**: 关键点位（如 GYOR 状态）在地图上执行 `2.0s` 周期的阴影扩散。
3.  **行为确认 (Vibe)**: 成功提交表单后，目标按钮执行短暂的高亮闪烁反馈。

## 🔒 3. 主权弹窗防呆规范 (Sovereign Modal Pop)
为避免在多端（特别是移动端原生嵌套）环境中，父级组件的 `transform` 导致 `position: fixed` 错位失效：
*   **挂载策略**: 弹窗必须使用 Vue 的 `<Teleport to="body">` 或 `document.body.appendChild` 挂载至顶层 DOM。

---
*Created by Antigravity Tier-1 Core Knowledge Engine*
