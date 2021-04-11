import React from 'react';
import './default.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import {Route,Switch} from 'react-router-dom';

const  App=()=> {
  return (
    <div className="App">
        <Header/>
      <div className='main'>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/registration' component={Registration} exact/>    
        </Switch>
      </div>
    </div>
  );
}



export default App;
