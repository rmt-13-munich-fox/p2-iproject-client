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
        <div class="sentiment-input col-md-8 mt-5">
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
        <div  class="sentiment-output d-flex justify-content-center mb-2 mt-3">
          <span
            v-if="sentiment === 'positive'"
            class="badge badge-primary"
            style="font-size:1.2rem;"
            >{{ sentiment }}</span
          >
          <span
            v-if="sentiment === 'negative'"
            class="badge badge-danger"
            style="font-size:1.2rem;"
            >{{ sentiment }}</span
          >
          <span
            v-if="sentiment === 'neutral'"
            class="badge badge-info"
            style="font-size:1.2rem;"
            >{{ sentiment }}</span
          >
        </div>
        <div v-if="isClicked === true" class="sentiment-analyze">
          <!-- Table -->
          <div class="panel panel-default mt-5">
            <div class="panel-heading">
              <h4 class="mt-3">Sentiment analysis output</h4>
            </div>
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
                  <tr style="word-wrap: break-word;">
                    <td>{{ positive_words }}</td>
                    <td>{{ negative_words }}</td>
                    <td>{{ comperative }}</td>
                    <td>{{ score }}</td>
                    <td>{{ sentiment }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Tokens and stop words -->
          <div style="word-wrap: break-word; max-width:100%">
            <h4 class = "text-center mt-5">List tokens</h4>
            <div id="list-tokens">
              {{ tokens }}
            </div>
          </div>
          <!-- Stop words -->
          <div style="word-wrap: break-word; max-width:100%">
            <h4 class = "text-center mt-5">List Stopwords</h4>
            <div id="list-tokens">
              {{ stopWords }}
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
      isClicked : false
    };
  },
  methods: {
    analyzeInput(text) {
      this.showResult()
      this.$store.dispatch("analyzeInput", { description: text });
    },
    showResult(){
      this.isClicked = true;
    }
  },
  computed: {
    tokens() {
      return this.$store.state.resultAnalyze.tokens.split(",").join(", ");
    },
    stopWords() {
      return this.$store.state.resultAnalyze.stop_words.split(",").join(", ");
    },
    comperative() {
      return this.$store.state.resultAnalyze.comperative;
    },
    score() {
      return this.$store.state.resultAnalyze.score;
    },
    positive_words() {
      return this.$store.state.resultAnalyze.positive_words;
    },
    negative_words() {
      return this.$store.state.resultAnalyze.negative_words;
    },
    sentiment() {
      return this.$store.state.resultAnalyze.sentiment;
    }
  },
  components: {
    HFooter,
    Sidebar
  }
};
</script>

<style scoped>
table{
    table-layout: fixed !important;
}
td{
    word-wrap:break-word !important;
}
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
.sentiment-container {
  max-width: 75vw !important;
  overflow-y : scroll !important;
  max-height: 90vh !important;
  justify-content: start !important;
  transition: all 5.5s ease !important;
}
.sentiment-analyze{
  transition: all 5.5s ease !important;
}

#list-tokens {
  max-height: 500px !important;
}
</style>
