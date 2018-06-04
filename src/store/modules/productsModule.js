import firebase from '../firebase/firestore'

const state = {
  products: null,
  loading: false
}
const mutations = {
  setProducts (state, payload) {
    state.products = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  updateState (state, payload) {
    for (let i = 0; i < state.products.length; i++) {
      if (payload.dateType === state.products[i].dateType) {
        state.products[i].inventory = Number(state.products[i].inventory) - Number(payload.quantity)
      }
    }
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
  },
  updateState ({commit}, order) {
      const payload = {
        quantity: order.quantity,
        dateType: order.dateType
      }
      commit('updateState', payload)
    
  },
  updateInventory ({getters}) {
    firebase.updateInventory(getters.getProducts)
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
