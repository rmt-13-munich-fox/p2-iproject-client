import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Travel from '../views/Travel.vue'
import Plan from '../views/Plan.vue'
import InfoCenter from '../views/InfoCenter.vue'
import Story from '../views/Story.vue'
import Detail from '../views/Detail.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/travels',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/plans/:id',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/infos',
    name: 'Info',
    component: InfoCenter
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Story
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
