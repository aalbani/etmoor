import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
import customerModule from './modules/customerModule'

Vue.use(Vuex)
export const store = new Vuex.Store({
  namespaced: true,
  state: {},
  modules: {
    products: productsModule,
    customer: customerModule
  },
  mutations: {},
  actions: {},
  getters: {}
})
