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
      <p><b>Hello!  <i>{firebase.auth().currentUser.displayName}</i> !</b></p>
      <p><b>You're logged in with <i>{firebase.auth().currentUser.email}</i> !</b></p>
      <p><b>You have uploaded these images  </b></p>
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
