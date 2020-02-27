<template>
  <div class="steps-wrapper">
    <component :is="currentStep" @emitValue="updateCurrentValue" />
    <button text="Continuer" @click="goToNextStep">Continuer</button>
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
      currentStepValue: {},
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
    goToNextStep(payload) {
      this.updateState(this.currentValue)
      this.stepsManager.goToNextStep(this.currentValue)
    }
  }
}
</script>

<style lang="scss" scoped></style>
