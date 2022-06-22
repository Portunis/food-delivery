<template>
  <div class="dialog">
    <div class="dialog__content">
      <div class="dialog__header">
        <img
          :src="require('@/assets/img/logo_pizza.svg')"
          class="dialog__logo"
          alt="logo_pizza"
        />
      </div>
      <div class="dialog__input">
        <InputComponent :data="{ placeholder: 'Поиск...' }" />
      </div>
      <div class="dialog__lists">
        <p class="dialog__list" @click="$router.replace('/tomsk')">Томск</p>
        <p class="dialog__list" @click="$router.replace('/not-found')">
          Новосибирск
        </p>
      </div>
      <div class="dialog__city">Скоро новые города</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputComponent from "@/components/Widjet/Input/InputComponent.vue";

export default defineComponent({
  name: "StartModal",
  components: { InputComponent },
});
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  &__logo {
    width: 50px;
  }
  &__content {
    padding: 20px 50px;
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    width: 1020px;
  }
  &__lists {
    display: flex;
    align-items: center;
  }
  &__list {
    font-family: $font-raleway;
    font-size: 32px;
    font-weight: $font-weight-bold;
    margin: 10px 15px;
    font-feature-settings: "pnum" on, "lnum" on;
    &:hover {
      color: $main-color;
      cursor: pointer;
    }
  }
  &__city {
    margin: 100px auto;
    text-align: center;
    font-family: $font-raleway;
    font-size: 24px;
    font-weight: $font-weight-bold;
    font-feature-settings: "pnum" on, "lnum" on;
  }
}
</style>
