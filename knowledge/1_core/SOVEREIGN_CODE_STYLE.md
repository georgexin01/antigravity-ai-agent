# 💻 主权代码规范 (Sovereign Code Style)

本文档沉淀了在多端开发中验证的代码结构与高可维护性标准。

## 📦 1. Vue 组件脚本块顺序 (Script Block Order)
为保证 AI 修改与人类 Review 时的“手术级精度”，每个 `.vue` 文件的 `<script setup>` 内部逻辑**必须**严格按照以下 **6 段顺序** 组织，并显式编写编号注释：

```typescript
// 1. Imports
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUiStore } from '@/stores/ui';

// 2. Props / Emits
const props = defineProps<{ id: string }>();
const emit = defineEmits(['success']);

// 3. Stores & Router
const route = useRoute();
const uiStore = useUiStore();

// 4. Local State (Ref / Computed)
const isLoading = ref(false);
const dataList = ref([]);

// 5. Lifecycle Hooks
onMounted(() => {
  fetchData();
});

// 6. Functions / Handlers
async function fetchData() {
  // ...
}
```

---
## 🔗 相关参考 (Related Links)
*   **工程母本**: [MASTER_APP_BLUEPRINT.md](../0_apex/templates/MASTER_APP_BLUEPRINT.md)

---
*Created by Antigravity Tier-1 Core Engineering Node*
