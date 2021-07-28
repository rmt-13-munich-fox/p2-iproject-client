<template>
    <div class="chat-container">
      <header class="chat-header">
        <h1><i class="fas fa-smile"></i> ChatCord</h1>
        <a id="leave-btn" class="btn" @click="handleLogout">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name">
            {{room}}
          </h2>
          <h3><i class="fas fa-users"></i> Users</h3>
          <ul id="users">
            {{username}}
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
        </form>
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
  methods: {
    handleLogout () {
      localStorage.clear()
      this.$router.push("/")
    },
    sendMessage () {
      const data = {
        username: localStorage.getItem("username"),
        message: this.inputMsg 
      }
      console.log(data);
      this.$store.commit("PUSH_MESSAGE", data)
      // this.$socket.client.emit("sendMessage", data)
      this.inputMsg = ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  }
}
</script>

<style scoped>


</style>
