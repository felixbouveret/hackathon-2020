<template>
  <div class="step social-media">
    <h1>Les jeux vidéos en ligne et toi ?</h1>
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

export default {
  name: 'games',
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
          value: 'like',
          label: "J'adore ça !"
        },
        {
          id: 2,
          value: 'dislike',
          label: 'Ça fait deux !'
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
        name: 'games',
        data: value
      })
    }
  }
}
</script>

<style lang="scss"></style>
