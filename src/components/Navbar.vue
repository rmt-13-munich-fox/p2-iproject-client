<template>
  <nav
    v-if="isLogin === true"
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="background-color: #c71585 !important"
  >
    <div class="container">
      <img
        @click.prevent="dashboard()"
        src="../assets/logo.png"
        alt="nav-logo"
        class="rounded"
        style="height: 50px"
      />
      <div class="me-auto"></div>
      <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            @click.prevent="match()"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Match</a
          >
        </li>
        <li class="nav-item">
          <a
            @click.prevent="logout()"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    match() {
      this.$router.push({ name: "Match" });
    },
    addCourse() {
      this.$router.push({ name: "AddCourse" });
    },
    dashboard() {
      this.$router.push({ name: "Dashboard" });
    }
  }
};
</script>

<style></style>
