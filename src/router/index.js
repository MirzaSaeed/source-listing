// router/index.js //

import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import { useAuthStore } from "@/store/auth-store";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next("/dashboard");
      } else {
        next();
      }
    },
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
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated && authStore.token !== null) {
        next();
      } else {
        next("/");
      }
    },
    children: [
      {
        path: "",
        name: "dashboard",
        // component: () => import("../components/dashboard/Dashboard.vue"),
      },
      {
        path: "user-management",
        name: "userManagement",
        component: () =>
          import("../components/user-management/UserManagement.vue"),
      },
      {
        path: "sources",
        name: "sources",
        component: () => import("../components/sources/Source.vue"),
      },
      {
        path: "activity-logs",
        name: "activityLogs",
        component: () => import("../components/activity-logs/ActivityLogs.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
