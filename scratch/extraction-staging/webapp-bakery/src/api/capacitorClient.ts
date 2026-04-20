import { CapacitorHttp } from "@capacitor/core";

// this capacitor client is used to connect taiwan server with firebase project setup
// special handling for API request due to mobile have to extra handling
export const capacitorClient = {
  async get(url: string, options: any = {}) {
    return httpRequest("GET", url, options);
  },

  async post(url: string, data: any, options: any = {}) {
    return httpRequest("POST", url, { ...options, data });
  },

  async put(url: string, data: any, options: any = {}) {
    return httpRequest("PUT", url, { ...options, data });
  },

  async delete(url: string, options: any = {}) {
    return httpRequest("DELETE", url, options);
  },
};

async function httpRequest(method: string, url: string, options: any) {
  try {
    // Intercept Request: Add Headers, Token, etc.
    const headers = {
      "Content-Type": "application/json",
      ...options.headers, // Merge custom headers
    };
    const serverUrl = "https://365bakerygroup.com/api";
    // const serverUrl = "http://localhost/api";

    // console.log("method: ", method);
    // console.log("url: ", serverUrl + url);
    // console.log("headers: ", headers);
    // console.log("data: ", options.data);
    // console.log("params: ", options.params);

    // Make Request
    const response = await CapacitorHttp.request({
      method,
      url: serverUrl + url,
      headers,
      data: options.data || null,
      params: options.params || {},
    });

    //  Intercept Successful Response
    // console.log("Response:", response);
    return response.data;
  } catch (error) {
    //  Intercept Errors
    console.error("HTTP Error:", error);
    throw error;
  }
}
