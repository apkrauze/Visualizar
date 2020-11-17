import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom';

export default ({ handleLogout }) => {
  return (
    <Menu>
      <NavLink activeClassName="active" exact to="/">
        Home
        </NavLink>
      <NavLink activeClassName="active" to="/Profile">
        Profile
        </NavLink>
      <NavLink activeClassName="active" to="/Upload">
        Upload
        </NavLink>
      <a className="menu-item" href="htttp://www.youtube.com">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </a>
    </Menu>
  );
};