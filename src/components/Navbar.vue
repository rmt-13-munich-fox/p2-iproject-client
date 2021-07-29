<template>
	<nav class="bg-light">
		<div class="container">
			<div
				class="
					container-fluid
					navbar navbar-expand-lg navbar-light
					py-4
				"
			>
				<div class="col-6">
					<a class="navbar-brand" href="#">Weather Calendar</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
				<div class="collapse navbar-collapse col-6 justify-content-end">
					<ul class="navbar-nav">
						<li class="nav-item px-3">
							<a
								@click.prevent="goToWeather"
								class="nav-link"
								href="#"
								>Weather</a
							>
						</li>
						<li class="nav-item px-3">
							<a
								v-if="isLoggedIn"
								@click.prevent="goToCalendar"
								class="nav-link"
								href="#"
								>Upcoming Events</a
							>
						</li>
						<li class="nav-item px-3">
							<button
								@click.prevent="loginByGoogle"
								class="btn btn-primary"
								v-if="!isLoggedIn"
							>
								Login
							</button>
						</li>
						<li class="nav-item px-3">
							<button
								@click="logoutUser"
								class="btn btn-primary"
								v-if="isLoggedIn"
							>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
	name: "Navbar",
	methods: {
		...mapActions(["googleLogin", "getCalendar", "getPushNotification"]),
		...mapMutations({
			logout: "LOG_OUT",
		}),
		async loginByGoogle() {
			const googleUser = await this.$gAuth.signIn();
			let id_token = googleUser.getAuthResponse().id_token;
			let access_token = googleUser.getAuthResponse().access_token;
			let loginGoogle = await this.googleLogin({
				id_token,
				access_token,
			});
			if (loginGoogle) {
				this.getCalendar();
			}
		},
		getCalendarData() {
			this.getCalendar();
		},
		goToCalendar() {
			this.$router.push({ name: "Calendar" }).catch(() => {});
		},
		goToWeather() {
			this.$router.push({ name: "Weather" }).catch(() => {});
		},
		logoutUser() {
			localStorage.clear();
			const responseGoogleLogout = this.$gAuth.signOut();
			this.logout();
			this.$router.push({ name: "Weather" }).catch(() => {});
		},
	},
	computed: {
		...mapState(["isLoggedIn"]),
	},
};
</script>

<style></style>
