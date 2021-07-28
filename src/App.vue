<template>
  <div id="app">
    <Sidebar/>
    <router-view/>
    <HFooter/>
  </div>
</template>

<script>

import HFooter from 'vue-hacktiv8-footer'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    HFooter,
    Sidebar
  }
}
</script>

<style>
</style>
