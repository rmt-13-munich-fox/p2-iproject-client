import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    tasks: [],
    subtasks: []
  },
  mutations: {
    SET_TASKS (state, payload) {
      state.tasks = payload
    },
    SET_SUBTASKS (state, payload) {
      state.subtasks = payload
    }
  },
  actions: {
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
