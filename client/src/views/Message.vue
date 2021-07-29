<template>
  <div>
    <h2>Share something <em>live</em></h2>
    <h6>other people will see what you share</h6>
    <div class="row mt-4">
      <div class="col-md-12">
          <div class="container">
            <form @submit.prevent="sendChat" class="mb-5">
              <input type="text" class="form-control glass text-white mb-3" v-model="chating" placeholder="what do you think ?">
              <button type="submit" class="btn btn-sm btn-primary">Send</button>
            </form>
            <Card class="glass mt-2" v-for="(item, index) in get_chat.slice().reverse()" :key="index" :chat="item"/>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Card from '../components/card.vue'
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
      let username = localStorage.username
      let chat = this.chating
      this.$socket.emit('sendMessage', chat, username)
      this.chating = ''
    }
  },
  sockets: {
    broadcastMessage(chat, username) {
      this.$store.commit('SEND_MESSAGE', chat, username)
    }
  },
  components: {
    Card
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
