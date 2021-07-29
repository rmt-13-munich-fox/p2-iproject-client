<template>
  <div class="incoming_msg">
    <div class="incoming_msg_img">
      <img src="" alt="" srcset="" />
    </div>
    <div class="received_msg">
      <span class="time_date"></span>
      <div class="received_msg mb-3">
        <p>
          {{ msg.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncomingMessages",
  props: ["msg"]
};
</script>

<style></style>
