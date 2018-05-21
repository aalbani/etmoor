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
    order: []
  },
  loading: false
}
const mutations = {
  setCustomer (state, payload) {
    state.customer = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  addOrder (state, payload) {
    state.customer.order.push(payload)
    console.log(state.customer.order)
  }
}
const actions = {
  addNewCustomer ({getters}) {
    firebase.addCustomer(getters.getCustomer)
  },
  newOrder ({commit, getters}, order) {
    const oldList = getters.orderList
    commit('addOrder', order)
  }
}
const getters = {
  getCustomer (state) {
    return state.customer
  },
  getLoading (state) {
    return state.loading
  },
  orderList (state) {
    return state.customer.order
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
