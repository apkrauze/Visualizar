import React from "react";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import Sidebar from "../Sidebar";
import navLogo from "../nav-logo.png";
import Footer from './Footer';
import ShowImage from "./ShowImage";

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero" id="outer-container">
        <video autoPlay muted loop id="myVideo">
                <source src="desktopCover.mp4" type="video/mp4"/>
            </video>
            <div id="page-wrap">
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} handleLogout={handleLogout} />
            </div>
            <nav>
                <img className="logo-page slide-in-blurred-left" src={navLogo} alt={"logo"} />
            </nav>
            <div id="page-wrap">
                <ShowImage />
            </div>
            
        </section>
        
    );
};
export default Hero;
