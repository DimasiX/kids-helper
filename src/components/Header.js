import React, {Component} from 'react';
import {
  NavLink
} from 'react-router-dom';

class Header extends Component {

  state = {
    isActive: false,
  }

  addActiveClass = () =>{
    this.setState({
      isActive: !this.state.isActive,
    });
    this.setState();
  }

  render = () => {
    return(
      <div className={"header " + this.state.isActive}>
        <div className={"menu-butt " + this.state.isActive} onClick={this.addActiveClass}></div>

        <NavLink className="nav" exact to="/" onClick={this.addActiveClass}>
            <span>Home</span>
        </NavLink>
        <NavLink className="nav" to="/challenges" onClick={this.addActiveClass}>
            <span>Challenges</span>
        </NavLink>
        <NavLink className="nav" to="/about" onClick={this.addActiveClass}>
            <span>About</span>
        </NavLink>
        <NavLink className="nav" to="/progress" onClick={this.addActiveClass}>
            <span>Progress</span>
        </NavLink>
      </div>
    )
  }
}

export default Header;
