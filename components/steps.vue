<template>
  <div class="steps-wrapper">
    <component :is="currentStep" @nextStep="goToNextStep" />
    <!-- <fm-button text="Valider" @click="submitStep" /> -->
  </div>
</template>

<script>
import stepsScript from '~/sources/steps'
import fmButton from '~/components/form/fm-button'
import { mapActions } from 'vuex'

export default {
  components: {
    fmButton
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
