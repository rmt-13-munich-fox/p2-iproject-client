import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    incomingMessages: [],
    directMessages: [],
    isLoggedIn: false,
    cars: [],
    detail: [],
    favorites: [],
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
    },
    DETAIL_CAR(state, payload){
      state.detail.push(payload)
    },
    FETCH_FAVORITES(state, payload){
      state.favorites = payload
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
        const response = await axios.get("/cars", {
          headers: {access_token}
        })
        const car = response.data
        // console.log(car);
        commit('STATE_CAR', car)
      } catch (err) {
        console.log(err);
      }
    },
    async detailCar({ commit }, payload){
      try {
        const id = payload
        const access_token = localStorage.access_token
        const response = await axios.get(`/cars/${id}`, {
          headers: {access_token}
        })
        const {data} = response
        console.log(data);
        commit('DETAIL_CAR', data)
      } catch (err) {
        console.log(err);
      }
    },
    async fetchDataFavorites({ commit }){
      try {
        const access_token = localStorage.access_token
        const response = await axios.get('/favorites', {
          headers: {access_token}
        })
        const {data} = response
        commit('FETCH_FAVORITES', data)
      } catch (err) {
        console.log(err);
      }
    },
    async postFavorites({ commit }, payload){
      try{
        const access_token = localStorage.access_token
        const CarId = payload
        await axios.post('/favorites', {CarId}, {
          headers: {access_token}
        })
      }catch(err){

      }
    }
  },
  modules: {},
});
