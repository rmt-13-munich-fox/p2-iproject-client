<template>
  <div class="container py-5">
    <div
      style="background-color: #ffc0cb"
      class="rounded container-fluid py-5 px-5 d-flex justify-content-center"
    >
      <div class="col my-3">
        <img
          class="my-4 rounded"
          src="@/assets/logo.png"
          alt=""
          width="250"
          height="250"
        />
      </div>
      <div class="col">
        <form class="form-signin" @submit.prevent="userLogin()">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only mb-1">Email address</label>
          <input
            v-model="email"
            type="email"
            id="inputEmail"
            class="form-control mb-3"
            placeholder="Email address"
          />
          <label for="inputPassword" class="sr-only mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control mb-3"
            placeholder="Password"
          />
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <div>
            <GoogleLogin
              class="btn"
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
            ></GoogleLogin>
          </div>
          <p class="mt-2 text-muted">or</p>
          <a
            @click.prevent="toRegister"
            class="btn btn-sm btn-primary btn-block"
            >REGISTER</a
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "Login",
  methods: {
    userLogin() {
      this.$store.dispatch("userLogin", {
        email: this.email,
        password: this.password
      });
    },
    toRegister() {
      this.$router.push({ name: "Register" });
    },
    onSuccess(params) {
      const { id_token } = params.getAuthResponse();
      localhost({
        method: "POST",
        url: "/glogin",
        data: {
          id_token
        }
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.token);
          localStorage.setItem("user_email", data.email);
          localStorage.setItem("user_role", data.role);
          this.$emit("login-click", "homePage");
        })
        .catch(({ response }) => {
          const { message } = response.data;
          console.log(message);
        });
    }
  },
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "892089505047-93nej9mvqlb4diiu2800g9qafk1ucg0v.apps.googleusercontent.com"
      },
      renderParams: {
        width: 150,
        height: 50
      }
    };
  },
  components: {
    GoogleLogin
  }
};
</script>

<style></style>
