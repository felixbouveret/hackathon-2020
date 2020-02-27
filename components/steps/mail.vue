<template>
  <div class="step social-media">
    <h1>Concernant les mails, tu es plutôt du genre...</h1>
    <SkipButton name="mail" @go-back="$emit('go-back')" />
    <radio :options="options" @emitValue="emitValue" />
  </div>
</template>

<script>
import Radio from '../form/fm-radio'
import SkipButton from '../form/fm-button-skip'
export default {
  name: 'mail',
  components: {
    Radio,
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
          value: 'yes',
          label: 'Ma boîte mail est toujours pleine'
        },
        {
          id: 2,
          value: 'no',
          label: 'Ils ne me résistent pas, je le supprime tous !'
        }
      ]
    }
  },
  methods: {
    emitValue(value) {
      this.$emit('emitValue', { name: 'mail', data: value })
    }
  }
}
</script>

<style lang="scss"></style>
