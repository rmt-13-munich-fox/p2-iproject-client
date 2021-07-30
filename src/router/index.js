import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Chat from '../views/Chat.vue'
import Gimage from '../views/Gimage.vue'
import AddMarmut from '../views/AddMarmut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addmarmut',
    name: 'AddMarmut',
    component: AddMarmut
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/gimage',
    name: 'Gimage',
    component: Gimage
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === "AddMarmut" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    swal("Please log in first!")
  }
  else if (to.name === "Chat" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    swal("Please log in first!")
  }
  else if (to.name === "Dashboard" && !localStorage.getItem("_grecaptcha")) {
    next({ name: "Home" });
    swal("Please log in first!")
  }
  else if (to.name === "Gimage" && !localStorage.getItem("access_token")) {
    next({ name: "Home" });
    swal("Please log in first!")
  }
  else{
    next()
  }
});
export default router
