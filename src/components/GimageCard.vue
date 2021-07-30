<template>
  <div class='row'>
  <div v-for="i in instagramlink" v-bind:key='i.id' class="card ml-5 mt-5" style="width: 18rem;">
  <img class="card-img-top img-thumbnail img-fluid" v-bind:src="i.image.src">
</div>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from "vuex"
export default {
		name: "Gimagecard",
	computed: {
		instagramlink(){
			return this.$store.state.searched;
		}
	},
	mounted(){
		this.$store.dispatch("instagram")
	}



}
</script>

<style>

</style>