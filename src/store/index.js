import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
    coronaViruses: [],
  },
  mutations: {
    FETCH_SEARCH_ENGINE(state, payload) {
      state.searchResult = payload;
    },
    FETCH_CORONA_INDONESIA(state, payload) {
      state.coronaViruses = [];
      state.coronaViruses = payload;
    },
  },
  actions: {
    async fetchSearchEngine(context, payload) {
      try {
        const response = await axios({
          url: `/search?keyword=${payload}`,
          method: "GET",
        });
        context.commit("FETCH_SEARCH_ENGINE", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCoronaIndonesia(context) {
      try {
        const response = await axios({
          url: "/corona/indonesia",
          method: "GET",
        });
        context.commit("FETCH_CORONA_INDONESIA", response.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
