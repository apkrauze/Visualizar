import React, { useState, useEffect } from 'react';
import fire from '../config/fire';
import Login from '../Login';
import Hero from '../Pages/Hero';
import '../App.css';


function LoginPage({ user, setUser }) { //setting the states for our login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [displayName, setDisplayName] = useState('');


  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  //clear functions, just clearing the input, or errors by setting the state to an empty string.

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  //using firebase authentication using email and password signup. then changing state to display error messages for email and password


  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(x => {
        return (

          fire.auth().currentUser.updateProfile({
            displayName: displayName,
          })
        )
      })
      .catch(err => {

        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            console.log(err)
        }}
      )
  };

  //similar to handleLogin, but now we are creating a user and catching errors relevant to email and password, then changing state to display them

  const handleLogout = () => {
    fire.auth().signOut();
  };

  //firebase signout method

  //simply calling the authListener function

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            setDisplayName={setDisplayName}
          />
        )}


    </div>
  );
}

export default LoginPage;