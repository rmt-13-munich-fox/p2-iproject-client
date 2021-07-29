<template>
  <div class="container">
    <div class="row mb-2 margin-custom">
      <h3 class="mb-4">Fashion Posts</h3>
      <Posts v-for="article in fashionData" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import Posts from '@/components/Articles.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'fashion-page',
  components: {
    Posts
  },
  computed: {
    ...mapState(['fashionData'])
  },
  methods: {
    ...mapActions(['fetchArticlesFashion'])
  },
  created () {
    this.fetchArticlesFashion()
  }
}
</script>

<style>

</style>
