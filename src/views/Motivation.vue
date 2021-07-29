<template>
<div class="home container">
    <div class="col-12" id="motivation-page">
      <div style="margin: 40px 20% 30px 20%; width: 60%; text-align: center; padding: 25px; border: 1px solid #ffffff;">
        <h1 style="margin-bottom: 20px;">Daily News</h1>
        <h2 style="margin-bottom: 20px;">{{ news.title }}</h2>
        <h3 style="margin-bottom: 20px;">{{ news.description }}</h3>
        <a :href="news.url"></a>
        <p style="text-align: center; padding-bottom: 10px;">{{ news.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Motivation',
  created () {
    this.$store.dispatch('getNews')
      .then(({ data }) => {
        const news = data.articles[0]
        console.log(news)
        this.$store.commit('SET_NEWS', news)
      })
      .catch(err => {
        console.log(err.response)
      })
  },
  computed: {
    news () {
      return this.$store.state.news
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#motivation-page {
  background-color: #FFCDAB;
  height: 200vh;
  width: 95vw;
}
</style>
