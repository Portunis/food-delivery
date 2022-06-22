<template>
  <div class="card">
    <img
      class="card__image"
      :src="require(`@/assets/img/${product.image}.png`)"
      :alt="product.name"
    />
    <div class="card__info">
      <p class="card__name">{{ product.name }}</p>
      <div class="card__params">
        <div class="card__type">
          <p
            class="card__check"
            v-for="(thickness, index) in ['тонкое', 'традиционное']"
            :key="index"
            :class="{ active: thickness === selectedThickness }"
            @click="selectedThickness = thickness"
          >
            {{ thickness }}
          </p>
        </div>
        <div class="card__size">
          <p
            class="card__check"
            v-for="diameter in [26, 30, 40]"
            :key="diameter"
            :class="{ active: diameter === selectedDiameter }"
            @click="selectedDiameter = diameter"
          >
            {{ diameter }} см
          </p>
        </div>
      </div>
      <div class="card__total">
        <div class="card__price">от {{ product.price }} ₽</div>
        <ButtonComponent
          :data="{ leftIcon: 'plus-lg', count: countProduct }"
          @click="addToCart(product)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
import ButtonComponent from "@/components/Widjet/ButtonComponent.vue";
import { IProduct } from "@/typescript/interfaces/IProduct";

import { useCart } from "@/hooks/useCart";

export default defineComponent({
  name: "CardPizza",
  components: { ButtonComponent },
  props: {
    product: {
      type: Object as PropType<IProduct>,
      default: () => ({}),
    },
  },
  setup(props) {
    const { addPizza, getCountForId } = useCart();
    const selectedDiameter = ref(26);
    const selectedThickness = ref("тонкое");

    /**
     * Добавляем товар в корзину
     */
    const addToCart = () => {
      addPizza(props.product, selectedDiameter.value, selectedThickness.value);
    };

    const countProduct = computed(() => {
      return getCountForId(props.product);
    });

    return {
      selectedDiameter,
      selectedThickness,
      addToCart,
      countProduct,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.card {
  width: 260px;
  margin: 20px 30px;
  &__name {
    font-family: $font-raleway;
    font-weight: $font-weight-medium;
    font-size: 20px;
    text-align: center;
  }
  &__image {
    margin: 0 auto;
  }
  &__params {
    background: #f3f3f3;
    border-radius: 10px;
    margin-top: 20px;
  }
  &__type {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  &__size {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  &__check {
    padding: 6px 19px;
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-size: 14px;
    margin: 7px 4px;
    font-feature-settings: "pnum" on, "lnum" on;

    &:hover {
      background: $main-white;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }
  }
  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 17px 0;
  }
  &__price {
    font-family: $font-raleway;
    font-weight: $font-weight-bold;
    font-size: 22px;
    font-feature-settings: "pnum" on, "lnum" on;
  }
}
.active {
  background: $main-white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
</style>
