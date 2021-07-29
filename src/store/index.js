import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: {},
    currentPage: '',
    oneArticle: {},
    articles: [],
    makeUpData: [],
    fashionData: [],
    skincareData: [],
    bookmarks: [],
    totalPages: 0
  },
  mutations: {
    CHECK_LOGIN (state, condition) {
      state.isLogin = condition
    },
    CURRENT_USER (state, user) {
      state.currentUser = user
    },
    CHANGE_PAGE (state, pageName) {
      state.currentPage = pageName
    },
    ARTICLES_DATA (state, articles) {
      state.articles = articles
    },
    MAKEUP_DATA (state, makeupArticles) {
      state.makeUpData = makeupArticles
    },
    FASHION_DATA (state, fashionArticles) {
      state.fashionData = fashionArticles
    },
    SKINCARE_DATA (state, skincareArticles) {
      state.skincareData = skincareArticles
    },
    ONE_ARTICLE (state, article) {
      state.oneArticle = article
    },
    BOOKMARKS_DATA (state, bookmarks) {
      state.bookmarks = bookmarks
    },
    TOTAL_PAGE (state, pages) {
      state.totalPages = pages
    }
  },
  actions: {
    async handleLogin ({ commit, state }, user) {
      try {
        const loggedUser = await axios.post('/login', user)
        const { data } = loggedUser
        const currentUser = {
          email: data.email,
          role: data.role,
          id: data.id
        }
        // console.log(currentUser,'test');
        if (data) {
          localStorage.setItem('access_token', data.access_token)
          commit('CHECK_LOGIN', true)
          commit('CURRENT_USER', currentUser)
          console.log(state.currentUser);
          return true
        } else {
          return false
        }
      } catch ({ response }) {
        const errMessages = response.data.message
        console.log(errMessages)
        return false
      }
    },
    async handleRegister ({ commit }, user) {
      try {
        const registeredUser = await axios.post('/client/register', user)
        const { data } = registeredUser
        if (data) {
          localStorage.setItem('access_token', data.access_token)
          return true
        } else {
          return false
        }
      } catch ({ response }) {
        const errMessages = response.data.message
        console.log(errMessages)
        return false
      }
    },
    check_login ({
      commit
    }, condition) {
      commit('CHECK_LOGIN', condition)
    },
    change_page ({ commit }, pageName) {
      commit('CHANGE_PAGE', pageName)
    },
    async fetchArticles ({ commit }, page) {
      try {
        const allArticles = await axios.get(`/posts?page=${page}`)
        const { data } = allArticles
        if (data) {
          commit('ARTICLES_DATA', data.articles)
          commit('TOTAL_PAGE', data.totalPages)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchArticlesMakeup ({ commit, state }) {
      try {
        const makeupArticles = await axios.get('/posts?tagId=1')
        const { data } = makeupArticles
        if (data) {
          commit('MAKEUP_DATA', data.articles)
          console.log(state.makeUpData)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchArticlesSkincare ({ commit, state }) {
      try {
        const skincareArticles = await axios.get('/posts?tagId=2')
        const { data } = skincareArticles
        if (data) {
          commit('SKINCARE_DATA', data.articles)
          console.log(state.skincareData)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchArticlesFashion ({ commit, state }) {
      try {
        const fashionArticles = await axios.get('/posts?tagId=3')
        const { data } = fashionArticles
        if (data) {
          commit('FASHION_DATA', data.articles)
          commit('TOTAL_PAGE', data.totalPages)
          console.log(state.fashionData)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchOneArticle ({ commit, state }, id) {
      try {
        const article = await axios.get(`/posts/${id}`)
        const { data } = article
        if (data) {
          commit('ONE_ARTICLE', data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBookmarks ({ commit, state }) {
      try {
        const accessToken = localStorage.getItem('access_token')
        const bookmarks = await axios.get('/bookmarks', {
          // eslint-disable-next-line quote-props
          headers: { access_token: accessToken }
        })
        const { data } = bookmarks
        if (data) {
          commit('BOOKMARKS_DATA', data)
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
