import axios from "axios";
import { Notify } from "quasar";
import { showSnackBar } from "./snack-bar";

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

const headers = {
  // "Content-Type": "application/json",
  // Authorization: `Bearer ${token}`,
};

export function postRequest(endPoint, payload) {
  return HTTP.post(endPoint, payload, headers);
}

export function getRequest(endPoint) {
  return HTTP.get(endPoint, headers);
}

HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      showSnackBar(false, error.response.data.message);
    } else if (error.request) {
      showSnackBar(false, "No response received from the server");
    } else {
      showSnackBar(false, error.message);
    }

    return Promise.reject(error);
  }
);
