<template>
  <div class="news-card">
    <img v-if ="item.image" :src="item.image" alt="">
    <img v-else :src="item.image_url" alt="" />
    <div class="news-info">
      <div class="news-title">
        {{formatTitle(item.title)}}
      </div>
      <hr />
      <div class="news-description">
        <p>{{item.description}}</p>
      </div>
      <div class="card-menu">
        <div class="d-flex justify-content-start" style=" width:100%">
          <span class="badge badge-pill badge-primary" style="font-size:12px; padding-top:8px !important;background-color : #fff;color:#000;pointer-event:pointer">{{formatAuthor(item.author)}}</span>
          <span v-if= "item.Sentiment.sentiment == 'positive' " class="badge badge-pill badge-success" style="font-size:12px; padding-top:8px !important; margin-left:7px !important">{{item.Sentiment.sentiment}}</span>
          <span v-if= "item.Sentiment.sentiment == 'negative' " class="badge badge-pill badge-danger" style="font-size:12px; padding-top:8px !important; margin-left:7px !important">{{item.Sentiment.sentiment}}</span>
          <span v-if= "item.Sentiment.sentiment == 'neutral' " class="badge badge-pill badge-info" style="font-size:12px; padding-top:8px !important; margin-left:7px !important">{{item.Sentiment.sentiment}}</span>
        </div>
        <a v-if = "page !== '/search'" href="#">
          <i class="bx bx-heart"></i>
        </a>
        <a href="#">
          <i class="bx bx-user-voice"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props : ["item","bookmark"],
  data(){
    return{
      page : this.$route.path
    }
  },
  methods : {
    formatTitle(title){
      if(title.length >64){
        title = title.substring(0,60) + "..."
      }
      return title
    },
    formatAuthor(author){
      if(author.length >=20) return author.substring(0,16) + "..."
      else return author
    }
  }
};
</script>

<style scoped>
  .news-card{
    width: 25rem;
    margin : 20px 10px;
    transition: all 0.5s ease-out;
  }
  .sidebar.active ~ .home_content .news-card{
    width:350px;
  }
  .news-card img{
    min-width: 100% !important;
    width: 100px !important;
  }
  .news-card .news-info{
    min-height: 282px !important;
  }
  .news-card .news-title{
    height : 54px;
  }
</style>
