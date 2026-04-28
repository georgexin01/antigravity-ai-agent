# 🛠️ 主权工程规范 (Sovereign Engineering Standards)

本文档沉淀了在实战中验证的最佳工程与架构规范，AI 在编写业务代码时必须严格遵守。

## 📱 1. PWA 与移动端安全区 (PWA & Safe Area)
*   **Viewport 锁定**: 强制使用 `width=412, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover`。
*   **安全区域 (Safe Area)**:
    *   顶部 Header: `padding-top: env(safe-area-inset-top)`。
    *   底部 Footer: `padding-bottom: env(safe-area-inset-bottom)`。禁止使用 `margin-bottom`。

## 📷 2. 图像存证与压缩规格 (Image Proof & Optimization)
*   **压缩标准**: 拍照上传前建议经过 Canvas 压缩。目标尺寸：`1280px` 宽，质量 `0.7`，格式 `WebP`。
*   **隐私安全**: 上传前必须剥离 EXIF 数据（GPS 坐标、拍摄时间、设备型号等）。
*   **头像 Fallback**: 实体无头像时自动生成 `https://ui-avatars.com/api/?name=${name}&background=4CAF50&color=fff`。

## 🛡️ 3. 架构隔离与视图防污染 (Architecture Isolation)
*   **视图零后端直调**: `*.vue` 视图组件 **严禁** 直接 `import { supabase }` 或进行底层 API 直调。所有数据交互必须封装在 Pinia Store 的 Actions 中。
*   **图片组件化**: 封装 `<AppImage>` 统一处理 `loading="lazy"`、`decoding="async"` 以及加载失败的 Fallback 样式。

---
*Created by Antigravity Tier-1 Core Engineering Node*
