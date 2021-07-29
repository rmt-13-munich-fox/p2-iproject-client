import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
import VueSpeech from 'vue-speech'

 
const socket = io('https://webchat-ver1.herokuapp.com');

Vue.config.productionTip = false
Vue.use(VueSocketIOExt, socket);
Vue.use(VueSpeech)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
