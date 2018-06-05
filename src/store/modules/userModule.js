import firebase from '../firebase/firestore'

// LEVEL 0 : CUSTOMER, LEVEL 1 :  PROVIDOR, LEVEL 2 : ADMIN.
const state = {
  user: {
  }
}
const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}
const actions = {
  signupNewUser ({commit}, userInfo) {
    firebase.signupNewUser(userInfo)
  },
  login ({commit}, loginInfo) {
    firebase.login(loginInfo, userInfo => {
      commit('setUser', userInfo)
    })
  }
}
const getters = {
  getUser (state) {
    return state.User
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
