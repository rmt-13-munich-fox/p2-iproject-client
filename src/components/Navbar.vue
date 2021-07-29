<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #5D5D5A;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Kerja.In</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click.prevent="toHome">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click.prevent="toMotivation">Motivation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toMotivation () {
      this.$router.push('/motivation')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
