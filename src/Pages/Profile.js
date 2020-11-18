import React from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import firebase from 'firebase/app';




const Profile = () => {
var user = firebase.auth().currentUser;

 
  return (
    <section className="hero">
      <nav>
        <img
          className="logo-page slide-in-blurred-left"
          src={navLogo}
          alt={"logo"}
        />
      </nav>
      <div className="link-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <p>Logged in as {firebase.auth().currentUser.email}</p>
      <p>You have uploaded these images</p>
      
    </section>

  );
};

export default Profile;
