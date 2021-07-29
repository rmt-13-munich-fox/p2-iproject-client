import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    incomingMessages: [],
    directMessages: [],
    isLoggedIn: false,
    cars: [],
    detail: [],
    favorites: [],
    user: [],
    log: [],
    youtube: []
  },
  mutations: {
    PUSH_MESSAGE(state, payload) {
      state.incomingMessages = payload;
    },
    DIRECT_MESSAGES(state, payload) {
      state.directMessages = payload;
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
    },
    FETCH_USER(state, payload){
      state.user = payload
    },
    FETCH_LOG(state, payload){
      state.log = payload
    },
    FETCH_YOUTUBE(state, payload){
      state.youtube = payload
    }
  },
  actions: {
    async register({ dispatch }, payload) {
      try {
        const user = payload;
        // console.log(user);
        let newData = new FormData()
        newData.append('username', user.username)
        newData.append('email', user.email)
        newData.append('password', user.password)
        newData.append('address', user.address)
        newData.append('image', user.image)
        newData.append('quotes', user.quotes)
        await axios.post("/register", newData);
        dispatch('alertMessageSuccess', {
          message: 'Success to registry',
          status: 'Thank you'
        })
        return true;
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async login({ commit, dispatch }, payload) {
      try{
        const data = payload
        const response = await axios.post('/login', data)
        const {access_token, id, username} = response.data
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('id', id)
        localStorage.setItem('username', username)
        commit('STATE_LOGGED', true)
        dispatch('alertMessageSuccess', {
          message: 'Success to login',
          status: 'Thank you'
        })
        return true
      } catch(err){
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async fetchDataCars({ commit, dispatch }) {
      try {
        const access_token = localStorage.access_token
        const response = await axios.get("/cars", {
          headers: {access_token}
        })
        const car = response.data
        // console.log(car);
        commit('STATE_CAR', car)
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async detailCar({ commit, dispatch}, payload){
      try {
        const id = payload
        const access_token = localStorage.access_token
        const response = await axios.get(`/cars/${id}`, {
          headers: {access_token}
        })
        const {data} = response
        // console.log(data);
        commit('DETAIL_CAR', data)
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async fetchDataFavorites({ commit, dispatch}){
      try {
        const access_token = localStorage.access_token
        const response = await axios.get('/favorites', {
          headers: {access_token}
        })
        const {data} = response
        console.log(data);
        commit('FETCH_FAVORITES', data)
      } catch (err) {
        console.log(err);
      }
    },
    async postFavorites({ dispatch }, payload){
      try{
        // console.log(payload);
        const access_token = localStorage.access_token
        const CarId = payload
        await axios.post('/favorites', {CarId}, {
          headers: {access_token}
        })
        dispatch('alertMessageSuccess', {
          message: 'Success to add favorites',
          status: 'Thank you'
        })
      }catch(err){
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async deleteFavorites({dispatch}, payload){
      try {
        const access_token = localStorage.access_token
        const id = payload
        await axios.delete(`/favorites/${id}`, {
          headers: {access_token}
        })
        dispatch('alertMessageSuccess', {
          message: 'Success to remove',
          status: 'Thank you'
        })
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async fetchUser({ commit, dispatch}){
      try {
        const access_token = localStorage.access_token
        const response = await axios.get('/user', {
          headers:{access_token}
        })
        const {data} = response
        // console.log(data);
        commit('FETCH_USER', [data])
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async updateUser({ dispatch }, payload){
      try {
        const user = payload[0]
        const id = Number(user.id)
        const access_token = localStorage.access_token
        console.log(payload, id, 'ini payload');
        let newData = new FormData()
        newData.append('username', user.username)
        newData.append('email', user.email)
        newData.append('address', user.address)
        newData.append('image', payload.image)
        newData.append('quotes', user.quotes)
        const response = await axios.put(`/user/${id}`, newData, {
          headers: {access_token}
        })
        dispatch('alertMessageSuccess', {
          message: 'Success to edit',
          status: 'Thank you'
        })
        return true
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async fetchMessage({commit, dispatch}){
      try{
        const access_token = localStorage.access_token
        const response = await axios.get('/socket/message', {
          headers: {access_token}
        })
        let {data} = response
        commit('PUSH_MESSAGE', data)
      }catch(err){
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    async fetchLog({ commit }){
      try {
        const access_token = localStorage.access_token
        const response = await axios.get('/socket/log', {
          headers: {access_token}
        })
        let {data} = response
        // console.log(data);
        let log = []
        data.map(el => {
            const obj = {
              status: el.status,
              username: el.User.username,
              quotes: el.User.quotes,
              image: el.User.imgUrl
            }
            log.push(obj)
        })
        // console.log(log);
        commit('FETCH_LOG', log)
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })      
      }
    },
    async videoYoutube({ commit }, payload){
      try {
        const apiKey = 'AIzaSyCF9Ie6kpL5UJ0vLT9HKeEVlh-m9V3asxA'
        const max = payload.max
        const search = payload.search
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${max}&q=${search}`)
        let {data} = response
        const video = data.items.map(el => {
          const url = `https://www.youtube.com/embed/${el.id.videoId}`
          const obj = {
            url: url
          }
          return obj
        })
        // console.log(video);
        commit('FETCH_YOUTUBE', video)
      } catch (err) {
        dispatch('alertMessageError', {
          message: err.response.data.message,
          status: err.response.status 
        })
      }
    },
    alertMessageError(_, payload){
      const message = payload.message
      const status = payload.status
      Swal.fire({
      icon: `error`,
      title: `Oops... error status ${status}`,
      text: message,
      })
    },
    alertMessageSuccess(_, payload){
      const message = payload.message
      const status = payload.status
      Swal.fire({
      position: 'top-end',
      icon: `success`,
      title: status,
      text: message,
      showConfirmButton: false,
      timer: 1500
      })
    }
  },
  modules: {},
});
