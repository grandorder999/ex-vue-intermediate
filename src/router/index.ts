import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Ex02",
    component: () => import("../views/Ex02.vue"),
  },

  {
    path: "/TeamDetail/:id",
    component: () => import("../views/TeamDetail.vue"),
  },

  {
    path: "/Ex01",
    component: () => import("../views/Ex01.vue"),
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
