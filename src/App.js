import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';
import Login from './Components/Login/Login';

export const UserContext= createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      
    <Router>
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      
      <Switch>
            <Route exact path="/booking">
              
            </Route>
            <Route path="/login">
              <Login></Login>
              
            </Route>
            <Route path="/placeDetails/:placeId">
              <PlaceDetail></PlaceDetail>  
            </Route>
            <Route exact path="/">
               <Header></Header>
            </Route>
            <Route path="*">
               <p>Error</p>
            </Route>
        </Switch>
      
    </Router>
    </UserContext.Provider>
    

    
  );
}

export default App;
