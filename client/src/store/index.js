import Vue from 'vue'
import Vuex from 'vuex'
import instanceServer from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    LOGIN_STATUS(state,payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    login({commit}, payload) {
      return new Promise(function(resolve, reject) {
        instanceServer({
          method: 'POST',
          url: '/login',
          data: {
            email: payload.email,
            password: payload.password,
          }
        })
        .then(({data}) => {
          console.log(data, 'hasil login');
          localStorage.setItem('access_token', data.access_token)
          commit("LOGIN_STATUS", true)
          resolve(data)
        })
        .catch(err => {
          console.log(err, "err login");
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
