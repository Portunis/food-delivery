import { computed } from "vue";
import { IProduct } from "@/typescript/interfaces/IProduct";
import { useStore } from "@/store";

export function useCart() {
  const store = useStore();

  /**
   * Добавляем товар в корзину
   * @param product - Object - Product
   * @param selectedDiameter - number - Диамерт пиццы
   * @param selectedThickness - string - Тип теста
   */
  const addPizza = (
    product: IProduct,
    selectedDiameter: number,
    selectedThickness: string
  ) => {
    product["diameter"] = selectedDiameter;
    product["thickness"] = selectedThickness;
    const cart = store.cart || [];
    if (cart.length) {
      let isProductExist = false;
      cart.map((item) => {
        if (item.id === product.id) {
          isProductExist = true;
          item.quantity++;
        }
      });
      if (!isProductExist) {
        cart.push(product);
      }
    } else {
      cart.push(product);
    }

    addProductLocalStorage(cart);
  };

  /**
   * Добавляет в локалстор корзину
   * @param product - Array - Корзина
   */
  const addProductLocalStorage = (product: IProduct[]) => {
    localStorage.setItem("cart", JSON.stringify(product));
  };

  /**
   * Получаем количество продукта добавленого в корзину
   * @param product
   */
  const getCountForId = (product: IProduct) => {
    if (store.cart?.length) {
      store.cart.find((item) => {
        if (item.id === product.id) {
          return item.quantity;
        }
      });
    }
  };

  /**
   * Прибавляем количество единиц продукта в корзине
   * @param product - Object - Product
   */
  const incrementItemCart = (product: IProduct) => {
    let cart = store.cart;
    cart = cart.map((item) => {
      if (item.id === product.id) {
        item.quantity++;
      }
      return { ...item };
    });
    addProductLocalStorage(cart);
  };

  /**
   * Уменьшаем количество единиц продукта в корзине
   * @param product
   */
  const decrementItemCart = (product: IProduct) => {
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

  /**
   * Очищаем корзину
   */
  const clearCart = () => {
    store.cart = [];
    localStorage.removeItem("cart");
  };

  const count = computed(() => store.cart?.length);

  const cartTotalCount = computed(() => {
    const result = [];
    if (store.cart?.length) {
      const cart = store.cart;
      for (const item of cart) {
        result.push(item.price * item.quantity);
      }
      return result.reduce((sum, el) => {
        return sum + el;
      });
    } else {
      return 0;
    }
  });

  return {
    addPizza,
    getCountForId,
    count,
    cartTotalCount,
    incrementItemCart,
    decrementItemCart,
    clearCart,
  };
}
