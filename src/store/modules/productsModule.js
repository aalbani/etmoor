import firebase from '../firebase/firestore'

const state = {
  products: [],
  loading: false
}
const mutations = {
  setProducts (state, payload) {
    state.products = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}
const actions = {
  initProducts ({commit}) {
    commit('setLoading', true)
    firebase.getProducts([], cb => {
      commit('setProducts', cb)
      commit('setLoading', false)
    }
    )
  }
}
const getters = {
  getProducts (state) {
    return state.products
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
