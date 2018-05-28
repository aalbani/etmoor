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
  loading: false,
  inquiryForm: null
}
const mutations = {
  setCustomer (state, payload) {
    state.customer.firstName = payload.firstName
    state.customer.lastName = payload.lastName
    state.customer.phoneNumber = payload.phoneNumber
    state.customer.email = payload.email
    state.customer.city = payload.city
    state.customer.hood = payload.hood
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
  },
  topUpOrder (state, payload) {
    state.orderList[payload.index].quantity += payload.toAdd
  },
  setInquiryForm (state, payload) {
    state.inquiryForm = payload
  },
  reset (state) {
    state.customer.firstName = ''
    state.customer.lastName = ''
    state.customer.phoneNumber = ''
    state.customer.email = ''
    state.customer.country = ''
    state.customer.city = ''
    state.customer.hood = ''
    state.customer.order = null
    state.orderList = []
    state.loading = false
    state.inquiryForm = null
  }
}
const actions = {
  addNewCustomer ({getters}) {
    firebase.addCustomer(getters.getCustomer)
  },
  newOrder ({commit, getters}, order) {
    const oldOrder = getters.orderList
    if (oldOrder.some(oldOrder => (oldOrder.dateType === order.dateType))) {
      const payload = {
        index: oldOrder.findIndex(oldOrder => oldOrder.dateType === order.dateType),
        toAdd: order.quantity
      }
      commit('topUpOrder', payload)
    } else {
      commit('addOrder', order)
    }
  },
  confirmedOrder ({commit}) {
    commit('confirmedOrder')
  },
  setNewCustomer ({commit}, newCustomer) {
    commit('setCustomer', newCustomer)
  },
  sendInquiry ({commit}, inquiryForm) {
    commit('setInquiryForm', inquiryForm)
    firebase.sendInquiry(inquiryForm)
  },
  reset ({commit}) {
    commit('reset')
  },
  updateInventory ({getters}) {
    firebase.updateInventory(getters.order)
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
  },
  order (state) {
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
