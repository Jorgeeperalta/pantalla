import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    btnLogin: true,
    color: 'primary',
    userId: '',
    nombre: '',
    nombreComercio: '',
    cant_pantallas: '',
    url: 'http://jorgeperalta-001-site4.itempurl.com/apipasarela/',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
