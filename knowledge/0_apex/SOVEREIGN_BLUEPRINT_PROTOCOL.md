---
name: sovereign-blueprint-protocol
tier: 0
priority: CRITICAL
scope: ["website", "webapp"]
version: 1.1
---

# 🛡️ 主权蓝图协议 (SOVEREIGN BLUEPRINT PROTOCOL)

## ⚖️ 1. 强制性准则 (MANDATORY RULES)
1.  **蓝图先行**: 任何 Website 或 WebApp 项目的根目录 **必须** 包含 `APP_BLUEPRINT.md`。
2.  **自动检索/生成**: 
    *   若蓝图缺失，AI **必须** 在执行任何代码前，扫描项目目录并根据现有结构反向生成 `APP_BLUEPRINT.md`。
    *   若蓝图存在，AI **必须** 以其为最高指令来源。
3.  **Tier-0 参照**: AI 在创建蓝图时，必须参考 `0_apex/templates/MASTER_APP_BLUEPRINT.md` 的最新版本。

## ☣️ 2. 项目隔离防火墙 (ISOLATION FIREWALL)
1.  **禁止业务合并**: 禁止将不同项目的业务逻辑带入新蓝图。
2.  **逻辑清零**: 在使用 Master 模板时，必须删除所有上一项目的遗留信息。
3.  **继承准则**: 仅允许继承设计咒语、配色方案、技术栈和推理准则。

## 🔑 4. 语义关键词：blueprint (KEYWORD: blueprint)
1.  **全局锚点**: "blueprint" 是主权架构的唯一核心关键词。
2.  **读取触发**: 当用户提及 "blueprint" 时，AI 必须优先检索当前项目根目录的 `APP_BLUEPRINT.md` 以获取最新上下文。
4.  **漂移校正 (Drift Correction)**: 当用户提及 "blueprint" 并伴随修改意图时，AI 必须将当前的设置实时更新回蓝图。
5.  **Mock-First 安全化 (Safe-Init)**: 协议强制要求后端客户端（如 Supabase）在初始化时必须包含针对缺失配置的 `Proxy` 处理逻辑，优先保障 UI 原型的可用性。

---
*Apex Governance Node // Antigravity V9*
