<template>
  <div class="incoming_msg">
	  <div class="incoming_msg_img">
		  <img :src="`https://picsum.photos/${Math.floor(Math.random() * (200 - 1 + 1)) + 1}`" alt="">
	  </div>
	  <div class="recieved_msg">
		  <span class="time_date">{{name}}</span>
		  <div class="recieved_withd_msg mb-3">
			  <p>{{message}}</p>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
	props: ['message'],
	computed: {
		name(){
			return this.$store.state.name
		},
	},
	methods: {
	}
}
</script>

<style>

</style>