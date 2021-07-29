<template>
  <div>
    <h2>{{get_data[0].country}}</h2>
    <table class="table table-light table-striped" style="opacity: 0.8">
      <thead>
        <tr>
          <th>Country</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Critical</th>
          <th>Deaths</th>
          <th>Last Change</th>
          <th>Last Update</th>
        </tr>
      </thead>
      <tbody class="text-white">
        <tr v-for="(item, index) in get_data" :key="index">
          <td>{{item.country}}</td>
          <td>{{item.confirmed}}</td>
          <td>{{item.recovered}}</td>
          <td>{{item.critical}}</td>
          <td>{{item.deaths}}</td>
          <td>{{new Date(item.lastChange).toLocaleString('id-ID')}}</td>
          <td>{{new Date(item.lastUpdate).toLocaleString('id-ID')}}</td>
        </tr>
      </tbody>
    </table>
    <div class="boxMap">
      <Map :latitude="get_data[0].latitude" :longitude="get_data[0].longitude"/>
    </div>
  </div>
</template>

<script>
import Map from '../components/map.vue'
export default {
  name : 'Details',
  computed: {
    get_data() {
      return this.$store.state.nationsByName
    }
  },
  components: {
    Map
  }
}
</script>

<style scoped>
  .boxMap {
    width: 100%;
    max-height: 400px;
    overflow: hidden;
  }
</style>