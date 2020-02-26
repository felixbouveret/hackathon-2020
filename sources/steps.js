import Device from '~/components/steps/device'
import noDevice from '~/components/steps/noDevice'
import socialMedia from '~/components/steps/social-media'

const steps = {
  device: {
    component: Device,
    nextStep: data => {
      if (data) {
        return 'socialMedia'
      } else {
        return 'noDevice'
      }
    }
  },
  noDevice: {
    component: noDevice,
    nextStep: () => {}
  },
  socialMedia: {
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
      this.currentStep = this.steps[this.currentStep].nextStep(data)
    }
  }
}
