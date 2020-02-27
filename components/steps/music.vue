<template>
  <div class="step social-media">
    <h1>Tu écoutes de la musique sur quelle plateforme ?</h1>
    <SkipButton name="music" @skip="skipStep" />
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
import SkipButton from '../form/fm-button-skip'

export default {
  name: 'music',
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
          value: 'spotify',
          label: 'Spotify',
          modalTitle: 'Spotify'
        },
        {
          id: 2,
          value: 'deezer',
          label: 'Deezer',
          modalTitle: 'Deezer'
        },
        {
          id: 3,
          value: 'youtube',
          label: 'Youtube',
          modalTitle: 'Youtube'
        },
        {
          id: 4,
          value: 'soundcloud',
          label: 'Soundcloud',
          modalTitle: 'Soundcloud'
        },
        {
          id: 5,
          value: 'appleMusic',
          label: 'Apple Music',
          modalTitle: 'Apple Music'
        },
        {
          id: 6,
          value: 'autre',
          label: 'Autre',
          modalTitle: 'Autre'
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
        data: value
      })
    },
    skipStep(value) {
      this.$emit('skip', value)
    }
  }
}
</script>

<style lang="scss"></style>
