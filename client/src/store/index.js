import Vue from 'vue'
import Vuex from 'vuex'
import instanceServer from '../apis/server'
import Swal from 'sweetalert2'

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
      state.convertedCurrency = 0
    },
    HISTORY_ORDER(state, payload) {
      state.histories.push(payload)
    },
    CONVERT_CURRENCY(state, payload) {
      state.convertedCurrency = payload
    }
  },
  actions: {
    login({ commit }, payload) {
      return new Promise(function (resolve, reject) {
        instanceServer({
          method: 'POST',
          url: '/login',
          data: {
            email: payload.email,
            password: payload.password,
          }
        })
          .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token)
            commit("LOGIN_STATUS", true)
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    fetchMenu({ commit }) {
      instanceServer({
        method: "GET",
        url: '/menus'
      })
        .then(({ data }) => {
          commit('FETCH_MENU', data)
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Error fetch menu",
            showConfirmButton: false,
            timer: 1500,
          });
        })
    },

    currencyChange({ commit }, payload) {
      instanceServer({
        method: "POST",
        url: `/neworder/currency`,
        data: {
          currency: payload.convertCur,
          totalPrice: payload.total
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('CONVERT_CURRENCY', data)
        })
        .catch(err => {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Error convert currency",
            showConfirmButton: false,
            timer: 1500,
          });
        })
    },

    postCheckout({ commit }, payload) {
      instanceServer({
        method: "POST",
        url: `/neworder/ordercustomer`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          orders: payload.custOrder,
          customerName: payload.custName
        }
      })
        .then(() => {
          commit("RESET_ORDER")
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
