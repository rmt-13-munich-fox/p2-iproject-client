import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    marmuts : [],
    isLoggedIn: false,
    searched: [],
    message:[],
    name: "",
    instagramlink: ""
  },
  mutations: {
    FETCH_DATA(state, payload) {
      state.marmuts = payload
      // console.log(state.marmuts)
    },
    LOGIN_STATE(state,payload) {
      state.isLoggedIn = payload
    },
    LOGOUT_STATE(state,payload) {
      state.isLoggedIn = payload
    },
    PUSH_MESSAGE(state, payload) {
      state.message.push(payload)
    },
    CHANGE_NAME(state,payload) {
      state.name = payload
    },
    INSTAGRAM_LINK(state,payload) {
      state.searched = payload
    }
  },
  actions: {
    register(context, payload) {
      axios({
        method: "POST",
        url:"http://localhost:3000/register",
        data:payload
      })
      .then(response => {
        swal('Register succesful, we sent you an email!')
      })
      .catch(err => {
        swal('Wheek!! An error has occured wheek!!')
      })

    },
    getData(context, payload) {
      axios({
        method: 'GET',
        url: "http://localhost:3000/getmarmut"
      })
      .then(response => {
        // console.log(response.data)
        context.commit('FETCH_DATA', response.data)
        // console.log(context.marmuts)
      })
    },
    login(context, payload, done){
      axios({
        method: "POST",
        url: "http://localhost:3000/login",
        data: payload
      })
      .then(response => {
        // console.log(response)
        if(localStorage.getItem('_grecaptcha')){
        localStorage.setItem('access_token', response.data.access_token)          
          localStorage.setItem("uname", response.data.username)
          context.commit('LOGIN_STATE', true)
          let nama = localStorage.getItem('uname')
          context.commit('CHANGE_NAME', nama)
          swal(`Welcome ${response.data.username}`)
        }else{
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem("uname", response.data.username)
          context.commit('LOGIN_STATE', true)
          let nama = localStorage.getItem('uname')
          context.commit('CHANGE_NAME', nama)
          swal(`Welcome ${response.data.username}`)
        }
      })
      .catch(err => {
        console.log('Error has been caught')
      })
    },
    logout(context, payload) {
      localStorage.clear()
      context.commit('LOGOUT_STATE', false)
      swal('Succesfully logged out')
    },
    instagram(context){
      var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://google-search3.p.rapidapi.com/api/v1/images/q=cute+guinea+pigs',
  headers: {
    'x-rapidapi-key': '0a3e779b89msh7744b89298a386dp1f9204jsn60bdd2bc95c3',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	// console.log(response.data.image_results);
  context.commit('INSTAGRAM_LINK', response.data.image_results)
}).catch(function (error) {
	console.error(error);
});
    }
  },
  modules: {
  }
})