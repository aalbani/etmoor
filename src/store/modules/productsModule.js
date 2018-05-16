import firebase from '../firebase/firestore'

const state = {
  products: ['ll']

}
const mutations = {
  setProducts (state, payload) {
    state.products = payload
  }
}
const actions = {
  initProducts ({commit}) {
    firebase.getProducts([], cb => commit('setProducts', cb))
  }
}
const getters = {
  getProducts (state) {
    return state.products
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
