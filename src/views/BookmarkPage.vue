<template>
  <div class="container">
    <h3 class="mt-5 mb-2">Bookmarks list</h3>
    <div class="row row-cols-3 g-4 mb-5">
      <Bookmarks v-for="bookmark in bookmarks" :key="bookmark.id" :bookmark="bookmark"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Bookmarks from '@/components/BookmarkItem.vue'
export default {
  name: 'bookmark-page',
  components: {
    Bookmarks
  },
  computed: {
    ...mapState(['bookmarks'])
  },
  methods: {
    ...mapActions(['fetchBookmarks'])
  },
  created () {
    this.fetchBookmarks()
  }
}
</script>

<style>

</style>
