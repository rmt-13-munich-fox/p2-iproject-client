<template>
  <!-- <div
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
      <div class="form-floating">
        <textarea
          class="form-control ms-1 me-1 mb-2"
          placeholder="Address"
          id="address"
          style="height: 100px; width: 470px"
          v-model="user.address"
        ></textarea>
        <label for="floatingTextarea2">Address</label>
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
      <br />
      <div class="col-12">
        <button type="submit" class="btn btn-primary" id="submit-sign">
          Submit
        </button>
      </div>
    </form>
  </div> -->
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Login Now</h2>
          <form class="login-form" @submit.prevent="submit">
            <div class="form-group">
              <label for="exampleInputUsername" class="text-uppercase"
                >Username</label
              >
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="user.username"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-uppercase"
                >Email</label
              >
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="user.email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                placeholder=""
                v-model="user.password"
              />
            </div>
            <div class="form-floating">
              <textarea
                class="form-control ms-1 me-1 mb-2"
                placeholder="Address"
                id="address"
                style="height: 100px; width: 470px"
                v-model="user.address"
              ></textarea>
              <label for="floatingTextarea2">Address</label>
            </div>
            <div class="form-group">
              <label for="exampleInputUsername" class="text-uppercase"
                >Quotes</label
              >
              <input
                type="text"
                class="form-control"
                placeholder=""
                v-model="user.quotes"
              />
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
            <div class="form-check">
              <label class="form-check-label">
                <label for="regis"
                  >if you dont have any account ?? Please</label
                >
                <a @click.prevent="">Sign Up</a>
              </label>
              <button type="submit" class="btn btn-login float-right">
                Submit
              </button>
            </div>
          </form>
          <div class="copy-text">
            Created with <i class="fa fa-heart"></i> by
            <a href="http://grafreez.com">Grafreez.com</a>
          </div>
        </div>
        <div class="col-md-8 banner-sec">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="../assets/pexels-mike-170811.jpg"
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text"></div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="../assets/pexels-mike-1335077.jpg"
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
        image: "",
        quotes: "",
      },
    };
  },
  methods: {
    onFileUpload(event) {
      this.user.image = event.target.files[0];
    },
    regis() {},
  },
};
</script>

<style></style>
