<template>
  <div>
    <progress-bar :max="maxStepNumber" :current="currentStepNumber" />
    <steps />
  </div>
</template>

<script>
import stepsScript from '~/services/steps'
import progressBar from '../components/progressBar'
import Steps from '~/components/steps'

export default {
  name: 'stepsPage',
  components: {
    Steps,
    progressBar
  },
  data() {
    return {
      stepsManager: stepsScript()
    }
  },
  computed: {
    currentStepNumber() {
      return this.stepsManager.getStep().currentStep
    },
    maxStepNumber() {
      return this.stepsManager.getStep().maxStep
    }
  }
}
</script>

<style lang="scss" scoped></style>
