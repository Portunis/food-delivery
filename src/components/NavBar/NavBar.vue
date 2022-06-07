<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <img
        class="nav-bar__icon"
        :src="require('@/assets/img/logo_pizza.svg')"
      />
      <div>
        <p class="nav-bar__title">PizzaHunt</p>
        <p class="nav-bar__description">Самая вкусная пицца в Томске</p>
      </div>
    </div>
    <CartWidjet />
  </div>
  <div class="line"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CartWidjet from "@/components/Cart/CartWidjet.vue";

export default defineComponent({
  name: "NavBar",
  components: { CartWidjet },
});
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.nav-bar {
  padding: 30px 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin-right: 17px;
  }
  &__title,
  &__description {
    font-family: $font-raleway;
    font-feature-settings: "pnum" on, "lnum" on;
  }
  &__title {
    font-weight: $font-weight-bold;
    color: $main-black;
    font-size: 24px;
  }
  &__description {
    font-weight: $font-weight-regular;
    color: #7b7b7b;
  }
}
.line {
  margin: 0 50px;
  border: 1px solid #f7f7f7;
}
</style>
