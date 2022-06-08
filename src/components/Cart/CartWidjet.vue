<template>
  <div class="cart" @click="$router.push('/cart')">
    <div class="cart__summ">{{ cartTotalCount || 0 }} p</div>
    <p style="color: #ffff">|</p>
    <div class="cart__count">
      <BootstrapIcon icon="cart" class="icon" />
      {{ count || 0 }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

import { useCart } from "@/hooks/useCart";

export default defineComponent({
  name: "CartWidjet",
  components: { BootstrapIcon },
  setup() {
    const { count, cartTotalCount } = useCart();

    return {
      count,
      cartTotalCount,
    };
  },
});
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.cart {
  background: $main-color;
  border-radius: 30px;
  padding: 15px 19px;
  display: flex;
  align-items: center;
  &__count,
  &__summ {
    font-family: $font-raleway;
    font-weight: $font-weight-medium;
    font-size: 16px;
    color: $main-white;
    font-feature-settings: "pnum" on, "lnum" on;
    margin: 0 10px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
