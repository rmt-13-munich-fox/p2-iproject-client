<template>
<div class="row justify-content-center" id="cardList">
    <div v-for="menu in menus" :key="menu.id" class="col-3">
        <div class="card mb-5 shadow">
        <img :src="menu.img_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">{{menu.name}}</h4>
                <h6 class="card-text">Rp {{menu.price}}</h6>
                <button class="btn btn-success" @click.prevent="addToCart(menu.id)"> Add <i class='fas fa-plus' style='font-size:14px;color:white;'></i></button> 
                <div class="row">
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
        ...mapState(["menus", "isLoggedIn"])
    },
    methods: {
        ...mapActions(["fetchMenu"]),
        addToCart(id) {
            this.$store.dispatch('addFood', id)
        }
    },
    created() {
        this.fetchMenu()
        console.log(this.role, 'ini fetch role'); 
    }
}
</script>

<style scoped>
img {
    border-radius: 10px 10px 0 0;
}

.card-body {
    height: 100% !important;
}

.btn {
    border-radius: 25px;
    width: 100% !important;
    height: 50px !important;
}
</style>