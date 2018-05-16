import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './Store'

Vue.use(Vuetify, {
  theme: {
    primary: '#5C6BC0',
    secondary: '#00796B',
    accent: '#66BB6A',
    error: '#EF5350'
  }})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
