<template>
      <div class="my-2 card ">
        <img
          :src="recipeSearch.strMealThumb"
          alt="logo"
          class="mx-auto d-block"
          style="width: 200px"
        />
        <h3>{{ recipeSearch.strMeal }}</h3>
        <!-- <pre>{{JSON.stringify(recipeSearch, null,2)}}</pre> -->
    </div>
</template>

<script>
export default {
    name:"SearchCard",
    props : ["recipeSearch"]
}
</script>

<style>

</style>