// authAPI.js
import axios from 'axios';


const API = 'https://aligno99.onrender.com/api/auth';
const APIM = 'https://aligno99.onrender.com/api'; // For messages



// Register user
export const apiRegister = (userData) => {
  return axios.post(`${API}/register`, userData);
};

// Login user
export const apiLogin = async (credentials) => {
  const response = await axios.post(`${API}/login`, credentials, { withCredentials: true });
  return response.data; // Expect { accessToken, user? }
};

// Logout user
export const apiLogout = async () => {
  const response = await axios.post(`${API}/logout`, {}, { withCredentials: true });
  return response.data;
};


// Refresh authentication token
export const refreshToken = async () => {
  console.log('Refreshing token at:', `${API}/refresh`);
  const response = await axios.post(`${API}/refresh`, {}, { withCredentials: true });
  console.log('Refresh response:', response.data);
  return response.data.accessToken;
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


