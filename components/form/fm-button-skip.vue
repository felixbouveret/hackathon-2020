<template>
    <button
    class="skip-button"
      @click="$emit('skip', { name: name, data: { skiped: true } })"
    >
      Passer
    </button>
</template>

<script>

export default {
  name: 'button-skip',
  props : {
    name : {
      type : String,
      default : "",
      required : true
    }
  }
}
</script>

<style lang="scss" scoped>
.skip-button {
  position: fixed;
  top: 100px;
  right: 2.5%;
  appearance: none;
  border: none;
  background-color: transparent;
  font-family: 'Work Sans';
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: bold;
  color: $skip-button;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
