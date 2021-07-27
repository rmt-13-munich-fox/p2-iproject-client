import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dahsboard.vue'
import Login from '../views/Login.vue'
import Message from '../views/Message.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const isAuthtenticated = localStorage.access_token

//   if (to.name !== 'Login' && !isAuthtenticated){
//     next({name : 'Login'})
//   } else if (to.name === 'Login' && isAuthtenticated){
//     next({name: 'Home'})
//   } else {
//     next()
//   }
// })


export default router
