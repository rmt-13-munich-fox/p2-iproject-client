<template>
  <div class="container mx-auto mt-4">
    <div class="row mt-3">

      <div class="col-md-4 m-4" v-for="(fav, i) in favorites" :key="i">
        <div class="card" style="width: 18rem;">
          <img
            :src="fav.Car.imgUrl"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ fav.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ fav.Car.model }}</h6>
            <p class="card-text">
                this car is built in {{ fav.Car.year }} and category of this car is {{ fav.Car.category }}
            </p>
            <a href="#" class="btn mr-2"
            @click.prevent="remove(fav.id)"
              ><i class="fas fa-link"></i> Remove Form Favorites </a
            >
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Favorites",
  computed: {
    ...mapState(["favorites"]),
  },
  methods: {
    ...mapActions(["fetchDataFavorites", "deleteFavorites"]),
    remove(id){
        this.deleteFavorites(id)
        this.fetchDataFavorites()
    }
  },
  created() {
    this.fetchDataFavorites();
  },
};
</script>

<style>
:root {
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}

body {
  background: #111 !important;
}

.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

.btn {
  border: 5px solid;
  border-image-slice: 1;
  background: var(--gradient) !important;
  -webkit-background: text !important;
  -webkit-text-fill-color: transparent !important;
  border-image-source:  var(--gradient) !important; 
  text-decoration: none;
  transition: all .4s ease;
}

.btn:hover, .btn:focus {
      background: var(--gradient) !important;
  -webkit-background: none !important;
  -webkit-text-fill-color: #fff !important;
  border: 5px solid #fff !important; 
  box-shadow: #222 1px 0 10px;
  text-decoration: underline;
}
</style>
