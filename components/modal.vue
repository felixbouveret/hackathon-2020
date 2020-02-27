<template>
  <div class="modal" v-if="!closed">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    closed: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>
