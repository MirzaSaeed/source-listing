import { defineStore } from "pinia";
import { createRequest } from "../helper/http-config";
import { useRouter } from "vue-router";
import { Notify } from "quasar";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token:"",
    isAuthenticated: false,
    rememberMe: false,
  }),
  actions: {
    // Login
    async login({ email, password, rememberMe }) {
      console.log("Login function called");
      try {
        const response = await createRequest(
          "/api/auth/login",
          {
            email: email,
            password: password,
            rememberMe: rememberMe,
          },
          false
        );
    
        const { token } = response;
        console.log(token)
        if (token) {
          this.token = token;
          this.isAuthenticated = true;
    
          if (!this.rememberMe) {
            this.rememberMe = false;
          }
    
          Notify.create({
            message:
              '<span style="color: green;font-weight: 500">Login Successful</span>',
            color: "white",
            textColor: "white",
            icon: "done",
            iconColor: "green",
            type: "positive",
            html: true,
            position: "bottom",
          });
        } else {
          console.error("Token not found in response");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
      persist: true,
});
