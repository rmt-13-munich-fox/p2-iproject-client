<template>
  <div class="container">
      <div class="meal-search my-3">
        <h2 class="title">Find Meal For Your Ingredients</h2>
        <form @submit.prevent="handleSearch">
        <div class="meal-search-box">
          <input v-model="search" type="text" class="search-content" placeholder="enter your ingredients" id="search-input">
          <button type="submit" class="search-btn btn btn-warning" id="search-btn">Search</button>
        </div>
        </form>
          <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/>
          </svg>
          </button>
      </div>
      <div class="row row-cols-4">
        <SearchCard class="col" v-for="recipeSearch in recipesSearch" :key="recipeSearch.id" :recipeSearch="recipeSearch"></SearchCard>
      </div>
  </div>
</template>

<script>
import SearchCard from "../components/SearchCard.vue"
export default {
    name:"Search",
    components: {
        SearchCard
    },
    data(){
    return{
      search:"",
    }
  },
  methods:{
      handleSearch(){
        const payload = this.search
        this.$store.dispatch("doSearch",payload)
        this.$router.push('/search').catch(()=>{})
      }
  },
  computed:{
    recipesSearch(){
      return this.$store.state.recipesSearch
    }
  }
}
</script>

<style>

</style>