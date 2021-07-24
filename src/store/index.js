import Vue from 'vue'
import Vuex from 'vuex'
import credentialService from '@/services/credential.service'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: credentialService.getUser(),
    },
    getters: {
      nombre (state) {
        return state.user.nombre
      },
      isAuthenticated (state) {
        return state.user !== null
      },
      isMod (state) {
        return state.user.rol === 'Mod'
      },
      isUser (state) {
        return state.user.rol === 'User'
      },
      isAdmin (state) {
        return state.user.rol === 'Admin'
      },
    },
    mutations: {
      setUser (state, user) {
        state.user = user
      },
    },
    actions: {},
  })
  export default store
