<template>
  <div class="checks-container">
    <div class="check" v-for="(option, index) in options" :key="index">
      <input
        type="checkbox"
        :id="option.id"
        :value="option.value"
        v-model="returnedValue"
      />
      <label :for="option.id">
        <span>
          {{ option.label }}
        </span>
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
      returnedValue: []
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
.checks-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  height: 100%;
  padding: 64px 0;
  max-width: $inner;
  width: 95%;
  margin: 0 auto;
}
.check {
  width: 100%;
  height: 100%;
}
label {
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  border: 4px solid $skin;
  box-shadow: 0 0 0 0 rgba($color: $skin, $alpha: .4);
  background-color: $skin;
  transition: box-shadow .3s;

  span {
    align-self: flex-end;
    width: 100%;
    text-align: center;
    padding: 52px 32px;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 140%;
    color: black;
  }
}
input {
  display: none;
  appearance: none;
  &:checked + label {
    border-color: black;
    box-shadow: 0 0 0 8px rgba($color: $skin, $alpha: .4);
  }
}
</style>
