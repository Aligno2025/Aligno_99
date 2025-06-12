import React, { createContext, useState, useEffect, useMemo } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await refreshToken();
                setUser(response.data.user);
            } catch (err) {
                setUser(null);
                console.warn('Session refresh failed:', err);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await apiLogin(credentials);
            localStorage.setItem('token', response.data.token); // if using token-based auth
            return response.data;
        } catch (err) {
            console.error('Login failed:', err);
            setError(err);
            throw err;
        }
    };
    

    const logout = async () => {
        try {
            await apiLogout();
            setUser(null);
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    const isLoggedIn = !!user;

    const value = useMemo(() => ({
        user,
        login,
        logout,
        isLoggedIn,
        error,
    }), [user, error]);

    if (loading) return <div>Loading...</div>; // or a custom spinner

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
