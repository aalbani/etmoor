import firebase from '../firebase/firestore'

const state = {
  customer: null,
  loading: false,
  khalasQuant: 0,
  sokryQuant: 0
}
const mutations = {
  setCustomer (state, payload) {
    state.customer = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}
const actions = {
  initCustomer ({commit}) {
    commit('setLoading', true)
    firebase.getCustomer([], cb => {
      commit('setCustomer', cb)
      commit('setLoading', false)
    }
    )
  }
}
const getters = {
  getCustomer (state) {
    return state.customer
  },
  getLoading (state) {
    return state.loading
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
