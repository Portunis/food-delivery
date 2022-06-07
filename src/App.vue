<template>
  <component :is="layout">
    <template v-slot:content>
      <router-view />
    </template>
  </component>
  <ToasterContainer></ToasterContainer>
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
</style>
