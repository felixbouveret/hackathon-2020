<template>
  <div class="social-media">
    <h1>Concernant les mails, tu es plutôt du genre...</h1>
    <checkbox :options="options" @emitValue="emitValue" />
    <timeRangeModal
      v-if="firstPartData"
      @emitFinalValue="emitFinalValue"
      :names="firstPartData"
    />
  </div>
</template>

<script>
import timeRangeModal from '../timeRangeModal'
import Checkbox from '../form/fm-checkbox'

export default {
  name: 'mail',
  components: {
    timeRangeModal,
    Checkbox
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
      this.$emit('emitValue', value)
    },
    emitFinalValue(value) {
      this.$emit('emitFinalValue', value)
    }
  }
}
</script>

<style lang="scss"></style>
