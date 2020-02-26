<template>
  <div class="device">
    <h1>Device</h1>
    <form>
      <fm-radio :options="options"/>
    </form>
  </div>
</template>

<script>
import FmRadio from '~/components/form/fm-radio'

export default {
  name: "device",
  components: {
    FmRadio,
  },
  data () {
    return {
      options: [
        {
          id: 'non',
          label: 'Non',
          value: false
        },
        {
          id: 'oui',
          label: 'Oui',
          value: true
        }
      ]
    }
  },
  methods: {
    submitStep (payload) {
      this.$emit('nextStep', payload.target.value)
    }
  }
}
</script>

<style lang="scss">

</style>
