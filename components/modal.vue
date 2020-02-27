<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: .7);
}
</style>
