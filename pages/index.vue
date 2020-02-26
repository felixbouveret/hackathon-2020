<template>
  <component
    :is="currentStep"
    @nextStep="goToNextStep"
  />
</template>

<script>
import stepsScript from '~/sources/steps'

export default {
  data() {
    return {
      stepsManager: stepsScript(),
      currentStepValue: {},
    }
  },
  computed: {
    currentStep() {
      return this.stepsManager.getStep().component
    }
  },
  methods: {
    goToNextStep(payload) {
      this.stepsManager.goToNextStep(payload);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
