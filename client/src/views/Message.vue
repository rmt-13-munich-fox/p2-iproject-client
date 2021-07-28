<template>
  <div>
    <h2>Live Chat</h2>
    <h6>fight corona starting from me</h6>
    <div class="row mt-4">
      <div class="col-md-12">
          <div class="container">
            <ul>
              <li v-for="(item, index) in get_chat" :key="index">{{item}}</li>
            </ul>
            <form @submit.prevent="sendChat">
              <input type="text" class="form-control glass text-white mb-3" v-model="chating" placeholder="what do you think ?">
              <button type="submit" class="btn btn-sm btn-primary">Send</button>
            </form>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Message',
  chating: '',
  computed: {
    get_title() {
      return this.$store.state.title
    },
    get_chat() {
      return this.$store.state.allMessage
    }
  },
  methods: {
    sendChat() {
      let chat = this.chating
      this.$socket.emit('sendMessage', chat)
      this.chating = ''
    }
  },
  sockets: {
    broadcastMessage(data) {
      this.$store.commit('SEND_MESSAGE', data)
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .glass {
      background-color: rgba(255, 255, 255, 0.06);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border: none;
  }
</style>
