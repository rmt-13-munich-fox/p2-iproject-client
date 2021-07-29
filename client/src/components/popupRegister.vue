<template lang="html">
  <div>
    
     <vs-button @click="activePrompt2 = true" color="white" type="border">Register now</vs-button>


     <vs-prompt
      color="success"
      @cancel="username='',email='', password=''"
      @accept="send"
      @close="close"
      :active.sync="activePrompt2">
       <div class="con-exemple-prompt">
        register to <b>to get access</b>.
         <vs-input placeholder="username" v-model="username"/>
         <vs-input placeholder="email" v-model="email"/>
         <vs-input placeholder="password" v-model="password"/>
       </div>
     </vs-prompt>
  </div>
</template>

<script>
import axios from '../apis/server'
export default {
  data(){
    return {
      activePrompt2:false,
      val:'',
      username : '',
      email: '',
      password: ''
    }
  },
  computed:{
  },
  methods:{
    acceptAlert(result){
      this.$vs.notify({
        color:'success',
        title:'Registered',
        text: result
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a form register!'
      })
    },
    send(){
      let payload = {
        username : this.username,
        email : this.email,
        password : this.password
      }

      axios.post('/users/register', payload)
        .then(({data}) => {
          this.acceptAlert('Success to register')
        })
        .catch((err) => {
          console.log(err)
          this.close()
        })
    }
  }
}
</script>

<style>
.con-exemple-prompt {
  padding: 50px;
}
.vs-input {
  width: 100%;
  margin-top: 10px;
}
</style>