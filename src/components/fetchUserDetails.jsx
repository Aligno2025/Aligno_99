import axios from 'axios';
import { API } from './authAPI';

export const fetchUserDetails = () => {
  const accessToken = localStorage.getItem("accessToken");
  return axios.get(`${API}/user-details`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
