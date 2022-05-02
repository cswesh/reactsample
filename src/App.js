import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Optimizer from './optimizer';
import Recommender from './recommender';
import Landingpage from './Landingpage'
import DashboardLayout from './Dashboard'
import styles from './App.css';
import { Dashboard } from '@material-ui/icons';




function App() {
  
  return (
    
    
      <>

        
      < Routes >
      <Route exact path= "/" element= {<Landingpage/>}/>
      <Route path= "/Dashboard" element= {<DashboardLayout/>}/>
      <Route path="/optimizer" element={ <Optimizer/> } />
      <Route path="/recommender" element={ <Recommender/>} />
      </ Routes >
    
      </>
    

  );
  
}



export default App;
