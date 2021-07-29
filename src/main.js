import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io";
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/font-awesome/css/font-awesome.css";

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:10000"
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
