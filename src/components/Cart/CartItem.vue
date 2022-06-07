<template>
  <div class="cart-item">
    <div class="cart-item__left">
      <img
        class="cart-item__image"
        :src="require(`@/assets/img/${product.image}.png`)"
      />
      <div class="cart-item__description">
        <p class="cart-item__title">{{ product.name }}</p>
        <p class="cart-item__params">тонкое тесто, 26 см</p>
      </div>
    </div>
    <div class="cart-item__count">
      <BootstrapIcon icon="dash-circle" class="icon-count" />
      {{ product.quantity }}
      <BootstrapIcon icon="plus-circle" class="icon-count" />
    </div>
    <div class="cart-item__price">{{ product.price }} Р</div>
    <div class="cart-item__delete">
      <BootstrapIcon icon="x-circle" class="icon-delete" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import { ProductModel } from "@/models/ProductModel";

export default defineComponent({
  name: "CartItem",
  components: { BootstrapIcon },
  props: {
    product: {
      type: Object as PropType<ProductModel>,
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  &__left {
    display: flex;
    align-items: center;
  }
  &__image {
    width: 80px;
  }
  &__description {
    margin-left: 20px;
  }
  &__price,
  &__count,
  &__title {
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-size: 22px;
    font-feature-settings: "pnum" on, "lnum" on;
  }
  &__params {
    font-family: $font-raleway;
    font-weight: $font-weight-medium;
    font-size: 18px;
    font-feature-settings: "pnum" on, "lnum" on;
  }
}
.icon-count {
  color: $main-color;
  margin: 0 10px;
  width: 32px;
  height: 32px;
  &:hover {
    cursor: pointer;
  }
}
.icon-delete {
  width: 32px;
  height: 32px;
  color: #d7d7d7;
  &:hover {
    cursor: pointer;
  }
}
</style>
