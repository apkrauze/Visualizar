import React from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import firebase from 'firebase/app';
import FancyModal from "../comp/fancyModal";
import ShowImage from "./ShowImage";
import fire from 'firebase'



const Profile = ({setSelectedImage, currentUser, handleUpload, handleLogout}) => {
 
console.log(firebase.auth().currentUser)


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
          handleLogout={ handleLogout }
        />
      </div>
      <p><b>Hello! Your displayName is <i>{firebase.auth().currentUser.displayName}</i> !</b></p>
      <p><b>You're logged in with <i>{firebase.auth().currentUser.email}</i> !</b></p>
      <p><b>You have uploaded these images </b></p>
      
    </section>

  );
};

export default Profile;
