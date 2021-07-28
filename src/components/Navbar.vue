<template>
    <nav class="opacity-0h5">
        <div class="container">
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo"> 
                <i class="fas fa-route"></i>
                BC - Destination
            </label>
            <ul>
                <li ><a v-on:click.prevent="homePage" href="#">Home</a></li>
                <li ><a v-on:click.prevent="travelPage" href="#">Travels</a></li>
                <li ><a v-on:click.prevent="infoPage" href="#">Visa</a></li>
                <li ><a v-on:click.prevent="storyPage" href="#">Stories</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        homePage(){
            this.$router.push('/').catch(() => {})
        },

        travelPage(){
            this.$router.push('/travels').catch(() => {})
        },

        infoPage(){
            this.$router.push('/infos').catch(() => {})
        },

        storyPage(){
            this.$router.push('/stories').catch(() => {})
        }

        
    }
}
</script>

<style>

</style>