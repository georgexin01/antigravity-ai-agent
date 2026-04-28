---
name: master-blueprint
description: "Global Tier-0 Industrial Master Blueprint for Website and WebApp creation. Continuous evolution manifest."
version: 1.9.0
status: master
last_updated: "2026-04-28"
---

# 💎 MASTER BLUEPRINT (V1.9)

## 🎯 1. 核心使命 (CORE MISSION)
本蓝图作为 Antigravity 系统内所有 Website 与 WebApp 项目的 **最高架构准则**。它定义了从基础建设到 UI/UX 高级交互的工业化标准，支持 **Eco-Industrial (环保工业)** 视觉风格，确保所有输出具备 100% 的一致性、美感与工程严谨度。

## 🏗️ 2. 核心原则 (CORE PRINCIPLES)
1.  **Pure White 设计语言**: 默认采用亮色模式，以纯白 (#FFFFFF) 为底，辅以品牌色阶梯。
2.  **Eco-Industrial 调色盘**: 采用深林绿 (#2E7D32) 作为主色，天空蓝 (#E3F2FD) 作为背景点缀。
3.  **Flush Footer 导航**: 100% 宽度贴底，支持移动端安全区，禁止使用浮动胶囊设计。
4.  **Fail-Closed 路由**: 严禁渲染"未找到"页面，未授权或数据缺失时自动执行降级或重定向。
5.  **Mock-First 开发模式**: 在数据库就绪前，必须通过 LocalStorage 或 Proxy 模拟完整业务流。
6.  **Stitch 布局规格**: 极致的空间利用率，移动端边距为 0，组件内边距严格遵循 `px-3`。
7.  **Dual-WebApp 协同**: 独立子目录部署（如 `/driver`, `/admin`），共享状态层逻辑，但 UI 与权限完全解耦。

## 🛠️ 3. 工业技术栈 (INDUSTRIAL TECH STACK)
*   **基础框架**: Vue 3.5 (Composition API)
*   **构建工具**: Vite 6 (极速 HMR)
*   **状态管理**: Pinia 3 (Options API Bakery Pattern)
*   **样式方案**: Tailwind CSS v4 (原子化控制)
*   **图标库**: Lucide Vue Next (2.0px stroke)
*   **移动桥接**: Capacitor 8 (原生功能访问)
*   **类型系统**: TypeScript (Strict Mode)

## 🎨 4. UI/UX 工业规格 (VISUAL SPECS)
*   **Viewport**: `width=device-width, initial-scale=1.0` (支持响应式缩放)
*   **Shell**: 移动端 `max-w-[480px] mx-auto`；平板端 (如 iPad) 支持优雅居中或栅格流式扩展。
*   **Typography**: Plus Jakarta Sans / Inter
*   **Art Style**: Eco-Industrial Surrealism (环保工业超现实主义)
    *   **Colors**: Deep Forest Green (#2E7D32), Sky Blue (#E3F2FD), Pure White (#FFFFFF).
    *   **Texture**: Canvas/Grain textures for premium tactile feel.
*   **Cards**: `ios-shadow` (0 8px 24px rgba(0,0,0,0.04))
*   **Buttons**: `h-14`, `rounded-xl`, `active:scale-[0.98]`
*   **Modals (弹窗)**: 居中卡片 (`rounded-[32px]`) 或底部抽屉 (`rounded-t-[32px]`)。必须配备 `backdrop-blur-sm` 与微缩放/渐变动画。
*   **Toasts**: `useUiStore` 统一出口，禁止 `alert()`

## 🧬 5. 进化协议 (EVOLUTION PROTOCOL)
*   **自修正**: AI 在项目中发现更优实践时，必须同步回本 Master。
*   **不可移除性**: 除非经过深度决策并文档记录，否则严禁裁撤上述核心结构。
*   **项目同步**: 新项目启动时，必须复制本 Master 并在此基础上进行业务参数化。

---
## 🔗 相关参考 (Related Links)
*   **工程母本**: [MASTER_APP_BLUEPRINT.md](MASTER_APP_BLUEPRINT.md)
*   **视觉协议**: [STITCH_UI_PROTOCOL.md](../../2_governance/STITCH_UI_PROTOCOL.md)
*   **核心组件**: [SOVEREIGN_UI_COMPONENTS.md](../../1_core/SOVEREIGN_UI_COMPONENTS.md)

---
*Created by Antigravity Tier-0 Governance Node*
