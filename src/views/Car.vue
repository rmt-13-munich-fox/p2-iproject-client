<template>
  <div class="container mx-auto mt-4">
    <div class="row">
      <div class="col-md-4" v-for="(car, i) in cars" :key="i">
        <div class="card" style="width: 18rem;">
          <img :src="car.imgUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ car.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ car.model }}</h6>
            <p class="card-text">
              this car is built in {{ car.year }} and category of this car is
              {{ car.category }}
            </p>
            <a href="#" class="btn mr-2" @click.prevent="detail(car.id)"
              ><i class="fas fa-link"></i> Detail
            </a>
            <a href="#" class="btn mr-2" @click.prevent="addFavorites(car.id)"
              ><i class="fab fa-github"></i> Favorites
            </a>
            <a href="#" class="btn mr-2" @click.prevent="watchVideos(`${car.name} ${car.model}`)"
              ><i class="fab fa-github"></i> Watch Videos
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Card",
  computed: {
    ...mapState(["cars"]),
  },
  methods: {
    ...mapActions(["fetchDataCars", "detailCar", "postFavorites", "videoYoutube"]),
    async detail(id) {
      await this.detailCar(id);
      this.$router.push("/detail");
    },
    async addFavorites(id) {
      console.log(id);
      await this.postFavorites(id);
    },
    async watchVideos(search) {
      console.log(search)
      const filter = search.split(' ').join('%20')
      const obj = {
        search: filter,
        max: 10
      }
      await this.videoYoutube(obj)
      this.$router.push('/search')
    }
  },
  created() {
    this.fetchDataCars();
  },
};
</script>

<style>
:root {
  --gradient: linear-gradient(to left top, #dd2476 10%, #ff512f 90%) !important;
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
  border-image-source: var(--gradient) !important;
  text-decoration: none;
  transition: all 0.4s ease;
}

.btn:hover,
.btn:focus {
  background: var(--gradient) !important;
  -webkit-background: none !important;
  -webkit-text-fill-color: #fff !important;
  border: 5px solid #fff !important;
  box-shadow: #222 1px 0 10px;
  text-decoration: underline;
}
</style>
