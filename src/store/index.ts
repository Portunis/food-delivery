import { defineStore } from "pinia";

import { ProductModel } from "@/models/ProductModel";

export const useStore = defineStore("main", {
  state: () => ({
    cart: [
      {
        id: 2,
        name: "Pizza",
        type: 1,
        size: 1,
        quantity: 1,
      },
    ] as ProductModel[],
    products: [] as ProductModel[],
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
    addItemLocalStorage(product: ProductModel[]) {
      localStorage.setItem("cart", JSON.stringify(product));
    },
  },
});
