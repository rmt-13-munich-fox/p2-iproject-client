<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="background-color: #f59e0b; height: 100vh"
  >
    <div class="border w-75 p-5 my-5 bg-white rounded-3 shadow">
      <div class="row">
        <div class="col-6">
          <img alt="login-img" width="100%" />
        </div>
        <div class="col-6 align-self-center">
          <form @submit.prevent="submitLogin">
            <div class="mb-3">
              <img
                src="https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f68150db527de25e82c86f1_Hacktiv8%20logo%20horizontal%2001%20black.png"
                alt="logo-h8"
                class="mb-4"
                width="200px"
              />
              <h5 class="mb-4">Sign in to your account</h5>
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
                v-model="user.email"
              />
              <label for="username" class="form-label">Username</label>
              <input
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
                v-model="user.username"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="user.password"
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style></style>
