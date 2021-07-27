<template>
  <div id="app">
    <Navbar v-if="isLoggedIn"></Navbar>
    <router-view/>
    <HFooter v-if="isLoggedIn"></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
import {mapState} from 'vuex'

export default {
  name: "App",
  components: {
    Navbar,
    HFooter
  },
  computed: {
    ...mapState(["isLoggedIn"])
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
