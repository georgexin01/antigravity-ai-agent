---
name: sovereign-blueprint-protocol
description: "主权蓝图协议 (V1.0) — 规范所有 WebApp/Website 的规划与演进标准。"
triggers: ["new project", "start app", "blueprint", "planning phase", "initialization"]
version: 1.0
status: authoritative
---

# 🧭 主权蓝图协议 (SOVEREIGN BLUEPRINT PROTOCOL)

## ⚖️ 0. 核心指令 (CORE DIRECTIVE)
在启动任何新项目（Website 或 WebApp）时，AI **必须** 首先检查根目录下是否存在 `APP_BLUEPRINT.md`。如果不存在，AI 必须根据本协议引导用户提供关键信息并生成蓝图。

### 🛡️ 0.1 原型先行准则 (Mock-First Principle)
**强制执行顺序**: 
1. 优先构建 **100% 硬编码 (Hardcoded)** 的 Vue/HTML UI 原型。
2. 在所有交互、色彩、布局经用户确认无误后，**最后一步** 才接入 Supabase 或真实后端。
3. 初期测试登录、列表、统计等功能时，使用 Mock 数据模拟延迟与反馈。

## 🏗️ 1. 蓝图标准结构 (STANDARD STRUCTURE)
一个合格的主权蓝图必须包含以下 13 个核心章节：
1. **项目概览**: 包含 Topic, Mission 和默认语言。
2. **系统架构**: 定义独立部署路径、技术规格（Vue/PHP 等）。
3. **技术选型与工具链**: 详细记录 Vite, Tailwind, Swiper 等工具。
4. **功能拆解**: 针对不同 Roles 的功能表。
5. **交互深度标准**: 包含高龄用户适配、视觉层级与 UX 评分表。
6. **核心业务流**: 使用 Mermaid 绘制逻辑闭环。
7. **数据架构**: 初始数据库 Schema 映射。
8. **开发流程 (Evolving)**: 包含自适应迭代流与同步点。
9. **主题色彩战略 (V9.2)**: 包含色阶位移、渐变攻略与 Stitch 细节。
10. **架构合规与安全**: 定义 AOE 级别与 SBAC 权限。
11. **专项设计咒语**: 记录微交互动效。
12. **持续进化协议**: 规定 Chat -> Blueprint 的反馈回路。
13. **AI 推理与执行准则**: 锁定 Karpathy 原则。

## 🤖 2. 引导式提问逻辑 (GUIDED QUESTIONING)
如果信息不足，AI 应主动向用户发起以下维度的“点对点”询问：
*   **A 维度**: “应用的主题色是什么？是否有参考风格（如：Stitch）？”
*   **B 维度**: “谁是最终用户？他们的操作环境是怎样的（单手、户外、强光）？”
*   **C 维度**: “不同角色（如：Admin 与 Driver）之间的交集在哪里？”
*   **D 维度**: “您希望在 UI 中体现哪些具体的微交互（咒语）？”

## 🔄 3. 动态维护与知识反哺

### 3.1 实时同步
对话中的每一个逻辑变动，必须同步更新至项目根目录的蓝图。

### 3.2 偏离处理协议 (Drift & Evolution)
当开发实践与蓝图发生偏离时，AI 必须遵循“**修法再执政**”原则：
1. **识别偏离**: 判断偏离是“错误”还是“优化”。
2. **进化蓝图**: 如果是优化，AI 必须先修改 `APP_BLUEPRINT.md` 相关章节，使其反映最新的设计意图。
3. **保持同步**: 修改完蓝图后，再进行代码编写。**严禁在蓝图滞后的情况下进行黑盒开发。**

### 3.3 知识反哺
优秀的蓝图实践应被提取并更新至 `.gemini/knowledge`。

---
*Sovereign Governance Node — V1.0*
