<template>
  <div id="root">
    <div class="app">
      <Navbar/>
      <div class="wrapper">
          <Sidebar/>
        <div class="main-container">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
export default {
  name : '',
  components: {
    Navbar,
    Sidebar,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");


#root {
  background: url(https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)
    no-repeat center center fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  width: 100%;
  height: 100vh;
  color: lavender;
}
@media screen and (max-width: 480px) {
  body {
    padding: 0.8em;
  }
}

.app {
  max-width: 1250px;
  max-height: 860px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}

.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}


.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}


::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>