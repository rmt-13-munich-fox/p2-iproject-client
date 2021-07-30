import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    tasks: [],
    subtasks: [],
    taskId: null,
    news: [],
    books: []
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
    },
    SET_TASKID (state, payload) {
      state.taskId = payload
    },
    SET_NEWS (state, payload) {
      state.news = payload
    },
    SET_BOOKS (state, payload) {
      state.books = payload
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
    register (context, payload) {
      const { firstName, lastName, username, email, password } = payload
      return axios({
        url: '/register',
        method: 'POST',
        data: {
          firstName,
          lastName,
          username,
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
    },
    addNewSubtask (context, payload) {
      const { TaskId, subtask } = payload
      return axios({
        url: `/subtasks/${TaskId}`,
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          subtask
        }
      })
    },
    getNews (context) {
      return axios({
        url: '/news',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    getBooks (context) {
      return axios({
        url: '/gSearch',
        method: 'GET'
      })
    }
  },
  modules: {
  }
})
