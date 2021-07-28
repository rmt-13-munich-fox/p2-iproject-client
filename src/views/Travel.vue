<template>
    <div>

    <div class="bg-image">
        <h1>Travel list</h1>
        <div class="color-overlay"></div>
    </div>
    <marquee class="container opacity-0h6 mt-2" style="background-color:#f7c2c2" width="60%" direction="left" height="50px">
        Due to Coronavirus outbreak and high number of active cases, Indonesia is currently on a lockdown until further notice...
    </marquee>

        <div class="main_content">

            <cards></cards>
        
        </div>
    </div>


    
</template>

<script>
import { mapActions } from 'vuex'
import Cards from "../components/Cards.vue"

export default {
    name: "Travel",
    components :{
        Cards
    },
    methods: {
        ...mapActions(["fetchAllCurrencies"])

    },
    created(){
        this.fetchAllCurrencies()
    }

}
</script>

<style scoped> 
.bg-image{
    background: url('../assets/bali.jpeg');
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
    
      /* parallax */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;

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