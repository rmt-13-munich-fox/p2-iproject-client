<template>
	<div class="rounded shadow mx-5 my-5 row text-center">
		<div class="col container rounded shadow mx-5 my-5 bg-light">
			<div class="text-center pt-4">
				<h1>Current Weather Forecast</h1>
				<hr />
			</div>
			<div class="text-center">
				<img
					width="500"
					src="https://www.intel.co.id/content/dam/www/public/us/en/images/partner-alliance/rwd/icons/a1145752-cloud-specialist-icon-rwd.png.rendition.intel.web.864.486.png"
					alt="cloudy"
				/>
				<h1>Cloud Cover ({{ weather.current.clouds }}%)</h1>
			</div>
			<div class="row pt-5">
				<div class="col text-center">
					<h1>Temp: {{ weather.current.temp }}&#8451;</h1>
					<h1>Feels Like: {{ weather.current.feels_like }}&#8451;</h1>
				</div>
				<div class="col text-center d-flex flex-column py-3">
					<h3>Humidity: {{ weather.current.humidity }}%</h3>
					<h3>Pressure: {{ weather.current.pressure }} mb</h3>
				</div>
			</div>
		</div>
		<div class="col mx-5 my-5">
			<div>
				<h1>Hourly Forecast</h1>
			</div>
			<div class="row">
				<div class="col shadow rounded mx-2 mt-5 bg-light">
					<h2 class="pt-2">Time: {{ weather.hourly[0].dt }}.00</h2>
					<img
						width="250"
						src="https://www.intel.co.id/content/dam/www/public/us/en/images/partner-alliance/rwd/icons/a1145752-cloud-specialist-icon-rwd.png.rendition.intel.web.864.486.png"
						alt="cloudy"
					/>
					<h4 class="py-4">
						Cloud cover ({{ weather.hourly[0].clouds }}%)
					</h4>
					<h3 class="py-2">
						Temp: {{ weather.hourly[0].temp }}&#8451;
					</h3>
					<h3 class="py-2">
						Feels Like: {{ weather.hourly[0].feels_like }}&#8451;
					</h3>
					<div class="py-3">
						<h4>Humidity: {{ weather.hourly[0].humidity }}%</h4>
						<h4>Pressure: {{ weather.hourly[0].pressure }} mb</h4>
					</div>
				</div>
				<div class="col shadow rounded mx-1 mt-5 bg-light">
					<h2 class="pt-2">Time: {{ weather.hourly[1].dt }}.00</h2>
					<img
						width="250"
						src="https://www.intel.co.id/content/dam/www/public/us/en/images/partner-alliance/rwd/icons/a1145752-cloud-specialist-icon-rwd.png.rendition.intel.web.864.486.png"
						alt="cloudy"
					/>
					<h4 class="py-4">
						Cloud cover ({{ weather.hourly[1].clouds }}%)
					</h4>
					<h3 class="py-2">
						Temp: {{ weather.hourly[1].temp }}&#8451;
					</h3>
					<h3 class="py-2">
						Feels Like: {{ weather.hourly[1].feels_like }}&#8451;
					</h3>
					<div class="py-3">
						<h4>Humidity: {{ weather.hourly[1].humidity }}%</h4>
						<h4>Pressure: {{ weather.hourly[1].pressure }} mb</h4>
					</div>
				</div>
				<div class="col shadow rounded mx-2 mt-5 bg-light">
					<h2 class="pt-2">Time: {{ weather.hourly[2].dt }}.00</h2>
					<img
						width="250"
						src="https://www.intel.co.id/content/dam/www/public/us/en/images/partner-alliance/rwd/icons/a1145752-cloud-specialist-icon-rwd.png.rendition.intel.web.864.486.png"
						alt="cloudy"
					/>
					<h4 class="py-4">
						Cloud cover ({{ weather.hourly[2].clouds }}%)
					</h4>
					<h3 class="py-2">
						Temp: {{ weather.hourly[2].temp }}&#8451;
					</h3>
					<h3 class="py-2">
						Feels Like: {{ weather.hourly[2].feels_like }}&#8451;
					</h3>
					<div class="py-3">
						<h4>Humidity: {{ weather.hourly[2].humidity }}%</h4>
						<h4>Pressure: {{ weather.hourly[2].pressure }} mb</h4>
					</div>
				</div>
			</div>
		</div>
		<h1>Daily Forecast</h1>
		<div class="row px-5 py-5 ms-1">
			<div
				v-for="(day, index) in weather.daily"
				:key="index"
				class="col shadow rounded text-center bg-light"
			>
				<h3 class="pt-2">{{ day.dt }}</h3>
				<img
					width="150"
					src="https://www.intel.co.id/content/dam/www/public/us/en/images/partner-alliance/rwd/icons/a1145752-cloud-specialist-icon-rwd.png.rendition.intel.web.864.486.png"
					alt="cloudy"
				/>
				<h3>Cloud Cover: ({{ day.clouds }}%)</h3>
				<h3>Temp: {{ day.temp.day }}&#8451;</h3>
				<h3>Feels Like: {{ day.feels_like.day }}&#8451;</h3>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "Weather",
	created() {
		this.getWeather();
	},
	methods: {
		...mapActions(["getWeatherData"]),
		getWeather() {
			this.getWeatherData();
		},
	},
	computed: {
		...mapState(["weather"]),
	},
};
</script>

<style scoped></style>
