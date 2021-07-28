import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title : 'TEST',
    isLogin : false,
    isWrong: false,
    username : '',
    nationsByName : []
  },
  mutations: {
    LOGINEXE(state, data, name) {
      state.isLogin = data
      state.username = name
    },
    GET_NAME(state, data) {
      state.nationsByName = data
    }
  },
  actions: {
    
  },
  modules: {
  }
})
