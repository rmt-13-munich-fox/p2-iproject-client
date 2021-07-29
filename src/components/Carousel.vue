<template>
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="img-fluid" src="@/assets/homepage_photo2.jpg" alt="fashion">

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>It's all about beauty</h1>
            <p>Check artikel-artikel kami soal kecantikan, make up, dan fashion !</p>
            <p><router-link to="/all" class="btn btn-lg button-color" href="#">Read Blog Articles</router-link></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="img-fluid" src="@/assets/homepage_photo3.jpg" alt="fashion">
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Lorem Ipsum </h1>
            <div class="carousel-paragraph-width">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <p><a @click="handleCarouselBtn()" class="btn btn-lg button-color" href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  methods: {
    handleCarouselBtn () {
      const accessToken = localStorage.getItem('access_token')
      if (accessToken) {
        console.log("You've already created an account")
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style>
  .carousel-item{
    height: 100vh;
    min-height: 300px;
    background: no-repeat scroll center scroll;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .carousel-item::before{
    content: '';
    display: block;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: #000;
    opacity: 0.3;
  }
  .carousel-caption{
    bottom: 150px;
  }
  .carousel-paragraph-width{
    width: 40%;
  }
  .button-color{
    background-color: #FF7C96;
  }
</style>
