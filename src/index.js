import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";


const msalInstance = new PublicClientApplication(msalConfig);



ReactDOM.render(<React.StrictMode>
  <BrowserRouter>
  <MsalProvider instance={msalInstance}>
  <App />
  </MsalProvider>
  </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));



