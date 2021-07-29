<template>
  <div class="col-12">
    <div class="card flex-md-row mb-5 box-shadow h-md-250">
      <img class="card-img-left img-size-custom flex-auto d-none d-md-block" :src="article.thumbnail" alt="Card image cap">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">{{article.Tag.name}}</strong>
        <h3 class="mb-0">{{article.title}}</h3>
        <div class="mb-1 text-muted">{{article.updatedAt.substring(0,10)}}</div>
        <div v-html="article.description.substring(0,100)"></div>
        <a href="#" @click="goToDetail(article.id)">Continue reading</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-post',
  props: ['article'],
  methods: {
    goToDetail (id) {
      this.$router.push({ name: 'DetailArticle', params: { id: id } })
    }
  }
}
</script>

<style>
.img-size-custom{
  width: 300px;
  height: 300px;
}

</style>
