<template>
  <div class="radios-container">
    <div class="radio" v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :id="option.id"
        :value="option.value"
        v-model="returnedValue"
      />
      <label :for="option.id">
        <span>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [],
      require: true
    }
  },
  data() {
    return {
      returnedValue: ''
    }
  },
  watch: {
    returnedValue() {
      this.$emit('emitValue', this.returnedValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.radios-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 64px 0;
}
.radio {
  width: 100%;
  height: 100%;
  max-width: 370px;
  max-height: 500px;
  margin: 0 16px;
}
label {
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  border: 4px solid $skin;
  background-color: $skin;

  span {
    align-self: flex-end;
    width: 100%;
    text-align: center;
    padding: 52px 32px;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 140%;
  }
}
input {
  display: none;
  appearance: none;
  &:checked + label {
    border-color: black;
  }
}
</style>
