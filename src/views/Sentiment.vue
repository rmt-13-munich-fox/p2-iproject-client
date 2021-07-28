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
              v-model="text"
              name="text"
              id="input-analyze"
              placeholder=" Hacktiv8 is cool!"
            ></textarea>
            <a @click.prevent="analyzeInput(text)" href="#"
              ><i class="bx bxl-codepen"></i
            ></a>
          </div>
        </div>
        <div class="sentiment-output d-flex justify-content-center mb-2">
          <span v-if="sentiment === 'positive'" class= "badge badge-primary" style="font-size:1.2rem;">{{sentiment}}</span>
          <span v-if="sentiment === 'negative'" class= "badge badge-danger" style="font-size:1.2rem;">{{sentiment}}</span>
          <span v-if="sentiment === 'neutral'" class= "badge badge-info" style="font-size:1.2rem;">{{sentiment}}</span>
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
                    <td>{{positive_words}}</td>
                    <td>{{negative_words}}</td>
                    <td>{{comperative}}</td>
                    <td>{{score}}</td>
                    <td>{{sentiment}}</td>
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
                <p>{{tokens}}</p>
              </div>
            </div>
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

export default {
  name: "Sentiment",
  data() {
    return {
      text: "Hacktiv8 is great",

    };
  },
  methods: {
    analyzeInput(text) {
      this.$store.dispatch("analyzeInput", { description: text });
    },
    // formatTokens(tokens){
    //   tokens= tokens.split(",");

    // }
  },
  computed:{
    tokens(){
      return this.$store.state.resultAnalyze.tokens
    },
    comperative(){
      return this.$store.state.resultAnalyze.comperative
    },
    score(){
      return this.$store.state.resultAnalyze.score
    },
    positive_words(){
      return this.$store.state.resultAnalyze.positive_words
    },
    negative_words(){
      return this.$store.state.resultAnalyze.negative_words
    },
    sentiment(){
      return this.$store.state.resultAnalyze.sentiment
    }
  },
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
.sentiment-container{
  max-width: 95vw !important;
}
.sentiment-input {
  /* margin-top: -75px; */
}
</style>
