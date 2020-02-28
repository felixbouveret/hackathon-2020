<template>
    <button
    class="skip-button"
      @click="$emit('skip')"
    >
      Passer
    </button>
</template>

<script>

export default {
  name: 'button-skip',
}
</script>

<style lang="scss" scoped>
.skip-button {
  top: 100px;
  right: 2.5%;
  appearance: none;
  border: none;
  background-color: transparent;
  font-family: 'Work Sans';
  font-size: 20px;
  color: $skip-button;
  cursor: pointer;
  padding: 0 16px;
}
</style>
