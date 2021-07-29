<template>
  <div>
    <h2>Data of Corona spread <small><em>by  Date</em></small></h2>
    <p class="text-secondary">updates every 15 minutes</p>
    <div class=" container row w-50 mt-5">
      <div class="col md-12">
        <form @submit.prevent="findName">
          <label class="mb-1">name of nations</label>
          <input type="text" class="form-control glass text-white" placeholder="nation name" v-model="name">
          <input type="date" class="form-control glass text-white mt-2" placeholder="nation name" v-model="date">
          <button class="glass btn btn-sm bg-white mt-3" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../apis/server'
export default {
  name : 'Content3',
  data() {
    return {
      name : '',
      date : ''
    }
  },
  methods: {
    popUp(message){
      this.$vs.notify({
        title:'We are Sorry',
        text:`${message}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
        color: 'primary',
        time: 8000,
      })
    },
    findName(){
      // ditengah perjalan development, payload API dari server luar berubah isi payload nya
      this.popUp('this feature is not available now, we will back soon')
    }
  }
}
</script>

<style scoped>
  .glass {
    background-color: rgba(255, 255, 255, 0.06);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: none;
  }
</style>