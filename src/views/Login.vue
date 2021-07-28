<template>
  <div class="container" id="login-front-page">
    <div class="col" id="left">
      <div class="container" id="web-name">
        <h1>KERJA.IN</h1>
      </div>
    </div>
    <div class="col" id="right">
      <div id="login-side">
        <form class="login-form" id="login-form">
          <h2 class="login-here" id="login-title">LOGIN HERE</h2>
          <br>
          <div class="row mb-3">
            <label for="emailLogin" class="col-sm-12 col-form-label" id="login-email-label">Email</label>
            <div class="col-sm-12">
              <input type="email" class="form-control" id="login-email">
            </div>
          </div>
          <div class="row mb-3">
            <label for="passwordLogin" class="col-sm-12 col-form-label" id="login-password-label">Password</label>
            <div class="col-sm-12">
              <input type="password" class="form-control" id="login-password">
            </div>
          </div>
          <button type="submit" class="btn btn-primary login-btn" id="login-submit">Sign in</button>
          <h4 id="register" class="mt-3">Don't have an account?</h4>
          <div class="g-signin2"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#web-name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#web-name h1 {
  color: #FFA45C;
}
#left {
  background-color: #FFF4E3;
  height: 100vh;
  width: 50vw;
}
#right {
  background-color: #FFCDAB;
  height: 100vh;
  width: 50vw;
}
#login-form {
  border-radius: 20px;
}
#login-side {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#login-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  font-family:fantasy;
  color: #5D5D5A;
}

#login-submit {
  background-color: #D9ADAD;
  border-color: #ad8c8c;
  color: #5D5D5A;
}

#login-submit:hover {
  background-color: #ad8c8c;
  border-color: #D9ADAD;
  color: #5D5D5A;
}

#login-email, #login-password {
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
  color: black;
}

#login-email:hover, #login-password:hover {
  background: transparent;
  border: none;
  border-bottom: 1px solid #152A38;
  color: black;
  border-color: #152A38;
}

#login-email-label {
  color: #5D5D5A;
}

#login-password-label {
  color: #5D5D5A;
}

#register {
  color: #5D5D5A;
  cursor: pointer;
}
</style>
