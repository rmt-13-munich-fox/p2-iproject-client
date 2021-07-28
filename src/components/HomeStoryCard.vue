<template>
    <div>
        <ol>
            <li v-for="story in stories" :key="story.id">
            <div class="row mb-3" style="padding-left: 20px">
                <div class="col-3">
                <img :src="story.image_url" alt="" width="100px">
                </div>
                <div class="col-9" style="padding-left:40px">
                    <a href="#" v-on:click.prevent="detail(story.id)" style="color:black;">{{story.name}}</a>
                </div>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex"

export default {
    name: "HomeStoryCard",
    computed: {
        ...mapState(["stories"])
    },
    methods : {
        ...mapActions(["fetchStories", "fetchStoryById"]),

        detail(id){
            this.fetchStoryById(id)
            this.$router.push({name: 'Detail', params: {id}})
        }
    },
    created(){
        this.fetchStories()
    },

}
</script>

<style>

</style>