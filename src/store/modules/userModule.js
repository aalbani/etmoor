import firebase from '../firebase/firestore'

const state = {
  user: {
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    city: '',
    region: '',
    hood: '',
    authLevel: '',
    isAuth: '',
    orders: null
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
    firebase.login(loginInfo)
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
