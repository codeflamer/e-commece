import React from 'react';
import './default.scss';
// import Header from './components/Header';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import {Route,Switch} from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import Homepagelayout from './layouts/Homepagelayout';


const  App=()=> {
  return (
    <div className="App">
       <Switch>
          <Route path='/' exact render={()=>(
            <Homepagelayout>
               <Homepage/>
            </Homepagelayout>
          )}/>
          <Route path='/registration' render={()=>(
             <Mainlayout>
               <Registration/>
            </Mainlayout>
          )}/>    
       </Switch>
    </div>
  );
}



export default App;
