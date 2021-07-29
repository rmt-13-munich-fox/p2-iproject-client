<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">HackCar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a
          class="nav-item nav-link active"
          href="#"
          @click.prevent="linkTo('/car')"
          >Home <span class="sr-only">(current)</span></a
        >
        <a class="nav-item nav-link" href="#" @click.prevent="linkTo('/chat')"
          >Discussion</a
        >
        <a
          class="nav-item nav-link"
          href="#"
          @click.prevent="linkTo('/profile')"
          >Profile</a
        >
        <a
          class="nav-item nav-link"
          href="#"
          @click.prevent="linkTo('/favorites')"
          >Favorites</a
        >
        <a class="nav-item nav-link" href="#" @click.prevent="linkTo('/search')"
          >Search</a
        >
        <div class="d-flex justify-content-end">
            <a class="nav-item nav-link" href="#" @click.prevent="logOut">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "navbar",
  methods: {
    ...mapMutations({
        stateLog: 'STATE_LOGGED'
    }),
    linkTo(path) {
      this.$router.push(path);
    },
    logOut() {
      const obj = {
        id: localStorage.getItem("id"),
        status: "off",
      };
      this.$socket.client.emit("Login", obj);
      localStorage.clear();
      this.stateLog(false)
      this.$router.push('/login')
    },
  },
};
</script>

<style></style>
