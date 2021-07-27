<template>
  <div class ="row">
    <Sidebar/>
    <div class="home_content">
      <div class="text text-title">
        <div class="title-category">
          <!-- Title -->
          <p>Your bookmark list</p> 
        </div>
        <!-- <div class="news-navigation">
        </div> -->
        <div class="col-12 d-flex" style="min-width:100vw !important ;background-color:#ffff;color:black; font-size:14px;padding-top:15px;">
          <label for="filter" style="padding:2px;">Filter</label>
          <select name="filter" id="filter" style="height:25px">
            <option value="all">All</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="netural">Neutral</option>
          </select>
        </div>
      </div>
      <!-- News Content -->
      <div class="news-content" style="margin-left:10px">
        <!-- News Card -->
        <Card v-for = "i in 8" :key="i" />
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
  name: 'Bookmark',
  components: {
    HFooter,
    Card,
    Sidebar,
    Pagination
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
.example{

  }
</style>
