<template>
  <div id="app">
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('SET_ISLOGIN', true)
    } else {
      this.$store.commit('SET_ISLOGIN', false)
    }
  }
}
</script>

<style>
body {
  background-repeat: no-repeat;
}
</style>
