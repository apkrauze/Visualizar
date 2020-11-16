import React, { useEffect, useState } from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage';
import { Route, Switch, } from "react-router-dom";
import Hero from './Pages/Hero';
import Profile from './Pages/Profile';
import { BrowserRouter as Router } from "react-router-dom";
import Upload from './Pages/Upload';
import fire from './config/fire'


function App() {
  const [user, setUser] = useState();

  const authListener = () => {  //listener to see if user exists.
    return fire.auth().onAuthStateChanged((user) => {
      if (user) { //checking to see if there is a user, and then setting user to (user), if not, then it will be an empty string
        setUser(user);
        console.log(user);
      } else { //if there is no user, set the user to an empty string.
        setUser(undefined);
      }
    });
  };

  useEffect(() => {
    return authListener();
  }, []);

  return (
    <Router>
      <Switch>
        {user && <Route path="/" exact render={(props) => <LoginPage {...props} user={user} setUser={setUser} />} />}
        {user && <Route path="/Hero" render={(props) => <Hero {...props} user={user.currentUser} setUser={setUser} />} />}
        {user && <Route path="/Profile" render={(props) => <Profile {...props} user={user} setUser={setUser} />} />}
        {user && <Route path="/Upload" render={(props) => <Upload {...props} user={user} setUser={setUser} />} />}
      </Switch>
    </Router>
  );
}

export default App;
