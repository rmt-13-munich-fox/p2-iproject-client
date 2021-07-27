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
          <!-- Sub Navbar -->
          <ul>
            <li>
              <a href="#">#Headlines</a>
            </li>
            <li>
              <a href="#">#Postive news</a>
            </li>
            <li>
              <a href="#">#Negative news</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- News Content -->
      <div class="news-content">
        <!-- News Card -->
        <Card v-for = "i in 8" :key="i" />
      </div>
    </div>
      <HFooter/>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Card from '../components/Card.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    HFooter,
    Card,
    Sidebar
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
