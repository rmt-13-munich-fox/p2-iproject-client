<template class="contoh">
  <div class="container">
    <div class="col-lg-6 m-auto">
      <div class="card shadow bg-white mt-5 p-2 mb-5">
        <div class="row">
          <div class="col-12 my-auto mx-auto text-center">
            <img :src="require('../assets/blogLogo.png')" class="img-fluid">
          </div>
          <div class="col-10 mx-auto my-auto">
            <div class="card-title text-black">
              <h5 class="text-center py-2 font-weight-bold mb-0 mt-2">Login</h5>
            </div>
            <div class="card-body">
              <form @submit.prevent = "submitLoginForm">
                <input v-model="email" type="email" name="email" placeholder="Email address" class="form-control mb-2">
                <input v-model="password" type="password" name="password" placeholder="Password" class="form-control mb-2">

                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-success btn-block mt-3" name="login">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login-page',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['handleLogin']),
    async submitLoginForm () {
      const user = {
        email: this.email,
        password: this.password
      }
      const result = await this.handleLogin(user)
      if (result) {
        this.$router.push(
          { name: 'Home' }
        )
      }
    }
  }
}
</script>

<style>
</style>
