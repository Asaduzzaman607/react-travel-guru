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
      <p>Name: {loggedInUser.name}</p>
    <Router>
      {/* <Home></Home> */}
      <Login></Login>
      
      <Switch>
            <Route path="/booking">
              
            </Route>
            <Route path="/login">
              <Login></Login>
              
            </Route>
            <Route path="/booking/:placeId">
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
