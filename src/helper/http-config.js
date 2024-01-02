// helper/http-config.js //

import axios from "axios";
import { useAuthStore } from "../store/auth-store";
import { Notify } from "quasar";
const headers = {
  // "Authorization": `Bearer ${token}`
}
const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});
export function postRequest(endPoint, payload) {
  return HTTP.post(endPoint, payload, { headers });
}
export function getRequest(endPoint) {
  return HTTP.get(endPoint, { headers });
}

HTTP.interceptors.response.use((response) => response, (error) => {
  if (error.response) {
    console.error("Error status code:", error.response.status);
    console.error("Error response data:", error.response.data);
    Notify.create({
      message: `<span style="color: red;font-weight: 500">Error: ${error.response.data.message}</span>`,
      color: "white",
      textColor: "white",
      icon: "error",
      iconColor: "red",
      type: "error",
      html: true,
      position: "bottom",
    });
  } else if (error.request) {
    Notify.create({
      message: `<span style="color: red;font-weight: 500">Error: No response received from the server</span>`,
      color: "white",
      textColor: "white",
      icon: "error",
      iconColor: "red",
      type: "error",
      html: true,
      position: "bottom",
    });
  } else {
    Notify.create({
      message: `<span style="color: red;font-weight: 500">Error: ${error.message}</span>`,
      color: "white",
      textColor: "white",
      icon: "error",
      iconColor: "red",
      type: "error",
      html: true,
      position: "bottom",
    });
  }
  return Promise.reject(error);
});