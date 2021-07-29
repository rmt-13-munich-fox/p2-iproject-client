import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyFavorite from '../views/MyFavorite.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Search from '../views/Search.vue'
import Toast from '../apis/swal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/favorite',
    name: 'MyFavorite',
    component: MyFavorite,
    beforeEnter:(to,from,next)=>{
      if (localStorage.access_token) {
        next()
      } else{
        Toast.fire({
          icon:"error",
          title:"you must login first"
        })
        next('/login')
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
