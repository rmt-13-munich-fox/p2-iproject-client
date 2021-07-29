<template>
  <div class="container">
    <div class="row mb-2 margin-custom">
      <h3 class="mb-4">Skincare Posts</h3>
      <Posts v-for="article in skincareData" :key="article.id" :article="article"/>
    </div>
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
