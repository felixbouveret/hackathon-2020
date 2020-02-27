<template>
  <div class="social-media">
    <h1>Social Media</h1>
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
  name: 'social-media',
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
      this.$emit('emitFinalValue', value)
    }
  }
}
</script>

<style lang="scss"></style>
