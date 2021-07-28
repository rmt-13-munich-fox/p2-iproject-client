<template>
  <div class="sidenav" v-if="isLogin">
    <a href="#about">Home</a>
    <a href="#services">Motivation</a>
    <div class="dropdown-divider"></div>
    <a href="#clients">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
</style>
