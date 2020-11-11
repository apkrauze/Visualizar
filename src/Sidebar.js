import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="htttp://www.youtube.com">
        Home
      </a>
      <a className="menu-item" href="htttp://www.youtube.com">
        Upload
      </a>
      <a className="menu-item" href="htttp://www.youtube.com">
        Logout
      </a>  
    </Menu>
  );
};