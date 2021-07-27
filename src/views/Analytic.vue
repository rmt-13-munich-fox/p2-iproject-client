<template>
  <div class="row">
    <Sidebar />
    <div class="home_content analytic_content">
      <div class="text text-title">
        <div class="title-category">
          <!-- Title -->
          <p>Headlines</p>
        </div>
      </div>
      <!-- Sentiment analysis tools -->
      <div class="sentiment-container analytics mt-5">
        <div class="sentiment-input d-flex align-items-center">
          <h3>Analytics</h3>
          <a href="#"><i class="bx bxl-codepen"></i></a>
        </div>
        <div class="sentiment-output">
          <h4>Positive</h4>
        </div>
        <div class="sentiment-analyze analytics-container">
          <div class="panel panel-default" style="padding-top:10px;">
            <div class="panel-heading">News data anlytics</div>
            <div class="panel-body">
              <div
                class="box-container d-flex align-items-center flex-wrap justify-content-center"
                style="padding-top:25px;padding: 25px;"
              >
                <div class="box-info" style="width:19rem">
                  1.245 News
                </div>
                <div class="box-info" style="width:19rem">
                  400 Positive
                </div>
                <div class="box-info" style="width:19rem">
                  300 Negative
                </div>
                <div class="box-info" style="width:19rem">
                  400 Neutral
                </div>
              </div>
            </div>
          </div>
          <div class="analytics-info text-center">
            <p style="font-size:17px; font-weight:bold">
              Each sentiment of news is calculated through dictionary approach
              (AFINN)
            </p>
            <p>
              While the accuracy provided by AFINN is quite good considering
              it's computational performance (see above) there is always room
              for improvement. Therefore the sentiment module is open to
              accepting PRs which modify or amend the AFINN / Emoji datasets or
              implementation given that they improve accuracy and maintain
              similar performance characteristics.
            </p>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="footer">
        <div class="footer-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fuga
            quia, aperiam quaerat hic culpa eum? Doloremque vero laborum, cumque
            optio quam dolor fuga maiores nobis iusto officiis commodi
            necessitatibus!
          </p>
        </div>
      </div>
    </div>
    <HFooter />
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Analytic",
  components: {
    HFooter,
    Sidebar,
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
.analytics-container{
  width : 95%;
}

.sentiment-input{
  margin-top: -75px;
}
</style>
