import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
