import React from 'react';
import {
  NavLink
} from 'react-router-dom';

const Header = (props) => {
  return(
    <div className="header hide">
      <div className="menu-butt"></div>

      <NavLink className="nav" exact to="/">
          <span>Home</span>
      </NavLink>
      <NavLink className="nav" to="/challenges">
          <span>Challenges</span>
      </NavLink>
      <NavLink className="nav" to="/about">
          <span>About</span>
      </NavLink>
      <NavLink className="nav" to="/progress">
          <span>Progress</span>
      </NavLink>
    </div>
  )
}

export default Header;
