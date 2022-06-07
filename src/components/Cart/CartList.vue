<template>
  <div class="cart-list">
    <div class="cart-list__header">
      <div class="cart-list__title">
        <BootstrapIcon icon="cart" class="icon" />Корзина
      </div>
      <div class="cart-list__clear">
        <BootstrapIcon icon="trash" class="icon" />Очистить корзину
      </div>
    </div>
    <div class="line"></div>
    <CartItem
      v-for="product in store.cart"
      :key="product.id"
      :product="product"
    />
    <div class="cart-list__total">
      <p>Всего пицц: <strong>3 шт</strong></p>
      <div class="cart-list__total-cost">
        Сумма заказа:
        <p class="cart-list__total-price">900 ₽</p>
      </div>
    </div>
    <div class="cart-list__footer">
      <ButtonComponent />
      <ButtonComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import CartItem from "@/components/Cart/CartItem.vue";
import ButtonComponent from "@/components/Widjet/ButtonComponent.vue";
import { useStore } from "@/store";
export default defineComponent({
  name: "CartList",
  components: { ButtonComponent, CartItem, BootstrapIcon },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.cart-list {
  margin: 80px auto;
  width: 820px;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-size: 24px;
  }
  &__clear {
    font-family: $font-raleway;
    font-weight: $font-weight-regular;
    font-size: 16px;
    color: #b6b6b6;
  }
  &__total {
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $font-raleway;
    font-weight: $font-weight-medium;
    font-feature-settings: "pnum" on, "lnum" on;
  }
  &__total-cost {
    display: flex;
    align-items: center;
  }
  &__total-price {
    margin: 0 5px;
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    color: $main-color;
    font-feature-settings: "pnum" on, "lnum" on;
    font-size: 22px;
  }
  &__footer {
    display: flex;
    align-items: center;
  }
}
.icon {
  margin-right: 10px;
}
.line {
  margin-top: 30px;
  border-radius: 8px;
  border: 1px solid #f4f4f4;
}
</style>
