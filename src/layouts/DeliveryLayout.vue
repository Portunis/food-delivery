<template>
  <NavBar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { onMounted } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";

export default defineComponent({
  name: "DeliveryLayout",
  components: { NavBar },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.getCart();
    });
    store.getCart();
    return {
      store,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  padding: 32px 50px;
}
</style>
