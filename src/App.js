import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import Login from "./pages/Login"
import Details from "./pages/Details"
import {useSelector} from 'react-redux'
function App() {
  let user = useSelector((state) => state.user)

  const ProtectedRoute = (props) => {
    
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  
  return (
   
  
      <div className="App">
        <Switch>
          <ProtectedRoute
            path="/jobs/:id"
            render={(props) => <Details {...props} />}
       
          />
         
          <Route path="/jobs" exact={true} component={Jobs} />
          <Route path="/login" component={Login} />
          <Route path="/" exact={true} component={Jobs} />
      
        </Switch>
      </div>
   
  
  );
}

export default App;
