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
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    children: [
      {
        path: "user-management",
        name: "user-management",
        component: () => import("../components/UserManagement.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
