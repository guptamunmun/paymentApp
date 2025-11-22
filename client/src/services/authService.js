// src/services/authService.js
import axios from "../utils/axios";

const AUTH_URL = "/auth";

export const registerUser = async (payload) => {
  const response = await axios.post(`${AUTH_URL}/register`, payload);
  return response.data;
};

export const loginUser = async (payload) => {
  const response = await axios.post(`${AUTH_URL}/login`, payload);
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get(`${AUTH_URL}/me`);
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
