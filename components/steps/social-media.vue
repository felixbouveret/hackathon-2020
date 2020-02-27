<template>
  <div class="step social-media">
    <h1 class="content">Quels réseaux sociaux utilises-tu quotidiennement ?</h1>
    <SkipButton name="social-media" @go-back="$emit('go-back')" />
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
  name: 'social-media',
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
          value: 'facebook',
          label: 'Facebook'
        },
        {
          id: 2,
          value: 'instagram',
          label: 'Instagram'
        },
        {
          id: 3,
          value: 'twitter',
          label: 'Twitter'
        },
        {
          id: 4,
          value: 'linkedin',
          label: 'Linkedin'
        },
        {
          id: 5,
          value: 'twitch',
          label: 'Twitch'
        },
        {
          id: 6,
          value: 'youtube',
          label: 'Youtube'
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
        name: 'socialMedia',
        data: value
      })
    }
  }
}
</script>

<style lang="scss"></style>
