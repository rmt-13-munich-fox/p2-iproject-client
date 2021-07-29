<template>
  <div class="home">
    <div class="container">
      <div class="meal-wrapper">
        <div class="row row-cols-3">
        <Recipe-card class="col" v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue"
export default {
  name: 'Home',
  components: {
    RecipeCard
  },
  computed:{
    recipes(){
      return this.$store.state.recipes
    }
  },
  created(){
        this.$store.dispatch('fetchRecipes')
  }
}
</script>
