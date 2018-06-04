// import firebase from '../firebase/firestore'

const state = {
  user: {
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    city: '',
    region: '',
    hood: '',
    authLevel: ''
  }
}
const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}
const actions = {
  Signup ({commit}, userInfo) {
    commit('setUser', userInfo)
    // some firebase auth
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
