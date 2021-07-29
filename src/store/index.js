import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../apis/server"
import Toast from "../apis/swal"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes:[],
    recipesSearch:[],
    accessToken:false
  },
  mutations: {
    FETCH_RECIPES(state,payload){
      state.recipes = payload
    },
    FETCH_SEARCH(state,payload){
      state.recipesSearch = payload
    },
    ISLOGIN(state,payload){
      state.accessToken=payload
    }
  },
  actions: {
    fetchRecipes(context){
      axios({
        method:"GET",
        url:"/recipes",
      })
      .then(({data})=>{
        console.log(data);
        context.commit("FETCH_RECIPES", data)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    doSearch(context,payload){
      axios({
        method:"GET",
        url:`/recipes/${payload}`
      })
      .then(({data})=>{
        context.commit("FETCH_SEARCH", data.meals)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    doLogin(context,payload){
      return new Promise((resolve,reject)=>{
        axios.post("/users/login",payload)
        .then(({data})=>{
          Toast.fire({
            icon:"success",
            title:" Login successfully"
          })
          localStorage.setItem("access_token",data.access_token)
          context.commit("ISLOGIN",true)
          resolve(data)
        })
        .catch(err=>{
          // console.log(err.response.data.message);
          Toast.fire({
            icon:"error",
            title:err.response.data.message
          })
          reject(err)
        })
      })
    },
    doRegister(context,payload){
      return new Promise((resolve,reject)=>{
        axios.post("/users/register",payload)
        .then(({data})=>{
          Toast.fire({
            icon:"success",
            title:"Sign up success"
          })
          resolve(data)
        })
        .catch(err=>{
          // console.log(err.response.data.message);
          Toast.fire({
            icon:"error",
            title:err.response.data.message
          })
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
