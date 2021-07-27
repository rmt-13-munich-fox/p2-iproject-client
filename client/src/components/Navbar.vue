<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow mb-0">
        <router-link to="/" class="navbar-brand ms-5" aria-current="page" id="fox"><i class="fab fa-wolf-pack-battalion" style='color:black;'></i>FoxCash</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <!-- <li class="nav-item ms-1">
              <router-link to="/bookmarks" v-if="isLoggedIn  && role==='Customer'" class="nav-link">My Bookmark</router-link>
            </li> -->
            <!-- <li class="nav-item">
              <router-link to="/login" v-if="!isLoggedIn" class="nav-link ">Sign In</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" v-if="!isLoggedIn" class="nav-link ">Sign Up</router-link>
            </li>
            <li class="nav-item">
              <p v-if="isLoggedIn" class="p-2" style="margin:0;">{{email}}</p>
            </li>-->
            <li class="nav-item"> 
              <a @click.prevent="logout" v-if="isLoggedIn" class="btn btn-light me-5">Logout</a>
            </li>
          </ul>
        </div>
    </nav> 
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'NavbarPage',
    computed: {
        ...mapState(["isLoggedIn"])
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$store.commit('LOGIN_STATUS', false)
            this.$router.push('/login')
        }
    },
    created() {
        if (localStorage.access_token) {
            this.$store.commit('LOGIN_STATUS', true)
        } else {
            this.$store.commit('LOGIN_STATUS', false)
        }
    }
}
</script>

<style scoped>
.btn {
    background-color: rgb(207, 150, 42);
    border: 0 !important;
}
</style>