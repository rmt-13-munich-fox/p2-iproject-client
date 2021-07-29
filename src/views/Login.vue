<template>
  <div class="row col-12" id="row-login" style="margin-left:17px;">
    <!-- Container Login / Component Login -->
    <Sidebar />
    <div
      class="container-fluid d-flex justify-content-center"
      id="login-container"
      style="position : absolute;top:50%;left:50% ;transform: translate(-50%,-50%)"
    >
      <div id="left-box" class="col-md-4 d-flex align-items-center flex-column">
        <h2 style="margin-top:16%">The new way to explore news</h2>
        <img
          src="../assets/images/logologin.svg"
          alt="news portal"
          style="width : 100%"
        />
      </div>
      <div
        id="right-box"
        class="col-md-4 d-flex justify-content-center flex-column align-items-center"
      >
        <h2>Login to Smart News</h2>
        <p>Welcome back!, enter your account credentials to access the news</p>
        <div class="col-md-8">
          <div
            class="container-fluid text-center d-flex justify-content-center"
          >
            <GoogleLogin
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
            ></GoogleLogin>
          </div>
          <div class="d-flex container-fluid mb-3">
            <div
              class="d-flex justify-content-center align-items-center"
              style="width:100%"
            >
              <hr style="width:100%;border:1px solid red; margin-right:5px" />
              <p>or</p>
              <hr style="width:100%;border:1px solid red; margin-left:5px" />
            </div>
          </div>
          <form @submit.prevent="handleLogin" id="login-form">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="email"
                type="email"
                :class="emailClass"
                placeholder="youremail@mail.com"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                :class="passwordClass"
                placeholder="yoursecretpassword"
                style="padding-left:15px !important"
              />
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn" id="login-btn">Sign in</button>
            </div>
          </form>
          <div
            class="d-flex flex-column justify-content-center text-center mt-5"
          >
            <p>Does not have an account?</p>
            <p>Explore the news way to read news with us!</p>
            <span
              ><router-link to="/register"
                >Register your account</router-link
              ></span
            >
          </div>
          <div
            class="d-flex flex-column justify-content-center text-center mt-2"
          >
            <ModalResetPass />
          </div>
        </div>
      </div>
    </div>
    <HFooter />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import ModalResetPass from "../components/ModalResetPass.vue";
import HFooter from "vue-hacktiv8-footer";
import GoogleLogin from "vue-google-login";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      emailClass: "form-control",
      passwordClass: "form-control",
      // for google oath
      params: {
        client_id:
          "313361112615-m44il94s38a65nqkhdgnoutanfn108e9.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 40,
        longtitle: true
      }
    };
  },
  components: {
    Sidebar,
    HFooter,
    GoogleLogin,
    ModalResetPass
  },
  methods: {
    onSuccess(googleUser) {
      let user = googleUser.getBasicProfile()
      const email = user.Et
      // this.$store.commit("SET_EMAIL",email)
      localStorage.setItem("email",email)
      const id_token = googleUser.getAuthResponse().id_token    
      this.$store.dispatch("loginGoogle",id_token)
    },
    handleLogin() {
      let payload = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("handleLogin", payload);
      this.emailClass = "form-control ";
      this.passwordClass = "form-control ";
    }
  },
  watch: {
    email: function(before, after) {
      console.log(after);
      let counterErr = 0;
      let counterSucc = 0;
      if (
        (before.length <= 1 && !before.includes("@")) ||
        !before.includes(".")
      ) {
        if (counterErr == 0) {
          this.emailClass += " errorValidate";
          counterErr++;
        } else this.emailClass += " errorValidate";
      } else if (counterSucc == 0) {
        this.emailClass += " successValidate";
        counterSucc++;
      }
    }
  }
};
</script>

<style scoped>
hr {
  border: 1px solid #25234d !important;
}
.footer-h8 {
  position: fixed !important;
  left: 76px !important;
  bottom: 0px !important;
  width: calc(100% - 76px) !important;
  height: 60.5px !important;
  background-color: #1d1b31 !important;
  transition: all 0.5s ease;
  border-top: unset !important;
}
#login-btn {
  background-color: #25234d !important;
  border: unset !important;
  color: #fff;
}
@media screen and (max-width:700px){
  #left-box{
    display: none !important;
  }
  #right-box{
    width: 80% !important;
    margin-left : 10px !important;
  }
}
</style>
