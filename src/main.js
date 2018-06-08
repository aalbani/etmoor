import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import AlertComponent from './components/Shared/Alert.vue'
import { store } from './store'

Vue.use(Vuetify, {
  theme: {
    primary: '#006C84',
    secondary: '#6EB5C0',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#6EB5C0',
    success: '#4CAF50',
    warning: '#FFC107'
  }})
Vue.component('app-alert', AlertComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  /* created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  } */
})
