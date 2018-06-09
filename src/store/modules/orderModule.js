import firebase from '../firebase/firestore'

// LEVEL 0 : CUSTOMER, LEVEL 1 :  PROVIDOR, LEVEL 2 : ADMIN.
const state = {
  order: null,
  loading: false
}
const mutations = {
}
const actions = {
  addNewOrder ({commit}, orderForm) {
    return firebase.addNewOrder(orderForm)
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
