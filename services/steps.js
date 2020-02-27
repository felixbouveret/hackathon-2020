import Device from '~/components/steps/device'
import noDevice from '~/components/steps/noDevice'
import socialMedia from '~/components/steps/social-media'

const steps = {
  device: {
    component: Device,
    currentStep: 0,
    maxStep: 7,
    nextStep: data => {
      if (data.data) {
        return 'socialMedia'
      } else {
        return 'noDevice'
      }
    }
  },
  noDevice: {
    component: noDevice,
    currentStep: 1,
    maxStep: 1,
    nextStep: () => {
      $nuxt._router.push('/')
    }
  },
  socialMedia: {
    currentStep: 1,
    maxStep: 7,
    component: socialMedia,
    nextStep: data => {}
  }
}

export default function() {
  let currentStep = 'device'

  return {
    steps,
    currentStep,

    getStep() {
      return this.steps[this.currentStep]
    },
    goToNextStep(data) {
      if(this.currentStep === "noDevice") {
        this.steps[this.currentStep].nextStep()
      } else {
        this.currentStep = this.steps[this.currentStep].nextStep(data)
      }
    }
  }
}
