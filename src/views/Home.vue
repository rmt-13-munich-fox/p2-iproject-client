<template>
  <div class="home">
    <div class="bg-image">
        <h1>Welcome to Bali</h1>
        <div class="color-overlay"></div>
    </div>
    <div class="container mt-3 mb-5">
        <marquee class="container opacity-0h6 mt-2" style="background-color:#f7c2c2" width="60%" direction="left" height="50px">
        Due to Coronavirus outbreak and high number of active cases, Indonesia is currently on a lockdown until further notice...
        </marquee>
        <div class="mt-5 mb-5 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505145.8976754123!2d114.7906671545118!3d-8.455316738718555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f7520fca7d3%3A0x2872b62cc456cd84!2sBali!5e0!3m2!1sen!2sid!4v1627358322675!5m2!1sen!2sid" width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    
    

    <div class="row">
        <div class="row col-8">
            <div class="par">
                <p>
                    Bali is more than an island with beautiful beaches. Travel around and chances are that you encounter one of the thousands of ceremonies held daily by the Balinese in order to keep the universe in balance. Even if there isn`t any celebration going on, temples are worth to visit because of their unique architecture. Residential areas and the layout of villages are chosen in function of the dominant Hindu religion, Bali social binder par excellence. You can otherwise take a walk in the countryside and be amazed by artfully landscaped green terraces that seem to go up to heaven at least up to the mountains, where the gods reside.
                </p>
            <div class="elfsight-app-034b5014-f81a-4739-9690-2bdf570c2f66"></div>
            </div>
        </div>


        <div class="col-4 list-sights">
            <h4 style="text-align: center">Sights & Stories</h4>
            <hr>
            <div>
              <homestorycard></homestorycard>
            </div>
        </div>

    </div>

    </div>
    <div class="whatsapp">
      <a href="https://wa.me/6282147575057" target="_blank" rel="noopener noreferrer" >  <i class="fab fa-whatsapp"></i>  </a>
    </div>

  </div>
</template>

<script>
import homestorycard from "../components/HomeStoryCard.vue"


let yourNumber = "+6282147575057"
let yourMessage = "Need Help now!"

export default {
  name: 'Home',
  components: {
    homestorycard
  },
  methods: {
      getLinkWhastapp(number, message) {
        number = yourNumber
        message = yourMessage.split(' ').join('%20')

        return ('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
      }
  }
}
</script>

<style scoped>
.opacity-0h6{
  /* opacity:0.4!important; */
  color:black;
  text-transform: capitalize;
  display: flex;
  justify-content: center;

}

.whatsapp {
  display: flex;
  flex-direction: row-reverse;
  font-size: 100px;
  position: sticky;

}

.bg-image {
  /* parallax */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
}

</style>
