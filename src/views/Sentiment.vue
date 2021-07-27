<template>
  <div class="row">
    <Sidebar />
    <div class="home_content">
      <div class="text text-title">
        <div class="title-category">
          <!-- Title -->
          <p>Sentiment analysis</p>
        </div>
      </div>
      <!-- Sentiment analysis tools -->
      <div class="sentiment-container mt-5">
        <div class="sentiment-input col-md-5">
          <h3>Analyze your custom text</h3>
          <div class="d-flex align-items-center">
            <textarea
              name=""
              id="input-analyze"
              placeholder=" Hacktiv8 is cool!"
            ></textarea>
            <a href="#"><i class="bx bxl-codepen"></i></a>
          </div>
        </div>
        <div class="sentiment-output">
          <h4>Positive</h4>
        </div>
        <div class="sentiment-analyze">
          <!-- Table -->
          <div class="panel panel-default">
            <div class="panel-heading">Sentiment analysis output</div>
            <div class="panel-body">
              <table class="table">
                <thead style="color:#fff">
                  <tr>
                    <th style="color:green">Positive words</th>
                    <th style="color:red">Negative words</th>
                    <th>Comperative</th>
                    <th>Score</th>
                    <th>Sentiment</th>
                  </tr>
                </thead>
                <tbody style="color:#ffff">
                  <tr>
                    <td>Optimism, Spirit, Brave</td>
                    <td>Riot, Hate</td>
                    <td>1.243</td>
                    <td>5</td>
                    <td>Positive</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Tokens and stop words -->
          <div class="panel panel-default">
            <div class="panel-heading">Tokens</div>
            <div class="panel-body">
              <div id="list-tokens">
                <span
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum accusantium exercitationem, totam, iste cupiditate,
                  magni doloribus ad quisquam unde quam atque perspiciatis
                  praesentium iure! Qui velit eum incidunt consequatur in nisi!
                  Dicta magnam, repellendus iure enim laboriosam doloremque
                  reiciendis cumque reprehenderit inventore laborum et
                  voluptatem aperiam suscipit exercitationem tenetur ab!</span
                >
              </div>
            </div>
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
  name: "Sentiment",
  components: {
    HFooter,
    Sidebar
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
  /* margin-top: -75px; */
}
</style>
