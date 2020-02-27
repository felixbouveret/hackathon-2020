<template>
  <modal v-if="names">
    <span>{{ currentLabel }}</span>
    <radio :options="options" @emitValue="emitValue" :key="currentIndex" />
  </modal>
</template>

<script>
import Modal from './modal'
import Radio from './form/fm-radio'

export default {
  name: 'timeRangeModal',
  components: {
    Modal,
    Radio
  },
  props: {
    names: {
      required: true
    }
  },
  data() {
    return {
      finalData: {},
      currentIndex: 0,
      options: [
        {
          id: 10,
          value: 0.125,
          label: '5 - 10'
        },
        {
          id: 20,
          value: 0.375,
          label: '15 - 30 MIN'
        },
        {
          id: 30,
          value: 0.75,
          label: '30 - 60 MIN'
        },
        {
          id: 40,
          value: 1.5,
          label: '1 - 2 H'
        },
        {
          id: 50,
          value: 3,
          label: '2 - 4 H'
        },
        {
          id: 60,
          value: 5,
          label: '4 H +'
        }
      ]
    }
  },
  computed: {
    currentLabel() {
      return this.names[this.currentIndex]
        ? this.names[this.currentIndex].toUpperCase()
        : ''
    }
  },
  methods: {
    emitValue(value) {
      const currName = this.names[this.currentIndex]
      this.finalData[currName] = value
      const nextIndex = this.currentIndex + 1
      if (!this.names[nextIndex]) {
        this.$emit('emitFinalValue', this.finalData)
      } else {
        this.currentIndex = nextIndex
      }
    }
  }
}
</script>
