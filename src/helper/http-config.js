// helper/http-config.js //

import axios from "axios";
import { showSnackBar } from "./snack-bar";

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

const headers = {
  Authorization: `Bearer ${token}`,
};

export function createRequest(endPoint, payload, includetoken = true) {
  return HTTP.post(endPoint, payload, includetoken ? headers : {});
}

export function getRequest(endPoint, includetoken = true) {
  return HTTP.post(endPoint, includetoken ? headers : {});
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
