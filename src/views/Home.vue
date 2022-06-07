<template>
  <div class="banner">
    <div class="banner__info">
      <div class="banner__title">PizzaHunt</div>
      <div class="banner__text">
        <p class="banner__text-item">
          Мы лучшая сеть заведений по доставке еды в Томске и России.
        </p>
        <p class="banner__text-item">
          Вы можете посетить наши рестораны или заказать еду домой. Наши курьеры
          очень быстро привезут Вам замечательную пиццу.
        </p>
        <p class="banner__text-item">
          Закажите еду прямо сейчас и получите в подарок пиццу "Пепперони" 30 см
          в подарок
        </p>
      </div>
      <div class="banner__button">Выбрать ресторан</div>
    </div>
    <img
      class="banner__image"
      :src="require('@/assets/img/pizza_banner.jpg')"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>
<style scoped lang="scss">
@import "./src/assets/variables";
.banner {
  position: absolute;
  left: calc(50% - 850px / 2);
  top: calc(50% - 520px / 2);
  display: flex;
  justify-content: space-evenly;
  &__info {
    width: 500px;
    margin-right: 100px;
  }
  &__title {
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-size: 48px;
  }
  &__text {
    margin-top: 20px;
    font-family: $font-raleway;
    font-weight: $font-weight-regular;
    font-feature-settings: "pnum" on, "lnum" on;
    font-size: 24px;
  }
  &__text-item {
    margin: 10px 0;
  }
  &__image {
    width: 350px;
    border-radius: 8px;
  }
  &__button {
    border-radius: 8px;
    padding: 10px 20px;
    margin-top: 40px;
    border: 1px solid $main-black;
    width: 140px;
    text-align: center;
    &:hover {
      border: 1px solid $main-color;
      cursor: pointer;
      color: $main-color;
    }
  }
}
</style>
