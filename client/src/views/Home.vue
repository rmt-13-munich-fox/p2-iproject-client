<template>
<div>
        <div class="container mt-5">
            <div class="row text center">
                <div class="col">
                    <h1>Movie List</h1>
                </div>
            </div>
                  <CardMenu>
                  </CardMenu>
        </div>

</div>
</template>

<script>
// @ is an alias to /src
import CardMenu from '../components/CardMenu.vue'


export default {
  name: 'Home',
  components: {
    CardMenu,
    FilterPage,
    Pagination
  },
  created() {
    if (!localStorage.access_token) {
      this.$store.commit('LOGIN_STATUS', false)
    } else {
      this.$store.commit('LOGIN_STATUS', true)
    }
  }
}

</script>
