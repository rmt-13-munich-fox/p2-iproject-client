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
    nationsByName : [],
    allMessage: []
  },
  mutations: {
    LOGINEXE(state, data, name) {
      state.isLogin = data
      state.username = name
    },
    GET_NAME(state, data) {
      state.nationsByName = data
    },
    SEND_MESSAGE(state, chat, username){
      state.allMessage.push({chat, username})
    }
  },
  actions: {
    facebook_login({commit}, payload){
      axios.post('/users/login/facebook', payload)
        .then(({data}) => {
          localStorage.setItem('access_token', data.token)
          localStorage.setItem('username', data.msg)
          commit('LOGINEXE', true, data.msg)
          router.push({name : 'Home'})
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    
  },
  modules: {
  }
})
