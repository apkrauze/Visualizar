import React from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import firebase from 'firebase/app';
import FancyModal from "../comp/fancyModal";
import ShowImage from "./ShowImage";



const Profile = ({setSelectedImage, currentUser, handleUpload}) => {

 
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
      <p>Hello {firebase.auth().currentUser.displayName}</p>
      
    </section>

  );
};

export default Profile;
