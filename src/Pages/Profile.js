import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import useMyImages from "../hooks/useMyImages";
import fire from 'firebase'

const Profile = ({setSelectedImage}) => {
  const { docs } = useMyImages("images");
  const [user, setUser] = useState(null);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) =>{
      if (user) {
        setUser(user);
      }
    },);
  };

  useEffect(() => {
    authListener();
  },);
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
      <p><b>Hello! {user.displayName}</b></p>
      <p><b>You're logged in with !</b></p>
      <p><b>You have uploaded these images  </b></p>
      <div className="img-wrapper">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} >
            <div className="img-box">
              <img src={doc.url} alt="" className="img-contain" onClick={setSelectedImage}/>
              <p>{doc.displayName}</p>
            </div>             
          </div>          
        ))}
    </div>
      
    
  
      
    </section>

  );
};

export default Profile;
