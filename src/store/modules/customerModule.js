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
  dateCount ({commit, getters}, dateType) {
    if (dateType === 'sokry') {
      return getters.getSokryQuant
    }
    if (dateType === 'khalas') {
      return getters.getKhalasQuant
    }
  },
  addDate ({commit, getters}, dateType) {
    if (dateType === 'sokry') {
      const x = getters.getSokryQuant
      commit('setSokryQuant', (x + 1))
    }
    if (dateType === 'khalas') {
      const y = getters.getKhalasQuant
      commit('setKhalasQuant', (y + 1))
    }
  },
  subDate ({commit, getters}, dateType) {
    const x = getters.getSokryQuant
    const y = getters.getKhalasQuant
    if (dateType === 'sokry' && x !== 0) {
      commit('setSokryQuant', (x - 1))
    }
    if (dateType === 'khalas' && y !== 0) {
      commit('setKhalasQuant', (y - 1))
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
