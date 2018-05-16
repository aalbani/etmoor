import firebase from '../firebase/firestore'

const state = {
  products: []
}
const mutations = {
  setProducts (state, payload) {
    state.products = payload
  }
}
const actions = {
  initProducts ({commit}) {
    const arrayOfProducts = []
    firebase.getProducts(arrayOfProducts)
    commit('setProducts', arrayOfProducts)
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
