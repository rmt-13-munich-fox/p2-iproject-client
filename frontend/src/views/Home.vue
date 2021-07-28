<template>
<div>
    <div>
      <iframe src="https://open.spotify.com/embed/playlist/3r89rFFV5vRq9JOvUXAs6l?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    <div class="chat-container">
      <header class="chat-header">
        <h1><i class="fas fa-smile"></i> Hacktiv8</h1>
        <a id="leave-btn" class="btn" @click="handleLogout">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <!-- <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name">
            {{room}}
          </h2> -->
          <h3><i class="fas fa-users"></i> Users</h3>
          <ul id="users" v-for="(user, i) in userLogins" :key="i">
            {{ user.username }}
          </ul>
        </div>
        <div class="chat-messages">
          <Chat v-for="(msg, i) in messages" :key="i" :message="msg"></Chat>
        </div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form" @submit.prevent="sendMessage">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            v-model="inputMsg"
          />
          <button class="btn"><i class="fas fa-paper-plane" ></i> Send</button>
          <button class="btn range"><i class="fas fa-microphone"></i></button>
          <vue-speech @onTranscriptionEnd="onEnd" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Chat from "../components/Chat.vue"
export default {
  name: 'Home',
  data() {
    return {
      inputMsg: "",
      username: localStorage.getItem("username"),
      room: localStorage.getItem("room")
    }
  },
  components: {
    Chat
  },
  sockets: {
    broadcastMessage(data) {
      // console.log(data, "<<<<");
      this.$store.commit("PUSH_MESSAGE", data)
    },
    newLogin(data) {
      this.$store.commit("PUSH_MESSAGE", data)
      // this.$store.dispatch("getUser")
    },
    logoutUser(data) {
      this.$store.commit("PUSH_MESSAGE", data)
    },
    updateUser(data) {
      this.$store.dispatch("getUser")
    }
  },
  methods: {
    handleLogout () {
      this.$store.dispatch("handleLogout")
      this.$socket.client.emit("leaveUser", {
        username: localStorage.getItem("username"),
        message: `${this.username} leave the chat` 
      })
      localStorage.clear()
      this.$router.push("/")
    },
    sendMessage () {
      const data = {
        username: localStorage.getItem("username"),
        message: this.inputMsg 
      }
      this.$store.commit("PUSH_MESSAGE", data)
      this.$socket.client.emit("sendMessage", data)
      this.inputMsg = ''
    },
    onEnd ({ lastSentence, transcription }) {
      console.log(lastSentence, transcription);
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages
    },
    userLogins() {
      // console.log(this.$store.state.userLogin);
      return this.$store.state.userLogin
    }
  },
  created() {
      this.$store.dispatch("getUser")
  }
}
</script>

<style scoped>

.range {
  margin-left: 7px;
}

</style>
