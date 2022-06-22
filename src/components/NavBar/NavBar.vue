<template>
  <div class="nav-bar">
    <div class="nav-bar__items">
      <div class="nav-bar__logo" @click="$router.push('/pizza')">
        <img
          class="nav-bar__icon"
          :src="require('@/assets/img/logo_pizza.svg')"
          alt="logo_pizza"
        />
        <div>
          <p class="nav-bar__title">PizzaHunt</p>
          <p class="nav-bar__description">Самая вкусная пицца в Томске</p>
        </div>
      </div>
      <CartWidget />
    </div>
  </div>
  <div class="line"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CartWidget from "@/components/Cart/CartWidget.vue";

export default defineComponent({
  name: "NavBar",
  components: { CartWidget },
});
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.nav-bar {
  position: fixed;
  background: $main-white;
  height: 50px;
  width: 100%;
  padding: 30px 47px;
  align-items: center;
  box-shadow: rgb(6 5 50 / 10%) 0 4px 30px;
  &__items {
    display: flex;
    justify-content: space-between;
  }
  &__logo {
    display: flex;
    align-items: center;
    cursor: pointer;
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
