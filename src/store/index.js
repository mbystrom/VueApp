import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    appTitle: 'My App',
    user: null,
    error: null,
    loading: false
  },
  mutations: {
    SetUser (state, payload) {
      state.user = payload
    },
    SetError (state, payload) {
      state.error = payload
    },
    SetLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {},
  getters: {}
})
