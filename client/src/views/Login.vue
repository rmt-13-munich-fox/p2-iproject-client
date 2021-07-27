<template>
<section class="login py-5">

  <div class="container" style="margin-top:150px !important;">
      <div class="row g-0 shadow">
          <div class="col-7" id="leftCol">
              <img src="@/assets/login-undraw2.svg" alt="" width="700">
          </div>
          <div class="col-5">
          <div class="m-5">
              <div class="">
                  <h1 class="title text-start" id="login-title"><i class="fab fa-wolf-pack-battalion" style='color:rgb(207, 150, 42);'></i>FoxCash</h1>
              </div>
              <div class="d-flex justify-content-start mb-5">
                <p>Sign in to access your account</p>
              </div>
              <div class="text text-start">
                  <form @submit.prevent="doLogin">
                      <div class="mb-3">
                        <label for="InputEmail1" class="form-label mt-5"> <b>Email Address</b> <i class="fas fa-envelope"></i></label>
                        <input v-model="email" type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" name="email">
                      </div>
                      <div class="mb-5">
                        <label for="InputPassword1" class="form-label"><b>Password</b> <i class="fas fa-lock"></i></label>
                        <input v-model="password" type="password" class="form-control" id="InputPassword1" name="password">
                      </div>
                      <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary text-center shadow" id="btn-login"><b>Sign In</b></button>
                        <br>
                      </div>
                    </form>
              </div>
          </div>
          </div>
      </div>
  </div>
</section>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        doLogin() {
            this.$store.dispatch("login", {email: this.email, password: this.password})
                .then(() => {
                    this.$router.push('/')
                })
                .catch(() => {})
        }
    }
}
</script>

<style scoped>

.row{
    background-color: white;
    border-radius: 40px;
}
img {
    margin-top: 20%;
    margin-bottom: 20%;
}
#leftCol {
    background-color: rgb(255, 234, 202) !important;
    border-radius: 40px 0 0 40px;
}
button {
    height: 150% !important;
}
</style>