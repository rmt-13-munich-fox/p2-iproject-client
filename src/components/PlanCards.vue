<template>
    <div>
        <div id="container1" class="container mt-5 mb-5" v-for="plan in plans" :key="plan.id">
            <h2 class="text-center mb-5">DAY {{ plan.day }}</h2>
            <div class="row">
                <div class="col-4">
                    <div>
                        <img :src="plan.image_url" class="mt-3"  width="100%"  alt="" srcset="">
                    </div>
                    
                    <div class="mt-5">
                        <h4>Accomodation :</h4>
                        <h6>{{plan.hotel}}</h6>
                    </div>

                </div>
                <div class="col-8" >
                    <h1>{{plan.name}}</h1>
                    <h4>Itinerary :</h4>
                    <p class="par1" >
                        {{plan.descriptions}}
                    </p>
                </div>
            </div>
            
            
        </div>

        
    </div>
</template>

<script>
import { mapState, mapActions} from "vuex"


export default {
    name: "PlanCards",
    computed : {
        ...mapState(["plans", "travelDetail"])
    },
    methods: {
        ...mapActions(["fetchPlan", "fetchTravelById"])

    },

    created(){
        this.fetchPlan(this.$route.params.id)
        this.fetchTravelById(this.$route.params.id)
    }


}
</script>

<style scoped>

.par1 {
    overflow:scroll;
    width: 100%;
    height: 300px;

}

</style>