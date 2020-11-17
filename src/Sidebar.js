import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import fire from './config/fire';

export default () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  return (
    <Menu>
      
      <NavLink activeClassName="active" to="/Hero">
        Home
        </NavLink>
      <NavLink activeClassName="active" to="/Profile">
        Profile
        </NavLink>
      <NavLink activeClassName="active" to="/Upload">
        Upload
        </NavLink>
        <NavLink activeClassName="active" exact to="/LoginPage">
        <a className="menu-item">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </a>
        </NavLink>
        
    </Menu>
  );
};