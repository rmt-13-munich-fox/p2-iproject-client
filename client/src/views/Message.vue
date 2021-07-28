<template>
  <div>
    <h2>{{get_title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Message',
  computed: {
    get_title () {
      return this.$store.state.title
    }
  },
  components: {
  }
}
</script>

<style>

</style>
