import React, { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import {Route, Switch, } from "react-router-dom";
import Hero from './Pages/Hero';
import Profile from './Pages/Profile';
import { BrowserRouter as Router } from "react-router-dom";
import Upload from './Pages/Upload';
import fire from './config/fire'


function App() {

  return (
    <Router>
<<<<<<< HEAD
      <Switch>
        <Route path="/" exact component={LoginPage} />
=======
      <Switch>      
        <Route path="/" exact component={LoginPage} /> 
>>>>>>> daf223f28b92b25165d784c5579dda31ee62dd2c
        <Route path="/Hero"  component={Hero} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Upload" component={Upload} />
      </Switch>
    </Router>
  );
}

export default App;
