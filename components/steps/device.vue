<template>
  <div class="device">
    <h1>Device</h1>
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
          id: 'non',
          label: 'Non',
          value: 'no'
        },
        {
          id: 'oui',
          label: 'Oui',
          value: 'yes'
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

<style lang="scss"></style>
