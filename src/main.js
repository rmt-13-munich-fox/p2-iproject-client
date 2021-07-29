import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';

Vue.config.productionTip = false
const socket = io('https://car-community.herokuapp.com');
Vue.use(VueSocketIOExt, socket);
Vue.prototype.$baseEndpoint = "https://car-community.herokuapp.com";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
