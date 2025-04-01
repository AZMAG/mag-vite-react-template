import { useState } from "react"
import "@arcgis/core/assets/esri/themes/light/main.css"
import { DataProvider } from "./stores/DataContext"
import { MainMap } from "./components/Map/map"
import Header from "./components/Layout/header/Header"
import { Router, Route, Routes } from 'react-router-dom'
import LoginPage from "./components/Verification/Login"
import AuthProvider from "./components/Verification/AuthContext"
import ProtectedRoute from "./components/Verification/ProtectedRoute"
import { useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';


const AppRoutes = () => {
  const { inProgress } = useMsal();

  // Optionally, handle loading states
  if (inProgress === InteractionStatus.Startup) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main-map" element={
        <ProtectedRoute>
          <MainMap visible={true} />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <DataProvider>
        <Header />
        <main className="flex-1">
          <AuthProvider>
            {/* Doc Page: https://css-tricks.com/react-router-4/
              AuthProvider specifies the context for the login and logout functions verifying the login of the page
              Routes specifies the routes for the application currently being just the login and the main map
              ProtectedRoute specifies the route that is only accessible if the user is authenticated (currently only working for one session)
            */}
            <AppRoutes />
          </AuthProvider>
        </main>
      </DataProvider>
    </div>
  )
}

export default App
