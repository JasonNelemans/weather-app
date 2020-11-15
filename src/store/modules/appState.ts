const initialState = () => ({
  appLoading: false,
  appStatus: 'ok'
})

const state = initialState()

const actions = {
  loading({ commit }: any) {
    commit('loading')
  },
  doneLoading({ commit }: any) {
    commit('doneLoading')
  },
  error({ commit }: any) {
    commit('error')
  },
  appOk({ commit }: any) {
    commit('appOk')
  }
}

const mutations = {
  loading(state: any) {
    state.appLoading = true
  },
  doneLoading(state: any) {
    state.appLoading = false
  },
  error(state: any) {
    state.appStatus = 'error'
  },
  appOk(state: any) {
    state.appStatus = 'ok'
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}