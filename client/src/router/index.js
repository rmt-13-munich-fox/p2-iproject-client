import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dahsboard.vue'
import Login from '../views/Login.vue'
import Message from '../views/Message.vue'
import Content from '../views/ContentByName.vue'
import ContentID from '../views/ContentById.vue'
import ContentDATE from '../views/ContentByDate.vue'
import Detail from '../views/Details.vue'

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
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/contentID',
    name: 'ContentID',
    component: ContentID
  },
  {
    path: '/contentDATE',
    name: 'ContentDATE',
    component: ContentDATE
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthtenticated = localStorage.access_token

  if (to.name !== 'Login' && !isAuthtenticated) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isAuthtenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
