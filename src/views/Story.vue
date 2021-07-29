<template>
    <div>
        <div class="bg-image" id="bg-bg">
            <h1>Stories</h1>
            <div class="color-overlay"></div>
        </div>

        <marquee class="container opacity-0h6 mt-2" style="background-color:#f7c2c2" width="60%" direction="left" height="50px">
        Due to Coronavirus outbreak and high number of active cases, Indonesia is currently on a lockdown until further notice...
        </marquee>

    <div class="story-container container mt-5 mb-5">
        <div class="row mb-5">
            <div class="col-4 mt-4" v-for="story in stories" :key="story.id">
                <img :src="story.image_url" alt="" width="350" height="200" srcset="">
                <a style="text-align: center; color: black" v-on:click.prevent="detailStory(story.id)" href="#"> {{ story.name }} </a>
            </div>
        </div>
    </div>


    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "Story",
    computed : {
        ...mapState(["stories"])
    },
    methods: {
        ...mapActions(["fetchStories", "fetchStoryById"]),

        detailStory(id){
            this.fetchStoryById(id)
            this.$router.push({name:"Detail", params: {id}})
        }

    },
    created(){
        this.fetchStories()
    }

}
</script>

<style scoped>

.bg-image{
    background: url('../assets/gongkebyaranak-1024x525.jpeg');
    /* background-repeat:repeat-x; */
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

.story-container {
    width: 100%
}

.opacity-0h6{
  /* opacity:0.4!important; */
  color:black;
  text-transform: capitalize;
  display: flex;
  justify-content: center;

}

</style>