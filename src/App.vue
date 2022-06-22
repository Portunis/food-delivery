<template>
  <component :is="layout">
    <template #content>
      <router-view />
    </template>
  </component>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  computed: {
    layout: function () {
      return this.$route.meta.layout || "default-layout";
    },
  },
});
</script>

<style lang="scss">
@import "src/assets/variables";
* {
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
