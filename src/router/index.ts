import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/apis/:title',
    name: 'Details',
    component: () => import('../views/DetailsPage.vue'),
  },
  {
    path: '/categories/:category',
    name: 'Category',
    component: () => import('../views/Category.vue'),
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
