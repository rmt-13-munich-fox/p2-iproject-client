import Vue from 'vue'
import Vuex from 'vuex'
import instanceServer from '../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    menus: [],
    dataAddFood: []
  },
  mutations: {
    LOGIN_STATUS(state,payload) {
      state.isLoggedIn = payload
    },
    FETCH_MENU(state,payload) {
      state.menus = payload
    },
    ADD_FOOD(state,payload) {
      state.dataAddFood = payload
    }
  },
  actions: {
    login({commit}, payload) {
      return new Promise(function(resolve, reject) {
        instanceServer({
          method: 'POST',
          url: '/login',
          data: {
            email: payload.email,
            password: payload.password,
          }
        })
        .then(({data}) => {
          console.log(data, 'hasil login');
          localStorage.setItem('access_token', data.access_token)
          commit("LOGIN_STATUS", true)
          resolve(data)
        })
        .catch(err => {
          console.log(err, "err login");
          reject(err)
        })
      })
    },
    fetchMenu({commit}, payload) {
      instanceServer({
        method: "GET",
        url: '/menus'
      })
      .then(({data}) => {
        console.log(data, 'fetch menu');
        commit('FETCH_MENU', data)
      })
      .catch(err => {
        console.log(err, "error fetching menu");
      })
    },
    addFood({commit}, payload) {
      instanceServer({
        method: 'POST',
        url: `/neworder/${payload}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantityItem: 1,
          OrderId: 1
        }
      })
      .then(({data}) => {
        console.log(data, 'hasil add food');
        // commit('ADD_FOOD', data)
      })
      .then(err => {
        console.log(err);
      })
    },

    fetchCustomerFood({commit}, payload) {
      instanceServer({
        method: 'GET',
        url: `/orders/1`, //HARDCODE
        headers: {
          access_token: localStorage.access_token
        } 
      })
      .then(({data}) => {
        commit('ADD_FOOD', data.Menus)
      })
      .then(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
