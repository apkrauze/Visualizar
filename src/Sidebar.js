import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Upload
      </a>
      <a className="menu-item" href="/pizzas">
        Logout
      </a>  
    </Menu>
  );
};