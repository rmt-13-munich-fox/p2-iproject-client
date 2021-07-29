<template>
  <div class="container">
    <div class="row mb-2 margin-custom">
      <h3 class="mb-4">All Article Posts</h3>
      <Posts v-for="article in articles" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import Posts from '@/components/Articles.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'all-articles-page',
  computed: {
    ...mapState(['articles'])
  },
  components: {
    Posts
  },
  methods: {
    ...mapActions(['fetchArticles'])
  },
  created () {
    this.fetchArticles()
  }
}
</script>

<style>

</style>
