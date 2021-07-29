<template>
    <div>
        <div class="bg-image" id="bg-bg" :style=" 
        {background:'url('+travelDetail.image_url+')'}">
            <h1>{{travelDetail.name}}</h1>
            <div class="color-overlay"></div>
        </div>

        <marquee class="container opacity-0h6 mt-2" style="background-color:#f7c2c2" width="60%" direction="left" height="50px">
        Due to Coronavirus outbreak and high number of active cases, Indonesia is currently on a lockdown until further notice...
        </marquee>

        <plancards></plancards>

        <!-- <div class="pdf container mb-5">
            <button class="btn btn-primary" v-on:click.prevent="downloadPDF" >See pricing in PDF..</button>
        </div> -->

        <formpricing class="mb-5"></formpricing>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Plancards from "../components/PlanCards.vue"
import formpricing from "../components/formPricing.vue"


export default {
    name: "Plan",
    computed : {
        ...mapState(["plans", "travelDetail"])
    },
    components : {
        Plancards,
        formpricing
    },
    methods: {
        ...mapActions(["fetchPlan", "fetchTravelById"]),

        

    },
    created(){
        this.fetchPlan(this.$route.params.id)
        this.fetchTravelById(this.$route.params.id)
    }

}
</script>

<style scoped>

.bg-image{
    /* background: url('../assets/spot-terasering-sawah-tegalalang-bali-putrabalitour.jpeg'); */
    /* background-repeat: no-repeat;
    background-position: 100% 0; */
    padding: 30em;
    height: 100%;
    width: 100%;
    outline: 2px solid black;
    /* opacity: 0.5; */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    /* text-transform: uppercase; */
    position: relative;
    /* background-repeat: no-repeat;
    background-size: cover; */

      /* parallax */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    min-height: 500px;
}

/* #bg-bg {
    background-repeat: no-repeat !important;
    background-size: cover !important;
} */


.color-overlay {
    background: #022329;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    position: absolute;
}

/* .opacity-2{
    opacity: 0.4 !important;
} */

.bg-image h1 {
    font-size: 80px;
    font-family: Arial;
    z-index: 1;
}

.opacity-0h6{
  /* opacity:0.4!important; */
  color:black;
  text-transform: capitalize;
  display: flex;
  justify-content: center;

}


</style>