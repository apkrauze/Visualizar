import React, { useState, useEffect } from 'react';
import fire from '../config/fire';
import Login from '../Login';
import Hero from '../Pages/Hero';
import '../App.css';
import Sidebar from '../Sidebar';


function LoginPage() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [displayName, setDisplayName] = useState('');

  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
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
  

  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(x => {
      return(
        fire.auth().currentUser.updateProfile({
          displayName: displayName,
        })
      )
    })
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
        
      }
    });

  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) =>{
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    },);
  };

  useEffect(() => {
    authListener();
  },[]);


    return (
    <div className="App">
      {user ? (
         <Hero handleLogout={handleLogout}/>
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
        //displayName={displayName}
        setDisplayName={setDisplayName}
        /> 
      )}
        
        
    </div>
  );
}

export default LoginPage;