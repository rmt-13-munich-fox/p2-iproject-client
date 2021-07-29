<template>
      <div class="my-2 card ">
        <img
          :src="recipe.image"
          alt="logo"
          class="mx-auto d-block"
          style="width: 200px"
        />
        <h3>{{ recipe.name }}</h3>
        <span>{{ recipe.description }}</span>
        <div class="border-top ">
          <div class="d-flex flex-column align-items-start my-3">
            <h4>Ingredients</h4>
            <span v-for="(ingredients, index) in ingredients" :key="index">{{index+1}}. {{ingredients}}</span>
          </div>
        </div>
        <div class="border-top">
          <div v-if="directions" class="d-flex flex-column align-items-start my-3">
            <h4>Directions</h4>
            <span v-for="(directions, index) in directions" :key="index">{{index+1}}. {{directions}}</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"RecipeCard",
    props : ["recipe"],
    computed: {
    ingredients() {
      const arr = this.recipe.ingredients.split(",");
      return arr;
    },
    directions(){
      if (this.recipe.directions) {
        const arr = this.recipe.directions.split("\r\n");
        return arr;
      } else{
        return this.recipe.directions
      }
    }
  }
}
</script>

<style>

</style>