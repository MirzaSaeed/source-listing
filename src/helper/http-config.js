import axios from "axios";
import { useAuthStore } from "../store/auth-store";
import { Notify } from "quasar";

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

export function createRequest(endPoint, payload, includetoken = true) {
  return sendRequest(HTTP.post, endPoint, payload, includetoken);
}

export function getRequest(endPoint, includetoken = true) {
  return sendRequest(HTTP.get, endPoint, null, includetoken);
}

function sendRequest(requestFunction, endPoint, payload, includetoken) {
  if (includetoken) {
    const token = useAuthStore.token;
    HTTP.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return requestFunction(endPoint, payload)
    .then((response) => response.data)
    .catch(handleError);
}

function handleError(error) {
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
}

HTTP.interceptors.response.use((response) => response, handleError);
