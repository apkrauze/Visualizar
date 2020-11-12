import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import Footer from "./Footer";
import ShowImage from "./ShowImage";

const Hero = ({ handleLogout }) => {
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
          <h1>Gallery</h1>
          <p>See the lastest pictures uploaded to the gallery</p>
      </section>
      <div id="page-wrap">
        <ShowImage />
      </div>
    </section>
  );
};
export default Hero;
