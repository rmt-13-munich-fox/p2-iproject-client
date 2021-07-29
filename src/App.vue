<template>
  <div id="app">
    <Navbar v-show="isLoggedIn === true"></Navbar>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>
<script>
import HFooter from 'vue-hacktiv8-footer'
import { mapMutations, mapState } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  created(){
    const access_token = localStorage.access_token
    if(access_token){
      this.$router.push('/car').catch(() => {})
      this.stateLog(true)
    } else{
      this.$router.push('/login').catch(() => {})
    }
  },
  components: {
    HFooter,
    Navbar
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  methods: {
    ...mapMutations({
      stateLog: 'STATE_LOGGED'
    })
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
