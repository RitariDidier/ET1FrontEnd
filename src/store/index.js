import Vue from 'vue'
import Vuex from 'vuex'
import credentialService from '@/services/credential.service'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: credentialService.getUser(),
        viajeIda: credentialService.getViajeIda(),
        viajeVuelta: credentialService.getViajeVuelta(),
    },
    getters: {
      nombre (state) {
        return state.user.firstName + ' ' + state.user.lastName
      },
      getUserID (state) {
        return state.user._id
      },
      isAuthenticated (state) {
        return state.user !== null
      },
      isMod (state) {
        return state.user.role === 'Mod'
      },
      isUser (state) {
        return state.user.role === 'User'
      },
      isAdmin (state) {
        return state.user.role === 'Admin'
      },
      isViajeIda (state) {
        return state.viajeIda !== null
      },
      isViajeVuelta (state) {
        return state.viajeVuelta !== null
      },
    },
    mutations: {
      setUser (state, user) {
        state.user = user
      },
      setViajeIda (state, viajeIda) {
        state.viajeIda = viajeIda
      },
      setViajeVuelta (state, viajeVuelta) {
        state.viajeVuelta = viajeVuelta
      },
    },
    actions: {},
  })
  export default store
