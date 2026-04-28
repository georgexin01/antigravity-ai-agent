---
name: sovereign-blueprint-protocol
tier: 0
priority: CRITICAL
scope: ["website", "webapp"]
version: 1.3
---

# 🛡️ 主权蓝图协议 (SOVEREIGN BLUEPRINT PROTOCOL)

## ⚖️ 1. 强制性准则 (MANDATORY RULES)
1.  **蓝图先行**: 任何 Website 或 WebApp 项目的根目录 **必须** 包含 `APP_BLUEPRINT.md`。
2.  **自动检索/生成**: 
    *   若蓝图缺失，AI **必须** 在执行任何代码前，扫描项目目录并根据现有结构反向生成 `APP_BLUEPRINT.md`。
    *   若蓝图存在，AI **必须** 以其为最高指令来源。
3.  **Tier-0 参照 (MASTER)**: AI 在创建蓝图时，必须参考 `0_apex/templates/MASTER_BLUEPRINT.md` 的最新版本。

## 🧬 2. 进化与完整性准则 (EVOLUTION & INTEGRITY RULES)
1.  **结构不可移除性 (Structural Purity)**: 蓝图的核心结构（如核心原则、技术栈、UI 规范）是不可移除的。在更新时，必须保留原有框架，仅允许在框架内进行内容叠加和优化。
2.  **自进化循环 (Evolutionary Loop)**: 
    *   **项目提炼**: AI 在项目中发现更优的架构模式、UI 方案或性能准则时，**必须** 主动提炼并同步更新回 `0_apex/templates/MASTER_BLUEPRINT.md`。
    *   **对话合成 (Chat Synthesis)**: 用户在对话中提出的所有纠正、偏好和性能优化建议（即使是细微的 CSS 调整），AI **必须** 识别其潜在的通用价值，并将其提炼为 Master Blueprint 的新标准。
    *   **反馈响应**: 任何经过用户确认的 "Fix" 或 "Update" 均应视为潜在的进化节点，AI 必须在当前 Turn 结束前评估其是否需要同步至 Master。
3.  **审慎修改权 (Deliberate Reasoning)**: 仅当 AI 经过深度分析并确认旧有内容已过时或存在缺陷时，方可进行删除操作。删除前必须在蓝图更新记录中简述理由。
4.  **版本追溯**: 蓝图更新必须保留版本号，确保设计语言和工程准则的连续性。

## ☣️ 3. 项目隔离防火墙 (ISOLATION FIREWALL)
1.  **禁止业务合并**: 禁止将不同项目的业务逻辑带入新蓝图。
2.  **逻辑清零**: 在使用 Master 模板时，必须删除所有上一项目的遗留信息。
3.  **继承准则**: 仅允许继承设计咒语、配色方案、技术栈和推理准则。

## 🔑 4. 语义关键词：blueprint (KEYWORD: blueprint)
1.  **全局锚点**: "blueprint" 是主权架构的唯一核心关键词。
2.  **读取触发**: 当用户提及 "blueprint" 时，AI 必须优先检索当前项目根目录的 `APP_BLUEPRINT.md` 以获取最新上下文。
3.  **漂移校正 (Drift Correction)**: 当用户提及 "blueprint" 并伴随修改意图时，AI 必须将当前的设置实时更新回蓝图。
4.  **Mock-First 安全化 (Safe-Init)**: 协议强制要求后端客户端（如 Supabase）在初始化时必须包含针对缺失配置的 `Proxy` 处理逻辑，优先保障 UI 原型的可用性。

## 🔄 5. 知识库反哺蓝图 (Knowledge Retro-Feeding)
1.  **动态同步**: 项目的 `APP_BLUEPRINT.md` 不是静态文档。当全局知识库（如 `1_core/`、`2_governance/`）更新了更优的工程或交互规范时，AI **必须** 在下次修改项目时，将新规范反哺并写入项目蓝图。
2.  **漂移预防**: 知识库作为全局锚点，防止单个项目在长期演进中野蛮生长、偏离最佳架构。

---
*Apex Governance Node // Antigravity V9.1 (V1.3 Protocol)*
