import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'

Vue.use(Vuetify, {
  theme: {
    primary: '#A99F3C',
    secondary: '#E59D5C',
    accent: '#F3D3B8',
    error: '#A5C3CF'
  }})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
