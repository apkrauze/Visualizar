import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import useMyImages from "../hooks/useMyImages";
import useFirebaseAuthentication from "../hooks/userAuth";

const Profile = ({setSelectedImage}) => {
  const { docs } = useMyImages("images");
  const user = useFirebaseAuthentication();
  
  if(user === null){ 
    return null  
  }


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
      <p>Hello, {user.displayName}!</p>
      <p>Logged in as: {user.email}</p>
      </section>
      <div className="user-profile-upload">
        <h3>These are the pictures that you have uploaded:</h3>
      </div>
      <div className="img-wrapper">
      
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} >
            <div className="img-box" >
              <img src={doc.url} alt="" className="img-contain"/>
              <p>You uploaded this picture, {doc.displayName}</p>
              {/* <p>{doc.description}</p> */}            
            </div>             
          </div>          
        ))}
        
    </div>
      
    
  
      
    </section>

  );
};

export default Profile;
