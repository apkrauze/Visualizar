import React from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import firebase from 'firebase/app';
import useMyImages from "../hooks/useMyImages";

const Profile = ({setSelectedImage}) => {
  const { docs } = useMyImages("images");

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
      <section className="user-profile-section">
      <p>Hello, {firebase.auth().currentUser.displayName}!</p>
      <p>Logged in as: {firebase.auth().currentUser.email}</p>
      </section>
      <div className="user-profile-upload">
        <h3>These are the pictures that you have uploaded:</h3>
      </div>
      <div className="img-wrapper">
      
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} >
            <div className="img-box" onClick={() => setSelectedImage(doc.url)}>
              <img src={doc.url} alt="uploaded image" className="img-contain"/>
              <p>{doc.displayName}</p>
            </div>             
          </div>          
        ))}
    </div>
      
    
  
      
    </section>

  );
};

export default Profile;
