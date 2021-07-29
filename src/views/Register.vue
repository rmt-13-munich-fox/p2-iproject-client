<template>
  <div class="container my-5">
    <div
      style="background-color: #ffc0cb"
      class="container-fluid py-5 px-5 d-flex justify-content-center"
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
        <form class="form-signin">
          <label for="inputName" class="sr-only mb-1">Name</label>
          <input
            type="text"
            id="inputName"
            class="form-control mb-2"
            placeholder="e.g: John Doe"
          />
          <label for="inputEmail" class="sr-only mb-1">Email</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control mb-2"
            placeholder="Email address"
          />
          <label for="inputPassword" class="sr-only mb-1">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control mb-2"
            placeholder="Password"
          />
          <label for="inputDateOfBirth" class="sr-only mb-1"
            >Date Of Birth</label
          >
          <input
            type="date"
            id="inputDateOfBirth"
            class="form-control mb-2"
            placeholder="Password"
          />
          <label for="inputPhoneNumber" class="sr-only mb-1"
            >Phone Number</label
          >
          <input
            type="PhoneNumber"
            id="inputPhoneNumber"
            class="form-control mb-2"
            placeholder="e.g: 0812345"
          />
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
          <p class="mt-2 text-muted">or</p>
          <a @click.prevent="toLogin" class="btn btn-sm btn-primary btn-block"
            >SIGN IN</a
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    toLogin() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style></style>
