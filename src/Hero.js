import React from 'react';
import Upload from './Upload';
import logo from "./logoBG.png";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h1 className="nav-h1 slide-in-blurred-left"><span className="nav-h1-span">V</span>isualizar</h1>
        {/* <div className="logo-page-contain">
          <img className="logo-page" src={logo} alt={"logo"} /> 
        </div> */}
        <button onClick={handleLogout}>Logout</button>   
        {/* BURGER MENU GOES HERE> */}
       
      </nav>
    </section>
  );
};


export default Hero;
