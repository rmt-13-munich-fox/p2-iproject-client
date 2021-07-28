<template>
  <div class="d-flex justify-content-center align-items-center">
    <div v-for="(video, i) in youtube" :key="i">
      <iframe
        :src="video.url"
        frameborder="0"
        width="420"
        height="315"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  nane: "CarVideo",
  computed: {
    ...mapState(['youtube'])
  },
  methods: {
    ...mapActions(['videoYoutube'])
  }
};
</script>

<style scoped>

</style>
