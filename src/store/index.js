import Vue from 'vue'
import Vuex from 'vuex'
import { news, thsr } from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    thsr,
    news
  }
})
