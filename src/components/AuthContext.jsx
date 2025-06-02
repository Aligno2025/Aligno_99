// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Attempt to refresh session on mount
    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await refreshToken();
                setUser(response.data.user);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await apiLogin(credentials);
            setUser(response.data.user);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await apiLogout();
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const isLoggedIn = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
