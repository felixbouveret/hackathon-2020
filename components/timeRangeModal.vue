<template>
  <modal>
    Hey I'm a modal
    <checkbox :options="options" @emitValue="emitValue" />
  </modal>
</template>

<script>
import Modal from './modal'
import Checkbox from './form/fm-checkbox'

export default {
  name: 'timeRangeModal',
  components: {
    Modal,
    Checkbox
  },
  data() {
    return {
      options: [
        {
          id: 1,
          value: 0.125,
          label: '5 - 10'
        },
        {
          id: 2,
          value: 0.375,
          label: '15 - 30 MIN'
        },
        {
          id: 3,
          value: 0.75,
          label: '30 - 60 MIN'
        },
        {
          id: 4,
          value: 1.5,
          label: '1 - 2 H'
        },
        {
          id: 5,
          value: 3,
          label: '2 - 4 H'
        },
        {
          id: 6,
          value: 5,
          label: '4 H +'
        }
      ]
    }
  },
  methods: {
    emitValue(value) {
      console.log(value)
      this.$emit('emitValue', value)
    }
  }
}
</script>
