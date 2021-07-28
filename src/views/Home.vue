<template>
  <div class="home container">
    <div class="col" id="sidebar">
      <Sidebar/>
    </div>
    <div class="col-12" id="main-page">
      Main page
    </div>
  </div>
</template>

<script>

import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#sidebar {
  height: 100vh;
  width: 20vw;
}

#main-page {
  background-color: #FFCDAB;
  height: 100vh;
  width: 80vw;
}
</style>