import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'
import Car from '../views/Car.vue'
import Detail from '../views/DetailCar.vue'
import Profile from '../views/User.vue'
import Edit from '../views/EditProfile.vue'
import Regis from '../views/Register.vue'
import Favorites from '../views/Favorites.vue'
import Search from '../views/YoutubeSearch.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Chat
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Regis
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/editProfile',
    name: 'Edit Profile',
    component: Edit
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
