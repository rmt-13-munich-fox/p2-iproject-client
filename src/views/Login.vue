<template>
      <!-- LOGIN -->
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
      style="background-color: white; height: 100vh"
    >
      <div class="border w-50 p-5 my-5 bg-white rounded-3 shadow">
        <div class="row">
          <div>
          </div>
          <div class="align-self-center">
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <h5 class="mb-4">Sign in to your account</h5>
                <label for="email" class="form-label">Email address</label>
                <input v-model="email"
                  type="email"
                  class="form-control"
                  id="email"
                  autocomplete="off"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- END LOGIN -->
</template>

<script>
export default {
    name:"Login",
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
    handleSubmit(){
      const payload = {
        email : this.email,
        password : this.password
      }
      this.$store.dispatch("doLogin",payload)
      .then((data)=>{
        console.log(data);
        this.$router.push('/').catch(()=>{})
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>