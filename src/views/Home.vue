<template>
  <div>
    <result-search
      v-for="data in searchResult"
      :key="data.id"
      :data="data"
    ></result-search>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ResultSearch from "../components/ResultSearch.vue";

export default {
  name: "Home",
  components: { ResultSearch },
  computed: {
    ...mapState(["searchResult"]),
  },
};
</script>
