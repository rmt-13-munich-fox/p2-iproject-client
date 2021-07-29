<template>

  <div >
    <l-map
      :zoom="zoom"
      :center="center"
      style="opacity:0.8; height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      
      <l-control
        :position="'bottomleft'"
        class="custom-control-watermark"
      >
        Vue2Leaflet Watermark Control
      </l-control>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LControl } from "vue2-leaflet";

export default {
  name: "Map",
  props: ['latitude', 'longitude'],
  components: {
    LMap,
    LTileLayer,
    LControl
  },
  data() {
    return {
      zoom: 4,
      center: latLng(this.latitude, this.longitude),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  methods: {
    
  }
};
</script>

<style>
.example-custom-control {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}
.custom-control-watermark {
  font-size: 200%;
  font-weight: bolder;
  color: #aaa;
  text-shadow: #555;
}
</style>
