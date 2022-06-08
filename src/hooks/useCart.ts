import { computed } from "vue";
import { ProductModel } from "@/models/ProductModel";
import { useStore } from "@/store";

export function useCart() {
  const store = useStore();

  const count = computed(() => store.cart?.length);

  const cartTotalCount = computed(() => {
    const result = [];
    if (store.cart?.length) {
      const cart = store.cart;
      for (const item of cart) {
        result.push(item.price * item.quantity);
      }
      return result.reduce(function (sum, el) {
        return sum + el;
      });
    } else {
      return 0;
    }
  });

  const priceItem = computed(() => {

  })

  const addPizza = (
    product: any,
    selectedDiameter: number,
    selectedThickness: string
  ) => {
    const cart = store.cart || [];
    product["diameter"] = selectedDiameter;
    product["thickness"] = selectedThickness;
    product["quantity"] = 1;
    if (cart.find((item) => item.id === product.id) === undefined) {
      cart.push(product);
    }
    addProductLocalStorage(cart);
  };

  const addProductLocalStorage = (product: ProductModel[]) => {
    localStorage.setItem("cart", JSON.stringify(product));
  };
  const getCountForId = (id: number) => {
    return store.cart.filter((item) => item.id === id).length;
  };

  const incrementItemCart = (product: any) => {
    let cart = store.cart;
    cart = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity++;
      }
      return { ...item };
    });
    addProductLocalStorage(cart);
  };

  const decrementItemCart = (product: any) => {
    let cart = store.cart;
    cart = cart.map((item) => {
      if (item.id === product.id) {
        if (item.quantity === 1) {
          return { ...item };
        } else {
          item.quantity--;
        }
      }
      return { ...item };
    });
    addProductLocalStorage(cart);
  };

  return {
    addPizza,
    getCountForId,
    count,
    cartTotalCount,
    incrementItemCart,
    decrementItemCart,
  };
}
