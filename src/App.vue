<template>
  <!-- <div id="app"> -->
    <div>
    <navbar>
    </navbar>
    <router-view/>
    <HFooter>
    </HFooter>
    </div>
  <!-- </div> -->
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import navbar from '@/components/NavBar.vue'

export default {
  components: {
    navbar,
    HFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
