<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <HFooter/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'App',
  components: {
    Navbar,
    HFooter
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
