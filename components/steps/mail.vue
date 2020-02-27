<template>
  <div class="step social-media">
    <h1>Concernant les mails, tu es plutôt du genre...</h1>
    <radio :options="options" @emitValue="emitValue" />
  </div>
</template>

<script>
import Radio from '../form/fm-radio'

export default {
  name: 'mail',
  components: {
    Radio
  },
  props: {
    firstPartData: {
      default() {
        return undefined
      }
    }
  },
  data() {
    return {
      options: [
        {
          id: 1,
          value: 'full',
          label: 'Ma boîte mail est toujours pleine'
        },
        {
          id: 2,
          value: 'empty',
          label: 'Ils ne me résistent pas, je le supprime tous !'
        }
      ]
    }
  },
  methods: {
    emitValue(value) {
      this.$emit('emitValue', { name: 'mail', data: value })
    }
  }
}
</script>

<style lang="scss"></style>
