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
    SEND_MESSAGE(state, data){
      state.allMessage.push(data)
    }
  },
  actions: {
    facebook_login({commit}, payload){
      axios.post('/users/login/facebook', payload)
        .then(({data}) => {
          localStorage.setItem('access_token', data.token)
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
