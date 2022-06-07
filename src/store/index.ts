import { defineStore } from "pinia";

import { ProductModel } from "@/models/ProductModel";

export const useStore = defineStore("main", {
  state: () => ({
    cart: [],
    products: [] as ProductModel[],
  }),
  actions: {},
});
