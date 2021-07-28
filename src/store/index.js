import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    tasks: [],
    subtasks: []
  },
  mutations: {
    SET_TASKS (state, payload) {
      state.tasks = payload
    },
    SET_SUBTASKS (state, payload) {
      state.subtasks = payload
    },
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email,
          password
        }
      })
    },
    addNewTask ({ commit }, payload) {
      const { name, task } = payload
      return axios({
        url: '/tasks',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name,
          task
        }
      })
    }
  },
  modules: {
  }
})
