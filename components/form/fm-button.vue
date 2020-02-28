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
    display: block;
    padding: 16px 24px;
    border-radius: 8px;
    border: 0;
    line-height: 24px;
    font-size: 24px;
    background-color: $main-color;
    color: white;
    cursor: pointer;
  }
</style>
