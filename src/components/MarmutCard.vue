<template>
  <div class='row'>
  <div v-for="m in marmuts" v-bind:key='m.id' class="card ml-5 mt-5" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="m.imgURL">
  <div class="card-body">
    <h5 class="card-title">{{m.name}}</h5>
    <p class="card-text">{{m.name}} is a {{m.age}} years old {{m.gender}}. {{m.description}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Submitted by: {{m.submittedBy}}</li>
  </ul>
</div>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
	name: "card",
	methods: {
	},
	computed: {
		marmuts(){
      return this.$store.state.marmuts
    }
	},
	created(){
	},
	mounted() {
    this.$store.dispatch("getData");
  }

}
</script>

<style>

</style>