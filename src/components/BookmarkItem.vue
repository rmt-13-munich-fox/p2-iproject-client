<template>
  <div class="col mt-5">
    <div class="card h-100 size-custom">
      <img :src="bookmark.Post.thumbnail" class="custom-img" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">{{bookmark.Post.title}}</h5>
        <p class="card-text text-center">Bookmarked on : {{bookmark.createdAt.substring(0,10)}}</p>
        <div class="d-flex justify-content-center mt-4">
          <button @click="goToDetail(bookmark.Post.id)" class="btn btn-primary size-btn">Visit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bookmark-item',
  props: ['bookmark'],
  methods: {
    goToDetail (id) {
      this.$router.push({ name: 'DetailArticle', params: { id: id } })
    }
  }
}
</script>

<style>
.custom-img{
  width:100%;
  height: 350px;
}
.size-btn{
  width:200px
}
</style>
