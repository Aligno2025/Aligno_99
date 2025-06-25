// authAPI.js
import axios from 'axios';

// const API = 'https://aligno-server.onrender.com/api/auth';
export const API = 'http://localhost:5000/api/auth';
export const APIM = 'http://localhost:5000/api'; // For messages
// const API = 'https://aligno99.onrender.com/api/auth';

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
export const refreshToken = async () => {
  const response = await axios.post(`${API}/refresh`, {}, { withCredentials: true });
  return response.data.accessToken; // this now works because backend returns it
};

// Request password reset email
export const forgotPassword = (email) => {
  return axios.post(`${API}/forgot-password`, { email });
};

// Reset password using token
export const resetPassword = (token, newPassword) => {
  return axios.post(`${API}/reset-password`, { token, password: newPassword });
};


// Send a message to the user
export const apiSendMessage = (message) => {
  return axios.patch(`${APIM}/user/message`, { message }, {
    withCredentials: true, // Include cookies if you're using cookie-based auth
  });
};

// Send a message as a guest
export const apiSendGuestMessage = (formData) => {
  return axios.post(`${API}/apiSendGuestMessage`, formData);
};


