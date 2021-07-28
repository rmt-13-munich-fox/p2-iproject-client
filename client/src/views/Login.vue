<template>
  <div id="root">
    <div class="card">
      <div class="card-img">
        <img :src="require(`@/assets/h8.png`)" />
      </div>
      <div class="desc">
        <h6 class="primary-text">Sign in</h6>
        <h6 class="secondary-text">Databases of corona cases</h6>
      </div>
      <form @submit.prevent="login">
        <input
          type="text"
          placeholder="email"
          class="form-control"
          v-model="email"
        />
        <input
          type="password"
          placeholder="password"
          class="form-control mt-2"
          v-model="password"
        />
        <button class="primary-text" type="submit">Login</button>
      </form>
      <div class="details">
        <div class="rating">
          <h6 class="primary-text">have no account ?</h6>
          <router-link to="/home">
            <h6 class="secondary-text">Register now</h6>
          </router-link>
        </div>
        <div class="activity">

        </div>
        <Facebook-login
            class="buttons"
            appId="209095501020677"
            @login="onLogin"
            @logout="onLogout"
            @sdk-loaded="sdkLoaded"
          >
          </Facebook-login>
      </div>
      <!-- <div class="con-notifications">
        <vs-button @click="alert()" color="success" type="gradient">Notification Random Color</vs-button>
      </div> -->
    </div>
  </div>
</template>

<script>

import FacebookLogin from 'facebook-login-vuejs'
import axios from '../apis/server'
export default {
  name: 'Home',
  computed: {
    checkPassword(){
      return this.$store.state.isWrong
    }
  },
  data () {
    return {
      email: '',
      password: '',
      personalID: '',
      FB: undefined,
      isConnected: false,
      name: ''

    }
  },
  methods: {
    alert(message){
      this.$vs.notify({
        title:'failed to sign in',
        text:`${message}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
        color: 'danger',
        time: 5000,
      })
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      axios({
        url: '/users/login',
        method: 'POST',
        data : payload
      })
        .then(({data})=> {
          localStorage.setItem('access_token', data.token)
          this.$store.commit('LOGINEXE', true, data.msg)
          this.$router.push({name : 'Home'})
        })
        .catch((err) => {
          this.alert(err.response.data.msg)
        })
    
    },
    getUserData () {
      this.FB.api('/me', 'GET',
        { fields: 'id,name,email' },
        (userInformation) => {
          console.warn('data api', userInformation)
          this.personalID = userInformation.id
          this.email = userInformation.email
          this.name = userInformation.name
        }
      )
    },
    sdkLoaded (payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin () {
      this.isConnected = true
      this.getUserData()
    },
    onLogout () {
      this.isConnected = false
    },
  },
  components: {
    FacebookLogin
  }
}
</script>
<style scoped>
#root {
  background: url(https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)
    no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}
.buttons{
  height: 60px;
  width: 320px;
  position: relative;
  top: -30px;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: none;
  padding: 15px;
  border-radius: 10px;
}
.card {
  height: 500px;
  width: 320px;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: -50px;
  bottom: 0;
  border-radius: 8px;
  -webkit-box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
  box-shadow: 20px 20px 22px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
}
.card-img {
  height: 120px;
  width: 120px;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  position: absolute;
  margin: 30px auto 20px auto;
  left: 0;
  right: 0;
}
.card-img img {
  height: 86%;
  border-radius: 50%;
  margin-left: 7%;
  margin-top: 7%;
}
h6 {
  margin: 0;
}
.desc {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 160px;
}
.primary-text {
  color: #d5d5d5;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.7px;
  margin: 5px 0;
}
.secondary-text {
  color: #c0c0c0;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 5px 0;
}
button {
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: none;
}
input {
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border: none;
  width: 80%;
  margin: 0 auto;
  position: relative;
  top: 240px;
}
.details {
  display: -ms-grid;
  display: grid;
  width: 100%;
  height: 70px;
  padding: 5px 0;
  -ms-grid-columns: auto auto;
  grid-template-columns: auto auto;
  background-color: rgba(255, 255, 255, 0.06);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  position: absolute;
  bottom: 0;
  border-radius: 0 0 8px 8px;
}
.details > div {
  text-align: center;
}

button {
  width: 80%;
  padding: 15px 0;
  position: absolute;
  left: 10%;
  top: 340px;
  border-radius: 5px;
  outline: none;
}
a {
  position: relative;
  top: -30px;
  text-decoration: none;
}
@media screen and (min-width: 451px) {
  a {
    font-size: 18px;
    padding: 8px 12px 8px 12px;
  }
}

@media screen and (max-width: 450px) {
  a {
    font-size: 12px;
    padding: 5px 8px 5px 8px;
  }
}
</style>
