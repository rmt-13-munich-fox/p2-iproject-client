<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <form @submit.prevent="onSearch">
        <div class="m-4">
          <h4 class="bg-light">Youtube Search</h4>
        </div>
        <div class="mb-3">
          <input
            type="text"
            id="search"
            placeholder="youtube search"
            v-model="name.search"
            class="form-control"
            style="width"
          />
        </div>
        <div class="m-4">
          <button type="submit" class="btn btn-danger">Search</button>
        </div>
      </form>
    </div>
    <div
      class="row justify-content-md-center"
      v-for="(video, i) in youtube"
      :key="i"
    >
      <div class="card-deck m-4">
        <div class="col-md-4 ">
          <iframe
            :src="video.url"
            frameborder="0"
            width="560"
            height="315"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      name: {
        search: "",
        max: 10,
      },
    };
  },
  computed: {
    ...mapState(["youtube"]),
  },
  methods: {
    ...mapActions(["videoYoutube"]),
    onSearch() {
      const filter = this.name.search.split(" ").join("%20");
      this.videoYoutube(this.name);
    },
  },
};
</script>

<style></style>
