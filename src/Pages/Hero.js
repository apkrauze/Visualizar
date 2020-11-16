import React, { useState } from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import Footer from "./Footer";
import ShowImage from "./ShowImage";
import FancyModal from "../comp/fancyModal";
import firebase from 'firebase/app'


const Hero = ({ handleLogout, user }) => {
  const [selectedImage, setSelectedImage] = useState(null)  
  //console.log('user=', user)
  console.log(firebase.auth().currentUser)
   
  
  return (
    <section className="hero" id="outer-container">
      <div id="page-wrap">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          handleLogout={handleLogout}
        />
      </div>
      <nav>
        <img
          className="logo-page slide-in-blurred-left"
          src={navLogo}
          alt={"logo"}
        />
      </nav>
      <section className="gallery-wrap">
          <h1 className="puff-in-bottom">Gallery</h1>
          <p className="puff-in-bottom">See the latest pictures uploaded to the gallery</p>
          {user && <p>hello {user.displayName}</p>}
          <p>Hello {firebase.auth().currentUser.displayName}</p>
      </section>
      <div id="page-wrap">
        <ShowImage setSelectedImage={setSelectedImage}/>
        { selectedImage && <FancyModal selectedImage= {selectedImage} setSelectedImage={setSelectedImage}/> }
      </div>
    </section>
  );
};
export default Hero;
