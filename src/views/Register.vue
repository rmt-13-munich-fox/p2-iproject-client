<template>
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center m-4">Register</h2>
          <form class="login-form m-2" @submit.prevent="regis">
            <div class="form-group">
              <label for="exampleInputUsername" class="text-uppercase m-2"
                >Username</label
              >
              <input
                type="text"
                class="form-control m-2"
                placeholder=""
                v-model="user.username"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-uppercase m-2"
                >Email</label
              >
              <input
                type="text"
                class="form-control m-2"
                placeholder=""
                v-model="user.email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase m-2"
                >Password</label
              >
              <input
                type="password"
                class="form-control m-2"
                placeholder=""
                v-model="user.password"
              />
            </div>
            <div class="form-floating">
              <label for="floatingTextarea2" class="text-uppercase m-2"
                >Address</label
              >
              <textarea
                class="form-control ms-1 me-1 mb-2"
                id="address"
                style="height: 100px; width: 330px"
                v-model="user.address"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputUsername" class="text-uppercase m-2"
                >Quotes</label
              >
              <input
                type="text"
                class="form-control m-2"
                placeholder=""
                v-model="user.quotes"
              />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label py-2 m-2"
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
              <div style="margin-top: 50px">
                <button type="submit" class="btn btn-login float-right">
                  Submit
                </button>
              </div>
            </div>
          </form>
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
                  src="../assets/pexels-george-sultan-1409990.jpg"
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
import { mapActions } from "vuex";
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
    async regis() {
      const bool = await this.register(this.user);
      if (bool) {
        this.$router.push("/login");
      } else {
        this.$router.push("/register");
      }
    },
    ...mapActions(["register"]),
    toRegis() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block {
  background: linear-gradient(to bottom, #ffb88c, #de6262);
  float: left;
  width: 100%;
  padding: 50px 0;
}
.banner-sec {
  background: url(../assets/pexels-george-sultan-1409990.jpg) no-repeat left
    bottom;
  background-size: cover;
  min-height: 500px;
  border-radius: 0 10px 10px 0;
  padding: 0;
}
.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 15px 20px 0px rgba(0, 0, 0, 0.1);
}
.carousel-inner {
  border-radius: 0 10px 10px 0;
}
.carousel-caption {
  text-align: left;
  left: 5%;
}
.login-sec {
  padding: 50px 30px;
  position: relative;
}
.login-sec .copy-text {
  position: absolute;
  width: 80%;
  bottom: 20px;
  font-size: 13px;
  text-align: center;
}
.login-sec .copy-text i {
  color: #feb58a;
}
.login-sec .copy-text a {
  color: #e36262;
}
.login-sec h2 {
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 30px;
  color: #de6262;
}
.login-sec h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #feb58a;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
}
.banner-text {
  width: 70%;
  position: absolute;
  bottom: 40px;
  padding-left: 20px;
}
.banner-text h2 {
  color: #fff;
  font-weight: 600;
}
.banner-text h2:after {
  content: " ";
  width: 100px;
  height: 5px;
  background: #fff;
  display: block;
  margin-top: 20px;
  border-radius: 3px;
}
.banner-text p {
  color: #fff;
}
</style>
