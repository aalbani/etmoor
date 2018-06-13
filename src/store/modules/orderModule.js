import firebase from '../firebase/firestore'

// LEVEL 0 : CUSTOMER, LEVEL 1 :  PROVIDOR, LEVEL 2 : ADMIN.
const state = {
  orders: null,
  loading: false,
  count: null
}
const mutations = {
  setCount (state, payload) {
    state.count = payload
  },
  setOrders (state, payload) {
    state.orders = payload
  }
}
const actions = {
  addNewOrder ({commit}, orderForm) {
    return firebase.addNewOrder(orderForm)
  },
  initDashboard ({commit}) {
    firebase.getOrders([], cb => {
      commit('setOrders', cb.array)
      commit('setCount', cb.count)
    })
  }
}
const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
