import React, { useState } from "react";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import ShowImage from "./ShowImage";
import FancyModal from "../comp/fancyModal";
import Modal from "../comp//Modal";
import useModal from '../comp/useModal';


const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null)  
  const {isShowing, toggle} = useModal();
    
  return (
    <section className="hero" id="outer-container">
      <div id="page-wrap">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"} 
        />
      </div>
      <nav>
        <img
          className="logo-page slide-in-blurred-left"
          src={navLogo}
          alt={"logo"} onClick={toggle}
        />
        
      </nav>
      <section className="gallery-wrap">
          <h1 className="puff-in-bottom">Gallery</h1>
          <p className="puff-in-bottom">See the latest pictures uploaded to the gallery</p>
    
      </section>
      <div id="page-wrap">
        <ShowImage setSelectedImage={setSelectedImage} /> 
        { selectedImage && <FancyModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
        </div>
        <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      
    </section>
  );
};
export default Hero;
