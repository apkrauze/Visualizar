import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import { Route, Switch, } from "react-router-dom";
import Hero from './Pages/Hero';
import Profile from './Pages/Profile';
import { BrowserRouter as Router } from "react-router-dom";
import Upload from './Pages/Upload';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} /> 
        <Route path="/Hero" component={Hero} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Upload" component={Upload} />
      </Switch>
    </Router>//figure out how to route the ImageDisplay to Hero..
  );
}

export default App;
