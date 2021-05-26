import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import MealDetails from "@/views/MealDetails.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/mealdetails/:id",
    name: "MealDetails",
    component: MealDetails,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
