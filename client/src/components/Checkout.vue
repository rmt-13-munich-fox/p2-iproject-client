<template>
<div>

  <div class="text-start ps-1 pt-5">
      <h1>Checkout</h1>
      <p class="ms-1">Kode Transaksi #001</p>
  </div>
    <div class="row mt-5 ps-1">
        <div class="col-6 text-start">
            <h2>Item</h2>
        </div>
        <div class="col-3">
            <h2>Qty</h2>
        </div>
        <div class="col-3">
            <h2>Harga</h2>
        </div>
    </div>
    <div v-for="food in dataAddFood" :key="food.id" class="row mt-3 ps-1 mb-2">
        <div class="col-6 text-start">
            <h5>{{food.name}}</h5>
        </div>
        <div class="col-3">
            <h5>{{food.OrderMenus.quantityItem}}</h5>
        </div>
        <div class="col-3">
            <h5>{{food.OrderMenus.quantityPrice}}</h5>
        </div>
    </div>
    <div class="row mt-3 mt-5">
        <div class="col-6 text-start">
        </div>
        <div class="col-3">
            <h3><strong>Total Price</strong></h3>
        </div>
        <div class="col-3">
            <h3><strong>{{sumTotal}}</strong></h3>
        </div>
    </div>
    <div>
        <div class="row">
            <div class="col-4">
                <button class="btn btn-danger position-absolute bottom-0 start-0" id="btn-cancel">Cancel</button>
            </div>
            <div class="col-8">
                <button class="btn btn-success position-absolute bottom-0 end-0" id="btn-checkout">Checkout</button>
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
        ...mapState(["dataAddFood"]),
        sumTotal() {
            const summation = this.dataAddFood;
            return summation.reduce((sum, cur) => sum += cur.OrderMenus.quantityPrice, 0)
        }
    },
    created() {
        this.$store.dispatch('fetchCustomerFood')
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