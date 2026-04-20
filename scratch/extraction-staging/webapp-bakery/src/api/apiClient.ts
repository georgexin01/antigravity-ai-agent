// apiClient.ts
// import { useAuthStore } from '@/stores/auth'
import { Capacitor } from "@capacitor/core";
import axios from "axios";

// todo update path for production
const apiClient = axios.create({
  baseURL: "https://365bakerygroup.com/api",
  // baseURL: "http://localhost/api",
});

// Add a request interceptor
apiClient.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    // Check if the `data` is an instance of FormData
    if (Capacitor.isNativePlatform()) {
      // Use native HTTP plugin
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data; charset=utf-8;";

        const formData = new FormData();
        for (const [key, value] of config.data.entries()) {
          // console.log(`${key}:`, value);
          formData.append(key, value);
        }
        // reset to use fetch request method for native HTTP API call for formdata requests
        const resp = await fetch(config.baseURL + config.url!, {
          method: "post",
          headers: {
            Authorization: config.headers["Authorization"]?.toString()!,
          },
          body: formData,
        });
        const json = await resp.json();

        config.adapter = (request) => {
          return new Promise((resolve, reject) => {
            if (json.success) {
              resolve({
                data: json,
                status: resp.status,
                statusText: resp.statusText,
                headers: config.headers,
                request,
                config,
              });
            } else {
              reject({
                response: { data: json },
                status: resp.status,
                statusText: resp.statusText,
                headers: config.headers,
                request,
                config,
              });
            }
          });
        };
      }
    } else {
      if (config.data instanceof FormData) {
        // Set the header to 'multipart/form-data' for FormData
        config.headers["Content-Type"] = "multipart/form-data; charset=utf-8;";
      } else {
        // Otherwise, set the header to 'application/json'
        config.headers["Content-Type"] = "application/json";
      }
    }

    return config;
  },
  function (error) {
    // Do something with request error
    // cast error to backend format
    // console.log('error in interceptor response')
    console.log(error);
    return Promise.reject(error);
    return Promise.reject(error.response.data);
  },
);

apiClient.interceptors.response.use(
  async function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('error in interceptor response')
    console.log(error.response.data.error);
    return Promise.reject(error.response.data.error);
  },
);

// Get the base URL for generating shareable web links
// Auto-detects hash routing from router config - works on web, iOS & Android
import { isHashRouting } from "../router";

export const getApiBaseUrl = (path: string = ""): string => {
  const baseURL = apiClient.defaults.baseURL || "";
  const base = baseURL.replace(/\/api\/?$/, "");
  const hashPrefix = isHashRouting() ? "/#" : "";
  return `${base}${hashPrefix}${path}`;
};

export default apiClient;
