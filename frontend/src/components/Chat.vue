<template>
<div class="incoming_msg">
  <div class="incoming_msg_img">
    <img :src="`https://avatars.dicebear.com/api/bottts/${message.username}.svg`" alt="hahaha" width="50px">
  </div>
  <div class="received_msg">
    <span class="time_date username"> {{message.username}}</span>
    <div class="received_withd_msg mb-3 chatentity">
      <p><i class="fas fa-circle"></i> {{ message.message }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Chatbox',
  props: ["message"],
  computed: {
    messages() {
      return this.$store.state.messages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.username {
  font-weight: bold;
}

.chatentity {
  margin-left: 10px;
}
</style>
