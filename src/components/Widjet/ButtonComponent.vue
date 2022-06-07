<template>
  <div class="button">
    <BootstrapIcon icon="plus-lg" class="icon" />
    <p>Добавить</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
export default defineComponent({
  name: "ButtonComponent",
  components: { BootstrapIcon },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.button {
  border-radius: 30px;
  border: 1px solid $main-color;
  padding: 14px 17px;
  display: flex;
  align-items: center;
  color: $main-color;
  font-family: $font-raleway;
  font-weight: $font-weight-bold;
  &:hover {
    cursor: pointer;
    background: $main-color;
    color: $main-white;
  }
}
.icon {
  margin-right: 5px;
}
</style>
