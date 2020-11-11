import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../Sidebar';



const Profile = () => {

  return (
    <section className="hero">
      <nav>

        <h1 className="nav-h1 slide-in-blurred-left"><span className="nav-h1-span">V</span>isualizar</h1>

        {/* <div className="logo-page-contain">
            <img className="logo-page" src={logo} alt={"logo"} /> 
          </div> */}



      </nav>
      <div className="link-container">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      </div>
    </section>

  )
}

export default Profile;