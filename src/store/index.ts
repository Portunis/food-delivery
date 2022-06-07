import { defineStore } from "pinia";

import { ProductModel } from "@/models/ProductModel";

export const useStore = defineStore("main", {
  state: () => ({
    cart: [] as ProductModel[],
    products: [
      {
        id: 1,
        name: "Чизбургер-пицца",
        type: 1,
        size: 1,
        image: "burger_pizza",
        price: 429,
        quantity: 1,
      },
      {
        id: 2,
        name: "Сырная",
        type: 1,
        size: 1,
        image: "chease_pizza",
        price: 399,
        quantity: 1,
      },
      {
        id: 3,
        name: "Креветки по-азиатски",
        type: 1,
        size: 1,
        image: "aziat_pizza",
        price: 499,
        quantity: 1,
      },
      {
        id: 4,
        name: "Сырный цыпленок",
        type: 1,
        size: 1,
        image: "chiken_pizza",
        price: 459,
        quantity: 1,
      },
      {
        id: 5,
        name: "Чизбургер-пицца",
        type: 1,
        size: 1,
        image: "burger_pizza",
        quantity: 1,
        price: 429,
      },
      {
        id: 6,
        name: "Креветки по-азиатски",
        type: 1,
        size: 1,
        image: "aziat_pizza",
        quantity: 1,
        price: 399,
      },
      {
        id: 7,
        name: "Сырный цыпленок",
        type: 1,
        size: 1,
        image: "chiken_pizza",
        quantity: 1,
        price: 499,
      },
    ] as ProductModel[],
  }),
  actions: {
    addProductCart(product: ProductModel) {
      const cart = this.cart || [];
      product["quantity"] = 1;
      if (cart.find((item) => item.id === product.id) === undefined) {
        cart.push(product);
      }
      this.addItemLocalStorage(cart);
    },
    // deleteProductCart() {
    //   const cart = this.cart;
    //   for (const index in cart) {
    //     if (cart[index] === product) {
    //       cart.splice(index, 1);
    //     }
    //   }
    // },
    incrementProductCart(product: ProductModel) {
      const cart = this.cart;
      cart.map((item) => {
        if (item.id === product.id) {
          console.log(item);
          item.quantity++;
        }
        return { ...item };
      });
      this.addItemLocalStorage(cart);
    },
    decrementProductCart(product: ProductModel) {
      const cart = this.cart;
      cart.map((item) => {
        if (item.id === product.id) {
          if (item.quantity === 1) {
            return { ...item };
          } else {
            item.quantity--;
          }
        }
        return { ...item };
      });
      this.addItemLocalStorage(cart);
    },
    getCart() {
      const data: any = localStorage.getItem("cart");
      this.cart = JSON.parse(data);
    },
    addItemLocalStorage(product: ProductModel[]) {
      localStorage.setItem("cart", JSON.stringify(product));
    },
  },
});
