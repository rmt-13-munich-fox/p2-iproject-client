<template>
  <div class="row">
    <Sidebar />
    <div class="home_content analytic_content">
      <div class="text text-title">
        <div class="title-category">
          <!-- Title -->
          <p>Overview of all news</p>
        </div>
      </div>
      <!-- Sentiment analysis tools -->
      <div class="sentiment-container analytics mt-2">
        <div class="sentiment-input d-flex align-items-center">
          <h3>Analytics</h3>
          <a href="#"><i class="bx bxl-codepen"></i></a>
        </div>
        <div class="sentiment-analyze analytics-container">
          <div class="panel panel-default" style="padding-top:10px;">
            <div class="panel-heading">
              <p style="margin-top:20px; padding:25px;">
                News data anlytics
              </p>
            </div>
            <div class="panel-body">
              <!-- here   -->
              <div class="container d-flex justify-content-center">
                <img :src="getImage" width = "550" alt="">
              </div>
              <div
                class="box-container d-flex align-items-center flex-wrap justify-content-center"
                style="padding-top:25px;padding: 25px;"
              >
                <div class="box-info first" style="width:19rem; height:150px">
                  <span style="margin-right : 5px">Total News</span>
                  <AnimatedNumber
                    :value="statistic.totalNews"
                    :duration="500"
                    :round="1"
                  />
                </div>
                <div class="box-info second" style="width:19rem;height:150px">
                  <span style="margin-right : 5px">Positive</span>
                  <AnimatedNumber
                    :value="statistic.positiveNews"
                    :duration="500"
                    :round="1"
                  />
                </div>
                <div class="box-info third" style="width:19rem;height:150px">
                  <span style="margin-right : 5px">Negative</span>
                  <AnimatedNumber
                    :value="statistic.negativeNews"
                    :duration="500"
                    :round="1"
                  />
                </div>
                <div class="box-info fourth" style="width:19rem;height:150px">
                  <span style="margin-right : 5px">Neutral</span>
                  <AnimatedNumber
                    :value="statistic.neutralNews"
                    :duration="500"
                    :round="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="analytics-info text-center">
            <p style="font-size:17px; font-weight:bold" class="mt-2">
              Each sentiment of news is calculated through dictionary approach
              (AFINN)
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <HFooter />
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import Sidebar from "../components/Sidebar.vue";
import AnimatedNumber from "animated-number-vue";
export default {
  name: "Analytic",
  components: {
    HFooter,
    Sidebar,
    AnimatedNumber
  },
  data() {
    return {
      flag: false,
      imgSrc: ""
    };
  },
  methods: {
  },
  computed: {
    statistic() {
      return this.$store.state.statistic;
    },
    getImage(){
      if(this.$store.state.image == "") return ""
      else return this.$store.state.image.url
    }
  },
  created() {
    this.$store.dispatch("updateNewsStatistic");
  }
};
</script>

<style scoped>
.footer-h8 {
  position: fixed !important;
  left: 76px !important;
  bottom: 0px !important;
  width: calc(100% - 76px) !important;
  height: 60.5px !important;
  background-color: #1d1b31 !important;
  transition: all 0.5s ease;
}
.home_content {
  top: 0%;
}
.sidebar.active ~ .footer-h8 {
  width: calc(100% - 210px) !important;
  width: calc(100% - 210px) !important;
  margin-left: 164px;
}

.news-content {
  min-height: 75%;
}

.row {
  min-width: 100vw !important;
  min-height: 100vh !important;
}
.analytics-container {
  width: 95%;
}

.sentiment-input {
  margin-top: -75px;
}
</style>
