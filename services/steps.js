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
    nextStep: data => {
      if (data.data === 'yes') {
        return 'music'
      } else {
        return 'noDevice'
      }
    }
  },
  noDevice: {
    component: noDevice,
    externalLink: true,
    currentStep: 7,
    nextStep: () => {
      $nuxt._router.push('/')
    }
  },
  music: {
    currentStep: 2,
    component: music,
    nextStep: data => {
      return 'socialMedia'
    }
  },
  socialMedia: {
    currentStep: 3,
    component: socialMedia,
    nextStep: data => {
      return 'mail'
    }
  },
  mail: {
    currentStep: 4,
    component: mail,
    nextStep: data => {
      return 'movies'
    }
  },
  movies: {
    currentStep: 5,
    component: movies,
    nextStep: data => {
      return 'gpsApp'
    }
  },
  gpsApp: {
    currentStep: 6,
    component: gpsApp,
    nextStep: data => {
      return 'games'
    }
  },
  games: {
    currentStep: 7,
    externalLink: true,
    component: games,
    nextStep: data => {
      $nuxt._router.push('/report')
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
