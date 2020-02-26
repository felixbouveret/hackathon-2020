<template>
  <div>
    <progress-bar :max="maxStepNumber" :current="currentStepNumber" />
    <component :is="currentStep" @nextStep="goToNextStep" />
  </div>
</template>

<script>
import progressBar from '../components/progressBar'
import stepsScript from '~/sources/steps'
import { mapActions } from 'vuex'

export default {
  name: 'stepsPage',
  components: {
    progressBar
  },
  data() {
    return {
      stepsManager: stepsScript(),
      currentStepValue: {}
    }
  },
  computed: {
    currentStep() {
      return this.stepsManager.getStep().component
    },
    currentStepNumber() {
      return this.stepsManager.getStep().currentStep
    },
    maxStepNumber() {
      return this.stepsManager.getStep().maxStep
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
