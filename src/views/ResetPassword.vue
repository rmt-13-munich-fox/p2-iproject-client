<template>
  <div
    class="row col-12"
    style="min-height: 100vh; display:flex; align-items:center; background-color:#1d1b31;color:#fff; margin-left:17px"
  >
    <Sidebar />
    <div class="container col-md-4" id="register-container">
      <h4 class="text-center" style="font-size:2rem;">Reset password</h4>
      <hr />
      <div class="main-login main-center register">
        <hr />
        <form @submit.prevent="handleResetPassword" class="form-horizontal" method="post" action="#">
          <div class="form-group">
            <label for="password" class="cols-sm-2 control-label"
              >New Password</label
            >
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="fa fa-lock fa-lg icon" aria-hidden="true"></i
                ></span>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
          </div>

          <div class="form-group mb-5">
            <button 
              type="submit"
              class="btn btn-primary btn-lg btn-block login-button"
            >
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
    <HFooter />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import HFooter from "vue-hacktiv8-footer";
import jwt from "jsonwebtoken"
export default {
  name: "ResetPassword",
  data() {
    return {
      email: "",
      password: "",
      reset_token : ""
    };
  },
  methods : {
    handleResetPassword(){
      let payload = {
        reset_token : this.reset_token,
        password: this.password
      }
      this.$store.dispatch("handleResetPassword", payload)
    }
  },
  created(){
    this.reset_token = this.$route.query.reset_token
    try {
      let payload = jwt.verify(this.reset_token,"SECRET")
      console.log(payload)
    } catch (err) {
      this.$router.push('/').catch(()=>{})
    }
  },
  components: {
    Sidebar,
    HFooter
  }
};
</script>

<style scoped>

.input-group-addon {
  background-color: unset !important;
  border: unset !important;
}
label {
  font-size: 14px;
  font-weight: bold;
}
.main-login {
  padding: 25px;
  width: 90%;
  margin-top: -40px;
}
#register-container {
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
li a span{
  font-size: 1rem !important;
}
</style>
