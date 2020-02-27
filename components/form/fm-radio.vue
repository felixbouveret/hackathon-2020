<template>
  <div>
    <div v-for="(option, index) in options" :key="index">
      <label :for="option.id">{{ option.label }}</label>
      <input
        type="radio"
        :id="option.id"
        :value="option.value"
        v-model="returnedValue"
      />
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

<style></style>
