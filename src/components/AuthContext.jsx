// // AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { apiLogin, apiLogout, refreshToken } from './authAPI';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Attempt to refresh session on mount
//     useEffect(() => {
//         const checkSession = async () => {
//             try {
//                 const response = await refreshToken();
//                 setUser(response.data.user);
//             } catch (error) {
//                 setUser(null);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkSession();
//     }, []);

//     const login = async (credentials) => {
//         try {
//             const response = await apiLogin(credentials);
//             setUser(response.data.user);
//         } catch (error) {
//             console.error('Login failed:', error);
//             throw error;
//         }
//     };

//     const logout = async () => {
//         try {
//             await apiLogout();
//             setUser(null);
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     };

//     const isLoggedIn = !!user;

//     return (
//         <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Indicates auth check in progress

  // Refresh session on initial load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await refreshToken(); // Checks for valid refresh token
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false); // Done checking session
      }
    };

    checkSession();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await apiLogin(credentials); // API call to login
      setUser(response.data.user); // Set user after successful login
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiLogout(); // Invalidate session on server
      setUser(null);     // Clear user on client
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn,
        loading, // Include loading so components can check when auth is ready
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

