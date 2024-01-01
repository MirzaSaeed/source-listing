import axios from "axios";

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
      console.error("Error status code:", error.response.status);
      console.error("Error response data:", error.response.data);

      Notify.create({
        color: "negative",
        position: "top",
        message: `Error: ${error.response.data.message}`,
      });
    } else if (error.request) {
      Notify.create({
        color: "negative",
        position: "top",
        message: "No response received from the server",
      });
    } else {
      Notify.create({
        color: "negative",
        position: "top",
        message: `Error: ${error.message}`,
      });
    }

    return Promise.reject(error);
  }
);
