<template>
<div class="row justify-content-center" id="cardList">
    <div v-for="menus in menuss.rows" :key="menus.id" class="col-3">
        <div class="card mb-5 shadow">
        <img :src="menus.img_url" class="card-img-top" alt="...">
            <div class="card-body">
                <!-- <h5 class="card-title">{{menus.title}}</h5> -->
                <h5 class="card-title">{{menus.name}}</h5>
                <p class="card-text">{{menus.price}}</p>
                <div class="row">
                    <div class="col-9">
                <a v-if="isLoggedIn && roleFetch()" href="" @click.prevent="addBookmark(menus.id)"  class="btn btn-danger">Bookmark</a>
                    </div>
                    <div class="col-3">
                        <a @click.prevent="getDetails(menus.id)" href="">details</a> <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: 'CardMenu',
    computed: {
        ...mapState(["menus", "isLoggedIn", "role"])
    },
    methods: {
        ...mapActions(["fetchMenu"]),
        addBookmark(id) {
            this.$store.dispatch('addBookmark', id)
        },
        getDetails(id) {
            this.$store.dispatch('fetchMenuId', id)
            this.$router.push({name: 'Details', params: {id}})
        },
        roleFetch() {
            return this.$store.state.role
        }
    },
    created() {
        this.fetchMenu()
        console.log(this.role, 'ini fetch role'); 
    }
}
</script>

<style>

</style>