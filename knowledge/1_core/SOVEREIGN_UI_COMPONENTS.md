# 🧱 主权 UI 组件与路由规范 (Sovereign UI Components & Routes)

本文档沉淀了标准的前端组件布局、交互体验以及 URL 路由跳转的最佳实践。

## 🎨 1. 核心组件规格 (Core Components)

### 1.1 主权卡片 (Sovereign Card)
*   **基础样式**: `bg-white`, `rounded-2xl` (16px)，配合阴影 `.ios-shadow` (`0 10px 30px rgba(0,0,0,0.05)`)。
*   **悬浮反馈**: `hover:scale-[1.01] hover:shadow-lg transition-all duration-300`。

### 1.2 贴底导航 (Flush Footer)
*   **物理布局**: `fixed bottom-0 left-0 w-full z-50`。
*   **安全区适配**: 必须设置 `padding-bottom: env(safe-area-inset-bottom)`，防止手势条遮挡。
*   **视觉隔离**: 背景推荐纯白或极浅背景，顶部配有 1px 极细灰色分割线 (`border-t border-gray-100`)。

### 1.3 顶部导航栏 (Header)
*   **安全区适配**: 必须设置 `padding-top: env(safe-area-inset-top)`，适配刘海屏及挖孔屏。
*   **粘性磨砂感 (Sticky Glass)**: 推荐使用 `sticky top-0 z-50 backdrop-blur-md bg-white/90` 实现半透明下沉的高级感。

## 🚀 2. 鲁棒性路由规范 (Robust Navigation & Routes)

### 2.1 失败即关闭重定向 (Fail-Closed Redirects)
*   **空数据降级**: 当详情页（如 `/orders/:id`）检测到数据不存在时，**严禁** 停留在空白页面。必须静默执行 `router.replace('/orders')` 返回安全父级。
*   **鉴权守护**: 未登录用户访问保护路由，一律无缝重定向至登录页。
*   **统一 URL 设计**: 路由命名采用小写-连字符（如 `/order-detail`），清晰表达层级关系。

## 👆 3. 人体工程学优化 (Ergonomics)
*   **单手大拇指法则**: 移动端的核心交互动作（如【确认】、【拍照】、【保存】）必须放置在屏幕下半部的 1/3 区域，确保单手握持时大拇指轻松触达。

---
*Created by Antigravity Tier-1 Core UI Node*
