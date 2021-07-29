<template>
  <div class="card w-100">
    <div class="msgHistory">
      <IncomingMsg
        v-for="(msg, index) in messages"
        :key="index"
        :msg="msg"
      ></IncomingMsg>
    </div>
    <div class="typeMessage">
      <div class="writtenMessage d-flex flex-column">
        <input
          type="text"
          class="writeMessage p-3"
          placeholder="Type a message"
          v-model="inputMsg"
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage" type="button" class="btn">
          <i class="fas fa-check-square"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IncomingMsg from "@/components/IncomingMessages.vue";

export default {
  name: "MessageBox",
  components: {
    IncomingMsg
  },
  data() {
    return {
      inputMsg: ""
    };
  },
  sockets: {
    broadcastMsg(data) {
      this.$store.commit("PUSH_MESSAGE", data);
    }
  },
  methods: {
    sendMessage() {
      const data = {
        username: "abah",
        message: this.inputMsg
      };
      this.$socket.emit("sendMessage", data);
      this.inputMsg = "";
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    }
  }
};
</script>

<style></style>
