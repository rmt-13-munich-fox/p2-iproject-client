<template>
  <div class ="row">
    <Sidebar/>
    <div class="home_content">
      <div class="text text-title">
        <div class="title-category">
          <!-- Title -->
          <p>Headlines</p> 
        </div>
        <div class="news-navigation">
        </div>
        <div class="col-12 d-flex" style="min-width:100vw !important ;background-color:#ffff;color:black; font-size:14px;padding-top:15px;">
          <label for="filter" style="padding:2px;">Filter</label>
          <select v-model ="filter" @change = "fetchHeadlinesByFilter" name="filter" id="filter" style="height:25px">
            <option value="all">All</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>
      </div>
      <!-- News Content -->
      <div class="news-content" style="margin-left:10px">
        <!-- News Card -->
        <Card v-for = "headline in headlines" :key="headline.id" :item="headline"/>
        <Pagination/>
      </div>
    </div>
      <HFooter/>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Card from '../components/Card.vue'
import Sidebar from '../components/Sidebar.vue'
import Pagination from '../components/Pagination.vue'
export default {
  name: 'Home',
  data(){
    return {
      filter : "all"
    }
  },
  components: {
    HFooter,
    Card,
    Sidebar,
    Pagination
  },
  methods : {
    fetchHeadlines(){
      this.$store.dispatch("fetchHeadlines","all")
    },
    fetchHeadlinesByFilter(){
      this.$store.dispatch("fetchHeadlines",this.filter)
    }
  },
  computed : {
    headlines(){
      return this.$store.state.headlines.rows
    },
  },
  created(){
    if(localStorage.access_token) this.$store.commit("SET_ACCESS_TOKEN",localStorage.access_token)
    this.fetchHeadlines()
  }
}
</script>

<style scoped>
.footer-h8{
  position: fixed !important;
  left: 76px !important;
  bottom: 0px !important;
  width: calc(100% - 76px) !important;
	height: 60.5px !important;
  background-color: #1d1b31 !important;
  transition: all 0.5s ease;
}
.home_content{
  top :0%;
}
.sidebar.active ~ .footer-h8{
  width : calc(100% - 210px) !important;
	width: calc(100% - 210px) !important;
	margin-left: 164px;
}

.news-content{
  min-height: 75%;
}

.row{
  min-width: 100vw !important;
  min-height: 100vh !important;
}

</style>
