import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import Hero from './Pages/Hero';
import Profile from './Pages/Profile';
import { Route, BrowserRouter as Router, Switch, Link, } from "react-router-dom";



function App() {

  return (
    <Router>

      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
      </Switch>

    </Router>
  );
}

export default App;
