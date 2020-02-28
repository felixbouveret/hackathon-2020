<template>
  <div class="step device">
    <h1 class="content">Utilises-tu un appareil connecté ?</h1>
    <form>
      <fm-radio :options="options" @emitValue="emitValue" />
    </form>
  </div>
</template>

<script>
import FmRadio from '~/components/form/fm-radio'

export default {
  name: 'device',
  components: {
    FmRadio
  },
  data() {
    return {
      options: [
        {
          id: 'oui',
          label: 'Oui',
          value: 'yes',
          image: 'device'
        },
        {
          id: 'non',
          label: 'Non',
          value: 'no',
          image: 'no-device'
        }
      ]
    }
  },
  methods: {
    emitValue(data) {
      this.$emit('emitValue', { name: 'has-device', data: data })
    }
  }
}
</script>

<style lang="scss">
.step {
  form {
    flex-basis: 100%;
  }
}
</style>
