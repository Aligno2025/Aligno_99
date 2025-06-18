import React, { createContext, useState, useEffect, useMemo } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';
import { Loader2 } from 'lucide-react'; 
// import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [Token, setAccessToken] = useState(null);
    // const navigate = useNavigate();

  useEffect(() => {
  const checkSession = async () => {
    try {
      const token = await refreshToken(); // token is the accessToken
      console.log('Access token:', token);
      setAccessToken(token);
    } catch (err) {
      console.error('Session refresh failed:', err);
      setUser(null);
        // navigate('/Sign_in'); // Redirect to login if session check fails
    } finally {
      setLoading(false);
    }
  };

  checkSession();
}, []);



    const login = async (credentials) => {
        try {
            const response = await apiLogin(credentials);
            setUser(true); // Use user from response
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
             setUser(false); // Use user from response
             console.log('User logged out');
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

    if (loading) return <div className="flex items-center justify-center h-screen">
      <Loader2 className="w-10 h-10 animate-spin text-amber-48" />
    </div>;

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

