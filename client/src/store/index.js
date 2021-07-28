import Vue from 'vue'
import Vuex from 'vuex'
import instanceServer from '../apis/server'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    menus: [],
    orders: [],
    histories: [],
    convertedCurrency: 0
  },
  mutations: {
    LOGIN_STATUS(state, payload) {
      state.isLoggedIn = payload
    },
    FETCH_MENU(state, payload) {
      console.log(payload, 'FETCH_MENU');
      state.menus = payload
    },
    ADD_ORDER(state, payload) {
      state.orders.push(payload)
    },
    FILTER_ORDER(state, payload) {
      state.orders = payload
    },
    RESET_ORDER(state) {
      state.orders = []
    },
    HISTORY_ORDER(state, payload) {
      state.histories.push(payload)
    },
    CONVERT_CURRENCY(state, payload) {
      state.convertedCurrency = payload
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

    fetchMenu({commit}) {
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

    // addFood({commit}, payload) {
    //   // return new Promise(function(resolve, reject) {
    //     instanceServer({
    //       method: 'POST',
    //       url: `/neworder/${payload.id}`,
    //       headers: {
    //         access_token: localStorage.access_token
    //       },
    //       data: {
    //         quantityItem: payload.quantity,
    //         OrderId: 1
    //       }
    //     })
    //     .then(({data}) => {
    //       console.log(data, 'hasil add food');
    //       // commit('ADD_FOOD', data)
    //       // resolve(data)
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       // reject(err)
    //     })
    //   // })
    // },

    // fetchCustomerFood({commit}, payload) {
    //   instanceServer({
    //     method: 'GET',
    //     url: `/orders/1`, //HARDCODE
    //     headers: {
    //       access_token: localStorage.access_token
    //     } 
    //   })
    //   .then(({data}) => {
    //     commit('ADD_FOOD', data.Menus)
    //   })
    //   .catch(err => {
    //     console.log(err, 'error fetchCustomerFood');
    //   })
    // },

    // deleteFoodId({commit}, payload) {
    //   return new Promise(function(resolve, reject) {
    //     instanceServer({
    //       method: 'DELETE',
    //       url: `/neworder/${payload}`,
    //       headers: {
    //         access_token: localStorage.access_token
    //       }
    //     })
    //     .then(({data})=> {
    //       console.log('kepanggil fetch');
    //       resolve(data)
    //     })
    //     .catch(err => {
    //       console.log(err, 'kepanggil err di deletefoodid');
    //       reject(err)
    //     })
    //   })
    // },

    currencyChange({commit}, payload) {
      axios({
        method: "POST",
        url: `/neworder/currency`,
        data: {
          currency: payload.currency,
          totalPrice: payload.totalPrice
        }
      })
      .then(({data}) => {
        console.log(data, 'currencyChange');
      })
    },

    postCheckout({commit}, payload) {
      console.log('masuk post chekout');
      instanceServer({
        method: "POST",
        url: `/neworder/ordercustomer`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          orders: payload,
        }
      })
      .then(({data})=> {
        console.log(data, 'postCheckout');
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
