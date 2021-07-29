<template>
  <nav aria-label="Page navigation example" class="pagination">
    <ul v-if = "totalPages !== 1" class="pagination">
      
      
      <li @click="previousPage" class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li @click="setCurrentPage(i)" v-for="(i, index) in totalPages" :key="index" class="page-item">
        <!-- left -->
        <a v-if="i-currentPage <=3 && i-currentPage >0 &&i <= totalPages-3" class="page-link" href="#">{{i}}</a>
        <!-- right -->
        <!-- <a v-else-if="i>=totalPages-2" class="page-link" href="#">{{i}}</a> -->
      </li>
      <span style="margin-right :20px;"></span>
      <label id = "goto-label" for="goto" style="color:#fff; margin-right:8px">Go to </label>
      <input v-on:keyup.enter="setGoTo" v-model="goTo" type="text" placeholder="1" id = "goto">
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
      counterDot : 0,
      goTo : "1"
    }
  },
  methods: {
    setGoTo(){
      if(this.goTo < 1) this.goTo = 1
      if(this.goTo > this.totalPages) this.goTo = this.totalPages
      if(this.$route.path === "/"){
        this.$store.commit("SET_CURRENT_PAGE",+this.goTo-1)
        this.fetchHeadlines()
      }else{
        this.$store.commit("SET_CURRENT_PAGE",+this.goTo-1)
        this.fetchBookmark()
      }
    },
    setCurrentPage(i){
      console.log(i)
      if(this.$route.path === "/"){
        this.$store.commit("SET_CURRENT_PAGE",i-1)
        this.fetchHeadlines()
      }else{
        this.$store.commit("SET_CURRENT_PAGE",i-1)
        this.fetchBookmark()
      }
    },
    previousPage(){
      if(this.$route.path === "/"){
        if(this.currentPage > 0) this.$store.commit("SET_CURRENT_PAGE",this.$store.state.currentPage-1)
        this.fetchHeadlines()
      }else{
        if(this.currentPage > 0) this.$store.commit("SET_CURRENT_PAGE",this.$store.state.currentPage-1)
        this.fetchBookmark()
      }
    },
    nextPage(){
      if(this.$route.path === "/"){
        if(this.currentPage !== this.totalPages-1) this.$store.commit("SET_CURRENT_PAGE",this.$store.state.currentPage+1)
        this.fetchHeadlines()
      }else{
        if(this.currentPage !== this.totalPages-1) this.$store.commit("SET_CURRENT_PAGE",this.$store.state.currentPage+1)
        this.fetchBookmark()
      }
    },
    doNothing(){
      console.log('hehe')
    },
    fetchHeadlines(){
      this.$store.dispatch("fetchHeadlines",this.$store.state.currentSentiment)
    },
    fetchBookmark(){
      this.$store.dispatch("fetchBookmarks",this.$store.state.currentSentiment)
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
#goto{
  height:38px;
  text-align: center;
  font-size : 18px;
  width: 65px;;
}
@media screen and (max-width:700px){
  .pagination{
    font-size :12px;
    margin : 5 5px;
  }
  #goto{
    height : 34px;
    width : 30px;
  }
  #goto-label{
    display : none
  }
}
</style>
