<template>
  <div class="input-body">
    <label class="input-label" v-if="inputData.label">{{
      inputData.label
    }}</label>
    <div class="input-container">
      <input
        :type="inputData.type"
        :class="{
          error: inputData.error && inputData.showError,
        }"
        class="input"
        :placeholder="inputData.placeholder"
        :disabled="inputData.disabled"
        v-model="newValue"
        @input="inputHandler"
      />
    </div>
    <p
      :class="['error', inputData.error && inputData.showError ? 'error' : '']"
      v-if="inputData.error"
    >
      {{ inputData.showError ? inputData.error : "" }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      newValue: "",
      errorMessage: "",
    };
  },
  computed: {
    modelValue() {
      return this.inputData.modelValue;
    },
    inputData() {
      return Object.assign(
        {
          id: "input-text",
          type: "text",
          placeholder: "",
          label: "",
          error: "",
          modelValue: null,
          disabled: false,
          showError: true,
        },
        this.data
      );
    },
  },
  mounted() {
    this.newValue = this.inputData.modelValue;
  },
  methods: {
    /**
     * Эмитем событие modelValue
     */
    inputHandler() {
      this.$emit("update:modelValue", this.newValue);
    },
  },
  watch: {
    modelValue(value) {
      this.newValue = value;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/assets/variables";
.input-body {
  margin: 20px 0;
}
.input-label {
  font-family: $font-raleway;
  font-weight: $font-weight-regular;
  font-size: 14px;
  margin: 4px 0;
}
.input-container {
  margin-top: 8px;
  width: auto;
}
.input {
  margin: 0px -10px;
  width: 100%;
  height: 30px;
  border-radius: 8px;
  padding: 6px 10px;
  border: 1px solid $main-black;
  font-family: $font-raleway;
  font-weight: $font-weight-regular;
  font-feature-settings: "pnum" on, "lnum" on;
  &:focus {
    border: 1px solid $main-color;
  }
  &::placeholder {
    color: $main-black;
  }
}
.input.error {
  border: 1px solid $main-error;
  color: $main-error;
}
.error {
  margin: 4px;
  font-family: $font-raleway;
  font-weight: $font-weight-regular;
  font-size: 14px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: $main-error;
}
</style>
