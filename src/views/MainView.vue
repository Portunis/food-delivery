<template>
  <div class="content">
    <h2 class="content__title">Все пиццы</h2>
    <div class="content-body">
      <CardPizza v-for="n in 10" :key="n" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardPizza from "@/components/Card/CardPizza.vue";

export default defineComponent({
  name: "MainView",
  components: { CardPizza },
});
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.content {
  &__title {
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-size: 24px;
    margin-bottom: 50px;
  }
}
.content-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
}
</style>
