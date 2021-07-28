import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
  },
  mutations: {
    FETCH_SEARCH_ENGINE(state, payload) {
      state.searchResult = payload;
    },
  },
  actions: {
    async fetchSearchEngine(context, payload) {
      try {
        const response = await axios({
          url: `/search?keyword=${payload}`,
          method: "GET",
        });
        console.log(response.data);
        context.commit("FETCH_SEARCH_ENGINE", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
