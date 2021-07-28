<template>
  <div>
    <h2>{{get_data[0].country}}</h2>
    <table class="table table-dark table-striped" style="opacity: 0.8">
      <thead class="text-white">
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
          <td>{{new Date(item.lastChange).toLocaleString()}}</td>
          <td>{{new Date(item.lastUpdate).toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name : 'Details',
  computed: {
    get_data() {
      return this.$store.state.nationsByName
    }
  }
}
</script>

<style>

</style>