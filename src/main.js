import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
Vue.prototype.$baseEndpoint = "https://ayahmarmut.herokuapp.com"
const socket = io('https://ayahmarmut.herokuapp.com');

Vue.use(VueSocketIOExt, socket);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
