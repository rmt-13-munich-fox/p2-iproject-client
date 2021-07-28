<template>
  <nav aria-label="Page navigation example" class="pagination">
    <ul class="pagination">
      <li @click="previousPage" class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li @click="setCurrentPage(i)" v-for="(i, index) in totalPages" :key="index" class="page-item">
        <!-- left -->
        <a v-if="i-currentPage <=3 && i-currentPage >0 &&i <= totalPages-3" class="page-link" href="#">{{i}}</a>
        <!-- right -->
        <!-- <a v-else-if="i>=totalPages-2" class="page-link" href="#">{{i}}</a> -->
      </li>
      <span style="margin-right :20px;"></span>
      <li @click="setCurrentPage(i)" v-for="(i, index) in totalPages" :key="index+9999" class="page-item">
        <!-- left -->
        <!-- <a v-if="i-currentPage <=3 && i-currentPage >0" class="page-link" href="#">{{i}}</a> -->
        <!-- right -->
        <a v-if="i>=totalPages-2" class="page-link" href="#">{{i}}</a>
      </li>
      <li @click="nextPage" class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  data(){
    return {
      counterDot : 0
    }
  },
  methods: {
    setCurrentPage(i){
      console.log(i)
      this.$store.commit("SET_CURRENT_PAGE",i-1)
      this.fethHeadlines()
    },
    previousPage(){
      if(this.currentPage > 0) this.$store.commit("SET_CURRENT_PAGE",this.$store.state.currentPage-1)
    },
    nextPage(){
      console.log(this.currentPage)
      if(this.currentPage !== this.totalPages-1) this.$store.commit("SET_CURRENT_PAGE",this.$store.state.currentPage+1)
    },
    doNothing(){
      console.log('hehe')
    },
    fethHeadlines(){
      this.$store.dispatch("fetchHeadlines",this.$store.state.currentSentiment)
    }
  },
  computed: {
    totalPages() {
      return this.$store.state.totalPages;
    },
    currentPage() {
      return this.$store.state.currentPage;
    }
  }
};
</script>

<style scoped>
.pagination {
  width: 100%;
  display: flex;
  justify-content: center !important;
  align-items: end !important;
  padding-top: 18px;
}
.pagination ul li a {
  background-color: #363266 !important;
  color: #ffff;
}
ul li a:active {
  background-color: #fff !important;
  color: black;
}
</style>
