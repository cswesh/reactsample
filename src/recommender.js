import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { SubPage } from './subpage';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import Dashboarddata2 from './datalayout2';





function Recommender() { 
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (

      <>
          <ThemeProvider theme={theme}>
        
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
            
          </FocusLock>
        </div>
        
        </ThemeProvider>
        <Dashboarddata2/>
      </>
    

    
  );
}

export default Recommender;