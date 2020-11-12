import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import Footer from "./Footer";

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
      <video width="320" height="240" controls autoPlay>
        <source src="desktopCover.mp4" type="video/mp4"   />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
