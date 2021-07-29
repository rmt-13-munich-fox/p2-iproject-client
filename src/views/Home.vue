<template>
  <div>
    <Carousel/>
    <div class="container">
      <div class="row mb-2 margin-custom">
        <h3 class="mb-4">Newest Posts</h3>
        <Posts v-for="article in articles" :key="article.id" :article="article"/>
      </div>

      <div class="d-flex justify-content-center mb-5">
        <button @click="readMore" class="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Posts from '@/components/Articles.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Carousel,
    Posts
  },
  computed: {
    ...mapState(['articles'])
  },
  methods: {
    ...mapActions(['fetchArticles']),
    readMore () {
      this.$router.push({ name: 'AllArticles' })
    }
  },
  created () {
    this.fetchArticles()
  }
}
</script>

<style>
  .margin-custom{ margin:100px; }
</style>
