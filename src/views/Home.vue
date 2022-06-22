<template>
  <div class="banner">
    <div class="banner__info">
      <img
        class="banner__image"
        :src="require('@/assets/img/logo_pizza.svg')"
        alt="logo_pizza"
      />
      <div class="banner__title">PizzaHunt</div>
    </div>
  </div>
  <transition name="fade" appear>
    <StartModal />
  </transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StartModal from "@/components/Widjet/Modal/StartModal.vue";
export default defineComponent({
  name: "HomeView",
  components: { StartModal },
});
</script>
<style scoped lang="scss">
@import "./src/assets/variables";
.banner {
  margin: 100px auto;
  width: 1200px;
  &__info {
    display: flex;
    align-items: center;
  }
  &__title {
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-feature-settings: "pnum" on, "lnum" on;
    font-size: 128px;
    margin-left: 50px;
  }
  &__image {
    width: 100px;
    border-radius: 8px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
