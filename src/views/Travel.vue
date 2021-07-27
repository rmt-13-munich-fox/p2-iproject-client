<template>
    <div>

    <div class="bg-image">
        <h1>Travel list</h1>
        <div class="color-overlay"></div>
    </div>

        <div class="main_content">

            <cards></cards>
        
        </div>
    </div>


    
</template>

<script>
import Cards from "../components/Cards.vue"

export default {
    name: "Travel",
    components :{
        Cards
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

</style>