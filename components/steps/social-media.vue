<template>
  <div class="step social-media">
    <h1 class="content">Quels réseaux sociaux utilises-tu quotidiennement ?</h1>
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
  name: 'social-media',
  components: {
    timeRangeModal,
    Checkbox,
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
          label: 'Facebook',
          modalTitle: 'Facebook'
        },
        {
          id: 2,
          value: 'instagram',
          label: 'Instagram',
          modalTitle: 'Instagram'
        },
        {
          id: 3,
          value: 'twitter',
          label: 'Twitter',
          modalTitle: 'Twitter'
        },
        {
          id: 4,
          value: 'linkedin',
          label: 'Linkedin',
          modalTitle: 'Linkedin'
        },
        {
          id: 5,
          value: 'twitch',
          label: 'Twitch',
          modalTitle: 'Twitch'
        },
        {
          id: 6,
          value: 'youtube',
          label: 'Youtube',
          modalTitle: 'Youtube'
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
        name: 'reseauSociaux',
        data: value
      })
    },
  }
}
</script>

<style lang="scss"></style>
