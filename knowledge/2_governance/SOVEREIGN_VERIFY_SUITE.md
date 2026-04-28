# 🔗 主权自动化验证套件 (Sovereign Verify Suite)

本文档定义了 AI 在交付任何代码前，必须执行的**自动化合规性预检（Pre-Flight Checks）**。

## 🔍 1. 静态代码门禁 (Static Code Gates)
在提交代码修改前，AI **必须** 利用内置的 `grep_search` 工具执行以下扫描，违者自动拦截重构：

### 🧱 1.1 视图零后端直调 (View Isolation)
*   **自检指令**: `SearchPath: src/views/`, `Query: "supabase.from"`
*   **合规标准**: **0 匹配**。所有数据访问必须下沉至 Store。

### 🎨 1.2 零原生组件污染 (No Raw Elements)
*   **自检指令**: `SearchPath: src/views/`, `Query: "<img "`
*   **合规标准**: **0 匹配**。强制使用 `<AppImage>` 封装组件。

### 🚨 1.3 杜绝原生弹窗 (No Native Alerts)
*   **自检指令**: `SearchPath: src/views/`, `Query: "alert("`
*   **合规标准**: **0 匹配**。必须使用 `useUiStore` 派发的全局 Toast。

### 📱 1.4 视口与平板适配 (Viewport & iPad Compatibility)
*   **自检指令**: 检查 CSS 类名或布局逻辑。
*   **合规标准**: 确保支持多端（移动端 + iPad）。在 iPad 等大屏上采用优雅居中或响应式栅格，杜绝野蛮拉伸。

## ⚖️ 2. 验证执行策略 (Verification Policy)
*   **严禁越权启动预览 (No Proactive Live Testing)**: AI 在交付代码前，**严禁** 擅自通过内置浏览器、Live View 或 Playwright 工具进行视觉预览测试。
*   **用户主导测试**: 所有实时渲染、人机交互及端到端（E2E）测试，一律交由用户（USER）手动执行。AI 必须将核心算力集中在静态合规与代码逻辑闭环上。

---
## 🔗 相关参考 (Related Links)
*   **全局总纲**: [MASTER_BLUEPRINT.md](../0_apex/templates/MASTER_BLUEPRINT.md)
*   **工程规范**: [SOVEREIGN_ENGINEERING_STANDARDS.md](../1_core/SOVEREIGN_ENGINEERING_STANDARDS.md)

---
*Created by Antigravity Tier-0 Governance Node V1.2*
