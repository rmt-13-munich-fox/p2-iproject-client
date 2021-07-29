import Vue from "vue";
import VueRouter from "vue-router";
import Weather from "../views/Weather.vue";
import Calendar from "../views/Calendar.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Weather",
		component: Weather,
	},
	{
		path: "/calendar",
		name: "Calendar",
		component: Calendar,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.name === "Calendar" && !localStorage.getItem("access_token")) {
		next({ name: "Weather" });
	} else {
		next();
	}
});

export default router;
