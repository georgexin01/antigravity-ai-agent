# LD Floor | Sentra Quartz — Stitch Standard Text (v1.0)

## 1.1 项目基础信息与视觉 DNA 【核心】

- **项目名称**: LD Floor | Sentra Quartz
- **主色调**: `#ec5b13` (Primary Orange) | `#D4AF37` (Quartz Gold) | `#1a1a1a` (Modern Onyx)
- **字体**: Montserrat (Headings) | Open Sans (Body)
- **设计规范**: VSS v2.0 (High-Density Mobile)
- **安全区域**: `safe-pt` 44px | `safe-pb` 34px (iOS/Android)

## 1.2 核心功能需求【核心】

- **角色隔离**: 室内设计师 (Interior Designer) 为第一优先级。
- **动态目录**:
  - `Kitchen Stone`: Sentra Quartz 系列 (Group 1-3, 15mm/20mm).
  - `House Floor`: LD Floor 系列 (Vinyl, Stone, Herringbone).
- **交互逻辑**:
  - `Calculator`: 选择变体 -> 输入面积 -> 自动计算总价.
  - `Order Lock`: 提交后订单锁定为只读，等待管理员解锁.
- **验证流程**: 支持 refcode 的注册 -> 6位数字 OTP 自动提交、跳转。

## 1.3 视觉设计参考【参考】

- **Stitch DNA**: `( { Header_Sticky [blur safe-pt] } | { Chips_Row [no-scrollbar] } | { Card_Aspect [4/3] } | { Nav_Fixed_Bottom [h-20 pb-safe] } )`
- **工业美学**: 石材纹理背景浮雕，Quartz Gold 高级感描边，极简线性图标。

## 1.4 技术复用脚本【工具脚本】

- **OTP 逻辑**: `( { OTP_Grid [d-flex] { Input [max-1 focus-next] * 6 } } )`
- **计算逻辑**: `total = qty * price_per_unit` (Vue computed).
- **路由守护**: 基于 `localStorage.role` 的导航拦截。

---

_Generated via Antigravity Stitch Protocol (2026-03-16)_
