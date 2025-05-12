// authAPI.js
import axios from 'axios';

const API = 'https://aligno-server.onrender.com/api/auth';

// Register user
export const apiRegister = (userData) => {
  return axios.post(`${API}/register`, userData);
};

// Login user
export const apiLogin = (credentials) => {
  return axios.post(`${API}/login`, credentials, { withCredentials: true });
};

// Logout user
export const apiLogout = () => {
  return axios.post(`${API}/logout`, {}, { withCredentials: true });
};

// Refresh authentication token
export const refreshToken = () => {
  return axios.post(`${API}/refresh-token`, {}, { withCredentials: true });
};

// Request password reset email
export const forgotPassword = (email) => {
  return axios.post(`${API}/forgot-password`, { email });
};

// Reset password using token
export const resetPassword = (token, newPassword) => {
  return axios.post(`${API}/reset-password`, { token, password: newPassword });
};
