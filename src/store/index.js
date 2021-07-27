import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    incomingMessages: [],
    directMessages: [],
    isLoggedIn: false,
    cars: []
  },
  mutations: {
    PUSH_MESSAGE(state, payload) {
      state.incomingMessages.push(payload);
    },
    DIRECT_MESSAGES(state, payload) {
      state.directMessages.push(payload);
    },
    STATE_LOGGED(state, payload){
      state.isLoggedIn = payload
    },
    STATE_CAR(state, payload){
      state.cars = payload
    }
  },
  actions: {
    async register({ commit }, payload) {
      try {
        const data = payload;
        await axios.post("/register", data);
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    async login({ commit }, payload) {
      try{
        const data = payload
        const response = await axios.post('/login', data)
        const {access_token, id, username} = response.data
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('id', id)
        localStorage.setItem('username', username)
        return true
      } catch(err){
        console.log(err);
      }
    },
    async fetchDataCars({ commit }) {
      try {
        const access_token = localStorage.access_token
        const response = await axios.get("/", {
          headers: {access_token}
        })
        const car = response.data
        commit('STATE_CAR', car)
      } catch (err) {
        console.log(err);
      }
    },
    async 
  },
  modules: {},
});
