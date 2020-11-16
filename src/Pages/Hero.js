import React, { useState } from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import ShowImage from "./ShowImage";
import FancyModal from "../comp/fancyModal";
import firebase from 'firebase/app'



const Hero = ({ handleLogout }) => {
  const [selectedImage, setSelectedImage] = useState(null)  
  
    
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
    
      </section>
      <div id="page-wrap">
        <ShowImage setSelectedImage={setSelectedImage}/>
        { selectedImage && <FancyModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
      </div>

      
    </section>
  );
};
export default Hero;
