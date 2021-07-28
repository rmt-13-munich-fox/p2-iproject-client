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
    async register({ commit }, payload) {
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
        commit('STATE_LOGGED', true)
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
        console.log(data);
        commit('FETCH_FAVORITES', data)
      } catch (err) {
        console.log(err);
      }
    },
    async postFavorites({ commit }, payload){
      try{
        // console.log(payload);
        const access_token = localStorage.access_token
        const CarId = payload
        await axios.post('/favorites', {CarId}, {
          headers: {access_token}
        })
        console.log('ini post favorites', payload);
      }catch(err){
        console.log(err);
      }
    },
    async deleteFavorites({commit}, payload){
      try {
        const access_token = localStorage.access_token
        const id = payload
        await axios.delete(`/favorites/${id}`, {
          headers: {access_token}
        })
      } catch (err) {
        console.log(err);
      }
    },
    async fetchUser({ commit }){
      try {
        const access_token = localStorage.access_token
        const response = await axios.get('/user', {
          headers:{access_token}
        })
        const {data} = response
        // console.log(data);
        commit('FETCH_USER', [data])
      } catch (err) {
        console.log(err);
      }
    },
    async updateUser({ commit }, payload){
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
        return true
      } catch (err) {
        console.log(err);
      }
    },
    async fetchMessage({commit}){
      try{
        const access_token = localStorage.access_token
        const response = await axios.get('/socket/message', {
          headers: {access_token}
        })
        let {data} = response
        // console.log(data);
        // console.log(user, 'ini user');
        // console.log(client, 'ini client');
        commit('PUSH_MESSAGE', data)
      }catch(err){
        console.log(err);
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
        console.log(err);        
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
        console.log(video);
        commit('FETCH_YOUTUBE', video)
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {},
});
