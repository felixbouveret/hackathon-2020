<template>
  <div class="steps-wrapper">
    <component :is="currentStep" @emitValue="updateCurrentValue" />
    <fm-button :text="stepsManager.currentStep === 'noDevice' ? 'Quitter' : 'Continuer'" @submitStep="goToNextStep"/>
  </div>
</template>

<script>
import stepsScript from '~/services/steps'
import fmButton from '~/components/form/fm-button'
import { mapActions } from 'vuex'

export default {
  components: {
    fmButton
  },
  data() {
    return {
      stepsManager: stepsScript(),
      currentValue: null
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
    updateCurrentValue(value) {
      this.currentValue = value
    },
    goToNextStep() {
      if (this.currentValue) {
        this.updateState(this.currentValue)
      }
      this.stepsManager.goToNextStep(this.currentValue)
    }
  }
}
</script>

<style lang="scss" scoped></style>
