import Device from '~/components/steps/device'
import noDevice from '~/components/steps/no-device'
import socialMedia from '~/components/steps/social-media'

const steps = {
  device: {
    component: Device,
    currentStep: 0,
    maxStep: 7,
    nextStep: data => {
      if (data.data === 'yes') {
        return 'socialMedia'
      } else {
        return 'noDevice'
      }
    }
  },
  noDevice: {
    component: noDevice,
    externalLink: true,
    currentStep: 1,
    maxStep: 1,
    nextStep: () => {
      $nuxt._router.push('/')
    }
  },
  socialMedia: {
    currentStep: 2,
    maxStep: 7,
    component: socialMedia,
    nextStep: data => {
      return 'foo'
    }
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
      if (this.steps[this.currentStep].externalLink) {
        this.steps[this.currentStep].nextStep()
      } else {
        this.currentStep = this.steps[this.currentStep].nextStep(data)
      }
    }
  }
}
