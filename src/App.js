import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {Route, Routes,  BrowserRouter as Router } from 'react-router-dom'
import Analyser from './analyser';
import Optimizer from './optimizer';
import Recommender from './recommender';



function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        
          
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <div>
          <h1>Welcome to M365</h1>
         <h2>Click to<a href="https://www.flaticon.com"> Sign in </a></h2>
        </div>
        
          
        <Router>
          
         < Routes >
       
          <Route path= "/" component= {<App/>}/>
          <Route path="/analyser" component={<Analyser/> } />
          <Route path="/optimizer" component={ <Optimizer/> } />
          <Route path="/recommender" component={ <Recommender/>} />
       
          </ Routes >
          </Router>
          

          
       
      </>
    </ThemeProvider>

  );
  
}



export default App;
