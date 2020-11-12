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
    </section>
  );
};

export default Profile;
