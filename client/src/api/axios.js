// src/utils/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL:  "http://localhost:5000/api", 
  withCredentials: true, // optional (use if cookies needed)
  timeout: 10000, // 10 sec
});

// =============================
// Add Authorization Token
// =============================
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// =============================
// Handle Responses
// =============================
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("Network error:", error);
      return Promise.reject("Network error! Please try again.");
    }

    const { status } = error.response;

    // Auto logout if 401 Unauthorized
    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // redirect
    }

    return Promise.reject(error.response.data?.message || "Something went wrong");
  }
);

export default axiosInstance;
