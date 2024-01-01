// helper/http-config.js //

import axios from "axios";
import { showSnackBar } from "./snack-bar";

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1lIjoiYWRtaW4iLCJqdGkiOiJNUWU1ZWRxQUNTIiwiaWF0IjoxNzA0MTg5MjAyLCJleHAiOjE3MDQyNzU2MDJ9.us5XRVjy5cgLWbEH4s7KhVb_PNlPma7n9KMbwyzVMUQ`,
};

export function postRequest(endPoint, payload) {
  return HTTP.post(endPoint, payload, { headers });
}

export function getRequest(endPoint) {
  return HTTP.get(endPoint, { headers });
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
