// import React, { useEffect } from 'react';
// import { useMsal } from '@azure/msal-react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const { instance, accounts } = useMsal();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (accounts.length > 0) {
//       // User is already logged in, navigate to MainMap
//       navigate('/main-map');
//     }
//   }, [accounts, navigate]);

//   const handleLogin = () => {
//     instance.loginRedirect({
//       scopes: ['User.Read'], // Adjust scopes as needed
//     }).catch(e => {
//       console.error(e);
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login with Microsoft</h2>
//         <button
//           onClick={handleLogin}
//           className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Sign in with Microsoft
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();
    // Navigate to the main map after successful login
    navigate('/main-map');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login with Microsoft
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
