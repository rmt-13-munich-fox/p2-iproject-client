<template>
  <div class="container">
    <div class="mt-5 mb-4">
      <h3>Create new article</h3>
    </div>
    <form @submit.prevent = "submitCreateArticle" class="mb-5">
      <div class="mb-3">
        <label for="title" class="form-label">Article's title</label>
        <input v-model="title" type="text" class="form-control" placeholder="your article's title">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Article's description</label>
        <vue-editor v-model="description" placeholder="your article's description"></vue-editor>
      </div>
      <div class="mb-3">
        <label for="thumbnail" class="form-label">Article's thumbnail</label>
        <input @change="(event) => handleImageChange(event)" type="file" class="form-control">
      </div>

      <div class="mb-3">
        <label for="tagId" class="form-label">Article's tag</label>
        <select v-model="tagId" class="form-select" aria-label="Default select example">
          <option selected value=1>Make-up</option>
          <option value=2>Skincare</option>
          <option value=3>Fashion</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
export default {
  name: 'create-article-page',
  data () {
    return {
      title: '',
      description: '',
      thumbnail: '',
      tagId: ''
    }
  },
  components: {
    VueEditor
  },
  methods: {
    handleImageChange (event) {
      console.log(event.target.files[0], '-------------')
      this.thumbnail = event.target.files[0]
    },
    submitCreateArticle () {
      // console.log('masuk euy')
      // console.log(typeof +this.tagId);
      const formData = new FormData()
      // description: '', thumbnail: '', tagId: ''
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('thumbnail', this.thumbnail)
      formData.append('tagId', +this.tagId)
      // console.log(formData,'----------');
      const accessToken = localStorage.getItem('access_token')
      console.log(accessToken)
      axios.post('http://localhost:3000/posts', formData, {
        // eslint-disable-next-line quote-props
        headers: { 'access_token': accessToken }
      }).then(({ data }) => {
        console.log(data)
      }).catch(({ response }) => {
        console.log(response.data)
        // let err = response.data.join("\n")
        // swal(err)
      })
    }
  }
}
</script>

<style>

</style>
