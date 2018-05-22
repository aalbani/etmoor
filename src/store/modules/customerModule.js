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
  orderList: [],
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
    state.orderList.push(payload)
  },
  confirmedOrder (state) {
    state.customer.order.push(state.orderList)
  }
}
const actions = {
  addNewCustomer ({getters}) {
    firebase.addCustomer(getters.getCustomer)
  },
  newOrder ({commit, getters}, order) {
    commit('addOrder', order)
  },
  confirmedOrder ({commit}) {
    commit('confirmedOrder')
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
    return state.orderList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
