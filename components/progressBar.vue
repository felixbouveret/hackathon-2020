<template>
  <div class="progress-bar">
    <span :style="width"></span>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    max: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    }
  },
  computed: {
    width() {
      return `width: ${(this.current / this.max) * 100}%`
    }
  }
}
</script>

<style lang="scss">
.progress-bar {
  height: 20px;
  width: 100%;
  border: solid 3px black;
}

.progress-bar span {
  display: block;
  height: 20px;
  width: 0%;
  background-color: black;
  transition: 0.2s;
}
</style>
