import device from '~/components/steps/device'
import noDevice from '~/components/steps/no-device'
import music from '~/components/steps/music'
import socialMedia from '~/components/steps/social-media'
import mail from '~/components/steps/mail'
import movies from '~/components/steps/movies'
import gpsApp from '~/components/steps/gps-app'
import games from '~/components/steps/games'

const steps = {
  device: {
    component: device,
    currentStep: 1,
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
  music: {
    currentStep: 2,
    maxStep: 7,
    component: music,
    nextStep: data => {
      return 'socialMedia'
    }
  },
  socialMedia: {
    currentStep: 3,
    maxStep: 7,
    component: socialMedia,
    nextStep: data => {
      return 'mail'
    }
  },
  mail: {
    currentStep: 4,
    maxStep: 7,
    component: mail,
    nextStep: data => {
      return 'movies'
    }
  },
  movies: {
    currentStep: 5,
    maxStep: 7,
    component: movies,
    nextStep: data => {
      return 'gpsApp'
    }
  },
  gpsApp: {
    currentStep: 6,
    maxStep: 7,
    component: gpsApp,
    nextStep: data => {
      return 'games'
    }
  },
  games: {
    currentStep: 7,
    maxStep: 7,
    component: games,
    nextStep: data => {
      return undefined
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
