<template>
  <div class="social-media">
    <h1 @click="nextStep">Social Media</h1>
  </div>
</template>

<script>
export default {
  name: 'device',
  data() {
    return {
      music: {
        spotify: 4,
        applemusic: 6
      }
    }
  },
  methods: {
    nextStep() {
      console.log(this.music)
      this.$emit('nextStep', { name: 'music', data: this.music })
    }
  }
}
</script>

<style lang="scss"></style>
