<template>
  <div class="sidebar" :class ="active">
    <div class="logo_content">
      <div class="logo">
        <i class="bx bx-wink-smile"></i>
        <div class="logo_name">Smart News</div>
      </div>
      <i class="bx bx-menu" id="btn" @click = "toggleClassList"></i>
    </div>
    <ul class="nav_list">
      <li>
        <i class="bx bx-search"></i>
        <input type="text" placeholder="search a topic" />
        <!-- <span class="links_name">Dashboard</span> -->
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-news"></i>
          <span class="links_name">Headline</span>
        </a>
        <span class="tooltip">Headline</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-news"></i>
          <span class="links_name">Category</span>
        </a>
        <span class="tooltip">Category</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-heart"></i>
          <span class="links_name">saved</span>
        </a>
        <span class="tooltip">saved</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-pie-chart-alt-2"></i>
          <span class="links_name">Analytics</span>
        </a>
        <span class="tooltip">Analytics</span>
      </li>
      <!-- Sentiment -->
      <li>
        <a href="#" id="sentiment_links">
          <i class="bx bx-tachometer"></i>
          <span class="links_name">Sentiment analysis</span>
        </a>
        <span class="tooltip">Sentiment analysis</span>
      </li>
      <!-- Login register -->
      <li>
        <a href="#" id="login">
          <i class='bx bx-user-circle'></i>
          <span class="links_name">Login</span>
        </a>
        <span class="tooltip">Login</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img src="../assets/images/random_face.png" alt="" />
          <div class="name_job">
            <div class="name">John Doe</div>
            <div class="job">Johndoe@mail.com</div>
          </div>
        </div>
        <i class="bx bx-log-out" id="log_out"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data(){
    return {
      active : ""
    }
  },
  methods : {
    toggleClassList(){
      if(this.active == "") this.active = "active"
      else this.active = ""
    }
  }
};
</script>

<style scoped>
.bx-search{
  left : 0%;
}
#sentiment_links{
  line-height : 25px
}
#login{
  line-height : 50px;
}

</style>
