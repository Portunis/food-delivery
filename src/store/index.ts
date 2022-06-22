import { defineStore } from "pinia";

import { IProduct } from "@/typescript/interfaces/IProduct";

export const useStore = defineStore("main", {
  state: () => ({
    cart: [] as IProduct[],
    products: [
      {
        id: 1,
        name: "Чизбургер-пицца",

        image: "burger_pizza",
        price: 429,
        quantity: 1,
      },
      {
        id: 2,
        name: "Сырная",

        image: "chease_pizza",
        price: 399,
        quantity: 1,
      },
      {
        id: 3,
        name: "Креветки по-азиатски",

        image: "aziat_pizza",
        price: 499,
        quantity: 1,
      },
      {
        id: 4,
        name: "Сырный цыпленок",
        image: "chiken_pizza",
        price: 459,
        quantity: 1,
      },
      {
        id: 5,
        name: "Чизбургер-пицца",

        image: "burger_pizza",
        quantity: 1,
        price: 429,
      },
      {
        id: 6,
        name: "Креветки по-азиатски",

        image: "aziat_pizza",
        quantity: 1,
        price: 399,
      },
      {
        id: 7,
        name: "Сырный цыпленок",

        image: "chiken_pizza",
        quantity: 1,
        price: 499,
      },
    ] as IProduct[],
  }),
  actions: {
    getCart() {
      const data: any = localStorage.getItem("cart");
      this.cart = JSON.parse(data);
    },
  },
});
