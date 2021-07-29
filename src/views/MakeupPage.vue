<template>
  <div class="container">
    <div class="row mb-2 margin-custom">
      <h3 class="mb-4">Make Up Posts</h3>
      <Posts v-for="article in makeUpData" :key="article.id" :article="article"/>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-if="currentPage > 0" class="page-item"><a @click.prevent="articleByPage(currentPage - 1)" class="page-link" href="#">Previous</a></li>
        <li v-if="currentPage < totalPages - 1" class="page-item"><a @click.prevent="articleByPage(currentPage + 1)" class="page-link" href="#">Next</a></li>
      </ul>
    </nav>

  </div>
</template>

<script>
import Posts from '@/components/Articles.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'articles-page',
  components: {
    Posts
  },
  computed: {
    ...mapState(['makeUpData'])
  },
  methods: {
    ...mapActions(['fetchArticlesMakeup'])
  },
  created () {
    this.fetchArticlesMakeup()
  }
}
</script>

<style>

</style>
