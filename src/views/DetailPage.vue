<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="mt-5">
          <h1 class="text-center">{{oneArticle.title}}</h1>
          <div class="d-flex flex-row mb-3">
            <div class="p-2 bd-highlight" v-if="oneArticle.User">
               <img :src="oneArticle.User.avatarImg" class="image-custom" alt="img">
            </div>
            <div class="d-flex flex-column bd-highlight mb-3">
              <div class="p-2 bd-highlight fw-bold" v-if="oneArticle.User"> {{oneArticle.User.username}}</div>
              <div class="p-2 bd-highlight" v-if="oneArticle.updatedAt">{{oneArticle.updatedAt.substring(0,10)}}, {{oneArticle.updatedAt.substring(11,16)}} WIB</div>
            </div>
          </div>

          {{oneArticle.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'detail-page',
  computed: {
    ...mapState(['oneArticle'])
  },
  methods: {
    ...mapActions(['fetchOneArticle']),
    async fetchArticle () {
      const id = this.$route.params.id
      await this.fetchOneArticle(id)
    }
  },
  created () {
    this.fetchArticle()
  }
}
</script>

<style>
.image-custom{
  border: 2px solid red;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
</style>
