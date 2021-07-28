<template>
<div>

  <div class="text-start ps-1 pt-5">
      <h1>Checkout</h1>
      <p class="ms-1">Kode Transaksi #001</p>
  </div>
    <div class="row mt-5 ps-1">
        <div class="col-5 text-start">
            <h2>Item</h2>
        </div>
        <div class="col-3">
            <h2>Qty</h2>
        </div>
        <div class="col-3">
            <h2>Harga</h2>
        </div>
        <div class="col-1">
            <h2>Ops</h2>
        </div>
    </div>
    <div v-for="food in orders" :key="food.id" class="row mt-3 ps-1 mb-2">
        <div class="col-5 text-start">
            <h5>{{food.name}}</h5>
        </div>
        <div class="col-3">
            <h5>{{food.quantity}}</h5>
        </div>
        <div class="col-3">
            <h5>{{food.price * food.quantity}}</h5>
        </div>
        <div class="col-1">
           <a @click="(event) => handleDeleteItem(event, food)"> <i class="fas fa-trash-alt" style="color:red"></i></a>
        </div>
    </div>
    <div class="row mt-3 mt-5">
        <div class="col-5 text-start">
        </div>
        <div class="col-3">
            <h3><strong>Total Price</strong></h3>
        </div>
        <div class="col-4">
            <div class="row">
                <div class="col-7 text-end">
                    <h3><strong>{{sumTotal}}</strong></h3>
                </div>
                <div class="col-5">
                    <h3>IDR</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-7 text-end">
                    <h3><strong>{{convertedCurrency}}</strong></h3>
                </div>
                <div class="col-5">
                    <select class="form-select" aria-label="Default select example" @change="(event) => handleCurrency(event, sumTotal)">
                        <option value="idr" selected>IDR</option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="row">
            <div class="col-4">
                <button class="btn btn-danger position-absolute bottom-0 start-0" id="btn-cancel" @click.prevent="cancelCart">Cancel</button>
            </div>
            <div class="col-8">
                <button class="btn btn-success position-absolute bottom-0 end-0" id="btn-checkout" @click.prevent="checkoutOrder">Checkout</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "Checkout",
    computed: {
        ...mapState(["orders", "histories", "convertedCurrency"]),
        sumTotal() {
            const summation = this.orders;
            return summation.reduce((sum, cur) => sum += cur.price, 0)
        }
    },
    methods: {
        // deleteFood(id) {
        //     this.$store.dispatch("deleteFoodId", id)
        //         .then(() => {
        //             return this.$store.dispatch('fetchCustomerFood')
        //         })
        //         .then(() => {
        //             console.log('success fetch lagi');
        //         })
        //         .catch((err) => {
        //             console.log(err, 'error return promise');
        //         })
        // },

            //Checkout
        // checkoutCart() {
        //     console.log(this.orders, 'ini this orders');
        //     this.$store.commit("HISTORY_ORDER", this.orders);
        //     this.orders.forEach(el => {
        //         this.$store.dispatch("addFood", {id: el.id, quantity: el.quantity}) 
        //     })
        //     this.$store.commit("RESET_ORDER")
        //     console.log(this.histories, 'ini histories');
        // },

        checkoutOrder() {
            console.log('masuk checkout order');
            this.$store.dispatch("postCheckout", this.orders)
        },

        cancelCart() {
            this.$store.commit("RESET_ORDER")
        },

        handleDeleteItem(event, menu) {
            let newMenu = this.orders.filter(el => el.id !== menu.id)
            this.$store.commit("FILTER_ORDER", newMenu)
        },

        handleCurrency(event, total) {
            console.log(event.target.value, 'ini currency');
            let convertCur = event.target.value
            this.$store.dispatch("currencyChange", {convertCur, total})
        }
    },
    created() {
        this.$store.dispatch('fetchCustomerFood')
        console.log(this.histories, 'ini histories di created');
    }
}
</script>

<style scoped>
h1 {
    font-weight: 900;
}

#btn-cancel {
    width: 25% !important;
    margin-left: 100px;
    height: 60px !important;
    border-radius: 50px !important;
    margin-bottom: 100px !important;
}

#btn-checkout {
    width: 50% !important;
    margin-right: 90px;
    height: 60px !important;
    border-radius: 50px !important;
    margin-bottom: 100px !important;

}
</style>