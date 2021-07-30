<template>
  <div class="container" id="register-front-page">
    <div class="col" id="left">
      <div class="container" id="web-name">
        <h1>KERJA.IN</h1>
      </div>
    </div>
    <div class="col" id="right">
      <div id="register-side">
        <form class="register-form" id="register-form" @submit.prevent="register">
          <h2 class="login-here" id="register-title">REGISTER</h2>
          <br>
          <div class="row mb-1">
            <label for="emailLogin" class="col-sm-12 col-form-label" id="register-firstName-label">First Name</label>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="register-firstName" v-model="firstName">
            </div>
          </div>
          <div class="row mb-1">
            <label for="emailLogin" class="col-sm-12 col-form-label" id="register-lastName-label">Last Name</label>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="register-lastName" v-model="lastName">
            </div>
          </div>
          <div class="row mb-1">
            <label for="emailLogin" class="col-sm-12 col-form-label" id="register-username-label">Username</label>
            <div class="col-sm-12">
              <input type="text" class="form-control" id="register-username" v-model="username">
            </div>
          </div>
          <div class="row mb-1">
            <label for="emailLogin" class="col-sm-12 col-form-label" id="register-email-label">Email</label>
            <div class="col-sm-12">
              <input type="email" class="form-control" id="register-email" v-model="email">
            </div>
          </div>
          <div class="row mb-1">
            <label for="passwordLogin" class="col-sm-12 col-form-label" id="register-password-label">Password</label>
            <div class="col-sm-12">
              <input type="password" class="form-control" id="register-password" v-model="password">
            </div>
          </div>
          <button type="submit" class="btn btn-primary login-btn" id="register-submit">Sign Up</button>
          <h4 id="register" class="mt-3" @click.prevent="toLogin">Already have an account?</h4>
          <div class="g-signin2"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
        .then(_ => {
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    toLogin () {
      this.$router.push('/login')
    }
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
#web-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#web-name h1 {
  color: #FFA45C;
}
#left {
  background-color: #FFF4E3;
  height: 100vh;
  width: 50vw;
}
#right {
  background-color: #FFCDAB;
  height: 100vh;
  width: 50vw;
}
#register-form {
  border-radius: 20px;
}
#register-side {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#register-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  font-family:fantasy;
  color: #5D5D5A;
}

#register-submit {
  background-color: #D9ADAD;
  border-color: #ad8c8c;
  color: #5D5D5A;
}

#register-submit:hover {
  background-color: #ad8c8c;
  border-color: #D9ADAD;
  color: #5D5D5A;
}

#register-email, #register-password, #register-username, #register-firstName, #register-lastName {
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  color: black;
}

#login-email:hover, #login-password:hover, #register-username:hover, #register-firstName:hover, #register-lastName:hover {
  background: transparent;
  border: none;
  border-bottom: 1px solid #152A38;
  color: black;
  border-color: #152A38;
}

#register-email-label, #register-password-label, #register-username-label, #register-firstName-label, #register-lastName-label {
  color: #5D5D5A;
}

#register {
  color: #5D5D5A;
  cursor: pointer;
}
</style>
