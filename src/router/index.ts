import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories",
    name: "Categories",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "categories" */ "../views/Categories.vue"),
  },
  {
    path: "/apis/:title",
    name: "Details", //Why do we need this name?
    component: () => import("../views/DetailsPage.vue"),
  },
  {
    path: "/random",
    name: "Random",
    component: () => import("../views/Random.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
