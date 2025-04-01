// // ProtectedRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useIsAuthenticated } from '@azure/msal-react';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useIsAuthenticated();

//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect unauthenticated users to the login page
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
