import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/productsModule'
Vue.use(Vuex)
export const store = new Vuex.Store({
  namespaced: true,
  state: {},
  modules: {
    products: productsModule
  },
  mutations: {},
  actions: {},
  getters: {}
})
