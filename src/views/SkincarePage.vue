<template>
  <div class="container">
    <div class="row mb-2 margin-custom">
      <h3 class="mb-4">Skincare Posts</h3>
      <Posts v-for="article in skincareData" :key="article.id" :article="article"/>
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
  name: 'skincare-page',
  components: {
    Posts
  },
  computed: {
    ...mapState(['skincareData'])
  },
  methods: {
    ...mapActions(['fetchArticlesSkincare'])
  },
  created () {
    this.fetchArticlesSkincare()
  }
}
</script>

<style>

</style>
