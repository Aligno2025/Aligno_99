// authAPI.js
import axios from 'axios';

const API = 'https://aligno-server.onrender.com/api/auth';

export const apiRegister = (userData) => {
  return axios.post(`${API}/register`, userData);
};

export const apiLogin = (credentials) => {
  return axios.post(`${API}/login`, credentials, { withCredentials: true });
};

export const apiLogout = () => {
  return axios.post(`${API}/logout`, {}, { withCredentials: true });
};

export const refreshToken = () => {
  return axios.post(`${API}/refresh-token`, {}, { withCredentials: true });
};
