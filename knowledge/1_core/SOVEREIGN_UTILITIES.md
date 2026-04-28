# 🛠️ 核心主权工具函数 (Sovereign Utility Functions)

本文档沉淀了在双端开发实战中提炼的最佳工具函数，可直接在后续项目中复制。

## 🧹 1. 全局状态彻底清零 (Pinia Universal Reset)
*   **场景**: 在处理注销（Logout）或跨账户切换时，保证前端无残留状态缓存。
*   **代码片段**:

```typescript
import { getActivePinia } from 'pinia';

export function resetAllStores() {
  const pinia: any = getActivePinia();
  // 遍历所有已激活的 Pinia 实例并调用内置 $reset 函数
  pinia?._s?.forEach((store: any) => store.$reset?.());
}
```

## 📷 2. 降级上传代理 (Mock-First Upload Helper)
*   **场景**: 在没有连接真实存储服务（如 Supabase Storage）的断网或快速原型期。
*   **代码片段**:

```typescript
export async function uploadToBucket(
  bucket: string,
  file: File | Blob,
  path: string
): Promise<string> {
  // 从配置环境读取 MOCK 开关
  if (import.meta.env.VITE_IS_MOCK === 'true') {
    return 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80';
  }
  // 真实环境下的上传处理...
}
```

---
## 🔗 相关参考 (Related Links)
*   **全局总纲**: [MASTER_BLUEPRINT.md](../0_apex/templates/MASTER_BLUEPRINT.md)

---
*Created by Antigravity Tier-1 Core Engineering Node*
