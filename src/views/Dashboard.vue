<template>
  <div class="d-flex container my-5 justify-content-center">
    <Profile></Profile>
    <div class="d-flex ms-3 flex-column">
      <Forum class="mb-3 w-100 h-100"></Forum>
      <TopPicks class="w-100 h-100"></TopPicks>
    </div>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
import TopPicks from "../components/TopPicks.vue";
import Forum from "../components/Forum.vue";

export default {
  name: "Dashboard",
  components: {
    Profile,
    TopPicks,
    Forum
  }
};
</script>

<style></style>
