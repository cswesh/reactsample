import React from 'react';
import styles from './App.css';
import Logo from './images/Logo.png';
import tatalogo from './images/tatalogo.png';







function Recommender() { 

  return (

      <>
  <div class="App">
		<div class="header">      
    <ul class="nav">
  <img class="Logo" src= {Logo} alt="pic" />
<li><a  href="/">Home</a></li>
<li> <a href="/Dashboard">DashBoard</a></li>
<li><a class="active" href="/recommender/">Recommender</a></li>
<li><a href="/optimizer/">Optimizer</a> </li>
  
</ul>
 
</div>

   
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

export default Recommender;