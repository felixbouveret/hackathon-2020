<template>
  <button
    class="fm-button"
    type="button"
    @click="$emit('submitStep')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
  .fm-button {
    background-color: $main-color;
  }
</style>
