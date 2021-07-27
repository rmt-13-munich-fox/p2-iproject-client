<template>
  <div
    id="sign-board"
    class="flex-row container-sm my-sm-5 py-sm-5 justify-content-center bg-light bg-gradient border border-3"
  >
    <form id="sign-up" @submit.prevent="regis">
      <p class="fs-2 text-center">Sign Up</p>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="username-sign"
          placeholder="Username"
          v-model="user.username"
        />
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email-sign"
          placeholder="Email"
          v-model="user.email"
        />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="password-sign"
          placeholder="Password"
          v-model="user.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label py-2"
          >Please Upload Image
        </label>
        <input
          class="form-control"
          type="file"
          id="image"
          @change="onFileUpload($event)"
        />
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Address"
          id="address"
          style="height: 100px"
          v-model="user.address"
        ></textarea>
        <label for="floatingTextarea2">Address</label>
      </div>
      <br />
      <div class="col-12">
        <button type="submit" class="btn btn-primary" id="submit-sign">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        address: "",
        image: '',
      },
    };
  },
  methods: {
    onFileUpload (event) {
        this.user.image = event.target.files[0]
    },
    regis(){
        
    },
  }
};
</script>

<style></style>
