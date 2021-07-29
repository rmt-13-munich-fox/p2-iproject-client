import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import newsAPI from "../apis/newsApi";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: "",
    search: false,
    headlines: [],
    bookmarks: [],
    searchedNews: [],
    keywordNews: "",
    currentSentiment: "",
    currentPage: 0,
    totalPages: 0,
    totalNews: 0,
    statistic: {},
    resultAnalyze: {
      tokens: "Great, awesome, cool",
      comperative: "0.3333",
      score: "0.444",
      positive_words: "Great",
      negative_words: "",
      sentiment: "",
      stop_words: "",
    },
    email: "",
    image: "",
  },
  mutations: {
    SET_KEYWORD_NEWS(state, payload) {
      state.keywordNews = payload;
    },
    SET_SEARCHED_NEWS(state, payload) {
      state.searchedNews = payload;
    },
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
      localStorage.setItem("access_token", state.access_token);
    },
    SET_EMAIL(state, payload) {
      state.email = payload;
      localStorage.setItem("email", payload);
    },
    SET_HEADLINES(state, payload) {
      state.headlines = payload;
    },
    SET_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
    SET_TOTAL_PAGE(state, payload) {
      state.totalPages = payload;
    },
    SET_BOOKMARKS(state, payload) {
      state.bookmarks = payload;
    },
    SET_STATISTIC(state, payload) {
      state.statistic = payload;
    },
    SET_RESULT_ANALYZE(state, payload) {
      state.resultAnalyze = payload;
    },
    SET_CURRENT_SENTIMENT(state, payload) {
      state.currentSentiment = payload;
    },
    SET_IMAGE(state, payload) {
      state.image = payload;
    },
  },
  actions: {
    handleLogin(context, payload) {
      newsAPI({
        url: "/login",
        method: "post",
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then(({ data }) => {
          context.commit("SET_ACCESS_TOKEN", data.access_token);
          context.commit("SET_EMAIL", payload.email);
          Vue.$toast.success("Logged in.", {
            position: "top-right",
          });
          router.push("/").catch(() => {});
        })
        .catch((err) => {
          console.log(err.response.data);
          Vue.$toast.error("Invalid email / password.", {
            position: "top-right",
          });
        });
    },
    handleRegister(context, payload) {
      newsAPI({
        method: "POST",
        url: "/register",
        data: payload,
      })
        .then(() => {
          router.push("/login").catch(() => {});
          Vue.$toast.success("Register success!", { position: "top-right" });
        })
        .catch((err) => {
          let error = err.response.data.message;
          let msg = "";
          if (error.length > 0) msg = error.join("<br>");
          Vue.$toast.error(`Failed to register <br> ${msg}`, {
            position: "top-right",
          });
        });
    },
    fetchHeadlines(context, payload) {
      let sentiment = payload;
      if (sentiment === "all") sentiment = "";
      newsAPI({
        url: `/news/latest-news/?sentiment=${payload}&page=${context.state.currentPage}`,
        method: "GET",
        headers: {
          access_token: context.state.access_token,
        },
      })
        .then(({ data }) => {
          context.commit("SET_CURRENT_SENTIMENT", sentiment);
          context.commit("SET_HEADLINES", data);
          context.commit("SET_CURRENT_PAGE", data.currentPage);
          context.commit("SET_TOTAL_PAGE", data.totalPages);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchBookmarks(context, payload) {
      let sentiment = payload;
      if (sentiment === "all") sentiment = "";
      if (sentiment === undefined) sentiment = "";
      newsAPI({
        method: "GET",
        url: `/news/bookmark/?sentiment=${sentiment}&page=${context.state.currentPage}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          context.commit("SET_CURRENT_SENTIMENT", sentiment);
          context.commit("SET_BOOKMARKS", data);
          context.commit("SET_CURRENT_PAGE", data.currentPage);
          context.commit("SET_TOTAL_PAGE", data.totalPages);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchByKeyword(context, payload) {
      newsAPI({
        method: "post",
        url: "/news/keywords/",
        data: {
          keywords: payload,
        },
      })
        .then(({ data }) => {
          console.log(data);
          context.commit("SET_SEARCHED_NEWS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    analyzeInput(context, payload) {
      const description = payload;
      newsAPI({
        method: "POST",
        url: "/news/sentiment-analysis",
        data: description,
      })
        .then(({ data }) => {
          context.commit("SET_RESULT_ANALYZE", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleResetPassword(context, payload) {
      newsAPI({
        method: "post",
        url: `/reset-password/?reset_token=${payload.reset_token}`,
        data: {
          password: payload.password,
        },
      })
        .then(() => {
          Vue.$toast.success("Password has been changed.", {
            position: "top-right",
          });
          router.push("/").catch(() => {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    generateResetPasswordLink(context, payload) {
      const email = payload;
      newsAPI({
        url: "/user/reset-password",
        method: "POST",
        data: {
          email,
        },
      })
        .then(() => {
          Vue.$toast.success(
            "We have sent you an email to reset your password",
            { position: "top-right" }
          );
        })
        .catch((err) => {
          console.log(err);
          Vue.$toast.error(
            "Sorry we cant find your email, but you can register now :P",
            { position: "top-right" }
          );
        });
    },
    loginGoogle(context, payload) {
      newsAPI({
        method: "POST",
        url: "/loginGoogle",
        data: {
          id_token: payload,
        },
      })
        .then((res) => {
          let { access_token } = res.data;
          localStorage.setItem("access_token", access_token);
          context.commit("SET_ACCESS_TOKEN", access_token);
          Vue.$toast.success("Success login", { position: "top-right" });
          router.push("/");
        })
        .catch(() => {
          Vue.$toast.error("Failed to login", { position: "top-right" });
        });
    },
    addBookmark(context, payload) {
      newsAPI({
        method: "POST",
        url: `/news/bookmark/${payload}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(() => {
          Vue.$toast.success("added to your saved list!", {
            position: "top-right",
          });
        })
        .catch(() => {
          Vue.$toast.error("You already added this one!", {
            position: "top-right",
          });
        });
    },
    deleteBookmark(context, payload) {
      newsAPI({
        method: "DELETE",
        url: `/news/bookmark/${payload}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(() => {
          Vue.$toast.success("Deleted from your saved list!", {
            position: "top-right",
          });
          context.dispatch("fetchBookmarks");
        })
        .catch(() => {
          Vue.$toast.error("Fail to delete the news!", {
            position: "top-right",
          });
        });
    },
    async updateNewsStatistic(context) {
      let totalNews = 0;
      let positiveNews = 0;
      let negativeNews = 0;
      let neutralNews = 0;
      let news = [];
      try {
        let response = await newsAPI({
          method: "get",
          url: "news/latest-news/all",
        });
        news = response.data;
        totalNews = news.length;
        news.forEach((el) => {
          if (el.Sentiment.sentiment === "positive") positiveNews++;
          if (el.Sentiment.sentiment === "negative") negativeNews++;
          if (el.Sentiment.sentiment === "neutral") neutralNews++;
        });
        let payload = {
          positiveNews,
          negativeNews,
          neutralNews,
          totalNews,
        };
        context.commit("SET_STATISTIC", payload);
        let config = {
          type: "doughnut", // Show a pie chart
          data: {
            labels: ["Positive", "Negative", "Neutral"], // Set X-axis labels
            datasets: [
              {
                label: "Overview",
                data: [positiveNews, negativeNews, neutralNews], // Add data to the chart
                backgroundColor: ["green", "red", "white"],
              },
            ],
            options: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 14,
                    color: "#000",
                  },
                  fontColor: "#000",
                },
              },
              title: {
                display: true,
                fontColor: "blue",
                text: "Custom Chart Title",
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      fontColor: "red",
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "green",
                    },
                  },
                ],
              },
            },
          },
        };
        context.dispatch("getPieChart", config);
      } catch (err) {
        console.log(err);
      }
    },
    getPieChart(context, payload) {
      axios
        .post(`https://quickchart.io/chart/create`, {
          backgroundColor: "transparent",
          width: 450,
          height: 300,
          format: "png",
          chart: payload,
        })
        .then((resp) => {
          // console.log(resp.data)
          console.log(typeof resp.data);
          context.commit("SET_IMAGE", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {},
  modules: {},
});
