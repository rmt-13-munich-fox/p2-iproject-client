<template>
    <div>
        <div class="bg-image">
            <h1>Title</h1>
            <div class="color-overlay"></div>
        </div>

        <plancards></plancards>

    </div>
</template>

<script>
import Plancards from "../components/PlanCards.vue"

export default {
    name: "Plan",
    components : {
        Plancards
    }

}
</script>

<style scoped>

.bg-image{
    background: url('../assets/spot-terasering-sawah-tegalalang-bali-putrabalitour.jpeg');
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