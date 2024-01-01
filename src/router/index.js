import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
