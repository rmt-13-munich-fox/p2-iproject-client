<template>
  <div>
    <Navbar />
    <router-view />
    <HFooter v-if="lastKeyword.length !== 0" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Navbar, HFooter },
  computed: {
    ...mapState(["lastKeyword"]),
  },
};
</script>

<style></style>
