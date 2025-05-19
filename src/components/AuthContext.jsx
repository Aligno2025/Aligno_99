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
// import React, { createContext, useState, useEffect } from 'react';
// import { apiLogin, apiLogout, refreshToken } from './authAPI';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // Indicates auth check in progress

//   // Refresh session on initial load
//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const response = await refreshToken(); // Checks for valid refresh token
//         setUser(response.data.user);
//         console.log("Refresh response:", response.data,user);
//       } catch (error) {
//         setUser(null);
//       } finally {
//         setLoading(false); // Done checking session
//       }


//       console.log("User:", user);
//   console.log("isLoggedIn:", !!user);
//   console.log("Loading:", loading);

//     };



//     checkSession();
//   }, []);

//   const login = async (credentials) => {
//     try {
//       const response = await apiLogin(credentials); // API call to login
//       setUser(response.data.user); // Set user after successful login
//     } catch (error) {
//       console.error('Login failed:', error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await apiLogout(); // Invalidate session on server
//       setUser(null);     // Clear user on client
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   const isLoggedIn = !!user;

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         isLoggedIn,
//         loading, // Include loading so components can check when auth is ready
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Indicates auth check in progress
  const [error, setError] = useState(null); // Track errors for debugging

  // Refresh session on initial load
  useEffect(() => {
    const checkSession = async () => {
      try {
        setError(null); // Reset error state
        const response = await refreshToken(); // Call refreshToken
        console.log('Refresh token response data:', response);

        // Ensure user data exists in response
        if (response.user) {
          setUser(response.user);
          // Optionally store access token if provided
          if (response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken);
          }
        } else {
          console.warn('No user data in refresh response:', response);
          setUser(null);
        }
      } catch (error) {
        console.error('Session check failed:', error);
        setUser(null);
        setError(error.message || 'Failed to refresh session');
      } finally {
        setLoading(false); // Done checking session
      }

      // Log state after update
      console.log('Auth state:', { user, isLoggedIn: !!user, loading, error });
    };

    checkSession();
  }, []); // Empty dependency array for initial load only

  // Provide login/logout functions (example)
  const login = async (credentials) => {
    try {
      const response = await apiLogin(credentials);
      setUser(response.data.user);
      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
      localStorage.removeItem('accessToken');
    } catch (error) {
      console.error('Logout failed:', error);
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