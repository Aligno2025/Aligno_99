// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { apiLogin, apiLogout } from './authAPI'; // import the renamed API functions

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await apiLogin(credentials);
            const userData = response.data.user;
            localStorage.setItem('user', JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await apiLogout();
            localStorage.removeItem('user');
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const isLoggedIn = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
