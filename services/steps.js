import Hello from '~/components/steps/hello'
import Device from '~/components/steps/device'
import noDevice from '~/components/steps/noDevice'
import socialMedia from '~/components/steps/social-media'

const steps = {
  hello: {
    component: Hello,
    currentStep: 0,
    maxStep: 7,
    nextStep: data => {
      return 'device'
    }
  },
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
      return 'hello'
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
  let currentStep = 'hello'

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
