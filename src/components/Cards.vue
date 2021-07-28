<template>
    <div class="row mmb-5">   

        <div class="cards col-9">
            <div class="card" v-for="travel in travels" :key="travel.id">
                <img :src="travel.image_url" alt="" class="card__image">
                <div class="card__content">
                    <h2 style="text-align: center"> {{travel.name}} </h2>
                    <h5 style="text-align: center">
                        {{travel.durations}}
                    </h5>
                    <div>
                        <h6> <b>Includes:</b>  </h6>
                        <ol v-for="(el, index) in travel.inclusive" :key="el.id">
                            <li>
                                {{index+1}}. {{el}}
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h6><b>Excludes:</b>  </h6>
                        <ol v-for="(el, index) in travel.exclusive" :key="el.id">
                            <li>
                                {{index+1}}. {{el}}
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="card__info">
                    <div>
                        <i class="fas fa-wallet"></i> $ {{travel.price}}
                    </div>
                    <div>
                        <a href="#" class="card__link"  v-on:click.prevent="detail(travel.id)"> See Itinerary..</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-3 mt-2">

            
            <form v-on:submit.prevent="convertCurrency">
            <div class="card">
                <img src="../assets/undraw_pay_online_b1hk.svg" alt="" width="300" style="margin-left: 20px">
                <div class="card__content">
                    <h2 style="text-align: center">Currency Converter</h2>
                    <div class="row">
                        <div class="col-10">
                            <input type="number" v-model="user.amount" name="current" style="width: 100%" placeholder="100" min="1">
                        </div>
                        <div class="col-2">
                            <i class="fas fa-dollar-sign"></i>
                        </div>

                    </div>
                    
                    <div class="mt-3 mb-3">
                        <h4 style="text-align: center"><b>To</b></h4>
                    </div>

                    <div class="row">
                        <div class="col-10">
                            <select  name="" id="" class="container" v-model="user.currency">
                                <option v-for="currency in currencies" :key="currency.id" :value="currency"> {{currency.toUpperCase()}} </option>
                            </select>
                        </div>
                        <div class="container mt-3">
                            <button class="btn btn-primary" type="submit">Convert</button>
                        </div>
                        
                    </div>

                    <div class="container mt-4" style="text-align: center">
                        <h4>  {{result}} {{currency}}  </h4>
                    </div>
                    
                    
                
                </div>
                <div class="card__info">
                    
                </div>
            </div>
            </form>
        </div>

    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "TravelCards",
    data(){
        return {
            user: {
                amount: 0,
                currency:''
            }
        }
    },
    computed : {
        ...mapState(["travels", "currencies", "result"])
    },
    methods: {
        ...mapActions(["fetchTravels" , "fetchPlan", "fetchAllCurrencies", "calculateCurrency"]),

        detail(id){
            this.fetchPlan(id)
            this.$router.push({name: "Plan", params: {id}})
        },

        convertCurrency(){
            // console.log('masuk sini')
            this.calculateCurrency(this.user)
        }
    },

    created(){
        this.fetchTravels()
        this.fetchAllCurrencies()
    }
}
</script>

<style scoped>

/* .card_image_2{
    width: "50"
} */


</style>