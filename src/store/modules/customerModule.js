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
    order: null
  },
  orderList: [],
  loading: false
}
const mutations = {
  setCustomer (state, payload) {
    state.customer.firstName = payload.firstName
    state.customer.lastName = payload.lastName
    state.customer.phoneNumber = payload.phoneNumber
    state.customer.email = payload.email
    state.customer.country = payload.country
    state.customer.city = payload.city
    state.customer.hood = payload.hood
    console.log(state.customer)
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  addOrder (state, payload) {
    state.orderList.push(payload)
    console.log(state.orderList)
  },
  confirmedOrder (state) {
    state.customer.order = state.orderList
    console.log(state.customer.order)
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
  },
  setNewCustomer ({commit}, newCustomer) {
    commit('setCustomer', newCustomer)
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
