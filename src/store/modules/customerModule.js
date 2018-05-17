import firebase from '../firebase/firestore'

const state = {
  customer: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: '',
    hood: '',
    sokry: 0,
    khalas: 0
  },
  loading: false
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
  addNewCustomer ({getters}) {
    firebase.addCustomer(getters.getCustomer)
  },
  dateCount ({commit, getters}, dateType) {
    if (dateType === 'sokry') {
      return getters.getCustomer.sokry
    }
    if (dateType === 'khalas') {
      return getters.getCustomer.khalas
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
