<template>
  <div class="social-media">
    <h1>Les films et les séries, pour toi ça rime avec :</h1>
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
  name: 'movies',
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
          value: 'netflix',
          label: 'Netflix'
        },
        {
          id: 2,
          value: 'amazon',
          label: 'Amazon Prime'
        },
        {
          id: 3,
          value: 'streaming',
          label: 'Streaming'
        },
        {
          id: 4,
          value: 'download',
          label: 'Téléchargement'
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
