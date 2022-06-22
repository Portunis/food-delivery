<template>
  <button class="button">
    <BootstrapIcon
      v-if="buttonData.leftIcon"
      :icon="buttonData.leftIcon"
      class="icon"
    />
    {{ buttonData.text }}
    <BootstrapIcon
      v-if="buttonData.rightIcon"
      :icon="buttonData.rightIcon"
      class="icon"
    />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
export default defineComponent({
  name: "ButtonComponent",
  components: { BootstrapIcon },
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props) {
    const buttonData = computed(() => {
      return Object.assign(
        {
          disabled: false,
          leftIcon: "",
          rightIcon: "",
          text: "Добавить",
          count: null,
        },
        props.data
      );
    });

    return {
      buttonData,
    };
  },
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
  background: none;
  &:hover {
    cursor: pointer;
    background: $main-color;
    color: $main-white;
  }
}
.icon {
  margin: 0 5px;
}
</style>
