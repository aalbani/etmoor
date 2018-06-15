
import firebase from '../firebase/firestore'

// LEVEL 0 : CUSTOMER, LEVEL 1 :  PROVIDOR, LEVEL 2 : ADMIN.
const state = {
  orders: null,
  loading: false,
  count: {
    totalCount: 0,
    northCount: 0,
    southCount: 0,
    eastCount: 0,
    westCount: 0,
    centerCount: 0,
    outCount: 0
  }
}
const mutations = {
  setCount (state, payload) {
    state.count = payload
    console.log(state.count)
  },
  setOrders (state, payload) {
    state.orders = payload
    console.log(state.orders)
  }
}
const actions = {
  addNewOrder ({ commit }, orderForm) {
    return firebase.addNewOrder(orderForm)
  },
  initDashboard ({ commit }) {
    return firebase.getOrdersAndCounts()
    .then(cb => {
      console.log(cb)
      commit('setOrders', cb.array)
      commit('setCount', cb.count)
    })
  }
}
const getters = {
  orders (state) {
    return state.orders
  },
  count (state) {
    return state.count
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}