<template>
<div>

<card v-if="isLoggedIn" >
</card>
</div>
</template>

<script>
import card from "../components/MarmutCard.vue"
// import chat from "../components/Chatbox.vue"
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
	name:"Dashboard",
	components: {
		card,
	},
	computed: {
    // ...mapState['courses']
    isLoggedIn(){
      return this.$store.state.isLoggedIn
      // return this.$router.push('/')
    },
  },
  methods: {
    ...mapActions(['login','logout', 'instagram']),
    ...mapMutations(['LOGIN_STATE']),
    loginUser(){
      let newUser = {
        email: this.email,
        password: this.password
      }
      if(localStorage.getItem("_grecaptcha") && localStorage.getItem("access_token")){
        this.login(newUser)
        this.$router.push('/dashboard')
      }else{
        swal('Are you sure you are not a robot?')
      }
    }
  },
  created(){
    if(localStorage.getItem("access_token")){
      this.LOGIN_STATE
    }
  }
}
</script>

<style>

</style>