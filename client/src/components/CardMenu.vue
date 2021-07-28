<template>
<div class="row justify-content-center" id="cardList">
    <div v-for="menu in menus" :key="menu.id" class="col-3">
        <div class="card mb-5 shadow">
        <img :src="menu.img_url" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">{{menu.name}}</h4>
                <h6 class="card-text">Rp {{menu.price}}</h6>
                <form @submit.prevent="addToCart(menu)">
                    <div class="row">
                        <div class="col-4">
                            <input type="number" class="form-control" :value="menu.quantity ? menu.quantity : 1" @change="(event) => handleQuantityChange(event, menu)">
                        </div>
                        <div class="col-8">         
                            <button type="submit" class="btn btn-success"> Add <i class='fas fa-plus' style='font-size:14px;color:white;'></i></button> 
                        </div>
                    </div>
                </form>
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
        addToCart(data) {
            let index = this.menus.findIndex((el) => {
                if (!el.quantity) {
                    el.quantity = 1
                }
                if (el.quantity !== 0) {
                    return el.id === data.id
                }
            })
            this.$store.commit("ADD_ORDER", this.menus[index])

        },
        handleQuantityChange(event, menu) {
            let index = this.menus.findIndex((el) => el.id === menu.id)
            let newMenu = this.menus
            newMenu[index] = {...menu, quantity: event.target.value}
            this.$store.commit("FETCH_MENU", newMenu)
        }
    },
    created() {
        this.fetchMenu()
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