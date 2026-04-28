# 🎨 核心主权设计模式 (Sovereign Design Patterns)

本文档沉淀了直接从 `Views` 源码中提炼的高阶前端设计布局、状态映射和极致视觉对齐模式。

## 🏷️ 1. 横向滚动状态标签栏 (Horizontal Status Chips)
*   **适用场景**: 移动端列表页顶部的多状态、单选/多选动态过滤条。
*   **代码片段**:

```html
<!-- no-scrollbar 需要在 CSS 中通过 -webkit-scrollbar { display: none } 声明 -->
<div class="flex gap-2 overflow-x-auto no-scrollbar p-4 pb-2">
  <button v-for="(cfg, key) in statusConfig" :key="key" :class="[
    'shrink-0 px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 shadow-sm text-[11px] font-bold',
    activeFilters.includes(key)
      ? 'bg-slate-900 border-slate-900 text-white scale-105 ring-2 ring-slate-900/10'
      : 'bg-white border-gray-200 text-slate-600 hover:border-gray-400'
  ]">
    <span class="size-1.5 rounded-full" :style="`background-color: ${cfg.color}`"></span>
    {{ cfg.label }}
  </button>
</div>
```

## 📊 2. 状态导向卡片 (Status Strip Card)
*   **适用场景**: 包含工作流状态（创建、进行中、完成等）的通用列表卡片。
*   **代码片段**:

```html
<div class="bg-white rounded-2xl border border-gray-100 flex overflow-hidden shadow-sm active:scale-[0.98] transition-all duration-300">
  <!-- 左侧极致的竖向 GYOR 彩色状态切面 -->
  <div class="w-1.5 shrink-0" :style="`background-color: ${statusColor}`"></div>
  
  <div class="flex-1 p-4">
    <!-- 内容区域 -->
    <div class="flex justify-between items-start">
      <h3 class="font-bold text-slate-900">{{ title }}</h3>
      <span :class="['px-2 py-0.5 rounded-md text-[9px] font-black', statusBg, statusText]">
        {{ statusLabel }}
      </span>
    </div>
  </div>
</div>
```

---
## 🔗 相关参考 (Related Links)
*   **全局总纲**: [MASTER_BLUEPRINT.md](../0_apex/templates/MASTER_BLUEPRINT.md)

---
*Created by Antigravity Tier-1 Core Design Node*
