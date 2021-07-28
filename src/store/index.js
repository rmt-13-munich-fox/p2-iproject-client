import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const baseUrl = `http://localhost:3000`

export default new Vuex.Store({
  state: {
    stories: [],
    detailStory: {},
    travels: [],
    travelDetail: {},
    plans: [],
    countries: [],
    currencies :[],
    result: 0
    

  },
  mutations: {
    setStories(state, payload){
      state.stories = payload
    },

    setDetailStory(state, payload){
      state.detailStory = payload
    },

    setTravels(state, payload) {
      state.travels = payload
    },

    setTravelDetail(state, payload) {
      state.travelDetail = payload
    },

    setPlans(state, payload){
      state.plans = payload
    },

    setCountries(state, payload){
      state.countries = payload
    },

    setCurrencies(state, payload){
      state.currencies = payload
    },
    
    setResult(state, payload){
      state.result = payload
    },


  },
  actions: {
    fetchStories(context) {
      axios({
        method: "GET",
        url: `${baseUrl}/stories`
      })
      .then(response => {
        // console.log(response.data)
        context.commit('setStories', response.data)
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    
    fetchStoryById(context, id){
      console.log(id)
      axios({
        method: "GET",
        url: `${baseUrl}/stories/${id}`
      })
      .then(response => {
        context.commit('setDetailStory', response.data)
        // console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    fetchTravels(context){
      axios({
        method: "GET",
        url: `${baseUrl}/travels`
      })
      .then(response => {
        console.log(response.data)
        context.commit('setTravels', response.data)
      })
      .catch(err => {
        console.log(err.response)
      })

    },

    fetchTravelById(context, id){
      axios({
        method: "GET",
        url: `${baseUrl}/travels/${id}`
      })
      .then(response => {
        // console.log(response.data)
        context.commit('setTravelDetail', response.data)
      })
      .catch(err => {
        console.log(err.response)
      })

    },

    fetchPlan(context, id){
      axios({
        method: "GET",
        url: `${baseUrl}/plans/${id}`
      })
      .then(response => {
        context.commit('setPlans', response.data)
        // console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    fetchCountries(context){
      axios({
        method: "GET",
        url: `${baseUrl}/countries`
      })
      .then(response => {
        console.log(response.data)
        context.commit('setCountries', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    fetchAllCurrencies(context){
      axios({
        method: "GET",
        url: `${baseUrl}/currency/list`
      })
      .then(response => {
        // console.log(response.data)
        context.commit('setCurrencies', response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    calculateCurrency(context, {amount, currency}){
      console.log(+amount)
      axios({
        method: "POST",
        url: `${baseUrl}/currency`,
        data: {
          price: +amount,
          convert: currency
        }
      })
      .then(response => {
        // console.log(response.data)
        context.commit('setResult', response.data.total)
      })
      .catch(err => {
        console.log(err)
      })
    }



  },
  modules: {
  }
})
