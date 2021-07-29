<template>
  <div  class="Home">
    <div class="container">
      <div>
	<div class="d-flex justify-content-center h-100 mt-5 mb-5">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i>📧</span>
						</div>
						<input v-model='email' type="text" class="form-control" placeholder="email" required>
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i>🔑</span>
						</div>
						<input v-model='password' type="password" class="form-control" placeholder="password" required>
					</div>
      <div>
     <vue-recaptcha class="d-flex justify-content-center mb-2" sitekey="6LdTeMUbAAAAAIx4LO0o3MT7ZrDGTKttVGrb7KE1" :loadRecaptchaScript="true"></vue-recaptcha>
      </div>
					<div class="form-group">
						<input v-on:click.prevent="loginUser" type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
				</div>
			</div>
		</div>
	</div>
</div>
  </div>
    <div class="container">
      <div>
	<div class="d-flex justify-content-center h-100 mt-5 mb-5">
		<div class="card">
			<div class="card-header">
				<h3>Sign Up</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i>📧</span>
						</div>
						<input v-model='emailRegis' type="text" class="form-control" placeholder="email">
					</div>
          <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i>N</span>
						</div>
						<input v-model='username' type="text" class="form-control" placeholder="username">
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i>🔑</span>
						</div>
						<input v-model='passwordRegis' type="password" class="form-control" placeholder="password">
					</div>
					<div class="form-group">
						<input v-on:click.prevent="registerUser" type="submit" value="Register" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
			</div>
		</div>
	</div>
</div>
  </div>
      </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  name: "login",
  data(){
    return{
      email: "",
      password: "",
      username: "",
      emailRegis: "",
      passwordRegis: "",
    }
  },
  components: {
    VueRecaptcha,
  },
  computed: {
    // ...mapState['courses']
    isLoggedIn(){
      return this.$store.state.isLoggedIn
      // return this.$router.push('/')
    },
  },
  methods: {
    ...mapActions(['login','logout','register','instagram']),
    ...mapMutations(['LOGIN_STATE']),
    loginUser(){
      let newUser = {
        email: this.email,
        password: this.password
      }
      if(localStorage.getItem("_grecaptcha")){
        if(!localStorage.getItem("access_token")){
          // this.$router.push('/')
          swal("Captcha expired, please refesh the page.")
        }
        if(newUser.email && newUser.password){
          // let name = localStorage.getItem('uname')
          this.login(newUser)
          this.$router.push('/dashboard')
      		// console.log(this.instagram()) 
        }
      }else{
        swal('Are you sure you are not a robot?')
      }
    },
    registerUser(){
      let registeredUser = {
        email: this.emailRegis,
        username: this.username,
        password: this.passwordRegis,
      }
      this.register(registeredUser)
      this.emailRegis="",
      this.username="",
      this.passwordRegis=""
    },

	fetchInstagram(){
		this.instagram()
	}
  },
  created(){
    if(localStorage.getItem("access_token")){
      this.LOGIN_STATE
    }
  }
}
</script>

<style scoped>
/* Made with love by Mutiullah Samim*/

@import url('https://fonts.googleapis.com/css?family=Numans');

html,body{
background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}

.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #e58e26;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #e58e26;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>