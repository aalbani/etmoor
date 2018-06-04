import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
import customerModule from './modules/customerModule'
import userModule from './modules/userModule'

Vue.use(Vuex)
export const store = new Vuex.Store({
  namespaced: true,
  state: {},
  modules: {
    products: productsModule,
    customer: customerModule,
    user: userModule
  },
  mutations: {},
  actions: {},
  getters: {}
})
