import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../apis/axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    userLogin: []
  },
  mutations: {
    PUSH_MESSAGE(state, payload) {
      state.messages.push(payload)
    },
    PUSH_USER(state, payload) {
      // console.log(payload, "ini payload dari getuser");
      state.userLogin = []
      payload.forEach(e => {
        // console.log(e, "<<<<<");
        state.userLogin.push({username: `${e.username}`})
      })
      console.log(state.userLogin, "setelah di push ");
    }
  },
  actions: {
    doLogin(context, payload) {
        // console.log(payload);
        axios.post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.token)
          // context.commit("PUSH_USER", data)
          return axios.get("/user")
        })
        .then(({data}) => {
          context.commit("PUSH_USER", data)
        })  
        .catch((err) => {
          console.log(err);
        })
    },
    handleLogout(context, payload) {
      console.log(localStorage.access_token, "ini pas logout");
      axios({
        method: 'DELETE',
        url: '/logout',
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({ data }) => {
        // console.log(data);
        return axios.get("/user")
      })
      .then(({data}) => {
        context.commit("PUSH_USER", data)
      })  
      .catch((err) => {
        // console.log(err);
      })
    },
    getUser(context, payload) {
      axios.get("/user")
      .then(({data}) => {
        context.commit("PUSH_USER", data)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
