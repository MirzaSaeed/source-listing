import { postRequest } from "@/helper/http-config";
import { showSnackBar } from "@/helper/snack-bar";
import { defineStore } from "pinia";
import { Notify } from "quasar";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async forgetPassword(payload) {
      try {
        const response = await postRequest(
          "/api/auth/forgot-password",
          payload
        );
        showSnackBar(true, response.data.message);
      } catch (error) {}
    },
    async setPassword(payload) {
      try {
        const response = await postRequest("/api/auth/set-password", payload);
        showSnackBar(true, response.data.message);
      } catch (error) {}
    },
  },
  persist: true,
});
