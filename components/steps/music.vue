<template>
  <div class="social-media">
    <h1>Tu écoutes de la musique sur quelle plateforme ?</h1>
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
  name: 'music',
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
          value: 'spotify',
          label: 'Spotify'
        },
        {
          id: 2,
          value: 'deezer',
          label: 'Deezer'
        },
        {
          id: 3,
          value: 'youtube',
          label: 'Youtube'
        },
        {
          id: 4,
          value: 'soundcloud',
          label: 'Soundcloud'
        },
        {
          id: 5,
          value: 'appleMusic',
          label: 'Apple Music'
        },
        {
          id: 6,
          value: 'autre',
          label: 'Autre'
        }
      ]
    }
  },
  methods: {
    emitValue(value) {
      this.$emit('emitValue', value)
    },
    emitFinalValue(value) {
      this.$emit('emitFinalValue', {
        name: 'music',
        data: this.finalData
      })
    }
  }
}
</script>

<style lang="scss"></style>
