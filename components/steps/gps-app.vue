<template>
  <div class="step social-media">
    <h1>
      Est-ce que tu utilises une application pour tes déplacements quotidiens ?
    </h1>
    <SkipButton name="gps-app" @go-back="$emit('go-back')" />
    <checkbox :options="options" @emitValue="emitValue" />
    <transition name="scale" mode="in-out">
      <timeRangeModal
        v-if="firstPartData"
        @emitFinalValue="emitFinalValue"
        :names="firstPartData"
      />
    </transition>
  </div>
</template>

<script>
import timeRangeModal from '../timeRangeModal'
import Checkbox from '../form/fm-checkbox'
import SkipButton from '../form/fm-button-skip'

export default {
  name: 'gps-app',
  components: {
    timeRangeModal,
    Checkbox,
    SkipButton
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
          value: 'googleMaps',
          label: 'Google Maps'
        },
        {
          id: 2,
          value: 'waze',
          label: 'Waze'
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
        name: 'gpsApp',
        data: value
      })
    }
  }
}
</script>

<style lang="scss"></style>
