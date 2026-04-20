// stores/navigation.ts
import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    previousRoute: null as RouteLocationNormalized | null,
  }),
  actions: {
    setPreviousRoute(route: RouteLocationNormalized) {
      this.previousRoute = route;
    },
  },
});
