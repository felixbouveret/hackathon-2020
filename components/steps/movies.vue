<template>
  <div class="step social-media">
    <h1>Les films et les séries, pour toi ça rime avec :</h1>
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
          label: 'Netflix',
          modalTitle: 'Netflix',
          image: 'netflix'
        },
        {
          id: 2,
          value: 'amazonprime',
          label: 'Amazon Prime',
          modalTitle: 'Amazon Prime'
        },
        {
          id: 3,
          value: 'streaming',
          label: 'Streaming',
          modalTitle: 'Streaming'
        },
        {
          id: 4,
          value: 'download',
          label: 'Téléchargement',
          modalTitle: 'Téléchargement'
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
        name: 'films',
        data: value
      })
    }
  }
}
</script>

<style lang="scss"></style>
