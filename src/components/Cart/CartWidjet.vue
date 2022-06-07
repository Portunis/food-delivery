<template>
  <div class="cart" @click="$router.push('/cart')">
    <div class="cart__summ">{{ result || 0 }} p</div>
    <p style="color: #ffff">|</p>
    <div class="cart__count">
      <BootstrapIcon icon="cart" class="icon" />
      {{ store.cart?.length || 0 }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import { useStore } from "@/store";
export default defineComponent({
  name: "CartWidjet",
  components: { BootstrapIcon },
  setup() {
    const store = useStore();
    // eslint-disable-next-line vue/return-in-computed-property
    const totalCont = computed(() => {
      const result: any = [];
      if (store.cart) {
        for (let item of store.cart) {
          result.push(item.price * item.quantity);
        }
        return result.reduce((sum: number, el: number) => {
          return sum + el;
        });
      }
    });
    const result = totalCont.value;
    console.log(totalCont.value);
    return {
      result,
      store,
    };
  },
});
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.cart {
  background: $main-color;
  border-radius: 30px;
  padding: 15px 19px;
  display: flex;
  align-items: center;
  &__count,
  &__summ {
    font-family: $font-raleway;
    font-weight: $font-weight-medium;
    font-size: 16px;
    color: $main-white;
    font-feature-settings: "pnum" on, "lnum" on;
    margin: 0 10px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
