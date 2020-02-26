<template>
  <component :is="currentStep" @nextStep="goToNextStep" />
</template>

<script>
import stepsScript from '~/sources/steps'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      stepsManager: stepsScript(),
      currentStepValue: {}
    }
  },
  computed: {
    currentStep() {
      return this.stepsManager.getStep().component
    }
  },
  methods: {
    ...mapActions({
      updateState: 'updateState'
    }),
    goToNextStep(payload) {
      this.updateState(payload)
      this.stepsManager.goToNextStep(payload)
    }
  }
}
</script>

<style lang="scss" scoped></style>
