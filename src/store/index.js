import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incomingMessages: [],
    directMessages: []
  },
  mutations: {
    PUSH_MESSAGE(state, payload){
      state.incomingMessages.push(payload)
    },
    DIRECT_MESSAGES(state, payload){
      state.directMessages.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
