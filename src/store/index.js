import Vue from "vue";
import Vuex from "vuex";
import localhost from "../apis/localhost";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    messages: []
  },
  mutations: {
    PUSH_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    IS_LOGIN(state) {
      state.isLogin = true;
    },
    IS_LOGOUT(state) {
      state.isLogin = false;
    }
  },
  actions: {
    userLogin({ commit }, payload) {
      localhost({
        method: "POST",
        url: "/login",
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.token);
          localStorage.setItem("name", data.name);
          commit("IS_LOGIN");
          router.push({ name: "Dashboard" });
        })
        .catch(({ response }) => {
          const { message } = response.data;
          console.log(message);
        });
    },
    userRegister({ commit }, payload) {
      localhost({
        method: "POST",
        url: "/register",
        data: payload
      })
        .then(({ data }) => {
          router.push({ name: "Login" });
        })
        .catch(({ response }) => {
          const { message } = response.data;
          console.log(message);
        });
    },
    logout({ commit }) {
      localStorage.clear();
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("User signed out.");
      });
      commit("IS_LOGOUT");
      router.push({ name: "Login" });
    }
  },
  modules: {}
});
