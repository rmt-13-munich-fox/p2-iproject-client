<template>
  <!-- Register -->
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
      style="background-color: white; height: 100vh"
    >
      <div class="border w-50 p-5 my-5 bg-white rounded-3 shadow">
        <div class="row">
          <div>
          </div>
          <div class="align-self-center">
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <h5 class="mb-4">Sign Up to your account</h5>
                <label for="email" class="form-label">Email address</label>
                <input v-model="email"
                  type="email"
                  class="form-control"
                  id="email"
                  autocomplete="off"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">name</label>
                <input v-model="name" type="name" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" />
              </div>
              <button type="submit" class="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- END Register -->
</template>

<script>
export default {
    name:"Register",
    data(){
      return{
        email:"",
        name:"",
        password:""
      }
    },
    methods:{
    handleRegister(){
      const payload = {
        email : this.email,
        password : this.password,
        name: this.name
      }
      this.$store.dispatch("doRegister",payload)
      .then((data)=>{
        console.log(data);
        this.$router.push('/login').catch(()=>{})
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