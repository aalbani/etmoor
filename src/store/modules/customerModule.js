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
  },
  setKhalasQuant (state, payload) {
    state.khalasQuant = payload
  },
  setSokryQuant (state, payload) {
    state.sokryQuant = payload
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
  },
  getQuantity ({commit, getters}, dateType) {
    if (dateType === 'sokry') {
      return getters.sokryQuant
    }
    if (dateType === 'khalas') {
      return getters.khalasQuant
    }
  }
}
const getters = {
  getCustomer (state) {
    return state.customer
  },
  getLoading (state) {
    return state.loading
  },
  getKhalasQuant (state) {
    return state.khalasQuant
  },
  getSokryQuant (state) {
    return state.sokryQuant
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
