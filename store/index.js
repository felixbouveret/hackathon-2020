import TranslateData from '../services/TranslateData'

export const state = () => ({
  form: {},
  currentStepNumber: 1
})

export const mutations = {
  SET_FORM: (state, payload) => {
    if (payload === 'clean') {
      state.form = {}
    } else {
      state.form[payload.name] = payload.data
    }
  },
  SET_CURRENT_STEP_NUMBER: (state, payload) => {
    if (payload === 'clean') {
      state.currentStepNumber = 1
    } else {
      state.currentStepNumber[payload.name] = payload.data
    }
  },
  SET_REPORT: (state, payload) => {
    state.report = payload
  }
}

export const actions = {
  updateState(context, payload) {
    if (payload === 'clean') {
      context.commit('SET_FORM', 'clean')
      context.commit('SET_CURRENT_STOP_NUMBER', 'clean')
    }
    context.commit('SET_FORM', payload)
  },
  updateCurrentStepNumber(context, payload) {
    context.commit('SET_CURRENT_STOP_NUMBER', payload)
  },
  generateReport(context) {
    const { form } = context.state
    Object.keys(form).forEach(key => {
      if (form[key] === 'yes') {
        form[key] = true
      } else if (form[key] === 'no') {
        form[key] = false
      }
    })

    if (!form.jeuxVideo) {
      form.jeuxVideo = false
    }

    const generator = TranslateData.do(form)
    console.log(generator)
    const report = {
      paris: generator.percentParis(),
      train: generator.randomSentenceTrain(),
      avion: generator.randomSentenceAvion(),
      arbre: generator.randomSentenceArbre(),
      voiture: generator.randomSentenceVoiture(),
      consos: generator.sortedConso()
    }
    context.commit('SET_REPORT', report)
  }
}
