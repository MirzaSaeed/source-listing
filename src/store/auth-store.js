// store/auth-store.js //

import { getRequest } from "@/helper/http-config";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async handleLogout() {
      try {
        const response = await getRequest("/api/auth/logout")
        console.log(response)
      } catch (error) {
      }
    }
  },
  persist: true,
});
