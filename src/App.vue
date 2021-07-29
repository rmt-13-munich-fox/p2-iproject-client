<template>
	<div id="app">
		<navbar class="position-sticky top-0"></navbar>
		<router-view></router-view>
		<h-footer class="position-sticky bottom-0"></h-footer>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import { mapMutations } from "vuex";

export default {
	components: {
		Navbar,
		HFooter,
	},
	created() {
		this.checkLoginHandler();
	},
	methods: {
		...mapMutations({
			checkLogin: "CHECK_LOGIN",
		}),
		checkLoginHandler() {
			this.checkLogin();
		},
	},
};
</script>
<style></style>
