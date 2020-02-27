<template>
    <button
    class="skip-button"
      @click="$emit('skip', { name: name, data: { skiped: true } })"
    >
      Skip
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

<style lang="scss">
.skip-button {


}
</style>
