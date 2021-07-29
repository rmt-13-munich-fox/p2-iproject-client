<template>
  <div class="sidebar" :class="active">
    <div class="logo_content">
      <div class="logo">
        <i class="bx bx-wink-smile"></i>
        <div class="logo_name">Smart News</div>
      </div>
      <i class="bx bx-menu" id="btn" @click="toggleClassList"></i>
    </div>
    <ul class="nav_list">
      <li>
        <i @click="toggleClassList" class="bx bx-search"></i>
        <input v-on:keyup.enter="searchNews" v-model="keyword" type="text" placeholder="search a topic" />
        <!-- <span class="links_name">Dashboard</span> -->
      </li>
      <li>
        <router-link to="/">
          <i class="bx bxs-news"></i>
          <span class="links_name">Headline</span>
        </router-link>
        <span class="tooltip">Headline</span>
      </li>
      <!-- <li>
        <a href="#">
          <i class="bx bx-news"></i>
          <span class="links_name">Category</span>
        </a>
        <span class="tooltip">Category</span>
      </li> -->
      <li>
        <router-link to="/bookmark">
          <i class="bx bx-heart"></i>
          <span class="links_name">saved</span>
        </router-link>
        <span class="tooltip">saved</span>
      </li>
      <li>
        <router-link to="/analytic">
          <i class="bx bx-pie-chart-alt-2"></i>
          <span class="links_name">Analytics</span>
        </router-link>
        <span class="tooltip">Analytics</span>
      </li>
      <!-- Sentiment -->
      <li>
        <router-link to="/sentiment-analysis" id="sentiment_links">
          <i class="bx bx-tachometer"></i>
          <span class="links_name">Sentiment analysis</span>
        </router-link>
        <span class="tooltip">Sentiment analysis</span>
      </li>
      <!-- Login register -->
      <li v-if="!isLoggedIn">
        <router-link to="/login" id="login">
          <i class="bx bx-user-circle"></i>
          <span class="links_name">Login</span>
        </router-link>
        <span class="tooltip">Login</span>
      </li>
      <li v-if="!isLoggedIn">
        <router-link to="/register" id="login">
          <i class="bx bx-user-circle"></i>
          <span class="links_name">Register</span>
        </router-link>
        <span class="tooltip">Register</span>
      </li>
    </ul>
    <div v-if="isLoggedIn" class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img src="../assets/images/Logoprof.png" alt="" />
          <div class="name_job">
            <div class="name">John Doe</div>
            <div class="job">{{email}}</div>
          </div>
        </div>
        <a @click.prevent="handleLogout" href="#"
          ><i
            class="bx bx-log-out"
            id="log_out"
            style="color:white;text-decoration:none;font-size:25px;bottom:10px;"
          ></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "../main.js"
export default {
  name: "Sidebar",
  data() {
    return {
      active: "active",
      keyword : ""
    };
  },
  methods: {
    toggleClassList() {
      if (this.active == "") this.active = "active";
      else this.active = "";
    },
    handleLogout() {
      localStorage.clear();
      Vue.$toast.success("Logged out",{position :"top-right"})
      this.$store.commit("SET_ACCESS_TOKEN", "");
    },
    backToHome(){
      this.$router.push("/").catch(()=>{})
    },
    searchNews(){
      console.log(this.keyword)
      this.$store.commit("SET_KEYWORD_NEWS",this.keyword)
      this.$store.dispatch("searchByKeyword",this.keyword)
      this.$router.push("/search").catch(()=>{})
      this.keyword = ""
    }
  },
  computed: {
    isLoggedIn() {
      if(!this.$store.state.access_token && this.$route.path === "/bookmark"){
        return this.backToHome()
      }else{
        return this.$store.state.access_token;
      }
    },
    email() {
      return this.$store.state.email;
    }
  },
  created (){
    if(localStorage.email) this.$store.commit("SET_EMAIL",localStorage.email);
    if(localStorage.access_token) this.$store.commit("SET_ACCESS_TOKEN",localStorage.access_token);
  }
};
</script>

<style scoped>
.bx-search {
  left: 0%;
}
#sentiment_links {
  line-height: 25px;
}
#login {
  line-height: 50px;
}
</style>
