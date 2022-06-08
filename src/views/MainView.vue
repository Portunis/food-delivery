<template>
  <div class="content">
    <h2 class="content__title">Все пиццы</h2>
    <div class="content-body">
      <CardPizza
        v-for="product in store.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import CardPizza from "@/components/Card/CardPizza.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "MainView",
  components: { CardPizza },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
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
