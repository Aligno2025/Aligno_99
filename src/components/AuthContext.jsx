// import React, { createContext, useState, useEffect, useMemo } from 'react';
// import { apiLogin, apiLogout, refreshToken } from './authAPI';
// import { Loader2 } from 'lucide-react'; 
// import { useNavigate } from 'react-router-dom';


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [Token, setAccessToken] = useState(null);
//     const navigate = useNavigate();

//   useEffect(() => {
//   const checkSession = async () => {
//     try {
//       const token = await refreshToken(); // token is the accessToken
//       console.log('Access token:', token);
//       setAccessToken(token);
//     } catch (err) {
//       console.error('Session refresh failed:', err);
//       setUser(null);
//         navigate('/'); // Redirect to login if session check fails
//     } finally {
//       setLoading(false);
//     }
//   };

//   checkSession();
// }, []);



//     const login = async (credentials) => {
//         try {
//             const response = await apiLogin(credentials);
//             setUser(true); // Use user from response
//             localStorage.setItem('token', response.data.token); // if using token-based auth
//             return response.data;
//         } catch (err) {
//             console.error('Login failed:', err);
//             setError(err);
//             throw err;
//         }
//     };

//     const logout = async () => {
//         try {
//             await apiLogout();
//              setUser(false); // Use user from response
//              console.log('User logged out');
//         } catch (err) {
//             console.error('Logout failed:', err);
//         }
//     };

//     const isLoggedIn = !!user;

//     const value = useMemo(() => ({
//         user,
//         login,
//         logout,
//         isLoggedIn,
//         error,
//     }), [user, error]);

//     if (loading) return <div className="flex items-center justify-center h-screen">
//       <Loader2 className="w-10 h-10 animate-spin text-amber-48" />
//     </div>;

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect, useMemo } from 'react';
import { apiLogin, apiLogout, refreshToken } from './authAPI';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data or null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null); // Access token
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const checkSession = async () => {
      setLoading(true);
      try {
       const token = await refreshToken();
       console.log('Access token:', token);
if (isMounted) {
  setAccessToken(token);
  setUser(true); // Or fetch user info if needed
  setError(null);
}

      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error('Session refresh failed:', err.message);
        if (isMounted) {
          setUser(null);
          setAccessToken(null);
          navigate('/Sign_in'); // Redirect to login
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkSession();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const login = async (credentials) => {
    try {
      const response = await apiLogin(credentials); // Expect { token, user? }
      setAccessToken(response.token); // Adjust based on API response
      setUser(response.user || true);
      setError(null);
      navigate('/MainDash'); // Redirect to dashboard or home
      return response;
    } catch (err) {
      console.error('Login failed:', err.message);
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
      setAccessToken(null);
      setError(null);
      navigate('/');
      console.log('User logged out');
    } catch (err) {
      console.error('Logout failed:', err.message);
      setError(err.message || 'Logout failed');
    }
  };

  const isLoggedIn = !!user;

  const value = useMemo(
    () => ({
      user,
      accessToken,
      login,
      logout,
      isLoggedIn,
      error,
    }),
    [user, accessToken, error]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-amber-48" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// import React, { createContext, useState, useEffect, useMemo } from 'react';
// import { apiLogin, apiLogout, refreshToken } from './authAPI';
// import { Loader2 } from 'lucide-react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     const checkSession = async () => {
//       setLoading(true);
//       try {
//         console.log('Checking session, cookies before:', document.cookie);
//         const accessToken = await refreshToken();
//         if (isMounted) {
//           console.log('Refresh success:', accessToken);
//           setAccessToken(accessToken);
//           setUser(true);
//           setError(null);
//         }
//       } catch (err) {
//         console.error('Session refresh failed:', {
//           message: err.message,
//           status: err.response?.status,
//           data: err.response?.data,
//         });
//         if (isMounted) {
//           setUser(null);
//           setAccessToken(null);
//           window.location.href = '/';
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//           console.log('Session check complete, cookies after:', document.cookie);
//         }
//       }
//     };

//     checkSession();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   const login = async (credentials) => {
//     try {
//       const response = await apiLogin(credentials);
//       console.log('Login success:', response, 'Cookies:', document.cookie);
//       setAccessToken(response.accessToken);
//       setUser(response.user || true);
//       setError(null);
//       window.location.href = '/';
//       return response;
//     } catch (err) {
//       console.error('Login failed:', err.message, err.response?.data);
//       setError(err.message || 'Login failed');
//       throw err;
//     }
//   };

//   const logout = async () => {
//     try {
//       console.log('Logging out, cookies before:', document.cookie);
//       await apiLogout();
//       setUser(null);
//       setAccessToken(null);
//       setError(null);
//       window.location.href = '/login';
//       console.log('User logged out, cookies after:', document.cookie);
//     } catch (err) {
//       console.error('Logout failed:', err.message, err.response?.data);
//       setError(err.message || 'Logout failed');
//     }
//   };

//   const isLoggedIn = !!user;

//   const value = useMemo(
//     () => ({
//       user,
//       accessToken,
//       login,
//       logout,
//       isLoggedIn,
//       error,
//     }),
//     [user, accessToken, error]
//   );

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Loader2 className="w-10 h-10 animate-spin text-amber-48" />
//       </div>
//     );
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };