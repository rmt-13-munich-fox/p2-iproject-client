<template>
  <div class="d-flex container my-5 justify-content-center">
    <ProfileCard></ProfileCard>
    <div class="d-flex ms-3 w-100">
      <MessageBox></MessageBox>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import MessageBox from "@/components/MessageBox.vue";

export default {
  name: "Match",
  components: {
    ProfileCard,
    MessageBox
  }
};
</script>

<style></style>
