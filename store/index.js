export const state = () => ({
  data: {}
})

export const mutations = {
  SET_DATA: (state, payload) => {
    state.data[payload.name] = payload.data
  }
}

export const actions = {
  updateState(context, payload) {
    context.commit('SET_DATA', payload)
  }
}
