import { useAuthStore } from "@/store/auth-store";
import axios from "axios";
import { showSnackBar } from "./snack-bar";

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export function postRequest(endPoint, payload) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.post(endPoint, payload);
}

export function patchRequest(endPoint, payload) {
  const authStore = useAuthStore();
  const token = authStore.token || "";
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.patch(endPoint, payload);
}
export function getRequest(endPoint) {
  const authStore = useAuthStore();
  const token = authStore.token;
  HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return HTTP.get(endPoint);
}

HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      showSnackBar(false, error.response.data.message);
    } else if (error.request) {
      showSnackBar(false, "No response received from the server");
    } else {
      showSnackBar(false, "No response received from the server");
    }

    return Promise.reject(error);
  }
);
