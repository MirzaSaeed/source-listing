// router/index.js //

import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () => import("../views/ForgotPasswordView.vue"),
  },
  {
    path: "/set-password/:token",
    name: "setPassword",
    component: () => import("../views/SetPasswordView.vue"),
  },
  {
    path: "/drop-down",
    name: "dropDown",
    component: () => import("../components/DropDown.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    children: [
      {
        path: "/sources",
        name: "sources",
        component: () => import("../views/SourceView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
