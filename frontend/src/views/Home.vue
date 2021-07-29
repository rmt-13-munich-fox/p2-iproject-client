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
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name">
            {{room}}
          </h2>
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
        <div class="mainchat">
        <form id="chat-form" @submit.prevent="sendMessage">
          <vue-speech class="test" lang="id-ID" @onTranscriptionEnd="onEnd" />
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            v-model="inputMsg"
          />
          <button class="btn"><i class="fas fa-paper-plane" ></i> Send</button>
        </form>
        <div>
          <button class="btn range" @click.prevent="changeColor2"><i class="fas fa-microphone"
          :class="changeColor ? 'dark-mic' : 'light-mic'"
          ></i></button>
        </div>
      </div>
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
      room: localStorage.getItem("room"),
      changeColor: false,
      penampung: [],
      tag: false
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
      }, localStorage.room)
      localStorage.clear()
      this.$router.push("/")
    },
    sendMessage () {
      const data = {
        username: localStorage.getItem("username"),
        message: this.inputMsg 
      }
      this.$store.commit("PUSH_MESSAGE", data)
      this.$socket.client.emit("sendMessage", data, localStorage.room)
      this.inputMsg = ''
      this.penampung = []
      this.changeColor = false
      this.tag = false
    },
    onEnd: function ({ lastSentence, transcription }) {
      if (this.tag) {
        this.penampung.push(lastSentence);
        this.inputMsg = this.penampung.join(" ");
      } else {
        this.penampung = [];
      }
    },
    changeColor2() {
      this.changeColor = true
      this.tag = true
    },
  },
  computed: {
    messages() {
      if(localStorage.room === "Manga") {
        return this.$store.state.messagesMangaRoom
      } else {
        return this.$store.state.messagesAnimeRoom
      }
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

<style lang="css">

p {
  font-size: 20px;
  padding: 5px
}

.range {
  margin-left: 4px;
  padding-bottom: 10px;
}

.dark-mic {
  color: red;
}

.light-mic {
  color: orange;
}

.test {
  display: none;
}

.mainchat {
  display: flex;
  justify-content: space-evenly;
}

</style>
