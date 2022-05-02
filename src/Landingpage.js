import React, { useState } from 'react';
import styles from './App.css';
import Logo from './images/Logo.png';
import tatalogo from './images/tatalogo.png';
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { SignOutButton } from "./components/SignOutButton";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";



function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
              callMsGraph(response.accessToken).then(response => setGraphData(response));
          });
      });
  }

  return (
      <>
          <h5 >Welcome {name}</h5>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <button  onClick={RequestProfileData}>Request Profile Information</button>
          }
      </>
  );
};


function Landingpage() {
  const isAuthenticated = useIsAuthenticated();
	return (
		<><div class="App">
		<div class="header">        
  <ul class="nav">
  <img class="Logo" src= {Logo} alt="pic" />
<li> { isAuthenticated ? <SignOutButton /> : <SignInButton /> }</li> 
</ul>
</div>

<AuthenticatedTemplate>
<ProfileContent />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>
    <div class="footer">
    <img class="footerlogo" src= {tatalogo} alt="pic" />
    <div class="footertext">© Copyright 2022 | Tata Consultancy Services</div>
    <ul class="footernav">
   < a href="/">Help</a>
  <a href="/">Contact Us</a>

    </ul>
    </div>
    </div>
    
 
</>


	);
}


export default Landingpage;