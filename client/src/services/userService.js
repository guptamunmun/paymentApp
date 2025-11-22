// src/services/userService.js
import axios from "../utils/axios";

const USER_URL = "/users";

export const getAllUsers = async () => {
  const response = await axios.get(`${USER_URL}`);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${USER_URL}/${id}`);
  return response.data;
};

export const updateUser = async (id, payload) => {
  const response = await axios.put(`${USER_URL}/${id}`, payload);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_URL}/${id}`);
  return response.data;
};
