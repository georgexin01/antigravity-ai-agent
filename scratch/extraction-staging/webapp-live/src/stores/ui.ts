import { defineStore } from 'pinia';

export interface Toast {
  duration?: number;
  id: string;
  message: string;
  title: string;
  type: 'error' | 'info' | 'success';
}

// ─── Store (Bakery Pattern: Options API) ─────────────────

export const useUiStore = defineStore('ui', {
  state: () => ({
    toasts: [] as Toast[],
  }),
  actions: {
    addToast(
      title: string,
      message: string,
      type: Toast['type'] = 'info',
      duration = 3000,
    ) {
      const id = Math.random().toString(36).slice(2, 9);
      this.toasts.push({ duration, id, message, title, type });

      if (duration > 0) {
        setTimeout(() => this.removeToast(id), duration);
      }
    },

    removeToast(id: string) {
      const idx = this.toasts.findIndex((t) => t.id === id);
      if (idx !== -1) this.toasts.splice(idx, 1);
    },
  },
});
