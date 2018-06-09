import firebase from '../firebase/firestore'

// LEVEL 0 : CUSTOMER, LEVEL 1 :  PROVIDOR, LEVEL 2 : ADMIN.
const state = {
  email: null,
  uid: null,
  user: null,
  loading: false,
  error: null
}
const mutations = {
  setUser (state, payload) {
    state.user = payload.user
    state.email = payload.email
    state.uid = payload.uid
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state, payload) {
    state.error = payload
  },
  addOrder (state, payload) {
    state.user.orders.push(payload)
  }
}
const actions = {
  signupNewUser ({commit}, userInfo) {
    commit('setLoading', true)
    return firebase.signupNewUser(userInfo, newUser => {
      commit('setLoading', false)
      commit('setUser', newUser)
    })
    .catch(err => {
      commit('setLoading', false)
      commit('setError', err)
    })
  },
  login ({commit}, loginInfo) {
    commit('setLoading', true)
    return firebase.login(loginInfo, userInfo => {
      commit('setUser', userInfo)
      commit('setLoading', false)
    })
    .catch(err => {
      commit('setLoading', false)
      commit('setError', err)
    })
  },
  signout ({commit}) {
    firebase.signOut()
    commit('setUser', null)
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', {id: payload.uid, userInfo: {}})
  },
  clearError ({commit}) {
    commit('clearError', null)
  },
  addLocationAndOrder ({getters}, orderForm) {
    console.log(getters.uidAndEmail.uid, orderForm)
    return firebase.updateUser(getters.uidAndEmail.uid, orderForm)
  }
}
const getters = {
  getUser (state) {
    return state.user
  },
  isAuth (state) {
    return (state.user !== null && state.user !== undefined)
  },
  loading (state) {
    return state.loading
  },
  authLevel (state) {
    return state.user.authLevel
  },
  error (state) {
    return state.error
  },
  orders (state) {
    return state.user.orders
  },
  uidAndEmail (state) {
    const info = {
      email: state.email,
      uid: state.uid
    }
    return info
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
