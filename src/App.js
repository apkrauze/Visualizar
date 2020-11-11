import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";



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
