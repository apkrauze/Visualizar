import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";

const Profile = () => {
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
      <video autoPlay muted loop id="myVideo">
                <source src="desktopCover.mp4" type="video/mp4"/>
            </video>
    </section>
  );
};

export default Profile;
