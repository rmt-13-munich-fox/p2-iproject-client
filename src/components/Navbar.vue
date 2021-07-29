<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img :src="require('../assets/blogLogo.png')" width="80px" height="80px" class="img-fluid">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ">
            <router-link class="nav-link active" style="color:#FF7A94" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" style="color:#FF7A94" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Articles
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/all">All</router-link></li>
            <li><router-link class="dropdown-item" to="/makeup">Make Up</router-link></li>
            <li><router-link class="dropdown-item" to="/fashion">Fashion</router-link></li>
            <li><router-link class="dropdown-item" to="/skincare">Skincare</router-link></li>
          </ul>
        </li>

          <li v-if="isLogin === false" class="nav-item">
            <router-link style="color:#FF7A94" class="nav-link" to="/login">Sign In</router-link>
          </li>
          <li v-if="isLogin === false" class="nav-item">
            <router-link style="color:#FF7A94" class="nav-link" to="/register">Sign Up</router-link>
          </li>
          <li v-if="isLogin === true && currentUser.role === 'client'" class="nav-item cursor">
            <router-link to="/bookmarks" style="color:#FF7A94" class="nav-link">My Bookmarks</router-link>
          </li>
          <li v-if="isLogin === true && currentUser.role === 'admin'" class="nav-item cursor">
            <router-link to="/create-post" style="color:#FF7A94" class="nav-link">Create Post</router-link>
          </li>
          <li @click="logout" v-if="isLogin === true" class="nav-item cursor">
            <div style="color:#FF7A94" class="nav-link">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState(['isLogin', 'currentUser'])
  },
  methods: {
    ...mapActions(['check_login']),
    async logout () {
      localStorage.clear()
      await this.check_login(false)
    }
  },
  created () {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      this.check_login(true)
    } else {
      this.check_login(false)
    }
  }
}
</script>

<style>
.cursor:hover{
  cursor:pointer
}
.dropdown-custom{
  z-index: 200;
}
</style>
