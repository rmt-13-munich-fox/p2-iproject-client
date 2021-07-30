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
      <h1 id="books-title" class="mb-5">BOOKS:</h1>
      <div class="container overflow-auto" id="books">
        <div class="row" v-for="book in books" :key="book.id">
          <BookCard :book="book"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BookCard from '../components/BookCard.vue'

export default {
  name: 'Motivation',
  components: {
    BookCard
  },
  created () {
    this.$store.dispatch('getNews')
      .then(({ data }) => {
        const news = data.articles[0]
        this.$store.commit('SET_NEWS', news)
      })
      .catch(err => {
        console.log(err.response)
      })
    this.$store.dispatch('getBooks')
      .then(({ data }) => {
        const bookImg = data.image_results
        console.log(bookImg)
        this.$store.commit('SET_BOOKS', bookImg)
      })
      .catch(err => {
        console.log(err.response)
      })
  },
  computed: {
    news () {
      return this.$store.state.news
    },
    books () {
      return this.$store.state.books
    }
  }
}
</script>

<style>
#home {
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

#books {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#books-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
