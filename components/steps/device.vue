<template>
  <div class="device">
    <h1>Device</h1>
    <form>
      <button @click="submitStep" :value="true">
        True
      </button>
      <button @click="submitStep" :value="false">
        False
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "device",
  methods: {
    submitStep (payload) {
      console.log(payload);

      this.$emit('nextStep', payload.target.value)
    }
  }
}
</script>

<style lang="scss">

</style>
