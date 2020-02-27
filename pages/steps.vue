<template>
  <div class="steps-wrapper" :class="currentStepBackground">
    <progress-bar class="bar" :max="7" :current="currentStepNumber" />
    <transition name="fade" mode="out-in">
      <component
        class="step"
        :is="currentStep"
        :firstPartData="firstPartData"
        @emitValue="updateCurrentValue"
        @emitFinalValue="goToNextStep"
        @skip="goToNextStep"
      />
    </transition>
    <fm-button
      :text="stepsManager.currentStep === 'noDevice' ? 'Quitter' : 'Continuer'"
      @submitStep="goToNextStep"
    />
  </div>
</template>

<script>
import stepsScript from '~/services/steps'
import fmButton from '~/components/form/fm-button'
import progressBar from '~/components/progressBar'
import { mapActions } from 'vuex'

export default {
  components: {
    fmButton,
    progressBar
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
    },
    currentStepNumber() {
      return this.stepsManager.getStep().currentStep
    },
    currentStepBackground() {
      return `${this.stepsManager.getStep().color}-section`
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
      if (this.stepsManager.getStep().externalLink) {
        this.stepsManager.goToNextStep()
      }
      // On check si la data vient d'un step à 2 étape
      else if (payload && payload.data) {
        this.updateState(payload)
        this.stepsManager.goToNextStep(payload)
        this.firstPartData = undefined
        this.currentValue = undefined
      }
      // Check si il y une data dans la valeur emitted
      // Dans le cas contraire on ne la stock pas dans le store
      else if (this.currentValue && this.currentValue.data) {
        this.updateState(this.currentValue)
        this.stepsManager.goToNextStep(this.currentValue)
        this.firstPartData = undefined
        this.currentValue = undefined
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

<style lang="scss" scoped>
.steps-wrapper {
  height: 100vh;
  min-height: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 70px 0;
  transition: background-color .6s;

  .bar {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
}
.step {
  width: 100%;
}
</style>
