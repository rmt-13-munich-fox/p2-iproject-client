<template>
<div class>
  <nav class="navbar sticky-top navbar-light">
  <a v-on:click.prevent='goToHome' class="navbar-brand" href="#">ayahmarmut</a>
  <div>
      <router-link v-if='isLoggedIn' to="/dashboard">Dashboard |</router-link>
      <router-link v-if='isLoggedIn' to="/chat"> Chat |</router-link>
      <router-link v-if='isLoggedIn' to="/gimage"> Gallery | </router-link>
      <router-link v-if='isLoggedIn' to="/addmarmut"> Upload | </router-link>
      <a v-if='isLoggedIn' v-on:click.prevent='logoutUser' href="#">Log out</a>
  </div>
</nav>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn(){
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser(){
      this.logout()
      this.$router.push('/')
    },
    goToHome(){
      thos.$router.push('/dashboard')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #e58e26
}
</style>
