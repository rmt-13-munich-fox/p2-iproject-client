import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  modules: {
  }
})
