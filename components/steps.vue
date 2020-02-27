<template>
  <div class="steps-wrapper">
    <component
      :is="currentStep"
      :firstPartData="firstPartData"
      @emitValue="updateCurrentValue"
      @emitFinalValue="goToNextStep"
    />
    <fm-button
      :text="stepsManager.currentStep === 'noDevice' ? 'Quitter' : 'Continuer'"
      @submitStep="goToNextStep"
    />
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
      currentValue: null,
      firstPartData: undefined
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
      // On check si la data vient d'un step à 2 étape
      if (payload && payload.data) {
        this.updateState(payload)
        this.stepsManager.goToNextStep(payload)
      }
      // Check si il y une data dans la valeur emitted
      // Dans le cas contraire on ne la stock pas dans le store
      else if (this.currentValue.data) {
        this.updateState(this.currentValue)
        this.stepsManager.goToNextStep(this.currentValue)
        //
      } else if (this.currentValue) {
        // On stock la valeur dans une data qui correspond
        // A la première partie d'un step à 2 niveaux
        this.firstPartData = this.currentValue
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
