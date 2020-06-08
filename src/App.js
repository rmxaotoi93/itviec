import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login"
import Details from "./pages/Details"

function App() {
  
  // let [user,setUser] = useState(false)

  // const ProtectedRoute = (props) => {
  //   if (user.isAuthenticated === true) {
  //     return <Route {...props} />;
  //   } else {
  //     return <Redirect to="/login" />;
  //   }
  // };
  return (
   
    <div className="App">
      
      <Switch>
        {/* <ProtectedRoute path="/jobs/:id" render={(props) => <Details {...props}/>}/> */}
        <Route path="/jobs/:id" component={Details}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
        
      </Switch>
  
    </div>
  
  );
}

export default App;
