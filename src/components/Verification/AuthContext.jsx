// import React from 'react';
// import { PublicClientApplication } from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';

// const msalConfig = {
//   auth: {
//     clientId: '8dd6bc6b-0c0e-45a1-8164-2b48331c6d0e', // Replace with your application client ID
//     authority: 'https://login.microsoftonline.com/0bd2ae09-fa4b-4de6-a3c3-c1884d595b44', // Replace with your tenant ID
//     redirectUri: 'http://localhost:3000', // Redirect URI configured in Azure portal
//   },
// };

// const msalInstance = new PublicClientApplication(msalConfig);

// const AuthProvider = ({ children }) => {
//   return (
//     <MsalProvider instance={msalInstance}>
//       {children}
//     </MsalProvider>
//   );
// };

// export default AuthProvider

import React, { createContext, useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load session data from localStorage on initialization
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const { accounts, instance } = useMsal();

  const login = async () => {
    try {
      const response = await instance.loginPopup({
        scopes: ['User.Read'],
      });
  
      if (!response || !response.account) {
        console.error("Login failed: No account found in response.");
        return;
      }
  
      const token = response.idToken;
      const userData = {
        username: response.account.username, // Use response.account directly
        token: token,
      };
  
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      console.log("Login Successful:", userData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    instance.logoutPopup({
      postLogoutRedirectUri: '/',
    });

    // Clear session data
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    if (accounts.length > 0) {
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
      setUser({
        username: accounts[0]?.username || "Unknown User",
        token: storedUser.token || null,
      });
    }
  }, [accounts]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
