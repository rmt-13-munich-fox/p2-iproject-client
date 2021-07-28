<template>
    <div>
        <div class="bg-image" id="bg-bg" :style=" 
        {background:'url('+detailStory.image_url+')'}">
            <h1>{{detailStory.name}}</h1>
            <div class="color-overlay"></div>
        </div>

        <marquee class="container opacity-0h6 mt-2" style="background-color: #f7c2c2" width="60%" direction="left" height="50px">
        Due to Coronavirus outbreak and high number of active cases, Indonesia is currently on a lockdown until further notice...
        </marquee>

        <div class="container mt-5 mb-5">
            <div>
                <p class="par">
                    {{detailStory.descriptions}}
                </p>
            </div>

        </div>

    </div>
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
    name: "Detail",
    computed: {
        ...mapState(["detailStory"])
    },
    methods:{
        ...mapActions(["fetchStoryById"]),


    },

    created(){
        this.fetchStoryById(this.$route.params.id)
    }
}
</script>

<style scoped>

.bg-image{
    /* background: url('../assets/Tempat-Tinggal-Terbaik-di-Bali.jpeg'); */
    /* background-repeat: no-repeat; */
    /* background-position: 100% 0; */
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
    
  /* parallax */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;

}

#bg-bg {
    background-repeat: no-repeat !important;
    background-size: cover !important;
}  

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