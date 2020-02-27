export const state = () => ({
  form: {},
  currentStepNumber: 1
})

export const mutations = {
  SET_FORM: (state, payload) => {
    state.form[payload.name] = payload.data
  },
  SET_CURRENT_STEP_NUMBER: (state, payload) => {
    state.currentStepNumber[payload.name] = payload.data
  }
}

export const actions = {
  updateState(context, payload) {
    context.commit('SET_FORM', payload)
  },
  updateCurrentStepNumber(context, payload) {
    context.commit('SET_CURRENT_STOP_NUMBER', payload)
  }
}
