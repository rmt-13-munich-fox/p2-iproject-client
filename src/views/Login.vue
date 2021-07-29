<template>
  <section
    class="login-block d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Login Now</h2>
          <form class="login-form" @submit.prevent="submit">
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

            <div class="form-check">
              <label class="form-check-label">
                <label for="regis"
                  >Don't have any account ?? Please</label
                >
              </label>
              <div class="m-2">
                <a @click.prevent="toRegis" href="#">Sign Up</a>
              </div>
              <div class="m-4">
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
                  src="../assets/pexels-mike-170811.jpg"
                  alt="First slide"
                  style="height: 500px"
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
                  style="height: 500px"
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
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      const bool = await this.login(this.user);
      this.user.email = "";
      this.user.password = "";
      if (bool) {
        const obj = {
          id: localStorage.getItem("id"),
          status: "on",
        };
        this.$socket.client.emit("Login", obj);
        this.$router.push("/car");
      } else {
        this.$router.push("/login");
      }
    },
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
  background: url(../assets/pexels-mike-1335077.jpg) no-repeat left bottom;
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
