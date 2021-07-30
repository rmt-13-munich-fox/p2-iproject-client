<template>
  <div class="card row" style="width: 18rem;">
    <img :src="book.image.src" class="card-img-top" alt="...">
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book']
}
</script>

<style>

</style>
