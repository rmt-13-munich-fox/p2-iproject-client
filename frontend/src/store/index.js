import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../apis/axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messagesMangaRoom: [],
    messagesAnimeRoom: [],
    userLogin: []
  },
  mutations: {
    PUSH_MESSAGE(state, payload) {
      let room = localStorage.room
      if(room === "Manga") {
        state.messagesMangaRoom.push(payload)
      } else {
        state.messagesAnimeRoom.push(payload)
      }
    },
    PUSH_USER(state, payload) {
      console.log(payload, "ini payload dari getuser");
      state.userLogin = []
      payload.forEach(e => {
        // console.log(e, "<<<<<");
        state.userLogin.push({username: `${e.username}`})
      })
      // console.log(state.userLogin, "setelah di push ");
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
      let room = localStorage.room
      axios.get(`/user?room=${room}`)
      .then(({data}) => {
        console.log(data);
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
