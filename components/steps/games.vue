<template>
  <div class="step social-media">
    <h1>Les jeux vidéos en ligne et toi ?</h1>
    <checkbox :options="options" @emitValue="emitValue" />
    <transition name="scale" mode="in-out">
      <timeRangeModal
        v-if="firstPartData && firstPartData[0] !== false"
        @emitFinalValue="emitFinalValue"
        :names="firstPartData"
        :options="options"
      />
    </transition>
  </div>
</template>

<script>
import timeRangeModal from '../timeRangeModal'
import Radio from '../form/fm-radio'

export default {
  name: 'games',
  components: {
    timeRangeModal,
    Radio
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
          value: 'games',
          label: "J'adore ça !",
          modalTitle: 'Jeux videos en ligne'
        },
        {
          id: 2,
          value: false,
          label: 'Ça fait deux !'
        }
      ]
    }
  },
  methods: {
    emitValue(value) {
      if (!value) {
        this.emitFinalValue(value)
        return
      }
      this.$emit('emitValue', [value])
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
