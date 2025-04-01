import React from "react"
import ReactDOM from "react-dom/client"
import ReactGA from "react-ga4"
import App from "./App"
import "./index.css"
import DocConfig from "./config/DocConfig"
import { BrowserRouter } from 'react-router-dom'
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser'

const msalConfig = {
  auth: {
    clientId: '8dd6bc6b-0c0e-45a1-8164-2b48331c6d0e', // Replace with your application client ID
    authority: 'https://login.microsoftonline.com/0bd2ae09-fa4b-4de6-a3c3-c1884d595b44', // Replace with your tenant ID
    redirectUri: 'http://localhost:3000', // Redirect URI configured in Azure portal
  },
};

ReactGA.initialize(DocConfig.MEASUREMENT_ID, { debug: true })

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>,
)
