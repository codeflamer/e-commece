import React,{useState,useEffect} from 'react';
import './default.scss';
// import Header from './components/Header';

import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import {Route,Switch} from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import Homepagelayout from './layouts/Homepagelayout';
import Login from './pages/Login';
import {auth} from './firebase/utils';


const  App=()=> {
  const [currentUser,setCurrentUser] = useState(null);



  useEffect(()=>{
   var authListener = null;
   authListener = auth.onAuthStateChanged(userAuth =>{
      if (!userAuth) {
        setCurrentUser(prevState =>{
          return {...prevState}
        });
      }

      setCurrentUser(userAuth);
    })
    return ()=>{
      authListener()
    }
  })

  return (
    <div className="App">
       <Switch>
          <Route path='/' exact render={()=>(
            <Homepagelayout currentUser={currentUser}>
               <Homepage/>
            </Homepagelayout>
          )}/>
          <Route path='/registration' render={()=>(
             <Mainlayout currentUser={currentUser}>
               <Registration/>
            </Mainlayout>
          )}/>    
          <Route path='/login' render={()=>(
             <Mainlayout currentUser={currentUser}>
               <Login/>
            </Mainlayout>
          )}/> 
       </Switch>
    </div>
  );
}



export default App;
