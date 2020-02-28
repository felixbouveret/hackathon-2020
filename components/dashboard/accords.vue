<template>
  <div>Accords de Paris : {{ accords }}</div>
</template>

<script>
export default {
  name: 'Accords',
  props: {
    accords: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
