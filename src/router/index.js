import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/LoginPage.vue'
import Register from '@/views/RegisterPage.vue'
import Makeup from '@/views/MakeupPage.vue'
import Skincare from '@/views/SkincarePage.vue'
import Fashion from '@/views/FashionPage.vue'
import AllArticles from '@/views/AllArticlesPage.vue'
import DetailArticle from '@/views/DetailPage.vue'
import Bookmarks from '@/views/BookmarkPage.vue'
import PostArticle from '@/views/CreateArticlePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/makeup',
    name: 'Makeup',
    component: Makeup
  },
  {
    path: '/fashion',
    name: 'Fashion',
    component: Fashion
  },
  {
    path: '/skincare',
    name: 'Skincare',
    component: Skincare
  },
  {
    path: '/all',
    name: 'AllArticles',
    component: AllArticles
  },
  {
    path: '/article/:id',
    name: 'DetailArticle',
    component: DetailArticle
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  },
  {
    path: '/create-post',
    name: 'PostArticle',
    component: PostArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Bookmarks' && !localStorage.getItem('access_token')) next({ name: 'Login' })
  else next()
})

export default router
