import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login"
import Details from "./pages/Details"

function App() {
  

  return (
   
    <div className="App">
      
      <Switch>
       
        <Route path="/jobs/:id" component={Details}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
        
      </Switch>
  
    </div>
  
  );
}

export default App;
