<template>
    <div>
        <div class="bg-image">
            <h1>VISA</h1>
            <div class="color-overlay"></div>
        </div>

        <marquee class="container opacity-0h6 mt-2" style="background-color:#f7c2c2" width="60%" direction="left" height="50px">
        Due to Coronavirus outbreak and high number of active cases, Indonesia is currently on a lockdown until further notice...
        </marquee>

        <div class="container mt-5 mb-5" style="border: 1px solid green; box-shadow: 5px 10px grey;">
            <div class="row mt-5 mb-5">
            <div class="col-6 ">
                <h1>VISA-UPON-ARRIVAL</h1>
                    <p class="par1">
                        USD 35 for thirty-day non-extendable visa. We recommend any visitor wishing to purchase this type of visa upon arrival, to carry the exact amount of USD in cash money (notes only). Credit card payments as payments in another currency than USD, are allowed, but may lead to unnecessary delays. This type of visa is non-extendable and cannot be converted into any other type of visa. Visitors who want to stay longer need to apply for a visum in their country of residence.
                    </p>
                    <h1>APPLYING FOR VISAS BEFORE ARRIVAL</h1>
                    <p class="par1">
                        Citizens of countries not included on a visa-free or visa-on-arrival lists must apply for a visa overseas before arriving in Indonesia. Fees and practicalities vary from country to country. All information regarding visa regulation could be subject to change. We strive to provide you with the latest updates on the subject, but it remains the duty of the traveller to contact his/her local Indonesian Embassy or Consulate to get complete details on immigration requirements and any applicable visa regulations before embarking on a trip to Indonesia.
                    </p>
                    <img src="../assets/balinese-traditional.jpeg" height="600px" alt="photo" srcset="">
                    
            </div>

            <div class="col-6">
                <h1>FREE VISA ON ARRIVAL</h1>
                <p class="par1">
                    Nationals of these countries and territories will be issued with a 30-day stay permit without charge upon presentation of a passport with 6 months remaining validity. The Visa Free Facility is non-extendable or convertible into another type of visa.
                </p>
                <h1>COUNTRIES ELIGIBLE TO FREE VISA ON ARRIVAL</h1>
                <div class="class-countries mt-3 mb-5">

                    <ul v-for="el in countries" :key="el.id">
                        <li>
                            <i class="fas fa-flag"></i>
                            {{el.name}}
                        </li>
                        
                    </ul>
                </div>

                <h1>SELECTED INDONESIAN GATEWAYS GRANTING FREE VOA FACILITIES:</h1>
                <p class="par2">
                    Nationals of these countries and territories will be issued with a 30-day stay permit without charge upon presentation of a passport with 6 months remaining validity. The Visa Free Facility is non-extendable or convertible into another type of visa.
                </p>
                <p>
                    International Airports: <br>
                    1. Jakarta - Soekarno Hatta International Airport<br>
                    2. Bali - Ngurah Rai International Airport<br>
                    3. Medan - Kualanamu International Airport<br>
                    4. Surabaya - Juanda International Airport<br>
                    5. Batam - Hang Nadim International Airport<br>
                    <br>
                    <br><br>
                    International Harbors:<br>
                    1. Bintan - Sri Bintan Harbor at Tanjung Pinang<br>
                    2. Bintan - Tanjung Uban Harbor<br>
                    3. Batam - Sekupang Harbor<br>
                    4. Batam - Batam Center Harbor<br>
                </p>

            </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex"


export default {
    name: "InfoCenter",
    computed : {
        ...mapState(["countries"])
    },
    methods: {
        ...mapActions(["fetchCountries"])
    },
    created(){
        this.fetchCountries()
    }



}
</script>

<style scoped>

.bg-image{
    background: url('../assets/visa-indonesia.jpeg');
    /* background-repeat: no-repeat; */
    /* background-position: 100% 0; */
    padding: 30em;
    /* height: 100%;
    width: 100%; */
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

/* .par1 {
    overflow:scroll;
    width: 100%;
    height: 300px;

} */

.class-countries {
    /* font-size:16px;
    text-align: justify;
    height: 100%;
    line-height: 25px;
    -webkit-columns: 250px 3;
    -moz-columns: 250px 3;
    columns: 250px 3;
    -webkit-column-gap: 40px;
    -moz-column-gap: 40px;
    column-gap: 30px;
    color: #626262;
    padding-left: 30px;
    font-family:sans-serif; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 500px;
    font-size: 13px;
    
}

.par2 {
    /* overflow: scroll; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    /* /* height: 300px; */
}

.par1 {
    
    width: 100%;
    
}

.opacity-0h6{
  /* opacity:0.4!important; */
  color:black;
  text-transform: capitalize;
  display: flex;
  justify-content: center;

}




</style>