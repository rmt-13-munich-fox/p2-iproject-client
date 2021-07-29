import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/dashboard/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/dashboard/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/match",
    name: "Match",
    component: () => import("../views/Match.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (to.name === "Register" && isAuthenticated) {
    next({ name: "Dashboard" });
  } else if (to.name === "Register" && !isAuthenticated) {
    next();
  } else if (to.name !== "Login" && !isAuthenticated) {
    next({ name: "Login" });
  } else if (to.name === "Login" && isAuthenticated) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
