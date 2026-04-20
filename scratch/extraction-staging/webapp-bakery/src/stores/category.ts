import { defineStore } from "pinia";
import { CategoriesResponse, Category } from "../model/categoryResponse";
import apiClient from "../api/apiClient";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [] as Category[],
    apiPath: "/categories.php",
  }),
  actions: {
    async getCategories(): Promise<Category[]> {
      try {
        // if (this.categories.length > 0) {
        //   return this.categories;
        // }
        const response = await apiClient.get<CategoriesResponse>(
          `${this.apiPath}`,
        );

        response.data.results = response.data.results.filter(
          (r: Category) => r.isActive && r.isAvailable,
        );
        this.categories = response.data.results;
        return this.categories;
      } catch (error) {
        console.log("error: ", error);
        throw error;
      }
    },
  },
});
