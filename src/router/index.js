// router/index.js //

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/DashboardView.vue";
import Navbar from "../components/Navbar"

const routes = [
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () => import("../views/ForgotPasswordView.vue"),
    path: "/",
    name: "navbar",
    component: Navbar,
  },
   {
    path: "/",
    name: "navbar",
    component: Navbar,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
