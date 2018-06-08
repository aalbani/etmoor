import firebase from '../firebase/firestore'

// LEVEL 0 : CUSTOMER, LEVEL 1 :  PROVIDOR, LEVEL 2 : ADMIN.
const state = {
  user: null,
  loading: false,
  error: null
}
const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state, payload) {
    state.error = payload
  }
}
const actions = {
  signupNewUser ({commit}, userInfo) {
    commit('setLoading', true)
    firebase.signupNewUser(userInfo, newUser => {
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
