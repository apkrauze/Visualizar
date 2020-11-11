import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero" id="outer-container">
            <div id="page-wrap">
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} handleLogout={handleLogout} />
            </div>
            <nav>
                <img className="logo-page slide-in-blurred-left" src={navLogo} alt={"logo"} />
            </nav>
        </section>
        
    );
};
export default Hero;
