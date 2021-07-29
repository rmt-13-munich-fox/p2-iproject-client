<template>
	<div>
		<div style="height: 900px">
			<div class="mx-5 my-5 shadow border bg-light text-center rounded">
				<h1>Upcoming Events</h1>
				<div
					class="
						row
						mx-5
						my-3
						shadow
						border
						bg-light
						text-center
						rounded
					"
				>
					<div class="col py-1"><h3>Event</h3></div>
					<div class="col py-1"><h3>Start</h3></div>
					<div class="col py-1"><h3>End</h3></div>
				</div>
			</div>
			<div
				v-for="(event, index) in upcomingEvents.data"
				:key="index"
				class="row mx-5 my-3 shadow border bg-light text-center rounded"
			>
				<div class="col">
					<h4>{{ event.summary }}</h4>
				</div>
				<div class="col">
					<h4>{{ event.start.date }}</h4>
				</div>
				<div class="col">
					<h4>{{ event.end.date }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "Calendar",
	created() {
		this.getCalendarHandler();
	},
	methods: {
		...mapActions(["getCalendar"]),
		getCalendarHandler() {
			this.getCalendar();
		},
	},
	computed: {
		...mapState(["upcomingEvents"]),
	},
};
</script>

<style></style>
