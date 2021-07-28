<template>
<gimagecard>
	</gimagecard>
</template>

<script>
import gimagecard from '../components/GimageCard.vue'
export default {
	name: "Gimage",
	components: {
		gimagecard
	},
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