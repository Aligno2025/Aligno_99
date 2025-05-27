// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';
import { fetchUserDetails } from './fetchUserDetails';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        setError(null);
        const response = await refreshToken();
        console.log('Refresh token response:', response.data);

        if (response.data && response.data.user) {
          setUser(response.data.user);

          if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Session check failed:', err);
        setUser(null);
        setError(err.message || 'Failed to refresh session');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await apiLogin(credentials);

      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }

      if (response.data.refreshToken) {
        localStorage.setItem('refreshToken', response.data.refreshToken);
      }

      // Optionally fetch fresh user details after login
      const userDetails = await fetchUserDetails();
      setUser(userDetails.data);
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
