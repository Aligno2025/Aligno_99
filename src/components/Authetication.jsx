import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://aligno-server.onrender.com/api/auth';

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
};

export const logoutUser = async () => {
    const response = await axios.post(`${API_BASE_URL}/logout`);
    return response.data;
};

export const refreshToken = async () => {
    const response = await axios.get(`${API_BASE_URL}/refresh-token`);
    return response.data;
};

export const forgotPassword = async (email) => {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
    return response.data;
};

export const resetPassword = async (resetData) => {
    const response = await axios.post(`${API_BASE_URL}/reset-password`, resetData);
    return response.data;
};

// src/auth/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, logoutUser, refreshToken } from './authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Attempt to refresh token on mount
        const initializeAuth = async () => {
            try {
                const data = await refreshToken();
                setUser(data.user);
            } catch (error) {
                console.error('Failed to refresh token', error);
            } finally {
                setLoading(false);
            }
        };
        initializeAuth();
    }, []);

    const login = async (credentials) => {
        const data = await loginUser(credentials);
        setUser(data.user);
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);