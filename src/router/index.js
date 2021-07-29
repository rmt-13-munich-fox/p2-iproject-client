import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Bookmark from '../views/Bookmark.vue'
import Analytic from '../views/Analytic.vue'
import Sentiment from '../views/Sentiment.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter:function(to,from,next){
      if(!localStorage.access_token) next()
      else next('/')
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter:function(to,from,next){
      if(!localStorage.access_token) next()
      else next('/')
    }
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: Bookmark,
    beforeEnter:function(to,from,next){
      if(!localStorage.access_token){
        Vue.$toast.error("You need to login to access the saved news",{position: "top-right"})
        next('/login')
      }
      else next()
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/analytic',
    name: 'Analytic',
    component: Analytic,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/sentiment-analysis',
    name: 'Sentiment',
    component: Sentiment,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
