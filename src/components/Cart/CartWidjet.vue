<template>
  <div class="cart" @click="$router.push('/cart')">
    <div class="cart__summ">510 p</div>
    <p style="color: #ffff">|</p>
    <div class="cart__count">
      <BootstrapIcon icon="cart" class="icon" />
      3
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
export default defineComponent({
  name: "CartWidjet",
  components: { BootstrapIcon },
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
