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
    color: 'orange',
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
    color: 'orange',
    externalLink: true,
    currentStep: 7,
    nextStep: () => {
      $nuxt._router.push('/')
    }
  },
  music: {
    component: music,
    currentStep: 2,
    color: 'purple',
    nextStep: data => {
      return 'socialMedia'
    }
  },
  socialMedia: {
    component: socialMedia,
    currentStep: 3,
    color: 'skin',
    nextStep: data => {
      return 'mail'
    }
  },
  mail: {
    component: mail,
    color: 'orange',
    currentStep: 4,
    nextStep: data => {
      return 'movies'
    }
  },
  movies: {
    component: movies,
    color: 'purple',
    currentStep: 5,
    nextStep: data => {
      return 'gpsApp'
    }
  },
  gpsApp: {
    component: gpsApp,
    color: 'skin',
    currentStep: 6,
    nextStep: data => {
      return 'games'
    }
  },
  games: {
    component: games,
    color: 'purple',
    currentStep: 7,
    externalLink: true,
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
