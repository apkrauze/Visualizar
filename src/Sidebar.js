import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Profile from './Pages/Profile';
import Upload from './Pages/Upload';
import Hero from './Pages/Hero';

export default ({ handleLogout }) => {
  return (
    <Menu>
      <NavLink activeClassName="active" exact to="/">
        Hero
        </NavLink>
      <NavLink activeClassName="active" to="/Profile">
        Profile
        </NavLink>
      <NavLink activeClassName="active" to="/Upload">
        Upload
        </NavLink>
      <a className="menu-item" href="htttp://www.youtube.com">
        <button onClick={handleLogout}>Logout</button>
      </a>
      {/* <a className="menu-item" href="htttp://www.youtube.com">
        Home
      </a>
      <a className="menu-item" href="htttp://www.youtube.com">
      Upload
      </a>
      <a className="menu-item" href="htttp://www.youtube.com">
       <button onClick={handleLogout}>Logout</button>
      </a>    */}
    </Menu>
  );
};