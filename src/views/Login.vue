<template>
  <!-- <div
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
  </div> -->
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec">
          <h2 class="text-center">Login Now</h2>
          <form class="login-form" @submit.prevent="submit">
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-uppercase"
                >Username</label
              >
              <input type="text" class="form-control" placeholder="" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase"
                >Password</label
              >
              <input type="password" class="form-control" placeholder="" />
            </div>

            <div class="form-check">
              <label class="form-check-label">
                <label for="regis">if you dont have any account ?? Please</label>
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
                  <div class="banner-text">
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="../assets/pexels-mike-1335077.jpg"
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <div class="banner-text">
                  </div>
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
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods : {
    submit(){
      
    }
  }
};
</script>

<style>
@import url("//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.login-block {
  background: #de6262; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #ffb88c,
    #de6262
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  float: left;
  width: 100%;
  padding: 50px 0;
}
.banner-sec {
  background: url(../assets/pexels-mike-1335077.jpg)
    no-repeat left bottom;
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
.btn-login {
  background: #de6262;
  color: #fff;
  font-weight: 600;
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
