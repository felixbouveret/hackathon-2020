<template>
  <div class="social-media">
    <h1>Social Media</h1>
    <timeRangeModal @emitValue="emitValue" />
  </div>
</template>

<script>
import timeRangeModal from '../timeRangeModal'

export default {
  name: 'device',
  components: {
    timeRangeModal
  },
  methods: {
    emitValue(value) {
      this.$emit('emitValue', value)
    }
  }
}
</script>

<style lang="scss"></style>
