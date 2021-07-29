<template>
  <div class="container">
    <div class="row mb-2 margin-custom">
      <h3 class="mb-4">All Article Posts</h3>
      <Posts v-for="article in articles" :key="article.id" :article="article"/>
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
  name: 'all-articles-page',
  data () {
    return {
      currentPage: 0
    }
  },
  computed: {
    ...mapState(['articles', 'totalPages'])
  },
  components: {
    Posts
  },
  methods: {
    ...mapActions(['fetchArticles']),
    async articleByPage (page) {
      this.currentPage = page
      // console.log(this.currentPage)
      await this.fetchArticles(this.currentPage)
    }
  },
  created () {
    this.fetchArticles(this.currentPage)
    // this.articleByPage()
  }
}
</script>

<style>

</style>
