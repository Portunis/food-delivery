<template>
  <div class="card">
    <img
      class="card__image"
      :src="require(`@/assets/img/${product.image}.png`)"
    />
    <div class="card__info">
      <p class="card__name">{{ product.name }}</p>
      <div class="card__params">
        <div class="card__type">
          <p class="card__check active">тонкое</p>
          <p class="card__check">традиционное</p>
        </div>
        <div class="card__size">
          <p class="card__check">26 см</p>
          <p class="card__check">30 см</p>
          <p class="card__check">40 см</p>
        </div>
      </div>
      <div class="card__total">
        <div class="card__price">от {{ product.price }} ₽</div>
        <ButtonComponent @click="addProd(product)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ButtonComponent from "@/components/Widjet/ButtonComponent.vue";
import { mapActions } from "pinia";
import { useStore } from "@/store";
import { ProductModel } from "@/models/ProductModel";

export default defineComponent({
  name: "CardPizza",
  components: { ButtonComponent },
  props: {
    product: {
      type: Object as PropType<ProductModel>,
    },
  },
  methods: {
    ...mapActions(useStore, {
      addProductCart: "addProductCart",
    }),
    addProd(product: ProductModel) {
      this.addProductCart(product);
    },
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
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
</style>
