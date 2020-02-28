<template>
  <div class="step social-media">
    <h1>Les jeux vidéos en ligne et toi ?</h1>
    <radio :options="options" @emitValue="emitValue" />
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
          value: 'oui',
          label: "J'adore ça !"
        },
        {
          id: 2,
          value: 'non',
          label: 'Ça fait deux !'
        }
      ]
    }
  },
  methods: {
    emitValue(data) {
      this.$emit('emitValue', { name: 'jeuxVideo', data: data })
    }
  }
}
</script>

<style lang="scss"></style>
