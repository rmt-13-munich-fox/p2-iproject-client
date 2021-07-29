<template>
  <div>
      <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="background-color: #f59e0b !important"
    >
      <div class="container">
        <router-link to="/" class="nav-link text-white h2" aria-current="page" href="#"
              >Resep Mama</router-link
            >
        <div class="me-auto"></div>
        <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/search" class="nav-link text-white" aria-current="page" href="#"
              >Search</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/favorite" class="nav-link text-white" aria-current="page" href="#"
              >My Favorite</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-if="!accessToken" to="/register" class="nav-link text-white" aria-current="page" href="#"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-if="!accessToken" to="/login" class="nav-link text-white" aria-current="page" href="#"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <a v-if="accessToken" @click.prevent="handleLogout()" class="nav-link text-white" aria-current="page" href="#"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->
  </div>
</template>

<script>
import Toast from "../apis/swal"
export default {
    name :"Navbar",
    methods:{
      handleLogout(){
        Toast.fire({
          icon:"success",
          title:"Logout Successfully"
        })
        localStorage.removeItem("access_token")
        localStorage.removeItem("email")
        this.$store.commit("ISLOGIN",false)
        this.$router.push('/login').catch(()=>{})
      }
    },
    computed:{
      accessToken(){
        return this.$store.state.accessToken
      }
    }
}
</script>

<style>

</style>