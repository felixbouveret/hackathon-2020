<template>
  <div class="step social-media">
    <h1>
      Laquelle de ces applications utilises-tu ?
    </h1>
    <checkbox :options="options" @emitValue="emitValue" />
    <transition name="scale" mode="in-out">
      <timeRangeModal
        v-if="firstPartData"
        @emitFinalValue="emitFinalValue"
        :names="firstPartData"
        :options="options"
      />
    </transition>
  </div>
</template>

<script>
import timeRangeModal from '../timeRangeModal'
import Checkbox from '../form/fm-checkbox'

export default {
  name: 'gps-app',
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
          value: 'googleMap',
          label: 'Google Maps',
          modalTitle: 'Google Maps',
          image: 'map'
        },
        {
          id: 2,
          value: 'waze',
          label: 'Waze',
          modalTitle: 'Waze',
          image: 'waze'
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
        name: 'navigation',
        data: value
      })
    }
  }
}
</script>

<style lang="scss"></style>
